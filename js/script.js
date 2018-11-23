// QUIZ
$("#tryagain").hide();

$("#tryagain").click(function () {
    $("input").val("");
    $("#gotest，#reset, img:not(.selected)").show();
    $("img.selected").removeClass("selected");
    $("#result,#tryagain").hide();
    $("#result1, #result2, #result3").empty().hide;
    $("img").removeClass("col-centered").addClass("fade-in");
    $("#gotest,#reset").show();
});


$(function () {
    $("#Apps > img").click(function () {

      if ($("#tryagain:hidden").length)
        $(this).toggleClass("selected");
    });


    $("#reset").click(function () {
        $("input").val("");
        $("img.selected").removeClass("selected");
    });



    $("#gotest").click(function () {
       
        if ($('img.selected').length == 0) {
        alert("Please select at least 1 image");
        return false;
    }


        var contacts = 0;
        var location = 0;
        var phonestor = 0;


        if ($("#Amazon").hasClass("selected")){
          contacts = contacts + 1;
          location = location + 1;
          phonestor = phonestor + 1;
    }
        
        if ($("#Facebook").hasClass("selected")){
          contacts = contacts + 1;
          location = location + 1;
          phonestor = phonestor + 1;
    }

        if ($("#Gmaps").hasClass("selected")){
          contacts = contacts + 1;
          location = location + 1;
          phonestor = phonestor + 1;
    }
        
        if ($("#Instagram").hasClass("selected")){
          contacts = contacts + 1;
          location = location + 1;
          phonestor = phonestor + 1;
    }

        if ($("#Kijiji").hasClass("selected")){
          location = location + 1;
          phonestor = phonestor + 1;
    }
        
        if ($("#Kindle").hasClass("selected")){
          phonestor = phonestor + 1;
    }

        if ($("#Pokemon").hasClass("selected")){
          location = location + 1;
          phonestor = phonestor + 1;
    }

        if ($("#Skype").hasClass("selected")){
          contacts = contacts + 1;
          location = location + 1;
          phonestor = phonestor + 1;
    }

        if ($("#Tinder").hasClass("selected")){
          location = location + 1;
          phonestor = phonestor + 1;
    }

        if ($("#Twitter").hasClass("selected")){
          contacts = contacts + 1;
          location = location + 1;
          phonestor = phonestor + 1;
    }

        if ($("#Uber").hasClass("selected")){
          contacts = contacts + 1;
          location = location + 1;
          phonestor = phonestor + 1;
    }
        
        if ($("#Whatsapp").hasClass("selected")){
          contacts = contacts + 1;
          location = location + 1;
          phonestor = phonestor + 1;
    }

        if ($("#Utube").hasClass("selected")){
          contacts = contacts + 1;
          location = location + 1;
          phonestor = phonestor + 1;
    }





    $("img:not(.selected)").hide();
    $("img.selected").toggleClass("col-centered");
    var r1 = $("<h3>").text(contacts + " of the app(s) can read your contacts");
    var r2 = $("<h3>").text(location + " of the app(s) have access to your location");
    var r3 = $("<h3>").text(phonestor + " of the app(s) have access to your phone storage");
    $("#result1").empty().append(r1).show().toggleClass("fade-in");
    $("#result2").empty().append(r2).show().toggleClass("fade-in");
    $("#result3").empty().append(r3).show().toggleClass("fade-in");
    $("#gotest").hide();
    $("#reset").hide();
    $("img.selected").removeClass("selected").toggleClass("fade-in");
    $("#tryagain").show();


    });
});






