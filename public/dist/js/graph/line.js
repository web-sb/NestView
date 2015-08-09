//加载入口
$(document).ready(function () {

    updateLineList();
    $(".select2").select2();
    //iCheck for checkbox and radio inputs
    $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
        checkboxClass: 'icheckbox_minimal-blue',
        radioClass: 'iradio_minimal-blue'
    });
    //Red color scheme for iCheck
    $('input[type="checkbox"].minimal-red, input[type="radio"].minimal-red').iCheck({
        checkboxClass: 'icheckbox_minimal-red',
        radioClass: 'iradio_minimal-red'
    });
    //Flat red color scheme for iCheck
    $('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
        checkboxClass: 'icheckbox_flat-green',
        radioClass: 'iradio_flat-green'
    });
    $(".my-colorpicker1").colorpicker();
    $(".my-colorpicker2").colorpicker({
        format: "rgba"
    });

    $("#createButton").click(createButton);
    $("#saveButton").click(saveButton);
    $("#undoButton").click(undoButton);

    $("#dataAddButton").click(dataAddButton);
    $("#dataDeleteButton").click(dataDeleteButton);
    $("#dataSaveButton").click(dataSaveButton);

    $("#datasets").change(function () {
        updateDataForm($(this).children('option:selected').data("index"));
    });



});

var checked = function (bool) {
    if (bool) return "check";
    else return "uncheck";
}

//页面数据项
var tempDatas = [];
var tempLabels = [];

//设置数据
var setDatas = function (datas) {
    tempDatas = [];
    for (var i in datas) {
        tempDatas.push(datas[i]);
    }
    //tempDatas.labels;
    updateDatas();

}

//更新数据列表
var updateDatas = function () {
    $("#datasets").empty();
    for (var i in tempDatas) {
        var opt = "<option data-index='" + i + "'>" + tempDatas[i].label + "</option>";
        $("#datasets").append(opt);
    }
}

//更新数据表单
var updateDataForm = function (index) {
    $("#label").val(tempDatas[index].label);
    $("#fillColor").val(tempDatas[index].fillColor);
    $("#strokeColor").val(tempDatas[index].strokeColor);
    //$("#data").val(tempDatas[index].data);
    $("#pointColor").val(tempDatas[index].pointColor);
    $("#pointStrokeColor").val(tempDatas[index].pointStrokeColor);
    $("#pointHighlightFill").val(tempDatas[index].pointHighlightFill);
    $("#pointHighlightStroke").val(tempDatas[index].pointHighlightStroke);
}

//清空数据表单
var clearDataForm = function (index) {
    $("#label").val("");
    $("#fillColor").val("");
    $("#strokeColor").val("");
    //$("#data").val(tempDatas[index].data);
    $("#pointColor").val("");
    $("#pointStrokeColor").val("");
    $("#pointHighlightFill").val("");
    $("#pointHighlightStroke").val("");
}



//添加数据按钮
var dataAddButton = function () {
    var data = {
        "label": "数据项",
        "fillColor": "rgba(220,220,220,0.2)",
        "strokeColor": "rgba(220,220,220,1)",
        "pointColor": "rgba(220,220,220,1)",
        "pointStrokeColor": "#fff",
        "pointHighlightFill": "#fff",
        "pointHighlightStroke": "rgba(220,220,220,1)",
        "data": null
    }
    tempDatas.push(data);
    updateDataForm(tempDatas.length - 1);
    updateDatas();
}
var dataDeleteButton = function () {
    tempDatas.splice($(this).data("index"), 1);
    clearDataForm();
    updateDatas();
}
var dataSaveButton = function () {
    var index = $("#datasets").children('option:selected').data("index");
    tempDatas[index].label = $("#label").val();
    tempDatas[index].fillColor = $("#fillColor").val();
    tempDatas[index].strokeColor = $("#strokeColor").val();
    tempDatas[index].pointColor = $("#pointColor").val();
    tempDatas[index].pointStrokeColor = $("#pointStrokeColor").val();
    tempDatas[index].pointHighlightFill = $("#pointHighlightFill").val();
    tempDatas[index].pointHighlightStroke = $("#pointHighlightStroke").val();
    //tempDatas[index].data = $("#data").val();
    updateDatas();

}


//更新表单
var setForm = function (form) {
    $("#name").val(form.config.name);
    $("#id").val(form._id);
    $("#info").val(form.config.info);

    $("#scaleShowGridLines").iCheck(checked(form.option.scaleShowGridLines));
    $("#scaleGridLineColor").val(form.option.scaleGridLineColor);

    $("#scaleGridLineWidth").val(form.option.scaleGridLineWidth);
    $("#bezierCurve").iCheck(checked(form.option.bezierCurve));
    $("#bezierCurveTension").val(form.option.bezierCurveTension);
    $("#scaleShowHorizontalLines").iCheck(checked(form.option.scaleShowHorizontalLines));
    $("#scaleShowVerticalLines").iCheck(checked(form.option.scaleShowVerticalLines));

    $("#datasetStroke").iCheck(checked(form.option.datasetStroke));
    $("#datasetStrokeWidth").val(form.option.datasetStrokeWidth);
    $("#datasetFill").iCheck(checked(form.option.datasetFill));

    $("#pointDot").iCheck(checked(form.option.pointDot));
    $("#pointDotRadius").val(form.option.pointDotRadius);
    $("#pointDotStrokeWidth").val(form.option.pointDotStrokeWidth);
    $("#pointHitDetectionRadius").val(form.option.pointHitDetectionRadius);

    setDatas(form.data.datasets);

}

//清空表单
var clearForm = function () {
    $("#name").val("");
    $("#id").val("");
    $("#info").val("");

    $("#scaleShowGridLines").iCheck(checked(false));
    $("#scaleGridLineColor").val("");

    $("#scaleGridLineWidth").val("");
    $("#bezierCurve").iCheck(checked(false));
    $("#bezierCurveTension").val("");
    $("#scaleShowHorizontalLines").iCheck(checked(false));
    $("#scaleShowVerticalLines").iCheck(checked(false));

    $("#datasetStroke").iCheck(checked(false));
    $("#datasetStrokeWidth").val("");
    $("#datasetFill").iCheck(checked(false));

    $("#pointDot").iCheck(checked(false));
    $("#pointDotRadius").val("");
    $("#pointDotStrokeWidth").val("");
    $("#pointHitDetectionRadius").val("");

    setDatas([]);

}



//新建按钮
var createButton = function () {
    var data = {
        action: "create"
    }
    $.ajax({
        url: '/api/widget/line',
        type: 'POST',
        data: data,
        success: function (result) {
            alert(result.message);
            if (!result.error) {
                setForm(result.line);
                updateLineList();
            }
        }
    });
}

//保存表单
var saveButton = function () {
    $.ajax({
        url: '/api/widget/line/' + $("#id").val(),
        type: 'GET',
        dataType: "json",
        contentType: "application/json",
        success: function (result) {
            var line = {
                "_id": $("#id").val(),

                "config": {
                    "name": $("#name").val(),
                    "info": $("#info").val()
                },
                "option": {
                    "scaleShowGridLines": $("#scaleShowGridLines").is(':checked'),
                    "scaleGridLineColor": $("#scaleGridLineColor").val(),
                    "scaleGridLineWidth": $("#scaleGridLineWidth").val(),
                    "bezierCurve": $("#bezierCurve").is(':checked'),
                    "bezierCurveTension": $("#bezierCurveTension").val(),
                    "scaleShowHorizontalLines": $("#scaleShowHorizontalLines").is(':checked'),
                    "scaleShowVerticalLines": $("#scaleShowVerticalLines").is(':checked'),
                    "datasetStroke": $("#datasetStroke").is(':checked'),
                    "datasetStrokeWidth": $("#datasetStrokeWidth").val(),
                    "datasetFill": $("#datasetFill").is(':checked'),
                    "pointDot": $("#pointDot").is(':checked'),
                    "pointDotRadius": $("#pointDotRadius").val(),
                    "pointDotStrokeWidth": $("#pointDotStrokeWidth").val(),
                    "pointHitDetectionRadius": $("#pointHitDetectionRadius").val()
                },
                "data": {
                    //labels: labels,
                    datasets: tempDatas
                }
            }

            $.ajax({
                url: '/api/widget/line/' + line._id,
                type: 'PUT',
                dataType: "json",
                contentType: "application/json",
                data: JSON.stringify(line),
                success: function (result) {
                    alert(result.message);
                    updateLineList();
                }
            });
        }
    });
}

//撤销按钮
var undoButton = function () {
    if ($("#id").val() === "") {
        alert("请先创建或选择一个组件！");
        return;
    }
    $.ajax({
        url: '/api/widget/line/' + $("#id").val(),
        type: 'GET',
        success: function (result) {
            setForm(result);
        }
    });
}

//line 修改按钮
var modefyButton = function () {
    $.ajax({
        url: '/api/widget/line/' + $(this).parents("ul").data("id"),
        type: 'GET',
        success: function (result) {
            clearDataForm();
            setForm(result);
        }
    });
}

//line 复制按钮
var copyButton = function () {
    var data = {
        action: "copy",
        lineTemplateId: $(this).parents("ul").data("id")
    }
    $.ajax({
        url: '/api/widget/line',
        type: 'POST',
        data: data,
        success: function (result) {
            alert(result.message);
            if (!result.error) {
                setForm(result.line);
                updateLineList();
                clearDataForm();
                setForm(result);
            }
        }
    });
}

//line 删除按钮
var deleteButton = function () {
    $.ajax({
        url: '/api/widget/line/' + $(this).parents("ul").data("id"),
        type: 'DELETE',
        success: function (result) {
            clearForm();
            setDatas([]);
            updateDatas();
            clearDataForm();
            alert(result.message);
            updateLineList();
        }
    });
}

//line 更新Line清单
var updateLineList = function () {
    $.ajax({
        url: '/api/widget/line',
        type: 'GET',
        success: function (result) {

            $("tbody#lineList").empty();
            var thead = "<tr class='hidden'><th style='width: 100px'>名称</th><th>描述</th><th style='width:200px'>功能</th>";
            $("tbody#lineList").append(thead);


            for (var i = 0; i < result.length; i++) {

                var line = "<tr class='line'><td>" + result[i].config.name + "</td><td>" + result[i].config.info + "</td><td>" + "<ul class='pagination pagination-sm no-margin pull-right' data-id='" + result[i]._id + "'>" + "<li><a  class='modefyButton' href='#'> 修改 </a></li>" + "<li><a class='copyButton' href='#'> 复制 </a></li>" + "<li><a class='deleteButton' href='#'> 删除 </a></li>" + "</ul></td></tr>"
                $("tbody#lineList").append(line);
            }

            $(".modefyButton").click(modefyButton);
            $(".copyButton").click(copyButton);
            $(".deleteButton").click(deleteButton);

        }
    });
}
