(function(){
   const buttons = document.querySelectorAll('.cntrbtn') 
   let count = 0

   buttons.forEach(function(button) {
    button.addEventListener("click", function(){
        if(button.classList.contains('lower')){
            count--
        }
        else if(button.classList.contains('adder')){
            count++
        }
        const counter1 = document.querySelector('#counter')
        counter1.textContent = count
        if(count < 0){
            counter1.style.color = 'red'
        }
        else if(count > 0){
            counter1.style.color = 'green'
        }
        else {
            counter1.style.color = '#333333'
      
            }
        })
   })
}) ()