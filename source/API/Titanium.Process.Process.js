/**
* An object representing a process instance.
* @class Titanium.Process.Process
* @member Titanium.Process
*/
Titanium.Process.Process = {
/**
* Return the list of arguments associated with this Process.
* @return {Array<String>}
* @member Titanium.Process.Process
*/
getArguments: function(){},

/**
* Return a clone of this process' environment.
* @return {Object, environment}
* @member Titanium.Process.Process
*/
cloneEnvironment: function(){},

/**
* Return the environment associated with this process.
* @param {String} key an environment key
* @return {String|Object}
* @member Titanium.Process.Process
*/
getEnvironment: function(key){},

/**
* Return the exit code for this process. Before the process exits, this value will be null.
* @return {Number}
* @member Titanium.Process.Process
*/
getExitCode: function(){},

/**
* Return the process identifier for this process. Before the process launches, this value will be -1.
* @return {Number}
* @member Titanium.Process.Process
*/
getPID: function(){},

/**
* Return the stderr pipe for this process.
* @return {Titanium.Process.Pipe}
* @member Titanium.Process.Process
*/
getStderr: function(){},

/**
* Return the stdin pipe for this process.
* @return {Titanium.Process.Pipe}
* @member Titanium.Process.Process
*/
getStdin: function(){},

/**
* Return the stdout pipe for this process.
* @return {Titanium.Process.Pipe}
* @member Titanium.Process.Process
*/
getStdout: function(){},

/**
* Return true if this process is running and false otherwise.
* @return {Boolean}
* @member Titanium.Process.Process
*/
isRunning: function(){},

/**
* Kill this process (SIGINT in Unix, TerminateProcess in Windows)
* @return {String}
* @member Titanium.Process.Process
*/
kill: function(){},

/**
* "Launch this process asynchronously (not waiting for it's exit)"
* @return {String}
* @member Titanium.Process.Process
*/
launch: function(){},

/**
* "Send a signal (e.g. Process.SIGHUP) to this Process NOTE: this method does nothing in Windows"
* @param {Number|String} signal The name of the signal to send.
* @return {String}
* @member Titanium.Process.Process
*/
sendSignal: function(signal){},

/**
* Set an environment variable for this process
* @param {String} key an environment key
* @param {String} value the value
* @return {String}
* @member Titanium.Process.Process
*/
setEnvironment: function(key, value){},

/**
* Set an onRead event handler for this process stdout and stderr. This handler will take one argument which is the event for this output. To retrieve event data, simply access <tt>event.data</tt>.
* @param {Function} onRead "a handler that is passed an event, with a \"data\" Bytes full of data read from the pipe"
* @return {String}
* @member Titanium.Process.Process
*/
setOnRead: function(onRead){},

/**
* Set an onExit event handler for this process
* @param {Function} onExit a function
* @return {String}
* @member Titanium.Process.Process
*/
setOnExit: function(onExit){},

/**
* Set the callback to invoke every time a line of input is received from the process. This callback will take one argument, which will be the line of output.
* @param {Function} fn a callback that is called with every line of output received from this process
* @return {String}
* @member Titanium.Process.Process
*/
setOnReadLine: function(fn){},

/**
* Terminate this process (SIGTERM in Unix, TerminateProcess in Windows)
* @return {String}
* @member Titanium.Process.Process
*/
terminate: function(){}}

