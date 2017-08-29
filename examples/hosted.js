
const rec = require("rec");

rec.response.outputStream.print("You are visiting: " + rec.request.requestURI);