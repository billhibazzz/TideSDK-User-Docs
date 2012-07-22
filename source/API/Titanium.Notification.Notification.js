/**
* An object representing a Desktop notification.
* @class Titanium.Notification.Notification
* @member Titanium.Notification
*/
Titanium.Notification.Notification = {
/**
* Hide this Notification.
* @return {Boolean}
* @member Titanium.Notification.Notification
*/
hide: function(){},

/**
* Set a callback function fired when notification is clicked.
* @param {Function} callback function to execute when notification is clicked
* @return {String}
* @member Titanium.Notification.Notification
*/
setCallback: function(callback){},

/**
* Set the notification icon image.
* @param {String} icon path to the icon image
* @return {String}
* @member Titanium.Notification.Notification
*/
setIcon: function(icon){},

/**
* Set the notification message
* @param {String} message notification message text
* @return {String}
* @member Titanium.Notification.Notification
*/
setMessage: function(message){},

/**
* Set the timeout before the notification expires.
* @param {Integer} timeout Timeout in seconds. (-1 = use system default, 0 = never expire)
* @return {String}
* @member Titanium.Notification.Notification
*/
setTimeout: function(timeout){},

/**
* Set the notification title
* @param {String} title notification title text
* @return {String}
* @member Titanium.Notification.Notification
*/
setTitle: function(title){},

/**
* Display the notification
* @return {Boolean}
* @member Titanium.Notification.Notification
*/
show: function(){}}

