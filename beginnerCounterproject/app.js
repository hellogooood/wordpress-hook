function changeValue(){
    const buttons = document.querySelectorAll('.counterBtn');
    let count=0;
    const counter = document.querySelector('#counter');

buttons.forEach( item => {
    item.addEventListener("click", function(e){
       if(e.target.textContent=="Higher")
        {
            count=count+1;
        }   
        if(e.target.textContent=="Lower")
        {
            count=count-1;
        }   
    
        console.log(count);
        counter.textContent = count;

        if(count < 0){
            counter.style.color = 'red'
        } else if(count > 0){
            counter.style.color = 'green'
        } else {
            counter.style.color = '#222';
        }
    })



});



}

changeValue();