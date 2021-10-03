const fullscreen = document.querySelector('.fullscreen');
const btnContener = document.querySelector('.btn-container');
const btn = document.querySelectorAll('.btn-container'); 
const pianoContainer = document.querySelectorAll('.piano-key');
const piano = document.querySelector('.piano'); 
let state = true;

btnContener.addEventListener('click', even => {

    if(even.target.classList.contains('btn-letters')) {
      AddClassActive(even);
      pianoContainer.forEach(elem=>{
        elem.classList.add('piano-key-letter'); 
      });

    } 
    if(even.target.classList.contains('btn-notes')) {
      AddClassActive(even);
      pianoContainer.forEach(elem=>{
        elem.classList.remove('piano-key-letter'); 
      });
    }
});

function startAudio(element) {
  const note = element.dataset.note;
  const src = `assets/audio/${note}.mp3`;
  playAudio(src);
  state = false;
}

function addActiveClass(elem) {
  elem.classList.add('piano-key-active');
}

document.addEventListener('keyup', event => {
  state = true;
  let pianoActive = document.querySelector('.piano-key-active');
  if(pianoActive != null) pianoActive.classList.remove('piano-key-active');   
});

document.addEventListener('keydown', (event) => {
  switch(event.code) {
    case 'KeyR':
      pianoContainer.forEach(elem => {
        if(elem.dataset.letter == 'R' && state) {
          startAudio(elem);
          addActiveClass(elem);
        }
      });
    break;
    case 'KeyT':
      pianoContainer.forEach(elem => {
        if(elem.dataset.letter == 'T' && state) {
          startAudio(elem);
          addActiveClass(elem);
        }
      });
       break;
    case 'KeyU':
      pianoContainer.forEach(elem => {
        if(elem.dataset.letter == 'U' && state) {
          startAudio(elem);
          addActiveClass(elem);
        }
      });  
    break;
    case 'KeyI':
      pianoContainer.forEach(elem => {
        if(elem.dataset.letter == 'I' && state) {
          startAudio(elem);
          addActiveClass(elem);
        }
      }); 
    break;
    case 'KeyO':
      pianoContainer.forEach(elem => {
        if(elem.dataset.letter == 'O' && state) {
          startAudio(elem);
          addActiveClass(elem);
        }
      });  
    break;
    case 'KeyD':
      pianoContainer.forEach(elem => {
        if(elem.dataset.letter == 'D' && state) {
          startAudio(elem);
          addActiveClass(elem);
        }
      });  
    break;
    case 'KeyF':
      pianoContainer.forEach(elem => {
        if(elem.dataset.letter == 'F' && state) {
          startAudio(elem);
          addActiveClass(elem);
        }
      });  
    break;
    case 'KeyG':
      pianoContainer.forEach(elem => {
        if(elem.dataset.letter == 'G' && state) {
          startAudio(elem);
          addActiveClass(elem);
        }
      });  
    break;
    case 'KeyH':
      pianoContainer.forEach(elem => {
        if(elem.dataset.letter == 'H' && state) {
          startAudio(elem);
          addActiveClass(elem);
        }
      });  
    break;
    case 'KeyJ':
      pianoContainer.forEach(elem => {
        if(elem.dataset.letter == 'J' && state) {
          startAudio(elem);
          addActiveClass(elem);
        }
      });  
    break;
    case 'KeyK':
      pianoContainer.forEach(elem => {
        if(elem.dataset.letter == 'K' && state) {
          startAudio(elem);
          addActiveClass(elem);
        }
      });  
    break;
    case 'KeyL': 
    pianoContainer.forEach(elem => {
      if(elem.dataset.letter == 'L' && state) {
        startAudio(elem);
        addActiveClass(elem);
      }
    });
    break;
    default: return event.preventDefault();
  }
});

function AddClassActive(even) {
   let active = document.querySelector('.btn-active');
  if(!even.target.classList.contains('btn-active')){
   even.target.classList.add('btn-active');
   active.classList.remove('btn-active');
  }
}

piano.addEventListener('mousedown', (event) => {
  if(event.target.classList.contains('piano-key')) {
    event.target.classList.add('piano-key-active','piano-key-active-pseudo');
    const note = event.target.dataset.note;
    const src = `assets/audio/${note}.mp3`;
    playAudio(src);
    startCorrespondOver(event);
  }
   
});

document.addEventListener('mouseup', (event) => {
  event.target.classList.remove('piano-key-active','piano-key-active-pseudo');
  stopCorrespondOver(event);
});

function playAudio(src) {
  const audio = new Audio();
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
  audio.loop = false;
}

 function toggleFullScreen (){
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

fullscreen.addEventListener('click',toggleFullScreen);

const startSound = (event)=> {
  const note = event.target.dataset.note;
  const src = `assets/audio/${note}.mp3`;
  playAudio(src);
  event.target.classList.add('piano-key-active','piano-key-active-pseudo');
}

const stopSound = (event)=> {
  event.target.classList.remove('piano-key-active','piano-key-active-pseudo');
}

 function startCorrespondOver(event) {
  pianoContainer.forEach(el=>{
    el.addEventListener('mouseover', startSound);
    el.addEventListener('mouseout',stopSound);
  });   
}

 function stopCorrespondOver(event) {
  pianoContainer.forEach(el=>{
    el.removeEventListener('mouseover', startSound);
    el.removeEventListener('mouseout',stopSound);
  });   
}




