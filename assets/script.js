
    // buttons event listener functionm
    function searchclicked() {
        $('button').on('click', function (event) {


            // varaibles targering elements in html and condictions!
            var citydisplayer = $('#searchcity');
            var cityName = citydisplayer.val() // get the text content and remove any leading/trailing white space
            var apiKey = 'bfb9cc96afdaaa2f45ca1e6ad6379fe4'; // replace with actual API key
            var units = 'imperial'
            var url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;
            var wind = $('#wind');
            var temp = $('#temperature');
            var humidity = $('#humidity');
            var apikeytwo = 'bfb9cc96afdaaa2f45ca1e6ad6379fe4';
            var trial = $('#trial')
            var place = $('#place')
            var image = $('#image')
            var imageurl = 'http://openweathermap.org/img/wn/'
            var searchcity = $('#seachcity')
            var dateone = $('#dateone')
            var iconone = $('#iconone')
            var tempone = $('#tempone')
            var windone = $('#windone')
            var humidityone = $('#humidityone')
            var datetwo = $('#datetwo')
            var icontwo = $('#icontwo')
            var temptwo = $('#temptwo')
            var windtwo = $('#windtwo')
            var humiditytwo = $('#humiditytwo')
            var datethree = $('#datethree')
            var iconthree = $('#iconthree')
            var tempthree = $('#tempthree')
            var windthree = $('#windthree')
            var humiditythree = $('#humiditythree')
            var datefour = $('#datefour')
            var iconfour = $('#iconfour')
            var tempfour = $('#tempfour')
            var windfour = $('#windfour')
            var humidityfour = $('#humidityfour')
            var datefive = $('#datefive')
            var iconfive = $('#iconfive')
            var tempfive = $('#tempfive')
            var windfive = $('#windfive')
            var humidityfive = $('#humidityfive')
            // Get the current date and time as a dayjs object
            var currentTime = dayjs();
            // Format the date and time as text
            var formattedTime = currentTime.format('MMM D, YYYY');
            var append = $('#tops')
            $('button').attr('class', 'ui-button ui-widget ui-corner-all')
            // Geocoder fetch content
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    // handle the response data here
                    var apikey = 'a3ed97fc2420cdb52e78b24a93a7f60f';
                    var lat = data[0].lat;
                    var lon = data[0].lon;
                    var unix = unix
                    var forecasturl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=${units}`;


                    $('#forecastitle').css('display', 'block')

                    // forecasturl fetch content
                    fetch(forecasturl)
                        .then(response => response.json())

                        .then(response => {

                            dateone.text(response.list[0].dt_txt.split('', 10).join(''));
                            iconone.attr('src', imageurl + response.list[0].weather[0].icon + '.png')
                            tempone.text('Temperature: ' + response.list[0].main.temp + ' °F')
                            windone.text('wind: ' + response.list[0].wind.speed + ' mph')
                            humidityone.text('humidity: ' + response.list[0].main.humidity + ' %')
                            datetwo.text(response.list[7].dt_txt.split('', 10).join(''))
                            icontwo.attr('src', imageurl + response.list[7].weather[0].icon + '.png')
                            temptwo.text('Temperature: ' + response.list[7].main.temp + ' °F')
                            windtwo.text('wind: ' + response.list[7].wind.speed + ' mph')
                            humiditytwo.text('humidity: ' + response.list[7].main.humidity + ' %')
                            datethree.text(response.list[15].dt_txt.split('', 10).join(''))
                            iconthree.attr('src', imageurl + response.list[15].weather[0].icon + '.png')
                            tempthree.text('Temperature: ' + response.list[15].main.temp + ' °F')
                            windthree.text('wind: ' + response.list[15].wind.speed + ' mph')
                            humiditythree.text('humidity: ' + response.list[15].main.humidity + ' %')
                            datefour.text(response.list[23].dt_txt.split('', 10).join(''))
                            iconfour.attr('src', imageurl + response.list[23].weather[0].icon + '.png')
                            tempfour.text('Temperature: ' + response.list[23].main.temp + ' °F')
                            windfour.text('wind: ' + response.list[23].wind.speed + ' mph')
                            humidityfour.text('humidity: ' + response.list[23].main.humidity + ' %')
                            datefive.text(response.list[31].dt_txt.split('', 10).join(''))
                            iconfive.attr('src', imageurl + response.list[31].weather[0].icon + '.png')
                            tempfive.text('Temperature: ' + response.list[31].main.temp + ' °F')
                            windfive.text('wind: ' + response.list[31].wind.speed + ' mph')
                            humidityfive.text('humidity: ' + response.list[31].main.humidity + ' %')




                        })

                    //  forecasturl limitations and url
                    var lattwo = data[0].lat
                    var lontwo = data[0].lon
                    var weatherurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lattwo}&lon=${lontwo}&appid=${apikeytwo}&units=${units}`;

                    // forecasturl fetch content
                    fetch(weatherurl)

                        .then(response => response.json())

                        .then(response => {

                            place.text(response.name + ' ' + '(' + formattedTime + ')')
                            wind.text('wind: ' + response.wind.speed + ' MPH');
                            temp.text('Temperature: ' + response.main.temp + ' °F')
                            humidity.text('humidity: ' + response.main.humidity + '%')
                            image.attr('src', imageurl + response.weather[0].icon + '.png')
                        })
                        .catch(error => console.error(error));


                })


            event.preventDefault();

            //  localstorage for input text value!
            var pushes = JSON.parse(localStorage.getItem('savedbuttons')) || [];
            // push text value inside the localstorage
            pushes.push(citydisplayer.val());

// conditions if pushes.length is greater the 10 then replace the oldest value with the newst value!
            if (pushes.length > 10) {
                pushes.shift();


            }

            localStorage.setItem('savedbuttons', JSON.stringify(pushes));




        });
    }
    // search history condictions and reactions!

    var searchdata = JSON.parse(localStorage.getItem('savedbuttons'));

// search history buttons function
    function historybuttons() {





        let number = 0;
// if searchdata.length is greater than 0, generate buttons with the text value of savedbuttons that contains an unique ID
        if (searchdata.length > 0) {
            for (i = 0; i < searchdata.length; i++) {



                let searchistory = $('<button/>');
                // searchistory.attr('id', newid);
                if ($('<button/>')) {
                    number++
                    searchistory.attr('id', 'button-' + number);

                }
                searchistory.addClass('ui-button ui-widget ui-corner-all').addClass('hola');
                searchistory.text(searchdata[i]);
                $('#tops').append(searchistory);
                searchistory.css('display', 'block').css('margin-left', '20px');


            }
        }
    }


    searchclicked()
    historybuttons()

// Event listener for when buttons are clicked!!!
    $('#button-1').on('click', function () {
        let textvalue = $('#button-1').text()
        let citydisplayer = $('#searchcity')

        citydisplayer.val(textvalue)
        return searchclicked()
    });

    $('#button-2').on('click', function () {
        let textvalue = $('#button-2').text()
        let citydisplayer = $('#searchcity')

        citydisplayer.val(textvalue)
        return searchclicked()
    });

    $('#button-3').on('click', function () {
        let textvalue = $('#button-3').text()
        let citydisplayer = $('#searchcity')

        citydisplayer.val(textvalue)
        return searchclicked()
    });

    $('#button-4').on('click', function () {
        let textvalue = $('#button-4').text()
        let citydisplayer = $('#searchcity')

        citydisplayer.val(textvalue)
        return searchclicked()
    });

    $('#button-5').on('click', function () {
        let textvalue = $('#button-5').text()
        let citydisplayer = $('#searchcity')

        citydisplayer.val(textvalue)
        return searchclicked()
    });
    $('#button-6').on('click', function () {
        let textvalue = $('#button-6').text()
        let citydisplayer = $('#searchcity')

        citydisplayer.val(textvalue)
        return searchclicked()
    });
    $('#button-7').on('click', function () {
        let textvalue = $('#button-7').text()
        let citydisplayer = $('#searchcity')

        citydisplayer.val(textvalue)
        return searchclicked()
    });
    $('#button-8').on('click', function () {
        let textvalue = $('#button-8').text()
        let citydisplayer = $('#searchcity')

        citydisplayer.val(textvalue)
        return searchclicked()
    });
    $('#button-9').on('click', function () {
        let textvalue = $('#button-9').text()
        let citydisplayer = $('#searchcity')

        citydisplayer.val(textvalue)
        return searchclicked()
    });
    $('#button-10').on('click', function () {
        let textvalue = $('#button-10').text()
        let citydisplayer = $('#searchcity')

        citydisplayer.val(textvalue)
        return searchclicked()
    });

