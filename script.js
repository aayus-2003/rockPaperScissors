
let btn = document.querySelector('button')
let input = document.querySelector('input')
let yourCount = 0;
let cpuCount = 0;

alert('type rock, paper or scissors in input')

btn.onclick = () => {
    let result = document.getElementById('result')
    let left = document.getElementById('left')
    let right = document.getElementById('right')
    let h3 = document.getElementById('h3')
    let win = document.getElementById('win')
    let loose = document.getElementById('loose')

    let cpuValue = Math.floor( Math.random() * 3)
    let cpu = ['rock', 'paper', 'scissors'][cpuValue]

    if(yourCount == 5 || cpuCount == 5){
        if(input.value == 5){
            alert(`winner was You congratulations`)
        }
        else if(cpuCount == 5){
            alert(`you loss winner was CPU`)
        }
    }
    else if(input.value === ''){
        alert('type rock, paper or scissors')
        h3.innerHTML = ''
    }
    else if(input.value === cpu){
        console.log(`match tai no one win here`);
        result.innerHTML = `match tai no one win here`
    }
    else if(input.value === 'rock' && cpu === 'paper'){
        result.innerHTML = 'CPU WIN'
        left.style.backgroundImage = "url('img/rock.jpeg')"
        right.style.backgroundImage = "url('img/paper.jpeg')"
        loose.innerHTML = cpuCount =  cpuCount + 1 
    }
    else if(input.value === 'rock' && cpu === 'scissors'){
        result.innerHTML = 'YOU WIN'
        left.style.backgroundImage = "url('img/rock.jpeg')"
        right.style.backgroundImage = "url('img/scissors.jpg')"
        win.innerHTML = yourCount = yourCount + 1
    }
    else if(input.value === 'paper' && cpu === 'rock'){
        result.innerHTML = 'YOU WIN'
        left.style.backgroundImage = "url('img/paper.jpeg')"
        right.style.backgroundImage = "url('img/rock.jpeg')"
        win.innerHTML = yourCount = yourCount + 1
    }
    else if(input.value === 'paper' && cpu === 'scissors'){
        result.innerHTML = 'CPU WIN'
        left.style.backgroundImage = "url('img/paper.jpeg')"
        right.style.backgroundImage = "url('img/scissors.jpg')"
        loose.innerHTML = cpuCount = cpuCount + 1
    }
    else if(input.value === 'scissors' && cpu === 'rock'){
        result.innerHTML = 'CPU WIN'
        left.style.backgroundImage = "url(img/scissors.jpg')"
        right.style.backgroundImage = "url('img/rock.jpeg')"
        loose.innerHTML = cpuCount = cpuCount + 1
    }
    else if(input.value === 'scissors' && cpu === 'paper'){
        result.innerHTML = 'YOU WIN'
        left.style.backgroundImage = "url('img/scissors.jpg')"
        right.style.backgroundImage = "url('img/paper.jpeg')"
        win.innerHTML = yourCount = yourCount + 1
    }

    reset.addEventListener('click', () => {
       result.innerHTML = ''
       left.style.backgroundImage = 'url("")'
       h3.innerHTML = ''
       right.style.backgroundImage = 'url("")'
    })

    input.value === '' ? h3.innerHTML = '' : h3.innerHTML = `U choose ${input.value} and computer will be ${cpu}`
    input.value = ''
}

input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        document.querySelector('button').click()  
    }
})

