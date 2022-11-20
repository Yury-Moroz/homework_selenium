import superagent from "superagent"
describe("my first story", function (){
    test("my first test case", async () =>{
        const response = await superagent.get("https://reqres.in/api/users?page=2")
        expect(response.status).toBe(200)
     });
});
describe("my second story", function (){
    test("my second test case", async () =>{
        const response = await superagent.get("https://reqres.in/api/users/2")
        expect(response.status).toBe(200)
    });
});
describe("my third story", function (){
    test("my third test case", async () =>{
        const response = await superagent.get("https://reqres.in/api/users?delay=3")
        expect(response.status).toBe(200)
    });
});
describe("my fourth story", function (){
    test("my fourth test case", async () =>{
        const response = await superagent.get("https://reqres.in/api/unknown")
        expect(response.status).toBe(200)
    });
});
describe("my fifth story", function (){
    test("my fifth test case", async () =>{
        const response = await superagent.get("https://reqres.in/api/unknown/2")
        expect(response.status).toBe(200)
    });
});
describe("my sixth story", function (){
    test("my sixth test case", async () =>{
        const response = await superagent.put("https://reqres.in/api/users/2")
        expect(response.status).toBe(200)
    });
});
describe("my seventh story", function (){
    test("my seventh test case", async () =>{
        const response = await superagent.patch("https://reqres.in/api/users/2")
        expect(response.status).toBe(200)
    });
});
describe("my eighth story", function (){
    test("my eighth test case", async () =>{
        const response = await superagent.delete("https://reqres.in/api/users/2")
        expect(response.status).toBe(204)
    });
});
describe("my ninth story", function (){
    test("my ninth test case", async () =>{
        const response = await superagent.post("https://reqres.in/api/users2")
        expect(response.status).toBe(201)
    });
});
describe("my tenth story", function (){
    test("my tenth test case", async () =>{
        const response = await superagent.post("https://reqres.in/api/login")
        expect(response.status).toBe(400)
    });
});