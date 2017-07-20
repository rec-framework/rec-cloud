
const {request, response, get} = require("rec");

var num = request().getParameter("num");

var result;
if (num === null || parseInt(num) <= 0) {
    result = 1;
} else {
    num = parseInt(num);
    var resp = get(request().requestURL + "?num=" + (num-1));

    result = num * resp.get("result");
}
response().contentType = "application/json; charset=UTF-8";

response().outputStream.print(JSON.stringify({
    result: result
}));
