
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
    const depositNumber=getInputNumber("depositAmount")

    updateSpanTagText('currentDeposit',depositNumber)
    updateSpanTagText('currentBalance',depositNumber)

    document.getElementById('depositAmount').value=""

    })
  
    
    //withdraw button event handler

    const withdrawBtn= document.getElementById('addWithdraw')
    withdrawBtn.addEventListener('click',()=>{
        const withdrawNumber =getInputNumber("withdrawAmount")

     updateSpanTagText('currentwithdraw', withdrawNumber)
     updateSpanTagText('currentBalance', -1 *  withdrawNumber)
     document.getElementById('withdrawAmount').value=""
      
    })


    function getInputNumber(id){
        const Amount=document.getElementById(id).value;
        const withdrawNumber = parseFloat(Amount)

        return withdrawNumber
    }



 function updateSpanTagText(id, depositNumber){
    const current=document.getElementById(id).innerText;
    const currentNumber=parseFloat(current)
    const total= currentNumber+depositNumber
    document.getElementById(id).innerText=total
 }


    
