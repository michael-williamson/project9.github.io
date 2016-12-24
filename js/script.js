$alertBarDiv = $("#alert-bar-div");
$alertBar = $("<div id='alert-bar'></div>");
$alertText = $("<p class='alert-text'><strong>Alert: </strong>Lorem ipsum dolor sit amet</p>");
$alertClose = $("<p class='alert-close-x' id='alert-close-x'>x</p>");
$alertLight = $("#alert-light");
$onOffSwitch = $("#on-off-switch");
$toggleButton = $("#toggle-button");


function appendAlertBar (){
    $alertBarDiv.append($alertBar).hide().fadeIn(50);
    $alertBar.append($alertText); 
    $alertBar.append($alertClose); 
}

appendAlertBar(); 

//closing the alert box by clicking [x]////

$alertClose.click(function(){
      $alertBar.css('display','none');
      $alertLight.css('visibility','hidden');
});

///////////////////////////////////////////

///////Submitting the form//////////////////

$sendButton = $("#send-button");
$searchBox = $("#search-box");
$textArea = $("#textarea-box");

$('form').submit(function(){
      var $userSearch = $searchBox.val();
      var $message = $textArea.val();

       if($userSearch === "" && $message === ""){
            $("#no-user-advisory").hide().show(); 
            $("#no-message-advisory").hide().show(); 
            return false;
        }
        else if($userSearch === ""){
            $("#no-user-advisory").hide().show(); 
            return false;
        }
        else if($message === "") {
            $("#no-message-advisory").hide().show(); 
            return false; 
        }
        else{
            alert("Message Sent!");
            return true; 
        }
});

/////////////////////////////////////////////

//////////select menu dropdown function////////
//
//$('#down-arrow').selectmenu('open');
//

































