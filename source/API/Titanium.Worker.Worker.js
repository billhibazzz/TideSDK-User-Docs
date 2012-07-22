/**
* An object representing a Titanium Worker.
* @class Titanium.Worker.Worker
* @member Titanium.Worker
*/
Titanium.Worker.Worker = {
/**
* "Post a message (async) into the worker thread's queue to be handled by onmessage"
* @param {any} data Any JSON serializable type to pass to the child.
* @return {String}
* @member Titanium.Worker.Worker
*/
postMessage: function(data){},

/**
* Start the worker thread
* @return {String}
* @member Titanium.Worker.Worker
*/
start: function(){},

/**
* Terminate the worker thread. The thread can be restarted with Worker.start()
* @return {String}
* @member Titanium.Worker.Worker
*/
terminate: function(){}}

