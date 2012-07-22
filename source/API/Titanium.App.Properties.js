/**
* An object holding a group of properties. Properties may either be defined
* in tiapp.xml (read-only) or in any other file on the filesystem. Titanium
* Properties offer an alternative to traditional HTML5 DOM storage.
* @class Titanium.App.Properties
* @member Titanium.App
*/
Titanium.App.Properties = {
/**
* Returns a property value as an integer.
* Throws an exception if this value can not be found and no default is
* provided or the value stored in the properties file could not be
* converted to the appropriate type.
* @param {String} name The name of the property to return.
* @param {Number} defaults The value to return if this property is not set.
* @return {Number}
* @member Titanium.App.Properties
*/
getInt: function(name, defaults){},

/**
* Returns a property value as an Array.
* Throws an exception if this value can not be found and no default is
* provided or the value stored in the properties file could not be
* converted to the appropriate type.
* @param {list} name The name of the property to return.
* @param {list} defaults The value to return if this property is not set.
* @return {list}
* @member Titanium.App.Properties
*/
getList: function(name, defaults){},

/**
* Returns a property value as a String.
* Throws an exception if this value can not be found and no default is
* provided or the value stored in the properties file could not be
* converted to the appropriate type.
* @param {String} name The name of the property to return.
* @param {String} defaults The value to return if this property is not set.
* @return {String}
* @member Titanium.App.Properties
*/
getString: function(name, defaults){},

/**
* Returns a property value as double.
* Throws an exception if this value can not be found and no default is
* provided or the value stored in the properties file could not be
* converted to the appropriate type.
* @param {String} name The name of the property to return.
* @param {Number} defaults The value to return if this property is not set.
* @return {Number}
* @member Titanium.App.Properties
*/
getDouble: function(name, defaults){},

/**
* Query whether or not a given property exists in this Property object.
* @param {String} name The name of the property to query.
* @return {Boolean}
* @member Titanium.App.Properties
*/
hasProperty: function(name){},

/**
* Returns an Array of all property names in this App.Properties object.
* @return {Array<String>}
* @member Titanium.App.Properties
*/
listProperties: function(){},

/**
* Save this App.Properties object to file at the given path.
* @param {String} path The path to the file to save this App.Properties object to.
* @return {void}
* @member Titanium.App.Properties
*/
saveTo: function(path){},

/**
* Set a double property value given the name and value.
* @param {String} name The name of the property to set.
* @param {Number} value The value to set the given property to.
* @return {void}
* @member Titanium.App.Properties
*/
setDouble: function(name, value){},

/**
* Set an integer property value given the name and value.
* @param {String} name The name of the property to set.
* @param {Number} value The value to set the given property to.
* @return {void}
* @member Titanium.App.Properties
*/
setInt: function(name, value){},

/**
* Set a list property value given the name and array of Strings.
* @param {String} name The name of the property to set.
* @param {Array<String>} value The value to set the given property to.
* @return {void}
* @member Titanium.App.Properties
*/
setList: function(name, value){},

/**
* Set a String property value given the name and value.
* @param {String} name The name of the property to set.
* @param {String} value The value to set the given property to.
* @return {void}
* @member Titanium.App.Properties
*/
setString: function(name, value){}}

