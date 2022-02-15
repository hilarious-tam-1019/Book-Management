const axios = require('axios');
const books = require('../../controllers/books')
const sinon = require('sinon');
const middlewares = require('../../middlewares/middlewares');


//testing server route
describe("Server ", () => {
  var server
  let sessionStub
  let homeViewStub
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
    var data= {}
    beforeEach(()=> {})
    // it("should return 200", (done)=> {
    //   try {
    //     const data_file = axios.get('http://localhost:3000/home')
    //     .then((response) => {
    //       data.status = response.status
    //       expect(data.status).toBe(200)
    //       done();
    //     })
    //   } catch(err) {
    //     console.log(err)
    //   }  
    // })
    it("should rendered", (done) => {
      try {
        var req = {
          session: {
            role: "admin"
          }
        }
        var res = {
          render: function(req) {
            if(req.session.role == 'admin')
            {
              return true
            }
          } 
        }
        const result = books.homeView(req,res)
        console.log(result)
        done()
      } catch(err) {
        console.log(err)
      }
    })    
  })
})
