/* ========================================
[Master Stylesheet]

Project:        health and beauty
Version:        1.0
Last change:    07.07.2016
Primary use:    Medic Health & Beauty Business Template
Author:         CodeClone
URL:            http://themeforest.net/user/cc_theme
   ======================================== */

// ==== initialization
    // Date Picker 
    // Modal On Load / HSH-FRWD 
    // Bootstrap Parent Modal 
    // Color switcher demo
    // Template preloader 
    // Platform Detecting 
    // Hash Forwarding / HSH-FRWD 
    // Background Parallax effect 
    // Home Fullscreen Resize 
    // Magnific Popup 
    // lightbox popup  
    // Nivo Lightbox 
    // Wow initialize
    // Fit Vids 
    // YT Player for Video 
    // equalHeights Resizing

// ==== Header Function 
    // Fullpage Menu 
    // Side Push Panel 
    // scrollToTop 
    // One Page Nav close on click 
    // Active Menu Item on Reaching Different Sections 
    // SmoothScroll (on click scrool to target with smoothness) 
    // Scroll navigation 
    // collapsed menu 
    // Menuzord 
    // Sticky Nav 
    // home parallax & fade 
    // Top search toggle 
    // Fullpage Menu 
    // Fullpage Menu

// ==== Slider Function 
    // Typed Text Carousel 
    // Flexslider 
    // Owl Carousel 
    // BxSlider 

// ==== Widget Function 
    // Event Calendar 
    // Vertical Masonry Timeline 
    // Masonry Isotope 
    // CountDown 
    // progress bar 
    // Funfact Number Counter 
    // Instagram Feed 
    // Flickr Feed
    // accordion & toggles 
    // tooltip 
    // Twitter Feed

 var CODECLONE = CODECLONE || {};

(function($) {
    "use strict";

    CODECLONE.initialize = {

        init: function() {
            CODECLONE.initialize.CC_datePicker();
            CODECLONE.initialize.CC_onLoadModal();
            CODECLONE.initialize.CC_loadBSParentModal();
            CODECLONE.initialize.CC_demoColorSwitcher();
            CODECLONE.initialize.CC_platformDetect();
            CODECLONE.initialize.CC_attributesCustomData();
            CODECLONE.initialize.CC_parallaxBgInit();
            CODECLONE.initialize.CC_fullscreenResize();
            CODECLONE.initialize.CC_magnificPopup_lightbox();
            CODECLONE.initialize.CC_prettyPhoto_lightbox();
            CODECLONE.initialize.CC_nivoLightBox();
            CODECLONE.initialize.CC_wow();
            CODECLONE.initialize.CC_fitVids();
            CODECLONE.initialize.CC_YTPlayer();
            CODECLONE.initialize.CC_equalHeightDivs();
        },

        // ========== Date Picker / HSH-FRWD
        CC_datePicker: function() {
            $( ".date-picker" ).datepicker();
            $( ".time-picker" ).timepicker();
        },

        // ========== Modal On Load / HSH-FRWD
        CC_onLoadModal: function() {
            var $modal = $('.modal-on-load');
            if( $modal.length > 0 ) {
                $modal.each( function(){
                    var element             = $(this),
                        elementTarget       = element.attr('data-target'),
                        elementTargetValue  = elementTarget.split('#')[1],
                        elementDelay        = element.attr('data-delay'),
                        elementTimeout      = element.attr('data-timeout'),
                        elementAnimateIn    = element.attr('data-animate-in'),
                        elementAnimateOut   = element.attr('data-animate-out');

                    if( !element.hasClass('enable-cookie') ) { $.removeCookie( elementTargetValue ); }

                    if( element.hasClass('enable-cookie') ) {
                        var elementCookie = $.cookie( elementTargetValue );

                        if( typeof elementCookie !== 'undefined' && elementCookie == '0' ) {
                            return true;
                        }
                    }

                    if( !elementDelay ) {
                        elementDelay = 1500;
                    } else {
                        elementDelay = Number(elementDelay) + 1500;
                    }

                    var t = setTimeout(function() {
                        $.magnificPopup.open({
                            items: { src: elementTarget },
                            type: 'inline',
                            mainClass: 'mfp-no-margins mfp-fade',
                            closeBtnInside: false,
                            fixedContentPos: true,
                            removalDelay: 500,
                            callbacks: {
                                open: function(){
                                    if( elementAnimateIn !== '' ) {
                                        $(elementTarget).addClass( elementAnimateIn + ' animated' );
                                    }
                                },
                                beforeClose: function(){
                                    if( elementAnimateOut !== '' ) {
                                        $(elementTarget).removeClass( elementAnimateIn ).addClass( elementAnimateOut );
                                    }
                                },
                                afterClose: function() {
                                    if( elementAnimateIn !== '' || elementAnimateOut !== '' ) {
                                        $(elementTarget).removeClass( elementAnimateIn + ' ' + elementAnimateOut + ' animated' );
                                    }
                                    if( element.hasClass('enable-cookie') ) {
                                        $.cookie( elementTargetValue, '0' );
                                    }
                                }
                            }
                        }, 0);
                    }, Number(elementDelay) );

                    if( elementTimeout !== '' ) {
                        var to = setTimeout(function() {
                            $.magnificPopup.close();
                        }, Number(elementDelay) + Number(elementTimeout) );
                    }
                });
            }
        },

        // ========== Bootstrap Parent Modal
        CC_loadBSParentModal: function() {
            var ajax_load_content = true;
            if( ajax_load_content ) {
                $.ajax({
                    url: "ajax-loaded/bootstrap-parent-modal.html",
                    success: function (data) { $('body').append(data); },
                    dataType: 'html'
                });
            }
        },

        // ========== Color switcher demo 
        CC_demoColorSwitcher: function() {
            var switcher_show = true;
            var $styleSwitcher = $('#style-switcher'); 
            if( !$styleSwitcher.length && switcher_show ) {
                $.ajax({
                    url: "color-switcher/style-switcher.html",
                    success: function (data) { $('body').append(data); },
                    dataType: 'html'
                });
            }
        },

        // ========== Template preloader
        CC_preLoaderClickDisabler: function() {
            var $preloader = $('#preloader');
            $preloader.children('#disable-preloader').on('click', function(e) {
                $preloader.fadeOut();
                return false;
            });
        },

        CC_preLoaderOnLoad: function() {
            var $preloader = $('#preloader');
            $preloader.delay(200).fadeOut('slow');
        },

        // ========== Platform Detecting
        CC_platformDetect: function() {
            if (CODECLONE.isMobile.any()) {
                $html.addClass("mobile");
            } else {
                $html.addClass("no-mobile");
            }
        },

        // ========== Hash Forwarding / HSH-FRWD
        CC_forwardingHash: function() {
            if (window.location.hash) {
                var hash_offset = $(window.location.hash).offset().top;
                $("html, body").animate({
                    scrollTop: hash_offset
                });
            }
        },

        // ========== Background image, color, Width, Height
        CC_attributesCustomData: function() {
            $('[data-bg-color]').each(function() {
                $(this).css("cssText", "background: " + $(this).data("bg-color") + " !important;");
            });
            $('[data-bg-img]').each(function() {
                $(this).css('background-image', 'url(' + $(this).data("bg-img") + ')');
            });
            $('[data-height]').each(function() {
                $(this).css('height', $(this).data("height"));
            });
            $('[data-width]').each(function() {
                $(this).css('width', $(this).data("width"));
            });
            $('[data-margin-left]').each(function() {
                $(this).css('margin-left', $(this).data("margin-left"));
            });
            $('[data-margin-bottom]').each(function() {
                $(this).css('margin-bottom', $(this).data("margin-bottom"));
            });
            $('[data-margin-right]').each(function() {
                $(this).css('margin-right', $(this).data("margin-right"));
            });
            $('[data-margin-top]').each(function() {
                $(this).css('margin-top', $(this).data("margin-top"));
            });
        },

        // ========== Background Parallax effect
        CC_parallaxBgInit: function() {
            if (!CODECLONE.isMobile.any()) {
                $.stellar({
                    horizontalScrolling: false,
                    responsive: true
                });
            } else {
                $('.parallax').addClass("mobile-parallax");
            }
        },

        // ========== Home Fullscreen Resize
        CC_fullscreenResize: function() {
            var windowHeight = $window.height();
            $('.fullscreen, .revslider-fullscreen').height(windowHeight);
        },

        // ========== Magnific Popup
        CC_magnificPopup_lightbox: function() {
            
            $('.image-popup-lightbox').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                fixedContentPos: true,
                mainClass: 'mfp-no-margins mfp-fade', // class to remove default margin from left and right side
                image: {
                    verticalFit: true
                }
            });
            $('.image-popup-vertical-fit').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                mainClass: 'mfp-img-mobile',
                image: {
                    verticalFit: true
                }
            });

            $('.image-popup-fit-width').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                image: {
                    verticalFit: false
                }
            });

            $('.image-popup-no-margins').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                fixedContentPos: true,
                mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
                image: {
                    verticalFit: true
                },
                zoom: {
                    enabled: true,
                    duration: 300 // don't foget to change the duration also in CSS
                }
            });

            $('.popup-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                tLoading: 'Loading image #%curr%...',
                mainClass: 'mfp-img-mobile',
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                    titleSrc: function(item) {
                        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                    }
                }
            });

            $('.zoom-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                closeOnContentClick: false,
                closeBtnInside: false,
                mainClass: 'mfp-with-zoom mfp-img-mobile',
                image: {
                    verticalFit: true,
                    titleSrc: function(item) {
                        return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
                    }
                },
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true,
                    duration: 300, // don't foget to change the duration also in CSS
                    opener: function(element) {
                        return element.find('img');
                    }
                }
                
            });
            
            $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,

                fixedContentPos: false
            });

            $('.popup-with-zoom-anim').magnificPopup({
                type: 'inline',

                fixedContentPos: false,
                fixedBgPos: true,

                overflowY: 'auto',

                closeBtnInside: true,
                preloader: false,

                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-zoom-in'
            });

            $('.popup-with-move-anim').magnificPopup({
                type: 'inline',

                fixedContentPos: false,
                fixedBgPos: true,

                overflowY: 'auto',

                closeBtnInside: true,
                preloader: false,

                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-slide-bottom'
            });

            $('.form-ajax-load').magnificPopup({
              type: 'ajax'
            });

            var $ajax_magnific_lightbox = $('[data-lightbox="ajax"]');
            if( $ajax_magnific_lightbox.length > 0 ) {
                $ajax_magnific_lightbox.magnificPopup({
                    type: 'ajax',
                    closeBtnInside: false,
                    callbacks: {
                        ajaxContentAdded: function(mfpResponse) {
                        },
                        open: function() {
                        },
                        close: function() {
                        }
                    }
                });
            }
            
            $('.popup-with-form').magnificPopup({
                type: 'inline',
                preloader: false,
                focus: '#name',

                mainClass: 'mfp-no-margins mfp-fade',
                closeBtnInside: false,
                fixedContentPos: true,

                // When elemened is focused, some mobile browsers in some cases zoom in
                // It looks not nice, so we disable it:
                callbacks: {
                  beforeOpen: function() {
                    if($(window).width() < 700) {
                      this.st.focus = false;
                    } else {
                      this.st.focus = '#name';
                    }
                  }
                }
            });

            /*================================
                portfolio magnificPopup
              ================================*/
            var $lightboxImage = $('[data-lightbox="image"]'),
                $lightboxGallery = $('[data-lightbox="gallery"]'),
                $lightboxIframe = $('[data-lightbox="iframe"]'),
                $lightboxInline = $('[data-lightbox="inline"]');

            //lightbox image
            if( $lightboxImage.length > 0 ) {
                $lightboxImage.magnificPopup({
                    type: 'image',
                    closeOnContentClick: true,
                    closeBtnInside: false,
                    fixedContentPos: true,
                    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
                    image: {
                        verticalFit: true
                    }
                });
            }

            //lightbox gallery
            if( $lightboxGallery.length > 0 ) {
                $lightboxGallery.each(function() {
                    var element = $(this);
                    element.magnificPopup({
                        delegate: 'a[data-lightbox="gallery-item"]',
                        type: 'image',
                        closeOnContentClick: true,
                        closeBtnInside: false,
                        fixedContentPos: true,
                        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
                        image: {
                            verticalFit: true
                        },
                        gallery: {
                            enabled: true,
                            navigateByImgClick: true,
                            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                        },
                        zoom: {
                          enabled: true,
                          duration: 300, // don't foget to change the duration also in CSS
                          opener: function(element) {
                            return element.find('img');
                          }
                        }

                    });
                });
            }

            //lightbox iframe
            if( $lightboxIframe.length > 0 ) {
                $lightboxIframe.magnificPopup({
                    disableOn: 600,
                    type: 'iframe',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: false
                });
            }

            //lightbox inline
            if( $lightboxInline.length > 0 ) {
                $lightboxInline.magnificPopup({
                    type: 'inline',
                    mainClass: 'mfp-no-margins mfp-zoom-in',
                    closeBtnInside: false,
                    fixedContentPos: true
                });
            }
        },

        // ========== lightbox popup
        CC_prettyPhoto_lightbox: function() {
            //prettyPhoto lightbox
            $("a[data-rel^='prettyPhoto']").prettyPhoto({
                hook: 'data-rel',
                animation_speed:'normal',
                theme:'light_square',
                slideshow:3000, 
                autoplay_slideshow: false,
                social_tools: false
            });
        },

        // ========== Nivo Lightbox
        CC_nivoLightBox: function() {
            $('a[data-lightbox-gallery]').nivoLightbox({
                effect: 'fadeScale'
            });
        },

        // ========== Wow initialize
        CC_wow: function() {
            var wow = new WOW({
                mobile: false // trigger animations on mobile devices (default is true)
            });
            wow.init();
        },

        // ========== Fit Vids
        CC_fitVids: function() {
            $body.fitVids();
        },

        // ========== YT Player for Video
        CC_YTPlayer: function() {
            $(".player").mb_YTPlayer();

        },

        // ========== equalHeights Resizing
        CC_equalHeightDivs: function() {
            /* equal heigh */
            var $equal_height = $('.equal-height');
                $equal_height.children('div').css('min-height', 'auto');
                $equal_height.equalHeights();

            /* equal heigh inner div */
            var $equal_height_inner = $('.equal-height-inner');
                $equal_height_inner.children('div').css('min-height', 'auto');
                $equal_height_inner.children('div').children('div').css('min-height', 'auto');
                $equal_height_inner.equalHeights();
                $equal_height_inner.children('div').each(function() {
                $(this).children('div').css('min-height', $(this).css('min-height'));
            });

            /* pricing-table equal heigh*/
            var $equal_height_pricing_table = $('.equal-height-pricing-table');
                $equal_height_pricing_table.children('div').css('min-height', 'auto');
                $equal_height_pricing_table.children('div').children('div').css('min-height', 'auto');
                $equal_height_pricing_table.equalHeights();
                $equal_height_pricing_table.children('div').each(function() {
                $(this).children('div').css('min-height', $(this).css('min-height'));
            });

        }

    };

    CODECLONE.header = {

        init: function() {

            var t = setTimeout(function() {
                CODECLONE.header.CC_fullscreenMenu();
                CODECLONE.header.CC_sidePanelReveal();
                CODECLONE.header.CC_scroolToTopOnClick();
                CODECLONE.header.CC_scrollToFixed();
                CODECLONE.header.CC_topnavAnimate();
                CODECLONE.header.CC_scrolltoTarget();
                CODECLONE.header.CC_menuzord();
                CODECLONE.header.CC_navLocalScorll();
                CODECLONE.header.CC_menuCollapseOnClick();
                CODECLONE.header.CC_homeParallaxFadeEffect();
                CODECLONE.header.CC_topsearch_toggle();
            }, 0);

        },

        // ========== Fullpage Menu
        CC_fullscreenMenu: function() {
            var $menufullpage = $('.menu-full-page .fullpage-nav-toggle');
            $menufullpage.menufullpage();
        },

        // ========== Side Push Panel
        CC_sidePanelReveal: function() {
            $(document.body).on('click', '.side-panel-trigger', function(e) {
                $body.toggleClass("side-panel-open");
                if( $body.hasClass('device-touch') ) {
                    $body.toggleClass("ohidden");
                }
                return false;
            });

            //sitebar
            $(document.body).on('click', '.has-side-panel .body-overlay', function(e) {
                $body.toggleClass("side-panel-open");
                return false;
            });

            //sitebar tree
            $(document.body).on('click', '.side-panel-nav .nav .tree-toggler', function(e) {
                $(this).parent().children('ul.tree').toggle(300);
            });

        },

        // ========== scrollToTop
        CC_scroolToTop: function() {
            if ($window.scrollTop() > 600) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        },

        CC_scroolToTopOnClick: function() {
            $(document.body).on('click', '.scrollToTop', function(e) {
                $('html, body').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
        },

        // ========== One Page Nav close on click
        CC_menuCollapseOnClick: function() {
            $(document).on('click', '.onepage-nav a', function(e) {
                $('.showhide').trigger('click');
                return false;
            });
        },

        // ========== Active Menu Item on Reaching Different Sections
        CC_activateMenuItemOnReach: function() {
            var $onepageNav = $('.onepage-nav');
            var cur_pos = $window.scrollTop() + 2;
            var nav_height = $onepageNav.outerHeight();
            $sections.each(function() {
                var top = $(this).offset().top - nav_height - 80,
                    bottom = top + $(this).outerHeight();

                if (cur_pos >= top && cur_pos <= bottom) {
                    $onepageNav.find('a').parent().removeClass('current').removeClass('active');
                    $sections.removeClass('current').removeClass('active');

                    //$(this).addClass('current').addClass('active');
                    $onepageNav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('current').addClass('active');
                }
            });
        },

        // ========== on click scrool to target with smoothness
        CC_scrolltoTarget: function() {
            //jQuery for page scrolling feature - requires jQuery Easing plugin
            $('.smooth-scroll-to-target, .fullscreen-onepage-nav a').on('click', function(e) {
                e.preventDefault();

                var $anchor = $(this);
                
                var $hearder_top = $('.header .header-nav');
                var hearder_top_offset = 0;
                if ($hearder_top[0]){
                    hearder_top_offset = $hearder_top.outerHeight(true);
                } else {
                    hearder_top_offset = 0;
                }

                //for vertical nav, offset 0
                if ($body.hasClass("vertical-nav")){
                    hearder_top_offset = 0;
                }

                var top = $($anchor.attr('href')).offset().top - hearder_top_offset;
                $('html, body').stop().animate({
                    scrollTop: top
                }, 1500, 'easeInOutExpo');

            });
        },

        // ========== Scroll navigation
        CC_navLocalScorll: function() {
            var dataOffset = -60;
            $("#menuzord .menuzord-menu, #menuzord-right .menuzord-menu").localScroll({
                target: "body",
                duration: 800,
                offset: dataOffset,
                easing: "easeInOutExpo"
            });

            $("#menuzord-side-panel .menuzord-menu, #menuzord-verticalnav .menuzord-menu, #fullpage-nav").localScroll({
                target: "body",
                duration: 800,
                offset: 0,
                easing: "easeInOutExpo"
            });
        },

        // ========== collapsed menu close on click
        CC_scrollToFixed: function() {
            $('.navbar-scrolltofixed').scrollToFixed();
            $('.scrolltofixed').scrollToFixed({
                marginTop: $('.header .header-nav').outerHeight(true) + 10,
                limit: function() {
                    var limit = $('#footer').offset().top - $(this).outerHeight(true);
                    console.log(limit);
                    return limit;
                }
            });
            $('#sidebar').scrollToFixed({
                marginTop: $('.header .header-nav').outerHeight() + 20,
                limit: function() {
                    var limit = $('#footer').offset().top - $('#sidebar').outerHeight() - 20;
                    return limit;
                }
            });
        },
        
        // ========== Menuzord - Responsive Megamenu
        CC_menuzord: function() {
            $("#menuzord").menuzord({
                align: "left",
                effect: "slide",
                animation: "none",
                indicatorFirstLevel: "<i class='fa fa-angle-down'></i>",
                indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"
            });
            $("#menuzord-right").menuzord({
                align: "right",
                effect: "slide",
                animation: "none",
                indicatorFirstLevel: "<i class='fa fa-angle-down'></i>",
                indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"
            });
            $("#menuzord-side-panel").menuzord({
                align: "right",
                effect: "slide",
                animation: "none",
                indicatorFirstLevel: "",
                indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"
            });            
            $("#menuzord-verticalnav").menuzord({
                align: "right",
                effect: "slide",
                animation: "none",
                indicatorFirstLevel: "<i class='fa fa-angle-down'></i>",
                indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"
                /*indicatorFirstLevel: "<i class='fa fa-angle-right'></i>",
                indicatorSecondLevel: "<i class='fa fa-angle-right'></i>"*/
            });
        },

        // ========== Waypoint Top Sticky Nav
        CC_topnavAnimate: function() {
            if ($window.scrollTop() > (50)) {
                $(".navbar-sticky-animated").removeClass("animated-active");
            } else {
                $(".navbar-sticky-animated").addClass("animated-active");
            }

            if ($window.scrollTop() > (50)) {
                $(".navbar-sticky-animated .header-nav-wrapper .container, .navbar-sticky-animated .header-nav-wrapper .container-fluid").removeClass("add-padding");
            } else {
                $(".navbar-sticky-animated .header-nav-wrapper .container, .navbar-sticky-animated .header-nav-wrapper .container-fluid").addClass("add-padding");
            }
        },

        // ========== home parallax & fade (when scrolling)
        CC_homeParallaxFadeEffect: function() {
            if ($window.width() >= 1200) {
                var scrolled = $window.scrollTop();
                $('.content-fade-effect .home-content .home-text').css('padding-top', (scrolled * 0.0610) + '%').css('opacity', 1 - (scrolled * 0.00120));
            }
        },

        // ========== Top search toggle 
        CC_topsearch_toggle: function() {
            $(document.body).on('click', '#top-search-toggle', function(e) {
                e.preventDefault();
                $('.search-form-wrapper.toggle').toggleClass('active');
                return false;
            });
        }

    };

    CODECLONE.slider = {

        init: function() {

            var t = setTimeout(function() {
                CODECLONE.slider.CC_typedAnimation();
                CODECLONE.slider.CC_flexslider();
                CODECLONE.slider.CC_owlCarousel();
                CODECLONE.slider.CC_bxslider();
            }, 0);

        },

        // ========== Typed Text Carousel 
        CC_typedAnimation: function() {
            if ($('.typed-text-carousel').length) {
                $('.typed-text-carousel').each(function() {
                    var string_1 = $(this).find('span:first-child').text();
                    var string_2 = $(this).find('span:nth-child(2)').text();
                    var string_3 = $(this).find('span:nth-child(3)').text();
                    var str = '';
                    var $this = $(this);
                    if (!string_2.trim() || !string_3.trim()) {
                        str = [string_1];
                    }
                    if (!string_3.trim() && string_2.length) {
                        str = [string_1, string_2];
                    }
                    if (string_1.length && string_2.length && string_3.length) {
                        str = [string_1, string_2, string_3];
                    }
                    var speed = $(this).data('speed');
                    var back_delay = $(this).data('back_delay');
                    var loop = $(this).data('loop');
                    $(this).typed({
                        strings: str,
                        typeSpeed: speed,
                        backSpeed: 0,
                        backDelay: back_delay,
                        cursorChar: "|",
                        loop: loop,
                        contentType: 'text',
                        loopCount: false
                    });
                });
            }
        },

        // ========== flexslider
        CC_flexslider: function() {
            var $flexSlider = $('.flexslider-wrapper').find('.flexslider');
            if( $flexSlider.length > 0 ){
                $flexSlider.each(function() {
                    CODECLONE.widget.CC_portfolioFlexSliderGalleryPopUpInit();
                    var $flexsSlider = $(this),
                        flexsAnimation = $flexsSlider.parent().data('animation'),
                        flexsEasing = $flexsSlider.parent().data('easing'),
                        flexsDirection = $flexsSlider.parent().data('direction'),
                        flexsSlideshow = $flexsSlider.parent().data('slideshow'),
                        flexsSlideShowSpeed = $flexsSlider.parent().data('slidespeed'),
                        flexsAnimationSpeed = $flexsSlider.parent().data('animationspeed'),
                        flexsControlNav = $flexsSlider.parent().data('controlnav'),
                        flexsArrows = $flexsSlider.parent().data('arrows'),
                        flexsThumbnails = $flexsSlider.parent().data('thumbnails'),
                        flexsPauseHover = $flexsSlider.parent().data('pausehover');

                    if( !flexsAnimation ) { flexsAnimation = 'slide'; }
                    if( !flexsEasing || flexsEasing == 'swing' ) {
                        flexsEasing = 'swing';
                    }
                    if( !flexsDirection ) { flexsDirection = 'horizontal'; }
                    if( flexsSlideshow == false ) { flexsSlideshow = false; } else { flexsSlideshow = true; }
                    if( !flexsSlideShowSpeed ) { flexsSlideShowSpeed = 5000; }
                    if( !flexsAnimationSpeed ) { flexsAnimationSpeed = 600; }
                    if( flexsControlNav == false ) { flexsControlNav = false; } else { flexsControlNav = true; }
                    if( flexsThumbnails == true ) { flexsControlNav = 'thumbnails'; }
                    if( flexsArrows == false ) { flexsArrows = false; } else { flexsArrows = true; }
                    if( flexsPauseHover == false ) { flexsPauseHover = false; } else { flexsPauseHover = true; }

                    $flexsSlider.flexslider({
                        rtl: CODECLONE.isRTL.check(),
                        selector: ".slides > li",
                        animation: flexsAnimation,
                        easing: flexsEasing,
                        direction: flexsDirection,
                        slideshow: flexsSlideshow,
                        slideshowSpeed: Number(flexsSlideShowSpeed),
                        animationSpeed: Number(flexsAnimationSpeed),
                        pauseOnHover: flexsPauseHover,
                        controlNav: flexsControlNav,
                        directionNav: flexsArrows,
                        start: function(slider){
                            imagesLoaded($portfolio_gallery, function(){
                                setTimeout(function(){
                                    $portfolio_filter_first_child.trigger("click");
                                },500);
                            });
                            //var t = setTimeout( function(){ $('#portfolio.portfolio-masonry,#portfolio.portfolio-full,#posts.post-masonry').isotope('layout'); }, 1200 );
                            CODECLONE.initialize.CC_magnificPopup_lightbox();
                            CODECLONE.initialize.CC_prettyPhoto_lightbox();
                            CODECLONE.initialize.CC_nivoLightBox();
                        },
                        after: function(){
                        }
                    });
                });
            }
        },

        // ========== Owl Carousel
        CC_owlCarousel: function() {
            $('.owl-carousel-1col, .text-carousel, .image-carousel, .fullwidth-carousel').each(function() {
                var data_dots_external = ( $(this).data("dots") === undefined ) ? false: $(this).data("dots");
                var data_nav_external = ( $(this).data("nav") === undefined ) ? false: $(this).data("nav");
                $(this).owlCarousel({
                    rtl: CODECLONE.isRTL.check(),
                    autoplay: false,
                    autoplayTimeout: 4000,
                    loop: true,
                    items: 1,
                    dots: data_dots_external,
                    nav: data_nav_external,
                    navText: [
                        '<i class="pe-7s-angle-left"></i>',
                        '<i class="pe-7s-angle-right"></i>'
                    ]
                });
            });

            $('.owl-carousel-2col').each(function() {
                var data_dots_external = ( $(this).data("dots") === undefined ) ? false: $(this).data("dots");
                var data_nav_external = ( $(this).data("nav")=== undefined ) ? false: $(this).data("nav");
                $(this).owlCarousel({
                    rtl: CODECLONE.isRTL.check(),
                    autoplay: false,
                    autoplayTimeout: 4000,
                    loop: true,
                    items: 2,
                    margin: 15,
                    dots: data_dots_external,
                    nav: data_nav_external,
                    navText: [
                        '<i class="fa fa-angle-left"></i>',
                        '<i class="fa fa-angle-right"></i>'
                    ],
                    responsive: {
                        0: {
                            items: 1,
                            center: false
                        },
                        600: {
                            items: 1,
                            center: false
                        },
                        750: {
                            items: 2,
                            center: false
                        },
                        960: {
                            items: 2
                        },
                        1170: {
                            items: 2
                        },
                        1300: {
                            items: 2
                        }
                    }
                });
            });

            $('.owl-carousel-3col').each(function() {
                var data_dots_external = ( $(this).data("dots") === undefined ) ? false: $(this).data("dots");
                var data_nav_external = ( $(this).data("nav")=== undefined ) ? false: $(this).data("nav");
                $(this).owlCarousel({
                    rtl: CODECLONE.isRTL.check(),
                    autoplay: false,
                    autoplayTimeout: 4000,
                    loop: true,
                    items: 3,
                    margin: 15,
                    dots: data_dots_external,
                    nav: data_nav_external,
                    navText: [
                        '<i class="fa fa-angle-left"></i>',
                        '<i class="fa fa-angle-right"></i>'
                    ],
                    responsive: {
                        0: {
                            items: 1,
                            center: false
                        },
                        600: {
                            items: 1,
                            center: false
                        },
                        750: {
                            items: 2,
                            center: false
                        },
                        960: {
                            items: 2
                        },
                        1170: {
                            items: 3
                        },
                        1300: {
                            items: 3
                        }
                    }
                });
            });

            $('.owl-carousel-4col').each(function() {
                var data_dots_external = ( $(this).data("dots") === undefined ) ? false: $(this).data("dots");
                var data_nav_external = ( $(this).data("nav")=== undefined ) ? false: $(this).data("nav");
                $(this).owlCarousel({
                    rtl: CODECLONE.isRTL.check(),
                    autoplay: true,
                    autoplayTimeout: 4000,
                    loop: true,
                    items: 4,
                    margin: 15,
                    dots: data_dots_external,
                    nav: data_nav_external,
                    navText: [
                        '<i class="fa fa-angle-left"></i>',
                        '<i class="fa fa-angle-right"></i>'
                    ],
                    responsive: {
                        0: {
                            items: 1,
                            center: true
                        },
                        380: {
                            items: 2,
                            center: false
                        },
                        600: {
                            items: 3,
                            center: false
                        },
                        750: {
                            items: 3,
                            center: false
                        },
                        960: {
                            items: 3
                        },
                        1170: {
                            items: 4
                        },
                        1300: {
                            items: 4
                        }
                    }
                });
            });

            $('.owl-carousel-5col').each(function() {
                var data_dots_external = ( $(this).data("dots") === undefined ) ? false: $(this).data("dots");
                var data_nav_external = ( $(this).data("nav")=== undefined ) ? false: $(this).data("nav");
                $(this).owlCarousel({
                    rtl: CODECLONE.isRTL.check(),
                    autoplay: true,
                    autoplayTimeout: 4000,
                    loop: true,
                    items: 5,
                    margin: 15,
                    dots: data_dots_external,
                    nav: data_nav_external,
                    navText: [
                        '<i class="fa fa-angle-left"></i>',
                        '<i class="fa fa-angle-right"></i>'
                    ],
                    responsive: {
                        0: {
                            items: 1,
                            center: false
                        },
                        600: {
                            items: 2,
                            center: false
                        },
                        750: {
                            items: 3,
                            center: false
                        },
                        960: {
                            items: 4
                        },
                        1170: {
                            items: 5
                        },
                        1300: {
                            items: 5
                        }
                    }
                });
            });

            $('.owl-carousel-6col').each(function() {
                var data_dots_external = ( $(this).data("dots") === undefined ) ? false: $(this).data("dots");
                var data_nav_external = ( $(this).data("nav")=== undefined ) ? false: $(this).data("nav");
                $(this).owlCarousel({
                    rtl: CODECLONE.isRTL.check(),
                    autoplay: true,
                    autoplayTimeout: 4000,
                    loop: true,
                    items: 6,
                    margin: 15,
                    dots: data_dots_external,
                    nav: data_nav_external,
                    navText: [
                        '<i class="fa fa-angle-left"></i>',
                        '<i class="fa fa-angle-right"></i>'
                    ],
                    responsive: {
                        0: {
                            items: 1,
                            center: false
                        },
                        600: {
                            items: 2,
                            center: false
                        },
                        750: {
                            items: 3,
                            center: false
                        },
                        960: {
                            items: 4
                        },
                        1170: {
                            items: 6
                        },
                        1300: {
                            items: 6
                        }
                    }
                });
            });
        },

        // ========== BxSlider
        CC_bxslider: function() {
            $('.bxslider').bxSlider({
                mode: 'vertical',
                minSlides: 4,
                slideMargin: 20,
                pager: false,
                prevText: '<i class="fa fa-angle-left"></i>',
                nextText: '<i class="fa fa-angle-right"></i>'
            }); 
            
            $('.bxslider-upcoming-events').each(function() {
                var data_minslides = ( $(this).data("minslides") === undefined ) ? '3': $(this).data("minslides");
                $(this).bxSlider({
                    mode: 'vertical',
                    minSlides: data_minslides,
                    slideMargin: 20,
                    pager: false,
                    prevText: '<i class="fa fa-angle-left"></i>',
                    nextText: '<i class="fa fa-angle-right"></i>'
                });
            });  
        },
    };

    CODECLONE.widget = {

        init: function() {

            var t = setTimeout(function() {
                CODECLONE.widget.CC_fcCalender();
                CODECLONE.widget.CC_verticalMasonryTimeline();
                CODECLONE.widget.CC_masonryIsotop();
                CODECLONE.widget.CC_progressBar();
                CODECLONE.widget.CC_funfact();
                CODECLONE.widget.CC_instagram_feed();
                CODECLONE.widget.CC_jflickrfeed();
                CODECLONE.widget.CC_accordion_toggles();
                CODECLONE.widget.CC_tooltip();
                CODECLONE.widget.CC_DateCountdown();
                CODECLONE.widget.CC_googlemap();
            }, 0);

        },

        // ========== Event Calendar
        CC_fcCalender: function() {
            if (typeof calendarEvents !== "undefined" ) {
                $('#full-event-calendar').fullCalendar({
                    header: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'month,agendaWeek,agendaDay'
                    },
                    defaultDate: '2016-06-12',
                    selectable: true,
                    selectHelper: true,
                    select: function(start, end) {
                        var title = prompt('Event Title:');
                        var eventData;
                        if (title) {
                            eventData = {
                                title: title,
                                start: start,
                                end: end
                            };
                            $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
                        }
                        $('#calendar').fullCalendar('unselect');
                    },
                    editable: true,
                    eventLimit: true, // allow "more" link when too many events
                    events: calendarEvents
                });
            }

        },

        // ========== Vertical Masonry Timeline
        CC_verticalMasonryTimeline: function() {
            var $masonryTimeline = $('.vertical-masonry-timeline');
            $masonryTimeline.isotope({
                itemSelector : '.each-masonry-item',
                sortBy: 'original-order',
                layoutMode: 'masonry',
                resizable: false
            });

            //=====> Timeline Positions
            function  timelineOnLeftAndRight(){
                $masonryTimeline.children('.each-masonry-item').each(function(index, element) {
                    var last_child = $(this);
                    var prev_last  = $(this).prev();
                    var last_child_offset = parseInt(last_child.css('top'), 10);
                    var prev_last_offset  = parseInt(prev_last.css('top'), 10);
                    var offset_icon       = last_child_offset - prev_last_offset;
                    
                    var go_top_to = 0;
                    if(offset_icon){
                        if ( offset_icon <= 87 ){
                            go_top_to = 87 - offset_icon;
                            last_child.find('.timeline-post-format').animate({
                                top: go_top_to
                            }, 300);
                        }
                    }
                    
                    if( $(this).position().left === 0 ){
                        $(this).removeClass('item-right');
                        $(this).addClass('item-left');
                    }else{
                        $(this).removeClass('item-left');
                        $(this).addClass('item-right');
                    }
                });
            }
            timelineOnLeftAndRight();
            
            $(window).resize(function() {
                timelineOnLeftAndRight();
            });
        },

        // ========== Masonry Isotope
        CC_masonryIsotop: function() {
            var isotope_mode;
            if ($portfolio_gallery.hasClass("masonry")){
                isotope_mode = "masonry";
            } else{
                isotope_mode = "fitRows";
            }

            //isotope firsttime loading
            $portfolio_gallery.imagesLoaded(function(){
                $portfolio_gallery.isotope({
                    itemSelector: '.portfolio-item',
                    layoutMode: isotope_mode,
                    filter: "*"
                });
            });
            
            //isotope filter
            $portfolio_filter.on('click', function(){
                $portfolio_filter.removeClass("active");
                $(this).addClass("active");
                var fselector = $(this).data('filter');

                $portfolio_gallery.isotope({
                    itemSelector: '.portfolio-item',
                    layoutMode: isotope_mode,
                    filter: fselector
                });
                return false;
            });
            
            CODECLONE.slider.CC_flexslider();

        },

        CC_portfolioFlexSliderGalleryPopUpInit: function() {
            var $flex_sliders = $portfolio_gallery.find('.slides');
            $flex_sliders.each(function () {
                var _items = $(this).find("li > a");
                var items = [];
                for (var i = 0; i < _items.length; i++) {
                    items.push({src: $(_items[i]).attr("href"), title: $(_items[i]).attr("title")});
                }
                $(this).parent().parent().parent().find(".icons-holder").magnificPopup({
                    items: items,
                    type: 'image',
                    gallery: {
                        enabled: true
                    }
                });
            });
        },

        CC_isotopeGridRearrange: function() {
            var isotope_mode;
            if ($portfolio_gallery.hasClass("masonry")){
                isotope_mode = "masonry";
            } else{
                isotope_mode = "fitRows";
            }
            $portfolio_gallery.isotope({
                itemSelector: '.portfolio-item',
                layoutMode: isotope_mode
            });
        },

        CC_isotopeGridShuffle: function() {
            $portfolio_gallery.isotope('shuffle');
        },

        // ========== CountDown
        CC_DateCountdown: function() {
          
          // FlipClock-master
            var clock;
            clock = $('.clock').FlipClock({
                clockFace: 'DailyCounter',
                autoStart: false,
                callbacks: {
                    stop: function() {
                        $('.message').html('The clock has stopped!')
                    }
                }
            });
                    
            clock.setTime(220880);
            clock.setCountdown(true);
            clock.start();
            
          // Timezone-Countdown-Clock
          $("#DateCountdown").TimeCircles({
              "animation": "ticks",
              "bg_width": 1.2,
              "fg_width": 0.1,
              "circle_bg_color": "#60686F",
              "time": {
                  "Days": {
                      "text": "Days",
                      "color": "#FFCC66",
                      "show": true
                  },
                  "Hours": {
                      "text": "Hours",
                      "color": "#99CCFF",
                      "show": true
                  },
                  "Minutes": {
                      "text": "Minutes",
                      "color": "#BBFFBB",
                      "show": true
                  },
                  "Seconds": {
                      "text": "Seconds",
                      "color": "#FF9999",
                      "show": true
                  }
              }
          });

          // Timezone-Countdown-Clock
          $('#example').countdown({
          date: '12/24/2020 23:59:59'
          }, function () {
            alert('Merry Christmas!');

          });

        },

        // ========== progress bar / horizontal skill bar 
        CC_progressBar: function() {
            var $progress_bar = $('.progress-bar');
            $progress_bar.appear();
            $(document.body).on('appear', '.progress-bar', function() {
                var current_item = $(this);
                if (!current_item.hasClass('appeared')) {
                    var percent = current_item.data('percent');
                    var barcolor = current_item.data('barcolor');
                    current_item.append('<span class="percent">' + percent + '%' + '</span>').css('background-color', barcolor).css('width', percent + '%').addClass('appeared');
                }
                
            });
        },

        // ========== Funfact Number Counter
        CC_funfact: function() {
            var $animate_number = $('.animate-number');
            $animate_number.appear();
            $(document.body).on('appear', '.animate-number', function() {
                $animate_number.each(function() {
                    var current_item = $(this);
                    if (!current_item.hasClass('appeared')) {
                        current_item.animateNumbers(current_item.attr("data-value"), true, parseInt(current_item.attr("data-animation-duration"), 10)).addClass('appeared');
                    }
                });
            });
        },

        // ========== Instagram Feed 
        CC_instagram_feed: function() {
            $('.instagram-feed-carousel').each(function() {
                var current_div = $(this);
                var instagram_feed = new Instafeed({
                    target: current_div.attr('id'),
                    get: 'user',
                    userId: current_div.data('userid'),
                    accessToken: '2955449158.1677ed0.a17a36e525fb48559a5e1100817ec0f9',
                    resolution: 'low_resolution',
                    limit: 9,
                    template: '<div class="item"><figure><img src="{{image}}" /><a href="{{link}}" class="link-out" target="_blank"><i class="fa fa-link"></i></a></figure></div>',
                    after: function() {
                        current_div.owlCarousel({
                            rtl: CODECLONE.isRTL.check(),
                            autoplay: false,
                            autoplayTimeout: 4000,
                            loop: true,
                            margin: 15,
                            dots: true,
                            nav: false,
                            responsive: {
                                0: {
                                    items: 2
                                },
                                768: {
                                    items: 4
                                },
                                1000: {
                                    items: 5
                                }
                            }
                        });
                    }
                });
                instagram_feed.run();
            });

            $('.instagram-feed').each(function() {
                var current_div = $(this);
                var instagram_feed = new Instafeed({
                    target: current_div.attr('id'),
                    get: 'user',
                    userId: current_div.data('userid'),
                    accessToken: '2955449158.1677ed0.a17a36e525fb48559a5e1100817ec0f9',
                    resolution: 'low_resolution',
                    limit: 9,
                    template: '<div class="item"><figure><img src="{{image}}" /><a href="{{link}}" class="link-out" target="_blank"><i class="fa fa-link"></i></a></figure></div>',
                    after: function() {
                    }
                });
                instagram_feed.run();
            });
        },

        // ========== Flickr Feed
        CC_jflickrfeed: function() {
            $(".flickr-widget .flickr-feed").jflickrfeed({
                limit: 9,
                qstrings: {
                    id: "33193193@N03"
                },
                itemTemplate: '<a href="{{link}}" title="{{title}}" target="_blank"><img src="{{image_m}}" alt="{{title}}">  </a>'
            });
        },

        // ========== accordion & toggles
        CC_accordion_toggles: function() {
            var $panel_group_collapse = $('.panel-group .collapse');
            $panel_group_collapse.on("show.bs.collapse", function(e) {
                $(this).closest(".panel-group").find("[href='#" + $(this).attr("id") + "']").addClass("active");
            });
            $panel_group_collapse.on("hide.bs.collapse", function(e) {
                $(this).closest(".panel-group").find("[href='#" + $(this).attr("id") + "']").removeClass("active");
            });
        },

        // ========== tooltip
        CC_tooltip: function() {
            $('[data-toggle="tooltip"]').tooltip();
        },

        // ========== Twitter Feed
        CC_twitterFeed: function() {
            var $twitterFeed = $('.twitter-feed');
            var $twitterFeed_carousel = $('.twitter-feed-carousel');

            $twitterFeed.twittie({
                username: $twitterFeed.data('username'),
                dateFormat: '%b. %d, %Y',
                template: '{{tweet}} <div class="date">{{date}}</div>',
                count: 2,
                loadingText: 'Loading!'
            });

            $twitterFeed_carousel.twittie({
                username: $twitterFeed_carousel.data('username'),
                dateFormat: '%b. %d, %Y',
                template: '{{tweet}} <div class="date">{{date}}</div>',
                count: 4,
                loadingText: 'Loading!'
            }, 
            function() {
                $twitterFeed_carousel.find('ul').owlCarousel({
                    rtl: CODECLONE.isRTL.check(),
                    autoplay: true,
                    autoplayTimeout: 2000,
                    loop: true,
                    items: 1,
                    dots: true,
                    nav: false
                });
            });

        },

        // ========== googlemap
        CC_googlemap: function() {
            if($('#map-location').length){
                var map;
                 map = new GMaps({
                    el: '#map-location',
                    zoom: 14,
                    scrollwheel:false,
                    //Set Latitude and Longitude Here
                    lat: -37.817085,
                    lng: 144.955631
                  });
                  
                  //Add map Marker
                  map.addMarker({
                    lat: -37.817085,
                    lng: 144.955631,
                    infoWindow: {
                      content: '<p style="text-align:center;"><strong>Envato</strong><br>Melbourne VIC 3000, Australia</p>'
                    }
                 
                });
            }
        }

    };

    // Supported Operating System (os)
    CODECLONE.isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (CODECLONE.isMobile.Android() || CODECLONE.isMobile.BlackBerry() || CODECLONE.isMobile.iOS() || CODECLONE.isMobile.Opera() || CODECLONE.isMobile.Windows());
        }
    };

    // Direction For RTL
    CODECLONE.isRTL = {
        check: function() {
            if( $( "html" ).attr("dir") == "rtl" ) {
                return true;
            } else {
                return false;
            }
        }
    };

    CODECLONE.documentOnLoad = {

        init: function() {

            $window.trigger("scroll");
            $window.trigger("resize");
            
            var t = setTimeout(function() {
                CODECLONE.widget.CC_twitterFeed();
                CODECLONE.initialize.CC_preLoaderOnLoad();
                CODECLONE.initialize.CC_forwardingHash();
                CODECLONE.initialize.CC_parallaxBgInit();
            }, 0);

        }

    };

    CODECLONE.documentOnResize = {

        init: function() {

            var t = setTimeout(function() {
                CODECLONE.initialize.CC_equalHeightDivs();
                CODECLONE.initialize.CC_fullscreenResize();
                $.stellar('refresh');
            }, 0);

        }

    };

    //document ready
    CODECLONE.documentOnReady = {

        init: function() {
            CODECLONE.initialize.init();
            CODECLONE.header.init();
            CODECLONE.slider.init();
            CODECLONE.widget.init();
            CODECLONE.documentOnReady.windowscroll();
            $.stellar('refresh');
            CODECLONE.widget.CC_DateCountdown();
            CODECLONE.widget.CC_googlemap();
        },

        windowscroll: function(){

            $window.on( 'scroll', function(){
                CODECLONE.header.CC_scroolToTop();
                CODECLONE.header.CC_activateMenuItemOnReach();
                CODECLONE.header.CC_topnavAnimate();
            });
        }

    };


    // ========================== Variables Declare ========================== //

    var $window = $(window),
        $html = $('html'),
        $body = $('body'),
        $wrapper = $('#wrapper'),
        $header = $('#header'),
        $footer = $('#footer'),
        $sections = $('section'),
        $portfolio_gallery = $(".portfolio-gallery"),
        $portfolio_filter = $(".portfolio-filter a"),
        $portfolio_filter_first_child = $(".portfolio-filter a:eq(0)"),
        $portfolio_flex_slider = $(".portfolio-slider");


    // ============================ Functions Call ========================== //

    CODECLONE.initialize.CC_preLoaderClickDisabler();
    $(document).ready(CODECLONE.documentOnReady.init);
    $window.load(CODECLONE.documentOnLoad.init);
    $window.on('resize', CODECLONE.documentOnResize.init);


})(jQuery);



