const calls = [
    {id: '1', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'yes', timeCall: '21:20', dataCall: '17.11.2024'},
    {id: '2', nameEmployee: 'Vanya', idCLient: 'Vova', status: 'no', timeCall: '21:20', dataCall: '17.11.2024'},
    {id: '3', nameEmployee: 'Vanya', idCLient: 'Vova', status: '', timeCall: '21:20', dataCall: '17.11.2024'},
    {id: '4', nameEmployee: 'Vanya', idCLient: 'Vova', status: '', timeCall: '21:20', dataCall: '17.11.2024'},
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
        td3.style.background = 'green';
    } else if(call.status === 'no'){
        td3.style.background = 'red';
    } else {
        td3.style.background = 'orange';
    }
    td3.textContent = call.status;
    tr.appendChild(td3);

    let td4 = document.createElement('td');
    td4.textContent = call.timeCall;
    tr.appendChild(td4);

    let td5 = document.createElement('td');
    td5.textContent = call.dataCall;
    tr.appendChild(td5);

    callListElement.appendChild(tr);
}

