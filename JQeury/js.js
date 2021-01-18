


//Ex 4

 $(document).ready(() => {
     //Ex 1
    console.log("Page Chargée.");
    var button = $(`#bouton`);
    button.click(() => {
        console.log("Click !");
    })
    //===============================================//
    //Ex 2

    $(`#form-button`).click((e) => {
        e.preventDefault()
    })
    //===============================================//
    //Ex 3
    var champ = $(`#mdp`)
    var password = "";
    champ.focus(() => {
        champ.keydown((event) => {
            if (event.keyCode != 13 && event.keyCode != 16 && event.keyCode != 20) {
                console.log(event.key);
                password += event.key;
                console.log(password);
            }
        })
    })
    
    //===============================================//
    //Ex 4
    var tabinput = "";
    var inser = $("#tabinput");
    $(valsubmit).click((e) => {
        e.preventDefault()
        tabinput = inser
        $("#table").append(`<tr><td> ${inser.val()} </td></tr>`)
        inser.val("")
    })

    //=============================//
    //Ex 5//
    $("#allumee").hide()
    $("#allumee").click((e) => {
        $("#allumee").toggle()
        $("#eteinte").toggle()
    })
    $("#eteinte").click((e) => {
        $("#allumee").toggle()
        $("#eteinte").toggle()
    })
})
