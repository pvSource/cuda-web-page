$(".skills").mouseenter(function(){

    $(".skills__circles").removeClass("none");

    $('.skills__circle_web').circleProgress({
        value: 0.90,
        size: 160,
        fill: {
        color: "#30bae7"
        }
    });

    $('.skills__circle_html-css').circleProgress({
        value: 0.75,
        size: 160,
        fill: {
        color: "#d74680"
        }
    });

    $('.skills__circle_graphic').circleProgress({
        value: 0.70,
        size: 160,
        fill: {
        color: "#15c7a8"
        }
    });

    $('.skills__circle_ui-ux').circleProgress({
        value: 0.85,
        size: 160,
        fill: {
        color: "#eb7d4b"
        }
    });
})
