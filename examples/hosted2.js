
const rec = require(rec);

var list = [];

rec.csv(rec.request.reader, ",", "name, age, dob").tee(rec.stateless(function ({name, age}) {
    var it = {};
    it[name] = age;
    list.push(it);
})).to(rec.dummy());

rec.response.outputStream.print(JSON.stringify(list));