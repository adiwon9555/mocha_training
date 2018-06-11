const expect=require("expect");

const app=require("./app.js");
describe('normal',()=>{
    it("should add two numbers",(done)=>{
        var result=app.add(11,33,(result)=>{
            if(result!=44)
            {
                throw new Error(`Expected 44 but got ${result}`);
            }
            done();
        });
        
    })
})
describe('expect',()=>{
it("should add two numbers",(done)=>{
    var result=app.add(11,33,(result)=>{
        expect(result).toBe(44);
        done();
    });
    
})
})