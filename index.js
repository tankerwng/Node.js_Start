var server = require("D:\\proj\\nodeJS_start\\server");
var router = require("D:\\proj\\nodeJS_start\\router");
var requestHandlers = require("D:\\proj\\nodeJS_start\\requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);