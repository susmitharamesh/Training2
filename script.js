let title = document.querySelector("#textValue");
let content = document.querySelector("#textContent");
let submit = document.querySelector("#submit");
let para = document.querySelector("#list");
let click = document.querySelector("#open");
let updateBtn = document.createElement("button");
// let popupbg = document.getElementById("popupbg");
let close=document.querySelector("#closeIcon");

let arr = []
click.addEventListener("click", () => {
    form.style.display = "block";
    para.style.display = "none";

});
submit.addEventListener("click", (e) => {
    if (title.value.trim() === "" && content.value.trim() === '') {
        alert("please enter something");
    }
    else {
        let para1 = document.createElement("h1");
        let text1 = title.value
        para1.innerHTML = text1
        let description = document.createElement("p");
        let text2 = content.value
        // description.innerHTML = text2
        
        para.appendChild(para1);
        para.appendChild(description);
        
        form.style.display = "block";
        para.style.display = "none";
        const storage = { title: text1,
                         titledesc: text2 }
        console.log(storage)
        arr.push(storage)
        
        close.addEventListener("click", () => {
            form.style.display = "none";
            popupbg.style.display = "none";
            para.style.display = "none";
        })
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.className = "delete";
        para.appendChild(deleteBtn)
        deleteBtn.addEventListener("click", () => {
            let confirmed=window.confirm('Are you sure you want to delete?')
            if(confirmed)
            {
                para.removeChild(para1);
                para.removeChild(description);
                para.removeChild(deleteBtn)
                para.removeChild(updateBtn)
                // alert("deleted successfully")
            }
            else{
            //    console.log("cancelled")
                // alert("deleted canceled")
            }
            
            
           
        })
        let updateBtn = document.createElement("button");
        updateBtn.className = "update";
        updateBtn.innerText = "Edit";
        para.appendChild(updateBtn)
        updateBtn.addEventListener("click", () => {
            form.style.display = "block";
            para.style.display = "none";
            title.value=storage.title;
            content.value=storage.titledesc;

            para.removeChild(para1);
            para.removeChild(description);
            para.removeChild(deleteBtn)
            para.removeChild(updateBtn)
        })
        close.addEventListener("click", () => {
            form.style.display = "none";
            popupbg.style.display = "none";
            para.style.display = "block";
        })
        form.style.display = "none";
        para.style.display = "grid";
    }
   title.value=""
   content.value=""
})


