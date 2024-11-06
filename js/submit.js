function validate() {
    var valid = true;
    $("#submit_btn").attr("disabled", true).css("border", "#FF0000 1px solid").css("background-color", "red");
    valid = checkName($("#name"));
    valid = valid && checkEmail($("#email"));
    valid = valid && checkContact($("#contact"));
    valid = valid && checkProject($("#project"));
    valid = valid && checkBudget($("#budget"));
    valid = valid && checkTimeline($("#timeline"));


    console.log(valid);

    if (valid) {
        console.log(valid);
        $("#submit_btn").attr("disabled", false).css("border", "#00b894 1px solid").css("background-color", "#5b4f96");
    }
    return valid;
}

function checkEmpty(obj) {
    if ($(obj).val() == "") {
        return false;
    }
    return true;
}

function checkName(obj) {
    var result = true;

    result = checkEmpty(obj);

    $(obj).css("border", "");
    $("#name_err").html("");
    if (!result) {
        $(obj).css("border", "#FF0000 1px solid");
        $("#name_err")
            .html("Required")
            .css("color", "red")
            .css("font-size", "13px");
        return false;
    }

    return true;
}

function checkEmail(obj) {
    var result = true;

    $("#email_err").html("");
    $(obj).css("border", "");
    result = checkEmpty(obj);

    if (!result) {
        $(obj).css("border", "#FF0000 1px solid");
        $("#email_err")
            .html("Required")
            .css("color", "red")
            .css("font-size", "13px");
        return false;
    }

    var email_regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,3})+$/;
    result = email_regex.test($(obj).val());

    if (!result) {
        $(obj).css("border", "#FF0000 1px solid");
        $("#email_err")
            .html("Invalid")
            .css("color", "red", "font-size", "5px");
        return false;
    }
    return result;
}

function checkContact(obj) {
    var result = true;

    result = checkEmpty(obj);

    $(obj).css("border", "");
    $("#contact_err").html("");
    if (!result) {
        $(obj).css("border", "#FF0000 1px solid");
        $("#contact_err")
            .html("Required")
            .css("color", "red")
            .css("font-size", "13px");
        return false;
    }

    return true;
}

function checkProject(obj) {
    var result = true;

    result = checkEmpty(obj);

    $(obj).css("border", "");
    $("#project_err").html("");
    if (!result) {
        $(obj).css("border", "#FF0000 1px solid");
        $("#project_err")
            .html("Required")
            .css("color", "red")
            .css("font-size", "13px");
        return false;
    }

    return true;
}

function checkBudget(obj) {
    var result = true;

    result = checkEmpty(obj);

    $(obj).css("border", "");
    $("#budget_err").html("");
    if (!result) {
        $(obj).css("border", "#FF0000 1px solid");
        $("#budget_err")
            .html("Required")
            .css("color", "red")
            .css("font-size", "13px");
        return false;
    }

    return true;
}


function checkTimeline(obj) {
    var result = true;

    result = checkEmpty(obj);

    $(obj).css("border", "");
    $("#timeline_err").html("");
    if (!result) {
        $(obj).css("border", "#FF0000 1px solid");
        $("#timeline_err")
            .html("Required")
            .css("color", "red")
            .css("font-size", "13px");
        return false;
    }

    return true;
}