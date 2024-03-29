// const { response } = require("../app");
console.log("FrontendJS ishga tushdi");

function itemTemplate(item) {
  return `<li
    class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
  >
    <span class="item-text">${item.reja} </span>
    <div>
      <button
        data-id="${item._id}"
        class="edit-me btn btn-secondary btn-sm mr-1"
      >
        O'zgartirish
      </button>
      <button
        data-id="${item._id}"
        class="delete-me btn btn-danger btn-sm"
      >
        O'chirish
      </button>
    </div>
  </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault(); // formani yuborilmayotganini tekshirish uchun

  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Qaytatdan harakat qiling");
    });
});

document.addEventListener("click", function (e) {
  // console.log(e.target);
  // delete oper
  if (e.target.classList.contains("delete-me")) {
    if (confirm("ANIQ O`CHIRMOQCHIMISIZ?")) {
      // console.log("TRUE: Xa teb javob berdi.");
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((respose) => {
          console.log(respose.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Iltimos qaytattan harakat qiling!");
        });
    }
    // else {
    //   alert("FALSE: Yo`q deb javob berdi.");
    // }
    // alert("siz delete tugmasini bosdingiz");
  }
  // edit oper
  if (e.target.classList.contains("edit-me")) {
    // alert("siz o`zgartirish tugmasini bosdingiz");
    let userInput = prompt(
      "O`zgartirishingizni kiriting!",
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
    );
    if (userInput) {
      console.log(userInput);
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((response) => {
          console.log(response);
          e.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerHTML = userInput;
        })
        .catch((err) => {});
    }
  }
});
// add item to list
document.getElementById("clean-all").addEventListener("click", function () {
  axios.post("/delete-all", { delete_all: true }).then((respose) => {
    console.log(respose.data);
    alert(respose.data.state);
    document.location.reload();
  });
});
