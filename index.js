let serial=0;
let OverallTotal=0;

//first card
document.getElementById('first-card').addEventListener('click',function(){
    // serial+=1;
    // get the data from html using id
     const productName=document.getElementById('first-name').innerText;
     const productPrice=document.getElementById('first-price').innerText;
     const productQuantity=document.getElementById('first-quantity').innerText;
     console.log(productName,productPrice,productQuantity);

     const priceTotal=parseInt(productPrice) * parseInt(productQuantity);
     OverallTotal=OverallTotal+priceTotal;

    //  show the data

    displayData(productName,productPrice,productQuantity,priceTotal,OverallTotal);
            
            
     
    

});

// dsiplay function
function displayData(productName,productPrice,productQuantity,priceTotal,OverallTotal){
    serial+=1;
    const container=document.getElementById('table-container');
    const tr=document.createElement('tr');
    tr.innerHTML=`
           <td>${serial}</td>
           <td>${productName}</td>
           <td>${productPrice}</td>
           <td>${productQuantity}</td>
           <td>${priceTotal}</td>
           <td>${OverallTotal}</td>

           
     `;
     container.appendChild(tr);
}
// second card
//using event object from browser 
document.getElementById('second-card').addEventListener('click',function(e){
    // serial+=1;
      const productName=e.target.parentNode.parentNode.children[0].innerText;
      const productPrice=e.target.parentNode.parentNode.children[2].children[0].innerText;
      const productQuantity=e.target.parentNode.parentNode.children[3].children[0].innerText;

      const sumTotal=parseInt(productPrice)*parseInt(productQuantity);
      OverallTotal=OverallTotal+sumTotal;

      displayData(productName,productPrice,productQuantity,sumTotal,OverallTotal);
      
      

})

//third card
document.getElementById('third-card').addEventListener('click',function(){
    // serial+=1;
    // get the data from html using id
     const productName=document.getElementById('third-name').innerText;
     const productPrice=document.getElementById('third-price').innerText;
     const productQuantity=document.getElementById('third-quantity').innerText;
     console.log(productName,productPrice,productQuantity);

     const priceTotal=parseInt(productPrice) * parseInt(productQuantity);
     OverallTotal=OverallTotal+priceTotal;

    //  show the data

    displayData(productName,productPrice,productQuantity,priceTotal,OverallTotal);
            
});

// Fourth card
document.getElementById('fourth-card').addEventListener('click',function(){
    // serial+=1;
    // get the data from html using id
     const productName=document.getElementById('fourth-name').innerText;
     const productPrice=document.getElementById('fourth-price').innerText;
     const productQuantity=document.getElementById('fourth-quantity').innerText;
     console.log(productName,productPrice,productQuantity);

     const priceTotal=parseInt(productPrice) * parseInt(productQuantity);
     OverallTotal=OverallTotal+priceTotal;

    //  show the data

    displayData(productName,productPrice,productQuantity,priceTotal,OverallTotal);
            
});

// last card
document.getElementById('last-card').addEventListener('click',function(){
    const productName=document.getElementById('last-name').innerText;
    
    const productPrice=document.getElementById('last-price').value;
    const productQuantity=document.getElementById('last-quantity').value;
    const priceTotal=parseInt(productPrice) * parseInt(productQuantity);
    if(OverallTotal!=='NaN'){
        OverallTotal=OverallTotal+priceTotal;

    }
    else{
        

    }
   
    
    displayData(productName,productPrice,productQuantity,priceTotal,OverallTotal);
    this.setAttribute('disabled',true);

    
})