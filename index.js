$(document).ready(function() {
    $(".btn").on("click", function() {
        $(".set button").fadeIn();
        $(".btn").fadeOut();
    });
    $(".set button").on("click", function() {
        let buttonInnerHtML = $(this).html();
        buttonAnimation(buttonInnerHtML);

        switch (buttonInnerHtML) {
            case "w":
                let tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case "a":
                let kick = new Audio('sounds/snare.mp3');
                kick.play();
                break;
            case "s":
                let tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case "d":
                let crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
            case "j":
                let tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case "k":
                let snore = new Audio('sounds/snare.mp3');
                snore.play();
                break;
            case "l":
                let tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            default:
                console.log(buttonInnerHtML);
        }
    });

    // -------------------for animation-----------------------------

    function buttonAnimation(currentKey) {
        let activeButton = $("." + currentKey);
        activeButton.addClass("pressed");
        setTimeout(function() {
            activeButton.removeClass("pressed");
        }, 200);
    }

});