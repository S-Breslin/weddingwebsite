let viewport = document.querySelector("meta[name=viewport]");

const scriptURL = 'https://script.google.com/macros/s/AKfycbxPi-1b1-ohrTAOqg10ukBV_dhxc2_hj_bsCnrL4pTGzZOwy5v0SOcocnpu9sruqDHXrA/exec';
  const form = document.forms['rsvp'];
  let background = document.getElementById('rsvp');
  let formContent = document.getElementById('rsvp_content');
  let thanks = document.getElementById('thanks');
  let tl = gsap.timeline();
  

  const success = () => {
    background.style.backgroundImage = 'url("./images/Success-1.jpg")';

    if(window.innerWidth > '500') {
        background.style.backgroundSize = 'contain';
        console.log('large screen');

    } else {
        background.style.backgroundSize = 'cover';
        background.style.transform = 'scale(0.8)';        
    }

    formContent.style.display = 'none';
    form.style.display = 'none';    
    thanks.style.display = 'flex';
    console.log("Success");
    tl.from("#thank-you", {opacity: 0, ease:"none", duration: 2.5})
        .from("#thank-you", {text: "Thank you!", ease:"bounce", delay: 2, duration: 2.5});
  };


  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => success())
      .catch(error => console.error('Error!', error.message))
  });