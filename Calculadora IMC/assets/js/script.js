const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    /* Previne o comportamento padrão do evento submit do JS, ou seja,
    impede o recarregamento da página */
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    if (!isNaN(bmi)) {
        const value = document.getElementById('value');
        const descriptionText = document.getElementById('description-text');


        let description = '';

        value.classList.add('attention');

        document.getElementById('infos').classList.remove('hidden');


        if (bmi < 18.5) {
            description = 'Você está abaixo do peso!';
        } else if (bmi >= 18.5 && bmi <= 25) {
            description = "Você está no peso ideal!";
            value.classList.remove('attention');
            value.classList.add('normal');
        } else if (bmi > 25 && bmi <= 30) {
            description = "Você está com sobrepeso!";
        } else if (bmi > 30 && bmi <= 35) {
            description = "Você está com obesidade moderada!";
        } else if (bmi > 35 && bmi <= 40) {
            description = "Você está com obesidade severa!";
        } else {
            description = "Você está com obesidade mórbida!";
        }

        value.textContent = bmi.replace('.', ',');

        descriptionText.textContent = description;
        descriptionText.style.color = getComputedStyle(document.getElementById('value')).color;
        descriptionText.textContent = description.charAt(0).toLowerCase() + description.slice(1);
        document.getElementById('description').textContent = description;

    }
});

form.addEventListener('keypress', function(event) {
    if (event.key === 'press') {
        document.getElementById('#calculate').click();
    }
});