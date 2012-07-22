/**
* An object allowing for loading simple sounds and simple types of playback.
* @class Titanium.Media.Sound
* @member Titanium.Media
*/
Titanium.Media.Sound = {
/**
* Return the current volume of this Media.Sound object. Volume
* values will be between 0.0 and 1.0.
* @return {Number}
* @member Titanium.Media.Sound
*/
getVolume: function(){},

/**
* Return true if this Media.Sound is set to loop and false otherwise.
* @return {Boolean}
* @member Titanium.Media.Sound
*/
isLooping: function(){},

/**
* Return true if this Media.Sound is paused and false otherwise.
* @return {Boolean}
* @member Titanium.Media.Sound
*/
isPaused: function(){},

/**
* Return true if this Media.Sound is playing and false otherwise.
* @return {Boolean}
* @member Titanium.Media.Sound
*/
isPlaying: function(){},

/**
* Pause a currently playing sound.
* @return {void}
* @member Titanium.Media.Sound
*/
pause: function(){},

/**
* Set a callback to invoke once this sound is finished playing. If
* the sound is looping, this callback will be invoked after each
* iteration of the loop. Passing null as the argument to this function
* will unset the onComplete callback.
* @param {Function|null} callback The new callback function or null to unset it.
* @return {void}
* @member Titanium.Media.Sound
*/
onComplete: function(callback){},

/**
* Play a sound object. If the sound is paused, it will resume from the current location.
* @return {void}
* @member Titanium.Media.Sound
*/
play: function(){},

/**
* Reload this sound from the original URL or path.
* @return {void}
* @member Titanium.Media.Sound
*/
reload: function(){},

/**
* Set whether or not this sound should loop.
* @param {Boolean} looping True if the sound should loop, false otherwise.
* @return {void}
* @member Titanium.Media.Sound
*/
setLooping: function(looping){},

/**
* Set the volume of this sound. Sound volumes should be between
* 0.0 and 1.0. Values outside of this range will be clipped to
* 0.0 or 1.0.
* @param {Number} volume The new volume value of the sound between 0.0 to 1.0
* @return {void}
* @member Titanium.Media.Sound
*/
setVolume: function(volume){},

/**
* Stop a currently playing sound.
* @return {void}
* @member Titanium.Media.Sound
*/
stop: function(){}}

