var request = new XMLHttpRequest();                     // create a request
        
function display(){
    var mylist = document.getElementById("myList");  
    switch(mylist.options[mylist.selectedIndex].text){
        
        case "warangal": {console.log("yes!!");
                          warangal();         
                           break;
                          }

        case "Hyderabad": {console.log("yes!!");
                            Hyderabad();
                           break;
                          } 

        default : document.getElementById('para').innerHTML = "";
                          break;
    }
}


function Hyderabad(){
request.open("GET","https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=93f26e3c57081a6210de53b8dcfdfea4",true);
    request.onload =  function(){
        if( request.status>=200 && request.status<400){
            var data = JSON.parse(request.responseText);
            finalshot(data);
        }
        else {
            console.log("some error");
        }
    };
    request.onerror = function(){
            console.log("connection error");
    };
request.send();
}     


function warangal(){
request.open("GET","https://api.openweathermap.org/data/2.5/weather?q=Warangal&appid=93f26e3c57081a6210de53b8dcfdfea4",true);
    request.onload =  function(){
        if( request.status>=200 && request.status<400){
            var data = JSON.parse(request.responseText);
            finalshot(data);
        }
        else {
            console.log("some error");
        }
    };
    request.onerror = function(){
            console.log("connection error");
    };
request.send();
}

function finalshot(data){
    document.getElementById('temp').innerHTML = data.main.temp;
    document.getElementById('weather').innerHTML = data.weather[0].description;
    var icon = data.weather[0].icon+".png";
    document.getElementById('myimg').src = "https://openweathermap.org/img/w/"+icon ;
}
