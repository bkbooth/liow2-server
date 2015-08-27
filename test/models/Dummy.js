var utils = require('../../utils/tests'),
    expect = require('chai').expect,
    Dummy = require('../../models/Dummy');

describe('Dummy model', function __describe() {
  before(utils.dbConnect);
  after(utils.dbDisconnect);

  afterEach(function __afterEach(done) {
    Dummy.remove({}, function __dummyRemove(err) {
      if (err) { return done(err); }

      done();
    });
  }); // afterEach()

  it('should create a new Dummy', function __it(done) {
    var dummy = new Dummy({ name: 'test' });

    expect(dummy).to.be.an('object').and.an.instanceof(Dummy);
    expect(dummy.name).to.equal('test');

    done();
  }); // it()
}); // describe()
