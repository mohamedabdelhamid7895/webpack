import './style.scss';
function component() {
    const element = document.createElement("div");
//   
    element.innerHTML = "HELLO MY DIV";
    element.classList.add('myDiv')
    return element;
};

document.body.appendChild(component());