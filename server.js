console.log('Web Serverni boshlash');
const express = require('express');
const app = express();
// 1: Kirish code
app.use(express.static('public')); // public folderi için middleware qo'shish
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// 2: Session

// 3: Views Code
app.set("views", "views");
app.set("view engine","ejs");

// 4: Routing code
app.get("/hello", function(req, res){
 res.end(`<h1 style="background: red">HELLO WORLD by BekzodAli </h1>`);
});
app.get("/gift" , function ( req , res ) {
res.end(`<h1>Siz sovg'alar bo'limidasiz</h1>`);
});
app.get(     "/sovga" ,function ( req , res ) {
res.render(`<h1>Siz sovg'alar bo'limida emassiz </h1>`);
});

const server =http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`Server is running on port ${PORT}`);
});

// git clean -df deb yozilsa qo`lda kiritgan folderlarni ham udalit qilib yuboradi
// git reset --hard deb yozilsa oxirigi kiritgan o`zgarishimizni ham  qaytaradi