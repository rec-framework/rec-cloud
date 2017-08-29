
const rec = require("rec");

const request = rec.request;
const response = rec.response;

response.contentType="text/html; charset=UTF-8";

response.writer.write(
<html>
    <head>
        <title>Hello</title>
        <script type="text/javascript">
        (function() &#x7B; alert("hello {request.getParameter("name")}"); &#x7D;)();
        </script>
    </head>
    <body>
        <h1 align="center">Hello {request.getParameter("name")}!</h1>
    </body>
</html>
);
