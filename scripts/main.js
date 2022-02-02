const clouds = document.querySelectorAll('.cloud');
const inner = document.querySelector('.header__title'),
boat = document.querySelector('.boat'),
fantasy = document.querySelector('.fantasy');
let text = 'PARALAX EFFECT',
    i = 0,
    speed = 140;

window.addEventListener('scroll', function (e) {
    let scrollY = this.scrollY
    clouds.forEach((el)=>{
        const speed = el.getAttribute('data-speed')
        el.style.transform = `translateX(${scrollY * speed}px)`
    })
    const boatSpeed = boat.getAttribute('data-speed')
    boat.style.transform = `translateX(${boatSpeed * scrollY}px)`
    
  })

function typing() {
  if (i < text.length) {
    inner.innerHTML += text.charAt(i);
    i++
    setTimeout(typing, speed);
  }
}

typing();