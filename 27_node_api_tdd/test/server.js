//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('Books API', () => {
  
  describe('GET /', () => {
    it('should return 200/OK', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });

  describe('GET /books', () => {
    it('should return an array of books', (done) => {
      chai.request(server)
        .get('/books')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });
    it('should return an array of hashes with id, title', (done) => {
      chai.request(server)
        .get('/books')
        .end((err, res) => {
          let firstBook = res.body[0];
          firstBook.should.be.a('object');
          firstBook.should.have.own.property('id');
          firstBook.should.have.own.property('title');
          done();
        });
    });
  });

});
