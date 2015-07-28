//(function ($, AdminLTE) {
//    alert($("#123").hide());
//})(jQuery, $.AdminLTE);
$(document).ready(function () {
    updateProjectList();

    $("#createProject").click(function () {
        $("#infoPanel").hide();
        $("#projectPanel").hide();
        $("#formPanel").show();

    });

    $("#postProjectButton").click(function () {
        validate();
        data = {
            "name": $("#productName").val(),
            "info": $("#productInfo").val()
        }

        $.ajax({
            url: '/api/project',
            type: 'POST',
            data: data,
            success: function (result) {
                alert(result.message);
            }
        });
    });
});

var validate = function () {
    if ($("#productName").val() == "") {
        $("#productName").focus();
        return;
    }

    if ($("#productInfo").val() == "") {
        $("#productInfo").focus();
        return;
    }
}

var updateProjectList = function () {
    $.ajax({
        url: '/api/project',
        type: 'GET',
        success: function (result) {
            $("#projectUl").empty();

            for (var i = 0; i < result.length; i++) {
                var li = "<li><a id='projectLi' href='javascript:submitData();' data-projectID='" + result[i]._id + "'><i class='fa fa-file-text-o'></i>" + result[i].name + "</a></li>";
                $("#projectUl").append(li);
            }

            $("#projectLi").click(function () {
                updateProjectInfo($(this).attr("data-projectID"));
            });

        }
    });
}

var updateProjectInfo = function (id) {
    $.ajax({
        url: '/api/project:' + id,
        type: 'GET',
        success: function (result) {
            $("#infoPanel").hide();
            $("#formPanel").hide();
            $("#currentProductName").val();
            $("#currentProductInfo").val();

            $("#projectPanel").show();
        }
    });




}