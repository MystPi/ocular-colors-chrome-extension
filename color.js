const image = document.querySelector('div.avatar img');
const username = window.location.pathname.split('/')[2];


if (username) {
  fetch('https://my-ocular.jeffalo.net/api/user/' + username)
    .then(res => res.json())
    .then(res => {
      image.style.boxSizing = 'border-box';
      image.style.border = '4px solid ' + res.color;
    });
}