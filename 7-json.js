const os = require('os')

const obj = 
{
    "user": os.userInfo().username,
    "os_type": os.type()
}

const user =obj.user
console.log(user, obj.os_type)

//TEHTÄVÄ
//Hae user-kentän value os-moduulista