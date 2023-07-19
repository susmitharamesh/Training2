let title=document.querySelector("#textValue");
let content=document.querySelector("#textContent");
let submit=document.querySelector("#submit");
let para=document.querySelector("#list");
let click=document.querySelector("#open");
click.addEventListener("click",() => {
    form.style.display="block";
    para.style.display="none";
    
});
 submit.addEventListener("click",(e)=>
{
    e.preventDefault(); 
para.innerHTML=title.value;
let button=`<button id="update"></button>
<button id="delete"></button>`;
form.style.display="none";
para.style.display="block";
})
