/**
* A module for accessing the Filesystem.
* @class Titanium.Filesystem
* @singleton
* @member Titanium
*/
Titanium.Filesystem = {
/**
* Executes an asynchronous copy operation and returns an AsyncCopy object.
* @param {Array<String|Filesystem.File>|String|Filesystem.File} paths The source paths to include in the copy operation.
* @param {Filesystem.File|String} destination A path or a File object representing the destination directory of the asynchronous copy.
* @return {Titanium.Filesystem.AsyncCopy}
* @member Titanium.Filesystem
*/
asyncCopy: function(paths, destination){},

/**
* Create an temporary file. This file is guaranteed to be
* writable. If it still exists when the application exits, it
* will be deleted.
* @return {Titanium.Filesystem.File}
* @member Titanium.Filesystem
*/
createTempFile: function(){},

/**
* Create a temporary directory. This directory is guaranteed to be
* writable. If it still exists when the application exits, it
* will be deleted.
* @return {Titanium.Filesystem.File}
* @member Titanium.Filesystem
*/
createTempDirectory: function(){},

/**
* Return the data directory of the application. The data directory is per-user
* directory for storing application data. It is guaranteed to be writable and
* stable between releases.
* @return {Titanium.Filesystem.File}
* @member Titanium.Filesystem
*/
getApplicationDataDirectory: function(){},

/**
* Return the Desktop directory for the current user. OS X and Windows will
* always have a valid Desktop directory. Some Linux systems may not have one,
* in which case the home directory will be returned.
* @return {Titanium.Filesystem.File}
* @member Titanium.Filesystem
*/
getDesktopDirectory: function(){},

/**
* Return the documents directory for the current user. OS X and Windows will
* always have a valid Documents directory. Some Linux systems may not have one,
* in which case the home directory will be returned.
* @return {Titanium.Filesystem.File}
* @member Titanium.Filesystem
*/
getDocumentsDirectory: function(){},

/**
* Return the directory containing the application. The application directory
* may contain the application contents directory (OS X) or be the application
* contents directory (Windows and Linux). The application directory may not
* be writable and applications should not attempt to write to it.
* @return {Titanium.Filesystem.File}
* @member Titanium.Filesystem
*/
getApplicationDirectory: function(){},

/**
* Create a Filesystem.Filestream object given a Filesystem.File or a path.
* Filesystem.Filestream is the preferred way of writing to files.
* @param {Filesystem.File|String} file A file or path used for the construction of this Filesystem.Filestream.
* @return {Titanium.Filesystem.Filestream}
* @member Titanium.Filesystem
*/
getFileStream: function(file){},

/**
* Return the line ending most commonly used by the current operating system.
* This is useful for writing files with the platform compatibility in mind.
* File.Filestream.writeLine will use this value when completing lines.
* @return {String}
* @member Titanium.Filesystem
*/
getLineEnding: function(){},

/**
* Create a Filesystem.File object given a variable-length argument list
* of Filesystem.File or a path strings. The list will be joined together
* to form one long path string.
* @param {Filesystem.File|String} base The base to this file. This may be a file or directory.
* @param {Filesystem.File|String} multiple (optional) A variable length argument list of Files or paths that are joined to the base in an platform-specific way.
* @return {Titanium.Filesystem.File}
* @member Titanium.Filesystem
*/
getFile: function(base, multiple){},

/**
* Return the directory commonly used for storing applications on this
* platform. On Linux systems, there can be many places for storing
* executables, so it is not recommended using this value to locate them.
* @return {Titanium.Filesystem.File}
* @member Titanium.Filesystem
*/
getProgramsDirectory: function(){},

/**
* Return the path to this application's resources directory. This diretory
* is the 'Resources' subdirectory of the application contents directory.
* The application directory may not be writable and applications should
* not attempt to write to it.
* @return {Titanium.Filesystem.File}
* @member Titanium.Filesystem
*/
getResourcesDirectory: function(){},

/**
* Return the system root directories. On Unix systems there is at
* most one root directory '/' while on Windows active drive letters
* are considered system root directories.
* @return {Titanium.Array<Filesystem.File>}
* @member Titanium.Filesystem
*/
getRootDirectories: function(){},

/**
* Return the directory of the current Titanium runtime files.
* @return {Titanium.Filesystem.File}
* @member Titanium.Filesystem
*/
getRuntimeHomeDirectory: function(){},

/**
* A constant representing write mode for file access.
* @property {Number}
* @member Titanium.Filesystem
*/
MODE_WRITE: null,

/**
* A constant representing read mode for file access.
* @property {Number}
* @member Titanium.Filesystem
*/
MODE_READ: null,

/**
* Return the path separator used by the operating system.
* @return {String}
* @member Titanium.Filesystem
*/
getSeparator: function(){},

/**
* A constant representing append mode for file access.
* @property {Number}
* @member Titanium.Filesystem
*/
MODE_APPEND: null,

/**
* Return the home directory of the current user.
* @return {Titanium.Filesystem.File}
* @member Titanium.Filesystem
*/
getUserDirectory: function(){}}

