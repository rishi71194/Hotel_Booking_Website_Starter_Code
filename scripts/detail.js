setMinDate();

function setMinDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10){
        dd = '0'+ dd
    } 
    if(mm<10){
        mm = '0' + mm
    } 

today = yyyy + '-' + mm + '-' + dd;
document.getElementsByClassName("dates")[0].setAttribute("min", today);
}

function dayDiff(from, to){
    var toDate = new Date(to);
    var fromDate = new Date(from);
    var timeDiff = toDate.getTime() - fromDate.getTime();
    return timeDiff / (24*60*60*1000);
}

function totalAmount() {
    let to = document.getElementsByClassName('dates')[1].value;
    let from = document.getElementsByClassName('dates')[0].value;
    let noOfAdults = document.getElementsByName('noadults')[0].value;
    var nod = dayDiff(from, to);

    if(nod>=0) {
        var total = noOfAdults * (nod+1) * 1000;
    } else {
        var total = noOfAdults * 0 * 1000;
    }
    

    document.getElementsByName('total')[0].value = 'Rs.' + total;
}

function setMinToDate() {
    let from = document.getElementsByClassName('dates')[0].value;
    document.getElementsByClassName("dates")[1].setAttribute("min", from);
    totalAmount();
}