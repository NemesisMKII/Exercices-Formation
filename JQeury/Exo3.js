$(document).ready(() => {
    var div = $(".gallery")

    for (var i = 1; i <= 5; i++) {
        div.append(`
        <img src="https://picsum.photos/1000/100${i}" class="img-fluid img" id="img${i}" />`)
    }
    div.append(`
        <img src="Img/cross.png" id="cross"/>`
        )
    
    $("#cross").hide()

    var img = $(".img")

    img.click(img_click)

    function img_click(e) {
        img.unbind("click", img_click)
        var image = $(this)
        image.toggleClass("absolute")
        $("body").toggleClass("darker")
        $("#cross").toggle()
        $("#cross").click(() => {
            img.click(img_click)
            $("#cross").unbind("click")
            image.toggleClass("absolute")
            $("body").toggleClass("darker")
            $("#cross").toggle()
        })
    }

})