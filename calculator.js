function insert(num) {
    $('#inputbox').val($('#inputbox').val() + num);
}
function clr() {
    $('#inputbox').val("");
}
function equal() {
    $('#inputbox').val(eval($("#inputbox").val()));
}
function del() {
    let Cvalue = $("#inputbox").val();
    $("#inputbox").val(Cvalue.substring(0, Cvalue.length - 1));
}
