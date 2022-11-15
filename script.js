const btn = document.getElementById("enter");
btn.addEventListener("click", listener =>{
     document.getElementById("area").style.display = "none";
    const trans_area = document.getElementById("transection-area");
    trans_area.style.display = "block"
});


const dabtn = document.getElementById("btn");
 
dabtn.addEventListener("click", function(){
    const deposit = document.getElementById("da");
    let num1 = parseInt(deposit.value);
  
   updatespantext("cd",num1)
   updatespantext("balance",num1);
   document.getElementById("da").value=""; 
});

 const wibtn = document.getElementById("wbutton");
wibtn.addEventListener("click" , ()=>{
   
    const withdr = document.getElementById("wa");
    const amount = parseInt(withdr.value);
     updatespantext("withdrawb",amount);
     updatespantext("balance",-1*amount);
})
 
//function span tag
function updatespantext(id, num1){
    const tcn = document.getElementById(id).innerText;
    const currentbalance = parseInt(tcn)
    const totalblance= num1 + currentbalance;
    document.getElementById(id).innerText= parseFloat(totalblance);
}





