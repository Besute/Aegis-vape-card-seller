const card = document.querySelector('.cardholder__card')
const img = document.querySelector('.cardholder__img')
const price = document.querySelector('.cardholder__price')
const cost = document.querySelector('.cardholder__cost')
const num = document.querySelector('.cardholder__number')

const color = `rgba(black, 0.25)`


num.addEventListener('mousemove', (e) => {
    num.style.transition = card.style.transition = cost.style.transition = price.style.transition = img.style.transition = card.childNodes[1].style.transition = cost.style.transition = `all .1s`
    num.style.opacity = price.style.opacity = '1'
    card.childNodes[1].opacity = '0.4'
    price.style.color = num.style.color = 'white'
    card.childNodes[1].style.transform = 'perspective(1000px)'
    cost.style.transform = `perspective(1000px) rotateX(${(e.clientY-(window.innerHeight*0.5))/10}deg)rotateY(${(-e.clientX+(window.innerWidth*0.5))/11}deg) scale(1.1) translate(-15px, -5px)`
    img.style.filter = `drop-shadow(20px 15px 4px rgba(0, 0, 0, 0.25))`
    cost.style.filter = num.style.filter =  `drop-shadow(5px 13px 4px rgba(0, 0, 0, 0.25))`
    card.style.transform = `perspective(1000px) rotateX(${(e.clientY-(window.innerHeight*0.5))/10}deg)rotateY(${(-e.clientX+(window.innerWidth*0.5))/11}deg)`
    img.style.transform = `perspective(1000px) rotateX(${(e.clientY-(window.innerHeight*0.5))/10}deg)rotateY(${(-e.clientX+(window.innerWidth*0.5))/11}deg) scale(1.15) translate(-30px, -20px)`
    num.style.transform = `perspective(1000px) rotateX(${(e.clientY-(window.innerHeight*0.5))/10}deg)rotateY(${(-e.clientX+(window.innerWidth*0.5))/11}deg) scale(1.15)`

    card.childNodes.forEach(el => {
        const a = el.className
        if (a == undefined) return
        let elem = document.querySelector(`.${el.className.split(' ').length > 1 ? el.className.split(' ')[1] : el.className.split(' ')[0]}`)
        elem.classList.add('anim')
    })
})
card.addEventListener('mousemove', (e) => {
    num.style.transition = card.style.transition = cost.style.transition = price.style.transition = img.style.transition = card.childNodes[1].style.transition = cost.style.transition = `all .1s`
    num.style.opacity = price.style.opacity = '1'
    card.childNodes[1].opacity = '0.4'
    price.style.color = num.style.color = 'white'
    card.childNodes[1].style.transform = 'perspective(1000px)'
    cost.style.transform = `perspective(1000px) rotateX(${(e.clientY-(window.innerHeight*0.5))/10}deg)rotateY(${(-e.clientX+(window.innerWidth*0.5))/11}deg) scale(1.1) translate(-15px, -5px)`
    img.style.filter = `drop-shadow(20px 15px 4px rgba(0, 0, 0, 0.25))`
    cost.style.filter = num.style.filter = `drop-shadow(5px 13px 4px rgba(0, 0, 0, 0.25))`
    card.style.transform = `perspective(1000px) rotateX(${(e.clientY-(window.innerHeight*0.5))/10}deg)rotateY(${(-e.clientX+(window.innerWidth*0.5))/11}deg)`
    img.style.transform = `perspective(1000px) rotateX(${(e.clientY-(window.innerHeight*0.5))/10}deg)rotateY(${(-e.clientX+(window.innerWidth*0.5))/11}deg) scale(1.15) translate(-30px, -20px)`
    num.style.transform = `perspective(1000px) rotateX(${(e.clientY-(window.innerHeight*0.5))/10}deg)rotateY(${(-e.clientX+(window.innerWidth*0.5))/11}deg) scale(1.15)`

    card.childNodes.forEach(el => {
        const a = el.className
        if (a == undefined) return
        let elem = document.querySelector(`.${el.className.split(' ').length > 1 ? el.className.split(' ')[1] : el.className.split(' ')[0]}`)
        elem.classList.add('anim')
    })
})
img.addEventListener('mousemove', (e) => {
    num.style.transition = card.style.transition = cost.style.transition = price.style.transition = img.style.transition = card.childNodes[1].style.transition = cost.style.transition = `all .1s`
    num.style.opacity = price.style.opacity = '1'
    card.childNodes[1].opacity = '0.4'
    price.style.color = num.style.color = 'white'
    card.childNodes[1].style.transform = 'perspective(1000px)'
    cost.style.transform = `perspective(1000px) rotateX(${(e.clientY-(window.innerHeight*0.5))/10}deg)rotateY(${(-e.clientX+(window.innerWidth*0.5))/11}deg) scale(1.1) translate(-15px, -5px)`
    img.style.filter = `drop-shadow(20px 15px 4px rgba(0, 0, 0, 0.25))`
    cost.style.filter = num.style.filter = `drop-shadow(5px 13px 4px rgba(0, 0, 0, 0.25))`
    card.style.transform = `perspective(1000px) rotateX(${(e.clientY-(window.innerHeight*0.5))/10}deg)rotateY(${(-e.clientX+(window.innerWidth*0.5))/11}deg)`
    img.style.transform = `perspective(1000px) rotateX(${(e.clientY-(window.innerHeight*0.5))/10}deg)rotateY(${(-e.clientX+(window.innerWidth*0.5))/11}deg) scale(1.15) translate(-30px, -20px)`
    num.style.transform = `perspective(1000px) rotateX(${(e.clientY-(window.innerHeight*0.5))/10}deg)rotateY(${(-e.clientX+(window.innerWidth*0.5))/11}deg) scale(1.15)`

    card.childNodes.forEach(el => {
        const a = el.className
        if (a == undefined) return
        let elem = document.querySelector(`.${el.className.split(' ').length > 1 ? el.className.split(' ')[1] : el.className.split(' ')[0]}`)
        elem.classList.add('anim')
    })
})
card.addEventListener('mouseout', (e) => {
    card.style.transition = `all .23s`
    img.style.transition = `all .23s`
    price.style.transform = cost.style.transition = `all .23s`
    card.style.transform = num.style.transform = img.style.transform = `rotateX(0) rotateY(0)`
    card.childNodes[1].style.opacity = price.style.opacity = num.style.opacity = '0.4'
    card.childNodes[1].style.color = 'white'
    card.childNodes[1].style.transform = price.style.transform = cost.style.transform = num.style.opacity = 'scale(1)'
    img.style.filter = `none`
    cost.style.filter = num.style.filter = `none`

    card.childNodes.forEach(el => {
        const a = el.className
        if (a == undefined || a == 'cardholder__text') return
        let elem = document.querySelector(`.${el.className.split(' ').length > 1 ? el.className.split(' ')[1] : el.className.split(' ')[0]}`)
        elem.classList.remove('anim')
    })
})
img.addEventListener('mouseout', (e) => {
    card.childNodes[1].style.transition = price.style.transform = cost.style.transition = card.style.transition = img.style.transition = `all .23s`
    card.style.transform = num.style.transform = img.style.transform = `rotateX(0) rotateY(0)`
    price.style.opacity = num.style.opacity = '0.4'
    card.childNodes[1].style.color = 'white'
    card.childNodes[1].style.transform = price.style.transform = cost.style.transform = num.style.opacity = 'scale(1)'
    img.style.filter = `none`
    cost.style.filter = num.style.filter = `none`

    card.childNodes.forEach(el => {
        const a = el.className
        if (a == undefined || a == 'cardholder__text') return
        let elem = document.querySelector(`.${el.className.split(' ').length > 1 ? el.className.split(' ')[1] : el.className.split(' ')[0]}`)
        elem.classList.remove('anim')
    })
})

num.addEventListener('mouseout', (e) => {
    card.childNodes[1].style.transition = price.style.transform = cost.style.transition = card.style.transition = img.style.transition = `all .23s`
    card.style.transform = num.style.transform = img.style.transform `rotateX(0) rotateY(0)`
    price.style.opacity = num.style.opacity = '0.4'
    card.childNodes[1].style.color = 'white'
    card.childNodes[1].style.transform = price.style.transform = cost.style.transform = num.style.opacity = 'scale(1)'
    img.style.filter = `none`
    cost.style.filter = num.style.filter = `none`

    card.childNodes.forEach(el => {
        const a = el.className
        if (a == undefined || a == 'cardholder__text') return
        let elem = document.querySelector(`.${el.className.split(' ').length > 1 ? el.className.split(' ')[1] : el.className.split(' ')[0]}`)
        elem.classList.remove('anim')
    })
})