$(document).ready(() => {
    var cpt = 1

    var container = $(".container")
    for (var i = 0; i < 5   ; i++) {
        container.append(`
        <div class="row" id="row${i}">
        </div>
        `)
    }
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 3; j++) {
            $(`#row${i}`).append(`
            <div class="col" data-id="${cpt}">
            </div>
            `)
            cpt ++
        }
    }
    $(`.col`).append(`
    <img src="https://picsum.photos/1000/1000" class="img-fluid img-thumbnail imgclick"/> 
    `)

    var img = $(".imgclick")

    img.click(clique)
    
    function clique() {
        x = $(this)
        console.log(x);
        container.append(`
        <div id="viewimg">
        </div>`)
    } 
})