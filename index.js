const DOMSelectors = {
    submitbtn: document.getElementById("submit"),
    inputTitle: document.getElementById('inputTitle'),
    form: document.querySelector("form"),
    buttons: document.querySelector(".btns"), 
};

function inserting(){
    let buttons = document.querySelectorAll(".values") 
    let numValues = buttons.textContent  
    buttons.forEach((btn) => btn.addEventListener("click", function(event){
         event.preventDefault();
         
         console.log(numValues)
        //  DOMSelectors.form.insertAdjacentHTML("afterbegin", numValues)
        })); 
    };
    inserting() 