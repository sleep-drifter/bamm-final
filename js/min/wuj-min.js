function centerArrow(){var i=$(".down-arrow"),t=i.innerWidth(),e=$(".home-page").innerWidth();i.css("left",(e-(t+30))/2+"px")}function collapseContent(){jQuery("div.col-right").each(function(){$(this).velocity({height:0,opacity:0},{duration:0,easing:"easeInSine",visibility:"hidden"})})}function alignElements(){var i=$(".relative-placement");i.each(function(){var i=$(this),t=i.parents(".full-section"),e=t.attr("id");"home-section"===e&&viewportWidth>queryWidth?(t.css("height",viewportHeight+"px"),i.css("height",viewportHeight+"px")):(t.css("height",viewportHeight+"px"),i.css({top:(viewportHeight-i.innerHeight())/2+"px"})),$(".col-left").each(function(i){var t=$(this).find("img"),e=t.innerHeight(),o=$(this).innerHeight(),n=viewportHeight-$(".col-middle").outerHeight();queryWidth>viewportWidth&&($(this).css("height",n-100+"px"),4!==i?t.css("top",(o-e)/3+"px"):t.css("margin-top","10px")),queryWidth>viewportWidth&&$(".swiper-container").css("height",n+"px")})})}function replaceSVG(){jQuery("img.svg").each(function(){var i=jQuery(this),t=i.attr("id"),e=i.attr("class"),o=i.attr("src");jQuery.get(o,function(o){var n=jQuery(o).find("svg");"undefined"!=typeof t&&(n=n.attr("id",t)),"undefined"!=typeof e&&(n=n.attr("class",e+" replaced-svg")),n=n.removeAttr("xmlns:a"),i.replaceWith(n)},"xml")})}function scaleVideo(){var i,t=$("#bg-video"),e=$(t)[0].videoHeight,o=$(t)[0].videoWidth,n=viewportHeight/e,a=viewportWidth/o;i=a>n?a:n;var r=i*e,s=i*o;console.log("videoWidth: "+s+" videoHeight: "+r),t.height(r),t.width(s)}var queryWidth=800,viewportHeight=$(window).height(),viewportWidth=$(window).width();$(document).ready(function(){function i(i){var t=$(".problem-title"),e=$(".problem-description"),o=$(".mobile-animation"),n=$(".problem-copy"),a,r;"Vision"===i&&(a=0,r="img/b2b-animation-a.gif"),"Obstacles"===i&&(a=1,r="img/b2b-animation-b.gif"),"Solution"===i&&(a=2,r="img/b2b-animation-c.gif"),t.css("opacity",0),e.css("opacity",0),o.css("opacity",0),setTimeout(function(){t.text(u[a].title),e.text(u[a].description),o.attr("src",r);var i=e.innerHeight();console.log(i),n.velocity({height:i+30},{duration:300,easing:"easeInSine"})},500),setTimeout(function(){t.css("opacity",1),e.css("opacity",1),o.css("opacity",1)},800)}if(centerArrow(),$(".down-arrow").click(function(){$("#problem-section").velocity("scroll",{duration:300})}),queryWidth>viewportWidth&&$(".col-title").each(function(){var i=$(this).outerHeight();$(this).css("top",-1*i+"px")}),viewportWidth>queryWidth&&$(".col-left > img").each(function(){var i=$(this);i.css({opacity:0,visibility:"hidden"});var t=new Waypoint({element:$(this),offset:"45%",handler:function(){i.velocity({opacity:1,top:[-60,[1,1]]},{delay:300,visibility:"visible"}),t.disable()}})}),viewportWidth>queryWidth){var t,e=["http://player.vimeo.com/video/100126080","http://player.vimeo.com/video/115010854","http://player.vimeo.com/video/112964858"];$(".lightbox-targetlink").each(function(i){console.log(i%3),i%3===1?($.featherlight.defaults.artistName="Artist 3",$.featherlight.defaults.artistInfo="Artists 1 Info here...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",t=$.featherlight.defaults,$(this).featherlight($("#video"),t)):i%3===2?($.featherlight.defaults.artistName="Artists 1",$.featherlight.defaults.artistInfo="Artists 1 Info here...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",t=$.featherlight.defaults,$(this).featherlight($("#video"),t)):($.featherlight.defaults.artistName="Artists 2",$.featherlight.defaults.artistInfo="Artists 2 Info here...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",t=$.featherlight.defaults,$(this).featherlight($("#video"),t)),$(this).click(function(){i%3===1?$("#video").attr("src",e[0]):i%3===2?$("#video").attr("src",e[1]):$("#video").attr("src",e[2])})})}else $("a.lightbox-targetlink").each(function(){$(this).click(function(i){i.preventDefault()})});var o=$("#solution-expanded"),n=o.innerHeight();o.velocity({height:0},{duration:0,easing:"easeInSine",visibility:"hidden"}),$("a.slide-toggle-btn").click(function(i){i.preventDefault(),$("#solution-page").velocity("scroll",{duration:400}),$("#solution-expanded").velocity({height:0},{duration:500,delay:600,easing:"easeInSine",visibility:"hidden"}),o.toggleClass("section-active")}),$(".solution-list a").click(function(i){i.preventDefault();var t=$(this).attr("href");o.hasClass("section-active")||$("#solution-expanded").velocity({height:n},{duration:800,easing:"easeInSine",visibility:"visible",complete:function(){$(t).velocity("scroll",{duration:800}),o.toggleClass("section-active")}})}),$("div.hidden-solution").click(function(){$("#solution-expanded").velocity({height:n,opacity:1},{duration:800,visibility:"visible",complete:function(){o.toggleClass("section-active")}})}),$(".swiper-container").each(function(){$(this).slick({arrows:!1,dots:!0,infinite:!1})}),$(".quotes-artists").slick({arrows:!0,prevArrow:'<img class="quote-arrow prev-arrow" src="img/left-arrow.png" style="inline-block">',nextArrow:'<img class="quote-arrow next-arrow" src="img/right-arrow.png" style="inline-block">',dots:!1,infinite:!0,draggable:!0,autoplay:!0,autoplaySpeed:6e3,adaptiveHeight:!0}),$("a.library-genre-link").click(function(i){i.preventDefault();var t=$(this).attr("index");$("#library-section").find(".swiper-container").slick("slickGoTo",t)}),$("a.slider-link").click(function(i){i.preventDefault();var t=$(this).attr("href");$("#artists-section").find(".swiper-container").slick("slickGoTo",t)}),replaceSVG(),alignElements(),$(".social-links li").hover(function(){var i=$(this),t=i.find("svg path, .svg polygon");t.attr("fill","#CCC")},function(){var i=$(this),t=i.find("svg path, .svg polygon");t.attr("fill","#3A3A3A")});var a=$("#video-placement");viewportWidth>queryWidth&&(console.log("play video"),a.prepend('<video id="bg-video" loop autoplay muted></video>'),a.find("video").prepend('<source src="video/bgVideo-converted.mp4" type="video/mp4">'));var r=$("#bg-video"),s=$("#video-placement");viewportWidth>queryWidth?(r.on("loadedmetadata",scaleVideo),$(window).on("resize",scaleVideo)):s.addClass("background-image");var l=0,c=$("#animation"),d={startingXpos:0,resetAt:0,stopAt:-2e3,vertical:"top"},h;viewportWidth>queryWidth&&setInterval(function(){h&&(l=d.startingXpos,h=!1),l-=500,l===d.stopAt&&(l=d.resetAt),c.css({"background-position":l+"px "+d.vertical})},100);var u=[{title:"The Vision",description:"You have an idea of how to enhance your services and build stronger customer relationships through music. It should be easy to find perfectly reasonable business partners that are interested in making a deal, but it's not."},{title:"The Obstacles",description:"The problem is sytematic. Barriers are in every step of the process. Traditional licensing and technology solutions are time consuming and expensive. You are competing with free music content. Differentiation and sound business models seem elusive at best when it comes to music licesning and content delivery."},{title:"Our Solution",description:"BAMM.tv removes the barriers with a straightforward approach to licensing and distributing original music programming that provides major networks and carriers with the opportunity to dramatically transform their customer relationships. We provide a deep library of curated, one-of-a-kind content that can be made to order for your specific needs. By streamlining the process and leveraging the latest technology, BAMM.tv offers a music business model that is powerful, exciting, and logical."}];$("a.flash-btn").hover(function(){$(this).removeClass("flash-btn")}),$(".problem-list a").click(function(i){i.preventDefault(),$(this).parent().find(".flash-btn").removeClass("flash-btn")});var p=$(".first"),v=$(".second"),g=$(".third");$(".problem-list a").click(function(){var t=$(this);if(t.hasClass("active-problem-link"));else{t.parents(".problem-list").find(".active-problem-link").removeClass("active-problem-link"),t.addClass("active-problem-link");var e=t.text();i(e)}return h=!0}),viewportWidth>queryWidth&&(p.on("click",function(){return d={startingXpos:0,resetAt:0,stopAt:-2e3,vertical:"top"}}),v.click(function(){return d={startingXpos:-2e3,resetAt:-4e3,stopAt:-5500,vertical:"top"}}),g.click(function(){return d={startingXpos:0,resetAt:-9e3,stopAt:-12500,vertical:"bottom"}})),queryWidth>viewportWidth&&collapseContent(),$(".col-middle").each(function(i){var t=$(this).find("a");t.parents(".col-middle").append('<span class="instruction-middle">Tap again to collapse</span>');var e=t.parents(".col-middle").find(".instruction-middle");e.css("visibility","hidden"),t.click(function(){var i=$(this).parents(".row").find("div.col-right");i.toggleClass("mobile-expanded"),i.hasClass("mobile-expanded")?(t.toggleClass("active-middle-link"),i.velocity({height:viewportHeight,opacity:1},{duration:800,visibility:"visible"}),e.velocity({"margin-top":"20px",opacity:1},{duration:400,visibility:"visible"}),console.log(i.find("div.slick-list")),i.find("div.slick-list").css("width",function(){$(this).css("height",viewportHeight-40+"px")})):(t.toggleClass("active-middle-link"),i.velocity({height:0,opacity:0},{duration:300,visibility:"hidden"}),e.velocity({"margin-top":"0px",opacity:0},{duration:200,easing:"easeInSine",visibility:"hidden"}))})})}),$(window).resize(function(){viewportHeight=$(window).height(),viewportWidth=$(window).width(),queryWidth>viewportWidth&&collapseContent(),alignElements(),centerArrow()}),$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")||location.hostname===this.hostname)if("#footer"===$(this).attr("href"));else{var i=$(this.hash);if(i=i.length?i:$("[name="+this.hash.slice(1)+"]"),i.length)return i.velocity("scroll",{duration:1e3}),!1}});