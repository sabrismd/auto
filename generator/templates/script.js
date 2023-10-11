let descObj = [];

function createdescription(){
    const description = document.getElementById('description');

    description.innerHTML = '';
    const val = document.getElementById('select').value;
    const html = `
        DESCRIPTION:<input class="description" type="text"><br>
        HSN/SAC:<input class="hsn" type="number"><br>
        QTY:<input class="qty" type="number"><br>
        UNIT:<input class="unit" type="text"><br>
        RATE:<input class="rate" type="number"><br>
        <hr>
        `;
    
        let res = '';

    for (var i = 1;i<=val;i++){
        res += html;
    }
    description.insertAdjacentHTML("beforeend",res);

}
function save(){
    let subject = document.getElementById('subject').value;
    let date=document.getElementById('date').value
    let l1=document.getElementById('l1').value
    let l2=document.getElementById('l2').value
    let l3=document.getElementById('l3').value
    console.log(date)
    console.log(l1)
    console.log(l2)
    console.log(l3)

    // descObj['date'] = date;
    // descObj['address1'] = l1;
    // descObj['address2'] = l2;
    // descObj['address3'] = l3;

    descObj['info'] = [];

    let obj = {
        'subject' : subject,
        'date' : date,
        'address1':l1,
        'address2':l2,
        'address3':l3
    }
    descObj['info'].push(obj);


    let description=document.querySelectorAll('.description');
    let hsn=document.querySelectorAll('.hsn');
    let qty=document.querySelectorAll('.qty');
    let unit=document.querySelectorAll('.unit');
    let rate=document.querySelectorAll('.rate');

    descObj['descTable'] = [];

    for(var i=0;i<description.length;i++){
        let obj = {
            'description' : description[i].value,
            'hsn' : hsn[i].value,
            'qty' : qty[i].value,
            'unit' : unit[i].value,
            'rate' : rate[i].value

        }
        descObj['descTable'].push(obj);
    }

   
    console.log(descObj.date)
    localStorage.setItem('descObj',JSON.stringify(descObj.descTable))
    localStorage.setItem('descInfo',JSON.stringify(descObj.info))

}

