const billAmount=document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-given");
const cashGivenDiv=document.querySelector(".cash-given-div")
const nextButton=document.querySelector("#next-button");
const errorMessage=document.querySelector(".error-message");
const checkButton=document.querySelector("#check-button");
const noOfNotes=document.querySelectorAll(".noOfNotes");
const changeReturn=document.querySelector(".change-return");
const footer=document.querySelector(".footer");

const notes = [2000,500,200,100,50,20,10,5,1];

nextButton.addEventListener("click",()=>{
    hideError();
    if(billAmount.value>0){
        nextButton.style.display="none";
        cashGivenDiv.style.display="block";
    }
    else{
        showError("Enter valid bill amount");
    }
} )

checkButton.addEventListener("click",()=>{
    if (Number(cashGiven.value)>=Number(billAmount.value)){
        changeReturn.style.display="block";
        footer.style.position = "relative";
        const returnAmount= Number(cashGiven.value) - Number(billAmount.value);
        calculation(returnAmount);
    }else{
        showError("Cash given is less than bill amount.Please enter right amount.");
    } 
});

function calculation(returnAmount){
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