/**
* This is the top-level Titanium module, containing all Titanium APIs.
* Titanium API objects generally follow the setProperty()/getProperty()
* pattern, but you may also use accessors for most operations For example:
* <pre><code>
* var window = Titanium.UI.currentWindow;
* window.setHeight(300); // Set the window height to 300 pixels.
* window.height = 300; // The same.
* </code></pre>
* @class Titanium
* @singleton
*/
Titanium = {
/**
* The ALL event constant. This can be used for listening for all events.
* @property {String}
* @member Titanium
*/
ALL: null,

/**
* The APP_EXIT event constant, fired during host application exit.
* @property {String}
* @member Titanium
*/
APP_EXIT: null,

/**
* The CLOSE event constant
* @property {String}
* @member Titanium
*/
CLOSE: null,

/**
* The CLOSED event constant
* @property {String}
* @member Titanium
*/
CLOSED: null,

/**
* The CREATE event constant
* @property {String}
* @member Titanium
*/
CREATE: null,

/**
* The EXIT event constant
* @property {String}
* @member Titanium
*/
EXIT: null,

/**
* The FOCUSED event constant
* @property {String}
* @member Titanium
*/
FOCUSED: null,

/**
* The FULLSCREENED event constant
* @property {String}
* @member Titanium
*/
FULLSCREENED: null,

/**
* The HIDDEN event constant
* @property {String}
* @member Titanium
*/
HIDDEN: null,

/**
* "Return the current platform, usually one of 'osx', 'win32', or 'linux'."
* @return {String}
* @member Titanium
*/
getPlatform: function(){},

/**
* Return the Titanium runtime version.
* @return {String}
* @member Titanium
*/
getVersion: function(){},

/**
* The HTTP request aborted event constant.
* @property {String}
* @member Titanium
*/
HTTP_ABORT: null,

/**
* The HTTP data sent event constant.
* @property {String}
* @member Titanium
*/
HTTP_DATA_SENT: null,

/**
* The HTTP data received event constant.
* @property {String}
* @member Titanium
*/
HTTP_DATA_RECEIVED: null,

/**
* The HTTP request complete event constant.
* @property {String}
* @member Titanium
*/
HTTP_DONE: null,

/**
* The HTTP redirect event constant.
* @property {String}
* @member Titanium
*/
HTTP_REDIRECT: null,

/**
* The HTTP state changed event constant.
* @property {String}
* @member Titanium
*/
HTTP_STATE_CHANGED: null,

/**
* The HTTP request timeout event constant.
* @property {String}
* @member Titanium
*/
HTTP_TIMEOUT: null,

/**
* The MAXIMIZED event constant
* @property {String}
* @member Titanium
*/
MAXIMIZED: null,

/**
* The MINIMIZED event constant
* @property {String}
* @member Titanium
*/
MINIMIZED: null,

/**
* The MOVED event constant
* @property {String}
* @member Titanium
*/
MOVED: null,

/**
* The OPENED event constant
* @property {String}
* @member Titanium
*/
OPENED: null,

/**
* The OPEN request event constant.
* @property {String}
* @member Titanium
*/
OPEN_REQUEST: null,

/**
* The PAGE_INITIALIZED event constant
* @property {String}
* @member Titanium
*/
PAGE_INITIALIZED: null,

/**
* The PAGE_LOADED event constant
* @property {String}
* @member Titanium
*/
PAGE_LOADED: null,

/**
* The READ event constant
* @property {String}
* @member Titanium
*/
READ: null,

/**
* The RESIZED event constant
* @property {String}
* @member Titanium
*/
RESIZED: null,

/**
* The SHOWN event constant
* @property {String}
* @member Titanium
*/
SHOWN: null,

/**
* The UNFOCUSED event constant
* @property {String}
* @member Titanium
*/
UNFOCUSED: null,

/**
* The UNFULLSCREENED event constant
* @property {String}
* @member Titanium
*/
UNFULLSCREENED: null,

/**
* The OPEN event constant
* @property {String}
* @member Titanium
*/
OPEN: null}

