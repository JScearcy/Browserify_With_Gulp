(function() {
  var $ = require('jquery');
  $(document).ready(function(){
    var clickerCounter = 0;
    $('.clicker').on('click', function(){

      clickerInc();

      $('.content').html('Clicked ' + clickerCounter + ' times!');

      function clickerInc(){
        return clickerCounter = clickerCounter + 1;
      }
    })
  });
})();
