/**
* A module for holding core Titanium functionality.
* @class Titanium.API
* @singleton
* @member Titanium
*/
Titanium.API = {
/**
* Register a root event listener. Event listeners registered using this
* function will receive <em>all</em> events from Titanium.
* @param {String} eventName The event name to listen for.
* @param {Function} callback The callback to invoke when this message occurs.
* @return {Number}
* @member Titanium.API
*/
addEventListener: function(eventName, callback){},

/**
* A constant representing an application update component type.
* @property {Number}
* @member Titanium.API
*/
APP_UPDATE: null,

/**
* Create a Kroll Bytes object given a String. A Bytes object is a generic
* way of holding a String of bytes.
* @return {Bytes}
* @member Titanium.API
*/
createBytes: function(){},

/**
* A constructor for API.Dependency objects.
* @param {Number} type The type of this dependency. This is usually one of the component type constants (e.g. API.MODULE).
* @param {String} name The name of this dependency.
* @param {String} version The version requirement for this dependency.
* @return {Titanium.API.Dependency}
* @member Titanium.API
*/
createDependency: function(type, name, version){},

/**
* Create a Kroll list given an optional JavaScript array. This method is mainly used for testing.
* @param {Array} toWrap (optional) An Array to wrap in a new KList.
* @return {Array}
* @member Titanium.API
*/
createKList: function(toWrap){},

/**
* Create a Kroll method given an existing JavaScript Funtion. This method is mainly used for testing.
* @param {Function} toWrap (optional) A Function to wrap in a new KMethod.
* @return {Function}
* @member Titanium.API
*/
createKMethod: function(toWrap){},

/**
* Create a Kroll object given an existing JavaScript Object. This method is mainly used for testing.
* @param {Object} toWrap (optional) An Object to wrap in a new KObject.
* @return {Object}
* @member Titanium.API
*/
createKObject: function(toWrap){},

/**
* A constant representing CRITICAL logger severity.
* The severity levels in order from least severe to most severe are:
* <ol>
* <li>TRACE</li>
* <li>DEBUG</li>
* <li>INFO</li>
* <li>NOTICE</li>
* <li>WARN</li>
* <li>ERROR</li>
* <li>CRITICAL</li>
* <li>FATAL</li>
* </ol>
* @property {Number}
* @member Titanium.API
*/
CRITICAL: null,

/**
* Log a statement with CRITICAL severity.
* The severity levels in order from least severe to most severe are:
* <ol>
* <li>TRACE</li>
* <li>DEBUG</li>
* <li>INFO</li>
* <li>NOTICE</li>
* <li>WARN</li>
* <li>ERROR</li>
* <li>CRITICAL</li>
* <li>FATAL</li>
* </ol>
* @param {String} statement The String to send to the logger.
* @return {void}
* @member Titanium.API
*/
critical: function(statement){},

/**
* A constant representing DEBUG logger severity.
* The severity levels in order from least severe to most severe are:
* <ol>
* <li>TRACE</li>
* <li>DEBUG</li>
* <li>INFO</li>
* <li>NOTICE</li>
* <li>WARN</li>
* <li>ERROR</li>
* <li>CRITICAL</li>
* <li>FATAL</li>
* </ol>
* @property {Number}
* @member Titanium.API
*/
DEBUG: null,

/**
* Log a statement with DEBUG severity. The severity levels in order from
* least severe to most severe are:
* <ol>
* <li>TRACE</li>
* <li>DEBUG</li>
* <li>INFO</li>
* <li>NOTICE</li>
* <li>WARN</li>
* <li>ERROR</li>
* <li>CRITICAL</li>
* <li>FATAL</li>
* </ol>
* @param {String} statement The String to send to the logger.
* @return {void}
* @member Titanium.API
*/
debug: function(statement){},

/**
* A constant representing an equality dependency.
* This is used to specify resolutions to Titanium application dependencies.
* @property {Number}
* @member Titanium.API
*/
EQ: null,

/**
* A constant representing ERROR logger severity.
* The severity levels in order from least severe to most severe are:
* <ol>
* <li>TRACE</li>
* <li>DEBUG</li>
* <li>INFO</li>
* <li>NOTICE</li>
* <li>WARN</li>
* <li>ERROR</li>
* <li>CRITICAL</li>
* <li>FATAL</li>
* </ol>
* @property {Number}
* @member Titanium.API
*/
ERROR: null,

/**
* Log a statement with ERROR severity.
* The severity levels in order from least severe to most severe are:
* <ol>
* <li>TRACE</li>
* <li>DEBUG</li>
* <li>INFO</li>
* <li>NOTICE</li>
* <li>WARN</li>
* <li>ERROR</li>
* <li>CRITICAL</li>
* <li>FATAL</li>
* </ol>
* @param {String} statement The String to send to the logger.
* @return {void}
* @member Titanium.API
*/
error: function(statement){},

/**
* A constant representing FATAL logger severity.
* The severity levels in order from least severe to most severe are:
* <ol>
* <li>TRACE</li>
* <li>DEBUG</li>
* <li>INFO</li>
* <li>NOTICE</li>
* <li>WARN</li>
* <li>ERROR</li>
* <li>CRITICAL</li>
* <li>FATAL</li>
* </ol>
* @property {Number}
* @member Titanium.API
*/
FATAL: null,

/**
* Log a statement with FATAL severity.
* The severity levels in order from least severe to most severe are:
* <ol>
* <li>TRACE</li>
* <li>DEBUG</li>
* <li>INFO</li>
* <li>NOTICE</li>
* <li>WARN</li>
* <li>ERROR</li>
* <li>CRITICAL</li>
* <li>FATAL</li>
* </ol>
* @param {String} statement The String to send to the logger.
* @return {void}
* @member Titanium.API
*/
fatal: function(statement){},

/**
* Fire an event to the top-level event listener.
* @param {String|Object} event The name of the event to fire or the event object itself
* @return {void}
* @member Titanium.API
*/
fireEvent: function(event){},

/**
* Get an attribute in the global object
* @param {String} key Key of the attribute to get
* @return {Any}
* @member Titanium.API
*/
get: function(key){},

/**
* Get the currently running application. This application will
* should have all of its dependencies resolved.
* @return {Titanium.API.Application}
* @member Titanium.API
*/
getApplication: function(){},

/**
* Get the system environment object, which can be queried and updated
* just by accessing or setting its properties.
* @return {Titanium.API.Environment}
* @member Titanium.API
*/
getEnvironment: function(){},

/**
* Get a list of the currently installed Titanium components.
* An installed component is one that has been found on the list of paths
* returned by Titanium.API.getComponentSearchPaths. This list does not
* include bundled components.
* @return {Titanium.Array<API.Component>}
* @member Titanium.API
*/
getInstalledComponents: function(){},

/**
* Get a list of the paths on which Titanium searches for installed components. This does not include paths of bundled components.
* @return {Titanium.Array<API.Component>}
* @member Titanium.API
*/
getComponentSearchPaths: function(){},

/**
* Get a list of the currently installed Titanium Mobile SDK components.
* An installed component is one that has been found on the list of paths
* returned by Titanium.API.getComponentSearchPaths. This list does not
* include bundled components.
* @return {Titanium.Array<API.Component>}
* @member Titanium.API
*/
getInstalledMobileSDKs: function(){},

/**
* Get a list of the currently installed Titanium module components.
* An installed component is one that has been found on the list of paths
* returned by Titanium.API.getComponentSearchPaths. This list does not
* include bundled components.
* @return {Titanium.Array<API.Component>}
* @member Titanium.API
*/
getInstalledModules: function(){},

/**
* Get a list of the currently installed Titanium runtime components.
* An installed component is one that has been found on the list of paths
* returned by Titanium.API.getComponentSearchPaths. This list does not
* include bundled components.
* @return {Titanium.Array<API.Component>}
* @member Titanium.API
*/
getInstalledRuntimes: function(){},

/**
* Get a list of the currently installed Titanium SDK components.
* An installed component is one that has been found on the list of paths
* returned by Titanium.API.getComponentSearchPaths. This list does not
* include bundled components.
* @return {Titanium.Array<API.Component>}
* @member Titanium.API
*/
getInstalledSDKs: function(){},

/**
* Get the log level threshold of the Titanium logger. The logger
* will log statements with this severity or one that is more severe.
* The severity levels in order from least severe to most severe are:
* <ol>
* <li>TRACE</li>
* <li>DEBUG</li>
* <li>INFO</li>
* <li>NOTICE</li>
* <li>WARN</li>
* <li>ERROR</li>
* <li>CRITICAL</li>
* <li>FATAL</li>
* </ol>
* @return {Number}
* @member Titanium.API
*/
getLogLevel: function(){},

/**
* A constant representing an greater-than dependency.
* This is used to specify resolutions to Titanium application dependencies.
* @property {Number}
* @member Titanium.API
*/
GT: null,

/**
* A constant representing an greater-than-or-equal-to dependency.
* This is used to specify resolutions to Titanium application dependencies.
* @property {Number}
* @member Titanium.API
*/
GTE: null,

/**
* Log a statement with INFO severity. The severity levels in order from
* least severe to most severe are:
* <ol>
* <li>TRACE</li>
* <li>DEBUG</li>
* <li>INFO</li>
* <li>NOTICE</li>
* <li>WARN</li>
* <li>ERROR</li>
* <li>CRITICAL</li>
* <li>FATAL</li>
* </ol>
* @param {String} statement The String to send to the logger.
* @return {void}
* @member Titanium.API
*/
info: function(statement){},

/**
* Log a statement with a given severity level. The severity levels are
* defined as constants on the API module.
* In order from least severe to most severe, they are:
* <ol>
* <li>TRACE</li>
* <li>DEBUG</li>
* <li>INFO</li>
* <li>WARN</li>
* <li>ERROR</li>
* <li>CRITICAL</li>
* <li>FATAL</li>
* </ol>
* @param {Number} type The severity of this log statement.
* @param {String} statement The String to pass to the logger.
* @return {void}
* @member Titanium.API
*/
log: function(type, statement){},

/**
* A constant representing an less-than dependency.
* This is used to specify resolutions to Titanium application dependencies.
* @property {Number}
* @member Titanium.API
*/
LT: null,

/**
* a constant representing a Mobile SDK component type.
* @property {Number}
* @member Titanium.API
*/
MOBILESDK: null,

/**
* Print a String to stdout without a trailing newline
* @param {Any} data The data to print. If not a String, it will be converted using the equivalent of <tt>String(data);</tt>
* @return {void}
* @member Titanium.API
*/
print: function(data){},

/**
* A constant representing NOTICE logger severity.
* The severity levels in order from least severe to most severe are:
* <ol>
* <li>TRACE</li>
* <li>DEBUG</li>
* <li>INFO</li>
* <li>NOTICE</li>
* <li>WARN</li>
* <li>ERROR</li>
* <li>CRITICAL</li>
* <li>FATAL</li>
* </ol>
* @property {Number}
* @member Titanium.API
*/
NOTICE: null,

/**
* Remove a root event listener. If no listener with the given id or
* funtion is registered for this object, the call will do nothing.
* @param {Number|Function} id The id or the Function of the event listener to remove.
* @return {void}
* @member Titanium.API
*/
removeEventListener: function(id){},

/**
* Execute the method asynchronously on the main thread. This should be
* used when attempting to run JavaScript methods from non-JavaScript threads.
* This method blocks until the function finishes executing and returns
* the return value of the method passed.
* @param {Function} method The method to execute.
* @param {Any} multiple A variable-length list of arguments to pass to the method.
* @return {Any}
* @member Titanium.API
*/
runOnMainThread: function(method, multiple){},

/**
* Execute the method asynchronously on the main thread. This should be
* used when attempting to run JavaScript methods from non-JavaScript threads.
* This method does not wait for the method to complete and returns immediately.
* @param {Function} method The method to execute.
* @param {Any} multiple A variable-length list of arguments to pass to the method.
* @return {void}
* @member Titanium.API
*/
runOnMainThreadAsync: function(method, multiple){},

/**
* A constant representing a runtime component type.
* @property {Number}
* @member Titanium.API
*/
RUNTIME: null,

/**
* A constant representing a module component type.
* @property {Number}
* @member Titanium.API
*/
MODULE: null,

/**
* a constant representing an SDK component type.
* @property {Number}
* @member Titanium.API
*/
SDK: null,

/**
* A constant representing INFO logger severity.
* The severity levels in order from least severe to most severe are:
* <ol>
* <li>TRACE</li>
* <li>DEBUG</li>
* <li>INFO</li>
* <li>NOTICE</li>
* <li>WARN</li>
* <li>ERROR</li>
* <li>CRITICAL</li>
* <li>FATAL</li>
* </ol>
* @property {Number}
* @member Titanium.API
*/
INFO: null,

/**
* Set an attribute in the global object
* @param {String} key Key of the attribute to set
* @param {String} value New value of the attribute
* @return {void}
* @member Titanium.API
*/
set: function(key, value){},

/**
* Set the log level threshold of the Titanium logger. The logger
* will log statements with this severity or one that is more severe.
* The severity levels in order from least severe to most severe are:
* <ol>
* <li>TRACE</li>
* <li>DEBUG</li>
* <li>INFO</li>
* <li>NOTICE</li>
* <li>WARN</li>
* <li>ERROR</li>
* <li>CRITICAL</li>
* <li>FATAL</li>
* </ol>
* @param {Number} level The threshold of severity to log.
* @return {void}
* @member Titanium.API
*/
setLogLevel: function(level){},

/**
* A constant representing TRACE logger severity.
* The severity levels in order from least severe to most severe are:
* <ol>
* <li>TRACE</li>
* <li>DEBUG</li>
* <li>INFO</li>
* <li>NOTICE</li>
* <li>WARN</li>
* <li>ERROR</li>
* <li>CRITICAL</li>
* <li>FATAL</li>
* </ol>
* @property {Number}
* @member Titanium.API
*/
TRACE: null,

/**
* Log a statement with TRACE severity. The severity levels in order from
* least severe to most severe are:
* <ol>
* <li>TRACE</li>
* <li>DEBUG</li>
* <li>INFO</li>
* <li>NOTICE</li>
* <li>WARN</li>
* <li>ERROR</li>
* <li>CRITICAL</li>
* <li>FATAL</li>
* </ol>
* @param {String} statement The String to send to the logger.
* @return {void}
* @member Titanium.API
*/
trace: function(statement){},

/**
* Read an application manifest at a given path and return an
* Titanium.API.Application object representing the application.
* @param {String} manifestPath The path to the manifest to read.
* @param {String} applicationPath (optional) An optional application path override, which can be used if the manifest and the application are in different paths.
* @return {Titanium.API.Application}
* @member Titanium.API
*/
readApplicationManifest: function(manifestPath, applicationPath){},

/**
* A constant representing WARN logger severity.
* The severity levels in order from least severe to most severe are:
* <ol>
* <li>TRACE</li>
* <li>DEBUG</li>
* <li>INFO</li>
* <li>NOTICE</li>
* <li>WARN</li>
* <li>ERROR</li>
* <li>CRITICAL</li>
* <li>FATAL</li>
* </ol>
* @property {Number}
* @member Titanium.API
*/
WARN: null,

/**
* Log a statement with NOTICE severity. The severity levels in order from
* least severe to most severe are:
* <ol>
* <li>TRACE</li>
* <li>DEBUG</li>
* <li>INFO</li>
* <li>NOTICE</li>
* <li>WARN</li>
* <li>ERROR</li>
* <li>CRITICAL</li>
* <li>FATAL</li>
* </ol>
* @param {String} statement the statement to log
* @return {void}
* @member Titanium.API
*/
notice: function(statement){},

/**
* a constant representing an UNKNOWN component type.
* @property {Number}
* @member Titanium.API
*/
UNKNOWN: null,

/**
* A constant representing an less-than-or-equal-to dependency.
* This is used to specify resolutions to Titanium application dependencies.
* @property {Number}
* @member Titanium.API
*/
LTE: null,

/**
* Log a statement with WARN severity. The severity levels in order from
* least severe to most severe are:
* <ol>
* <li>TRACE</li>
* <li>DEBUG</li>
* <li>INFO</li>
* <li>NOTICE</li>
* <li>WARN</li>
* <li>ERROR</li>
* <li>CRITICAL</li>
* <li>FATAL</li>
* </ol>
* @param {String} statement The String to send to the logger.
* @return {void}
* @member Titanium.API
*/
warn: function(statement){},

/**
* Invoke the installer to find and install a list of dependencies. When
* the installer is finished running, it will call the given callback.
* The only way to determine whether or not the installation was successful
* at this point is to try to resolve the dependencies that were passed
* to the installer. <em>Currently the installer only supports Titanium.API.EQ
* dependencies.</em>
* @param {Array<API.Dependency>} dependencies A list of API.Dependency to find and install.
* @param {Function} callback A callback to invoke when the installer is finished.
* @return {void}
* @member Titanium.API
*/
installDependencies: function(dependencies, callback){}}

