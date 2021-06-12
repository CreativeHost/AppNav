function deviceDetection() {
    const userAgent = navigator.userAgent || navigator.vendor || window['opera'];
    if (/iPad|iPhone|iPod/.test(userAgent) && !window['MSStream']) {
        return("ios");
    }
    else {
        return("android");
    }
}
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        center: true,
        autoplay: true,
        autoplayHoverPause: true,
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
    }
    );
});
