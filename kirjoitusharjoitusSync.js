const fs = require('fs')

function WriteToFileSynchronized(file,text){
    fs.writeFileSync(file,text,'utf-8')
    console.log("tiedosto kirjoitettiin")
}

WriteToFileSynchronized('sumpille.txt','sumpille!')