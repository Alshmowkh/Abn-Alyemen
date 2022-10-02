BBC.adverts.setZone({
	zones: {
		data: {
			ads: false,
			zone: "_default",
			site: "bbccom.live.site.www",
			keyValues: {sectn: "nonnews"},
			slots: {}
		},
		zones: [
		{
			uri: "/home/beta/index.shtml",
			data: {
				ads: true,
				zone: "bbc_homepage_uk",
				site: "bbccom.live.site.www",
				keyValues: {nnsec: "homepage_uk", sectn: "nonnews"},
				slots: {module_a:false, module_b:true, module_c:true, module_h:false, module_k: false, module_n:false, module_v:true}
			}
		},
		{
			uri: "/home/beta/index.int.shtml",
			data: {
				ads: true,
				zone: "bbc_homepage_int",
				site: "bbccom.live.site.www",
				keyValues: {nnsec: "homepage_int", sectn: "nonnews"},
				slots: {module_a:false, module_b:true, module_c:true, module_h:false, module_k: false, module_n:false, module_v:true}
			}
		},
		{
			uri: "/home/d/",
			data: {
				ads: true,
				zone: "bbc_homepage_uk",
				site: "bbccom.live.site.www",
				keyValues: {nnsec: "homepage_uk", sectn: "nonnews"},
				slots: {module_a:false, module_b:true, module_c:true, module_h:false, module_k: false, module_n:false, module_v:true}
			}
		},
		{
			uri: "/home/i/",
			data: {
				ads: true,
				zone: "bbc_homepage_int",
				site: "bbccom.live.site.www",
				keyValues: {nnsec: "homepage_int", sectn: "nonnews"},
				slots: {module_a:false, module_b:true, module_c:true, module_h:false, module_k: false, module_n:false, module_v:true}
			}
		},
		{
			uri: "/weather",
			data: {ads: true, zone: "weather_homepage_uk", keyValues: {wsec: "homepage_uk"}, slots: {}},
			zones:
			[
				{
					uri: "/ukweather/",
					data: {zone: "weather_content", keyValues: {wsec: "content"}, slots: {}}
				},
				{
					uri: "/world/",
					data: {zone: "weather_content", keyValues: {wsec: "content"}, slots: {}}
				},
				{
					uri: "/sports/",
					data: {zone: "weather_content", keyValues: {wsec: "content"}, slots: {}}
				},
				{
					uri: "/coast/",
					data: {zone: "weather_content", keyValues: {wsec: "content"}, slots: {}}
				},
				{
					uri: "/features/",
					data: {zone: "weather_content", keyValues: {wsec: "content"}, slots: {}}
				},
				{
					uri: "/weatherwise/",
					data: {zone: "weather_content", keyValues: {wsec: "content"}, slots: {}}
				},
				{
					uri: "/bbcweather/",
					data: {zone: "weather_content", keyValues: {wsec: "content"}, slots: {}}
				},
				{
					uri: "/multimedia/",
					data: {zone: "weather_content", keyValues: {wsec: "content"}, slots: {}}
				},
				{
					uri: "/help.shtml",
					data: {zone: "weather_content", keyValues: {wsec: "content"}, slots: {}}
				},
				{
					uri: "/pollen/",
					data: {zone: "weather_content", keyValues: {wsec: "content"}, slots: {}}
				},
				{
					uri: "/webcam/",
					data: {zone: "weather_content", keyValues: {wsec: "content"}, slots: {}}
				},
				{
					uri: "/24hr.shtml",
					data: {zone: "weather_content", keyValues: {wsec: "content"}, slots: {}}
				},
				{
					uri: "/24hr_f.shtml",
					data: {zone: "weather_content", keyValues: {wsec: "content"}, slots: {}}
				},
				{
					uri: "/5day.shtml",
					data: {zone: "weather_content", keyValues: {wsec: "content"}, slots: {}}
				},
				{
					uri: "/5day_f.shtml",
					data: {zone: "weather_content", keyValues: {wsec: "content"}, slots: {}}
				}
			]
		}
		]
	},
	process: function(zoneData, domain, path, referrer) {

        // Referrer KeyValue
        if (referrer == "") {
            // Non-bbc
            zoneData.keyValues.referrer = "nonbbc";
        } else if((matchArr = referrer.match(/^(http[s]?:\/\/[a-z0-9\.]*bbc\.co\.uk)((?:\/(?:\w|-|\+|\.)+)*)(\/.*)$/)) && zoneData.keyValues) {
            // Within bbc website
            var refString;
            refString = matchArr[2].replace(/\//g,"");
            if(refString.length > 0 && refString.length <= 64) {
                zoneData.keyValues.referrer = escape(refString);
            } else {
                zoneData.keyValues.referrer = "";
            }
        } else {
            // Catch exceptions
            zoneData.keyValues.referrer = "nonbbc";
        }

		// Referrer_Domain KeyValue
		var refDomain;
		if ((refDomain = referrer.match(/^(http[s]?:\/\/)([a-z0-9\.]*)((?:\/(?:\w|-|\+|\.)+)*)(\/.*)$/))) {
			zoneData.keyValues.referrer_domain = refDomain[2];
		} else {
			zoneData.keyValues.referrer_domain = "";
		}

		// Behavioral targeting adserver integration
		var rsi_segs = [];
		var segs_beg=document.cookie.indexOf('rsi_segs=');
		if(segs_beg>=0){
			segs_beg=document.cookie.indexOf('=',segs_beg)+1;
			if(segs_beg>0){
				var segs_end=document.cookie.indexOf(';',segs_beg);
				if(segs_end==-1)segs_end=document.cookie.length;
				rsi_segs=document.cookie.substring(segs_beg,segs_end).split('|');
			}
		}
		var segQS = rsi_segs.length> 0 ? "rsi=" + rsi_segs[0] +";" : "";
		for (var i = 1; i <rsi_segs.length && i <20; i++)
			segQS += ("rsi" + "=" + rsi_segs[i] + ";");
		
		
		//add rsi variables to keyValues
		zoneData.keyValues.rsi = segQS.substring(4,segQS.length-1);
	
		return zoneData;
	}
});



