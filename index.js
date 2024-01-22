const DOMSelectors = {
    submitbtn: document.getElementById("submit"),
    inputTitle: document.getElementById('inputTitle'),
    form: document.querySelector("form"),
};

// function inserting(){
//     let buttons = document.querySelectorAll(".values") 
//     buttons.forEach((btn) => btn.addEventListener("click", function(event){
//          event.preventDefault();
//          let numValues = buttons.textContent
//          console.log(numValues)
//         //  DOMSelectors.form.insertAdjacentHTML("afterbegin", numValues)
//         })); 
//     };
//     inserting() 
function clearFields(){
    inputNums1.value = "";
    inputNums2.value = "";
}

let x = document.getElementById("inputNums1.value")
let y = document.getElementById("inputNums2.value")
DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    clearFields();
    console.log(x, y)
});
