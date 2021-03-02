$(document).ready(() => {
    //Exercice 1
    $.ajax({
        type:"GET",
        url: './nutrition.xml',
        dataType: "xml",

        error: () => {
            alert('chargement du xml échoué.')
        },

        success: (data) => {
            $(data).find('food').each(function() {
                $('table tbody').append(`
                <tr style="text-align: center">
                    <td colspan="3">${$(this).find('name').text()}</td>
                    <td>${$(this).find('serving').text()}</td>
                    <td>${$(this).find('calories').attr('total')}</td>
                    <td>${$(this).find('carb').text()}</td>
                </tr>`)
            })
        }
    })

    //Exercice 2
    $.ajax({
        type: "GET",
        url: "./restaurants.xml",
        dataType: "xml",

        error: () => {
            alert('Le chargement du xml a échoué.')
        },

        success: (data) => {
            var restaurants = $(data).find('restaurant')
            restaurants.each(function() {
                $('#restaurantlist').append(`
                    <li class="mt-1 ${($(this).attr('type') == "sitdown" ? 'sitdown' : 'bar')}">${$(this).attr('name')}: ${$(this).attr('address')}</li>
                `)
            })
        }
    })
})