let form=document.getElementById("form");
let input=document.getElementById("todos-inputs");
let errorMessage=document.getElementById("err");
let posts=document.getElementById("todos-container");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    formValidation();
})
let formValidation=()=>{
    if(input.value===""){
        errorMessage.innerHTML="Task cannot be blank";
        return;
    } else if (input.value.trim().length<5) {
        errorMessage.innerHTML="Post requires a minimum of 5 characters";
        return;
    } else{
        errorMessage.innerHTML="";
        SetAndCreateTodo();
    }
};
let data={};
let SetAndCreateTodo=()=>{
    data["text"]=input.value;
    creatPost();
};
let creatPost=()=>{
    posts.innerHTML+=
    <div class="content">
        <p>${data.text}</p>
        <span class="options">
            <i onclick="editPost(this)" class="fass fa-edit edit"></i>
            <i onclick="deletePost(this)" class ="fas fa-trash-alt delete"></i>
        </span>
    </div>
    ;
}
input.value="";
storeTodos();
};
let deletePost=(e)=>{
    e.parentElement.parentElement.remove();
    storeTodos();
};
let editPost=(e)=>{
    input.value=e.parentElement.previousElementsibling.innerHTML;
    e.parentElement.parentElement.remove();
    storeTodos();
};
posts.addEventListener("click",(e) =>{
    if(e.target.tagName==="p"){
        e.target.classlist.toggle("checked");
        storeTodos();
    }
});
function storeTodos(){
    localStorage.setItem("Todo",posts.innerHTML);
}
function getTodos(){
    posts.innerHTML=localStorage.getItem("Todos");
}
getTodos();
