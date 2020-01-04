function navigation(type) {
  const body = document.getElementsByTagName('body')[0]
  
  if (type === 'home') {
    // body.classList.remove('inactive')
    setTimeout(() => {
      body.classList.remove('inactive')
    }, 500)
    document.getElementById('projects').classList.remove('active', 'scrollable')
    document.getElementById('contact').classList.remove('active', 'scrollable')
  } else {
    const el = document.getElementById(type)
    
    body.classList.add('inactive')
    el.classList.add('active')
    setTimeout(() => {
      el.classList.add('scrollable')
    }, 500)
  }
}
