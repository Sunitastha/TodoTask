//add list
const form=document.querySelector("#progamming-language-add");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const formInput=document.querySelector("input[type='text']");
    
    if(formInput.value){
const li=document.createElement("li");
        

const p=document.createElement("p");
p.innerText=formInput.value;
p.className="title";

const ebutton=document.createElement("button");
ebutton.innerText="update";
ebutton.className="edit";

const rbutton=document.createElement("button");
rbutton.innerText="clear";
rbutton.className="remove";





li.append(p,ebutton,rbutton);
const lists=document.querySelector("#progamming-language-list ul");
lists.appendChild(li);
formInput.value="";

}
});
//delete list
const lists=document.querySelector("#progamming-language-list ul");
lists.addEventListener("click",(event)=>{
   
    if(event.target.className=="remove"){
        const li= event.target.parentElement;
        lists.removeChild(li);

    }; 
})