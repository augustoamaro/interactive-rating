const circles = document.querySelectorAll('span');
for (let circle of circles) {
    circle.onclick = function () {
        circle.style.background = '#FC7614'
        circle.style.color = '#FFFFFF'
        const value = circle.textContent;
        console.log(value)
    }
}

const handleSubmit = () => {

    const cardContent = document.querySelector('[card_content]')
    cardContent.style.display = 'none';

    const cardContentFinal = document.querySelector('[card_final]');
    cardContentFinal.style.display = 'flex';
}
