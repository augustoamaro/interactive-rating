
const spans = document.querySelectorAll('span');
let clickedSpans = [];

for (let span of spans) {
    span.addEventListener('click', function () {
        span.style.background = '#FC7614'
        span.style.color = '#FFFFFF'
        clickedSpans.push(spans)
    });
}

const handleSubmit = () => {
    const selection = document.querySelector('[selection]');
    console.log(selection)

    const cardContent = document.querySelector('[card_content]')
    cardContent.style.display = 'none';

    const cardContentFinal = document.querySelector('[card_final]');
    cardContentFinal.style.display = 'flex';
    selection.innerHTML = `You selected ${clickedSpans.length} of 5`
}
