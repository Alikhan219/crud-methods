let btn= document.querySelector('.add-btn');
        
let input= document.querySelector('.input');
btn.addEventListener('click', function(e){
  
      let choose= e.currentTarget;
     
      let inp= choose.previousElementSibling.value;
      
     
      let list= document.createElement("li");
      list.innerHTML= ` 
                          <h3>${inp}</h3>
                         <button onclick="closetheparen(this)">X</button>
                              `;
      list.classList.add("lists")
      let ul_list= document.querySelector("#ul_list");
      ul_list.appendChild(list);

})

function closetheparen(cuurentbtn){
     cuurentbtn.parentElement.remove();
}