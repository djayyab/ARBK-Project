// flower Store represents a flower object
class Flower{
    constructor(name,type,referToWhat, price, photo ){
       this.name=name,
       this.type=type,
       this.referToWhat=referToWhat,
       this.price=price,
       this.photo=photo
    }

}

// interface 
class Interface{
  
    
     static displayFlowers(){

        const storeFlowers = 
        [ 
            {
                name:"hello",
                type:"tolebe",
                referToWhat:"referToWhat",
                price:20,
                // photo:photo
            }
            
            
            ,
        
        
            {
                name:"name",
                type:"type",
                referToWhat:"referToWhat",
                price:100,
                // photo:photo
            }
        
        ]
        const flowers = storeFlowers 
        for(var i=0;i<flowers.length;i++){
            for(var key in flowers[i]){
                flower= flowers[i]['key'] 
            }
        }
        
        // flowers.forEach((flower) =>  displayFlowers().addFlowerTolist())
      
    }

     
     static addFlowerTolist(flower){
      const list = document.querySelector("#flower-list")
      const row = document.createElement('tr');
      row.innerHTML =`
      
    <td>${flower.name}</td>
     <td>${flower.type}</td>
     <td>${flower.referToWhat}</td>
     <td>${flower.price}</td>
    
    `;
     //   <td>${flower.photo}</td>

      list.appendChild(row);

    }
    static clear(){
    document.querySelector("#a").value="";
    document.querySelector("#b").value="";
    document.querySelector("#c").value="";
    document.querySelector("#d").value="";
    // document.querySelector("#file").value="";
        
    } 
   }
   
        document.addEventListener('DOMContentLoaded',Interface.displayFlowers)
  
   
    document.querySelector('#flower-id').addEventListener("submit",(event)=>{
        // prevent actual submit
        event.preventDefault();

        const name = document.querySelector("#a").value;
        const type=  document.querySelector("#b").value;
        const referToWhat= document.querySelector("#c").value;
        const price= document.querySelector("#d").value;
        const photo= document.querySelector("#file").value;
          // new Flower
    const flower = new Flower(name,type,referToWhat, price, photo )
    Interface.addFlowerTolist(flower)
    Interface.clear()
    })
  


   