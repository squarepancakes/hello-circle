const app = require("./app");
const request = require("supertest")

describe("Server", () => {

    it("GET / should return Hello World", async () => {
        const response = await request(app).get("/");
        expect(response.text).toBe("Hello Elephant!")
    })
})