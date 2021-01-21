


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

    table = {
        "tab0": 5,
        "tab1": "hey"
    }

    var tabinput = "";
    var firstdel = $("#firstdel")
    var lastdel = $("#lastdel")
    var localtable = Object.keys(table)
    var tab = $("#table")
    main()
    
    function main() {
        if (!localStorage.getItem("tableau")) {
            localStorage.setItem("tableau", JSON.stringify(localtable))
        } else {
            localtable = JSON.parse(localStorage.getItem("tableau"))
        }
    
        for (i in Object.keys(localtable)) {
            tab.append(`<tr><td> ${localtable[`tab${i}`]} </td></tr>`)
        }
        
        $("#valsubmit").click((e) => {
            e.preventDefault()
            tab.append(`<tr><td> ${$("#tabinput").val()} </td></tr>`)
            localtable[`tab${tab.children("tr").length}`] = $("#tabinput").val()
            $("#tabinput").val("")
            JSONsave()
        })
    
        firstdel.click(() => {ajoutsupp("first")})
        lastdel.click(() => {ajoutsupp("last")})
    
        function ajoutsupp(delsup) {
            if (delsup == "first") {
                tab.children("tr").first().remove()
                localtable.shift()
            } else {
                tab.children("tr").last().remove()
            }
            JSONsave()
        }

        function JSONsave() {
            localStorage.setItem("tableau", JSON.stringify(localtable))
        }
    }
    

    //=============================//
    //Ex 5//

    ampoule = {
        status: "eteinte",
        allumee: "Img/ampoule1.png",
        eteinte: "Img/ampoule2.png"
    }

    var div = $("#conteneur")   
    var lampe = ampoule

    if (!localStorage.getItem('ampoule')) {
        localStorage.setItem('ampoule', JSON.stringify(lampe))
    } else {
        lampe = JSON.parse(localStorage.getItem('ampoule'))
    }

    lampe_status()
    
    div.click(() => {
        if (lampe.status == "allumee") {
            lampe.status = "eteinte"  
        } else {
            lampe.status = "allumee"  
        }
        lampe_status()
        localStorage.setItem('ampoule', JSON.stringify(lampe))
    })

    function lampe_status() {
        if (lampe.status == "allumee") {
            div.empty()
            div.append(`
            <img src="${lampe.allumee}" id="allumee" />`)    
        } else {
            div.empty()
            div.append(`
            <img src="${lampe.eteinte}" id="eteinte" />`) 
        }
    }
})
