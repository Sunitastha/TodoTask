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
//update list

lists.forEach(element => {
    element.addEventListener("click",(event)=>{
    if(event.target.className=="edit"){
        const li= event.target.parentElement;
        const p = li.querySelector("p");
        const input = document.createElement("input");
        input.type="text";
        input.value=p.innerText;
        li.insertBefore(input,p);
        li.removeChild(p);
        event.target.innerText="save";
        event.target.className="save";
}
else if(event.target.className === "save"){
            const li = event.target.parentElement;
            const input = li.querySelector("input[type='text']");
            const p = document.createElement("p");
            p.innerText=input.value;
            p.className="title";
            li.insertBefore(p,input);
            li.removeChild(input);
            event.target.innerText="update";
            event.target.className="edit";
}
})
})
