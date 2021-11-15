var forms=document.getElementById("form");
var filt=document.querySelector("#filter");
var ul=document.querySelector(".user");

forms.addEventListener("submit",add);
addEventListener("click",rev)

function add(e){
    e.preventDefault();
    var ul=document.getElementById("user1");
    var inpu=document.getElementById("item").value;

    var did=document.createElement("li");
    did.className= "list";
    did.appendChild(document.createTextNode(`${inpu}`));
    ul.appendChild(did)

    var bu=document.createElement("button");
    bu.appendChild(document.createTextNode('x'));
    bu.className="clr";
    did.appendChild(bu);
}

function rev(e) {

 if(e.target.classList.contains("clr")){
  if(confirm("are you sure")){ul.removeChild( e.target.parentElement);
  }
}
}

filt.addEventListener("keyup",function(){
    let lis=filt.value.toLowerCase()
    var main=ul.getElementsByTagName("li")

    Array.from(main).forEach(function(fings){
     var fingsname=fings.firstChild.textContent
      if(fingsname.toLowerCase().indexOf(lis)!=-1){
          fings.style.display="block"
      }else{
          fings.style.display="none"
      } 
    })
})