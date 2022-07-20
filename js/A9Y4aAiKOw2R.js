/*-----------------------------------------------------------
 * Template Name    : Kamal - Personal Portfolio Template
 * Version          : 1.0
 * File Description : This File Includes all Custom js
 *------------------------------------------------------------*/

/*======================================================================
 Table of Content:
 
 01. Menu Toggle
 02. Page Pilling
 03. Tooltip
 04. Skills LineProgressbar
 05. jQuery counterUp
 06. Porfolio Isotope Filter
 07. Magnific Popup
 7.1. Image Gallery Popup
 7.2. Youtube - Vimeo - SoundCloud Popup
 7.3. Porfolio Detail Popup
 7.4. Blog Detail Popup
 08. Form Validation
 09. Contact Form Submission
 ========================================================================*/


(function ($) {
    // Start of use strict
    'use strict';

    /*--------------------------------
     01. Menu Toggle
     ----------------------------------*/
    $('.menu-toggle').on("click", function () {
        $('.overlay-menu').addClass('toggled');
        $('.overlay-menu').toggleClass('mobile-menu-hide');
        $('.menu-toggle').toggleClass('open');
    });
    function mobileMenuHide() {
        var siteHeader = $('.overlay-menu');
        siteHeader.addClass('mobile-menu-hide');
        $('.menu-toggle').removeClass('open');
        setTimeout(function () {
            siteHeader.addClass('toggled');
        }, 500);
    }
    $('.overlay-menu').on("click", ".main-navigation", function () {
        mobileMenuHide();
    });

    /*-------------------------
     02. Page Pilling
     -------------------------*/
    function page_piling() {
        $('#pagepiling').pagepiling({
            menu: '#menu',
            direction: 'vertical',
            verticalCentered: true,
            sectionsColor: [],
            anchors: ['home', 'about', 'services', 'portfolio', 'blog', 'contact'],
            scrollingSpeed: 700,
            easing: 'swing',
            loopBottom: true,
            loopTop: true,
            css3: true,
            navigation: {
                'position': 'right',
                'tooltips': ['HOME', 'ABOUT ME', 'SERVICES', 'PORTFOLIO', 'BLOG', 'CONTACT']
            },
            normalScrollElements: null,
            normalScrollElementTouchThreshold: 5,
            touchSensitivity: 5,
            keyboardScrolling: true,
            sectionSelector: '.section',
            animateAnchor: true,
            //events
            onLeave: function (index, nextIndex, direction) {
            },
            afterLoad: function (anchorLink, index) {
            },
            afterRender: function () {
            }
        });
    }
    page_piling();

    /*--------------------------------
     03. Tooltip
     ----------------------------------*/
    function tooltip() {
        $('[data-toggle="tooltip"]').tooltip();
    }
    tooltip();

    /*--------------------------------
     04. Skills LineProgressbar
     ----------------------------------*/
    function skill_html() {
        $('#html').LineProgressbar({
            percentage: 95,
            radius: '3px',
            height: '10px',
            duration: 6000,
            backgroundColor: '#ddd'
        });
    }
    skill_html();

    function skill_css() {
        $('#css').LineProgressbar({
            percentage: 90,
            radius: '3px',
            height: '10px',
            duration: 6000,
            backgroundColor: '#ddd'
        });
    }
    skill_css();

    function skill_javaScript() {
        $('#javascript').LineProgressbar({
            percentage: 65,
            radius: '3px',
            height: '10px',
            duration: 6000,
            backgroundColor: '#ddd'
        });
    }
    skill_javaScript();

    function skill_jquery() {
        $('#jquery').LineProgressbar({
            percentage: 75,
            radius: '3px',
            height: '10px',
            duration: 6000,
            backgroundColor: '#ddd'
        });
    }
    skill_jquery();

    function skill_wordpress() {
        $('#wordpress').LineProgressbar({
            percentage: 95,
            radius: '3px',
            height: '10px',
            duration: 6000,
            backgroundColor: '#ddd'
        });
    }
    skill_wordpress();

    function skill_web_design() {
        $('#web-design').LineProgressbar({
            percentage: 90,
            radius: '3px',
            height: '10px',
            duration: 6000,
            backgroundColor: '#ddd'
        });
    }
    skill_web_design();

    function skill_php() {
        $('#php').LineProgressbar({
            percentage: 65,
            radius: '3px',
            height: '10px',
            duration: 6000,
            backgroundColor: '#ddd'
        });
    }
    skill_php();

    function skill_web_development() {
        $('#web-development').LineProgressbar({
            percentage: 75,
            radius: '3px',
            height: '10px',
            duration: 6000,
            backgroundColor: '#ddd'
        });
    }
    skill_web_development();

    /*--------------------------------
     05. jQuery counterUp
     ----------------------------------*/
    function counter_number() {
        $('.counter').countUp();
    }
    counter_number();

    /*--------------------------------
     06. Porfolio Isotope Filter
     ----------------------------------*/
    $(window).on('load', function () {
        /* Porfolio Filter */
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });
        $('#portfolio-flters li').on('click', function () {
            $("#portfolio-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');
            portfolioIsotope.isotope({
                filter: $(this).data('filter')
            });
        });

        /* Preloader */
        $('.preloader').removeClass("active");
    });

    /*--------------------------------
     7.1. Image Gallery Popup
     ----------------------------------*/
    function image_gallery() {
        $('.gallery-popup-btn').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }
    image_gallery();

    /*--------------------------------
     7.2. Youtube - Vimeo - SoundCloud Popup
     ----------------------------------*/
    function video_soundcloud() {
        $('.magnific-youtube,.magnific-vimeo,.magnific-soundcloud').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 300,
            preloader: true,
            fixedContentPos: false
        });
    }
    video_soundcloud();

    /*--------------------------------
     7.3. Porfolio Detail Popup
     ----------------------------------*/
    function porfolio_detail_popup() {
        $('.portfolio-detail-popup').magnificPopup({
            type: 'inline',
            mainClass: 'mfp-fade',
            preloader: true,
            gallery: {
                enabled: true
            }
        });
    }
    porfolio_detail_popup();

    /*--------------------------------
     7.4. Blog Detail Popup
     ----------------------------------*/
    function blog_detail_popup() {
        $('.blog-detail-popup').magnificPopup({
            type: 'inline',
            mainClass: 'mfp-fade',
            preloader: true,
            gallery: {
                enabled: true
            }
        });
    }
    blog_detail_popup();

    /*--------------------------------
     08. Form Validation
     ----------------------------------*/
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);

    /*--------------------------------
     09. Contact Form Submission
     ----------------------------------*/
    $(document).on('click', '.submit .btn', function () {
        var frm = $(this).parents('form');
        var name = $('input[name="name"]').val();
        var phone = $('input[name="phone"]').val();
        var subject = $('input[name="subject"]').val();
        var message = $('textarea[name="message"]').val();
        var mail = $('input[name="email"]').val();
        var emailreg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        var valid = true;

        if (name.trim() == "") {
            $('#name_error').html("Please enter name.");
            valid = false;
        } else {
            $('#name_error').html("");
        }

        if (mail.trim() == "") {
            $('#email_error').html("Please enter email.");
            valid = false;
        } else if (!emailreg.test(mail)) {
            $('#email_error').html("Please enter valid email.");
            valid = false;
        } else {
            $('#email_error').html("");
        }

        if (phone.trim() == "") {
            $('#phone_error').html("Please enter phone number.");
            valid = false;
        } else {
            $('#phone_error').html("");
        }

        if (subject.trim() == "") {
            $('#subject_error').html("Please enter subject.");
            valid = false;
        } else {
            $('#subject_error').html("");
        }

        if (message.trim() == "") {
            $('#message_error').html("Please enter message.");
            valid = false;
        } else {
            $('#message_error').html("");
        }

        if (valid) {
            $.ajax({
                type: "POST",
                url: "assets/php/mail.php",
                data: frm.serialize(),
                beforeSend: function () {
                    $(".loading").show();
                },
                success: function (response) {
                    $(".loading").hide();
                    var response = JSON.parse(response);
                    if (response.success) {
                        $('.response-msg').html(response.success);
                        $('#contact-form')[0].reset();
                    }
                    if (response.error) {
                        $('.response-msg').html(response.error);
                    }
                }
            });
        }
        return false;
    });

})(jQuery);

