const businessform = document.getElementById('business-form');
const buyerform = document.getElementById('buyer-form');
const subscribeEmail = document.getElementById('subscribe-form');

const successPopupSubscribing = document.getElementById('success-popup-subscribing');
const successPopupContactUs = document.getElementById('success-popup-contact-us');
const PopupFailure = document.getElementById('popup-failure');

function toggleForm() {
  document.body.classList.toggle('activeForm');
}

function toggleForm1() {
  document.body.classList.toggle('activeForm1');
}

function failurePopup() {
  PopupFailure.classList.remove('in-active');
  setTimeout(() => {
    PopupFailure.classList.add('in-active');
  }, 3000);
}

subscribeEmail.addEventListener('submit', (e) => {
  e.preventDefault();
  let data = new URLSearchParams();
  data.append('email', document.getElementById('detail-email').value);
  fetch(
      'https://tkaen-backend-services.0m1ktjk1g08g6.ap-south-1.cs.amazonlightsail.com/api/v1/users/email-form-post', {
        method: 'post',
        body: data
      }
    )
    .then((res) => {
      if (res.status === 200) {
        successPopupSubscribing.classList.remove('in-active');
        setTimeout(() => {
          successPopupSubscribing.classList.add('in-active');
        }, 3000);
      } else {
        failurePopup()
      }
      document.getElementById('detail-email').value = '';
    })
    .catch((err) => {
      console.log(err);
      failurePopup()
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
      'https://tkaen-backend-services.0m1ktjk1g08g6.ap-south-1.cs.amazonlightsail.com/api/v1/users/vender-form-post', {
        method: 'post',
        body: data
      }
    )
    .then((res) => {
      if (res.status === 200) {
        successPopupContactUs.classList.remove('in-active');
        setTimeout(() => {
          successPopupContactUs.classList.add('in-active');
        }, 3000);
      } else {
        failurePopup()
      }
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('b-type').value = '';
      document.getElementById('linkedin').value = '';
      document.getElementById('message').value = '';
    })
    .catch((err) => {
      console.log(err);
      failurePopup()
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
      'https://tkaen-backend-services.0m1ktjk1g08g6.ap-south-1.cs.amazonlightsail.com/api/v1/users/buyer-form-post', {
        method: 'post',
        body: data
      }
    )
    .then((res) => {
      if (res.status === 200) {
        successPopupContactUs.classList.remove('in-active');
        setTimeout(() => {
          successPopupContactUs.classList.add('in-active');
        }, 3000);
      } else {
        failurePopup()
      }
      document.getElementById('fullname-buyer').value = '';
      document.getElementById('email-buyer').value = '';
      document.getElementById('message-buyer').value = '';
    })
    .catch((err) => {
      console.log(err);
      failurePopup()
    });
  return false;
});
