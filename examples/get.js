
const rec = require("rec");
const rest = require("rec/rest");

rec.report(rest.get1("http://localhost:8080/api/resource/10"));