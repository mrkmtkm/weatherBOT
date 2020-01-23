var access_token = "ラインのアクセストークン";

var bangou='毎日通知する場所の郵便番号';
var user_id = 'ラインのユーザーID ';

function tenki_osirase() {
   
    var response = getWeather(bangou);
    if (response != "error") {
        var country = response.city.country,
            cityName = response.city.name;
        var date = [],
            weather = [],
            icon = [],
            temperature = [];
        for (var i = 0; i <= 8; i++) {
            if (Number(response.list[i].dt_txt.slice(11, 13)) + 9 > 24) {
                date.push(Number(response.list[i].dt_txt.slice(11, 13)) + 9 - 24);
            }
            else {
                date.push(Number(response.list[i].dt_txt.slice(11, 13)) + 9);
            }
            weather.push(response.list[i].weather[0].main);
            icon.push(response.list[i].weather[0].icon);
            temperature.push((Math.round((Number(response.list[i].main.temp) - 273.15) * 10) / 10).toString() + '℃');
        }
     var    message = {
            "to" : user_id,
            "messages": [{
                "type": "flex",
                "altText": '天気予報',
                "contents": {
                    "type": "bubble",
                    "styles": {
                        "footer": {
                            "separator": true
                        }
                    },
                    "body": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "毎朝の天気予報",
                                "weight": "bold",
                                "size": "xxl",
                                "margin": "md"
                            },
                            {
                                "type": "text",
                                "text": "埼玉県深谷市上柴町",
                                "size": "md",
                                "color": "#aaaaaa",
                                "wrap": true
                            },
                            {
                                "type": "separator",
                                "margin": "xxl"
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "margin": "xxl",
                                "spacing": "sm",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": date[0] + ":00",
                                                "size": "sm",
                                                "color": "#555555",
                                                "flex": 0
                                            },
                                            {
                                                "type": "text",
                                                "text": weather[0],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://openweathermap.org/img/w/" + icon[0] + ".png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "text",
                                                "text": temperature[0],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": date[1] + ":00",
                                                "size": "sm",
                                                "color": "#555555",
                                                "flex": 0
                                            },
                                            {
                                                "type": "text",
                                                "text": weather[1],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://openweathermap.org/img/w/" + icon[1] + ".png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "text",
                                                "text": temperature[1],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": date[2] + ":00",
                                                "size": "sm",
                                                "color": "#555555",
                                                "flex": 0
                                            },
                                            {
                                                "type": "text",
                                                "text": weather[2],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://openweathermap.org/img/w/" + icon[2] + ".png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "text",
                                                "text": temperature[2],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": date[3] + ":00",
                                                "size": "sm",
                                                "color": "#555555",
                                                "flex": 0
                                            },
                                            {
                                                "type": "text",
                                                "text": weather[3],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://openweathermap.org/img/w/" + icon[3] + ".png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "text",
                                                "text": temperature[3],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": date[4] + ":00",
                                                "size": "sm",
                                                "color": "#555555",
                                                "flex": 0
                                            },
                                            {
                                                "type": "text",
                                                "text": weather[4],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://openweathermap.org/img/w/" + icon[4] + ".png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "text",
                                                "text": temperature[4],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": date[5] + ":00",
                                                "size": "sm",
                                                "color": "#555555",
                                                "flex": 0
                                            },
                                            {
                                                "type": "text",
                                                "text": weather[5],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://openweathermap.org/img/w/" + icon[5] + ".png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "text",
                                                "text": temperature[5],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": date[6] + ":00",
                                                "size": "sm",
                                                "color": "#555555",
                                                "flex": 0
                                            },
                                            {
                                                "type": "text",
                                                "text": weather[6],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://openweathermap.org/img/w/" + icon[6] + ".png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "text",
                                                "text": temperature[6],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": date[7] + ":00",
                                                "size": "sm",
                                                "color": "#555555",
                                                "flex": 0
                                            },
                                            {
                                                "type": "text",
                                                "text": weather[7],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://openweathermap.org/img/w/" + icon[7] + ".png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "text",
                                                "text": temperature[7],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": date[8] + ":00",
                                                "size": "sm",
                                                "color": "#555555",
                                                "flex": 0
                                            },
                                            {
                                                "type": "text",
                                                "text": weather[8],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://openweathermap.org/img/w/" + icon[8] + ".png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "text",
                                                "text": temperature[8],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "separator",
                                "margin": "xxl"
                            }
                        ]
                    }
                }
            }]
        };
    } 
   
   sendToLine(message);
   
}

function getWeather(e) {
    try {
        var apiKey = 'ee961838d88c900e723c8f1adb758150';
        var url = 'http://api.openweathermap.org/data/2.5/forecast' + '?zip=' + e + ',jp&APPID=' + apiKey;
        var response = UrlFetchApp.fetch(url);
        return JSON.parse(response);
        Logger.log(response.list[0])
    } catch (e) {
        return "error";
    }
}




function sendToLine(text){
  var token = access_token;
  var options =
   {
    'headers': {
          'Content-Type': 'application/json; charset=UTF-8',
          'Authorization': 'Bearer ' + token,
      },
      'method': 'post',
      'payload': JSON.stringify( text)
   };
   UrlFetchApp.fetch("https://api.line.me/v2/bot/message/push", options);
}



/////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
 var userMessage;

function doPost(e) {
    var events = JSON.parse(e.postData.contents).events;
    events.forEach(function (event) {
        switch (event.type) {
            case "message":
              /////////////////////////////////////////////////
            if(event.message.text=="自分の好きな場所"){
              userMessage ="そこの住所";
                reply(event);
                }
                else if(event.message.text=="自分の好きな場所"){
                userMessage ="そこの住所";
                reply(event);
                }
                 else if(event.message.text=="自分の好きな場所"){
                userMessage ="そこの住所";
                reply(event);
                }
                 else if(event.message.text=="自分の好きな場所"){
                userMessage ="そこの住所";
                reply(event);
                }
                
                else{
                 userMessage = event.message.text;
                 reply(event);
                }
                break;
            
        }
        
    });
}

function reply(e) {
   
    var response = getWeather(userMessage);
    if (response != "error") {
        var country = response.city.country,
            cityName = response.city.name;
            
       //////////////////////////////////////////
            if(e.message.text=="自分の好きな場所"){
              country = "日本";
            cityName = "遊佐町";
                }
                else if(e.message.text=="自分の好きな場所"){
               country = "日本";
            cityName = "深谷市";
                }
                 else if(e.message.text=="自分の好きな場所"){
                 country = "日本";
            cityName = "高崎市";
                }
                 else if(e.message.text=="自分の好きな場所"){
                country = "日本";
            cityName = "さいたま市";
                }
            
        var date = [],
            weather = [],
            icon = [],
            temperature = [];
        for (var i = 0; i <= 8; i++) {
            if (Number(response.list[i].dt_txt.slice(11, 13)) + 9 > 24) {
                date.push(Number(response.list[i].dt_txt.slice(11, 13)) + 9 - 24);
            }
            else {
                date.push(Number(response.list[i].dt_txt.slice(11, 13)) + 9);
            }
            weather.push(response.list[i].weather[0].main);
            icon.push(response.list[i].weather[0].icon);
            temperature.push((Math.round((Number(response.list[i].main.temp) - 273.15) * 10) / 10).toString() + '℃');
        }
        var message = {
            "replyToken": e.replyToken,
            "messages": [{
                "type": "flex",
                "altText": '天気予報',
                "contents": {
                    "type": "bubble",
                    "styles": {
                        "footer": {
                            "separator": true
                        }
                    },
                    "body": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "text",
                                "text": "天気予報",
                                "weight": "bold",
                                "size": "xxl",
                                "margin": "md"
                            },
                            {
                                "type": "text",
                                "text": country + ' . ' + cityName,
                                "size": "md",
                                "color": "#aaaaaa",
                                "wrap": true
                            },
                            {
                                "type": "separator",
                                "margin": "xxl"
                            },
                            {
                                "type": "box",
                                "layout": "vertical",
                                "margin": "xxl",
                                "spacing": "sm",
                                "contents": [
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": date[0] + ":00",
                                                "size": "sm",
                                                "color": "#555555",
                                                "flex": 0
                                            },
                                            {
                                                "type": "text",
                                                "text": weather[0],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://openweathermap.org/img/w/" + icon[0] + ".png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "text",
                                                "text": temperature[0],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": date[1] + ":00",
                                                "size": "sm",
                                                "color": "#555555",
                                                "flex": 0
                                            },
                                            {
                                                "type": "text",
                                                "text": weather[1],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://openweathermap.org/img/w/" + icon[1] + ".png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "text",
                                                "text": temperature[1],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": date[2] + ":00",
                                                "size": "sm",
                                                "color": "#555555",
                                                "flex": 0
                                            },
                                            {
                                                "type": "text",
                                                "text": weather[2],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://openweathermap.org/img/w/" + icon[2] + ".png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "text",
                                                "text": temperature[2],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": date[3] + ":00",
                                                "size": "sm",
                                                "color": "#555555",
                                                "flex": 0
                                            },
                                            {
                                                "type": "text",
                                                "text": weather[3],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://openweathermap.org/img/w/" + icon[3] + ".png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "text",
                                                "text": temperature[3],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": date[4] + ":00",
                                                "size": "sm",
                                                "color": "#555555",
                                                "flex": 0
                                            },
                                            {
                                                "type": "text",
                                                "text": weather[4],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://openweathermap.org/img/w/" + icon[4] + ".png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "text",
                                                "text": temperature[4],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": date[5] + ":00",
                                                "size": "sm",
                                                "color": "#555555",
                                                "flex": 0
                                            },
                                            {
                                                "type": "text",
                                                "text": weather[5],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://openweathermap.org/img/w/" + icon[5] + ".png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "text",
                                                "text": temperature[5],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": date[6] + ":00",
                                                "size": "sm",
                                                "color": "#555555",
                                                "flex": 0
                                            },
                                            {
                                                "type": "text",
                                                "text": weather[6],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://openweathermap.org/img/w/" + icon[6] + ".png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "text",
                                                "text": temperature[6],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": date[7] + ":00",
                                                "size": "sm",
                                                "color": "#555555",
                                                "flex": 0
                                            },
                                            {
                                                "type": "text",
                                                "text": weather[7],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://openweathermap.org/img/w/" + icon[7] + ".png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "text",
                                                "text": temperature[7],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            }
                                        ]
                                    },
                                    {
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [
                                            {
                                                "type": "text",
                                                "text": date[8] + ":00",
                                                "size": "sm",
                                                "color": "#555555",
                                                "flex": 0
                                            },
                                            {
                                                "type": "text",
                                                "text": weather[8],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            },
                                            {
                                                "type": "icon",
                                                "url": "https://openweathermap.org/img/w/" + icon[8] + ".png",
                                                "size": "xl"
                                            },
                                            {
                                                "type": "text",
                                                "text": temperature[8],
                                                "size": "sm",
                                                "color": "#111111",
                                                "align": "end"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "separator",
                                "margin": "xxl"
                            }
                        ]
                    }
                }
            }]
        };
    } else {
        var message = {
            "replyToken": e.replyToken,
            "messages": [{
                "type": "text",
                "text": "その郵便番号は存在しておりません"
            }]
        };
    }
    var replyData = {
        "method": "post",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + access_token
        },
        "payload": JSON.stringify(message)
    };
    try {
        UrlFetchApp.fetch("https://api.line.me/v2/bot/message/reply", replyData);
    } catch (e) {

    }
}

