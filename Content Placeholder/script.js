const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML =
      '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
    title.innerHTML = 'Media Developer'
    excerpt.innerHTML =
    'Computer Science Specialist. Skilled in programming, Front end web developer, Design Skills and Self Learning. Media developer with a Bachelors degree focused on Computer Science from Imam Abdulrahman Bin Faisal University.'
    profile_img.innerHTML =
    '<img src="avatar.jpg" alt="" />'
  name.innerHTML = 'Jehan AlBuainain'
  date.innerHTML = 'Aug 15, 2024'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))



}