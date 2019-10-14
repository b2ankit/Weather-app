const request = require('request')


const forecast = (lat,lang,callback)=>{
    const url = 'https://api.darksky.net/forecast/eeb6fe9c27dfae9abd6692899bdc1f41/'+lat+','+lang+''

    // request({url:url,json:true},(error,response)=>{
    //     if(error){
    //         callback('Unable to connect with weather app',undefined);
    //     }
    //     else if(response.body.error){
    //         console.log('Unable to find Location',undefined);
    //     }
    //     else{
    //             callback(undefined,{
    //                 temp:response.body.currently.temperature,
    //                 rain:response.body.currently.precipProbability
    //             })
    //     }
    // })


    //shorthand

    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect with weather app',undefined);
        }
        else if(body.error){
            console.log('Unable to find Location',undefined);
        }
        else{
                callback(undefined,{
                    temp:body.currently.temperature,
                    rain:body.currently.precipProbability
                })
        }
    })


}

module.exports = forecast;












// const url = 'https://api.darksky.net/forecast/eeb6fe9c27dfae9abd6692899bdc1f41/37.8267,-122.4233'

// request({url:url, json:true},(error,response)=>{
//     if(error){
//         console.log('Unable to connect to the weather app');
//     }
//     else if(response.body.error){
//         console.log("Unable to find location");
//     }
//     else{
//         const temp = response.body.currently.temperature;
//         const rain = response.body.currently.precipProbability;
//         console.log(response.body.daily.data[0].summary+" It is currently "+temp+" degrees out.There is a "+rain+" % chance of rain");
//     }

    
// })