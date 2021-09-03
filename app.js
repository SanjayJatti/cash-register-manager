const billAmount=document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-given");
const nextButton=document.querySelector("#next-button");
const errorMessage=document.querySelector(".error-message");
const checkButton=document.querySelector("#check-button");
let noOfNotes=document.querySelector(".noOfNotes");
const changeReturn=document.querySelector(".change-return");

const notes = [2000,500,200,100,50,20,10,5,1];

nextButton.addEventListener('click',()=>{
    hideError();
    if(billAmount.value>0){
        nextButton.style.display="none";
        cashGiven.style.display="block";
    }
    else{
        showError("Enter valid bill amount");
    }
} )

checkButton.addEventListener('click',()=>{
if (cashGiven.value>=billAmount.value){
    const returnAmount= cashGiven.value - billAmount.value;
    calculation(returnAmount);
}else{
    showError("Cash given is less than bill amount.Please enter right amount.");

} 
})

function calulation(returnAmount){
for(let i=0; i<notes.length; i++){
    const numberOfNotes= Math.trunc(returnAmount/notes[i]);
    returnAmount %= notes[i];
     noOfNotes[i].innerText=numberOfNotes;
    
}
}
function hideError(){
    errorMessage.style.display="none";
}
function showError(msg){
    errorMessage.style.display="block";
    errorMessage.innerText=msg;
    changeReturn.style.display="none"; 

}