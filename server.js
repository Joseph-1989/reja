console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const res =  require("express/lib/response");
const http = require("http");
const fs = require('fs');

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {console.log("ERROR:", err);
}  else{
        user=JSON.parse(data);
    }
});

// 1: Kirish code
app.use(express.static("public")); // public folderi için middleware qo'shish
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.listen(3000,()=>{
//     console.log("Server started on port 3000");
// });

// 2: Session

// 3: Views Code
app.set("views", "views");
app.set("view engine","ejs");
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
// 4: Routing code
app.post("/create-item", (req, res) => {
    // console.log(req.body);
    // res.json({test: "success"});
   });

   app.get("/author", (req, res)=>{
    res.render("author", {user:  user});
     });

// app.get("/hello", function(req, res){
//  res.end(`<h1 style="background: red">HELLO WORLD by BekzodAli </h1>`);
// });
// app.get("/gift", function ( req , res ) {
// res.end(`<h1>Siz sovg'alar bo'limidasiz</h1>`);
// });

// app.get("/sovga" ,function ( req , res ) {
// res.end(`<h1>Siz sovg'alar bo'limida emassiz </h1>`);
// });

app.get("/" ,function ( req , res ) {
    res.render("harid");
    });
    
const server =http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`Server is running on port ${PORT}`);
});

// git clean -df deb yozilsa qo`lda kiritgan folderlarni ham udalit qilib yuboradi
// git reset --hard deb yozilsa oxirigi kiritgan o`zgarishimizni ham  qaytaradi