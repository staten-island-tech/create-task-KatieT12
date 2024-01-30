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
    resultbox: document.querySelector(".result")
};
 
function clearFields(){
    DOMSelectors.x.value = "";
    DOMSelectors.y.value = "";
}

//add
DOMSelectors.add.addEventListener("click", function(event){
    event.preventDefault();
    // console.log(DOMSelectors.x.value + DOMSelectors.y.value)
    let sum = (DOMSelectors.x.value + DOMSelectors.y.value)
    // console.log(sum)
    DOMSelectors.resultbox.insertAdjacentElement(
        "beforeend",
        `<h2 class ="result">${sum}</h2>`
    )
    clearFields();
});
//subtract
DOMSelectors.subtract.addEventListener("click", function(event){
    event.preventDefault();
    console.log(DOMSelectors.x.value - DOMSelectors.y.value)
    clearFields();
});
//multiply
DOMSelectors.multiply.addEventListener("click", function(event){
    event.preventDefault();
    console.log(DOMSelectors.x.value * DOMSelectors.y.value)
    clearFields();
});
//divide
DOMSelectors.divide.addEventListener("click", function(event){
    event.preventDefault();
    console.log(DOMSelectors.x.value / DOMSelectors.y.value)
    clearFields();
});
//exponent
DOMSelectors.exponentation.addEventListener("click", function(event){
    event.preventDefault();
    console.log(DOMSelectors.x.value ** DOMSelectors.y.value)
    clearFields();
});



