// var name = document.getElementById("a").value;
// var type=  document.getElementById("b").value;
// var Ref= document.getElementById("c").value;
// var price= document.getElementById("d").value;
var flowObj= {};
var flowStore =[];

$('input#button1').click(function addinf(){
   

    flowObj= {};
    flowStore =[];

    if(!name || !type || !Ref|| !price){
    	alert(" you must write something!")
    }else{
         
    var name = document.getElementById("a").value;
    var type=  document.getElementById("b").value;
    var Ref= document.getElementById("c").value;
    var price= document.getElementById("d").value;
    
         flowObj["name"]=name; 
         flowObj["type"]=type;
         flowObj["referToWhat"]=Ref;
         flowObj["price"]=price;
    }

    flowStore.push(flowObj);


    $('input#a').val('');
    $('input#b').val('');
    $('input#c').val('');
    $('input#d').val('');
});

        




$('input#button2').click(function displayinf(){
    if(!name || !type || !Ref|| !price){
    	alert(" you must write something!")
    }else{
        for(var i = 0;i<flowStore.length;i++){
            var task=$('<div></div>')
            for(var key in flowObj){
    
             var  show = flowStore[i][key]+'\n'
               task.text(show)
               $('body').append(task);
               task.css({'text-align':'center','margin-top':'80px',"background-color":"coral"});

            }
            
        }
   
    
     
    
}

});



