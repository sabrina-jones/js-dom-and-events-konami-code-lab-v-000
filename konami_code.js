const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
   document.body.addEventListener('keydown',keyDownHandler)
}

function keyDownHandler(event){
  const key = parseInt(event.detail || event.which)

  if (key===code[index]){
    index++

    if (index===code.length-1){
      alert('Congrat!')
      index=0
    }
  } else {
    index=0
  }
}
