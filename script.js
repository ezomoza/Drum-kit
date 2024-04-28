window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  console.log(key);
  console.log(audio);
  if(!audio) return // stop function
  audio.currentTime = 0; // rewind
  audio.play()
  key.classList.add('playing');
  
});

function removeTransition(e) {
if(e.propertyName !== 'transform') return; //skip if not transform
  this.classList.remove('playing')
}

const key = document.querySelectorAll('.key')
key.forEach(key => key.addEventListener('transitionend', removeTransition))
