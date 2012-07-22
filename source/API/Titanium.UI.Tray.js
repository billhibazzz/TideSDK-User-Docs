/**
* An object representing a TrayItem.
* @class Titanium.UI.Tray
* @member Titanium.UI
*/
Titanium.UI.Tray = {
/**
* Get the hint for this TrayItem
* @return {String}
* @member Titanium.UI.Tray
*/
getHint: function(){},

/**
* Get the icon URL for this TrayItem
* @return {String}
* @member Titanium.UI.Tray
*/
getIcon: function(){},

/**
* Get the menu for this TrayItem
* @return {Titanium.UI.Menu|null}
* @member Titanium.UI.Tray
*/
getMenu: function(){},

/**
* Removes a TrayItem
* @return {String}
* @member Titanium.UI.Tray
*/
remove: function(){},

/**
* "Sets a TrayItem's icon"
* @param {String} icon (optional) path to the icon or null to unset
* @return {String}
* @member Titanium.UI.Tray
*/
setIcon: function(icon){},

/**
* "Sets a TrayItem's tooltip"
* @param {String} hint (optional) tooltip value or null to unset
* @return {String}
* @member Titanium.UI.Tray
*/
setHint: function(hint){},

/**
* Set the menu for this TrayItem
* @param {UI.Menu|null} menu The Menu to use for this TrayItem or null to unset
* @return {String}
* @member Titanium.UI.Tray
*/
setMenu: function(menu){}}

