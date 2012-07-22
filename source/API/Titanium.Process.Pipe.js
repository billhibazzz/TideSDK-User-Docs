/**
* An object representing an IO pipe.
* @class Titanium.Process.Pipe
* @member Titanium.Process
*/
Titanium.Process.Pipe = {
/**
* "Attach an IO object to this pipe. An IO object is an object that implements a public \"write(Bytes)\". In Titanium, this include FileStreams, and Pipes. You may also use your own custom IO implementation here."
* @return {String}
* @member Titanium.Process.Pipe
*/
attach: function(){},

/**
* Close this pipe to further reading/writing.
* @return {String}
* @member Titanium.Process.Pipe
*/
close: function(){},

/**
* Detach an IO object from this pipe. see Process.Pipe.attach.
* @return {String}
* @member Titanium.Process.Pipe
*/
detach: function(){},

/**
* 
* @return {bool}
* @member Titanium.Process.Pipe
*/
isAttached: function(){},

/**
* Write data to this pipe
* @param {Bytes|String} data a Bytes object or String to write to this pipe
* @return {Number}
* @member Titanium.Process.Pipe
*/
write: function(data){}}

