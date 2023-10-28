const itemArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

document.querySelector(".add-todo").addEventListener("click", () => {
  const item = document.querySelector(".input-list");
  createItem(item);
});

function displayItem() {
  let items = "";
  for (let i = 0; i < itemArray.length; i++) {
    items += `<div class="input-controller">
    <span class = "emoji">🫣</span>
            <textarea disabled class="text">${itemArray[i]}</textarea>
       
        <div class="edit-controller">
            <i class="fa-sharp fa-solid fa-trash delete"></i>
            <i class="fa-solid fa-square-check done" id="toggleDone"></i>
        </div>
    </div>`;
  }

  document.querySelector(".lists").innerHTML = items;

  deleteBtn();
  doneBtn();
}

function doneBtn() {
  let dBtn = document.querySelectorAll("#toggleDone");
  // let textList = document.querySelectorAll(".text")
  dBtn.forEach((doneBtn, i) => {
    doneBtn.addEventListener("click", (e) => {
      let text = e.target.parentNode.previousElementSibling;
      let emoji =
        e.target.parentNode.previousElementSibling.previousElementSibling;
      console.log(text);
      console.log(emoji);

      if (text.style.textDecoration === "line-through") {
        text.style.textDecoration = "none";
        emoji.innerHTML = "🫣";
      } else {
        text.style.textDecoration = "line-through";
        emoji.innerHTML = "🥳";
      }
    });
  });
}

function deleteBtn() {
  let dBtn = document.querySelectorAll(".delete");
  dBtn.forEach((db, i) => {
    db.addEventListener("click", () => {
      deleteItem(i);
    });
  });
}

function deleteItem(i) {
  itemArray.splice(i, 1);
  localStorage.setItem("items", JSON.stringify(itemArray));
  location.reload();
}

function createItem(item) {
  if (item.value === "") {
    alert("Enter your todo");
  } else {
    itemArray.push(item.value);
    localStorage.setItem("items", JSON.stringify(itemArray));
    location.reload();
  }
}

window.onload = function () {
  displayItem();
};

//   const checkbox = document.querySelector("#check");
//   const text = document.querySelector(".text");
//   console.log(checkbox, text);

//   checkbox.addEventListener("change", () => {
//     if (checkbox.checked) {
//       // Apply the line-through style to the text element
//       text.classList.add("line-through");
//     } else {
//       // Remove the line-through style if the checkbox is unchecked
//       text.classList.remove("line-through");
//     }
//   });
