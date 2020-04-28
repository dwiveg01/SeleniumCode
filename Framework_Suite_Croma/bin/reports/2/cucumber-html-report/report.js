$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Dev Environment/intellij-workspace/MPOS_Suite/./src/test/resources/features/Google.feature");
formatter.feature({
  "line": 2,
  "name": "Google Test",
  "description": "",
  "id": "google-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "TC#001_Search_keywords_in_Google",
  "description": "",
  "id": "google-test;tc#001-search-keywords-in-google",
  "type": "scenario",
  "keyword": "Scenario"
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
formatter.match({
  "location": "GoogleStepDef.googleHomepageIsOpen()"
});
