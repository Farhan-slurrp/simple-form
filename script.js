const inputName = document.querySelector("#name");

let newName;

inputName.onchange = (e) => {
  newName = e.target.value;
  inputName.value = newName;
};

const submitBtn = document.querySelector(".submit");

submitBtn.onclick = (e) => {
  e.preventDefault();

  if (inputName.value === "") {
    document.querySelector(
      ".blank"
    ).innerHTML = `<h4>Form cannot be blank</h4>`;
  } else {
    document.querySelector(".blank").innerHTML = "";
    let list = document.createElement("li");
    list.classList.add("list-group-item");

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn");
    deleteBtn.classList.add("btn-danger");
    deleteBtn.textContent = "x";

    list.innerHTML = inputName.value;
    list.appendChild(deleteBtn);

    deleteBtn.onclick = () => {
      document.querySelector(".blank").innerHTML = "";
      deleteBtn.parentNode.parentNode.removeChild(deleteBtn.parentNode);
    };

    document.querySelector("ul").appendChild(list);
    inputName.value = "";
  }
};
