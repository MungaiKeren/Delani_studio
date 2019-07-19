//on clicking the icons, displays the paragraph.
$(document).ready(function(){
    $('#design').click(function(){
        $('div#hide').show();
        $('#design').hide();
    });
    $('#dev').click(function(){
        $('div#hide1').show();
        $('#dev').hide();
    });
    $('#product').click(function(){
        $('div#hide2').show();
        $('#product').hide();
    });
    event.preventDefault();
});
//on clicking back the paragraphs, displays the icons again.
$(document).ready(function(){
    $('div#hide').click(function(){
        $('#design').show();
        $('div#hide').hide();
    });
    $('div#hide1').click(function(){
        $('#dev').show();
        $('div#hide1').hide();
    });
    $('div#hide2').click(function(){
        $('#product').show();
        $('div#hide2').hide();
    });
});
//on submission of the form, displays an alert message.
$(document).ready(function(){
    $('form').submit(function(){
        alert("we have recieve your message, thank you for reaching out to us.")
    });
});