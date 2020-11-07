$(".login_lef").click(function() {
    $(".malogin").css({ "display": "block" })
    $(".ZH_login").css({ "display": "none" })
    $(".login_lef").find("a").css({ "color": "red" })
    $(".login_rig").find("a").css({ "color": "#666" })
})

$(".login_rig").click(function() {
    $(".malogin").css({ "display": "none" })
    $(".ZH_login").css({ "display": "block" })
    $(".login_rig").find("a").css({ "color": "red" })
    $(".login_lef").find("a").css({ "color": "#666" })
})

$(".one_login").find("input").click(function() {

})
$(".two_login").find("input").click(function() {

})