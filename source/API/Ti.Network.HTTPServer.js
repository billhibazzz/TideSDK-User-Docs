/**
* An implementation of an HTTPServer.
* @class Ti.Network.HTTPServer
* @member Ti.Network
*/
Ti.Network.HTTPServer = {
/**
* bind this server to a port on a specific interface
* @param {Number} port port to bind on
* @param {String} address (optional) address to bind to
* @param {Method} callback callback for server logic (in seperate thread)
* @return {String}
* @member Ti.Network.HTTPServer
*/
bind: function(port, address, callback){},

/**
* close this server
* @return {String}
* @member Ti.Network.HTTPServer
*/
close: function(){},

/**
* check to see if this server socket is closed
* @return {Boolean}
* @member Ti.Network.HTTPServer
*/
isClosed: function(){}}

