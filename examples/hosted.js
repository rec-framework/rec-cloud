
const {request, response} = require("rec");

response().outputStream.print("You are visiting: " + request().requestURI);