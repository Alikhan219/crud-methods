let btn= document.querySelector('.add-btn');
let ul_list= document.querySelector("#ul_list");
let lists =document.querySelector(".lists")      
let input= document.querySelector('.input');
btn.addEventListener('click', function(e){
     if(ul_list.children.length > 0){
          note.remove();
       }
      let choose= e.currentTarget;
     
      let inp= choose.previousElementSibling.value;
      
     
      let list= document.createElement("li");
      list.innerHTML= ` 
                          <h3>${inp}</h3>
                          <button class="green" onclick="editChapter(this)">Edit</button>
                         <button onclick="closetheparen(this)">X</button>
                              `;
      list.classList.add("lists")
      
      ul_list.appendChild(list);

})


function editChapter(currentElement){

     if(currentElement.textContent == "Done"){
          currentElement.textContent= "Edit"
          let currentValue= currentElement.previousElementSibling.value;
          let newHead= document.createElement("h3");
          newHead.textContent= currentValue;
          currentElement.parentElement.replaceChild(newHead, currentElement.previousElementSibling)

     }else{
          currentElement.textContent= "Done"
          let currentChapter= currentElement.previousElementSibling.textContent;
          let newInput= document.createElement("input")
          newInput.type= "text"
          newInput.className = "input"
          newInput.placeholder="Add Something..."
          newInput.value= currentChapter
          currentElement.parentElement.replaceChild(newInput, currentElement.previousElementSibling)
     }
 
}

let note= document.createElement("h4");
          note.classList.add("empty")
          note.textContent= "There Is Nothing To See Please Add Something!"
          note.classList.add("empty")
function closetheparen(cuurentbtn){
     cuurentbtn.parentElement.remove();
     if(ul_list.children.length <= 0){
          ul_list.appendChild(note)
     }
}