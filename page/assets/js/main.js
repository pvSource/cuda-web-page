$(document).ready(function(){
    $("#choose-icons").click(function(){
        $(".portfolio__real-work_apps").addClass("none");
        $(".portfolio__real-work_icons").removeClass("none");
        $(".portfolio__real-work_web").addClass("none");        
    });

    $("#choose-web").click(function(){
        $(".portfolio__real-work_apps").addClass("none");
        $(".portfolio__real-work_icons").addClass("none");
        $(".portfolio__real-work_web").removeClass("none");        
    });

    $("#choose-apps").click(function(){
        $(".portfolio__real-work_apps").removeClass("none");
        $(".portfolio__real-work_icons").addClass("none");
        $(".portfolio__real-work_web").addClass("none");        
    });

    $("#choose-all").click(function(){
        $(".portfolio__real-work_apps").removeClass("none");
        $(".portfolio__real-work_icons").removeClass("none");
        $(".portfolio__real-work_web").removeClass("none");        
    });

});
