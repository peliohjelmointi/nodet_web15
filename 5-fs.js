const fs = require('fs') //sisäänrakennettu moduuli
                     //fs = file system

fs.readFile('olioharjoitus.txt','utf-8',function(err,data) { //*
    //jos tiedosto löytyy ja luku onnistuu
    // luodaan data-niminen muuttuja
    // jos ei, luodaan err-niminen muuttuja
    if(err)     
        console.log(err)    
    else
        console.log(data)    
})

// voidaan kirjoittaa myös "nuoli-funktiolla":
//fs.readFile('olioharjoitus.txt','utf-8',(err,data)=>{