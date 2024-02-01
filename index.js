const DOMSelectors = {
    submitbtn: document.getElementById("submit"),
    inputTitle: document.getElementById('inputTitle'),
    form: document.querySelector("form"),
    x: document.getElementById("inputNums1"),
    y: document.getElementById("inputNums2"),
    add: document.getElementById("add"),
    subtract: document.getElementById("subtract"),
    multiply: document.getElementById("multiply"),
    divide: document.getElementById("divide"),
    exponentation: document.getElementById("exponentation"),
    result: document.querySelector(".result")
};
function clearFields(){
    DOMSelectors.x.value = "";
    DOMSelectors.y.value = "";
}
function clearResultbox(){
    DOMSelectors.result.innerHTML = " ";
}
DOMSelectors.add.addEventListener("click", function(event){
    event.preventDefault();    
    clearResultbox();
    let sum = Number(DOMSelectors.x.value) + Number(DOMSelectors.y.value)
    DOMSelectors.result.insertAdjacentHTML(
        "beforeend",
        `<div class = "card">
        <h2 class="resultnum">${sum}</h2>
    </div>`
    )
    clearFields();
});
DOMSelectors.subtract.addEventListener("click", function(event){
    event.preventDefault();
    clearResultbox();
    let difference = (DOMSelectors.x.value - DOMSelectors.y.value)
    DOMSelectors.result.insertAdjacentHTML(
        "beforeend",
        `<div class = "card">
        <h2 class="resultnum">${difference}</h2>
    </div>`
    )
    clearFields();
});
DOMSelectors.multiply.addEventListener("click", function(event){
    event.preventDefault();
    clearResultbox();
    let product = (DOMSelectors.x.value * DOMSelectors.y.value)
    DOMSelectors.result.insertAdjacentHTML(
        "beforeend",
        `<div class = "card">
        <h2 class="resultnum">${product}</h2>
    </div>`
    )
    clearFields();
});
DOMSelectors.divide.addEventListener("click", function(event){
    event.preventDefault();
    clearResultbox();
    let dividend = (DOMSelectors.x.value / DOMSelectors.y.value)
    DOMSelectors.result.insertAdjacentHTML(
        "beforeend",
        `<div class = "card">
        <h2 class="resultnum">${dividend}</h2>
    </div>`
    )                                                                                           
    clearFields();
});
DOMSelectors.exponentation.addEventListener("click", function(event){
    event.preventDefault();
    clearResultbox();
    let something = (DOMSelectors.x.value ** DOMSelectors.y.value)
    DOMSelectors.result.insertAdjacentHTML(
        "beforeend",
        `<div class = "card">
        <h2 class="resultnum">${something}</h2>
    </div>`
    )
    clearFields();
});



