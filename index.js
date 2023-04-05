const submitBtn  = document.querySelector('.form-section button')

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    const regex = /^\w*@\w+.com/gi
    const inputVal = document.querySelector('form input')
    // const p = document.querySelector('.form-section .invalid-email')
    if( !regex.test(inputVal.value)){
        document.querySelector('.form-section .invalid-email').style.display = 'block'
    }
    else{
        document.querySelector('.form-section .invalid-email').style.display = 'none'
    }
})