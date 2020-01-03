let nav, ham

function navio() {
  // nav = nav || document.getElementById('dropdown-nav')
  ham = ham || document.getElementById('hamburger')

  if (ham.classList.contains('is-active')) {
    ham.classList.remove('is-active')
    // nav.classList.remove('nav-active')
    // nav.classList.add('nav-inactive')
  } else {
    ham.classList.add('is-active')
    // nav.classList.remove('nav-inactive')
    // nav.classList.add('nav-active')
  }
}

function navigation(type) {
  if (type === 'home') {
    document.getElementById('projects').classList.remove('active')
    document.getElementById('contact').classList.remove('active')
  } else {
    document.getElementById(type).classList.add('active')
  }
}
