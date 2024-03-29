console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

const fs = require("fs"); // fs bizga user.json dagi ma`lumotlarni server.js ga bo`g`lash uchun kk. ya`ni server.js fs orqali user.json dagi ma`lumotlarni o`qiydi.

//MONGODB CONNECT

const db = require("./server").db();
const mongodb = require("mongodb");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  // bu yerda database degan folder dagi user.jason degan file ni o`qi degan code yozildi
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1: Kirish code
// Purpose:
// Serves static files (like HTML, CSS, JavaScript, images, etc.) directly from a specified directory within an Express.js application.
// Enables browsers to access these files without additional server-side logic.
// Breakdown:
// app.use(): A method in Express.js to register middleware functions that handle incoming requests.
// express.static(): A built-in middleware function specifically designed for serving static files.
// "public": The path to the directory containing the static files you want to serve (relative to the root directory of your project).
// Mechanism:
// When a request for a static file arrives (e.g., http://localhost:3000/images/logo.png):
// The express.static() middleware intercepts it.
// It checks for the requested file within the specified "public" directory.
// If found, it serves the file directly to the browser.
// If not found, the request continues to other middleware or route handlers.
app.use(express.static("public")); // public folderi için middleware qo'shish
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.listen(3000,()=>{
//     console.log("Server started on port 3000");
// });

// 2: Session

// 3: Views Code
app.set("views", "views");
app.set("view engine", "ejs");
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
// 4: Routing code
app.post("/create-item", (req, res) => {
  console.log("user entered /create-item ");
  // console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    // console.log(data.ops[0]);
    res.json(data.ops[0]);

    // if (err) {
    //   console.log(err);
    //   res.end("Somthing went wrong");
    // } else {
    //   res.end("Item created! ");
    // }
  });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  // console.log(`User deleted item with ID ${id}`);
  // res.end("done");
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    {
      _id: new mongodb.ObjectId(data.id),
    },
    { $set: { reja: data.new_input } },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
  // res.end("Done!");
});

app.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state: "deleted all plans, ya`ni hamma rejalar o`chirildi" });
    });
  }
});

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("Somthing went wrong");
      } else {
        // console.log(data);
        res.render("reja", { items: data });
      }
    });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
  // bu yerda user degani bu oldinroq tepada fs da berilgan user.json ni author degan file bilan ulanyapti.
});

app.get("/hello", function (req, res) {
  res.end(`<h1 style="background: red">HELLO WORLD by BekzodAli </h1>`);
});
app.get("/gift", function (req, res) {
  res.end(`<h1>Siz sovg'alar bo'limidasiz</h1>`);
});

app.get("/sovga", function (req, res) {
  res.end(`<h1>Siz sovg'alar bo'limida emassiz </h1>`);
});

module.exports = app;
// module.exports: This is a special object exposed in every Node.js module by default.
// It determines what other modules can access from your current module.

// git clean -df deb yozilsa qo`lda kiritgan folderlarni ham udalit qilib yuboradi
// git reset --hard deb yozilsa oxirigi kiritgan o`zgarishimizni ham  qaytaradi
// "git add ." codi yozilgach, keyingi code yoziladi. Bu code git repozyotoriyasiga yuklanadi.
// git commit _m "feat: develop author router ejs page"  -m "Author Page created"
// Author Page created
// git push origin author . bu esa author branchni git hub ga push qilish codi
