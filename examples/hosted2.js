
const {csv, request, response, stateless, dummy} = require("rec");

var list = [];

csv(request().reader, ",", "name, age, dob").tee(stateless(function ({name, age}) {
    var it = {};
    it[name] = age;
    list.push(it);
})).to(dummy());

response().outputStream.print(JSON.stringify(list));