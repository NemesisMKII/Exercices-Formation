$(document).ready(() => {
    $('#dataSHOW').toggle()
    var token = "096a8cc64fcbfc5831847a29428d0623"
    $('#submit').click(() => {
        $('#inputDIV').toggle(1000)
        setTimeout(() => {
            $('#dataSHOW').fadeIn(1000)
            var city = $('#city_name').val()
            var country = $('#country_name').val()
            var URL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country.toUpperCase()}&appid=${token}&units=metric&lang=FR`

            $.get(URL, (data) => {      // Requête AJAX
                var citytext = `%city%, %country%`
                console.log(citytext);
                citytext = citytext.replace(/%city%/g, city)
                citytext = citytext.replace(/%country%/g, country.toUpperCase())
                $('#citymeteo').text(citytext)

                var iconurl =  `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

                $('img').attr('src', iconurl)
                $('#SHOW_weather').text(`${data.weather[0].description.toUpperCase()}`)

                var suntext = `Le Soleil se lève à %sunrise% et se couche à %sunset%`
                suntext = suntext.replace(/%sunrise%/g, get_hourminutes(data.sys.sunrise))
                suntext = suntext.replace(/%sunset%/g, get_hourminutes(data.sys.sunset))
                $('#suntext').text(suntext)
            })
        }, 1000)
        
    })

    $('#return').click((e) => {
        e.preventDefault()
        $('#dataSHOW').toggle(1000)
        setTimeout(() => {
            $('#inputDIV').fadeIn(1000)
        }, 1000)
    })

    function get_hourminutes(time) {
        var date = new Date(time * 1000)
        var hours = date.getHours()
        var minutes = date.getMinutes()
        return `${hours}H${minutes}`
    }   
})