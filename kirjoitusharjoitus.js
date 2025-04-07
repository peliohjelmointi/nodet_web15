const fs = require('fs').promises

async function WriteToFile(file,text){
    try{
        await fs.writeFile(file,text,'utf-8')
        console.log("tiedosto kirjoitettu")
    }
    catch(err){
        console.log(err)
    }
}
WriteToFile('kahville.txt', 'KAHVILLE KOHTA!')