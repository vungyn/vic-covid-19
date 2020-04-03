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
    xhr('t_modified', '{"version":"1.0.0","queries":[{"Query":{"Commands":[{"SemanticQueryDataShapeCommand":{"Query":{"Version":2,"From":[{"Name":"t","Entity":"Tested"}],"Select":[{"Measure":{"Expression":{"SourceRef":{"Source":"t"}},"Property":"M_LastUpdated"},"Name":"Tested.M_LastUpdated"}]},"Binding":{"Primary":{"Groupings":[{"Projections":[0]}]},"DataReduction":{"DataVolume":3,"Primary":{"Top":{}}},"Version":1}}}]},"CacheKey":"{\\"Commands\\":[{\\"SemanticQueryDataShapeCommand\\":{\\"Query\\":{\\"Version\\":2,\\"From\\":[{\\"Name\\":\\"t\\",\\"Entity\\":\\"Tested\\"}],\\"Select\\":[{\\"Measure\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"t\\"}},\\"Property\\":\\"M_LastUpdated\\"},\\"Name\\":\\"Tested.M_LastUpdated\\"}]},\\"Binding\\":{\\"Primary\\":{\\"Groupings\\":[{\\"Projections\\":[0]}]},\\"DataReduction\\":{\\"DataVolume\\":3,\\"Primary\\":{\\"Top\\":{}}},\\"Version\\":1}}}]}","QueryId":"","ApplicationContext":{"DatasetId":"5b547437-24c9-4b22-92de-900b3b3f4785","Sources":[{"ReportId":"964ef513-8ff4-407c-8068-ade1e7f64ca5"}]}}],"cancelQueries":[],"modelId":1959902}');
    xhr('t_cases', '{"version":"1.0.0","queries":[{"Query":{"Commands":[{"SemanticQueryDataShapeCommand":{"Query":{"Version":2,"From":[{"Name":"l","Entity":"Linelist"}],"Select":[{"Measure":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"Cases"},"Name":"Linelist.Cases"}]},"Binding":{"Primary":{"Groupings":[{"Projections":[0]}]},"DataReduction":{"DataVolume":3,"Primary":{"Top":{}}},"Version":1}}}]},"CacheKey":"{\\"Commands\\":[{\\"SemanticQueryDataShapeCommand\\":{\\"Query\\":{\\"Version\\":2,\\"From\\":[{\\"Name\\":\\"l\\",\\"Entity\\":\\"Linelist\\"}],\\"Select\\":[{\\"Measure\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"Cases\\"},\\"Name\\":\\"Linelist.Cases\\"}]},\\"Binding\\":{\\"Primary\\":{\\"Groupings\\":[{\\"Projections\\":[0]}]},\\"DataReduction\\":{\\"DataVolume\\":3,\\"Primary\\":{\\"Top\\":{}}},\\"Version\\":1}}}]}","QueryId":"","ApplicationContext":{"DatasetId":"5b547437-24c9-4b22-92de-900b3b3f4785","Sources":[{"ReportId":"964ef513-8ff4-407c-8068-ade1e7f64ca5"}]}}],"cancelQueries":[],"modelId":1959902}');
    xhr('t_deceased', '{"version":"1.0.0","queries":[{"Query":{"Commands":[{"SemanticQueryDataShapeCommand":{"Query":{"Version":2,"From":[{"Name":"l","Entity":"Linelist"}],"Select":[{"Measure":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"M_Deaths"},"Name":"Linelist.M_Deaths"}],"Where":[{"Condition":{"In":{"Expressions":[{"Column":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"clin_status_n"}}],"Values":[[{"Literal":{"Value":"\'Deceased\'"}}]]}}}]},"Binding":{"Primary":{"Groupings":[{"Projections":[0]}]},"DataReduction":{"DataVolume":3,"Primary":{"Top":{}}},"Version":1}}}]},"CacheKey":"{\\"Commands\\":[{\\"SemanticQueryDataShapeCommand\\":{\\"Query\\":{\\"Version\\":2,\\"From\\":[{\\"Name\\":\\"l\\",\\"Entity\\":\\"Linelist\\"}],\\"Select\\":[{\\"Measure\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"M_Deaths\\"},\\"Name\\":\\"Linelist.M_Deaths\\"}],\\"Where\\":[{\\"Condition\\":{\\"In\\":{\\"Expressions\\":[{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"clin_status_n\\"}}],\\"Values\\":[[{\\"Literal\\":{\\"Value\\":\\"\'Deceased\'\\"}}]]}}}]},\\"Binding\\":{\\"Primary\\":{\\"Groupings\\":[{\\"Projections\\":[0]}]},\\"DataReduction\\":{\\"DataVolume\\":3,\\"Primary\\":{\\"Top\\":{}}},\\"Version\\":1}}}]}","QueryId":"","ApplicationContext":{"DatasetId":"5b547437-24c9-4b22-92de-900b3b3f4785","Sources":[{"ReportId":"964ef513-8ff4-407c-8068-ade1e7f64ca5"}]}}],"cancelQueries":[],"modelId":1959902}');
    xhr('t_recovered', '{"version":"1.0.0","queries":[{"Query":{"Commands":[{"SemanticQueryDataShapeCommand":{"Query":{"Version":2,"From":[{"Name":"l","Entity":"Linelist"}],"Select":[{"Measure":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"Cases"},"Name":"Linelist.Cases"}],"Where":[{"Condition":{"In":{"Expressions":[{"Column":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"clin_status_n"}}],"Values":[[{"Literal":{"Value":"\'Well, isolation complete\'"}}]]}}}]},"Binding":{"Primary":{"Groupings":[{"Projections":[0]}]},"DataReduction":{"DataVolume":3,"Primary":{"Top":{}}},"Version":1}}}]},"CacheKey":"{\\"Commands\\":[{\\"SemanticQueryDataShapeCommand\\":{\\"Query\\":{\\"Version\\":2,\\"From\\":[{\\"Name\\":\\"l\\",\\"Entity\\":\\"Linelist\\"}],\\"Select\\":[{\\"Measure\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"Cases\\"},\\"Name\\":\\"Linelist.Cases\\"}],\\"Where\\":[{\\"Condition\\":{\\"In\\":{\\"Expressions\\":[{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"clin_status_n\\"}}],\\"Values\\":[[{\\"Literal\\":{\\"Value\\":\\"\'Well, isolation complete\'\\"}}]]}}}]},\\"Binding\\":{\\"Primary\\":{\\"Groupings\\":[{\\"Projections\\":[0]}]},\\"DataReduction\\":{\\"DataVolume\\":3,\\"Primary\\":{\\"Top\\":{}}},\\"Version\\":1}}}]}","QueryId":"","ApplicationContext":{"DatasetId":"5b547437-24c9-4b22-92de-900b3b3f4785","Sources":[{"ReportId":"964ef513-8ff4-407c-8068-ade1e7f64ca5"}]}}],"cancelQueries":[],"modelId":1959902}');
    xhr('t_tested', '{"version":"1.0.0","queries":[{"Query":{"Commands":[{"SemanticQueryDataShapeCommand":{"Query":{"Version":2,"From":[{"Name":"t","Entity":"Tested"}],"Select":[{"Aggregation":{"Expression":{"Column":{"Expression":{"SourceRef":{"Source":"t"}},"Property":"tested"}},"Function":3},"Name":"Min(Tested.tested)"}]},"Binding":{"Primary":{"Groupings":[{"Projections":[0]}]},"DataReduction":{"DataVolume":3,"Primary":{"Top":{}}},"Version":1}}}]},"CacheKey":"{\\"Commands\\":[{\\"SemanticQueryDataShapeCommand\\":{\\"Query\\":{\\"Version\\":2,\\"From\\":[{\\"Name\\":\\"t\\",\\"Entity\\":\\"Tested\\"}],\\"Select\\":[{\\"Aggregation\\":{\\"Expression\\":{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"t\\"}},\\"Property\\":\\"tested\\"}},\\"Function\\":3},\\"Name\\":\\"Min(Tested.tested)\\"}]},\\"Binding\\":{\\"Primary\\":{\\"Groupings\\":[{\\"Projections\\":[0]}]},\\"DataReduction\\":{\\"DataVolume\\":3,\\"Primary\\":{\\"Top\\":{}}},\\"Version\\":1}}}]}","QueryId":"","ApplicationContext":{"DatasetId":"5b547437-24c9-4b22-92de-900b3b3f4785","Sources":[{"ReportId":"964ef513-8ff4-407c-8068-ade1e7f64ca5"}]}}],"cancelQueries":[],"modelId":1959902}');
    xhr('casechart', '{"version":"1.0.0","queries":[{"Query":{"Commands":[{"SemanticQueryDataShapeCommand":{"Query":{"Version":2,"From":[{"Name":"s","Entity":"Summarised"},{"Name":"d","Entity":"dimDate"}],"Select":[{"Aggregation":{"Expression":{"Column":{"Expression":{"SourceRef":{"Source":"s"}},"Property":"RunningTotal"}},"Function":0},"Name":"Sum(Summarised.RunningTotal)"},{"Column":{"Expression":{"SourceRef":{"Source":"d"}},"Property":"Date"},"Name":"dimDate.Date"}]},"Binding":{"Primary":{"Groupings":[{"Projections":[1,0],"ShowItemsWithNoData":[1]}]},"DataReduction":{"DataVolume":4,"Primary":{"Sample":{}}},"Version":1}}}]},"CacheKey":"{\\"Commands\\":[{\\"SemanticQueryDataShapeCommand\\":{\\"Query\\":{\\"Version\\":2,\\"From\\":[{\\"Name\\":\\"s\\",\\"Entity\\":\\"Summarised\\"},{\\"Name\\":\\"d\\",\\"Entity\\":\\"dimDate\\"}],\\"Select\\":[{\\"Aggregation\\":{\\"Expression\\":{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"s\\"}},\\"Property\\":\\"RunningTotal\\"}},\\"Function\\":0},\\"Name\\":\\"Sum(Summarised.RunningTotal)\\"},{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"d\\"}},\\"Property\\":\\"Date\\"},\\"Name\\":\\"dimDate.Date\\"}]},\\"Binding\\":{\\"Primary\\":{\\"Groupings\\":[{\\"Projections\\":[1,0],\\"ShowItemsWithNoData\\":[1]}]},\\"DataReduction\\":{\\"DataVolume\\":4,\\"Primary\\":{\\"Sample\\":{}}},\\"Version\\":1}}}]}","QueryId":"","ApplicationContext":{"DatasetId":"5b547437-24c9-4b22-92de-900b3b3f4785","Sources":[{"ReportId":"964ef513-8ff4-407c-8068-ade1e7f64ca5"}]}}],"cancelQueries":[],"modelId":1959902}');
    xhr('acquisition', '{"version":"1.0.0","queries":[{"Query":{"Commands":[{"SemanticQueryDataShapeCommand":{"Query":{"Version":2,"From":[{"Name":"l","Entity":"Linelist"}],"Select":[{"Column":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"acquired_n"},"Name":"Linelist.acquired_n"},{"Measure":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"Cases"},"Name":"Linelist.Cases"}],"OrderBy":[{"Direction":2,"Expression":{"Measure":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"Cases"}}}]},"Binding":{"Primary":{"Groupings":[{"Projections":[0,1]}]},"DataReduction":{"DataVolume":3,"Primary":{"Top":{}}},"Version":1}}}]},"CacheKey":"{\\"Commands\\":[{\\"SemanticQueryDataShapeCommand\\":{\\"Query\\":{\\"Version\\":2,\\"From\\":[{\\"Name\\":\\"l\\",\\"Entity\\":\\"Linelist\\"}],\\"Select\\":[{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"acquired_n\\"},\\"Name\\":\\"Linelist.acquired_n\\"},{\\"Measure\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"Cases\\"},\\"Name\\":\\"Linelist.Cases\\"}],\\"OrderBy\\":[{\\"Direction\\":2,\\"Expression\\":{\\"Measure\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"Cases\\"}}}]},\\"Binding\\":{\\"Primary\\":{\\"Groupings\\":[{\\"Projections\\":[0,1]}]},\\"DataReduction\\":{\\"DataVolume\\":3,\\"Primary\\":{\\"Top\\":{}}},\\"Version\\":1}}}]}","QueryId":"","ApplicationContext":{"DatasetId":"5b547437-24c9-4b22-92de-900b3b3f4785","Sources":[{"ReportId":"964ef513-8ff4-407c-8068-ade1e7f64ca5"}]}}],"cancelQueries":[],"modelId":1959902}');
    xhr('sex', '{"version":"1.0.0","queries":[{"Query":{"Commands":[{"SemanticQueryDataShapeCommand":{"Query":{"Version":2,"From":[{"Name":"l","Entity":"Linelist"}],"Select":[{"Column":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"Sex"},"Name":"Linelist.Sex"},{"Measure":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"Cases"},"Name":"Linelist.Cases"}],"OrderBy":[{"Direction":2,"Expression":{"Measure":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"Cases"}}}]},"Binding":{"Primary":{"Groupings":[{"Projections":[0,1]}]},"DataReduction":{"DataVolume":3,"Primary":{"Top":{}}},"Version":1}}}]},"CacheKey":"{\\"Commands\\":[{\\"SemanticQueryDataShapeCommand\\":{\\"Query\\":{\\"Version\\":2,\\"From\\":[{\\"Name\\":\\"l\\",\\"Entity\\":\\"Linelist\\"}],\\"Select\\":[{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"Sex\\"},\\"Name\\":\\"Linelist.Sex\\"},{\\"Measure\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"Cases\\"},\\"Name\\":\\"Linelist.Cases\\"}],\\"OrderBy\\":[{\\"Direction\\":2,\\"Expression\\":{\\"Measure\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"Cases\\"}}}]},\\"Binding\\":{\\"Primary\\":{\\"Groupings\\":[{\\"Projections\\":[0,1]}]},\\"DataReduction\\":{\\"DataVolume\\":3,\\"Primary\\":{\\"Top\\":{}}},\\"Version\\":1}}}]}","QueryId":"","ApplicationContext":{"DatasetId":"5b547437-24c9-4b22-92de-900b3b3f4785","Sources":[{"ReportId":"964ef513-8ff4-407c-8068-ade1e7f64ca5"}]}}],"cancelQueries":[],"modelId":1959902}');
    xhr('t_median', '{"version":"1.0.0","queries":[{"Query":{"Commands":[{"SemanticQueryDataShapeCommand":{"Query":{"Version":2,"From":[{"Name":"l","Entity":"Linelist"}],"Select":[{"Measure":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"M_Age_MedianANDRange"},"Name":"Linelist.M_Age_MedianANDRange"}]},"Binding":{"Primary":{"Groupings":[{"Projections":[0]}]},"DataReduction":{"DataVolume":3,"Primary":{"Top":{}}},"Version":1}}}]},"CacheKey":"{\\"Commands\\":[{\\"SemanticQueryDataShapeCommand\\":{\\"Query\\":{\\"Version\\":2,\\"From\\":[{\\"Name\\":\\"l\\",\\"Entity\\":\\"Linelist\\"}],\\"Select\\":[{\\"Measure\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"M_Age_MedianANDRange\\"},\\"Name\\":\\"Linelist.M_Age_MedianANDRange\\"}]},\\"Binding\\":{\\"Primary\\":{\\"Groupings\\":[{\\"Projections\\":[0]}]},\\"DataReduction\\":{\\"DataVolume\\":3,\\"Primary\\":{\\"Top\\":{}}},\\"Version\\":1}}}]}","QueryId":"","ApplicationContext":{"DatasetId":"5b547437-24c9-4b22-92de-900b3b3f4785","Sources":[{"ReportId":"964ef513-8ff4-407c-8068-ade1e7f64ca5"}]}}],"cancelQueries":[],"modelId":1959902}');
    xhr('agechart', '{"version":"1.0.0","queries":[{"Query":{"Commands":[{"SemanticQueryDataShapeCommand":{"Query":{"Version":2,"From":[{"Name":"d","Entity":"dimAgeGroup"},{"Name":"l","Entity":"Linelist"}],"Select":[{"Column":{"Expression":{"SourceRef":{"Source":"d"}},"Property":"AgeGroup"},"Name":"dimAgeGroup.AgeGroup"},{"Column":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"Sex"},"Name":"Linelist.Sex"},{"Measure":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"Cases"},"Name":"Linelist.Measure"},{"Measure":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"M_Age_MedianANDRange"},"Name":"Linelist.M_Age_MedianANDRange"}],"Where":[{"Condition":{"Not":{"Expression":{"Comparison":{"ComparisonKind":0,"Left":{"Column":{"Expression":{"SourceRef":{"Source":"d"}},"Property":"AgeGroup"}},"Right":{"Literal":{"Value":"null"}}}}}}}],"OrderBy":[{"Direction":1,"Expression":{"Column":{"Expression":{"SourceRef":{"Source":"d"}},"Property":"AgeGroup"}}}]},"Binding":{"Primary":{"Groupings":[{"Projections":[0,2],"ShowItemsWithNoData":[0]}]},"Secondary":{"Groupings":[{"Projections":[1]}]},"Projections":[3],"DataReduction":{"DataVolume":4,"Primary":{"Window":{"Count":200}},"Secondary":{"Top":{"Count":60}}},"Version":1}}}]},"CacheKey":"{\\"Commands\\":[{\\"SemanticQueryDataShapeCommand\\":{\\"Query\\":{\\"Version\\":2,\\"From\\":[{\\"Name\\":\\"d\\",\\"Entity\\":\\"dimAgeGroup\\"},{\\"Name\\":\\"l\\",\\"Entity\\":\\"Linelist\\"}],\\"Select\\":[{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"d\\"}},\\"Property\\":\\"AgeGroup\\"},\\"Name\\":\\"dimAgeGroup.AgeGroup\\"},{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"Sex\\"},\\"Name\\":\\"Linelist.Sex\\"},{\\"Measure\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"Cases\\"},\\"Name\\":\\"Linelist.Measure\\"},{\\"Measure\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"M_Age_MedianANDRange\\"},\\"Name\\":\\"Linelist.M_Age_MedianANDRange\\"}],\\"Where\\":[{\\"Condition\\":{\\"Not\\":{\\"Expression\\":{\\"Comparison\\":{\\"ComparisonKind\\":0,\\"Left\\":{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"d\\"}},\\"Property\\":\\"AgeGroup\\"}},\\"Right\\":{\\"Literal\\":{\\"Value\\":\\"null\\"}}}}}}}],\\"OrderBy\\":[{\\"Direction\\":1,\\"Expression\\":{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"d\\"}},\\"Property\\":\\"AgeGroup\\"}}}]},\\"Binding\\":{\\"Primary\\":{\\"Groupings\\":[{\\"Projections\\":[0,2],\\"ShowItemsWithNoData\\":[0]}]},\\"Secondary\\":{\\"Groupings\\":[{\\"Projections\\":[1]}]},\\"Projections\\":[3],\\"DataReduction\\":{\\"DataVolume\\":4,\\"Primary\\":{\\"Window\\":{\\"Count\\":200}},\\"Secondary\\":{\\"Top\\":{\\"Count\\":60}}},\\"Version\\":1}}}]}","QueryId":"","ApplicationContext":{"DatasetId":"5b547437-24c9-4b22-92de-900b3b3f4785","Sources":[{"ReportId":"964ef513-8ff4-407c-8068-ade1e7f64ca5"}]}}],"cancelQueries":[],"modelId":1959902}');
    xhr('lga', '{"version":"1.0.0","queries":[{"Query":{"Commands":[{"SemanticQueryDataShapeCommand":{"Query":{"Version":2,"From":[{"Name":"d1","Entity":"dimLGA"},{"Name":"l","Entity":"Linelist"}],"Select":[{"Column":{"Expression":{"SourceRef":{"Source":"d1"}},"Property":"LGAName"},"Name":"dimLGA.LGAName"},{"Measure":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"Cases"},"Name":"Linelist.Cases"}],"Where":[{"Condition":{"Not":{"Expression":{"Comparison":{"ComparisonKind":0,"Left":{"Column":{"Expression":{"SourceRef":{"Source":"d1"}},"Property":"LGAName"}},"Right":{"Literal":{"Value":"null"}}}}}}}]},"Binding":{"Primary":{"Groupings":[{"Projections":[0,1]}]},"DataReduction":{"DataVolume":3,"Primary":{"Window":{"Count":500}}},"Version":1}}}]},"CacheKey":"{\\"Commands\\":[{\\"SemanticQueryDataShapeCommand\\":{\\"Query\\":{\\"Version\\":2,\\"From\\":[{\\"Name\\":\\"d1\\",\\"Entity\\":\\"dimLGA\\"},{\\"Name\\":\\"l\\",\\"Entity\\":\\"Linelist\\"}],\\"Select\\":[{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"d1\\"}},\\"Property\\":\\"LGAName\\"},\\"Name\\":\\"dimLGA.LGAName\\"},{\\"Measure\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"Cases\\"},\\"Name\\":\\"Linelist.Cases\\"}],\\"Where\\":[{\\"Condition\\":{\\"Not\\":{\\"Expression\\":{\\"Comparison\\":{\\"ComparisonKind\\":0,\\"Left\\":{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"d1\\"}},\\"Property\\":\\"LGAName\\"}},\\"Right\\":{\\"Literal\\":{\\"Value\\":\\"null\\"}}}}}}}]},\\"Binding\\":{\\"Primary\\":{\\"Groupings\\":[{\\"Projections\\":[0,1]}]},\\"DataReduction\\":{\\"DataVolume\\":3,\\"Primary\\":{\\"Window\\":{\\"Count\\":500}}},\\"Version\\":1}}}]}","QueryId":"","ApplicationContext":{"DatasetId":"5b547437-24c9-4b22-92de-900b3b3f4785","Sources":[{"ReportId":"964ef513-8ff4-407c-8068-ade1e7f64ca5"}]}}],"cancelQueries":[],"modelId":1959902}');
    xhr('t_overseas', '{"version":"1.0.0","queries":[{"Query":{"Commands":[{"SemanticQueryDataShapeCommand":{"Query":{"Version":2,"From":[{"Name":"l","Entity":"Linelist"}],"Select":[{"Aggregation":{"Expression":{"Column":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"PHESSID"}},"Function":5},"Name":"Min(Linelist.PHESSID)"}],"Where":[{"Condition":{"In":{"Expressions":[{"Column":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"Localgovernmentarea"}}],"Values":[[{"Literal":{"Value":"\'Overseas\'"}}]]}}}]},"Binding":{"Primary":{"Groupings":[{"Projections":[0]}]},"DataReduction":{"DataVolume":3,"Primary":{"Top":{}}},"Version":1}}}]},"CacheKey":"{\\"Commands\\":[{\\"SemanticQueryDataShapeCommand\\":{\\"Query\\":{\\"Version\\":2,\\"From\\":[{\\"Name\\":\\"l\\",\\"Entity\\":\\"Linelist\\"}],\\"Select\\":[{\\"Aggregation\\":{\\"Expression\\":{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"PHESSID\\"}},\\"Function\\":5},\\"Name\\":\\"Min(Linelist.PHESSID)\\"}],\\"Where\\":[{\\"Condition\\":{\\"In\\":{\\"Expressions\\":[{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"Localgovernmentarea\\"}}],\\"Values\\":[[{\\"Literal\\":{\\"Value\\":\\"\'Overseas\'\\"}}]]}}}]},\\"Binding\\":{\\"Primary\\":{\\"Groupings\\":[{\\"Projections\\":[0]}]},\\"DataReduction\\":{\\"DataVolume\\":3,\\"Primary\\":{\\"Top\\":{}}},\\"Version\\":1}}}]}","QueryId":"","ApplicationContext":{"DatasetId":"5b547437-24c9-4b22-92de-900b3b3f4785","Sources":[{"ReportId":"964ef513-8ff4-407c-8068-ade1e7f64ca5"}]}}],"cancelQueries":[],"modelId":1959902}');
    xhr('t_unknown', '{"version":"1.0.0","queries":[{"Query":{"Commands":[{"SemanticQueryDataShapeCommand":{"Query":{"Version":2,"From":[{"Name":"l","Entity":"Linelist"}],"Select":[{"Aggregation":{"Expression":{"Column":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"PHESSID"}},"Function":5},"Name":"Min(Linelist.PHESSID)"}],"Where":[{"Condition":{"In":{"Expressions":[{"Column":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"Localgovernmentarea"}}],"Values":[[{"Literal":{"Value":"\'Unknown\'"}}]]}}}]},"Binding":{"Primary":{"Groupings":[{"Projections":[0]}]},"DataReduction":{"DataVolume":3,"Primary":{"Top":{}}},"Version":1}}}]},"CacheKey":"{\\"Commands\\":[{\\"SemanticQueryDataShapeCommand\\":{\\"Query\\":{\\"Version\\":2,\\"From\\":[{\\"Name\\":\\"l\\",\\"Entity\\":\\"Linelist\\"}],\\"Select\\":[{\\"Aggregation\\":{\\"Expression\\":{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"PHESSID\\"}},\\"Function\\":5},\\"Name\\":\\"Min(Linelist.PHESSID)\\"}],\\"Where\\":[{\\"Condition\\":{\\"In\\":{\\"Expressions\\":[{\\"Column\\":{\\"Expression\\":{\\"SourceRef\\":{\\"Source\\":\\"l\\"}},\\"Property\\":\\"Localgovernmentarea\\"}}],\\"Values\\":[[{\\"Literal\\":{\\"Value\\":\\"\'Unknown\'\\"}}]]}}}]},\\"Binding\\":{\\"Primary\\":{\\"Groupings\\":[{\\"Projections\\":[0]}]},\\"DataReduction\\":{\\"DataVolume\\":3,\\"Primary\\":{\\"Top\\":{}}},\\"Version\\":1}}}]}","QueryId":"","ApplicationContext":{"DatasetId":"5b547437-24c9-4b22-92de-900b3b3f4785","Sources":[{"ReportId":"964ef513-8ff4-407c-8068-ade1e7f64ca5"}]}}],"cancelQueries":[],"modelId":1959902}');

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

            if (data.casechart[0].C.length == 1 && data.casechart[0].C[0] == 1) {
                data.casechart.some(function(i) {
                    if (i.C[0] == 1577836800000) {
                        i.C.push(data.casechart[0].C);
                        data.casechart.shift();
                        return true;
                    }
                });
            }
            data.casechart.forEach(function(i) {
                daily.push({t: moment(i.C[0]).startOf('day'), y: i.C[0] == 1577836800000 ? 0 : i.C[2] !== undefined ? i.C[2] : i.C[1] !== undefined && i.C[1] !== cases ? i.C[1] - cases : 0});
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
        } else if (type == 'lga') {
            data.lga = response.results[0].result.data.dsr.DS[0].PH[0].DM0;

            var lga = [];
            var range = [];

            data.lga.forEach(function(i, k) {
                var cases = i.C[1];
                var index = 0;
                
                while (cases === undefined) {
                    cases = data.lga[k - ++index].C[1];
                }
                document.querySelector('.lga').innerHTML += '<tr class="lga__row"><td class="lga__name">' + i.C[0] + '</td><td class="lga__cases">' + cases + '</td></tr>';
                lga[i.C[0].split(' (')[0].toUpperCase()] = cases;

                range.min = range.min === undefined || range.min > cases ? cases : range.min;
                range.max = range.max === undefined || range.max < cases ? cases : range.max;
            });

            const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

            const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
                v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
            )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

            this.asc = true;
    
            document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
                const table = th.closest('table');
                const tbody = table.querySelector('tbody');
                Array.from(tbody.querySelectorAll('tr'))
                    .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
                    .forEach(tr => tbody.appendChild(tr));
            })));

            var colors = chroma.scale(['#007780', '#fff', '#dd0033']).domain([range.min, range.max]);

            var map = L.map(document.querySelector('.map')).setView([-36.854167, 144.281111], 8);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

            var x = new XMLHttpRequest();
            x.open('GET', 'lga.geojson');
            x.setRequestHeader('Content-Type', 'application/json');
            x.responseType = 'json';
            x.onload = function() {
                if (x.readyState === 4 && x.status === 200) {
                    var geoJSON = L.geoJSON(x.response, {style: style, onEachFeature: onEachFeature}).addTo(map);
                    map.fitBounds(geoJSON.getBounds());
                }
            };
            x.send();

            L.Control.Scale = L.Control.extend({
                onAdd: function(map) {
                    var scale = L.DomUtil.create('div', 'scale leaflet-bar');

                    scale.innerHTML = '<span>Low</span><span>High</span>';
            
                    return scale;
                },
            });
            
            L.control.scale = function(opts) {
                return new L.Control.Scale(opts);
            }
            
            L.control.scale({ position: 'bottomleft' }).addTo(map);
        }

        function style(feature) {
            return {
                weight: 1,
                opacity: 1,
                color: '#e3e3e3',
                fillOpacity: 0.75,
                fillColor: colors(lga[feature.properties.ABB_NAME])
            };
        }

        function onEachFeature(feature, layer) {
            layer.bindPopup(feature.properties.ABB_NAME + ': ' + (lga[feature.properties.ABB_NAME] !== undefined ? lga[feature.properties.ABB_NAME] : 0));
        }
    }
});