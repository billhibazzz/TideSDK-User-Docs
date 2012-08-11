/**
* A module for dealing with Database storage.
* @class Ti.Database
* @singleton
* @member Ti
*/
Ti.Database = {
/**
* Open a WebKit HTML5 compatible-database, given the name of the database
* to open. WebKit HTML5 databases are stored per-security origin and are
* not available between security origins. A security origin is composed
* of a URL scheme and hostname pair.
* @param {String} name Name of the database. The call will create the database if it does not exist.
* @return {Ti.Database.DB}
* @member Ti.Database
*/
open: function(name){},

/**
* Open a database, given a path to an sqlite file.
* @param {String} path Path to an SQLite file to store the database in. If the file does not exist, it will be created.
* @return {Ti.Database.DB}
* @member Ti.Database
*/
openFile: function(path){}}

