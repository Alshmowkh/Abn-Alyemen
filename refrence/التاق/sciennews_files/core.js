/* WorldService Core Class */
  ws = {
    version: '1.4.2',
    glowVersion: '1.6.0',
    jsRoot: '/worldservice/scripts/core/1/',
    cssRoot : '/worldservice/styles/core/1/',

    // Selectors used for unobtrusive JS replacement
    boxQuoteSelector: '.bx-quote',
    browserBackSelector: '.ws-back',
    businessFeedSelector: '.bx-businessfeed',
    carouselSelector: '.li-carousel',    
    collapsedListSelector: '.li-collapsed',
    dynamicSSISelector: '.ssi',
    definitionListSelector: '.li-definition',
    empSelector: '.cEMP',
    enlargeImageSelector: '.bx-enlargeimage',                  
    fontCheckSelector: '.font-check',
    liveTextSelector: '#live-text',
    personalisedListSelector: '.li-personalised',
    scrollingAnchorsSelector: '.scrolling-anchors',
    tabbedListSelector: '.li-tabbed',
    tabbedStorySelector: '.tabbed-story',
    tabsSelector: '.li-tabs',
    tickerSelector: '.li-ticker',
    validateFormsSelector: '.validate',
    voteSelector: '.wsv',
	timeAgoSelector: '.genre-rolling_news .date',
  
    servicesMap: {
        'en': 'english',
        'en-gb': 'english',
        'fa': 'persian',
        'fa_cyrl': 'tajik',
        'id': 'indonesian',
        'tj': 'tajik',
        'ru': 'russian',
        'pt-br': 'portuguese',
        'pt': 'portuguese',
        'es': 'spanish',
        'ur': 'urdu',
        'uk': 'ukrainian',
        'vi': 'vietnamese',
        'ar': 'arabic',
        'hi': 'hindi',
        'tr': 'turkish',
        'zh-hans': 'chinese_simp',
        'zh-hant': 'chinese_trad'
    },
    onloadFunctionsQueue: function() { ws.isReady = true; },
    requiredOnloadFunctions: new Array,

    init: function(glowLib) {
          glow = glowLib;
          
          // Auto set debugging
          this.debug = (location.href.match('wsnmas00')) ? true: false;          

          this.loadModule('modules');
          this.loadModule('media');

          var $ = glow.dom.get;
          var functionList = {
          	'modules': ['ws.modules.carousel',
          	            'ws.modules.collapsedList',
                        'ws.modules.enlargeImage',
                        'ws.modules.boxQuote',
                        'ws.modules.ticker',
                        'ws.modules.tickerUpdate',
                        'ws.modules.photogallery',
                        'ws.modules.popup',
                        'ws.modules.browserBack',
                        'ws.modules.tabs',
                        'ws.modules.validateForms'
                       ],
          	'media':   ['ws.media.insertPlayer',
                        'ws.media.loadEMPScripts'
                        ]
          };


          glow.ready(function() {         
              ws.loadSSIContent(ws.dynamicSSISelector);
              if (ws.debug == true) { ws.cleanSSIErrors(); }
          
              // Try to identify the current service
              $('meta').each(function() {
                 if ($(this)[0].httpEquiv == 'content-language') {
                    ws.currentService = ws.servicesMap[$(this).attr('content').toLowerCase()];
                 };
              });

              // Insert div to check when CSS is loaded
              glow.dom.create('<div class="css-ready"></div>').appendTo('body');

              // Force Barlesque banner to transparent
              glow.dom.get('#blq-acc').css('background-color', 'transparent');

              // Search and inject unobtrusive JS
              ws.onload(function() {                  
                            
                  var $ = glow.dom.get;        
                  ws.modules.enlargeImage(ws.enlargeImageSelector);
                  ws.modules.boxQuote(ws.boxQuoteSelector);     
                  ws.modules.businessFeed(ws.businessFeedSelector);   
                  ws.modules.collapsedList(ws.collapsedListSelector);
                  ws.modules.definitionList(ws.definitionListSelector);
                  ws.modules.tabbedStory(ws.tabbedStorySelector);
                  ws.modules.tabs(ws.tabsSelector);
                  ws.modules.tabbedList(ws.tabbedListSelector);
                  ws.modules.popup();
                  ws.modules.fontCheck(ws.fontCheckSelector);
                  ws.modules.personalisedList(ws.personalisedListSelector);
                  ws.modules.browserBack(ws.browserBackSelector);
                  ws.modules.validateForms(ws.validateFormsSelector);
                  ws.modules.scrollingAnchors(ws.scrollingAnchorsSelector);        
                  ws.modules.carousel(ws.carouselSelector);
                  ws.modules.ticker(ws.tickerSelector);                           
                  ws.modules.liveText(ws.liveTextSelector);                  
                  ws.modules.timeAgo(ws.timeAgoSelector);                  
                  
            			if ($('.cEMP object, .cEMP embed').length == 0) {
            		        // for putting in alternative when no flash but has js after central EMP has tried to load.
            		        $('.teaser .cEMP img').css('display','block');
            		        $('.cEMP wsAV, .wsEMP wsAV').css('display','block');
            		        $('.cEMP p, .wsEMP p').css('display','block');  /* legacy */
            		        $('.cEMP div, .wsEMP div').css('display','block');  /* legacy */
            		        $('.ts-audioemp .cta, .ts-512emp .cta, .ts-448emp .cta, .ts-256emp .cta').css('display','block');
            		        $('.wsAV-alternative').css('display','block');
            		        $('.cEMP').css('height','auto');
            			} 
   
                  // Set a CSS class at the top of the page to enable targeted IE6 styles         
                  if (glow.env.ie == 6) {                
                    if (typeof document.documentElement.className == "string") {
                        document.documentElement.className += " ie6";
                    } else {
                        document.documentElement.className = "ie6";
                    }                  
                  }
                  
                  // Convert go tracking links to live ones
                  /*
                  if (location.href.match('wsnmas04')) {
                      glow.dom.get('#blq-main a, #blq-foot a').each(function() {
                        var url = $(this).attr('href');
                        if (url.match('/go/')) {                
                          url = url.match(/\/go\/.*\/-\/(.*)/i);                    
                          url = url[1];
                          if (!url.match('http://')) { url = 'http://www.bbc.co.uk/'+url; }                                                                         
                        }
                        if (url.substr(0,1) == '/') { url = 'http://www.bbc.co.uk'+url; }
                        $(this).attr('href', url);                  
                      });
                  }     
                  */                         
              });

              // Search for any vote modules
              if (glow.dom.get(ws.voteSelector).length > 0) { ws.loadModule('vote'); }
              ws.media.loadEMPScripts(ws.empSelector);
              ws.fireOnloadEvents();              
                          
          });
          
          // Set up listener for debug panel
          if (this.debug == true) {
            ws.debugKeyCombo = "`"; // "SHIFT+d";
            var debugPanel = glow.events.addKeyListener(ws.debugKeyCombo, "press", function() {
                  ws.loadModule('debug');
                  glow.events.removeListener(debugPanel);
              }
            );
          }

      },

      activateBodyModules: function() {
          ws.modules.enlargeImage(ws.enlargeImageSelector);
          ws.modules.boxQuote(ws.boxQuoteSelector);     
          ws.modules.definitionList(ws.definitionListSelector);   
          ws.modules.popup();
          ws.modules.browserBack(ws.browserBackSelector);
          ws.modules.validateForms(ws.validateFormsSelector);
          ws.modules.scrollingAnchors(ws.scrollingAnchorsSelector);        
      },
      
      cleanSSIErrors: function() {
          var $ = glow.dom.get;
          $('#blq-main div').each(function() {
            var cleaned = $(this).html();
            cleaned = cleaned.replace(/\[an\ error\ occurred\ while\ processing\ this\ directive\]/g, '');
            $(this).html(cleaned);
          });
      },
      
      
      loadSSIContent: function(selector) {
          glow.dom.get(selector).each(function() {
            var currentElement = glow.dom.get(this),
                contentUrl = currentElement.attr('href'),
                tunnelUrl = "/cgi-bin/topcat2/tunnel.pl?";

            if (!contentUrl.match('http://')) { contentUrl = "http://bbc.co.uk"+contentUrl; }

            if ( currentElement.html().match('error occurred') || currentElement.html().match('(none)') ) {
                glow.net.get(tunnelUrl+contentUrl, {
                  useCache: true,
                  async: false,
                  onLoad: function(response) {
                      if (!(response.text().match('Not Found'))) {
                        currentElement.html(response.text());
                      }
                  }
                });
            }
          });
      },
      
      fireOnloadEvents: function() {
          // This will fire the onload events, if all the required dependencies are present
          // It will go through ws.requiredOnloadFunctions(), and if any are 'undefined', it will
          // wait and try again
          
          var canFireOnloadEvents = true;
          glow.lang.map(ws.requiredOnloadFunctions, function(functionName) {
            var functionType = eval('typeof('+functionName+')');
            if ((functionType) == 'undefined') { canFireOnloadEvents = false; }
          });
          
          if (glow.dom.get('.css-ready').css('z-index') != "1234") { canFireOnloadEvents = false; }

          if (canFireOnloadEvents) {
            glow.dom.get('.css-ready').remove();
            ws.onloadFunctionsQueue();
          } else {
            setTimeout("ws.fireOnloadEvents()", 50);
          }
      },


      fixBarlesqueSearch: function(serviceName) {
        glow.dom.get('#blq-mast > form').attr('action', 'http://search.bbc.co.uk/search');
        glow.dom.create('<input type="hidden" name="scope" value="'+serviceName+'"/>').prependTo('#blq-mast > form fieldset');
        glow.dom.create('<input type="hidden" name="tab" value="'+serviceName+'"/>').prependTo('#blq-mast > form fieldset');
      },


      loadJS: function(url, requiredFunctionName) {
        if (ws.debug) {
            var cache = false;
          } else {
            var cache = true;
            url += '?'+ws.version;
        }

        // If the url is local, then use XHR, otherwise use regular Script/DOM attaching
        if (url.match('http://')) {
            // Script attach method
            glow.net.loadScript(url, { useCache: cache });
        } else {
            // XHR Method
            glow.net.get(url, {
              async: false,
              useCache: cache,
              onLoad: function(response) {
                  eval(response.text());
              }
            });
        }

        if (typeof(requiredFunctionName) != 'undefined') {
          // This adds a name to the list of functions/global variables that need to be
          // present before ws.onload() functions are fired. This is to make sure that all
          // external scripts have been loaded before proceeding
          ws.requiredOnloadFunctions[ws.requiredOnloadFunctions.length] = requiredFunctionName;
        }
      },

      loadModule: function(module) {
          this.loadJS(this.jsRoot+'modules/'+module+'.js');
      },

      loadCSS: function(url) {
          glow.dom.get('head').append('<link href="'+(ws.cssRoot+url)+'" rel="stylesheet" type="text/css"/>');
      },

      console: function(msg) {
          // Sends a message to the Firebug console
          if ((typeof console != 'undefined') && (this.debug === true)) { console.log(msg); }
      },

      uid: function(prefix) {
          // Generate a random string of characters. Used for creating uniquely named DOM nodes.
          if (prefix == 'undefined') { prefix = ''; }
          var chars = "abcdefghiklmnopqrstuvwxyz0123456789",
              length = 8,
              randomstr = '';
              
        	for (i=0; i<length; i++) {
        		r = Math.floor(Math.random() * chars.length);
        		randomstr += chars.substring(r,r+1);
        	}
          return prefix+'_'+randomstr;
      },


      onload: function(callback) {
        // Add the function to the main queue, to be fired when everything is loaded
        var oldOnloadFunctions = ws.onloadFunctionsQueue;
					ws.onloadFunctionsQueue = function() {
						oldOnloadFunctions();
						callback();
					};
      },
      
      getSlotWidthFor: function(selector) {
        var element = glow.dom.get(selector),
            container = element;

        if (element.length > 0) {
          while (!container.hasClass('g-container')) {
            if (container.is('body')) { return false; }
            container = container.parent();
          }
          var slotWidth = container.width();
          if (glow.dom.get('.bodytext').length > 0) {
            slotWidth = glow.dom.get('.bodytext').width();
          }
          return slotWidth;
        } else {
          return false;
        }
      },
      
      outerHtml: function(selector) {
        var tmpNode = glow.dom.create('<div></div>').append(glow.dom.get(selector).clone());
        var markup = tmpNode.html();
        tmpNode.destroy();
        return markup;
      },        
      
      // Deprecated Methods
      mediaplayer: function(id, options) {
        ws.media.insertPlayer(id, options);
      }

  };



/* Vocab */
  ws.vocab = {
        // English - Default base dictionary
        dictionary: {
            requiredField : "This is required.",
            invalidEmail:   "This is not a valid email.",
            numbersOnly:    "This can only be a number.",
            cannotUseBBCAddress:   "Cannot use BBC address here",
            emptyField:     "Cannot be empty",
            pleaseFillRequiredFields: "Please fill required fields",
            flash8Required:  "Flash 8 is required to play this media."
        },

        // Retrieval method
        get: function(term) {
          // Load dictionary for the current service
          if (ws.currentService != 'english') {
            if (typeof(ws.vocab.dictionaryLoaded) == 'undefined') {
              ws.loadJS(ws.jsRoot+'vocab/'+ws.currentService+'.js');
              ws.vocab.dictionaryLoaded = true;
            }
          }
          return ws.vocab.dictionary[term];
        },

		//only for russian timeAgo.
		numpf_ru: function(n, f, s, t) {
			// f - 1, 21, 31, ...
			// s - 2-4, 22-24, 32-34 ...
			// t - 5-20, 25-30, ...
			var n10 = n % 10;
			if ( (n10 == 1) && ( (n == 1) || (n > 20) ) ) {
				return f;
			} else if ( (n10 > 1) && (n10 < 5) && ( (n > 20) || (n < 10) ) ) {
				return s;
			} else {
				return t;
			}
		}		
  };



/* User Preferences (cookies) */
	ws.prefs = {
		data: {},

		write: function(key, value) {
			ws.prefs.data[key] = value;
			var cookieJSON = glow.data.encodeJson(ws.prefs.data);
	    document.cookie = 'wsPrefs='+cookieJSON+';path=/worldservice'+';expires='+new Date(2010, 01, 01).toUTCString();
		},

		read: function(key) {
      var wsCookie = ws.prefs._getCookie('wsPrefs');
      if (wsCookie) { ws.prefs.data = glow.data.decodeJson(wsCookie); }
			return ws.prefs.data[key];
		},

		_getCookie: function(cookieName) {
		   var allCookies = document.cookie.split("; ");
		   for (var i=0; i<allCookies.length; i++) {
  			 var cookieCrumb = allCookies[i].split("=");
  			 if (cookieName == cookieCrumb[0]) { return unescape(cookieCrumb[1]); }
		   }
		   return null;
		}
	};



/* Load Glow */
  gloader.load([  "glow", ws.glowVersion,
                  "glow.dom",
                  "glow.data",
                  "glow.forms",
                  "glow.net",
                  "glow.embed",
                  "glow.events",
                  "glow.dragdrop",
                  "glow.widgets.Carousel",
                  "glow.widgets.Overlay",
                  "glow.widgets.InfoPanel",
                  "glow.widgets.Panel"
          ], {
          onLoad: function(glow) {
              ws.init(glow);
          }
      }
  );


/* Utility function to traverse search parents - Glow 1.7 will include this */
function getParentWithClass(elm, className) {
  elm = glow.dom.get(elm).slice(0,1);
  while ( !elm.hasClass(className) ) {
    elm = elm.parent();
    if (elm[0].nodeName.toLowerCase() == "body") return new glow.dom.NodeList();
  }
  return elm;
}

/* Legacy functions mapping to the WS core library */
  function loadMovie() {
    ws.media.loadMovie();
    ws.console('loadMovie() is deprecated. Please use ws.media.loadMovie()');
  }

  function tcav__log_livestats(url) {
    ws.media.liveStats(url);
    ws.console('tcav__log_livestats() is deprecated. Please use ws.media.liveStats(url)');
  }