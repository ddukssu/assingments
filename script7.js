$(document).ready(function () {
    // 0
    console.log("JQUERY");

    //1
    $(".mantra").text("Qiuyuan Summoning Chant");
    $("#mantra").html(
        "Golden light, my wish ignite, <br> " +
        "Let waves obey and stars unite. <br> " +
        "No loss, no wait, no 50/50 — <br> " +
        "Qiuyuan comes, my pull is nifty.");
    $(".mantra").css("color", "rgb(68, 127, 152)");

    //2
    $("#hide").click(function (){ $("#qch").hide(300);});
    $("#show").click(function (){ $("#qch").show(300);});
    $("#toggle").click(function (){ $("#qch").toggle(300);});

    //3
    $("#fin").click(() => $("#Qiuyuan").fadeIn(400));
    $("#fout").click(() => $("#Qiuyuan").fadeOut(400));
    $("#ftoggle").click(() => $("#Qiuyuan").fadeToggle(400));

    //4
    $("#togpan").click(function (){
        $(".panel").slideToggle(300);
    });

    //5
    $("#paura").click(function (){
        $("#af").append("<li>+Aura</li>")
    });
    $("#maura").click(function (){
        $("#af li").last().remove();
    });
    $("#preaura").click(function (){
        $("#af").prepend("<li>+Aura</li>")
    });

    //6
    $("#changeImg").click(function (){
        $("#Qiuyuan2").attr("src", "https://i.pinimg.com/736x/43/87/48/438748b24d3975adffc90014a243b872.jpg");
    });
    $("#changeHref").click(function (){
        $("#link").attr("href", "https://game8.co/games/Wuthering-Waves/archives/524882");
    });

    //7
    $("#name, #email").on("input", function (){
        let n = $("#name").val();
        let e = $("#email").val();
        $("#live").text("Your name is " + n + " and your email is " + e);
    });

    //8
    $("#animbox1").click(function (){
        $("#box1").animate({
            width: 150,
            height: 150,
            fontSize: 22.5,
        }, 600);
    });

    //9
    $("#animbox2").click(function (){
        $("#box2")
            .animate({top: 200, left: -130}, 500)
            .animate({width: 200, height: 200, fontSize: 30}, 500)
            .animate({left: 180, top: 250}, 500)
            .animate({left: 0, top: 0, width: 100, height: 100, fontSize: 15}, 500);
    });

    //10
    $("#animbox3").click(function (){
        $("#box3").animate({
            left: 213,
            width: 160,
            height: 160,
            fontSize: 24,
            opacity: 0.5
        }, 700);
    });

    //11
    $("#mainin").hide().fadeIn(1000);
    $(".phtt").click(function (){
        let srcc = $(this).attr("src");
        $("#mainin").fadeOut(500, function (){
            $(this).attr("src", srcc).fadeIn(500);
        });
        $(".phtt").removeClass("active");
        $(this).addClass("active");
    });
});