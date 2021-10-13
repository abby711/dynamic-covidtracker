$(document).ready(function(){
    $.get("https://data.covid19india.org/data.json", function(result){
      console.log(result);
      
      var d=result.statewise[0].lastupdatedtime;
      var confirmed1 = result.statewise[0].confirmed;
      var confirmed2 = result.statewise[0].deltaconfirmed;

      var death1 = result.statewise[0].deaths;
      var death2 = result.statewise[0].deltadeaths;

      var active1 = result.statewise[0].active;
      //var active2 = result.statewise[5].delta;
      var active2=result.statewise[0].deltaconfirmed-active1;
      if (active2<0) active2=active2*-1;

      var recovered1 = result.statewise[0].recovered;
      var recovered2=result.statewise[0].deltarecovered;

      $("#update_date_time").text(d);
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
