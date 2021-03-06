$(document).ready(function(){
  $("#send-button").attr("disabled",true);
  $("#text-input").attr("disabled",true);

  now.receivePrevMessage = function(messages){
         $("#messages").append(messages);
         $("#messages").append("<br><span class='badge'>Previous chats loaded</span>");
  }
  now.receiveUserList = function(ul){
  var head='<span>User List</span>';
         //$("#user_list").append(head);
         $("#user_list").append(ul);
  }

  now.receiveMessage = function(prename, message,color){
     var sys_time = new Date();
     var ognoo = sys_time.getHours()+':'+sys_time.getMinutes()+':'+sys_time.getSeconds();
     var name = ognoo+'   '+prename;
     if(color==7){//System
         $("#messages").append("<br><span class='badge badge-warning'>" + name + message+"</span>");
         now.updatePrevMessages("<br><span class='badge badge-warning'>" + name + message+"</span>");
     }else
     if(color==-1)//Private
         $("#messages").append("<br><span class='badge badge-info'>" + name + ": "+ message+"</span>");
     else if(color==1){//Public
         $("#messages").append("<br>" + name + ": " + message+"</span>");
         now.updatePrevMessages("<br>" + name + ": " + message+"</span>");
     }
     else if(color==0)//Green
         $("#messages").append("<br><span class='badge badge-success'>" + name + ": "+ message+"");
  }

  now.countUsers = function(counter){
    $("#send-button").removeAttr("disabled");
    $("#text-input").removeAttr("disabled");
    $("#start-button").attr("disabled",true);
    $("#start-button").val('Online Users:' +counter);
  }

  $("#send-button").click(function(){
    if($('#autocomplete').val()=='To whom? it is public as default')
      $('#autocomplete').val("");
    now.distributeMessage($('#autocomplete').val(),$("#text-input").val());
    $("#text-input").val("");
  });

  $("#start-button").click(function(){
    $("#send-button").removeAttr("disabled");
    $("#text-input").removeAttr("disabled");
    $("#start-button").val('Chat started');
    $("#start-button").attr("disabled",true);
    now.startChat();    
  });

  $("#log_out").click(function(){
    console.log('logout clicked');
   window.location.href='/logout';
   window.location.replace('/logout');
  });
	
//Autocomplete

	$('#autocomplete').keyup(function autocomplete(event) {
		//checking if the delete key was pressed
		if(event.which == 8) {
			event.preventDefault();
			return;
		} 
  		console.log('keyup -> getGuess');
		now.getGuess($('#autocomplete').val());
	});

now.receiveGuess = function(guess) {
	var val = $('#autocomplete').val();
//	var	subGuess = guess.substring(val.length);
  if(guess) {
    console.log('receiveGuess -> value %s',guess);
    $('#autocomplete').val(val + guess);
    $('#autocomplete')[0].selectionStart = val.length;
    $('#autocomplete')[0].selectionEnd = guess.length + val.length;
  }
};
//DefaultText for inputs
$(".defaultText").focus(function(srcc)
    {
        if ($(this).val() == $(this)[0].title)
        {
            $(this).removeClass("defaultTextActive");
            $(this).val("");
        }
    });
    
    $(".defaultText").blur(function()
    {
        if ($(this).val() == "")
        {
            $(this).addClass("defaultTextActive");
            $(this).val($(this)[0].title);
        }
    });
    
    $(".defaultText").blur();       

//  now.prevmsgs = $("#messages").val();
//  alert(now.name);
  setTimeout(function(){
      console.log(this.now.name);
  }, 500) 
});

