const scriptURL = 'https://script.google.com/macros/s/AKfycbxPi-1b1-ohrTAOqg10ukBV_dhxc2_hj_bsCnrL4pTGzZOwy5v0SOcocnpu9sruqDHXrA/exec';
  const form = document.forms['rsvp'];
  let background = document.getElementById('rsvp');
  let formContent = document.getElementById('rsvp_content');
  let thanks = document.getElementById('thanks');

  const success = () => {
    background.style.backgroundImage = 'url("./images/Success-1.jpg")';
    background.style.backgroundSize = 'contain';
    formContent.style.display = 'none';
    form.style.display = 'none';    
    thanks.style.display = 'flex';
    console.log("Success")
  };


  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => success())
      .catch(error => console.error('Error!', error.message))
  });