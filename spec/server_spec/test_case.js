const axios = require('axios');
const books = require('../../controllers/books')
const sinon = require('sinon');
const middlewares = require('../../middlewares/middlewares');



//testing API
describe("API testing ", () => {
  var server
  let sessionStub
  let getBookCacheAdminStub
  let getBookCacheUserStub
  let unidentifiedUserStub
  beforeEach((done)=> {
    sessionStub = sinon.stub(middlewares, 'redirectLogin').callsFake(function(req, res, next) {
      console.log('sessionStub');
      next();
    })

    server = require('../../server')
    done()
  })
  afterEach((done) => { 
    sessionStub.restore();
    getBookCacheAdminStub.restore()
    getBookCacheUserStub.restore()
    unidentifiedUserStub.restore()
    done()
  })

  it("should return true for admin", (done) => {
    try {
      getBookCacheAdminStub =sinon.stub(books, 'getBookCacheAdmin').callsFake(function(req,res) {
        expect(req.session.role=='admin').toEqual(true)
      })
      
      getBookCacheUserStub =sinon.stub(books, 'getBookCacheUser').callsFake(function(req,res,next) {
        expect(req.session.role=='user').toEqual(false)
      
      })
    
      unidentifiedUserStub =sinon.stub(books, 'unidentifiedUser').callsFake(function(req,res,next) {
        expect(!req.session.role||req.session.role!='admin'||req.session.role!='user').toEqual(false)
      })
      var req = {
        session: {
          role: "admin"
        }
      }
      var res = {function(done) {
        done()
      }} 
      books.getBookCacheAdmin(req,res)
      done()
    } catch(err) {
      console.log(err)
    }
})

  it("should return true for user", (done) => {
    try {  
      getBookCacheAdminStub =sinon.stub(books, 'getBookCacheAdmin').callsFake(function(req,res) {
        expect(req.session.role=='admin').toEqual(false)
      })
      
      getBookCacheUserStub =sinon.stub(books, 'getBookCacheUser').callsFake(function(req,res,next) {
        expect(req.session.role=='user').toEqual(true)
      
      })
    
      unidentifiedUserStub =sinon.stub(books, 'unidentifiedUser').callsFake(function(req,res,next) {
        expect(!req.session.role||req.session.role!='admin'||req.session.role!='user').toEqual(false)
      })
      var req = {
        session: {
          role: "user"
        }
      }
      var res = {function(done) {
        done()
      }} 
      books.getBookCacheUser(req,res)
      done()
    } catch(err) {
      console.log(err)
    }
}) 

  it("should return true for unidentified role", (done) => {
    try {
      getBookCacheAdminStub =sinon.stub(books, 'getBookCacheAdmin').callsFake(function(req,res) {
        expect(req.session.role=='admin').toEqual(false)
      })
      
      getBookCacheUserStub =sinon.stub(books, 'getBookCacheUser').callsFake(function(req,res,next) {
        expect(req.session.role=='user').toEqual(false)
      
      })
    
      unidentifiedUserStub =sinon.stub(books, 'unidentifiedUser').callsFake(function(req,res,next) {
        expect(!req.session.role||req.session.role!='admin'||req.session.role!='user').toEqual(true)
      })
      var req = {
        session: {
          role: "abc"
        }
      }
      var res = {function(done) {
        done()
      }} 
       books.unidentifiedUser(req,res)
      done()
    } catch(err) {
      console.log(err)
    }
})
  it("should return true for null", (done) => {
    try {
      getBookCacheAdminStub =sinon.stub(books, 'getBookCacheAdmin').callsFake(function(req,res) {
        expect(req.session.role=='admin').toEqual(false)
      })
      
      getBookCacheUserStub =sinon.stub(books, 'getBookCacheUser').callsFake(function(req,res,next) {
        expect(req.session.role=='user').toEqual(false)
      
      })
    
      unidentifiedUserStub =sinon.stub(books, 'unidentifiedUser').callsFake(function(req,res,next) {
        expect(!req.session.role||req.session.role!='admin'||req.session.role!='user').toEqual(true)
      })
      
      var req = {
        session: {
          role: undefined
        }
      }
      var res = {function(done) {
        done()
      }} 
      books.unidentifiedUser(req,res)
      done()
  } catch(err) {
    console.log(err)
  }
})
})


//testing server route
// describe("Route ", () => {
//   var server
//   let sessionStub

//   describe('Get /', ()=> {
//     beforeEach((done) => {
//       try {
//         axios.get("http://localhost:3000/home")
//         .then((response)=> {
//           console.log(response)
          
//         })
//         done()
//       } catch (e) {
//         console.error('axios.get failed to execute');
//         throw e;  // throwing errors should fail the spec.
//       }
//     });
//     it('should be expected', ()=> {
      
      
      
//     })
//   })
// })
