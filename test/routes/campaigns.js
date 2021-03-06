var testUtils = require('../../utils/tests'),
    request = require('supertest-as-promised'),
    expect = require('chai').expect,
    app = require('../../app');

var ObjectId = require('mongoose').Types.ObjectId,
    Campaign = require('../../models/Campaign'),
    Group = require('../../models/Group');

var validCampaign = {
  deeds: [{ deed: ObjectId() }]
};

describe('/campaigns', () => {
  before(() => {
    return testUtils.dbConnect()
      .then(() => testUtils.saveUser(testUtils.credentials))
      .then(testUtils.getApiToken)
      .then(token => request(app)
        .post('/groups')
        .set('Authorization', `Bearer ${token}`)
        .send({ name: 'Group' })
        .then(res => (validCampaign.group = res.body._id)));
  }); // before()
  after(() => {
    return Group.remove({})
      .then(testUtils.removeUsers)
      .then(testUtils.dbDisconnect);
  }); // after()
  afterEach(() => Campaign.remove({}));

  describe('/', () => {
    it('GET should return status 200 and an empty array', () => {
      return request(app)
        .get('/campaigns')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(res => expect(res.body).to.be.an('array').and.to.have.lengthOf(0));
    }); // it()

    it('GET should return status 200 and an array', () => {
      return new Campaign(validCampaign).save()
        .then(() => request(app)
          .get('/campaigns')
          .expect(200)
          .expect('Content-Type', /json/)
          .expect(res => expect(res.body).to.be.an('array').and.to.have.lengthOf(1)));
    }); // it()

    it('POST invalid data should return status 400 and an error message', () => {
      return testUtils.getApiToken()
        .then(token => request(app)
          .post('/campaigns')
          .set('Authorization', `Bearer ${token}`)
          .send({ group: validCampaign.group })
          .expect(400)
          .expect('Content-Type', /json/)
          .expect(res => expect(res.body).to.have.property('message', 'Campaign validation failed')));
    }); // it()

    it('POST valid data should return status 201 and the created Campaign', () => {
      return testUtils.getApiToken()
        .then(token => request(app)
          .post('/campaigns')
          .set('Authorization', `Bearer ${token}`)
          .send(validCampaign)
          .expect(201)
          .expect('Content-Type', /json/)
          .expect('Location', /campaigns/)
          .expect(res => expect(res.body).be.be.an('object').and.to.have.property('_id')));
    }); // it()
  }); // describe()

  describe('/:campaign', () => {
    var campaignId = null;

    beforeEach(() => {
      return new Campaign(validCampaign).save()
        .then(campaign => (campaignId = campaign._id));
    }); // beforeEach()

    it('GET invalid ID should return status 400 and an error message', () => {
      return request(app)
        .get('/campaigns/invalid')
        .expect(400)
        .expect('Content-Type', /json/)
        .expect(res => expect(res.body).to.have.property('message', 'Invalid campaign'));
    }); // it()

    it('GET non-existent ID should return status 404 and an error message', () => {
      return request(app)
        .get(`/campaigns/${ObjectId()}`)
        .expect(404)
        .expect('Content-Type', /json/)
        .expect(res => expect(res.body).to.have.property('message', 'Not Found'));
    }); // it()

    it('GET valid ID should return status 200 and a Campaign', () => {
      return request(app)
        .get(`/campaigns/${campaignId}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(res => expect(res.body).to.have.property('_id', String(campaignId)));
    }); // it()

    it('PUT extra data should be ignored', () => {
      return testUtils.getApiToken()
        .then(token => request(app)
          .put(`/campaigns/${campaignId}`)
          .set('Authorization', `Bearer ${token}`)
          .send({ extra: 'Extra data' })
          .expect(200)
          .expect('Content-Type', /json/)
          .expect(res => {
            expect(res.body).to.have.property('_id', String(campaignId));
            expect(res.body).to.not.have.property('extra');
          }));
    }); // it()

    it('PUT valid data should return status 200 and update the Campaign', () => {
      return Campaign.findById(campaignId).exec()
        .then(campaign => expect(campaign).to.have.property('active', true))
        .then(testUtils.getApiToken)
        .then(token => request(app)
          .put(`/campaigns/${campaignId}`)
          .set('Authorization', `Bearer ${token}`)
          .send({ active: false })
          .expect(200)
          .expect('Content-Type', /json/)
          .expect(res => {
            expect(res.body).to.have.property('_id', String(campaignId));
            expect(res.body).to.have.property('modified');
            expect(res.body).to.have.property('active', false);
          }));
    }); // it()

    it('PATCH extra data should be ignored', () => {
      return testUtils.getApiToken()
        .then(token => request(app)
          .patch(`/campaigns/${campaignId}`)
          .set('Authorization', `Bearer ${token}`)
          .send([{ op: 'add', path: '/extra', value: 'data' }])
          .expect(204)
          .expect(res => expect(res.body).to.be.empty)
          .then(() => Campaign.findById(campaignId).exec())
          .then(campaign => expect(campaign).to.not.have.property('extra')));
    }); // it()

    it('PATCH valid data should return status 204 and update the Campaign', () => {
      return Campaign.findById(campaignId).exec()
        .then(campaign => expect(campaign).to.have.property('active', true))
        .then(testUtils.getApiToken)
        .then(token => request(app)
          .patch(`/campaigns/${campaignId}`)
          .set('Authorization', `Bearer ${token}`)
          .send([{ op: 'replace', path: '/active', value: false }])
          .expect(204)
          .expect(res => expect(res.body).to.be.empty)
          .then(() => Campaign.findById(campaignId).exec())
          .then(campaign => expect(campaign).to.have.property('active', false)));
    }); // it()
  }); // describe()
}); // describe()
