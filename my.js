const calls = [
    {id: '1', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '17.11.2024'},
    {id: '2', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'no', dateTo: '14.12.2024', dataFrom: '07.11.2004'},
    {id: '3', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'no', dateTo: '14.12.2024', dataFrom: '24.07.2014'},
    {id: '4', nameEmployee: 'Vanya', idCLient: 'Vova', status: '', dateTo: '14.12.2024', dataFrom: '05.10.2021'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
    {id: '5', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', dateTo: '14.12.2024', dataFrom: '10.11.2024'},
];

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
    if(call.status === 'yes') {
        td3.style.background = '#88c999 ';
    } else if(call.status === 'no'){
        td3.style.background = '#ff6f61';
    } else {
        td3.style.background = '#ffe680';
    }
    td3.textContent = call.status;
    td3.style.fontSize = '0';
    tr.appendChild(td3);

    let td4 = document.createElement('td');
    td4.textContent = call.dateTo;
    tr.appendChild(td4);

    let td5 = document.createElement('td');
    td5.textContent = call.dataFrom;
    tr.appendChild(td5);

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
        if (call.status === 'yes') {
            td3.style.backgroundColor = '#A3D9A5';
        } else if (call.status === 'no') {
            td3.style.background = '#FF6F61';
        } else {
            td3.style.background = '#FFE680';
        }
        td3.textContent = call.status;
        td3.style.fontSize = '0';
        tr.appendChild(td3);

        let td4 = document.createElement('td');
        td4.textContent = call.dateTo;
        tr.appendChild(td4);

        let td5 = document.createElement('td');
        td5.textContent = call.dataFrom;
        tr.appendChild(td5);

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

