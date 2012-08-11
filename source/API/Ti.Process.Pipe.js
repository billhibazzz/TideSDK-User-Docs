/**
* An object representing an IO pipe.
* @class Ti.Process.Pipe
* @member Ti.Process
*/
Ti.Process.Pipe = {
/**
* "Attach an IO object to this pipe. An IO object is an object that implements a public \"write(Bytes)\". In Ti, this include FileStreams, and Pipes. You may also use your own custom IO implementation here."
* @return {String}
* @member Ti.Process.Pipe
*/
attach: function(){},

/**
* Close this pipe to further reading/writing.
* @return {String}
* @member Ti.Process.Pipe
*/
close: function(){},

/**
* Detach an IO object from this pipe. see Process.Pipe.attach.
* @return {String}
* @member Ti.Process.Pipe
*/
detach: function(){},

/**
* 
* @return {bool}
* @member Ti.Process.Pipe
*/
isAttached: function(){},

/**
* Write data to this pipe
* @param {Bytes|String} data a Bytes object or String to write to this pipe
* @return {Number}
* @member Ti.Process.Pipe
*/
write: function(data){}}

