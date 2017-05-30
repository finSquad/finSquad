    var chartPointArray = [];
    var BTCprice = 0;
    var USDprice = 0;

    $(document).ready(function() {
        var defaultView = true;

        function get_tblcurrency() {
            $.get("/tblcurrency", function(data) {
                // Grabbing data from out database
                // console.log(data)
                createChartPoints(data);
                // Updates the graph in real time so long as we are on the default viewing
                if (defaultView === true) {
                    google.charts.load('current', {
                        packages: ['corechart', 'line']
                    });
                    google.charts.setOnLoadCallback(drawLogScales);
                }
            });
        }
        get_tblcurrency();
        setInterval(get_tblcurrency, 10000)
            //  A feature that updates the graph in real time

        function createChartPoints(data) {
            chartPointArray = [];
            // Formating that data into something Google Material Chart will understand...
            for (i = 0; i < data.length; i++) {
                var dbTime = data[i].moment_tstamp.split("+");
                var date = dbTime[0].split("-");
                var time = dbTime[1].split(":");
                var timeArray = date.concat(time);
                var chartPoint = {
                    time: timeArray,
                    price: data[i].USDprice
                };
                // ...and pusing it into an array...
                chartPointArray.push(chartPoint)
            }
            // We can see our array of new chart Points
            // console.log(chartPointArray)
        }
        // ************************************************************************************
        // Might need these lines of code 
        // ************************************************************************************
        // google.charts.load('current', {
        //     packages: ['corechart', 'line']
        // });
        // google.charts.setOnLoadCallback(drawLogScales);
        // ************************************************************************************
        // END
        // ************************************************************************************


        function drawLogScales() {
            var data = new google.visualization.DataTable();
            data.addColumn('datetime', 'Date');
            data.addColumn('number', 'BTC/USD');

            // We are taking those chart points and turning them into a format that Google's Material Chart can understand in order
            // to turn into rows
            for (i = 0; i < chartPointArray.length; i++) {
                var newPoint = chartPointArray[i];
                data.addRows([
                    [new Date(newPoint.time[0], newPoint.time[1] - 1, newPoint.time[2], newPoint.time[3], newPoint.time[4]), newPoint.price]
                ])
            }
            // ************************************************************************************
            // VARIABLES FOR GRAPH SCALING
            // ************************************************************************************
            var now = moment().format("YYYY-MM-DD+HH:mm:ss");
            var nowArray = formatTime(now);
            var then = moment().subtract(1, "Hours").format("YYYY-MM-DD+HH:mm:ss");
            var maxDate = new Date(nowArray[0], nowArray[1] - 1, nowArray[2], nowArray[3], nowArray[4]);
            var thenArray = formatTime(then);
            // ************************************************************************************
            // DEFAULT GRAPH SCALE
            // ************************************************************************************
            var options = {
                hAxis: {
                    title: 'Time (Last Hour)',
                    logScale: false,
                    format: "hh:mma",
                    viewWindow: {
                        min: new Date(thenArray[0], thenArray[1] - 1, thenArray[2], thenArray[3], thenArray[4]),
                        max: maxDate
                    }
                },
                vAxis: {
                    title: 'Price (USD)',
                    logScale: true,
                    format: "currency"
                },
                colors: ['#30d138']
            };

            var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
            chart.draw(data, options)
                // ************************************************************************************
                // This function updates the chart when clicking a certain timespan
                // ************************************************************************************

            $("input").click(function() {

                var now = moment().format("YYYY-MM-DD+HH:mm:ss");
                var nowArray = formatTime(now);
                var maxDate = new Date(nowArray[0], nowArray[1] - 1, nowArray[2], nowArray[3], nowArray[4]);
                var selected = $(this).attr("value");

                switch (selected) {
                    case "1 Hour":
                        var then = moment().subtract(1, "Hour").format("YYYY-MM-DD+HH:mm:ss");
                        var timeArray = formatTime(then);
                        options.hAxis.format = "hh:mma";
                        options.hAxis.title = "Time (Last Hour)";
                        createTable(options, timeArray, maxDate, chart, data);
                        defaultView = true;
                        break;
                    case "3 Hours":
                        var then = moment().subtract(3, "Hours").format("YYYY-MM-DD+HH:mm:ss");
                        var timeArray = formatTime(then);
                        options.hAxis.format = "hh:mma";
                        options.hAxis.title = "Time (Last 3 Hours)";
                        createTable(options, timeArray, maxDate, chart, data);
                        defaultView = false;
                        break;
                    case "1 Day":
                        var then = moment().subtract(1, "Days").format("YYYY-MM-DD+HH:mm:ss");
                        var timeArray = formatTime(then);
                        options.hAxis.format = "MMM-d hha";
                        options.hAxis.title = "Time (Last Day)";
                        createTable(options, timeArray, maxDate, chart, data);
                        break;
                    case "1 Week":
                        var then = moment().subtract(1, "Weeks").format("YYYY-MM-DD+HH:mm:ss");
                        var timeArray = formatTime(then);
                        options.hAxis.format = "MMM-d";
                        options.hAxis.title = "Time (Last Week)";
                        createTable(options, timeArray, maxDate, chart, data);
                        break;
                    case "1 Month":
                        var then = moment().subtract(1, "Months").format("YYYY-MM-DD+HH:mm:ss");
                        var timeArray = formatTime(then);
                        options.hAxis.format = "MMM-d";
                        options.hAxis.title = "Time (Last Month)";
                        createTable(options, timeArray, maxDate, chart, data);
                        break;
                    case "3 Months":
                        var then = moment().subtract(3, "Months").format("YYYY-MM-DD+HH:mm:ss");
                        var timeArray = formatTime(then);
                        options.hAxis.format = "MMM-d yyyy";
                        options.hAxis.title = "Time (Last 3 Months)";
                        createTable(options, timeArray, maxDate, chart, data);
                        break;
                    case "6 Months":
                        var then = moment().subtract(6, "Months").format("YYYY-MM-DD+HH:mm:ss");
                        var timeArray = formatTime(then);
                        options.hAxis.format = "MMM yyyy";
                        options.hAxis.title = "Time (Last 6 Months)";
                        createTable(options, timeArray, maxDate, chart, data);
                        break;
                    case "1 Year":
                        var then = moment().subtract(1, "Years").format("YYYY-MM-DD+HH:mm:ss");
                        var timeArray = formatTime(then);
                        options.hAxis.format = "MMM yyyy";
                        options.hAxis.title = "Time (Last Year)";
                        createTable(options, timeArray, maxDate, chart, data);
                        break;
                }
            })
        }
        // ************************************************************************************
        // Formating the time into a format that Google Material Charts can understand
        // ************************************************************************************
        function formatTime(thenTime) {
            var dbTime = thenTime.split("+");
            var date = dbTime[0].split("-");
            var time = dbTime[1].split(":");
            var timeArray = date.concat(time);
            // console.log(timeArray)
            return timeArray
        }
        // ************************************************************************************
        // Creates the table based off user input
        // ************************************************************************************
        function createTable(options, timeArray, maxDate, chart, data) {
            options.hAxis.viewWindow.min = new Date(timeArray[0], timeArray[1] - 1, timeArray[2], timeArray[3], timeArray[4]);
            options.hAxis.viewWindow.max = maxDate;
            chart.draw(data, options);
        }
        // ************************************************************************************

        // ************************************************************************************
        // UNCOMMENT THIS TO SEE THE PRICE OF BTC IN REAL TIME
        // ************************************************************************************
        // function priceUSD() {
        //     $.get("https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=BTC,ETH,EUR", function(data) {
        //         USDprice = data.BTC;
        //         console.log(USDprice);
        //         $("#currency").append(`USD/BTC: $${USDprice}<br>`)
        //     });
        // }
        // function priceBTC() {
        //     $.get("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,ETH,EUR", function(data) {
        //         BTCprice = data.USD;
        //         console.log(BTCprice)
        //         $("#currency").append(`BTC/USD: $${BTCprice}`)
        //     });
        // }
        // priceUSD();
        // priceBTC();


        // ************************************************************************************
        // END
        // ************************************************************************************
    })
