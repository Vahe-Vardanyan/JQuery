const log = console.log;
$(document).ready(function () {
    let time = 10;
    let result = 0;
    let t = 1000;
    let arr1 = "absdefghjklmnopqrstuwzxy";

    function tim() {
        let interval = setInterval(function () {
            $(".text").css({
                "margin-top": time + "px"
            });
            if (time < 190) {
                time += 10;
            }
            else {
                clearInterval(interval);
                $(".h2").html("Game Over");
                $(".p").html("");
                $("#h2").addClass("kapuyt");
                $("#muk").addClass("muk1");
            }

        }, t)
        log(t)

        function randomWorb() {
            const arr2 = [];
            for (let i = 0; i < 6; i++) {
                let rand = Math.round(Math.random() * 24)
                arr2.push(arr1[rand]);
            }
            $(".h2").html(arr2)
        }
        randomWorb();
    }
    tim();
    $("body").keydown(function (e) {
        let text = $(".p:last-child").html();
        if (e.key == "Escape") {
            text = ""
        }
        else if (e.key == "Backspace") {
            text = text.substring(0, text.length - 1)
        }
        else if (e.key == "Enter") {
            if ($(".h2").html() == $(".p").html()) {
                result++;
                $(".p").html("")
                $(".res").html(result)
                $(".p").removeClass("karmir");
                time = 0;
                t = t - 200;
                return tim();
            }
            else {
                $(".p").addClass("karmir");
            }
        }
        else {
            if (text.length < 6) {
                text += e.key
            }
        }
        $(".p:last-child").html(text)
    })
})
