const axios = require('axios');
const books = require('../../controllers/books')
const sinon = require('sinon');
const middlewares = require('../../middlewares/middlewares');
const { response } = require('express');

//testing server route
// describe("Server ", () => {
//   var server
//   let sessionStub
//   beforeEach(()=> {
    // sessionStub = sinon.stub(middlewares, 'redirectLogin').callsFake(function(req, res, next) {
    //   console.log('sessionStub');
    //   next();
    // })
//     server = require('../../server')
//   })
//   afterEach(() => { 
//     sessionStub.restore();
//   })

//   it("should render index for admin", (done) => {
//     try {
//       var req = {
//         session: {
//           role: "admin"
//         }
//       }
//       var res = {
//         render: function(a, b) {
//           expect(a).toBe('index')
//           expect(b).toBeDefined
//         } 
//       }
//       books.getBookCacheAdmin(req,res)
//       done()
//     } catch(err) {
//       console.log(err)
//     }
//   })

//   it("should render index for user", (done) => {
//     try {
//       var req = {
//         session: {
//           role: "user"
//         }
//       }
//       var res = {
//         render: function(a, b) {
          
//           expect(a).toBe('index')
//           expect(b).toBeDefined
//         } 
//       }
//       books.getBookCacheUser(req,res)
//       done()
//     } catch(err) {
//       console.log(err)
//     }
// }) 

//   it("should return 404 for unidentified role", (done) => {
//     try {
//       var req = {
//         session: {
//           role: "asdasdw"
//         }
//       }
//       var res = {
//         status: function(a) {
//           expect(a).toBe(404)
//         }
//       }
//        books.unidentifiedUser(req,res)
//       done()
//     } catch(err) {
//       console.log(err)
//     }
// })
//   it("should return 404 for null", (done) => {
//     try {
//       var req = {
//         session: {
//           role: null
//         }
//       }
//       var res = {
//         status: function(a) {
//         expect(a).toBe(404)
//       }
//     }
//       books.unidentifiedUser(req,res)
//       done()
//   } catch(err) {
//     console.log(err)
//   }
// })
// })

describe("Route ", () => {
  var server
  beforeAll(()=> {
    sessionStub = sinon.stub(middlewares, 'redirectLogin').callsFake(function(req, res, next) {
      console.log('sessionStub');
      next();
    })
    getBookCacheAdminStub = sinon.stub(books, 'getBookCacheAdmin').callsFake(function(req,res,next) {
      if(req.session.admin) res.send('admin')
      else next()
    })
    getBookCacheUserStub = sinon.stub(books, 'getBookCacheUser').callsFake(function(req,res,next) {
      if(req.session.user) res.send('user')
      else next()
    })
    unidentifiedUser = sinon.stub(books, 'unidentifiedUser').callsFake(function(req,res,next) {
      res.send('unidentified')
    })
    server = require('../../server')
  })
  afterAll(()=> {
    server.close()
  })
  describe('Get /', ()=> {
    beforeEach((done) => {
      try {
        const data_file = axios.get("http://localhost:3000/home", {
          auth: {
            email: 'superman1011999@gmail.com',
            password: 'funnytam1999'
          },
        })
        .then((response)=> {
          console.log(response)
          done()
        })

      } catch (e) {
        console.error('axios.get failed to execute');
        throw e;  // throwing errors should fail the spec.
      }
    });
    it('should be expected', (done)=> {
      
      done()
    })
  })
})
