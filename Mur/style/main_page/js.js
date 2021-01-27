$(document).ready(() => {
    letters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var user_list = JSON.parse(localStorage.getItem("user_list"))

    var btndisconnect = $("#btndisconnect")

    var current_user = get_user()
    $("#home_name").append(current_user.last_name + " " + current_user.first_name)
    if (!current_user.post_list) {
        current_user.post_list = []
    } else {
        for (i in current_user.post_list) {
            post_it(current_user.post_list[i].content, current_user.post_list[i].date, current_user.post_list[i])
            if (current_user.post_list[i].is_liked == true) {
                $('.maincontainer').children(`div:nth-child(${1})`).children("div:nth-child(3)").children().first().toggleClass('bricked')
            }
        }
        for (var post=0; post < $('.walldiv').children().length; post++) {      
            console.log($('.walldiv').children(`div:nth-child(${post+1})`).children());
        }   
    }

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
            $('comment').toggleClass('dark')
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
            AUTHOR_ID: current_user.user_ID,
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
            post_it(post.content, post.date, post)
            text.val("")
            current_user.post_list.push(post)
            for (i in user_list) {
                if (user_list[i].user_ID == current_user.user_ID) {
                    user_list[i] = current_user
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

    function comsubmit(e) {
        //Function that add a new comment in the comment section of a post
        e.preventDefault()
        var current_post_ID = $(e.target).parent().data('id')
        var com_section = $(e.target).parent().children('div.coms')
        var com_INPUT = $(e.target).children('input').val()
        var com = {
            AUTHOR_ID: current_user.user_ID,
            com_ID: generate_ID(),
            content: com_INPUT,
            likes: [],
            date: get_date()
        }

        for (i in current_user.post_list) {
            if (current_post_ID == current_user.post_list[i].POST_ID) {
                current_user.post_list[i].coms.push(com)
            }
        }

        post_COM(com_section, com)

        updateJSON()

    }

    function post_COM(com_section, com) {
        
        var com_author = get_username_byID(com.AUTHOR_ID)

        com_section.append(`
        <div class='border-bottom border-dark p-0' data-id="${com.com_ID}">
            <p class="m-0"><strong>${com_author}</strong></p>
            <p class="ms-2 mb-0">${com.content}</p>
            <p class="d-flex justify-content-end me-2">${com.date}</p>
        </div>`)
    }
    //functions

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
        for (i in user_list) {
            if (ID == user_list[i].user_ID) {
                return user_list[i].first_name + " " + user_list[i].last_name
            }
        }
    }

    function generate_ID() {
        var ID = "";
        for (var i = 0; i < 30; i++) {
            var x = letters[getRandomInt(62)]
            ID += x
        }
        return ID
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function get_date() {
        var d = new Date();

        var output = (d.getHours() < 10 ? "0" : "") + d.getHours() + 
                     'H' + 
                     (d.getMinutes() < 10 ? "0" : "") + d.getMinutes()
            
        return output
    }

    function post_it(text, date, post) {
        if (darkmode) {
            $(`.walldiv`).prepend(`
        <div class="container mt-4 border-bottom border-dark pb-4 dark data-id="${post.POST_ID}">
            <h5>${current_user.first_name} ${current_user.last_name}</h5>
            <button class="deleteme btn btn-danger p-0">Supprimer</button>
            ${(post.img_url.length > 1 ? `<img src="${post.img_url}" class="postimg img-fluid w-100" />` : '' )}
            ${(post.img_url.length > 1 & post.content.length == 0 ? '' : `
            <div class="container-fluid h-25 dark">
                <p>${text}</p>
            </div>`)}
            <div class="status_bar d-flex">
                    <button class="btn like w-50 border border-dark p-0">${(post.likes.length > 0 ? post.likes.length : "")} Brique${post.likes.length > 1 ? `s` : ''}</button>
                    <button class="btn comment w-50 border border-dark p-0">Commenter</button>
            </div>
            <div class="coms dark">
                <p> Commentaires </p>
            </div>
            <form method="get" action="main_page.html">
                <input type='text' class="addcom w-75 border border-dark" placeholder="écrire un commentaire ..."></input>
                <button class="w-25">Envoyer</button>
            </form>
            <p>${date}</p>
        </div>
        `)
        } else {
            $(`.walldiv`).prepend(`
        <div class="container mt-4 border-bottom border-dark pb-5" data-id="${post.POST_ID}">
            <h5>${current_user.first_name} ${current_user.last_name}</h5>
            ${(post.img_url.length > 1 ? `<img src="${post.img_url}" class="postimg img-fluid w-100 mb-1" />` : '' )}
            ${(post.img_url.length > 1 & post.content.length == 0 ? '' : `
            <div class="container-fluid h-25">
                <p>${text}</p>
            </div>`)}
            <div class="status_bar d-flex">
                    <button type="button" class="btn like w-50 border border-dark p-0">${(post.likes.length > 0 ? post.likes.length : "")} Brique${post.likes.length > 1 ? `s` : ''}</button>
                    <button type="button" class="btn comment w-50 border border-dark p-0">Commenter</button>
            </div>
            <p class='m-0 border border-dark border-1 text-center'><strong> Commentaires</strong> </p>
            <div class="coms border border-dark ps-0">
            </div>
            <form method="get" action="main_page.html"'>
                <input type='text' class="addcom w-75" placeholder="écrire un commentaire ..."></input>
                <button class="w-25 float-end btncom">Envoyer</button>
            </form>
            <p class="float-start">${date}</p>
            <button class="deleteme btn btn-warning p-0 float-end">Supprimer</button>
        </div>
        `)
        }

    }


    function like_post(button) {
        var current_post = button.parent().parent()
        var current_post_id = current_post.data('id')
        for (i in current_user.post_list) {
            if (current_post_id == current_user.post_list[i].POST_ID) {
                if (!current_user.post_list[i].is_liked || !current_user.user_ID in current_user.post_list[i].likes) {
                    add_like(i, button)
                } else {
                    remove_like(i, button)
                }
            }
        }
    }

    function add_like(element, button) {
        current_user.post_list[element].likes.push(current_user.user_ID)
        current_user.post_list[element].is_liked = true
        button.empty()
        button.prepend(`${current_user.post_list[i].likes.length} brique${current_user.post_list[i].likes.length > 1 ? `s` : ''} `)
        button.toggleClass('bricked')
        console.log(current_user.post_list[element].likes);
        updateJSON()
    }

    function remove_like(element, button) {
        console.log(element);
        for (j in current_user.post_list[element].likes) {
            if (current_user.user_ID == current_user.post_list[element].likes[j]) {
                current_user.post_list[element].likes.splice(j, 1)
            }
        }
        current_user.post_list[element].is_liked = false
        button.empty()
        button.prepend(`${(current_user.post_list[i].likes.length > 0 ? current_user.post_list[i].likes.length : ``)} brique${current_user.post_list[i].likes.length > 1 ? `s` : ''}`)
        button.toggleClass('bricked')
        console.log(current_user.post_list[element].likes);
        updateJSON()
    }

    function add_COMMENT(button) {
        var current_post = button.parent().parent()
        var current_post_coms = current_post.children('div.coms');
        var current_post_id = current_post.data('id')
        var addcom_INPUT = current_post.children('input')
        console.log(current_post_coms);
        addcom_INPUT.focus()
        $('.btncom').click((e) => {
            e.preventDefault()
            current_post_coms.append(`
                    <div>
                        <p>${addcom_INPUT.val()}</p>
                    </div>
            `)
        })
    }

    function delete_post(button) {
        var current_post = button.parent()
        var current_post_id = current_post.data('id')
        for (i in current_user.post_list) {
            if (current_post_id == current_user.post_list[i].POST_ID) {
                current_user.post_list.splice(i, 1)
                current_post.remove()
                updateJSON()
            }
        }
    }   


    function updateJSON() {
        for (j in user_list) {
            if (current_user.user_ID == user_list[j].user_ID) {
                user_list[j] = current_user
                localStorage.setItem("user_list", JSON.stringify(user_list))
            }
        }
    }

})