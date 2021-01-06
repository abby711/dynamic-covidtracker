$(document).ready(function(){
    $.get("https://api.covidindiatracker.com/total.json", function(result){
      console.log(result);
      var d=new Date();
      
      var date = d.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = d.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dd = date+' '+time;
      var confirmed1 = result.confirmed;
      var confirmed2 = result.cChanges;

      var death1 = result.deaths;
      var death2 = result.dChanges;

      var active1 = result.active;
      var active2 = result.aChanges;

      var recovered1 = result.recovered;
      var recovered2=result.rChanges;

      $("#update_date_time").text(dd);
      $("#confirmed1").text(confirmed1);
      $("#confirmed2").text(confirmed2);
      $("#death1").text(death1);
      $("#death2").text(death2);
      $("#active1").text(active1);
      $("#active2").text(active2);
      $("#recovered1").text(recovered1);
      $("#recovered2").text(recovered2);
      
      $('.count').each(function () {
    $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 1000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
      });
  });
     
     
    });


  

});
