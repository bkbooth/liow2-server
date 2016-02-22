var _ = require('lodash'),
    testUtils = require('../../utils/tests'),
    credentials = testUtils.credentials,
    expect = require('chai').expect,
    User = require('../../models/User');

describe('User', () => {
  before(testUtils.dbConnect);
  after(testUtils.dbDisconnect);
  afterEach(testUtils.removeUsers);

  describe('#save()', () => {
    it('should require an email address', () => {
      return new User().save()
        .catch(err => {
          expect(err).to.exist.and.to.have.property('name', 'ValidationError');
          expect(err).to.have.deep.property('errors.email.kind', 'required');
        });
    }); // it()

    it('should return a validation error for duplicate email', () => {
      return new User(credentials).save()
        .then(() => {
          return new User(credentials).save()
            .catch(err => {
              expect(err).to.exist.and.to.have.property('name', 'ValidationError');
              expect(err).to.have.deep.property('errors.email.message', 'Email is already registered');
            });
        });
    }); // it()

    it('should hash password on save', () => {
      return new User(credentials).save()
        .then(user => expect(user.password).to.exist.and.not.to.equal(credentials.password));
    }); // it()

    it('should not hash if no password is set', () => {
      return new User(_.omit(credentials, 'password')).save()
        .then(user => expect(user.password).to.not.exist);
    }); // it()
  }); // describe()

  describe('.name', () => {
    it('virtual property should concatenate firstName and lastName if both set', () => {
      return new User(credentials).save()
        .then(user => expect(user).to.have.property('name', `${credentials.firstName} ${credentials.lastName}`));
    }); // it()

    it('virtual property should return just firstName or lastName if only one set', () => {
      return new User(_.omit(credentials, 'lastName')).save()
        .then(user => {
          expect(user).to.have.property('name', credentials.firstName);

          user.firstName = void 0;
          user.lastName = credentials.lastName;
          return user.save()
            .then(user => expect(user).to.have.property('name', credentials.lastName));
        });
    }); // it()
  }); // describe()

  describe('#validatePassword()', () => {
    beforeEach(() => testUtils.saveUser(credentials));

    it('should return true when password is correct', () => {
      return User.findOne({ email: credentials.email })
        .then(user => user.validatePassword(credentials.password))
        .then(result => expect(result).to.be.true);
    }); // it()

    it('should return false when password is incorrect', () => {
      return User.findOne({ email: credentials.email })
        .then(user => user.validatePassword('wrongpassword'))
        .then(result => expect(result).to.be.false);
    }); // it()

    it('should return false when user has no password', () => {
      return User.findOne({ email: credentials.email })
        .then(user => {
          user.password = void 0;
          return user.save();
        })
        .then(user => user.validatePassword(credentials.password))
        .then(result => expect(result).to.be.false);
    }); // it()
  }); // describe()

  describe('#toJSON()', () => {
    it('should not disclose password or superAdmin', () => {
      return new User(credentials).save()
        .then(user => {
          expect(user).to.have.property('password');
          expect(user).to.have.property('superAdmin');
          expect(user.toJSON()).to.not.have.property('password');
          expect(user.toJSON()).to.not.have.property('superAdmin');
        });
    }); // it()
  }); // describe()

  describe('#findOrCreate()', () => {
    it('should return an existing user', () => {
      var user = null;
      return new User(credentials).save()
        .then(newUser => {
          user = newUser;
          return User.findOrCreate(credentials);
        })
        .then(foundUser => {
          expect(foundUser).to.exist.and.to.be.an.instanceof(User);
          expect(foundUser.id).to.equal(user.id);
          expect(foundUser.email).to.equal(credentials.email);
        });
    }); // it()

    it('should create a new user', () => {
      return User.findOne({ email: credentials.email })
        .exec()
        .catch(err => {
          expect(err).to.exist.and.to.have.property('message', 'Not Found');

          return User.findOrCreate(credentials)
            .then(user => {
              expect(user).to.exist.and.to.be.an.instanceof(User);
              expect(user.email).to.equal(credentials.email);
            });
        });
    }); // it()
  }); // describe()

  describe('#getFilter()', () => {
    it('should return an array of strings', () => {
      expect(User.getFilter()).to.be.an('array').and.have.length.above(0);
    }); // it()
  }); // describe()
}); // describe()
