let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
   button.addEventListener('click',(e)=>{
       if(e.target.innerHTML == '='){
           string = eval(string);
           document.querySelector('input').value = string;
       }
       else if(e.target.innerHTML == 'X'){
           string = string + '*';
           document.querySelector('input').value = string;
       }
       else if(e.target.innerHTML == 'DEL'){
           string = document.querySelector('input').value.toString().slice(0, -1);
           document.querySelector('input').value = string;
       }
       else if(e.target.innerHTML == 'AC'){
           string = " ";
           document.querySelector('input').value = string;
       }
       else{
        string = string + e.target.innerText; 
        document.querySelector('input').value = string;
       }
     
   })
})