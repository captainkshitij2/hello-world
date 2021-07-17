const calculation = () =>{
    let amt = document.getElementById('amount').value;
    let percentage = document.getElementById('service').value;
    let person = document.getElementById('sharing').value;



    let tip = amt * percentage /person ;
    tip = Math.round(tip*100)/100;
    document.getElementById('tip_out' ).innerHTML=tip;
    

}