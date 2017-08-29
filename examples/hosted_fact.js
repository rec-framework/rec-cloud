
const rec = require("rec");
const rest = require("rec/rest");

var request = rec.request;
var response = rec.response;

var num = request.getParameter("num");

var result;
if (num === null || parseInt(num) <= 0 || parseInt(num) >= 20) {
    result = 1;
} else {
    num = parseInt(num);
    var resp = rest.get1(request.requestURL + "?num=" + (num-1));

    result = num * resp.get("result");
}
response.contentType = "application/json; charset=UTF-8";

response.outputStream.print(JSON.stringify({
    result: result
}));
