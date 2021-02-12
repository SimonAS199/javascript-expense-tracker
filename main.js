const amountInput = document.getElementById("amount");
const dateInput = document.getElementById("date");
const expanseDescription = document.getElementById("description");
const addBtn = document.getElementById("addButton");
const expanseTable = document.getElementById("expanseTable");
const sumBox = document.getElementById("sum");
var sum = 0;

function scaleBtnDown() {
    addBtn.classList.add("scaleButton");
}

function scaleBtnUp() {
    addBtn.classList.remove("scaleButton");
}

addBtn.addEventListener("click", function () {

    while (expanseDescription.value != "" && dateInput.value != "" && amountInput.value != "") {

        //create new <tr>
        const newRow = document.createElement("TR");

        //create new <td> and fill with date
        const newDate = document.createElement("TD");
        newDate.appendChild(document.createTextNode(dateInput.value));
        dateInput.value = "";

        //create new <td> and fill with description
        const newDesc = document.createElement("TD");
        newDesc.appendChild(document.createTextNode(expanseDescription.value));
        expanseDescription.value = "";

        //create new <td> and fill with amount
        const newAmount = document.createElement("TD");
        newAmount.appendChild(document.createTextNode(amountInput.value + "€"));
        sum += amountInput.value;
        amountInput.value = "";

        //create new <td>, fill with "delete" and make clickable
        const newDelete = document.createElement("TD");
        newDelete.appendChild(document.createTextNode("Delete"));
        newDelete.classList.add("clickable");
        newDelete.addEventListener("click", function () {

            this.parentElement.remove();

        });


        //fill "newRow" with elements
        newRow.appendChild(newDate);
        newRow.appendChild(newDesc);
        newRow.appendChild(newAmount);
        newRow.appendChild(newDelete);

        expanseTable.appendChild(newRow);


    }

});