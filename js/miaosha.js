var case_lef = document.querySelector(".case_lef")
var hours = document.querySelector(".hours")
var minuts = document.querySelector(".minuts")
var seconds = document.querySelector(".seconds")

console.log(hours)


function time(afterData) {
    var nowDate = new Date()
    var times = parseInt((afterData - nowDate) / 1000)
        // console.log(times)
    var h = parseInt(times / 3600 % 24) //时 一共times/3600
    var m = parseInt(times / 60 % 60) //分
    var s = parseInt(times % 60) //秒
    function format(time) {
        return time < 10 ? "0" + time : time
    }
    h = format(h);
    m = format(m);
    s = format(s);
    hours.innerHTML = h;
    minuts.innerHTML = m;
    seconds.innerHTML = s;
    if (times <= 0) {
        clearInterval(timer)
            // oBox.innerHTML = "秒杀结束"
    }
}
var afterDate = new Date("2020-11-20 22:00:00")
time(afterDate) //定时器执行之前先调用
var timer = setInterval(function() {
        time(afterDate)
    }, 1000)
    //点击页面跳到京东
case_lef.onclick = function() {
    location.href = "https://miaosha.jd.com/"
}