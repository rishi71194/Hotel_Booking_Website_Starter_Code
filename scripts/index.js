setView();

function setView(){
    let secondRow = document.getElementsByClassName('image_slider')[1];
    secondRow.setAttribute('style', 'display:none');
}

function changeView() {
    let secondRow = document.getElementsByClassName('image_slider')[1];
    if(document.getElementById('vm_btn').innerText == "View More"){
        secondRow.setAttribute('style', 'display:flex');
        document.getElementById('vm_btn').innerText = "View Less";
    } else {
        secondRow.setAttribute('style', 'display:none');
        document.getElementById('vm_btn').innerText = "View More";
    }
}

