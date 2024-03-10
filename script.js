//skills cards hover javascript
var divs = document.querySelectorAll('.content div');
divs.forEach(function (div) {
  div.addEventListener('mouseover', function () {
    var h3 = div.querySelector('h3');
    var p = div.querySelector('p');
    h3.style.display = 'block';
    p.style.display = 'block';
  });
  div.addEventListener('mouseout', function () {
    var h3 = div.querySelector('h3');
    var p = div.querySelector('p');
    h3.style.display = 'none';
    p.style.display = 'none';
  });
});

//navbar scroll function
window.addEventListener("scroll", function () {
  if (window.scrollY > 140) {
    document.querySelector("nav").classList.add("scrolled");
  } else {
    document.querySelector("nav").classList.remove("scrolled");
  }
});

  //data control and reset script//
  const data = document.getElementById('Myform');
  const btn = document.getElementById('submitbtn');
  data.addEventListener('submit', function(e){
    e.preventDefault();
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mobile').value;
    let text = document.getElementById('text').value;
    if (firstname == '' || lastname == '' || email == '' || mobile == '' || text == '') {
      document.getElementById('message').innerHTML = 'Please insert all information!';
      setTimeout(() => {
        document.getElementById('message').innerHTML = '';
      }, 1500)
    }
    else {
      const formdata = new FormData(e.target);
      let formobj = Object.fromEntries(formdata);
      // console.log(formobj);
      fetch('http://localhost:5000/home',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(formobj)
      })
      document.getElementById('message').innerHTML = 'Sent successfully';
      setTimeout(() => {
        document.getElementById('Myform').reset();
        document.getElementById('message').innerHTML = '';
        
      }, 2500);
    }
  })
// navbar responsive bar

  

  