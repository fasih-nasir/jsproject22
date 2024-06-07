// var cont=document.getElementById("container")
// var inp=document.getElementById("inp")
// console.log(inp);
// var create=document.getElementById("create");
// create.addEventListener("click",()=>{
//     var create1=document.createElement("button")
//     var create2=document.createElement("button")
//     var div=document.createElement("div")
//     div.className="box"
//     create1.innerHTML="remove"
//        create2.innerHTML="edit"
//     create1.id="remove"
    
// div.innerHTML=`${inp.value}`
// div.appendChild(create1)
// div.appendChild(create2)
// cont.appendChild(div)
// // console.log(a);
// create1.addEventListener("click",()=>{
// div.remove()
// })
// create2.addEventListener("click",()=>{
// var pr=prompt("enter your name")
// div.innerHTML=`${pr}`
// div.appendChild(create1)
// div.appendChild(create2)
// cont.appendChild(div)
// //   console.log("re")
// })
//     })

// new
    document.getElementById("create").addEventListener("click",()=>{
        var con11t=document.getElementById("cont")
        var cont111=document.getElementById("cont1")
        var div11=document.createElement("div");
        div.className11="box"
div.innerHTML=`<div>
    <input type="text" name="" id="inp">
    <button id="add">add</button>
</div>`
cont11.appendChild(div11)

var inp11=document.getElementById("inp")
document.getElementById("add").addEventListener("click",()=>{


var div255=document.createElement("div");
var li55=document.createElement("li");
var create155=document.createElement("button")
var create255=document.createElement("button")
// var div=document.createElement("div")
// create1.innerHTML="remove"
// create2.innerHTML="edit"
// create1.className="float-end"
// create2.className="float-end"
// li.className="float-start"
//    create1.id="remove"
li55.innerHTML=`${inp.value}`
create155.innerText="remove"
create255.innerText="edit"
create155.className="float-end1"
create255.className="float-end"
li55.className="float-start"
div255.className="float-start"
div255.innerHTML+=`
${li55.innerHTML} <button>Edit</button><BR>
`
// div2.appendChild(li)
// div2.appendChild(create1)
// div2.appendChild(create2)
cont155.appendChild(div2)

create155.addEventListener("click",()=>{
div255.remove()

console.log("asd");
})
create255.addEventListener("click",()=>{
// var pr=prompt("enter your name")
// div.innerHTML=`${pr}`
li55.innerHTML.contentEditable=true
div255.appendChild(li55)
div55.appendChild(create155)
div55.appendChild(create255)
cont55.appendChild(div55)
//   console.log("re")
})
})
    })













    


    var num=1;;
    document.getElementById("create").addEventListener("click",()=>{
var show=document.getElementById("show")
var inp=document.getElementById("inp");
var inp1=document.getElementById("inp1");

          var div=document.createElement("div");
          div.className="container column"
div.innerHTML=`         <div id="cont" class="container-fluid">
          <div class="float-start">
         <h4> <span>${num++}. </span> ${inp.value} </h4>
      </div>
      <div class=" float-end">
          <button class="ed">edit</button>
          <button class="re">remove</button>
      </div>
      </div>`
  show.appendChild(div)
div.querySelector(".re").addEventListener("click",()=>{
  show.appendChild(div)
  div.remove()
console.log(num)
  })
  div.querySelector(".ed").addEventListener("click",()=>{
var pr=prompt("Edit A Name")
div.className="container column"
div.innerHTML=`         <div id="cont" class="container-fluid">
          <div class="float-start">
         <h4> <span>${num++}. </span> ${pr} </h4>
      </div>
      <div class=" float-end">
          <button class="ed">edit</button>
          <button class="re">remove</button>
      </div>
      </div>`
      div.querySelector(".re").addEventListener("click",()=>{
  show.appendChild(div)
  div.remove()
console.log(num)
  })
  })

  }) 