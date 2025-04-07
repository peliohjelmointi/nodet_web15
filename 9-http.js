const http = require('http')
const fs = require('fs')
const path = require('path')

const filename = path.join(__dirname,'html','index.html')

const server = http.createServer( (req,res) => {
    
    if(req.url ==='/') { //jos käyttäjä meni pääsivulle
                        //eli juuri "root"-tasolle
    const data = fs.readFileSync(filename, 'utf-8')
    res.end(data)
    }
    else if(req.url==='/about'){
        res.end('ABOUT PAGE')
    }
    else{ //mikä vain muu osoite "end point" 
        // jonka käyttäjä syötti
        res.end('404 - page not found')
    }
}).listen(3000) //asetetaan serveri kuuntelemaan 
                // porttia 3000

//vaihtoehtoisesti voi kirjoittaa:
//server.listen(3000)


// function handleRequest(req,res){
    //tänne sisältö
// }

// const server2 = http.createServer(handleRequest)