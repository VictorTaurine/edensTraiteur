!function(a){"use strict";a.fn.init_waypoint=function(){a().waypoint&&a(".fusion-animated").each(function(){var b,c,d=getWaypointOffset(a(this));"top-out-of-view"===d&&(b=getAdminbarHeight(),c="function"==typeof getStickyHeaderHeight?getStickyHeaderHeight():"0",d=b+c),a(this).waypoint(function(){var b,c,d;a(this).parents(".fusion-delayed-animation").length||(a(this).css("visibility","visible"),b=a(this).data("animationtype"),c=a(this).data("animationduration"),a(this).addClass(b),c&&(a(this).css("-moz-animation-duration",c+"s"),a(this).css("-webkit-animation-duration",c+"s"),a(this).css("-ms-animation-duration",c+"s"),a(this).css("-o-animation-duration",c+"s"),a(this).css("animation-duration",c+"s"),d=a(this),setTimeout(function(){d.removeClass(b)},1e3*c)))},{triggerOnce:!0,offset:d})})}}(jQuery),jQuery(document).ready(function(a){"1"!=fusionAnimationsVars.disable_mobile_animate_css&&cssua.ua.mobile?jQuery("body").addClass("dont-animate"):jQuery("body").addClass("do-animate")}),jQuery(window).load(function(){setTimeout(function(){jQuery(window).init_waypoint()},300)});