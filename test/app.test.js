const request = require('supertest');
const app = require('../index'); 

let server; // Declare a variable to hold the server instance

beforeAll((done) => {
    server = app.listen(3000, done); // Start the server before the tests run
});

afterAll((done) => {
    server.close(done); // Close the server after the tests are finished
});

describe('GET /', () => {
    it('should return Hello from Keyur', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Hello from Keyur');
    });
});
