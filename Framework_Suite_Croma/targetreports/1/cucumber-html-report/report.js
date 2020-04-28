$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/DevEnvironment/IntelliJ Workspace/MPOS_Suite/./src/test/resources/features/Yahoo.feature");
formatter.feature({
  "line": 2,
  "name": "Yahoo Test",
  "description": "",
  "id": "yahoo-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Search keywords in Yahoo",
  "description": "",
  "id": "yahoo-test;search-keywords-in-yahoo",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Yahoo homepage is open",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter \"\u003csearchKey\u003e\" in Yahoo Search box",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Yahoo displays relevant search result",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "yahoo-test;search-keywords-in-yahoo;",
  "rows": [
    {
      "cells": [
        "searchKey"
      ],
      "line": 9,
      "id": "yahoo-test;search-keywords-in-yahoo;;1"
    },
    {
      "cells": [
        "USA"
      ],
      "line": 10,
      "id": "yahoo-test;search-keywords-in-yahoo;;2"
    },
    {
      "cells": [
        "China"
      ],
      "line": 11,
      "id": "yahoo-test;search-keywords-in-yahoo;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Search keywords in Yahoo",
  "description": "",
  "id": "yahoo-test;search-keywords-in-yahoo;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Yahoo homepage is open",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter \"USA\" in Yahoo Search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Yahoo displays relevant search result",
  "keyword": "Then "
});
formatter.match({
  "location": "YahooStepDef.yahooHomepageIsOpen()"
});
formatter.result({
  "duration": 143245699797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USA",
      "offset": 7
    }
  ],
  "location": "YahooStepDef.enterInYahooSearchBox(String)"
});
formatter.result({
  "duration": 5389206,
  "status": "passed"
});
formatter.match({
  "location": "YahooStepDef.yahooDisplaysRelevantSearchResult()"
});
formatter.result({
  "duration": 138985,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Search keywords in Yahoo",
  "description": "",
  "id": "yahoo-test;search-keywords-in-yahoo;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Yahoo homepage is open",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter \"China\" in Yahoo Search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Yahoo displays relevant search result",
  "keyword": "Then "
});
formatter.match({
  "location": "YahooStepDef.yahooHomepageIsOpen()"
});
formatter.result({
  "duration": 64453431396,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "China",
      "offset": 7
    }
  ],
  "location": "YahooStepDef.enterInYahooSearchBox(String)"
});
formatter.result({
  "duration": 739829,
  "status": "passed"
});
formatter.match({
  "location": "YahooStepDef.yahooDisplaysRelevantSearchResult()"
});
formatter.result({
  "duration": 130005,
  "status": "passed"
});
});