const container1 = document.querySelector('.container-1');
const container2 = document.querySelector('.container-2');

const submit = document.getElementById('submit');
const rateAgain = document.getElementById('rateagain');

const btn = document.querySelectorAll('.num');
const rating = document.getElementById('span')

// ======> manuplation

submit.addEventListener('click', () => {
              // container2.classList.remove('hidden')
              container1.style.display = 'none'
              container2.style.display = 'block'

})
rateAgain.addEventListener('click', () => {
              // container2.classList.add('hidden')
              container1.style.display = 'block'
              container2.style.display = 'none'
})

btn.forEach((e) => {
              e.addEventListener('click', () => {
                            rating.innerHTML = e.innerHTML

              })
})
