// Kerakli HTML tag lariga ulanish

const form = document.querySelector(".content_form");
const input = document.querySelector(".form_input");
const addBtn = document.querySelector(".form_btn");
const todolist = document.querySelector(".todo_list");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // qayta yuklanishni o'chiradi
  //  Agar input faqat space dan iborat bo'lsa, dastur to'xtashi kerak

  if (!input.value.trim()) {
    return;
  }
  // input.value - inputdagi qiymatni olish
  // classlist - html elementlariga class qo'shish, o'chirish uchun ishlatiladi
  // innerHTML - js o'zgaruvchilari ichiga html code qo'shish
  const list_item = document.createElement("div");
  list_item.classList.add("list_item");
  list_item.innerHTML = `
    <div class="list_info">
        <input class="checkbox" type="checkbox">
        <p class="todo">${input.value}</p>
    </div>
    <button class="remove_btn">
        <img src="./img/trash.svg" width="20" height="20" alt="trash-icon">
    </button>
  `;
  todolist.appendChild(list_item);
  input.value = "";
});
