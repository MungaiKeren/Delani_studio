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
    $('img#img1').hover(function(){
        $('p#name1').show();
    }).mouseleave(function(){
        $('p#name1').hide();
    });
    event.preventDefault();
});
$(document).ready(function(){
    $('img#img2').hover(function(){
        $('p#name2').show();
    }).mouseleave(function(){
        $('p#name2').hide();
    });
    event.preventDefault();
});
$(document).ready(function(){
    $('img#img3').hover(function(){
        $('p#name3').show();
    }).mouseleave(function(){
        $('p#name3').hide();
    });
    event.preventDefault();
});
$(document).ready(function(){
    $('img#img4').hover(function(){
        $('p#name4').show();
    }).mouseleave(function(){
        $('p#name4').hide();
    });
    event.preventDefault();
});
$(document).ready(function(){
    $('img#img5').hover(function(){
        $('p#name5').show();
    }).mouseleave(function(){
        $('p#name5').hide();
    });
    event.preventDefault();
});
$(document).ready(function(){
    $('img#img6').hover(function(){
        $('p#name6').show();
    }).mouseleave(function(){
        $('p#name6').hide();
    });
    event.preventDefault();
});
$(document).ready(function(){
    $('img#img7').hover(function(){
        $('p#name7').show();
    }).mouseleave(function(){
        $('p#name7').hide();
    });
    event.preventDefault();
});
$(document).ready(function(){
    $('img#img8').hover(function(){
        $('p#name8').show();
    }).mouseleave(function(){
        $('p#name8').hide();
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