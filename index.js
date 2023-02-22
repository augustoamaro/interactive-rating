const inputs = document.querySelectorAll('input[type=radio]');
const selection = document.querySelector('[selection]');

inputs.forEach(input => {
    input.addEventListener('click', () => {
        selection.innerHTML = `You selected ${input.value} out of 5`
    });
});

const handleSubmit = () => {
    const cardContent = document.querySelector('[card_content]')
    const cardContentFinal = document.querySelector('[card_final]');

    cardContent.style.display = 'none';
    cardContentFinal.style.display = 'flex';
}
