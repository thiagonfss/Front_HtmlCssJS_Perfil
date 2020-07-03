const express = require ('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data')

server.use(express.static('public'))

// template engine was created
server.set('view engine', 'njk')
nunjucks.configure('views',{
    express:server,
    autoescape:false, //esse comando permite imprimir html dentro de variável
    noCache:true
})

server.get('/', function(req,res){
    const about = {
        avatar_url:'https://xesque.rocketseat.dev/users/avatar/profile-924b9d95-1f8a-45fa-90bc-15b1eb166a4f.jpg',
        name:'Thiago Felipe dos Santos',
        role:'Financial Analyst',
        description:'Graduated in Business Administration and currently a programming student at <a href="https://www.Rocketseat.com.br" target="_blank"> Rocketseat </a>.',
        links:[
            {name: 'facebook', url: "https://www.facebook.com/thiagonfss"},
            {name: 'linkedin', url: "https://www.linkedin.com/in/thiagonfss"},
            {name: 'github', url: "https://www.github.com/thiagonfss"},
        ]
    }



    return res.render('about',{ about })
})

server.get('/portfolio', function(req,res){
    return res.render('portfolio', { items: videos})

})

server.get('/video', function(req,res){
    // query string
    const id = req.query.id
    const video = videos.find(function(video){
        return video.id == id
    })

    if(!video){
        return res.send('Video not found')
    }
    return res.render('video',{item:video})

})

server.listen(5000, function(){
    console.log('server is running')
})