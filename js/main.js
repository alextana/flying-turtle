const turtleStart = () => {
    let turtle = document.querySelector('.turtle');
    let ground = document.querySelector('.ground');
    turtle.style.bottom = ground.clientHeight + 'px';
    let complete = false;
    const fly = () => {
        turtle = event.target.parentElement;
        turtle.style.transition = '5s ease all'
        turtle.style.left = '150%'
        turtle.style.bottom = '80%';
      
        let showButton = () => {
            if(complete) {
                document.querySelector('.fly__again').classList.remove('d-none')
            }
        }
        setTimeout(function(){
            complete = true;
            showButton();
        }, 5000);
    }

    document.addEventListener('click', function() {
        if(event.target.classList.contains('turtleImage')) {
            fly();
        }

        if(event.target.parentElement.classList.contains('fly__again')) {
            turtle.style = '';
            turtle.style.bottom = ground.clientHeight + 'px';
            document.querySelector('.fly__again').classList.add('d-none')
           
        }

    })
}
document.addEventListener('DOMContentLoaded', function() {
    turtleStart();
});