

function enableClick() {
    document.querySelector('.bar:nth-child(1)').style.backgroundColor = 'violet'

    document.querySelector('.bar:nth-child(2)').style.opacity = '0'

    document.querySelector('.bar:nth-child(3)').style.backgroundColor = 'orangered'

    document.querySelector('.bar:nth-child(1)').style.top = '45%'

    document.querySelector('.bar:nth-child(3)').style.top = '45%'

    document.querySelector('.bar:nth-child(1)').style.transform = 'rotate(45deg)'

    document.querySelector('.bar:nth-child(3)').style.transform = 'rotate(-45deg)'

    document.querySelector('.bar:nth-child(1)').style.scale = '150%'

    document.querySelector('.bar:nth-child(2)').style.scale = '125%'

    document.querySelector('.bar:nth-child(3)').style.scale = '150%'

    document.querySelector('.bar:nth-child(1)').style.transition = 'all 1s'

    document.querySelector('.bar:nth-child(3)').style.transition = 'all 1s'

 
}

function disableClick() {
    document.querySelector('.bar:nth-child(1)').style.backgroundColor = 'violet'

    document.querySelector('.bar:nth-child(2)').style.opacity = '100'

    document.querySelector('.bar:nth-child(3)').style.backgroundColor = 'green'

    document.querySelector('.bar:nth-child(1)').style.top = '25%'

    document.querySelector('.bar:nth-child(2)').style.top = '50%'

    document.querySelector('.bar:nth-child(3)').style.top = '75%'

    document.querySelector('.bar:nth-child(1)').style.transform = 'rotate(0deg)'

    document.querySelector('.bar:nth-child(3)').style.transform = 'rotate(0deg)'

    document.querySelector('.bar:nth-child(1)').style.scale = '100%'

    document.querySelector('.bar:nth-child(2)').style.scale = '100%'

    document.querySelector('.bar:nth-child(3)').style.scale = '100%'

    document.querySelector('.bar:nth-child(1)').style.transition = 'all 1s'

    document.querySelector('.bar:nth-child(2)').style.transition = 'all 1s'

    document.querySelector('.bar:nth-child(3)').style.transition = 'all 1s'

 
}

const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.classList = 'check'
navBar.appendChild(checkbox)

function boxCheck() {
    if (checkbox.checked === true) {
        enableClick()
} else if (checkbox.checked === false) {
        disableClick()
}
}


navBar.addEventListener('click', function () {
    boxCheck()
}) 


