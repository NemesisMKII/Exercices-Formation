$(document).ready(() => {
    letters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var user_list = JSON.parse(localStorage.getItem("user_list"))   

    var btndisconnect = $("#btndisconnect")

    
    var current_user = get_user()

    if (window.location.href.indexOf('?') == -1) {
        var user = current_user
    } else {
        var user = get_userbyURL()
        $('.addpostcontainer').toggle()
    }
    
    if (!user.post_list) {
        user.post_list = []
    } else {
        for (i in user.post_list) {
            post_it(user.post_list[i])
            var current_post_com = $('.walldiv').children(`div:nth-child(${1})`).children('div.coms')
            if (user.post_list[i].coms.length > 0) {
                for (j in user.post_list[i].coms) {
                    post_COM(current_post_com, user.post_list[i].coms[j], user.post_list[i].coms[j].AUTHOR_ID);
                }
            }
            if (user.post_list[i].is_liked == true) {
                $('.maincontainer').children(`div:nth-child(${1})`).children(`div:nth-child(${user.post_list[i].img_url ? '4':'3'})`).children().first().toggleClass('bricked')
            }
        }
    }

    //Boucle qui va remplir la liste d'utilisateurs existants sur le site
    for (i in user_list) {
        $('#accesstoUser').append(`
        <option data-id="${user_list[i].user_ID}">${get_username_byID(user_list[i].user_ID)}</option>
        `)
    }

    /*Remplissage de la div de droite contenant La photo de profil, le nom de l'utilisateur
    Ainsi que la possibilité de changer la photo de profil s'il s'agit de l'utilisateur connecté*/
    $('#user_profile').append(`
        <img src='${user.profile_picture}' id="profile-photo"/>
        <h3 class="text-center">${get_username_byID(user.user_ID)}</h3>
        ${user.user_ID == current_user.user_ID ? `<input type="text" placeholder="Changer d'Img ..." class="d-block" id="changeProfilePic"/>
        <button class="d-block" id="changePicBtn">Changer</button>`: '' }
    `)

    //Changement de la ppd au click du bouton
    $("#changePicBtn").click(() => {
        user.profile_picture = $('#changeProfilePic').val()
        updateJSON()
        window.location.href = "main_page.html"
    })

    //Bouton Home 'The Mur'
    $('#home').click((e) => {
        e.preventDefault()
        window.location.href = "main_page.html"
    })

    /*Div pour accéder à la page du'n autre utilisateur, au clic sur le bouton 
    on ajoute l'ID de l'utilisateur choisi dans la barre de l'URL qu'on viendra récupérer ensuite */
    $('#btnuser').click(() => {
        for (var user_option = 1; user_option < $('#accesstoUser').children().length +1; user_option++) {
            if ($('#accesstoUser').children(`option:nth-child(${user_option})`).is(':selected')) {
                var user_page = `main_page.html?user=${$('#accesstoUser').children(`option:nth-child(${user_option})`).data('id')}`;
                window.location.href = user_page
            }
        }
    })

    btndisconnect.click(() => {
        for (i in user_list) {
            if (user_list[i].user_ID == current_user.user_ID) {
                user_list[i].is_connected = false
            }
        }
        localStorage.setItem("user_list",JSON.stringify(user_list))
        window.location.href = "index.html"
    })

    var darkmode = false
    var toggledarkmode = $("#toggledark")
    toggledarkmode.click(() => {
        if (darkmode) {
            darkmode = false
        } else {
            darkmode = true
        }
        $('body').fadeOut('fast')
        $('body').fadeIn('fast')
        setTimeout(() => {
            $("body").toggleClass("bodydark")
            $('header').toggleClass("dark")
            $('textarea').toggleClass('dark')
            $('div').toggleClass('dark')
            $('#fileupload').toggleClass('dark')
            $('.like').toggleClass('dark')
            $('.like').toggleClass('bg-white')
            $('.comment').toggleClass('dark')
            $('.comment').toggleClass('bg-white')
            $('.addcom').toggleClass('dark')
        }, 190)
    })

    var postsubmit = $("#postsubmit");
    var text = $("textarea");

    text.focus(() => {
        text.keydown((event) => {
            if (event.keyCode == 13) {
                text.val(text.val() + `<br>`)
            }
        })
    })
    
    text.focusout(() => {
        text.unbind("focus")
    })
    postsubmit.click(() => {
        $('.like').unbind("click", clique)
        $('.comment').unbind("click", clique)
        $('.deleteme').unbind("click", clique)
        $('form').unbind('submit', comsubmit)

        post = {
            POST_ID: generate_ID(),
            AUTHOR_ID: user.user_ID,
            date: get_date(),
            content: text.val(),
            img_url: $("#fileupload").val(),
            is_liked: false,
            likes: [],
            coms: []
        }

        if (post.content == "" && post.img_url == "") {
            alert("Vous ne pouvez pas envoyer un post vide !")
        } else {
            post_it(post)
            text.val("")
            current_user.post_list.push(post)
            for (i in user_list) {
                if (user_list[i].user_ID == user.user_ID) {
                    user_list[i] = user
                } 
            }
            localStorage.setItem("user_list", JSON.stringify(user_list))
            $('#fileupload').val("")
        }

        $('.comment').click(clique)
        $('.deleteme').click(clique)
        $('.like').click(clique)
        $('form').submit(comsubmit)
    })

    $('.comment').click(clique)
    $('.deleteme').click(clique)
    $('.like').click(clique)

    $('form').submit(comsubmit)
    
    //functions

    function get_userbyURL() {
        var ID = window.location.href.split('?')[1].split('=')[1]
        for (users in user_list) {
            if (ID == user_list[users].user_ID) {
                return user_list[users]
            }
        }
    }

    function comsubmit(e) {
        //Function that add a new comment in the comment section of a post
        e.preventDefault()
        var current_post_ID = $(e.target).parent().data('id')
        var com_section = $(e.target).parent().children('div.coms')
        var com_INPUT = $(e.target).children('input')
        var com = {
            AUTHOR_ID: current_user.user_ID,
            com_ID: generate_ID(),
            content: com_INPUT.val(),
            likes: [],
            date: get_date()
        }

        for (i in user.post_list) {
            if (current_post_ID == user.post_list[i].POST_ID) {
                user.post_list[i].coms.push(com)
            }
        }

        post_COM(com_section, com, com.AUTHOR_ID)

        updateJSON()
        com_INPUT.val('')

    }

    function post_COM(com_section, com, com_AUTHOR) {
        // Fonction appelée dans comsubmit et qui va rajouter l'HTML dans le DOM 
        console.log(get_user_byID(com_AUTHOR));

        com_section.prepend(`
        <div class='p-0 ${darkmode ? 'dark': ''}' data-id="${com.com_ID}">
            <p class="m-0"><img src="${get_user_byID(com_AUTHOR).profile_picture}" class="com_user_photo ms-1 me-1 mt-1" /><strong>${get_username_byID(com.AUTHOR_ID)}</strong></p>
            <p class="ms-2 mb-0 mt-2">${com.content}</p>
            <p class="d-flex justify-content-end me-2">${com.date}</p>
        </div>`)
        console.log(get_user_byID(com_AUTHOR));
    }

    function clique() {
        //Function that get onclick event on either the "like", "comment", or "delete" buttons in a post
        //Redirects to proper functions
        var button = $(this)
        if (button.hasClass("like")) {
            like_post(button)
        } else if (button.hasClass("comment")) {
            console.log(button);
            button.parent().parent().children('form').children('input').focus()
        } else if (button.hasClass("deleteme")) {
            delete_post(button)
        }
        
    }

    function get_user() {
        //if the user is not connected, redirect to login page
        for (i in user_list) {
            if (user_list[i].is_connected == true) {
                return user_list[i]
            }
        }
    }

    function get_username_byID(ID) {
        //Retrouve le nom d'utilisateur à partir d'un ID (Obsolète)
        for (userz in user_list) {
            if (ID == user_list[userz].user_ID) {
                return user_list[userz].first_name + " " + user_list[userz].last_name
            }
        }
    }

    function get_user_byID(ID) {
        //Retrouve un utilisateur dans la base de données en utilisant un ID
        for (userzz in user_list) {
            if (ID == user_list[userzz].user_ID) {
                return user_list[userz]
            }
        }
    }

    function generate_ID() {
        //Génére un ID
        var ID = "";
        for (var i = 0; i < 30; i++) {
            var x = letters[getRandomInt(62)]
            ID += x
        }
        return ID
    }

    function getRandomInt(max) {
        //Renvoie un chiffre random entre 0 et 9
        return Math.floor(Math.random() * Math.floor(max));
    }

    function get_date() {
        //récupère la date et l'heure
        var d = new Date();

        var output = (d.getHours() < 10 ? "0" : "") + d.getHours() + 
                     'H' + 
                     (d.getMinutes() < 10 ? "0" : "") + d.getMinutes()
            
        return output
    }

    function post_it(post) {
        //Fonction appelée dans la génération du mur pour afficher les posts déja existants de l'utilisateur
            $(`.walldiv`).prepend(`
        <div class="container mt-4 border-bottom border-dark pb-5 ${darkmode ? 'dark': ''}" data-id="${post.POST_ID}">
            <h5><img src="${user.profile_picture}" class="user_profile me-1" />${get_username_byID(post.AUTHOR_ID)}</h5>
            ${(post.img_url.length > 1 ? `<img src="${post.img_url}" class="postimg img-fluid w-100 mb-1" />` : '' )}
            ${(post.img_url.length > 1 & post.content.length == 0 ? '' : `
            <div class="container-fluid h-25 p-0 pt-1 ${darkmode ? 'dark': ''}">
                <p>${post.content}</p>
            </div>`)}
            <div class="status_bar d-flex">
                    <button type="button" class="btn like w-50 border border-dark p-0 ${darkmode ? 'dark': ''}">${(post.likes.length > 0 ? post.likes.length : "")} Brique${post.likes.length > 1 ? `s` : ''}</button>
                    <button type="button" class="btn comment w-50 border border-dark p-0 ${darkmode ? 'dark': ''}">Commenter</button>
            </div>
            <p class='m-0 border border-dark border-1 text-center bg-brick'><strong> Commentaires</strong> </p>
            <div class="coms border border-dark ps-0">
            </div>
            <form method="get" action="main_page.html"'>
                <input type='text' class="addcom w-75 ${darkmode ? 'dark': ''}" placeholder="écrire un commentaire ..."></input>
                <button class="w-25 float-end btncom">Envoyer</button>
            </form>
            <p class="float-start">${post.date}</p>
            <button class="deleteme btn btn-warning p-0 float-end">Supprimer</button>
        </div>
        `)
    }

    function like_post(button) {
        //Fonction appelée au click sur le bouton "Brique"
        var current_post = button.parent().parent()
        var current_post_id = current_post.data('id')
        for (i in user.post_list) {
            if (current_post_id == user.post_list[i].POST_ID) {
                if (!user.post_list[i].is_liked || !user.user_ID in user.post_list[i].likes) {
                    add_like(i, button)
                } else {
                    remove_like(i, button)
                }
            }
        }
    }

    function add_like(element, button) {
        //Fonction appelée par la fonction like_post
        user.post_list[element].likes.push(user.user_ID)
        user.post_list[element].is_liked = true
        button.empty()
        button.prepend(`${user.post_list[i].likes.length} brique${user.post_list[i].likes.length > 1 ? `s` : ''} `)
        button.toggleClass('bricked')
        updateJSON()
    }

    function remove_like(element, button) {
        //Retire le like d'un post si l'utilisateur l'a déjà liké
        for (j in user.post_list[element].likes) {
            if (user.user_ID == user.post_list[element].likes[j]) {
                user.post_list[element].likes.splice(j, 1)
            }
        }
        user.post_list[element].is_liked = false
        button.empty()
        button.prepend(`${(user.post_list[i].likes.length > 0 ? user.post_list[i].likes.length : ``)} brique${user.post_list[i].likes.length > 1 ? `s` : ''}`)
        button.toggleClass('bricked')
        updateJSON()
    }

    function delete_post(button) {
        // Fonction qui récupère un post pour le supprimer au click du bouton "Supprimer"
        var current_post = button.parent()
        var current_post_id = current_post.data('id')
        for (i in user.post_list) {
            if (current_post_id == user.post_list[i].POST_ID) {
                user.post_list.splice(i, 1)
                current_post.remove()
                updateJSON()
            }
        }
    }   

    function updateJSON() {
        //Met à jour la base de données
        for (j in user_list) {
            if (user.user_ID == user_list[j].user_ID) {
                user_list[j] = user
                localStorage.setItem("user_list", JSON.stringify(user_list))
            }
        }
    }

})  