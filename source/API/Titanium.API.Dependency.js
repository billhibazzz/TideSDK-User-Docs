/**
* An object representing a Titanium application dependency.
* @class Titanium.API.Dependency
* @member Titanium.API
*/
Titanium.API.Dependency = {
/**
* Get the name of this dependency.
* @return {String}
* @member Titanium.API.Dependency
*/
getName: function(){},

/**
* Get the requirement for this dependency. Dependency requirement types are defined as constants on the API module. Currently the installer only support API.EQ dependency types.
* @return {String}
* @member Titanium.API.Dependency
*/
getRequirement: function(){},

/**
* Get the type of this dependency. Dependency types are defined as constants on the API module (e.g. API.SDK).
* @return {Number}
* @member Titanium.API.Dependency
*/
getType: function(){},

/**
* Get the version part of this dependency.
* @return {String}
* @member Titanium.API.Dependency
*/
getVersion: function(){}}

