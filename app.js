var w = {
    "chart": {
        type: 'pie'
    },
    title: {
        text: 'Распределение рынка браузеров, 2021'
      },
    
    "series": [
        {
            "data": [
                {
                    "name": "Chrome",
                    "y": 61.41
                },
                {
                    "name": "Internet Explorer",
                    "y": 11.84
                },
                {
                    "name": "Firefox",
                    "y": 10.85
                },
                {
                    "name": "Edge",
                    "y": 4.67
                },
                {
                    "name": "Safari",
                    "y": 4.18
                },
                {
                    "name": "Sogou Explorer",
                    "y": 1.64
                },
                {
                    "name": "Opera",
                    "y": 1.6
                },
                {
                    "name": "QQ",
                    "y": 1.2
                },
                {
                    "name": "Other",
                    "y": 2.61
                }
            ]
        }
    ],
    "legend": {
        "enabled": true,
        "width": "50%",
        "itemMarginTop": 3.5
    },
    "tooltip": {
        "style": {
            "fontFamily": "Open Sans",
            "fontSize": "12px"
        },
        pointFormat: '<span><b>{point.y:.2f}%</b><br/>'
    },
    "plotOptions": {
        "pie": {
            "dataLabels": {
                "enabled": false,
                "distance": 0
            },
            "size": "100%",
            "innerSize": null,
            "showInLegend": true,
            "animation": true
        }
    },
}

// Create the chart
Highcharts.chart('container', w);