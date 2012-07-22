/**
* An implementation of an HTTPServer.
* @class Titanium.Network.HTTPServer
* @member Titanium.Network
*/
Titanium.Network.HTTPServer = {
/**
* bind this server to a port on a specific interface
* @param {Number} port port to bind on
* @param {String} address (optional) address to bind to
* @param {Method} callback callback for server logic (in seperate thread)
* @return {String}
* @member Titanium.Network.HTTPServer
*/
bind: function(port, address, callback){},

/**
* close this server
* @return {String}
* @member Titanium.Network.HTTPServer
*/
close: function(){},

/**
* check to see if this server socket is closed
* @return {Boolean}
* @member Titanium.Network.HTTPServer
*/
isClosed: function(){}}

