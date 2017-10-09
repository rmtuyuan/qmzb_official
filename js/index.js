function changeSize() {
    var n = $("body").width(),
        i = n / (16 / 9);
    $("#bgvideo").css({
        width: n,
        height: i
    })
}
window.onload = window.onresize = changeSize, $(function () {
    var n = $("#bgvideo")[0],
        i = $("#muted"),
        o = $(".cont .code"),
        d = !1;
    n.addEventListener("canplay", function () {
        this.play()
    }), i.on("click", function () {
        n.muted = !n.muted, d ? $(this).css("backgroundPosition", "0 -77px") : $(this).css("backgroundPosition", "-31px -77px"), d = !d
    }), o.find("span").hover(function () {
        o.find("p").show()
    }, function () {
        o.find("p").hide()
    })
});