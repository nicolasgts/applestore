const AppleStore = require('./appleStore')


//essa linha ela cria a apiRest para todos esses metodos ,
//ligando eles diretamente ao mongoose , entao ele vai poupar
// de nos estarmos chamando o banco e tentando pegar os dados de la
// so que agora precisamos dizer em que url vamos fazer isso e
//para isso vamos criar um arquivo chamado routes.js
AppleStore.methods(['get', 'post', 'put', 'delete'])

// this line is just for when update a item do not come
// no primeiro momento o antigo objeto e sim o primeiro


module.exports = AppleStore
