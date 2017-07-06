(function () {
  const images = [
    'http://zabbyallen.com/user/pages/01.blog/freebie-friday-90s-inspired-backgrounds/triangles-background.jpg',
    'http://zabbyallen.com/user/pages/01.blog/freebie-friday-90s-inspired-backgrounds/shapes-background.jpg',
    'http://i.imgur.com/opkriub.jpg'
  ]

  const rugImages = document.getElementById('rugBackground')

  let i = 0
  setInterval(() => {
    rugImages.style.backgroundImage = `url(${images[i]})`
    i = i + 1
    if (i === images.length) {
      i = 0
    }
  }, 180)
})()
