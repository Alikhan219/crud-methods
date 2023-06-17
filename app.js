let btn= document.querySelector('.add-btn');
        
let input= document.querySelector('.input');
btn.addEventListener('click', function(e){
  
      let choose= e.currentTarget;
     
      let inp= choose.previousElementSibling.value;
      
     
      let list= document.createElement("li");
      let h3= document.createElement("h3")
      h3.textContent= inp;
      list.appendChild(h3);
      
      list.classList.add("lists")
      let close= document.createElement("button")
      close.textContent= "X"
      list.appendChild(close)
      let ul_list= document.querySelector("#ul_list");
      ul_list.appendChild(list)

      close.addEventListener("click", function(){
             list.remove();
      })
})