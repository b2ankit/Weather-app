const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast') 

const address = process.argv[2];
if(!address){
    console.log("Please provide an address");
}
else{

    //normal type coding

    // geocode(address,(error,data)=>{
    //     if(error){
    //         return console.log(error)
    //     }
    //     else{
    
    //     }
    
    // forecast(data.lat,data.lang,(error,fdata)=>{
    
    //     if(error){
    //         return console.log(error);
    //     }
    //     console.log(data.location);
    //     console.log(fdata);
    
        
    // })
    // })

    //destructring and shorthand property

      geocode(address,(error,{lat, lang, location})=>{
        if(error){
            return console.log(error)
        }
        
    
    forecast(lat,lang,(error,fdata)=>{
    
        if(error){
            return console.log(error);
        }
        console.log(location);
        console.log(fdata);
    
        
    })
    })

    
    
}




