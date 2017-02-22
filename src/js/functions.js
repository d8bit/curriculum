
window.addEventListener("load", function() {
    $(".main").onepage_scroll({
        sectionContainer: "section",
        easing: "ease",
        animationTime: 1000,
        pagination: false,
        updateURL: false,
        beforeMove: function(index) {},
        afterMove: function(index) {
            var knowledgeIndex = 2;
            var experienceIndex = 3;
            switch (index) {
                case knowledgeIndex:
                    if (false === $(".level").hasClass('loaded')) {
                        $(".level").addClass('loaded');
                    }
                    $('.knoledge-page .editable').focus();
                    break;
                case experienceIndex:
                    $(".editable").focus();
                    break;
            }
        },
        loop: false,
        keyboard: false,
        responsiveFallback: 600
    });

    resizeDiv();

    $(window).resize(function() {
        resizeDiv();
        checkLevels();
    });



    $("#computer-img").on("click", function() {
        if (false === $("#computer-img").hasClass("clicked")) {
            $("#computer-img").addClass("clicked");
        } else {
            $("#computer-img").removeClass("clicked");
        }
    });
    checkLevels();
});


function resizeDiv() {
    var new_size = $(this).height();
    $('.notepad_content').height(new_size - 120);
}

function checkLevels()
{
    var window_width = $(window).width();
    if (600 >= window_width) {
        if (false === $(".level").hasClass('loaded')) {
            $(".level").addClass('loaded');
        }
    }
}
