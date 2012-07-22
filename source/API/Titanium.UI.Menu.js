/**
* An object representing a menu.
* @class Titanium.UI.Menu
* @member Titanium.UI
*/
Titanium.UI.Menu = {
/**
* Add a check item to this menu with the given attributes.
* @param {String} label The label for the new item
* @param {Function} listener (optional) An event listener callback for the item
* @return {Titanium.UI.MenuItem}
* @member Titanium.UI.Menu
*/
addCheckItem: function(label, listener){},

/**
* Add an item to this menu with the given attributes.
* @param {String} label The label for the new item
* @param {Function} listener (optional) An event listener callback for the item
* @param {String} iconURL "The URL for this item's icon"
* @return {Titanium.UI.MenuItem}
* @member Titanium.UI.Menu
*/
addItem: function(label, listener, iconURL){},

/**
* Append a MenuItem object to a menu.
* @param {UI.MenuItem} item Append an item to this menu
* @return {String}
* @member Titanium.UI.Menu
*/
appendItem: function(item){},

/**
* Add a separator item to this menu.
* @return {Titanium.UI.MenuItem}
* @member Titanium.UI.Menu
*/
addSeparatorItem: function(){},

/**
* Remove all items from this menu.
* @return {String}
* @member Titanium.UI.Menu
*/
clear: function(){},

/**
* Get the length of this menu.
* @return {Number}
* @member Titanium.UI.Menu
*/
getLength: function(){},

/**
* Insert a menu item before the given index. This method will throw an exception if the index of out of range.
* @param {UI.MenuItem} item The menu item to insert
* @param {Number} index The index for this menu item
* @return {String}
* @member Titanium.UI.Menu
*/
insertItemAt: function(item, index){},

/**
* Get an item from this menu at the given index. This method will throw an exception if the index is out of range.
* @param {Number} index The index of the item to get
* @return {Titanium.UI.MenuItem}
* @member Titanium.UI.Menu
*/
getItemAt: function(index){},

/**
* Remove the item in this menu at the given index. This method will throw an exception if the index is out of range.
* @param {Number} index The index of the item to remove
* @return {String}
* @member Titanium.UI.Menu
*/
removeItemAt: function(index){}}

