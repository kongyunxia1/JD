$(".ownJD").mouseover(function() {
    $(".uli").css({ "display": "block" })
})
$(".ownJD").mouseout(function() {
    $(".uli").css({ "display": "none" })
})

function swiper() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}


function hover() {
    var aLi = document.querySelectorAll(".SP")
    var aOpca = document.querySelectorAll(".opca")
    console.log(aLi);
    console.log(aOpca);
    for (let i = 0; i < aLi.length; i++) {
        aLi[i].onmouseover = function() {
            for (let j = 0; j < aOpca.length; j++) {
                aOpca[i].style.display = "block";
            }
        }
    }
    for (let i = 0; i < aLi.length; i++) {
        aLi[i].onmouseout = function() {
            for (let j = 0; j < aOpca.length; j++) {
                aOpca[i].style.display = "none";
            }
        }
    }
}




$(".ti_one").click(function() {
    $("html,body").stop().animate({
        "scrollTop": 500
    }, 500);
    //$(".ti_one").css({ "color": "white", "backgroundColor": "red" })
})
$(".ti_two").click(function() {
    $("html,body").stop().animate({
        "scrollTop": 800
    }, 500);
    //$(".ti_two").css({ "color": "white", "backgroundColor": "red" }).sibling().css({ "color": "#666", "backgroundColor": "white" })
})
$(".ti_the").click(function() {

    $("html,body").stop().animate({
        "scrollTop": 1500
    }, 500);
    //$(".ti_the").css({ "color": "white", "backgroundColor": "red" })
})


$("#ti a:last").click(function() {
    $("html,body").stop().animate({
        "scrollTop": 0
    }, 500);
})