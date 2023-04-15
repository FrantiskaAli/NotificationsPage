const read = $('#mark-as-read');
read.click(function(){
    $("section").removeClass("unread");
    $(".unread-dot").remove();
    $("#unread-count").text("0")
    
})