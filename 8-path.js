const path = require('path')

            //__filename on tämä tiedosto
const baseName = path.basename(__filename)
console.log("BASE NAME ", baseName)

const dirName = path.dirname(__filename)
console.log("DIR NAME ",dirName)

console.log("__fileName", __filename)
console.log("__dirName", __dirname)

const htmlPath = path.join(__dirname,'../folderX/', 'index.html')
console.log(htmlPath)
