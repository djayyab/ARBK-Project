

//  var storeFlowers = 
// [ 
//     {
//         name:"hello",
//         type:"tolebe",
//         referToWhat:"referToWhat",
//         price:20,
//         // photo:photo
//     }
    
//     ,

//     {
//         name:"name",
//         type:"type",
//         referToWhat:"referToWhat",
//         price:100,
//         // photo:photo
//     }
// ]

// var display = document.getElementById("button1")
// display.addEventListener("click",displayDetails);
// var row = 1;
// function displayDetails(){
// var name = document.querySelector("#a").value;
// var type=  document.querySelector("#b").value;
// var referToWhat= document.querySelector("#c").value;
// var price= document.querySelector("#d").value;

// if(!name || !type || !referToWhat || !price){
// alert("please fill all the boxes");
// return;
// }
// var display = document.getElementById("display");
// var newRow = display.insertRow(row);
// var cell1 = newRow.insertCell(0);
// var cell2 = newRow.insertCell(1);
// var cell3 = newRow.insertCell(2);
// var cell4 = newRow.insertCell(3);


// cell1.innerHTML = name;
// cell2.innerHTML = type;
// cell2.innerHTML = referToWhat;
// cell2.innerHTML = price;

// row++ ; 

// }

 
// var name = document.querySelector("#a").value;
// var type=  document.querySelector("#b").value;
// var referToWhat= document.querySelector("#c").value;
// var price= document.querySelector("#d").value;



// function flower(name,type,referToWhat, price){
//    return{
//     name:name,
//     type:type,
//     referToWhat:referToWhat,
//     price:price,
//    }
   
//     // this.photo=photo
//  }
 
 
//  var flowerObject = flower(name,type,referToWhat, price )


//  function displayFlower(flowerObject){
//      return flower.name +" "+flower.type +" "+flower.eferToWhat+" "+flower.price
//  }
 

//  function addFlowers(storeFlowers,flowerObject){

//     storeFlowers.push(flowerObject)
    
//     }
  
//    function  displayStoreFlowers(){
//        var display = ""
//        for(var i = 0 ; i<storeFlowers.length;i++){
//           display = display+ displayFlower(storeFlowers[i])+"\n"
//        }
//        return display
//    }

var flowObj= {};
var flowStore =[];
var submit = document.getElementById("button1")
display.addEventListener("click",displayDetails);
var row = 1;
function displayDetails(){
var name = document.querySelector("#a").value;
var type=  document.querySelector("#b").value;
var referToWhat= document.querySelector("#c").value;
var price= document.querySelector("#d").value;

if(!name || !type || !referToWhat || !price){
alert("please fill all the boxes");

}else{
    flowObj["name"]=name; 
    flowObj["type"]=type;
    flowObj["referToWhat"]=referToWhat;
    flowObj["price"]=price;

}

flowStore.push(flowObj);
}
 var counter =0;
 display = document.getElementById('button2')
  table =  document.getElementById('table')
  display.onclick(function(){
  table.show();
  
      
    if (counter>0){
        table[0].innerText="";
  }

  
var tr = $("<tr></tr>");
$("tbody").append(tr);
for (var i = 0; i<flowStore.length; i++) {
    var tr = $("<tr></tr>");

    var td = $("<td id=a"+i+"></td><td id=b"+i+"></td><td id=c"+i+"></td><td id=d"+i+"></td>");
    tr.append(td);
    $("tbody").append(tr);


   var nam=flowStore[i].name;
   var typ=flowStore[i].type;
   var refer=flowStore[i].referToWhat;
   var pri=flowStore[i].price;
  

}

nms="total: "+flowStore.length;
var trs = $("<tr></tr>");
var tds = $("<td >"+nam+"</td> <td>"+typ+"</td> <td>"+refer+"</td> <td>"+pri+"</td> ");
trs.append(tds);
$("tbody").append(trs);
//console.log(tbl)
counter++;
});

edit = $("button#button3")
edit.click(function(){
    var name = document.querySelector("#a").value;
    var type=  document.querySelector("#b").value;
    var referToWhat= document.querySelector("#c").value;
    var price= document.querySelector("#d").value;
    $("#a"+i)[0].textContent= name ;
    $("#b"+i)[0].textContent= type;
    $("#c"+i)[0].textContent=referToWhat;
    $("#d"+i)[0].textContent=price;
});

clear = $("button#button4")
clear.click(function(){
	flowStore=[];
	table.hide();

});

