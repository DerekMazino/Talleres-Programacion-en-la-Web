let flag=0;
$(document).ready(function(){
    $("input[type=text]").hide();
    $("input[type=text]").prop("disabled", true)
    $("select").hide();
    $("select").prop("disabled", true)
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
        $("input#food_l1").prop("disabled", false);
        $("label#cal_l1").hide();
        $("input#cal_l1").show("swing");
        $("input#cal_l1").prop("disabled", false);
        $("label#gre_l1").hide();
        $("input#gre_l1").show("swing");
        $("input#gre_l1").prop("disabled", false);
        $("label#pro_l1").hide();
        $("input#pro_l1").show("swing");
        $("input#pro_l1").prop("disabled", false);
        $("label#car_l1").hide();
        $("input#car_l1").show("swing");
        $("input#car_l1").prop("disabled", false);
        $("#img1").hide();
        $("#select1").prop("disabled", false);
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
    $("#select2").prop("disabled", false);
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
    $("#select3").prop("disabled", false);
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
    $("#select4").prop("disabled", false);
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
    $("input[type=text]").prop("disabled", true);
    $("select").hide(500);
    $("select").prop("disabled", true);
    $("p").hide(500);
    $("#opc").hide(500);
    mostrarCampos();
    flag=0;
}
function mostrarCampos(){
    $("#img1").show();
    $("#img2").show();
    $("#img3").show();
    $("#img4").show();

    $("label#food_l1").show();
    $("label#cal_l1").show();
    $("label#gre_l1").show();
    $("label#pro_l1").show();
    $("label#car_l1").show();
    $("#img1").show();
    $("#edit_button1").show();
    
    $("label#food_l2").show();
    $("label#cal_l2").show();
    $("label#gre_l2").show();
    $("label#pro_l2").show();
    $("label#car_l2").show();
    $("#img2").show();
    $("#edit_button2").show();

    $("label#food_l3").show();
    $("label#cal_l3").show();
    $("label#gre_l3").show();
    $("label#pro_l3").show();
    $("label#car_l3").show();
    $("#img3").show();
    $("#edit_button3").show();

    $("label#food_l4").show();
    $("label#cal_l4").show();
    $("label#gre_l4").show();
    $("label#pro_l4").show();
    $("label#car_l4").show();
    $("#img4").show();
    $("#edit_button4").show();
}

