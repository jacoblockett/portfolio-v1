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
