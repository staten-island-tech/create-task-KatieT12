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
    console.log(sum)
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



