var assert = require("assert"),
    merge = require("../src/index");


describe("merge(out, ...objects)", function() {
    it("should merge out with objects members", function() {

        assert.deepEqual(merge({
            name: "Bob",
            age: null
        }, {
            name: null
        }, {
            age: 42
        }), {
            name: "Bob",
            age: 42
        });
    });
});
