
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
    const cardContent = document.querySelector('[card_content]')
    const cardContentFinal = document.querySelector('[card_final]');

    cardContent.style.display = 'none';
    cardContentFinal.style.display = 'flex';
    selection.innerHTML = `You selected ${clickedSpans.length} out of 5`
}
