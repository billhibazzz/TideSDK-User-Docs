/**
* A module for creating processes.
* @class Titanium.Process
* @singleton
* @member Titanium
*/
Titanium.Process = {
/**
* Create a Process object. There are two main ways to use this function:
* <pre><code>
* Titanium.Process.createProcess({
* args: ['mycmd', 'arg1', 'arg2'],
* env: {'PATH': '/something'},
* stdin: pipeIn,
* stdout: pipeOut,
* stderr: pipeErr
* });
* </code></pre>
* <pre><code>
* Titanium.Process.createProcess(args, environment, stdin, stdout, stderr);
* </code></pre>
* @param {Array|Object} args Either a list of command-line arguments to use for this process invocation (including the executable path) or an object describing all parameters of this Process object (see above).
* @param {Object} envionment (optional) An object representing the environment to pass to this process.
* @param {Process.Pipe} pipeIn (optional) A Process.Pipe object which the new process should use for receiving input.
* @param {Process.Pipe} pipeOut (optional) A Process.Pipe object which the new process should use for sending output.
* @param {Process.Pipe} pipeErr (optional) A Process.Pipe object which the new process should use for sending error output.
* @return {Titanium.Process.Process}
* @member Titanium.Process
*/
createProcess: function(args, envionment, pipeIn, pipeOut, pipeErr){},

/**
* Create a pipe for attaching to/from any number of processes.
* @return {Titanium.Process.Pipe}
* @member Titanium.Process
*/
createPipe: function(){},

/**
* This method is deprecated. See Process.Process.createProcess()
* @param {String} command The command to launch
* @param {Array<String>} arguments A list of arguments to the command
* @return {String}
* @member Titanium.Process
*/
launch: function(command, arguments){},

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGCHLD: null,

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGEMT: null,

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGFPE: null,

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGHUP: null,

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGILL: null,

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGINFO: null,

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGINT: null,

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGIO: null,

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGKILL: null,

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGPIPE: null,

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGPROF: null,

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGQUIT: null,

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGSEGV: null,

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGSTOP: null,

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGSYS: null,

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGTERM: null,

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGTRAP: null,

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGTSTP: null,

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGTTOU: null,

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGURG: null,

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGUSR1: null,

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGTTIN: null,

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGUSR2: null,

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGVTALRM: null,

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGXCPU: null,

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGXFSZ: null,

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGALRM: null,

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGABRT: null,

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGBUS: null,

/**
* 
* @property {String}
* @member Titanium.Process
*/
SIGWINCH: null}

