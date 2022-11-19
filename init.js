document.querySelector('.generation').addEventListener('click', () => {
    const initPerson = personGenerator.getPerson();
    document.querySelector('.image').style.background = `url(img/${initPerson.img}) no-repeat center center`;    
    document.querySelector('.image').style.height = '150px';
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#surnameOutput').innerText = initPerson.surname;
    document.querySelector('#genderOutput').innerText = initPerson.gender + ', ';
    document.querySelector('#patronymicOutput').innerText = initPerson.patronymic;
    document.querySelector('#birthYearOutput').innerText = initPerson.date + ', ';
    document.querySelector('#professionOutput').innerText = initPerson.professoin;
});

document.querySelector('.clearing').addEventListener('click', () => {
    const initPerson = personGenerator.getPerson();
    document.querySelector('.image').style.height = 0;
    document.querySelector('#firstNameOutput').innerText = 'Генерация имя';
    document.querySelector('#surnameOutput').innerText = 'Генерация фамилии';
    document.querySelector('#genderOutput').innerText = 'Генерация пола, ';
    document.querySelector('#patronymicOutput').innerText = 'Генерация отчества';
    document.querySelector('#birthYearOutput').innerText = 'Генерация даты рождения, ';
    document.querySelector('#professionOutput').innerText = 'Генерация профессии';
});