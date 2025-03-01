let title = document.getElementById("title");
let author = document.getElementById("author");
let isbn = document.getElementById("isbn");
let btn = document.getElementById("submit");
let tbody = document.getElementById("book-list");
btn.addEventListener("click", () => {
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  var td4 = document.createElement("td");
  var removeBtn = document.createElement("button");
  td4.append(removeBtn);
  removeBtn.classList.add("delete");
  removeBtn.textContent = "Delete";
  td1.textContent = title.value;
  td2.textContent = author.value;
  td3.textContent = isbn.value;
  removeBtn.addEventListener("click", () => {
    tbody.removeChild(tr);
  });

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tbody.appendChild(tr);

  title.value = "";
  author.value = "";
  isbn.value = "";
});
