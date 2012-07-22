/**
* An object representing a single HTTP server request.
* @class Titanium.Network.HTTPServerRequest
* @member Titanium.Network
*/
Titanium.Network.HTTPServerRequest = {
/**
* the content length of this request
* @return {Number}
* @member Titanium.Network.HTTPServerRequest
*/
getContentLength: function(){},

/**
* get an HTTP header value from this request
* @param {String} header the header of the request
* @param {String} header the header of the request
* @return {String}
* @member Titanium.Network.HTTPServerRequest
*/
getHeader: function(header, header){},

/**
* get the content type of this request
* @return {String}
* @member Titanium.Network.HTTPServerRequest
*/
getContentType: function(){},

/**
* get the HTTP method of this request
* @return {String}
* @member Titanium.Network.HTTPServerRequest
*/
getMethod: function(){},

/**
* get an HTTP header value from this request
* @return {String}
* @member Titanium.Network.HTTPServerRequest
*/
getHeaders: function(){},

/**
* get the HTTP version of this request
* @return {String}
* @member Titanium.Network.HTTPServerRequest
*/
getVersion: function(){},

/**
* read content from this request
* @param {Number} length (optional) the number of bytes to read (default 8096)
* @return {String}
* @member Titanium.Network.HTTPServerRequest
*/
read: function(length){},

/**
* check to see if this request has an HTTP header
* @param {String} header the header of the request to check
* @return {Boolean}
* @member Titanium.Network.HTTPServerRequest
*/
hasHeader: function(header){},

/**
* get the URI of this request
* @return {String}
* @member Titanium.Network.HTTPServerRequest
*/
getURI: function(){}}

