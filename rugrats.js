(function () {
  function getParameterByName (name, url) {
    if (!url) url = window.location.href
    name = name.replace(/[[\]]/g, '\\$&')
    const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`)
    const results = regex.exec(url)
    if (!results) return null
    if (!results[2]) return ''
    return decodeURIComponent(results[2].replace(/\+/g, ' '))
  }

  const images = [
    'http://zabbyallen.com/user/pages/01.blog/freebie-friday-90s-inspired-backgrounds/triangles-background.jpg',
    'http://zabbyallen.com/user/pages/01.blog/freebie-friday-90s-inspired-backgrounds/shapes-background.jpg',
    'http://i.imgur.com/opkriub.jpg'
  ]

  const rugImages = document.getElementById('rugBackground')
  const rugText = document.getElementById('rugText')
  const text = getParameterByName('text')

  if (text) {
    rugText.innerHTML = text
  }

  let i = 0
  setInterval(() => {
    rugImages.style.backgroundImage = `url(${images[i]})`
    i = i + 1
    if (i === images.length) {
      i = 0
    }
  }, 180)
})()
