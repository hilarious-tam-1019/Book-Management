const axios = require('axios');


describe("Some test for ", () => {
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
});