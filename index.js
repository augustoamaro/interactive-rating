// const circles = document.querySelectorAll('span');
// for (let circle of circles) {
//     circle.onclick = function () {
//         
//         const value = circle.textContent;
//         console.log(value)
//     }
// }


const spans = document.querySelectorAll('span');

for (let span of spans) {
    span.addEventListener('click', function () {
        span.style.background = '#FC7614'
        span.style.color = '#FFFFFF'
        // for (let otherSpan of spans) {
        //     otherSpan.classList.remove('selected');
        // }
        // this.classList.add('selected');

    });
}

const handleSubmit = () => {

    const cardContent = document.querySelector('[card_content]')
    cardContent.style.display = 'none';

    const cardContentFinal = document.querySelector('[card_final]');
    cardContentFinal.style.display = 'flex';
    console.log(`You selected ${this.innerText} of 5`);
}
