const axios = require('axios');
const books = require('../../controllers/books')
const sinon = require('sinon');
const middlewares = require('../../middlewares/middlewares');

//testing server route
describe("Server ", () => {
  var server
  let sessionStub
  beforeAll(()=> {
    sessionStub = sinon.stub(middlewares, 'redirectLogin').callsFake(function(req, res, next) {
      console.log('sessionStub');
      next();
    })
    server = require('../../server')
  })
  afterAll(() => { 
    server.close();
    sessionStub.restore();
  })

  describe("GET /home", ()=> {
    it("should render index for admin", (done) => {
      try {
        var req = {
          session: {
            role: "admin"
          }
        }
        var res = {
          render: function(a, b) {
            expect(a).toBe('index')
            expect(b).toBeDefined
          } 
        }
        books.homeView(req,res)
        done()
      } catch(err) {
        console.log(err)
      }
    })     
  })
  describe("GET /home", ()=> {
    it("should render index for user", (done) => {
      try {
        var req = {
          session: {
            role: "user"
          }
        }
        var res = {
          render: function(a, b) {
            expect(a).toBe('index')
            expect(b).toBeDefined
          } 
        }
        books.homeView(req,res)
        done()
      } catch(err) {
        console.log(err)
      }
    })     
  })
  
  
})


