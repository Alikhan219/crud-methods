let btn= document.querySelector('.add-btn');
let ul_list= document.querySelector("#ul_list");
let lists =document.querySelector(".lists")      
let input= document.querySelector('.input');
btn.addEventListener('click', function(e){
    if(ul_list.children[0].className == "empty"){
     ul_list.children[0].remove();
    }
      let choose= e.currentTarget;
     
      let inp= choose.previousElementSibling.value;
      
     
      let list= document.createElement("li");
      list.innerHTML= ` 
                          <h3>${inp}</h3>
                          <button class="green">Edit</button>
                         <button onclick="closetheparen(this)">X</button>
                              `;
      list.classList.add("lists")
      
      ul_list.appendChild(list);

})




function closetheparen(cuurentbtn){
     cuurentbtn.parentElement.remove();
     if(ul_list.children.length <= 0){
          let note= document.createElement("h2");
          note.classList.add("empty")
          note.textContent= "There Is Nothing To See Please Insert A Value"
          ul_list.appendChild(note)
     }
}