const DOMSelectors = {
    submitbtn: document.getElementById("submit"),
    inputTitle: document.getElementById('inputTitle'),
    form: document.querySelector("form"),
};

function inserting(){
    let buttons = document.querySelectorAll(".values") 
    buttons.forEach((btn) => btn.addEventListener("click", function(event){
         event.preventDefault();
         let numValues = buttons.textContent
         console.log(numValues)
        //  DOMSelectors.form.insertAdjacentHTML("afterbegin", numValues)
        })); 
    };
    inserting() 