$(document).ready(function(){$("#Clock").myplugin("#BtStart","#BtClear",false);var b=$("#Clock").data("myplugin");$(".NumberBtn TR TD").click(function(){b.EnterNumber($(this).html())});$("#BtClear").click(function(){b.ButtonClear();$("#BtStart").html("Start")});$("#BtStart").click(function(){var d=$("#Clock").html();if(d=="00:00:00"){return}var a=$(this).html();if(a=="Start"){b.ButtonStart()}else{if(a=="Pause"){b.ButtonPause()}else{b.ButtonContinue()}}})});