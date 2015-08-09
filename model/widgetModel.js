var mongoose = require('../server/mongo.js');
/****************************widget格式定义****************************/
//Line
var lineSchema = mongoose.Schema({
    config: {
        name: {
            type: String,
            default: "曲线图"
        },
        info: {
            type: String,
            default: "曲线图简介"
        },
        creator: {
            type: String,
            default: null
        },
        project: {
            type: String,
            default: null
        },
        dataSize: {
            type: Number,
            default: null
        }
    },
    option: {
        //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: {
            type: Boolean,
            default: true
        },

        //String - Colour of the grid lines
        scaleGridLineColor: {
            type: String,
            default: "rgba(0,0,0,.05)"
        },

        //Number - Width of the grid lines
        scaleGridLineWidth: {
            type: Number,
            default: 1
        },

        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: {
            type: Boolean,
            default: true
        },

        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: {
            type: Boolean,
            default: true
        },

        //Boolean - Whether the line is curved between points
        bezierCurve: {
            type: Boolean,
            default: true
        },

        //Number - Tension of the bezier curve between points
        bezierCurveTension: {
            type: Number,
            default: 0.4
        },

        //Boolean - Whether to show a dot for each point
        pointDot: {
            type: Boolean,
            default: true
        },

        //Number - Radius of each point dot in pixels
        pointDotRadius: {
            type: Number,
            default: 4
        },

        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth: {
            type: Number,
            default: 1
        },

        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius: {
            type: Number,
            default: 20
        },

        //Boolean - Whether to show a stroke for datasets
        datasetStroke: {
            type: Boolean,
            default: true
        },

        //Number - Pixel width of dataset stroke
        datasetStrokeWidth: {
            type: Number,
            default: 2
        },

        //Boolean - Whether to fill the dataset with a colour
        datasetFill: {
            type: Boolean,
            default: true
        },

        //String - A legend template
        legendTemplate: {
            type: String,
            default: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
        }
    },
    data: {
        labels: [{
            label: {
                type: String,
                default: null
            }
        }],
        datasets: [{
            label: {
                type: String,
                default: "数据项"
            },
            fillColor: {
                type: String,
                default: "rgba(220,220,220,0.2)"
            },
            strokeColor: {
                type: String,
                default: "rgba(220,220,220,1)"
            },
            pointColor: {
                type: String,
                default: "rgba(220,220,220,1)"
            },
            pointStrokeColor: {
                type: String,
                default: "#fff"
            },
            pointHighlightFill: {
                type: String,
                default: "#fff"
            },
            pointHighlightStroke: {
                type: String,
                default: "rgba(220,220,220,1)"
            },
            data: {
                type: Number,
                default: null
            }
        }]
    }
});
module.exports.Line = mongoose.model('line', lineSchema);
//Bar
var barSchema = mongoose.Schema({
    config: {
        name: {
            type: String,
            default: "柱状图"
        },
        info: {
            type: String,
            default: "柱状图简介"
        },
        width: {
            type: Number,
            default: 12
        },
        hight: {
            type: Number,
            default: 2
        },
        dataSize: {
            type: Number,
            default: null
        }
    },
    option: {
        //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
        scaleBeginAtZero: {
            type: Boolean,
            default: true
        },

        //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: {
            type: Boolean,
            default: true
        },

        //String - Colour of the grid lines
        scaleGridLineColor: {
            type: String,
            default: "rgba(0,0,0,.05)"
        },

        //Number - Width of the grid lines
        scaleGridLineWidth: {
            type: Number,
            default: 1
        },

        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: {
            type: Boolean,
            default: true
        },

        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: {
            type: Boolean,
            default: true
        },

        //Boolean - If there is a stroke on each bar
        barShowStroke: {
            type: Boolean,
            default: true
        },

        //Number - Pixel width of the bar stroke
        barStrokeWidth: {
            type: Number,
            default: 2
        },

        //Number - Spacing between each of the X value sets
        barValueSpacing: {
            type: Number,
            default: 5
        },

        //Number - Spacing between data sets within X values
        barDatasetSpacing: {
            type: Number,
            default: 1
        },

        //String - A legend template
        legendTemplate: {
            type: String,
            default: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
        }


    },
    datas: [{
        labels: {
            label: String
        },
        datasets: [{
            label: {
                type: String,
                default: "数据项"
            },
            fillColor: {
                type: String,
                default: "rgba(220,220,220,0.5)"
            },
            strokeColor: {
                type: String,
                default: "rgba(220,220,220,0.8)"
            },
            highlightFill: {
                type: String,
                default: "rgba(220,220,220,0.75)"
            },
            highlightStroke: {
                type: String,
                default: "rgba(220,220,220,1)"
            },
            data: {
                type: Number,
                default: null
            }
        }]
    }]
});
module.exports.Bar = mongoose.model('bar', barSchema);
//Radar
var radarSchema = mongoose.Schema({
    config: {
        name: {
            type: String,
            default: "雷达图"
        },
        info: {
            type: String,
            default: "雷达图简介"
        },
        width: {
            type: Number,
            default: 12
        },
        hight: {
            type: Number,
            default: 2
        },
        dataSize: {
            type: Number,
            default: null
        }
    },
    option: {
        //Boolean - Whether to show lines for each scale point
        scaleShowLine: {
            type: Boolean,
            default: true
        },

        //Boolean - Whether we show the angle lines out of the radar
        angleShowLineOut: {
            type: Boolean,
            default: true
        },

        //Boolean - Whether to show labels on the scale
        scaleShowLabels: {
            type: Boolean,
            default: false
        },

        // Boolean - Whether the scale should begin at zero
        scaleBeginAtZero: {
            type: Boolean,
            default: true
        },

        //String - Colour of the angle line
        angleLineColor: {
            type: String,
            default: "rgba(0,0,0,.1)",
        },

        //Number - Pixel width of the angle line
        angleLineWidth: {
            type: Number,
            default: 1
        },

        //String - Point label font declaration
        pointLabelFontFamily: {
            type: String,
            default: "'Arial'",
        },

        //String - Point label font weight
        pointLabelFontStyle: {
            type: String,
            default: "normal",
        },

        //Number - Point label font size in pixels
        pointLabelFontSize: {
            type: Number,
            default: 10
        },

        //String - Point label font colour
        pointLabelFontColor: {
            type: String,
            default: "#666",
        },

        //Boolean - Whether to show a dot for each point
        pointDot: {
            type: Boolean,
            default: true
        },

        //Number - Radius of each point dot in pixels
        pointDotRadius: {
            type: Number,
            default: 3
        },

        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth: {
            type: Number,
            default: 1
        },

        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius: {
            type: Number,
            default: 20
        },

        //Boolean - Whether to show a stroke for datasets
        datasetStroke: {
            type: Boolean,
            default: true
        },

        //Number - Pixel width of dataset stroke
        datasetStrokeWidth: {
            type: Number,
            default: 2
        },

        //Boolean - Whether to fill the dataset with a colour
        datasetFill: {
            type: Boolean,
            default: true
        },

        //String - A legend template
        legendTemplate: {
            type: String,
            default: "#666",
        },

    },
    datas: [{
        labels: {
            label: String
        },
        datasets: [{
            label: {
                type: String,
                default: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

            },
            fillColor: {
                type: String,
                default: "rgba(220,220,220,0.2)"
            },
            strokeColor: {
                type: String,
                default: "rgba(220,220,220,1)"
            },
            pointColor: {
                type: String,
                default: "rgba(220,220,220,1)"
            },
            pointStrokeColor: {
                type: String,
                default: "#fff"
            },
            pointHighlightFill: {
                type: String,
                default: "#fff"
            },
            pointHighlightStroke: {
                type: String,
                default: "rgba(220,220,220,1)"
            },
            data: {
                type: Number,
                default: null
            }
        }]
    }]
});
module.exports.Radar = mongoose.model('radar', radarSchema);
//Polar
var polarSchema = mongoose.Schema({
    config: {
        name: {
            type: String,
            default: "极地区域图"
        },
        info: {
            type: String,
            default: "极地区域图简介"
        },
        width: {
            type: Number,
            default: 12
        },
        hight: {
            type: Number,
            default: 2
        },
        dataSize: {
            type: Number,
            default: null
        }
    },
    option: {
        //Boolean - Show a backdrop to the scale label
        scaleShowLabelBackdrop: {
            type: Boolean,
            default: true
        },

        //String - The colour of the label backdrop
        scaleBackdropColor: {
            type: String,
            default: "rgba(255,255,255,0.75)"
        },

        // Boolean - Whether the scale should begin at zero
        scaleBeginAtZero: {
            type: Boolean,
            default: true
        },

        //Number - The backdrop padding above & below the label in pixels
        scaleBackdropPaddingY: {
            type: Number,
            default: 2
        },

        //Number - The backdrop padding to the side of the label in pixels
        scaleBackdropPaddingX: {
            type: Number,
            default: 2
        },

        //Boolean - Show line for each value in the scale
        scaleShowLine: {
            type: Boolean,
            default: true
        },

        //Boolean - Stroke a line around each segment in the chart
        segmentShowStroke: {
            type: Boolean,
            default: true
        },

        //String - The colour of the stroke on each segement.
        segmentStrokeColor: {
            type: String,
            default: "#fff"
        },

        //Number - The width of the stroke value in pixels
        segmentStrokeWidth: {
            type: Number,
            default: 2
        },

        //Number - Amount of animation steps
        animationSteps: {
            type: Number,
            default: 100
        },

        //String - Animation easing effect.
        animationEasing: {
            type: String,
            default: "easeOutBounce"
        },

        //Boolean - Whether to animate the rotation of the chart
        animateRotate: {
            type: Boolean,
            default: true
        },

        //Boolean - Whether to animate scaling the chart from the centre
        animateScale: {
            type: Boolean,
            default: false
        },

        //String - A legend template
        legendTemplate: {
            type: String,
            default: "< ul class = \"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

        }
    },
    datas: [{
        value: {
            type: Number,
            default: 300
        },
        color: {
            type: String,
            default: "#F7464A"
        },
        highlight: {
            type: String,
            default: "#FF5A5E"
        },
        label: {
            type: String,
            default: "数据项"
        }
    }]
});
module.exports.Polar = mongoose.model('polar', polarSchema);
//Pie
var pieSchema = mongoose.Schema({
    config: {
        name: {
            type: String,
            default: "饼图"
        },
        info: {
            type: String,
            default: "饼图简介"
        },
        width: {
            type: Number,
            default: 12
        },
        hight: {
            type: Number,
            default: 2
        },
        dataSize: {
            type: Number,
            default: null
        }
    },
    option: {
        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke: {
            type: Boolean,
            default: true
        },

        //String - The colour of each segment stroke
        segmentStrokeColor: {
            type: String,
            default: "#fff"
        },

        //Number - The width of each segment stroke
        segmentStrokeWidth: {
            type: Number,
            default: 2
        },

        //Number - The percentage of the chart that we cut out of the middle
        percentageInnerCutout: {
            type: Number,
            default: 50
        }, // This is 0 for Pie charts

        //Number - Amount of animation steps
        animationSteps: {
            type: Number,
            default: 100
        },

        //String - Animation easing effect
        animationEasing: {
            type: String,
            default: "easeOutBounce"
        },

        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate: {
            type: Boolean,
            default: true
        },

        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale: {
            type: Boolean,
            default: false
        },

        //String - A legend template
        legendTemplate: {
            type: String,
            default: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
        }
    },
    datas: [{
        value: {
            type: Number,
            default: 100
        },
        color: {
            type: String,
            default: "#F7464A"
        },
        highlight: {
            type: String,
            default: "#FF5A5E"
        },
        label: {
            type: String,
            default: "数据项"
        }
    }]
});
module.exports.Pie = mongoose.model('pie', pieSchema);
/****************************./widget格式定义****************************/
