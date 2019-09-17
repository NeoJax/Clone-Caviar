$(document).ready(() => {
  $('a#hrsMdlClk').click(() => {
    $('#hoursModal').css('display', 'block');
  });
  $('#hoursModal').click((e) => {
    if (e.target.id === 'hoursModal') {
      $('#hoursModal').css('display', 'none');
    }
  });
  $('.menu').mouseover((e) => {
    // if (e.target.id === 'pop1') {
    //   $('#pop1.btn-overlay').hide();
    // }
    // if (e.target.id === 'pop2') {
    //   $('.btn-overlay').toggle();
    // }
    // if (e.target.id === 'pop3') {
    //   $('.btn-overlay').toggle();
    // }
    // if (e.target.id === 'pop4') {
    //   $('.btn-overlay').toggle();
    // }
    // if (e.target.id === 'sec1') {
    //   $('.btn-overlay').toggle();
    // }
    // if (e.target.id === 'sec2') {
    //   $('.btn-overlay').toggle();
    // }
    // if (e.target.id === 'sec3') {
    //   $('.btn-overlay').toggle();
    // }
  });
  $('.menu').click((e) => {
    if (e.target.id === 'pop1') {
      $('#menuModal').show();
      $('#pop1M').show();
    }
    if (e.target.id === 'pop2') {
      $('#menuModal').show();
      $('#pop2M').show();
    }
    if (e.target.id === 'pop3') {
      $('#menuModal').show();
      $('#pop3M').show();
    }
    if (e.target.id === 'pop4') {
      $('#menuModal').show();
      $('#pop4M').show();
    }
    if (e.target.id === 'sec1') {
      $('#menuModal').show();
      $('#sec1M').show();
    }
    if (e.target.id === 'sec2') {
      $('#menuModal').show();
      $('#sec2M').show();
    }
    if (e.target.id === 'sec3') {
      $('#menuModal').show();
      $('#sec3M').show();
    }
  });
  $('#menuModal').click((e) => {
    if (e.target.id === 'menuModal') {
      $('#menuModal').css('display', 'none');
      $('#pop1M').hide();
      $('#pop2M').hide();
      $('#pop3M').hide();
      $('#pop4M').hide();
      $('#sec1M').hide();
      $('#sec2M').hide();
      $('#sec3M').hide();
    }
  });
});
