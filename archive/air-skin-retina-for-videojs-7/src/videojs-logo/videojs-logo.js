/*! videojs-logo - 2016-3-3
 * Copyright (c) 2016 FaceTheme
 * Forked from: https://github.com/Mewte/videojs-logobrand
 * and https://github.com/xbgmsharp/videojs-watermark
 * Modified by Tan Vu
 * @version 1.0.0 support videojs-5 */

(function(window, videojs) {
  'use strict';
  // Plugin components will go here

  var defaults = {
    topbar: true,
    preview: false,
    //logo: 'logo.png',
    //homepage: 'http://codecanyon.net/user/facetheme/portfolio',
    watermark: false
  };

  /******************************************/
  /*          The Plugin Function           */
  /******************************************/
  // This function will be called by video.js when it loops through all of the registered plugins.
  const pluginFn = function(options) {
    var settings = videojs.mergeOptions(defaults, options),
        player = this;


    /*********************************************/
    /*       The Logo Brand and Watermark        */
    /*********************************************/
    var watermark, logo, brand;
    if(settings.watermark) {
      watermark = document.createElement('div');
      //watermark.style.bottom = "44px";   // 0
      //watermark.style.right = "4px";     // 0
      if (settings.logo) {
        watermark.className = 'vjs-watermark';
        // if img is set, add img
        brand = document.createElement('img');
        brand.className = 'vjs-logobrand';
        brand.src = settings.logo;
        //if (settings.homepage == "") {
        if (settings.homepage) {
          //add clickable watermark to the player
          logo = document.createElement("a");
          logo.href = settings.homepage;
          logo.target = "_blank";
          logo.className = "vjs-logobrand-destination";
          logo.appendChild(brand);
          watermark.appendChild(logo);
        } else {
          //add normal watermark to the player
          watermark.appendChild(brand);
        }
      } else if (settings.watermark != "") {
        watermark.className = 'vjs-watermark vjs-watermark-text';
        watermark.textContent = settings.watermark;
      }
      player.el().appendChild(watermark);
    }

  };

  // register the plugin
  videojs.plugin('videoLogo', pluginFn);
})(window, videojs);