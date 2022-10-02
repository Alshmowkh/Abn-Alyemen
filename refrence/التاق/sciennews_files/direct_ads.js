/*
	bbc.com core javascript
	version: $Id: direct_ads.js,v 1.22 2008/10/07 10:10:28 daffel01 Exp $
*/
/**
 * Has methods and properties related to BBC.
 * @name BBC
 * @namespace
 */
BBC = BBC || {};

/**
 * Has methods and properties related to bbc.com advertising.
 * @namespace
 */
BBC.adverts = function() {
	var
	ID_START     = "bbccom_",
	DISPLAY_NONE = "bbccom_display_none",

	SCRIPT_START = "<script type=\"text/javascript\" src=\"",
	SCRIPT_ROOT  = "/bbc.com/script/3/",
	SCRIPT_EXT   = ".js",
	SCRIPT_END   = "\"></script>",

	SCRIPT_TEST  = "bbccom_test",

	ADS_BLOCKED  = true,
	ZONE_VERSION = "zoneVersion",
	ZONE_OVERRIDE= "zoneOverride",

	YES          = "yes",
	NO           = "no",

	AD_INFO      = {
		leaderboard : {tile: 1, size: "728x90"},
		skyscraper 	: {tile: 2, size: "160x600"},
		bottom 		: {tile: 3, size: "468x60"},
		mpu  		: {tile: 4, size: "300x250"},
		mpu250x250  : {tile: 4, size: "250x250"},
		mpu300x250  : {tile: 4, size: "300x250"},
		mpu120x240  : {tile: 4, size: "120x240"},
		button 		: {tile: 5, size: "120x240"},
		module_a	: {tile: 6, size: "88x31"},
		module_b	: {tile: 7, size: "88x31"},
		module_c	: {tile: 8, size: "88x31"},
		module_d	: {tile: 9, size: "88x31"},
		module_e	: {tile: 10, size: "88x31"},
		module_f	: {tile: 11, size: "88x31"},
		module_g	: {tile: 12, size: "88x31"},
		module_h	: {tile: 13, size: "88x31"},
		module_i	: {tile: 14, size: "88x31"},
		module_j	: {tile: 15, size: "88x31"},
		module_k	: {tile: 16, size: "88x31"},
		module_l	: {tile: 17, size: "88x31"},
		module_m	: {tile: 18, size: "88x31"},
		module_n	: {tile: 19, size: "88x31"},
		module_o	: {tile: 20, size: "88x31"},
		module_p	: {tile: 21, size: "88x31"},
		module_q	: {tile: 22, size: "88x31"},
		module_r	: {tile: 23, size: "88x31"},
		module_s	: {tile: 24, size: "88x31"},
		module_t	: {tile: 25, size: "88x31"},
		module_u	: {tile: 26, size: "88x31"},
		module_v	: {tile: 27, size: "88x31"},
		module_w	: {tile: 28, size: "88x31"},
		module_x	: {tile: 29, size: "88x31"},
		module_y	: {tile: 30, size: "88x31"},
		module_z	: {tile: 31, size: "88x31"}
	};

	// create unique id used to beat caching of images
	var ordLength = 14,	ord = "";

	while(ordLength--) ord += (Math.floor(Math.random() * 10));

	// define data objects
	var
	config = {},
	zoneData = {};

	/**
	 * Represents an Ad Provider.
	 * @class
	 */
	AdProvider = function(id) {
		this.id = id;
	};
	AdProvider.prototype.getAdvertTag = function(slot) {
		switch (this.id) {
			case "doubleclick":
				var customKeyValues = "";
				if (zoneData.keyValues) {
					for(var key in zoneData.keyValues) {
						customKeyValues += ";"+key+"="+zoneData.keyValues[key];
					};
				};

				return [
					SCRIPT_START,
					"http://ad.doubleclick.net/adj/",
					zoneData.site,
					"/",
					zoneData.zone,
					customKeyValues,
					";slot="+slot,
					";sz="+AD_INFO[slot].size,
					";tile="+AD_INFO[slot].tile,
					";ord="+ord,
					"?",
					SCRIPT_END
				].join("");
			break;
		}
	}

	/** Sets the classname of the given slot div to empty, thereby making the hidden go away. */
	var hide = function(slot) {
		config[slot] = NO;
		var slotDiv = document.getElementById(ID_START + slot);
		if (slotDiv) {
			slotDiv.className = DISPLAY_NONE;

			var adHideClass;
			switch(slot) {
				case "leaderboard":
					adHideClass = "bbcdotcomAdvertsResetTop";
					break;
				case "bottom":
					adHideClass = "bbcdotcomAdvertsResetBottom";
					break;
				case "mpu":
					adHideClass = "bbcdotcomAdvertsResetMpu";
					break;
				default:
					adHideClass = "";
			}

			var currentBodyClass = document.body.className;
			document.body.className = ((currentBodyClass)? currentBodyClass+" " : "") + adHideClass;
		}
	};

	/** The isCapable() function will be called from the script tag this generates. */
	var loadTestFile = function() {
		var str = [
					SCRIPT_START,
					SCRIPT_ROOT,
					SCRIPT_TEST,
					SCRIPT_EXT,
					"?",
					ord,
					SCRIPT_END,
				].join("");
		document.write(str);
	};

	/**
	 * Writes script tag into the document to load the zone file data.
	 * @requires config() to be called first.
	 */
	var loadZonefile = function() {
		var src = config[ZONE_OVERRIDE] === true ? config[ZONE_VERSION] : SCRIPT_ROOT + config[ZONE_VERSION] + SCRIPT_EXT;
		var str = [
					SCRIPT_START,
					src,
					SCRIPT_END
				].join("");

		document.write(str);
	};

	/**
	 * Copies all the key/value pairs from the given object into the config object.
	 * @test If configure({x:y}) is called: getConfig("x") should return y.
	 */
	var configure = function(data) {
		for(var id in data) config[id] = data[id];
	};

	/**
	 * @lends BBC.adverts
	 */
	return {

		/**
		 * @param {object} data
		 */
		init: function(data) {
			configure(data);
            loadTestFile();
			loadZonefile();
		},

		/**
		 * Call this to activate ads. This is called from the script loaded in loadTestFile().
		 * @test If isCapable() is called: ADS_BLOCKED should be false.
		 */
		isCapable: function () {
			ADS_BLOCKED = false;
		},

		/**
		 * @param {object} zones
		 */
		setZone: function (zones) {
			var url  = config["location"];
			var site = config["domain"];
			var referrer = document.referrer;
			var data = {keyValues:{}};

			var process = function(base, level) {
				for(var key in level.data) {
					if(key === "keyValues") {
						for(var kw in level.data.keyValues)	{
							data.keyValues[kw] = level.data.keyValues[kw];
						};
					}
					else {
						data[key] = level.data[key];
					};
				};

				if(level.zones)	{
					var ct = level.zones.length;
					while(ct--)	{
						if(url.indexOf(base + level.zones[ct].uri) !== -1) {
							return arguments.callee(base + level.zones[ct].uri, level.zones[ct]);
						};
					};
				};

				return data;
			}
			zoneData = zones.process(process("", zones.zones), site, url, referrer);
		},

		/**
		 * Access the inner config object. Useful for testing purposes.
		 * @param {string} key
		 * @returns {mixed}
		 * @test If configure({x:y}) is called: getConfig("x") should return y.
		 */
		getConfig: function(key) {
			return config[key];
		},

		/**
		 * Won't write the ad tag if ADS_BLOCKED is true, or if the requested slot has been disabled in the zone file.
		 * @param slot
		 * @test If BBC.adverts.isCapable() has been called and setZone() has been called with data containing ads=true: calling write(slotName) should write an ad tag for that slot to the document.
		 */
		write: function(slot) {
			if(ADS_BLOCKED === false && zoneData.ads) {
				if(!zoneData.slots || (zoneData.slots[slot]!=false)) {
					config[slot] = YES;
					document.write(new AdProvider("doubleclick").getAdvertTag(slot));
				}
				else hide(slot);
			}
			else hide(slot);
		},

		/**
		 * Remove the hidden class from the element containing the ad for this slot.
		 * Won't show the ad tag if the ad isn't written.
		 * @param slot
		 * @test If write(slotName) has been called: calling show(slotName) should set the class name of the HTMLElement named bbccom_{slotName} to "".
		 */
		show: function(slot)	{
			var regMatch;
			if (config[slot] === YES) {
				document.getElementById(ID_START + slot).className = "";
				regMatch = slot.match(/^module_([a-z]+)$/);
				if(regMatch) document.getElementById(ID_START + slot).className = "bbccom_module";
			};
		},

		/**
		 * Adds a flag class to the body signalling that the ad is not showing. This allows CSS to clean up any surrounding spacings etc.
		 * @param slot
		 * @test If the ad provider returns a blank ad for a slot: the body class should have a bbcdotcomAdvertsReset{slotname} class appended to it.
		 * @test If the close(slotName) function has been called: calling show(slotName) should have no effect.
		 */
		close: function(slot) {
			config[slot] = NO; // show() will now ignore this slot

			var adHideClass;
			switch(slot) {
				case "leaderboard":
					adHideClass = "bbcdotcomAdvertsResetTop";
					break;
				case "bottom":
					adHideClass = "bbcdotcomAdvertsResetBottom";
					break;
				case "mpu":
					adHideClass = "bbcdotcomAdvertsResetMpu";
					break;
				default:
					adHideClass = "";				
			}

			var currentBodyClass = document.body.className;
			document.body.className = ((currentBodyClass)? currentBodyClass+" " : "") + adHideClass;
		}
	};

}();