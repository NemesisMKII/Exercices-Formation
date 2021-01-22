$(document).ready(() => {
    var user = JSON.parse(sessionStorage.getItem("user"))

    var btndisconnect = $("#btndisconnect")

    check_connection()

    btndisconnect.click(() => {
        user.is_connected = false
        sessionStorage.setItem("user", JSON.stringify(user))
        location.reload()
    })

    var darkmode = false
    var toggledarkmode = $("#toggledark")
    toggledarkmode.click(() => {
        darkmode = true
        $('body').fadeOut('fast')
        $('body').fadeIn('fast')
        setTimeout(() => {
            $("body").toggleClass("bodydark")
            $('header').toggleClass("dark")
            $('textarea').toggleClass('dark')
            $('div').toggleClass('dark')
        }, 200)
    })

    var postsubmit = $("#postsubmit")
    var text = $("textarea")

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
        console.log(text);
        if (darkmode) {
            $(`.walldiv`).append(`
        <div class="container mt-4 border-bottom border-dark pb-4 dark">
            <h5>${user.first_name} ${user.last_name}</h4>
            <div class="container-fluid border border-dark h-25 dark">
                <p>${text.val()}</p>
            </div>
        </div>
        `)
        } else {
            $(`.walldiv`).append(`
        <div class="container mt-4 border-bottom border-dark pb-4">
            <h5>${user.first_name} ${user.last_name}</h4>
            <div class="container-fluid border border-dark h-25">
                <p>${text.val()}</p>
            </div>
        </div>
        `)
        }
        console.log($(`.walldiv`));
        text.val("")
    })

    //functions

    function check_connection() {
        //if the user is not connected, redirect to login page
        if (!user.is_connected){
            window.location.href = "index.html"
        }
    }

})