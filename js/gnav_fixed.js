jQuery(window).on('scroll', function() {
    if (300 < jQuery(this).scrollTop()) {
        jQuery('#gnav').addClass('gnav_fixed');
    } else {
        jQuery('#gnav').removeClass('gnav_fixed');
    }
});