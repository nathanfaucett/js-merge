var tape = require("tape"),
    merge = require("../src/index");


tape("should merge out with objects members", function(assert) {

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
    assert.end();
});
