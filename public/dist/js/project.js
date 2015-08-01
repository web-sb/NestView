$(document).ready(function () {
    updateProjectList();

    $("#createProject").click(function () {
        $("#infoPanel").hide();
        $("#projectPanel").hide();
        $("#formPanel").show();

    });
    $("#clearProjectButton").click(function () {
        $("#projectName").val("");
        $("#projectInfo").val("");
    });
    $("#putProjectButton").click(function () {

        if ($(this).text() == "修改") {
            formAbled();
            $(this).text("提交");

        } else {
            if ($("#currentProjectName").val() == "") {
                $("#currentProjectName").focus();
                return;
            }
            if ($("#currentProjectInfo").val() == "") {
                $("#currentProjectInfo").focus();
                return;
            }

            var data = {
                "name": $("#currentProjectName").val(),
                "info": $("#currentProjectInfo").val(),
            }

            $.ajax({
                url: '/api/project/' + $("#projectID").val(),
                type: 'PUT',
                data: data,
                success: function (result) {

                    if (!result.error) {
                        $("#putProjectButton").text("修改");
                        formDisabled();
                        updateProjectList();
                    }
                    alert(result.message);
                }
            });
        }

    });
    $("#deleteProjectButton").click(function () {
        $.ajax({
            url: '/api/project/' + $("#projectID").val(),
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
        if ($("#projectName").val() == "") {
            $("#projectName").focus();
            return;
        }
        if ($("#projectInfo").val() == "") {
            $("#projectInfo").focus();
            return;
        }
        var data = {
            "name": $("#projectName").val(),
            "info": $("#projectInfo").val()
        }

        $.ajax({
            url: '/api/project',
            type: 'POST',
            data: data,
            success: function (result) {
                alert(result.message);
                if (!result.error) {
                    updateProjectList();
                    $("#projectName").val("");
                    $("#projectInfo").val("");
                    $("#infoPanel").show();
                    $("#projectPanel").hide();
                    $("#formPanel").hide();
                }
            }
        });
    });
    $("#defaultProjectButton").click(function () {
        var data = {
            "projectID": $("#projectID").val()
        }
        $.ajax({
            url: '/api/user/myID/defaultProject/',
            type: 'PUT',
            data: data,
            success: function (result) {
                alert(result.message);
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
            $("#projectID").val(result._id);
            $("#currentProjectName").val(result.name);
            $("#currentProjectInfo").val(result.info);
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
    $("#currentProjectName").attr("disabled", true);
    $("#currentProjectInfo").attr("disabled", true);
    $("#creater").attr("disabled", true);
    $("#owner").attr("disabled", true);
}

var formAbled = function () {
    $("#currentProjectName").attr("disabled", false);
    $("#currentProjectInfo").attr("disabled", false);
}
