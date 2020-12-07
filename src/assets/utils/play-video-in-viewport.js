/*  
author: david decker
date: 13.11.2019

js to play video when in viewport; pause when not.

https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/
*/

const vid = document.getElementById('example-vid')

const isInViewport = function (elem) {
  let distance = elem.getBoundingClientRect()
  return (
    distance.top <=
      (window.innerHeight - distance.height / 3 ||
        document.documentElement.clientHeight - distance.height / 2) &&
    distance.left >= 0 &&
    distance.bottom >= distance.height / 2 &&
    distance.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  )
}

/* set webp img as hero-background if possible */

function setElementBackgroundImg(element, img1, img2) {
  let img = new Image()

  img.onload = function () {
    element.style.backgroundImage = 'url(' + img1 + ')'
  }

  img.onerror = function () {
    element.style.backgroundImage = 'url(' + img2 + ')'
  }

  img.src = img1
}

setElementBackgroundImg(
  document.getElementsByClassName('hero-backgroundimage')[0],
  '/images/background.webp',
  '/images/background.jpg'
)
