$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/DevEnvironment/IntelliJ Workspace/MPOS_Suite/./src/test/resources/features/MPOS.feature");
formatter.feature({
  "line": 2,
  "name": "Google Test",
  "description": "",
  "id": "google-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Search keywords in Google",
  "description": "",
  "id": "google-test;search-keywords-in-google",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Google homepage is open",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter \"\u003csearchKey\u003e\" in Search box",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Google displays relevant search result",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "google-test;search-keywords-in-google;",
  "rows": [
    {
      "cells": [
        "searchKey"
      ],
      "line": 9,
      "id": "google-test;search-keywords-in-google;;1"
    },
    {
      "cells": [
        "USA"
      ],
      "line": 10,
      "id": "google-test;search-keywords-in-google;;2"
    },
    {
      "cells": [
        "China"
      ],
      "line": 11,
      "id": "google-test;search-keywords-in-google;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Search keywords in Google",
  "description": "",
  "id": "google-test;search-keywords-in-google;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Google homepage is open",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter \"USA\" in Search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Google displays relevant search result",
  "keyword": "Then "
});
formatter.match({
  "location": "MPOS.googleHomepageIsOpen()"
});
formatter.result({
  "duration": 178983299963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "USA",
      "offset": 7
    }
  ],
  "location": "MPOS.enterInSearchBox(String)"
});
formatter.result({
  "duration": 60010812623,
  "status": "passed"
});
formatter.match({
  "location": "MPOS.googleDisplaysRelevantSearchResult()"
});
formatter.result({
  "duration": 31384183395,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Search keywords in Google",
  "description": "",
  "id": "google-test;search-keywords-in-google;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Google homepage is open",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter \"China\" in Search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Google displays relevant search result",
  "keyword": "Then "
});
formatter.match({
  "location": "MPOS.googleHomepageIsOpen()"
});
formatter.result({
  "duration": 19524966451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "China",
      "offset": 7
    }
  ],
  "location": "MPOS.enterInSearchBox(String)"
});
formatter.result({
  "duration": 21138838118,
  "status": "passed"
});
formatter.match({
  "location": "MPOS.googleDisplaysRelevantSearchResult()"
});
formatter.result({
  "duration": 30082053885,
  "status": "passed"
});
});