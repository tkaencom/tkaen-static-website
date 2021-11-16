const businessform = document.getElementById('business-form');
const buyerform = document.getElementById('buyer-form');
const subscribeEmail = document.getElementById('subscribe-form');

function toggleForm() {
  document.body.classList.toggle('activeForm');
}

function toggleForm1() {
  document.body.classList.toggle('activeForm1');
}

subscribeEmail.addEventListener('submit', (e) => {
  e.preventDefault();
  let data = new URLSearchParams();
  data.append('email', document.getElementById('detail-email').value);
  console.log(data);
  fetch(
    'https://tkaen-backend-services.0m1ktjk1g08g6.ap-south-1.cs.amazonlightsail.com/api/v1/users/email-form-post',
    {
      method: 'post',
      body: data
    }
  )
    .then((res) => {
      return res.text();
    })
    .then((text) => {
      console.log(text);
    })
    .catch((err) => {
      console.log(err);
    });
  return false;
});

businessform.addEventListener('submit', (e) => {
  e.preventDefault();
  let data = new URLSearchParams();
  data.append('name', document.getElementById('name').value);
  data.append('email', document.getElementById('email').value);
  data.append('type_of_business', document.getElementById('b-type').value);
  data.append('linkedin', document.getElementById('linkedin').value);
  data.append('comment', document.getElementById('message').value);

  fetch(
    'https://tkaen-backend-services.0m1ktjk1g08g6.ap-south-1.cs.amazonlightsail.com/api/v1/users/vender-form-post',
    {
      method: 'post',
      body: data
    }
  )
    .then((res) => {
      return res.text();
    })
    .then((text) => {
      console.log(text);
    })
    .catch((err) => {
      console.log(err);
    });
  return false;
});

buyerform.addEventListener('submit', (e) => {
  e.preventDefault();
  let data = new URLSearchParams();
  data.append('name', document.getElementById('fullname-buyer').value);
  data.append('email', document.getElementById('email-buyer').value);
  data.append('comment', document.getElementById('message-buyer').value);

  fetch(
    'https://tkaen-backend-services.0m1ktjk1g08g6.ap-south-1.cs.amazonlightsail.com/api/v1/users/buyer-form-post',
    {
      method: 'post',
      body: data
    }
  )
    .then((res) => {
      return res.text();
    })
    .then((text) => {
      console.log(text);
    })
    .catch((err) => {
      console.log(err);
    });
  return false;
});
