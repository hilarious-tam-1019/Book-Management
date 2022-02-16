const axios = require('axios');
const books = require('../../controllers/books')
const sinon = require('sinon');
const middlewares = require('../../middlewares/middlewares');


//testing server route
describe("Server ", () => {
  var server
  let sessionStub
  let mockHomeView
  beforeAll(()=> {
    sessionStub = sinon.stub(middlewares, 'redirectLogin').callsFake(function(req, res, next) {
      console.log('sessionStub');
      next();
    })
    getBookCacheAdminStub = sinon.stub(books.homeView,'')
    server = require('../../server')
  })
  afterAll(() => { 
    server.close();
    sessionStub.restore();
  })

  describe("GET /home", ()=> {
    var data= {}
    beforeEach(()=> {
      
    })
    it("should rendered", (done) => {
      try {
        var req = {
          session: {
            role: "admin"
          }
        }
        var res = {
          render: function(a, b) {
            
            console.log('a', a);
            console.log('b', b);
            // if(req.session.role == 'admin')
            // {
            //   return true
            // }
          } 
        }

        books.homeView(req,res)
        console.log(result)
        done()
      } catch(err) {
        console.log(err)
      }
    })    
  })
})
