!function(a){"use strict";a.fn.fusionSwitchTabOnLinkClick=function(b){var c,d;c=b||("#_"==document.location.hash.substring(0,2)?document.location.hash.replace("#_","#"):document.location.hash),d="#_"==c.substring(0,2)?c.split("#_")[1]:c.split("#")[1],c&&a(this).find('.nav-tabs li a[href="'+c+'"]').length&&(a(this).find(".nav-tabs li").removeClass("active"),a(this).find('.nav-tabs li a[href="'+c+'"]').parent().addClass("active"),a(this).find(".tab-content .tab-pane").removeClass("in").removeClass("active"),a(this).find('.tab-content .tab-pane[id="'+d+'"]').addClass("in").addClass("active")),c&&a(this).find('.nav-tabs li a[id="'+d+'"]').length&&(a(this).find(".nav-tabs li").removeClass("active"),a(this).find('.nav-tabs li a[id="'+d+'"]').parent().addClass("active"),a(this).find(".tab-content .tab-pane").removeClass("in").removeClass("active"),a(this).find('.tab-content .tab-pane[id="'+a(this).find('.nav-tabs li a[id="'+d+'"]').attr("href").split("#")[1]+'"]').addClass("in").addClass("active"))}}(jQuery),jQuery(document).ready(function(a){jQuery(".fusion-tabs").fusionSwitchTabOnLinkClick(),jQuery(".nav-tabs li").click(function(a){var b,c=jQuery(this),d=c.find("a").attr("href");c.attr("id");c.parents(".fusion-tabs").find(".nav li").removeClass("active"),c.parents(".fusion-tabs").find(d).find(".fusion-woo-slider").length&&(b=0,c.parents(".fusion-tabs").hasClass("horizontal-tabs")&&(b=c.parents(".fusion-tabs").find(".nav").height()),c.parents(".fusion-tabs").height(c.parents(".fusion-tabs").find(".tab-content").outerHeight(!0)+b)),setTimeout(function(){c.parents(".fusion-tabs").find(d).find(".shortcode-map").each(function(){jQuery(this).reinitializeGoogleMap()}),c.parents(".fusion-tabs").find(d).find(".fusion-carousel").length&&"function"==typeof generateCarousel&&generateCarousel(),c.parents(".fusion-tabs").find(d).find(".fusion-portfolio").each(function(){var a=jQuery(this).find(".fusion-portfolio-wrapper"),b=a.attr("id");b&&(a=jQuery("#"+b)),a.isotope()}),jQuery(window).trigger("resize"),"function"==typeof jQuery.fn.fusionCalcFlipBoxesHeight&&c.parents(".fusion-tabs").find(d).find(".flip-box-inner-wrapper").each(function(){jQuery(this).fusionCalcFlipBoxesHeight()}),c.parents(".fusion-tabs").find(d).find(".fusion-woo-slider").length&&c.parents(".fusion-tabs").css("height",""),jQuery(".crossfade-images").each(function(){fusionResizeCrossfadeImagesContainer(jQuery(this)),fusionResizeCrossfadeImages(jQuery(this))}),c.parents(".fusion-tabs").find(d).find(".fusion-blog-shortcode").each(function(){var a,b,c=2;for(b=1;b<7;b++)jQuery(this).find(".fusion-blog-layout-grid").hasClass("fusion-blog-layout-grid-"+b)&&(c=b);a=Math.floor(100/c*100)/100+"%",jQuery(this).find(".fusion-blog-layout-grid").find(".fusion-post-grid").css("width",a),jQuery(this).find(".fusion-blog-layout-grid").isotope(),"function"==typeof calcSelectArrowDimensions&&calcSelectArrowDimensions()}),"function"==typeof calcSelectArrowDimensions&&calcSelectArrowDimensions()},350),a.preventDefault()}),Modernizr.mq("only screen and (max-width: "+fusionTabVars.content_break_point+"px)")&&jQuery(".tabs-vertical").addClass("tabs-horizontal").removeClass("tabs-vertical"),jQuery(window).on("resize",function(){Modernizr.mq("only screen and (max-width: "+fusionTabVars.content_break_point+"px)")?(jQuery(".tabs-vertical").addClass("tabs-original-vertical"),jQuery(".tabs-vertical").addClass("tabs-horizontal").removeClass("tabs-vertical")):jQuery(".tabs-original-vertical").removeClass("tabs-horizontal").addClass("tabs-vertical")})}),jQuery(window).load(function(){jQuery(".vertical-tabs").length&&jQuery(".vertical-tabs .tab-content .tab-pane").each(function(){var a;jQuery(this).parents(".vertical-tabs").hasClass("clean")?jQuery(this).css("min-height",jQuery(".vertical-tabs .nav-tabs").outerHeight()-10):jQuery(this).css("min-height",jQuery(".vertical-tabs .nav-tabs").outerHeight()),jQuery(this).find(".video-shortcode").length&&(a=parseInt(jQuery(this).find(".fusion-video").css("max-width").replace("px","")),jQuery(this).css({float:"none","max-width":a+60}))}),jQuery(window).on("resize",function(){jQuery(".vertical-tabs").length&&jQuery(".vertical-tabs .tab-content .tab-pane").css("min-height",jQuery(".vertical-tabs .nav-tabs").outerHeight())})});