const axios = require('axios');
const books = require('../../controllers/books')

//testing server route
describe("Server ", () => {
  var server
  beforeAll(()=> {
    server = require('../../server')
  })
  afterAll(() => {
    server.close();
  })
  describe("GET /", ()=> {
    var data = {}
    beforeEach(async () => {  
      try {
          const data_file = await axios.get("http://localhost:3000/")
          .then((response)=>{
            data.status = response.status
          });
        } catch (err) {
          console.error('axios.get failed to execute');
          throw err;  // throwing errors should fail the spec.
        }
      });
      it("Status 200 ", async () => {
        // .getText returns a Promise<string> so you'll need to await it
        // to get the string value.
        expect(data.status).toBe(200);
      });
  })
  describe("GET /home", ()=> {
    var data = {}
    beforeEach(async () => {  
      try {
          const data_file = await axios.get("http://localhost:3000/home")
          .then((response)=>{
            data.status = response.status
          });
        } catch (err) {
          console.error('axios.get failed to execute');
          throw err;  // throwing errors should fail the spec.
        }
      });
      it("Status 200 ", async () => {
        // .getText returns a Promise<string> so you'll need to await it
        // to get the string value.
        expect(data.status).toBe(200);
      });
  })
  describe("GET /create", ()=> {
    var data = {}
    beforeEach(async () => {  
      try {
          const data_file = await axios.get("http://localhost:3000/create")
          .then((response)=>{
            data.status = response.status
          });
        } catch (err) {
          console.error('axios.get failed to execute');
          throw err;  // throwing errors should fail the spec.
        }
      });
      it("Status 200 ", async () => {
        // .getText returns a Promise<string> so you'll need to await it
        // to get the string value.
        expect(data.status).toBe(200);
      });
  })
  describe("GET /signup", ()=> {
    var data = {}
    beforeEach(async () => {  
      try {
          const data_file = await axios.get("http://localhost:3000/signup")
          .then((response)=>{
            data.status = response.status
          });
        } catch (err) {
          console.error('axios.get failed to execute');
          throw err;  // throwing errors should fail the spec.
        }
      });
      it("Status 200 ", async () => {
        // .getText returns a Promise<string> so you'll need to await it
        // to get the string value.
        expect(data.status).toBe(200);
      });
  })
  describe("GET /login", ()=> {
    var data = {}
    beforeEach(async () => {  
      try {
          const data_file = await axios.get("http://localhost:3000/login")
          .then((response)=>{
            data.status = response.status
          });
        } catch (err) {
          console.error('axios.get failed to execute');
          throw err;  // throwing errors should fail the spec.
        }
      });
      it("Status 200 ", async () => {
        // .getText returns a Promise<string> so you'll need to await it
        // to get the string value.
        expect(data.status).toBe(200);
      });
  })
});

//testing login credentials
describe("User Input ", () => {
  
})