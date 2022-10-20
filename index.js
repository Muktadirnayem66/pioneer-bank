
//  login button event handler
let loginBtn = document.getElementById('login')
loginBtn.addEventListener('click',()=>{
    let loginArea = document.getElementById('login-area')
    loginArea.style.display='none'
    const transArea=document.getElementById('transaction-area')
    transArea.style.display='block'
})

// Deposit button event handler

const addDeposit=document.getElementById('addDeposit')
    addDeposit.addEventListener('click',()=>{
    let depositAmount=document.getElementById('depositAmount').value
    const depositNumber=parseFloat(depositAmount)

    // const currentDeposit=document.getElementById('currentDeposit').innerText;
    // const currentDepositNumber=parseFloat(currentDeposit)
    // const totalDeposit= currentDepositNumber + depositNumber;    
    // document.getElementById('currentDeposit').innerText=totalDeposit;

    updateSpanTagText('currentDeposit',depositNumber)
    updateSpanTagText('currentBalance',depositNumber)

 function updateSpanTagText(id, depositNumber){
    const current=document.getElementById(id).innerText;
    const currentNumber=parseFloat(current)
    const total= currentNumber+depositNumber
    document.getElementById(id).innerText=total
 }


    document.getElementById('depositAmount').value=""
})