//index.html

const bday = document.querySelector('input[name="check"]');

function enter(e) {
    if (e.keyCode == 13) {
        check();
    }
}

function check() {
    if (bday.value == 970404) {
        window.location.href='./message.html';
    } else if (bday.value == 19970404) {
        window.location.href='./message.html';   
    } else {
        return;
    }
}


//message.html

const btnBottom = document.querySelector('.recent');
const btnTop = document.querySelector('.send');

function goUp() {
    document.querySelector('.start').scrollIntoView();
}

function goDown() {
    document.querySelector('.end').scrollIntoView();
}

function goBack() {
    window.location.href='./index.html';
}

function goTo() {
    let year = document.querySelector('input[name="yearBtn"]:checked').value;
    let month = document.querySelector('#month').value;
    let day = document.querySelector('#day').value;

    let date = year + '.' + month + '.' + day;
    
    let datebox = document.querySelectorAll('.datebox');

    for(i=0; i<datebox.length; i++) {
        let dateValue = datebox[i].innerHTML;

        if (dateValue.includes(date)) {
            let location = datebox[i].offsetTop - 90;
            window.scrollTo(0,location);
            calendar();
            return;
        }
    }

}


const btnCalendar = document.querySelector('.calendar');

function calendar() {
    let search = document.querySelector('.search');
    if (search.style.display == 'none') {
        search.style.display = 'block';
    } else if (search.style.display == 'block') {
        search.style.display = 'none';
    }
}