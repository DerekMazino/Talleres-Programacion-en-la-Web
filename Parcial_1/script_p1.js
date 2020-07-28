let flag=0;
$(document).ready(function(){
    $("input[type=text]").hide();
    $("select").hide();
    $("p").hide();
    $("#opc").hide();

    $("#edit_button1").click(fila1);
    $("#edit_button2").click(fila2);
    $("#edit_button3").click(fila3);
    $("#edit_button4").click(fila4);
    $("#ref").click(refClick);
});

function fila1 (){
    if(flag==0){
    $("label#food_l1").hide();
    $("input#food_l1").show("swing");
    $("label#cal_l1").hide();
    $("input#cal_l1").show("swing");
    $("label#gre_l1").hide();
    $("input#gre_l1").show("swing");
    $("label#pro_l1").hide();
    $("input#pro_l1").show("swing");
    $("label#car_l1").hide();
    $("input#car_l1").show("swing");
    $("#img1").hide();
    $("#select1").show("swing");
    $("#edit_button1").hide();
    $("#p1").show("swing");
    $("#opc").show("swing");
    flag=1;
    }
    else{
        alert("Solo puedes editar una fila a la vez");
    }   
}

function fila2 (){
    if(flag==0){
    $("label#food_l2").hide();
    $("input#food_l2").show("swing");
    $("label#cal_l2").hide();
    $("input#cal_l2").show("swing");
    $("label#gre_l2").hide();
    $("input#gre_l2").show("swing");
    $("label#pro_l2").hide();
    $("input#pro_l2").show("swing");
    $("label#car_l2").hide();
    $("input#car_l2").show("swing");
    $("#img2").hide();
    $("#select2").show("swing");
    $("#edit_button2").hide();
    $("#p2").show("swing");
    $("#opc").show("swing");
    flag=1;
    }
    else{
        alert("Solo puedes editar una fila a la vez");
    }    
}

function fila3 (){
    if(flag==0){
    $("label#food_l3").hide();
    $("input#food_l3").show("swing");
    $("label#cal_l3").hide();
    $("input#cal_l3").show("swing");
    $("label#gre_l3").hide();
    $("input#gre_l3").show("swing");
    $("label#pro_l3").hide();
    $("input#pro_l3").show("swing");
    $("label#car_l3").hide();
    $("input#car_l3").show("swing");
    $("#img3").hide();
    $("#select3").show("swing");
    $("#edit_button3").hide();
    $("#p3").show("swing");
    $("#opc").show("swing");
    flag=1;
    }
    else{
        alert("Solo puedes editar una fila a la vez");
    }    
}

function fila4 (){
    if(flag==0){
    $("label#food_l4").hide();
    $("input#food_l4").show("swing");
    $("label#cal_l4").hide();
    $("input#cal_l4").show("swing");
    $("label#gre_l4").hide();
    $("input#gre_l4").show("swing");
    $("label#pro_l4").hide();
    $("input#pro_l4").show("swing");
    $("label#car_l4").hide();
    $("input#car_l4").show("swing");
    $("#img4").hide();
    $("#select4").show("swing");
    $("#edit_button4").hide();
    $("#p4").show("swing");
    $("#opc").show("swing");
    flag=1;
    }
    else{
        alert("Solo puedes editar una fila a la vez");
    }    
}
function refClick(){
    $("input[type=text]").hide(500);
    $("select").hide(500);
    $("p").hide(500);
    $("#opc").hide(500);
    flag=0;
}
