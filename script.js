var request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all', true)

request.send();

request.onload = function () {
    var data = JSON.parse(this.response);

    var request = new XMLHttpRequest();


    request.open('GET','https:api.openweathermap.org/data/2.5/weather?q=Afghanistan&appid=079786f0963f235478a7a1b489f4814c', true);


    request.send();

    request.onload = function () {

           var weatherByGeo = JSON.parse(this.response);

           var request = new XMLHttpRequest();

           request.open('GET','https://api.openweathermap.org/data/2.5/weather?lat=33&lon=65&appid=079786f0963f235478a7a1b489f4814c', true);

           request.send();

          request.onload = function () {
          var weatherByCity = JSON.parse(this.response);

          console.log(weatherByGeo);
          console.log(weatherByCity);
      }

    }

}
