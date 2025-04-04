const os = require('os') //operating system (built-in module)

console.log(os.userInfo() )

const user = os.userInfo()
console.log(user.homedir)
