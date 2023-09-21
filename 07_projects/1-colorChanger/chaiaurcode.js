const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');
// body.style.backgroundColor = 'red';

buttons.forEach((btn) => {
    // console.log(btn);

    btn.addEventListener('click', (btnEvent) => {
        // console.log(btnEvent.target.id);
        switch (btnEvent.target.id) {
            case "grey":
                body.style.backgroundColor = btnEvent.target.id;
                break;
            case "white":
                body.style.backgroundColor = btnEvent.target.id;
                break;
            case "blue":
                body.style.backgroundColor = btnEvent.target.id;
                break;
            case "yellow":
                body.style.backgroundColor = btnEvent.target.id;
                break;
            default:
                break;
        }
    });
});