var date = new Date().getFullYear();
document.getElementById('year').innerHTML = date;

$(document).ready(function loopToggle() {
  $('.spark').animate({ fontSize: '15' }, 2000);
  $('.spark').animate({ fontSize: '25' }, 2000, loopToggle);
});
