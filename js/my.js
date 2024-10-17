const calls = [
    {id: '1', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '17.11.2024', button: 'Обработать'},
    {id: '2', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'no', dateTo: '14.12.2024', dataFrom: '07.11.2004', button: 'Обработать'},
    {id: '3', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'no', dateTo: '14.12.2024', dataFrom: '24.07.2014', button: 'Обработать'},
    {id: '4', nameEmployee: 'Vanya', idCLient: 'Vova', status: '', dateTo: '14.12.2024', dataFrom: '05.10.2021', button: 'Обработать'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024', button: 'Обработать'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024', button: 'Обработать'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024', button: 'Обработать'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024', button: 'Обработать'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024', button: 'Обработать'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024', button: 'Обработать'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024', button: 'Обработать'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024', button: 'Обработать'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024', button: 'Обработать'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024', button: 'Обработать'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024', button: 'Обработать'},
    {id: '5', nameEmployee: 'djglks', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024', button: 'Обработать'},
];

function displayCallCounts() {
    const allCallsCount = calls.length;
    const verifiedCallsCount = calls.filter(call => call.status === 'yes').length;
    
    const allCallsSpan = document.querySelector('.numberOfCalls .allCalls');
    const verifiedCallsSpan = document.querySelector('.numberOfCalls span:nth-child(2)'); 

    allCallsSpan.textContent = `${allCallsCount} Всего звонков`;
    verifiedCallsSpan.textContent = `${verifiedCallsCount} Проверенных`;
}
  
displayCallCounts();

const callListElement = document.querySelector('#callsList');

for (let call of calls) {
    let tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.textContent = call.nameEmployee;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.textContent = call.idCLient;
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    checkbox.disabled = true;
    if (call.status === 'yes') {
        checkbox.checked = true;
    } else if (call.status === 'no') {
        checkbox.checked = false;
    }
    td3.appendChild(checkbox);
    tr.appendChild(td3);

    let td4 = document.createElement('td');
    td4.textContent = call.dateTo;
    tr.appendChild(td4);

    let td5 = document.createElement('td');
    td5.textContent = call.dataFrom;
    tr.appendChild(td5);

    let td6 = document.createElement('td');
    td6.textContent = call.button;
    td6.className += 'process';
    tr.appendChild(td6);

    callListElement.appendChild(tr);
}

document.querySelector('.unloadCalls').addEventListener('click', function(event) {
    event.preventDefault();

    const inputDateFrom = document.querySelector('#dateFrom').value;
    const inputDateTo = document.querySelector('#dateTo').value;

    const formattedDateFrom = inputDateFrom.split('-').reverse().join('.');
    const formattedDateTo = inputDateTo.split('-').reverse().join('.');

    // Фильтрация звонков, попадающих в диапазон
    const filteredCalls = calls.filter(call => {
        const callDateFrom = call.dataFrom.split('.').reverse().join('-');
        const callDateTo = call.dateTo.split('.').reverse().join('-');
        return callDateFrom >= inputDateFrom && callDateTo <= inputDateTo;
    });

    // Очистка таблицы перед новым выводом
    const callListElement = document.querySelector('#callsList');
    callListElement.innerHTML = `
        <thead>
            <th>Имя сотрудника</th>
            <th>Номер сотрудника</th>
            <th>Статус</th>
            <th>Дата окончание</th>
            <th>Дата начала</th>
            <th>Обработчик</th>
        </thead>
    `;

    // Вывод отфильтрованных данных
    filteredCalls.forEach(call => {
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.textContent = call.nameEmployee;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.textContent = call.idCLient;
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        checkbox.disabled = true;
        if (call.status === 'yes') {
            checkbox.checked = true;
        } else if (call.status === 'no') {
            checkbox.checked = false;
        }
        td3.appendChild(checkbox);
        tr.appendChild(td3);

        let td4 = document.createElement('td');
        td4.textContent = call.dateTo;
        tr.appendChild(td4);

        let td5 = document.createElement('td');
        td5.textContent = call.dataFrom;
        tr.appendChild(td5);

        let td6 = document.createElement('td');
        td6.textContent = call.button;
        td6.className += 'process';
        tr.appendChild(td6);

        callListElement.appendChild(tr);
    });

    // Если не нашлось ни одного звонка
    if (filteredCalls.length === 0) {
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.colSpan = 5;
        td.textContent = "Нет звонков за выбранный период";
        tr.appendChild(td);
        callListElement.appendChild(tr);
    }
});


function auth(event) {
    event.preventDefault();

    var email = document.getElementById("login").value;
    var password = document.getElementById("password").value;

    if (email === "1" && password === "1") {
         window.location.replace("/html/index.html");
    } else {
        alert("Invalid information");
        return;
    }
}
    


// create a new Date object
const now = new Date();

const daysOfWeek = [
  'Воскресенье', 'Понедельник', 'Вторник', 'Среда','Четверг', 'Пятница', 'Суббота'
];
const dayOfWeek = daysOfWeek[now.getDay()];

const months = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];
const month = months[now.getMonth()];

const time = now.toLocaleTimeString('ru-RU', { hour: 'numeric', minute: 'numeric' });

document.querySelector('.date').innerHTML = `${dayOfWeek}, ${month} ${time}`;

const formCalls = document.querySelector(".formCalls");
formCalls.style.display = 'none';

document.querySelector(".openWindowFormCalls").addEventListener("click" ,function() {

    if(formCalls.style.display === 'none'){
        formCalls.style.display = 'flex';
    } else if(formCalls.style.display === 'flex') {
        formCalls.style.display = 'none';
    }
})

