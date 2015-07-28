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
    $("#clearProjectButton").click(function () {
        $("#productName").val("");
        $("#productInfo").val("");
    });
    $("#putProjectButton").click(function () {

        if ($(this).text() == "修改") {
            formAbled();
            $(this).text("提交");

        } else {
            if ($("#currentProductName").val() == "") {
                $("#currentProductName").focus();
                return;
            }
            if ($("#currentProductInfo").val() == "") {
                $("#currentProductInfo").focus();
                return;
            }

            var data = {
                "name": $("#currentProductName").val(),
                "info": $("#currentProductInfo").val(),
            }

            $.ajax({
                url: '/api/project/' + $("#productID").val(),
                type: 'PUT',
                data: data,
                success: function (result) {
                    alert(result.message);
                    if (!result.error) {
                        formDisabled();
                        updateProjectList();
                        $(this).text("修改");
                    }
                }
            });



        }

    });
    $("#deleteProjectButton").click(function () {
        $.ajax({
            url: '/api/project/' + $("#productID").val(),
            type: 'DELETE',
            success: function (result) {
                alert(result.message);
                updateProjectList();
                $("#infoPanel").show();
                $("#projectPanel").hide();
                $("#formPanel").hide();
            }
        });
    });
    $("#postProjectButton").click(function () {
        if ($("#productName").val() == "") {
            $("#productName").focus();
            return;
        }
        if ($("#productInfo").val() == "") {
            $("#productInfo").focus();
            return;
        }
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
                updateProjectList();
                $("#productName").val("");
                $("#productInfo").val("");
                $("#infoPanel").show();
                $("#projectPanel").hide();
                $("#formPanel").hide();
            }
        });
    });
});


var updateProjectList = function () {
    $.ajax({
        url: '/api/project',
        type: 'GET',
        success: function (result) {
            $("#projectUl").empty();

            for (var i = 0; i < result.length; i++) {
                var li = "<li><a class='projectLi' href='javascript:submitData();' data-projectID='" + result[i]._id + "'><i class='fa fa-file-text-o'></i>" + result[i].name + "</a></li>";
                $("#projectUl").append(li);
            }

            $(".projectLi").click(function () {
                updateProjectInfo($(this).attr("data-projectID"));
                $("#putProjectButton").text("修改");
                $("#infoPanel").hide();
                $("#projectPanel").show();
                $("#formPanel").hide();
            });

        }
    });
}

var updateProjectInfo = function (id) {
    $.ajax({
        url: '/api/project/' + id,
        type: 'GET',
        success: function (result) {
            $("#productID").val(result._id);
            $("#currentProductName").val(result.name);
            $("#currentProductInfo").val(result.info);
            $("#creater").val(result.creater);
            $("#owner").val(result.owner);
            $("#infoPanel").hide();
            $("#formPanel").hide();
            $("#projectPanel").show();
            formDisabled();

        }
    });
}

var formDisabled = function () {
    $("#currentProductName").attr("disabled", true);
    $("#currentProductInfo").attr("disabled", true);
    $("#creater").attr("disabled", true);
    $("#owner").attr("disabled", true);
}

var formAbled = function () {
    $("#currentProductName").attr("disabled", false);
    $("#currentProductInfo").attr("disabled", false);
}