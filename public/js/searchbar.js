const search = () =>{

    const searchbox = document.getElementById("search_items").value.toUpperCase();
    const storeitems = document.getElementById("product_list");
    const product = document.querySelectorAll(".mainProduct")
    const pname = storeitems.getElementsByTagName("h3")
  
  
    for(var i=0; i<pname.length; i++){
      
      let match = product[i].getElementsByTagName('h3')[0];
  
      if(match){
       let textvalue = match.textContent  || match.innerHTML;
  
        if(textvalue.toUpperCase().indexOf(searchbox) > -1){
          product[1].style.display = "";
        } else{
          product[i].style.display = "none";
  
        }
      }
  
  
  
    }
  }