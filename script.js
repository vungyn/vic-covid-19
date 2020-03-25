window.addEventListener('DOMContentLoaded', () => {
    Chart.defaults.global.defaultFontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
    data = {};
    function xhr(type, content) {
        var x = new XMLHttpRequest();
        x.open('POST', 'https://wabi-australia-southeast-api.analysis.windows.net/public/reports/querydata', true);
        x.setRequestHeader('Content-Type', 'application/json');
        x.send(content);
        x.onreadystatechange = function () {
            if (x.readyState === 4 && x.status === 200) cb(type, JSON.parse(x.responseText));
        }
    }
    xhr('t_modified', '{"version":"1.0.0","queries":[{"Query":{"Commands":[{"SemanticQueryDataShapeCommand":{"Query":{"Version":2,"From":[{"Name":"f","Entity":"Filelist"}],"Select":[{"Aggregation":{"Expression":{"Column":{"Expression":{"SourceRef":{"Source":"f"}},"Property":"ModifiedLocal"}},"Function":3},"Name":"Min(Filelist.ModifiedLocal)"}]},"Binding":{"Primary":{"Groupings":[{"Projections":[0]}]},"DataReduction":{"DataVolume":3,"Primary":{"Top":{}}},"Version":1}}}]},"CacheKey":"{\\"Commands\\":[{\\"SemanticQueryDataShapeCommand\\":{\\"Query\\":{\\"Version\\":2,\\"From\\":[{\\"Name\\":\\"f\\",\\"Entity\\":\\"Filelist\\"}],\\"Select\\":[{\\"Aggregation\\":{\\"Expression\\":{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"f\\"}},\\"Property\\":\\"ModifiedLocal\\"}},\\"Function\\":3},\\"Name\\":\\"Min(Filelist.ModifiedLocal)\\"}]},\\"Binding\\":{\\"Primary\\":{\\"Groupings\\":[{\\"Projections\\":[0]}]},\\"DataReduction\\":{\\"DataVolume\\":3,\\"Primary\\":{\\"Top\\":{}}},\\"Version\\":1}}}]}","QueryId":"","ApplicationContext":{"DatasetId":"5b547437-24c9-4b22-92de-900b3b3f4785","Sources":[{"ReportId":"964ef513-8ff4-407c-8068-ade1e7f64ca5"}]}}],"cancelQueries":[],"modelId":1959902}');
    xhr('t_cases', '{"version":"1.0.0","queries":[{"Query":{"Commands":[{"SemanticQueryDataShapeCommand":{"Query":{"Version":2,"From":[{"Name":"l","Entity":"Linelist"}],"Select":[{"Aggregation":{"Expression":{"Column":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"PHESSID"}},"Function":5},"Name":"Min(Linelist.PHESSID)"}]},"Binding":{"Primary":{"Groupings":[{"Projections":[0]}]},"DataReduction":{"DataVolume":3,"Primary":{"Top":{}}},"Version":1}}}]},"CacheKey":"{\\"Commands\\":[{\\"SemanticQueryDataShapeCommand\\":{\\"Query\\":{\\"Version\\":2,\\"From\\":[{\\"Name\\":\\"l\\",\\"Entity\\":\\"Linelist\\"}],\\"Select\\":[{\\"Aggregation\\":{\\"Expression\\":{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"PHESSID\\"}},\\"Function\\":5},\\"Name\\":\\"Min(Linelist.PHESSID)\\"}]},\\"Binding\\":{\\"Primary\\":{\\"Groupings\\":[{\\"Projections\\":[0]}]},\\"DataReduction\\":{\\"DataVolume\\":3,\\"Primary\\":{\\"Top\\":{}}},\\"Version\\":1}}}]}","QueryId":"","ApplicationContext":{"DatasetId":"5b547437-24c9-4b22-92de-900b3b3f4785","Sources":[{"ReportId":"964ef513-8ff4-407c-8068-ade1e7f64ca5"}]}}],"cancelQueries":[],"modelId":1959902}', 'cases');
    xhr('t_deceased', '{"version":"1.0.0","queries":[{"Query":{"Commands":[{"SemanticQueryDataShapeCommand":{"Query":{"Version":2,"From":[{"Name":"l","Entity":"Linelist"}],"Select":[{"Aggregation":{"Expression":{"Column":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"clin_status_n"}},"Function":5},"Name":"Min(Linelist.clin_status_n)"}],"Where":[{"Condition":{"In":{"Expressions":[{"Column":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"clin_status_n"}}],"Values":[[{"Literal":{"Value":"\'Deceased\'"}}]]}}}]},"Binding":{"Primary":{"Groupings":[{"Projections":[0]}]},"DataReduction":{"DataVolume":3,"Primary":{"Top":{}}},"Version":1}}}]},"CacheKey":"{\\"Commands\\":[{\\"SemanticQueryDataShapeCommand\\":{\\"Query\\":{\\"Version\\":2,\\"From\\":[{\\"Name\\":\\"l\\",\\"Entity\\":\\"Linelist\\"}],\\"Select\\":[{\\"Aggregation\\":{\\"Expression\\":{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"clin_status_n\\"}},\\"Function\\":5},\\"Name\\":\\"Min(Linelist.clin_status_n)\\"}],\\"Where\\":[{\\"Condition\\":{\\"In\\":{\\"Expressions\\":[{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"clin_status_n\\"}}],\\"Values\\":[[{\\"Literal\\":{\\"Value\\":\\"\'Deceased\'\\"}}]]}}}]},\\"Binding\\":{\\"Primary\\":{\\"Groupings\\":[{\\"Projections\\":[0]}]},\\"DataReduction\\":{\\"DataVolume\\":3,\\"Primary\\":{\\"Top\\":{}}},\\"Version\\":1}}}]}","QueryId":"","ApplicationContext":{"DatasetId":"5b547437-24c9-4b22-92de-900b3b3f4785","Sources":[{"ReportId":"964ef513-8ff4-407c-8068-ade1e7f64ca5"}]}}],"cancelQueries":[],"modelId":1959902}');
    xhr('t_recovered', '{"version":"1.0.0","queries":[{"Query":{"Commands":[{"SemanticQueryDataShapeCommand":{"Query":{"Version":2,"From":[{"Name":"l","Entity":"Linelist"}],"Select":[{"Aggregation":{"Expression":{"Column":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"PHESSID"}},"Function":5},"Name":"Min(Linelist.PHESSID)"}],"Where":[{"Condition":{"In":{"Expressions":[{"Column":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"clin_status_n"}}],"Values":[[{"Literal":{"Value":"\'Well, isolation complete\'"}}]]}}}]},"Binding":{"Primary":{"Groupings":[{"Projections":[0]}]},"DataReduction":{"DataVolume":3,"Primary":{"Top":{}}},"Version":1}}}]},"CacheKey":"{\\"Commands\\":[{\\"SemanticQueryDataShapeCommand\\":{\\"Query\\":{\\"Version\\":2,\\"From\\":[{\\"Name\\":\\"l\\",\\"Entity\\":\\"Linelist\\"}],\\"Select\\":[{\\"Aggregation\\":{\\"Expression\\":{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"PHESSID\\"}},\\"Function\\":5},\\"Name\\":\\"Min(Linelist.PHESSID)\\"}],\\"Where\\":[{\\"Condition\\":{\\"In\\":{\\"Expressions\\":[{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"clin_status_n\\"}}],\\"Values\\":[[{\\"Literal\\":{\\"Value\\":\\"\'Well, isolation complete\'\\"}}]]}}}]},\\"Binding\\":{\\"Primary\\":{\\"Groupings\\":[{\\"Projections\\":[0]}]},\\"DataReduction\\":{\\"DataVolume\\":3,\\"Primary\\":{\\"Top\\":{}}},\\"Version\\":1}}}]}","QueryId":"","ApplicationContext":{"DatasetId":"5b547437-24c9-4b22-92de-900b3b3f4785","Sources":[{"ReportId":"964ef513-8ff4-407c-8068-ade1e7f64ca5"}]}}],"cancelQueries":[],"modelId":1959902}');
    xhr('t_tested', '{"version":"1.0.0","queries":[{"Query":{"Commands":[{"SemanticQueryDataShapeCommand":{"Query":{"Version":2,"From":[{"Name":"t","Entity":"Tested"}],"Select":[{"Aggregation":{"Expression":{"Column":{"Expression":{"SourceRef":{"Source":"t"}},"Property":"tested"}},"Function":0},"Name":"Sum(Tested.tested)"}]},"Binding":{"Primary":{"Groupings":[{"Projections":[0]}]},"DataReduction":{"DataVolume":3,"Primary":{"Top":{}}},"Version":1}}}]},"CacheKey":"{\\"Commands\\":[{\\"SemanticQueryDataShapeCommand\\":{\\"Query\\":{\\"Version\\":2,\\"From\\":[{\\"Name\\":\\"t\\",\\"Entity\\":\\"Tested\\"}],\\"Select\\":[{\\"Aggregation\\":{\\"Expression\\":{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"t\\"}},\\"Property\\":\\"tested\\"}},\\"Function\\":0},\\"Name\\":\\"Sum(Tested.tested)\\"}]},\\"Binding\\":{\\"Primary\\":{\\"Groupings\\":[{\\"Projections\\":[0]}]},\\"DataReduction\\":{\\"DataVolume\\":3,\\"Primary\\":{\\"Top\\":{}}},\\"Version\\":1}}}]}","QueryId":"","ApplicationContext":{"DatasetId":"5b547437-24c9-4b22-92de-900b3b3f4785","Sources":[{"ReportId":"964ef513-8ff4-407c-8068-ade1e7f64ca5"}]}}],"cancelQueries":[],"modelId":1959902}');
    xhr('casechart', '{"version":"1.0.0","queries":[{"Query":{"Commands":[{"SemanticQueryDataShapeCommand":{"Query":{"Version":2,"From":[{"Name":"s","Entity":"Summarised"},{"Name":"d","Entity":"dimDate"},{"Name":"l","Entity":"LocalDateTable_fa0ba24d-6c6b-4582-bf58-393cd3d4bf89"}],"Select":[{"Aggregation":{"Expression":{"Column":{"Expression":{"SourceRef":{"Source":"s"}},"Property":"Count"}},"Function":0},"Name":"Sum(Summarised.Count)"},{"Aggregation":{"Expression":{"Column":{"Expression":{"SourceRef":{"Source":"s"}},"Property":"RunningTotal"}},"Function":0},"Name":"Sum(Summarised.RunningTotal)"},{"Column":{"Expression":{"SourceRef":{"Source":"d"}},"Property":"Date"},"Name":"dimDate.Date"}],"Where":[{"Condition":{"In":{"Expressions":[{"Column":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"Year"}}],"Values":[[{"Literal":{"Value":"2020L"}}]]}}}]},"Binding":{"Primary":{"Groupings":[{"Projections":[2,1,0],"ShowItemsWithNoData":[2]}]},"DataReduction":{"DataVolume":4,"Primary":{"Sample":{}}},"Version":1}}}]},"CacheKey":"{\\"Commands\\":[{\\"SemanticQueryDataShapeCommand\\":{\\"Query\\":{\\"Version\\":2,\\"From\\":[{\\"Name\\":\\"s\\",\\"Entity\\":\\"Summarised\\"},{\\"Name\\":\\"d\\",\\"Entity\\":\\"dimDate\\"},{\\"Name\\":\\"l\\",\\"Entity\\":\\"LocalDateTable_fa0ba24d-6c6b-4582-bf58-393cd3d4bf89\\"}],\\"Select\\":[{\\"Aggregation\\":{\\"Expression\\":{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"s\\"}},\\"Property\\":\\"Count\\"}},\\"Function\\":0},\\"Name\\":\\"Sum(Summarised.Count)\\"},{\\"Aggregation\\":{\\"Expression\\":{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"s\\"}},\\"Property\\":\\"RunningTotal\\"}},\\"Function\\":0},\\"Name\\":\\"Sum(Summarised.RunningTotal)\\"},{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"d\\"}},\\"Property\\":\\"Date\\"},\\"Name\\":\\"dimDate.Date\\"}],\\"Where\\":[{\\"Condition\\":{\\"In\\":{\\"Expressions\\":[{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"Year\\"}}],\\"Values\\":[[{\\"Literal\\":{\\"Value\\":\\"2020L\\"}}]]}}}]},\\"Binding\\":{\\"Primary\\":{\\"Groupings\\":[{\\"Projections\\":[2,1,0],\\"ShowItemsWithNoData\\":[2]}]},\\"DataReduction\\":{\\"DataVolume\\":4,\\"Primary\\":{\\"Sample\\":{}}},\\"Version\\":1}}}]}","QueryId":"","ApplicationContext":{"DatasetId":"5b547437-24c9-4b22-92de-900b3b3f4785","Sources":[{"ReportId":"964ef513-8ff4-407c-8068-ade1e7f64ca5"}]}}],"cancelQueries":[],"modelId":1959902}');
    xhr('acquisition', '{"version":"1.0.0","queries":[{"Query":{"Commands":[{"SemanticQueryDataShapeCommand":{"Query":{"Version":2,"From":[{"Name":"l","Entity":"Linelist"}],"Select":[{"Column":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"acquired_n"},"Name":"Linelist.acquired_n"},{"Aggregation":{"Expression":{"Column":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"PHESSID"}},"Function":5},"Name":"CountNonNull(Linelist.PHESSID)"}],"OrderBy":[{"Direction":2,"Expression":{"Aggregation":{"Expression":{"Column":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"PHESSID"}},"Function":5}}}]},"Binding":{"Primary":{"Groupings":[{"Projections":[0,1]}]},"DataReduction":{"DataVolume":3,"Primary":{"Top":{}}},"Version":1}}}]},"QueryId":"","ApplicationContext":{"DatasetId":"5b547437-24c9-4b22-92de-900b3b3f4785","Sources":[{"ReportId":"964ef513-8ff4-407c-8068-ade1e7f64ca5"}]}}],"cancelQueries":[],"modelId":1959902}');
    xhr('sex', '{"version":"1.0.0","queries":[{"Query":{"Commands":[{"SemanticQueryDataShapeCommand":{"Query":{"Version":2,"From":[{"Name":"l","Entity":"Linelist"}],"Select":[{"Aggregation":{"Expression":{"Column":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"PHESSID"}},"Function":5},"Name":"CountNonNull(Linelist.PHESSID)"},{"Column":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"Sex"},"Name":"Linelist.Sex"}],"OrderBy":[{"Direction":2,"Expression":{"Aggregation":{"Expression":{"Column":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"PHESSID"}},"Function":5}}}]},"Binding":{"Primary":{"Groupings":[{"Projections":[0,1]}]},"DataReduction":{"DataVolume":3,"Primary":{"Top":{}}},"Version":1}}}]},"CacheKey":"{\\"Commands\\":[{\\"SemanticQueryDataShapeCommand\\":{\\"Query\\":{\\"Version\\":2,\\"From\\":[{\\"Name\\":\\"l\\",\\"Entity\\":\\"Linelist\\"}],\\"Select\\":[{\\"Aggregation\\":{\\"Expression\\":{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"PHESSID\\"}},\\"Function\\":5},\\"Name\\":\\"CountNonNull(Linelist.PHESSID)\\"},{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"Sex\\"},\\"Name\\":\\"Linelist.Sex\\"}],\\"OrderBy\\":[{\\"Direction\\":2,\\"Expression\\":{\\"Aggregation\\":{\\"Expression\\":{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"PHESSID\\"}},\\"Function\\":5}}}]},\\"Binding\\":{\\"Primary\\":{\\"Groupings\\":[{\\"Projections\\":[0,1]}]},\\"DataReduction\\":{\\"DataVolume\\":3,\\"Primary\\":{\\"Top\\":{}}},\\"Version\\":1}}}]}","QueryId":"","ApplicationContext":{"DatasetId":"5b547437-24c9-4b22-92de-900b3b3f4785","Sources":[{"ReportId":"964ef513-8ff4-407c-8068-ade1e7f64ca5"}]}}],"cancelQueries":[],"modelId":1959902}');
    xhr('median', '{"version":"1.0.0","queries":[{"Query":{"Commands":[{"SemanticQueryDataShapeCommand":{"Query":{"Version":2,"From":[{"Name":"d","Entity":"dimAgeGroup"},{"Name":"l","Entity":"Linelist"}],"Select":[{"Column":{"Expression":{"SourceRef":{"Source":"d"}},"Property":"AgeGroup"},"Name":"dimAgeGroup.AgeGroup"},{"Column":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"Sex"},"Name":"Linelist.Sex"},{"Aggregation":{"Expression":{"Column":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"PHESSID"}},"Function":5},"Name":"CountNonNull(Linelist.PHESSID)"},{"Measure":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"M_Age_MedianANDRange"},"Name":"Linelist.M_Age_MedianANDRange"}],"Where":[{"Condition":{"Not":{"Expression":{"Comparison":{"ComparisonKind":0,"Left":{"Column":{"Expression":{"SourceRef":{"Source":"d"}},"Property":"AgeGroup"}},"Right":{"Literal":{"Value":"null"}}}}}}}],"OrderBy":[{"Direction":1,"Expression":{"Column":{"Expression":{"SourceRef":{"Source":"d"}},"Property":"AgeGroup"}}}]},"Binding":{"Primary":{"Groupings":[{"Projections":[0,2],"ShowItemsWithNoData":[0]}]},"Secondary":{"Groupings":[{"Projections":[1]}]},"Projections":[3],"DataReduction":{"DataVolume":4,"Primary":{"Window":{"Count":200}},"Secondary":{"Top":{"Count":60}}},"Version":1}}}]},"CacheKey":"{\\"Commands\\":[{\\"SemanticQueryDataShapeCommand\\":{\\"Query\\":{\\"Version\\":2,\\"From\\":[{\\"Name\\":\\"d\\",\\"Entity\\":\\"dimAgeGroup\\"},{\\"Name\\":\\"l\\",\\"Entity\\":\\"Linelist\\"}],\\"Select\\":[{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"d\\"}},\\"Property\\":\\"AgeGroup\\"},\\"Name\\":\\"dimAgeGroup.AgeGroup\\"},{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"Sex\\"},\\"Name\\":\\"Linelist.Sex\\"},{\\"Aggregation\\":{\\"Expression\\":{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"PHESSID\\"}},\\"Function\\":5},\\"Name\\":\\"CountNonNull(Linelist.PHESSID)\\"},{\\"Measure\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"M_Age_MedianANDRange\\"},\\"Name\\":\\"Linelist.M_Age_MedianANDRange\\"}],\\"Where\\":[{\\"Condition\\":{\\"Not\\":{\\"Expression\\":{\\"Comparison\\":{\\"ComparisonKind\\":0,\\"Left\\":{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"d\\"}},\\"Property\\":\\"AgeGroup\\"}},\\"Right\\":{\\"Literal\\":{\\"Value\\":\\"null\\"}}}}}}}],\\"OrderBy\\":[{\\"Direction\\":1,\\"Expression\\":{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"d\\"}},\\"Property\\":\\"AgeGroup\\"}}}]},\\"Binding\\":{\\"Primary\\":{\\"Groupings\\":[{\\"Projections\\":[0,2],\\"ShowItemsWithNoData\\":[0]}]},\\"Secondary\\":{\\"Groupings\\":[{\\"Projections\\":[1]}]},\\"Projections\\":[3],\\"DataReduction\\":{\\"DataVolume\\":4,\\"Primary\\":{\\"Window\\":{\\"Count\\":200}},\\"Secondary\\":{\\"Top\\":{\\"Count\\":60}}},\\"Version\\":1}}}]}","QueryId":"","ApplicationContext":{"DatasetId":"5b547437-24c9-4b22-92de-900b3b3f4785","Sources":[{"ReportId":"964ef513-8ff4-407c-8068-ade1e7f64ca5"}]}}],"cancelQueries":[],"modelId":1959902}');
    xhr('agechart', '{"version":"1.0.0","queries":[{"Query":{"Commands":[{"SemanticQueryDataShapeCommand":{"Query":{"Version":2,"From":[{"Name":"d","Entity":"dimAgeGroup"},{"Name":"l","Entity":"Linelist"}],"Select":[{"Column":{"Expression":{"SourceRef":{"Source":"d"}},"Property":"AgeGroup"},"Name":"dimAgeGroup.AgeGroup"},{"Column":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"Sex"},"Name":"Linelist.Sex"},{"Aggregation":{"Expression":{"Column":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"PHESSID"}},"Function":5},"Name":"CountNonNull(Linelist.PHESSID)"},{"Measure":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"M_Age_MedianANDRange"},"Name":"Linelist.M_Age_MedianANDRange"}],"Where":[{"Condition":{"Not":{"Expression":{"Comparison":{"ComparisonKind":0,"Left":{"Column":{"Expression":{"SourceRef":{"Source":"d"}},"Property":"AgeGroup"}},"Right":{"Literal":{"Value":"null"}}}}}}}],"OrderBy":[{"Direction":1,"Expression":{"Column":{"Expression":{"SourceRef":{"Source":"d"}},"Property":"AgeGroup"}}}]},"Binding":{"Primary":{"Groupings":[{"Projections":[0,2],"ShowItemsWithNoData":[0]}]},"Secondary":{"Groupings":[{"Projections":[1]}]},"Projections":[3],"DataReduction":{"DataVolume":4,"Primary":{"Window":{"Count":200}},"Secondary":{"Top":{"Count":60}}},"Version":1}}}]},"CacheKey":"{\\"Commands\\":[{\\"SemanticQueryDataShapeCommand\\":{\\"Query\\":{\\"Version\\":2,\\"From\\":[{\\"Name\\":\\"d\\",\\"Entity\\":\\"dimAgeGroup\\"},{\\"Name\\":\\"l\\",\\"Entity\\":\\"Linelist\\"}],\\"Select\\":[{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"d\\"}},\\"Property\\":\\"AgeGroup\\"},\\"Name\\":\\"dimAgeGroup.AgeGroup\\"},{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"Sex\\"},\\"Name\\":\\"Linelist.Sex\\"},{\\"Aggregation\\":{\\"Expression\\":{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"PHESSID\\"}},\\"Function\\":5},\\"Name\\":\\"CountNonNull(Linelist.PHESSID)\\"},{\\"Measure\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"M_Age_MedianANDRange\\"},\\"Name\\":\\"Linelist.M_Age_MedianANDRange\\"}],\\"Where\\":[{\\"Condition\\":{\\"Not\\":{\\"Expression\\":{\\"Comparison\\":{\\"ComparisonKind\\":0,\\"Left\\":{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"d\\"}},\\"Property\\":\\"AgeGroup\\"}},\\"Right\\":{\\"Literal\\":{\\"Value\\":\\"null\\"}}}}}}}],\\"OrderBy\\":[{\\"Direction\\":1,\\"Expression\\":{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"d\\"}},\\"Property\\":\\"AgeGroup\\"}}}]},\\"Binding\\":{\\"Primary\\":{\\"Groupings\\":[{\\"Projections\\":[0,2],\\"ShowItemsWithNoData\\":[0]}]},\\"Secondary\\":{\\"Groupings\\":[{\\"Projections\\":[1]}]},\\"Projections\\":[3],\\"DataReduction\\":{\\"DataVolume\\":4,\\"Primary\\":{\\"Window\\":{\\"Count\\":200}},\\"Secondary\\":{\\"Top\\":{\\"Count\\":60}}},\\"Version\\":1}}}]}","QueryId":"","ApplicationContext":{"DatasetId":"5b547437-24c9-4b22-92de-900b3b3f4785","Sources":[{"ReportId":"964ef513-8ff4-407c-8068-ade1e7f64ca5"}]}}],"cancelQueries":[],"modelId":1959902}');
    
    function cb(type, response) {
        if (type.startsWith('t_')) {
            var t = type.split('_')[1];
            data[t] = response.results[0].result.data.dsr.DS[0].PH[0].DM0[0].M0;
            document.querySelector('.' + t).textContent = data[t];
        } else if (type == 'casechart') {
            data.casechart = response.results[0].result.data.dsr.DS[0].PH[0].DM0;
            
            var labels = [];
            var daily = [];
            var cumulative = [];
            var cases = 0;
            data.casechart.forEach(function(i) {
                daily.push({t: moment(i.C[0]).startOf('day'), y: i.C[2] !== undefined ? i.C[2] : i.C[1] !== undefined && i.C[1] !== cases ? i.C[1] - cases : 0});
                if (i.C[1] !== undefined) {
                    cumulative.push({t: moment(i.C[0]).startOf('day'), y: i.C[1]});
                    cases = i.C[1];
                }
            });

            var ctx = document.querySelector('.casechart').getContext('2d');
            var chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    datasets: [{
                        type: 'line',
                        label: 'Cumulative Cases',
                        borderColor: '#dd0033',
                        pointRadius: 0,
                        fill: false,
                        yAxisID: 'cumulative',
                        data: cumulative
                    }, {
                        label: 'Daily Cases',
                        backgroundColor: '#201547',
                        yAxisID: 'daily',
                        data: daily
                    }]
                },
                options: {
                    responsive: true,
                    aspectRatio: 2,
                    scales: {
                        xAxes: [{
                            type: 'time',
                            time: {
                                unit: 'month'
                            },
                            gridLines: {
                                display: false,
                            }
                        }],
                        yAxes: [{
                            id: 'daily',
                            type: 'linear',
                            position: 'left',
                            gridLines: {
                                drawBorder: false,
                                borderDash: [2, 4]
                            },
                        }, {
                            id: 'cumulative',
                            type: 'linear',
                            position: 'right',
                            gridLines: {
                                display: false,
                            },
                        }]
                    }
                }
            });
        } else if (type == 'acquisition') {
            data.acquisition = response.results[0].result.data.dsr.DS[0].PH[0].DM0;

            var max = 0;
            data.acquisition.forEach(function(i) {
                if (i.C[1] > max) {
                    max = i.C[1];
                }
            });

            data.acquisition.forEach(function(i) {
                document.querySelector('.acquisition').innerHTML += '<dt class="acquisition__bar" style="width: ' + i.C[1] / max * 100 + '%"></dt><dl class="acquisition__stat"><div class="acquisition__result">' + i.C[1] + '</div><div class="acquisition__title">' + i.C[0] + '</div></dl>';
            });
        } else if (type == 'sex') {
            data.sex = response.results[0].result.data.dsr.DS[0].PH[0].DM0;

            var total = 0;
            data.sex.forEach(function(i) {
                total += i.C[1];
            });

            data.sex.forEach(function(i) {
                document.querySelector('.sex__bar').innerHTML += '<div class="sex__bar-result ' + i.C[0].toLowerCase().replace(' ', '-') + '" style="width: ' + i.C[1] / total * 100 + '%"></div>';
                document.querySelector('.sex').innerHTML += '<li class="sex__stat"><div class="sex__result ' + i.C[0].toLowerCase().replace(' ', '-') + '">' + i.C[1] + '</div><div class="sex__title">' + i.C[0] + '</div></li>';
            });
        } else if (type == 'median') {
            data.median = response.results[0].result.data.dsr.DS[0].M1;
            document.querySelector('.median').textContent = data.median;
        } else if (type == 'agechart') {
            data.agechart = response.results[0].result.data.dsr.DS[0].PH[0].DM0;
            
            var labels = [];
            var female = [];
            var male = [];
            var notstated = [];
            data.agechart.forEach(function(i) {
                labels.push(i.G0);
                female.push(i.X[0] !== undefined ? i.X[0].M0 !== undefined ? i.X[0].M0 : i.X[0].R !== undefined ? i.X[0].R : 0 : 0);
                male.push(i.X[1] !== undefined ? i.X[1].M0 !== undefined ? i.X[1].M0 : i.X[1].R !== undefined ? i.X[1].R : 0 : 0);
                notstated.push(i.X[2] !== undefined ? i.X[2].M0 !== undefined ? i.X[2].M0 : i.X[2].R !== undefined ? i.X[2].R : 0 : 0);
            });

            var ctx = document.querySelector('.agechart').getContext('2d');
            var chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Male',
                        backgroundColor: '#201547',
                        data: male
                    }, {
                        label: 'Female',
                        backgroundColor: '#007780',
                        data: female
                    }, {
                        label: 'Not Stated',
                        backgroundColor: '#500778',
                        data: notstated
                    }]
                },
                options: {
                    responsive: true,
                    aspectRatio: 2,
                }
            });
        }
    }
});