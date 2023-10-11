

const descriptionInfo = JSON.parse(localStorage.getItem('descInfo'));
const descriptionObject = JSON.parse(localStorage.getItem('descObj'));


const address1 = document.getElementById('address1');
const address2 = document.getElementById('address2');
const address3 = document.getElementById('address3');

const date = document.getElementById('date');

const subject = document.getElementById('subject');

const tableBody = document.getElementById('tbody');

let date1 = new Date(descriptionInfo[0].date);
let formattedDate =  date1.getDate()+"/"+date1.getMonth()+"/"+date1.getFullYear();

address1.innerHTML = descriptionInfo[0].address1;
address2.innerHTML = descriptionInfo[0].address2;
address3.innerHTML = descriptionInfo[0].address3;
subject.innerHTML = descriptionInfo[0].subject;
date.innerHTML = formattedDate ;

let tableHtml = "";

let totalAmount = 0;

for(let i=0;i<descriptionObject.length;i++){
    totalAmount += descriptionObject[i].qty * descriptionObject[i].rate;

    tableHtml += `
                <tr>
                    <td>${i+1}</td>
                    <td>${descriptionObject[i].description}</td>
                    <td>${descriptionObject[i].hsn}</td>
                    <td>${descriptionObject[i].qty}</td>
                    <td>${descriptionObject[i].rate}</td>
                    <td>${descriptionObject[i].unit}</td>
                    <td>${descriptionObject[i].qty * descriptionObject[i].rate}</td>
                </tr>
            `
}

tableHtml += `
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>${totalAmount}</td>
            </tr>
`

console.log(tableHtml);

tableBody.insertAdjacentHTML('beforeend',tableHtml)


console.log(descriptionInfo);
console.log(descriptionObject);
