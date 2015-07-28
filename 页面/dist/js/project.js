var validate = function () {
    if ($("#productName").val() == "") {
        $("#productName").focus();
        return;
    }

    if ($("#productInfo").val() == "") {
        $("#productInfo").focus();
        $("#productInfo").val("-----");
        return;
    }
}

var clearForm = function () {
    $("#productName").val("");
    $("#productInfo").val("");
    return;
}

$(document).ready(function () {
    $("#createProject").click(function () {
        $("#infoPanel").hide();
        $("#formPanel").show();

    });
    $("#createProjectButton").click(function () {
        validate();
    });
    $("#clearProjectButton").click(function () {
        clearForm();
    });
});