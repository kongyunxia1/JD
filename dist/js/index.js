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