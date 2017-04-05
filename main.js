  $( function() {
  	//Calculator
  	var no_yrs = 0;
  	var inter_rate = 5;
  	function calculate(){
  		var prod = no_yrs * inter_rate;
  		$("#amount_monthly").val(prod);
  	}
  	//Down Payment
    var handle = $( "#varry" );
    $( "#slider" ).slider({
      min: 0,
      max: 1000,
      create: function() {
        handle.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        handle.text( ui.value );
      }
    });
    //Interest
    var handle1 = $( "#int_label" );
    $( "#interest" ).slider({
      min: 5,
      max: 13,
      create: function() {
        handle1.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        handle1.text( ui.value );
      }
    });
    //Years
    var handle2 = $( "#yrs_label" );
    $( "#years" ).slider({
      min: 0,
      max: 20,
      create: function() {
        handle2.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        handle2.text( ui.value );
      }
    });
    //Amount Monthly
    
  } );
