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
// hover over the images
$(document).ready(function(){
    $('#img1').hover(function(){
        $('p#name1').show('slow');
    }).mouseleave(function(){
        $('p#name1').hide('slow');
    });
    event.preventDefault();
});
$(document).ready(function(){
    $('#img2').hover(function(){
        $('p#name2').show('slow');
    }).mouseleave(function(){
        $('p#name2').hide('slow');
    });
    event.preventDefault();
});
$(document).ready(function(){
    $('#img3').hover(function(){
        $('p#name3').show('slow');
    }).mouseleave(function(){
        $('p#name3').hide('slow');
    });
    event.preventDefault();
});
$(document).ready(function(){
    $('#img4').hover(function(){
        $('p#name4').show('slow');
    }).mouseleave(function(){
        $('p#name4').hide('slow');
    });
    event.preventDefault();
});
$(document).ready(function(){
    $('#img5').hover(function(){
        $('p#name5').show('slow');
    }).mouseleave(function(){
        $('p#name5').hide('slow');
    });
    event.preventDefault();
});
$(document).ready(function(){
    $('#img6').hover(function(){
        $('p#name6').show('slow');
    }).mouseleave(function(){
        $('p#name6').hide('slow');
    });
    event.preventDefault();
});
$(document).ready(function(){
    $('#img7').hover(function(){
        $('p#name7').show('slow');
    }).mouseleave(function(){
        $('p#name7').hide('slow');
    });
    event.preventDefault();
});
$(document).ready(function(){
    $('#img8').hover(function(){
        $('p#name8').show('slow');
    }).mouseleave(function(){
        $('p#name8').hide('slow');
    });
    event.preventDefault();
});
//on submission of the form, displays an alert message.
$(document).ready(function(){
    $('form').submit(function(){
        var name = $('input#name').val();
        var email = $('input#email').val();
        var text = $('textarea#textarea').val();
        if ($('input#name').val() && $('input#email').val() && $('textarea#textarea').val() !== ""){
            alert(name+", we have recieved your email. Thank you for responding to us.");
        } else {
            alert("Please enter your name and email.");
        }
    });
});