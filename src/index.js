var keys = require("keys"),
    isNullOrUndefined = require("is_null_or_undefined");


module.exports = merge;


function merge(out) {
    var i = 0,
        il = arguments.length - 1;

    while (i++ < il) {
        baseMerge(out, arguments[i]);
    }

    return out;
}

function baseMerge(a, b) {
    var objectKeys = keys(b),
        i = -1,
        il = objectKeys.length - 1,
        key, value;

    while (i++ < il) {
        key = objectKeys[i];

        if (!isNullOrUndefined((value = b[key]))) {
            a[key] = value;
        }
    }
}
