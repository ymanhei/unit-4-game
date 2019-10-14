var characters = [{
    id: "captain",
    type: "avenger",
    Name: "Captain America",
    HP: 100,
    Att: 10,
    CAtt: 5
},

{
    id: "iron",
    type: "avenger",
    Name: "Ironman",
    HP: 100,
    Att: 10,
    CAtt: 5

},
{
    id: "thor",
    type: "avenger",
    Name: "Thor",
    HP: 100,
    Att: 10,
    CAtt: 5

},
{
    id: "hulk",
    type: "avenger",
    Name: "Hulk",
    HP: 100,
    Att: 10,
    CAtt: 5

},

{
    id: "thanos",
    type: "villain",
    Name: "Thanos",
    HP: 150,
    Att: 15,
    CAtt: 10
},
{
    id: "nebula",
    type: "villain",
    Name: "Nebula",
    HP: 150,
    Att: 15,
    CAtt: 10
},
{
    id: "ultron",
    type: "villain",
    Name: "Ultron",
    HP: 150,
    Att: 15,
    CAtt: 10
},
{
    id: "loki",
    type: "villain",
    Name: "Loki",
    HP: 150,
    Att: 15,
    CAtt: 10  
}
]



var a_ready = false;
var v_ready = false;
var currentaHP = 0;
var currentvHP = 0;
var currentAtt = 0;
var attnum = 0;
var selected_a = false;
var selected_v = false;
var locked_a = false;
var locked_v = false;


var avenger = "";
var villain = "";


$(document).ready(function(){



$(".avengers").click(function () {
    selected_a = true;
    if (locked_a == false) {
        $("#questionmark1").attr('src',$(this).attr('src'));
        $("#middle-a").html("<p>" + $(this).attr('alt') + "</p>");
        a_ready = true;
    
        if (v_ready === true) {
    
            $("#attackbtn").css("display","block");
        }
        avenger = $(this).attr('id');
    }
    
  })

  $(".villains").click(function () {
        selected_v = true;
      if (locked_v == false) {
        $("#questionmark2").attr('src',$(this).attr('src'));
        $("#middle-v").html("<p>" + $(this).attr('alt') + "</p>");
        
        v_ready = true;
    
        if (a_ready === true) {
            $("#attackbtn").css("display","block");    
        }
        villain = $(this).attr('id');

      }

  })

  $("#attackbtn").click(function () {
      if (selected_a == true && selected_v == true) {
        locked_a = true;
        locked_v = true;
        getresults (avenger,villain);

      }
    

  })

function searchcharacters (nameKey) {
    for (var i=0; i < characters.length; i++) {
        if (characters[i].id == nameKey) {
            return characters[i];
        }
    }
    

}  


function getresults (avenger,villain) {
    var a = searchcharacters(avenger);
    var v = searchcharacters(villain);
    

    if (attnum == 0) {
        currentvHP =v.HP;
        currentaHP = a.HP;
        currentAtt = a.Att;
    }
    
console.log(currentvHP);

    if (currentvHP > 0 && currentaHP > 0) {
        currentvHP = currentvHP - currentAtt;
        currentaHP = currentaHP - v.CAtt;
        currentAtt = currentAtt + a.Att;
        attnum++;

    $("#results").html(a.Name + "'s attack dealing " + currentAtt + " damages on " + v.Name + "<br>"+ v.Name + "'s attack dealing " + v.CAtt + " damages on " + a.Name +
    "<br>" + a.Name + "'s HP: " + currentaHP + "       " + v.Name + "'s HP: " + currentvHP);


    if (currentaHP < 0 || currentaHP == 0) {
        $("#win-loss").html("<br> Avengers LOSS!");

    }
    else if (currentvHP < 0 || currentvHP == 0) {
        $("#win-loss").html("<br> Avengers WIN!");
        $("#questionmark2").attr('src',"assets/images/questionmark.gif");
        selected_v = false;
        $('#'+v.id).hide();
        locked_v = false;
        attnum = 0;
        
    }
}
else {

}

}


});