  $( function() {
  	//Down Payment
    var handle = $( "#varry" );
    $( "#slider" ).slider({
      step: 1000,
      min: 0,
      max: 100000,
      create: function() {
        handle.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        handle.text( ui.value );
        handle.val( ui.value );
      }
    });
    //Interest
    var handle1 = $( "#int_label" );
    $( "#interest" ).slider({
      min: 5,
      max: 20,
      create: function() {
        handle1.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        handle1.text( ui.value );
        handle1.val( ui.value );
      }
    });
    //Years
    var handle2 = $( "#yrs_label" );
    $( "#years" ).slider({
      min: 0,
      max: 30,
      create: function() {
        handle2.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        handle2.text( ui.value );
        handle2.val( ui.value );
      }
    });
    //Calculate
    var property_value = $("#user_input").val(),
        down_payment = $("#varry").text(),
        interest = $( "#int_label" ).text(),
        yrs = $( "#yrs_label" ).text();
    
    //Detect and take user input
    $("#user_input").change(function det_user_input(){
          property_value = $("#user_input").val()
        }
      );
    //Detect and take DownPayment
    $( "#slider" ).on( "slide", function( event, ui ) {
          down_payment = $( "#varry" ).text()
        }
      );
    //Detect and take interest slider value
    $( "#interest" ).on( "slide", function( event, ui ) {
          interest = $( "#int_label" ).text()
        }
      );
    //Detect and take no of years
    $( "#years" ).on( "slide", function( event, ui ) {
          yrs = $( "#yrs_label" ).text()
        }
      );
    //Detect user's input down payment
    $("#varry").change(function det_down_payment(){
          down_payment = $("#varry").val();
          $("#slider").slider("value", parseInt(down_payment))
        }
      );
    //Detect user's input interest
    $("#int_label").change(function det_interest(){
          interest = $("#int_label").val();
          $("#interest").slider("value", parseInt(interest))
        }
      );
    //Detect user's input years
    $("#yrs_label").change(function det_years(){
          yrs = $("#yrs_label").val();
          $("#years").slider("value", parseInt(yrs))
        }
      );
    
    //Main Calculator
    $("#button").click(function gen(){
      var  m_i = interest/1200
      var  m_no = yrs*12
      var  mortage = property_value - down_payment

      var m_p = (mortage*Math.pow((1+m_i),m_no)*m_i)/(Math.pow((1+m_i),m_no)-1)


        $("#amount_monthly").text(m_p.toFixed(2));
      }
    )
  } );