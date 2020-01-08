const crumbs = ['home']
const projects = {
  puniurl: setInnerHTML(
    'puniurl',
    'Puny Url',
    'PuniUrl',
    'Designed a URL shortening service. The program provides a small, 8 character replacement URL based on a queried database of URLs.',
    ['Express', 'Node', 'Firebase', 'Pug'],
    'https://github.com/huntinghawk1415/puniurl',
    'http://puniurl.com/'
  ),
  taggen: setInnerHTML(
    'taggen',
    'Taggen',
    'Taggen',
    'Needed a way to generate non-opinionated XML and thought it would be interesting to create a library from scratch. Turns out it was quite the challenge but a great exercise in abstraction.',
    ['Node', 'JavaScript'],
    'https://github.com/huntinghawk1415/Taggen'
  ),
  forumApp: setInnerHTML(
    'forum-app',
    'Forum App',
    'Forum App',
    'Provided the back-end API, created an application that allows a user to post topics and comments for others to see.',
    ['React', 'Redux', 'Bootstrap', 'Express'],
    'https://github.com/huntinghawk1415/ReactND-Readable'
  ),
  simonGame: setInnerHTML(
    'simon',
    'Simon Game',
    'Simon Game',
    'The popular Simon memory game! This game uses colors and sounds to test your recall. Originally created this application <a href="https://codepen.io/HuntingHawk/full/VpEroM/" rel="noreferrer noopener" target="_blank">here</a> as required courswork to recieve certification through FreeCodeCamp. I then created the current version in my freetime as a challenge to see how fast and optimal I could get it done.',
    ['HTML', 'CSS', 'JavaScript'],
    null,
    'https://codepen.io/HuntingHawk/full/mNPVgj'
  ),
  fiveGuys: setInnerHTML(
    'fg-landing',
    'Five Guys Landing Redesign',
    'Five Guys Landing Redesign',
    'For this project I was tasked with redesigning the landing page for a website. I chose Five Guys because although they have a pretty well designed website, I thought it had a bit of an overload of information on the front page. The redesign consolidates everything into two buttons centered on a quality picture of what they\'re all about.',
    ['React', 'CSS'],
    null,
    'https://codepen.io/HuntingHawk/full/ELPwPx'
  ),
  drumMachine: setInnerHTML(
    'drums',
    'Drum Machine',
    'Drum Machine',
    'A basic drum machine application that allows the user to create their own sound. Click on a button or type the corresponding letter to activate each sound.',
    ['React', 'CSS'],
    null,
    'https://codepen.io/HuntingHawk/full/ejbvLZ'
  )
}

function setInnerHTML(img, alt, title, description, languages, github, live) {
  return `<div class="back-nav"><button class="back-btn-container" title="Back" onmouseup="navigate('back')"><svg class="back-btn" focusable="false" viewBox="0 0 448 512"><path d="M152.485 396.284l19.626-19.626c4.753-4.753 4.675-12.484-.173-17.14L91.22 282H436c6.627 0 12-5.373 12-12v-28c0-6.627-5.373-12-12-12H91.22l80.717-77.518c4.849-4.656 4.927-12.387.173-17.14l-19.626-19.626c-4.686-4.686-12.284-4.686-16.971 0L3.716 247.515c-4.686 4.686-4.686 12.284 0 16.971l131.799 131.799c4.686 4.685 12.284 4.685 16.97-.001z"></path></svg></button></div>
  <div class="details-inner">
    <img src="public/img/${img}.${img === 'forum-app' ? 'png' : 'PNG'}" alt="Image for ${alt}">
    <h2>${title}</h2>
    <p>${description}</p>
    <hr/>
    <div class="details-languages">
      <strong>Languages:</strong> ${languages.join(', ')}
    </div>
    <div class="details-btns">
    ${github ? `
      <a title="View on Github" href="${github}" target="_blank" rel="noopener noreferrer">
        <svg focusable="false" viewBox="0 0 496 512">
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
        </svg>
      </a>` : ''}
    ${live ? `
      <a title="View Live" href="${live}" target="_blank" rel="noopener noreferrer">
        <svg focusable="false" viewBox="0 0 512 512">
          <path d="M497.6,0,334.4.17A14.4,14.4,0,0,0,320,14.57V47.88a14.4,14.4,0,0,0,14.69,14.4l73.63-2.72,2.06,2.06L131.52,340.49a12,12,0,0,0,0,17l23,23a12,12,0,0,0,17,0L450.38,101.62l2.06,2.06-2.72,73.63A14.4,14.4,0,0,0,464.12,192h33.31a14.4,14.4,0,0,0,14.4-14.4L512,14.4A14.4,14.4,0,0,0,497.6,0ZM432,288H416a16,16,0,0,0-16,16V458a6,6,0,0,1-6,6H54a6,6,0,0,1-6-6V118a6,6,0,0,1,6-6H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V304A16,16,0,0,0,432,288Z"></path>
        </svg>
      </a>` : ''}
    </div>
  </div>`
}

function navigate(type, project) {
  const body = document.getElementsByTagName('body')[0]

  if (type === 'back') {
    const preEl = document.getElementById(crumbs.pop())
    const curEl = document.getElementById(crumbs[crumbs.length - 1])

    setTimeout(() => {
      preEl.classList.remove('scrollable')

      if (crumbs[crumbs.length - 1] === 'home') {
        body.classList.remove('inactive')
      } else {
        curEl.classList.remove('inactive')
      }
    }, 500)

    preEl.classList.remove('active')
  } else {
    const preEl = document.getElementById(crumbs[crumbs.length - 1])

    if (type === 'projects' || type === 'contact') {
      const curEl = document.getElementById(type)

      crumbs.push(type)
      body.classList.add('inactive')
      curEl.classList.add('active')
      setTimeout(() => {
        curEl.classList.add('scrollable')
      }, 500)
    } else {
      const curEl = document.getElementById('details')

      crumbs.push('details')
      curEl.innerHTML = projects[project]
      curEl.classList.add('active')
      document.getElementById('projects').classList.add('inactive')
      setTimeout(() => {
        curEl.classList.add('scrollable')
      }, 500)
    }
  }
}

function send() {
  const name = document.getElementById('contact-name')
  const email = document.getElementById('contact-email')
  const message = document.getElementById('contact-message')
  const emailReg = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/, 'i')

  if (name.value.length > 0 && emailReg.test(email.value) && message.value.length > 0) {
    fetch('https://jl-mailer.herokuapp.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      referrer: 'no-referrer',
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        sub: null,
        msg: message.value
      })
    })

    name.value = ''
    email.value = ''
    message.value = ''

    return alert(`Thank you for your message, ${name.value}! I'll try to get back to you as soon as possible!`)
  } else {
    return alert('Please make sure you\'ve filled out all of the fields correctly. (No blanks, and email must be a real email address)')
  }
}
