/**
* A module for network functionality.
* @class Titanium.Network
* @singleton
* @member Titanium
*/
Titanium.Network = {
/**
* Adds a connectivity change listener that fires when the system connects or disconnects from the internet
* @return {Number}
* @member Titanium.Network
*/
addConnectivityListener: function(){},

/**
* Creates an HTTPClient object
* @return {Titanium.Network.HTTPClient}
* @member Titanium.Network
*/
createHTTPClient: function(){},

/**
* Creates a new HTTPCookie object
* @return {Titanium.Network.HTTPCookie}
* @member Titanium.Network
*/
createHTTPCookie: function(){},

/**
* Creates an HTTPServer object
* @return {Titanium.Network.HTTPServer}
* @member Titanium.Network
*/
createHTTPServer: function(){},

/**
* Creates an IPAddress object
* @param {String} address the IP address
* @return {Titanium.Network.IPAddress}
* @member Titanium.Network
*/
createIPAddress: function(address){},

/**
* Creates an IRCClient object [DEPRECATED]
* @return {Titanium.Network.IRCClient}
* @member Titanium.Network
*/
createIRCClient: function(){},

/**
* Creates a TCPSocket object
* @param {String} host the hostname to connect to
* @param {Number} port the port to use
* @return {Titanium.Network.TCPSocket}
* @member Titanium.Network
*/
createTCPSocket: function(host, port){},

/**
* Encodes a URI Component
* @param {String} value value to encode
* @return {String}
* @member Titanium.Network
*/
encodeURIComponent: function(value){},

/**
* Decodes a URI component
* @param {String} value value to decode
* @return {String}
* @member Titanium.Network
*/
decodeURIComponent: function(value){},

/**
* Return the first IPv4 address in this system's list of interfaces.
* @return {String}
* @member Titanium.Network
*/
getFirstIPAddress: function(){},

/**
* Return the first MAC address in this system's list of interfaces.
* @return {String
paramters: }
* @member Titanium.Network
*/
getFirstMACAddress: function(){},

/**
* Returns a Host object using an address
* @param {String} address the address
* @return {Titanium.Network.Host}
* @member Titanium.Network
*/
getHostByAddress: function(address){},

/**
* Returns a Host object using a hostname
* @param {String} name the hostname
* @return {Titanium.Network.Host}
* @member Titanium.Network
*/
getHostByName: function(name){},

/**
* Return the proxy override, if one is set.
* @return {String|null}
* @member Titanium.Network
*/
getHTTPSProxy: function(){},

/**
* Return a list of network interfaces on this system.
* @return {Titanium.Array<Network.Interface>}
* @member Titanium.Network
*/
getInterfaces: function(){},

/**
* Return the proxy override, if one is set.
* @return {String|null}
* @member Titanium.Network
*/
getHTTPProxy: function(){},

/**
* Note: this is deprecated and only returns true starting in 1.2.
* @property {Boolean}
* @member Titanium.Network
*/
online: null,

/**
* Removes a connectivity change listener
* @param {Number} id the callback id of the method
* @return {String}
* @member Titanium.Network
*/
removeConnectivityListener: function(id){},

/**
* Override application proxy autodetection with a proxy URL.
* @param {String} hostname The full proxy hostname.
* @return {String}
* @member Titanium.Network
*/
setHTTPProxy: function(hostname){},

/**
* Override application proxy autodetection with a proxy URL.
* @param {String} hostname The full proxy hostname.
* @return {String}
* @member Titanium.Network
*/
setHTTPSProxy: function(hostname){}}

