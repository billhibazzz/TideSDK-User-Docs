/**
* An object representing a TideSDK Database.
* @class Ti.Database.DB
* @member Ti.Database
*/
Ti.Database.DB = {
/**
* Close an open Database.DB. If the database is not open, this method will do nothing.
* @return {void}
* @member Ti.Database.DB
*/
close: function(){},

/**
* Get the full filesystem path to the database. If this database was
* opened via Datbase.openFile this path will be the originally path
* used, otherwise it will be the path to a WebKit database in the
* application data directory.
* @return {String}
* @member Ti.Database.DB
*/
getPath: function(){},

/**
* Executes an SQL query on this Database.DB. Currently all queries must
* be valid SQLite-style SQL.
* @param {String} query The SQL query to execute on this Database.DB.
* @param {Any} multiple (optional) A variable-length argument list of values to use with the given query
* @return {Ti.Database.ResultSet}
* @member Ti.Database.DB
*/
execute: function(query, multiple){},

/**
* The row id of the last insert operation.
* @property {Number}
* @member Ti.Database.DB
*/
lastInsertRowId: null,

/**
* Remove a Database.DB. This method will close the database
* if it is open and remove the file from the filesystem.
* @return {void}
* @member Ti.Database.DB
*/
remove: function(){},

/**
* The number of rows affected by the last execute call.
* @property {Number}
* @member Ti.Database.DB
*/
rowsAffected: null}

