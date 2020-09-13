let count = 0;
let newElement = document.createElement('div');

count = window.prompt("Select total number of elements for the form: ");
console.log(count)



const addElement = () => {
    let newElement = document.createElement('div');
    if(count === null){
        location.reload();
    }
    if(count == 0){
        let option = window.confirm("Maximum elements limit reached. Would you like to add more elements?");
        if(option){
            count = window.prompt("Select number of additional elements to be added to the form...")
        }
        else{
            return
        }
    }
    else{
        let a = document.getElementById('ElementOptions');
        
        if(a.value === 'Textbox'){
            newElement.innerHTML = "<label>Text Box </label>: <br><textarea rows = '5' cols = '50'>"
            newElement.classList.add('TBDisplay');
        }
        else if(a.value === 'Checkbox'){
            newElement.innerHTML = "<label>Check Box </label>: <input type = 'checkbox'>";
            newElement.classList.add('display');
        }
        else if(a.value === 'Input'){
            newElement.innerHTML = "<label>Input Box </label>: <input type = 'text'>";
            newElement.classList.add('display');

        }
        else if (a.value === 'Button'){
            newElement.innerHTML = "<button>Submit</button>"
            newElement.className = 'text-center DynamicButton'
        }
        else if(a.value === 'Radio'){
            newElement.innerHTML = "<label> Radio Button:</label> <input type = 'radio' name='radioBtn'>";
            newElement.classList.add('display')
        }
        count--;



    }
   
    document.querySelector('.form-section').appendChild(newElement);

}

const DeleteLast = () =>{

   let formSelect = document.querySelector('.form-section');
   console.log(formSelect.children)
   formSelect.removeChild(formSelect.lastElementChild)
   count++;
}
