$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Dev Environment/intellij-workspace/MPOS_Suite/./src/test/resources/finalFeatures/EndlessAisleHomePageAPI.feature");
formatter.feature({
  "line": 1,
  "name": "Endless Aisle HomePage API Testing",
  "description": "Description: Users should be able to submit GET requests to  API and should get correct response",
  "id": "endless-aisle-homepage-api-testing",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "TC#001_EndlessAisle_HomePage_CMS_Template",
  "description": "",
  "id": "endless-aisle-homepage-api-testing;tc#001-endlessaisle-homepage-cms-template",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Endless Aisle End point URL is \"\u003cEndpoint_Url\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Input parameters are \"\u003cParameters\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User send request with GET method and input parameters",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "API should send back appropriate response JSON",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "JSON response should contain Endless Aisle LOGO details",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "JSON response should contain Endless Aisle PIN CODE Box details",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "API should return HTTP response code as SUCCESS 200",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "endless-aisle-homepage-api-testing;tc#001-endlessaisle-homepage-cms-template;",
  "rows": [
    {
      "cells": [
        "Endpoint_Url",
        "Parameters"
      ],
      "line": 17,
      "id": "endless-aisle-homepage-api-testing;tc#001-endlessaisle-homepage-cms-template;;1"
    },
    {
      "cells": [
        "https://10.34.32.31:9002/cromaMobileApplWebservices/v2/croma_retail_shop/cms/pages?",
        "pageType\u003dContentPage\u0026pageLabelOrId\u003dEndlessAisleHomePage\u0026fields\u003dDEFAULT"
      ],
      "line": 18,
      "id": "endless-aisle-homepage-api-testing;tc#001-endlessaisle-homepage-cms-template;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "TC#001_EndlessAisle_HomePage_CMS_Template",
  "description": "",
  "id": "endless-aisle-homepage-api-testing;tc#001-endlessaisle-homepage-cms-template;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Endless Aisle End point URL is \"https://10.34.32.31:9002/cromaMobileApplWebservices/v2/croma_retail_shop/cms/pages?\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Input parameters are \"pageType\u003dContentPage\u0026pageLabelOrId\u003dEndlessAisleHomePage\u0026fields\u003dDEFAULT\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User send request with GET method and input parameters",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "API should send back appropriate response JSON",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "JSON response should contain Endless Aisle LOGO details",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "JSON response should contain Endless Aisle PIN CODE Box details",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "API should return HTTP response code as SUCCESS 200",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://10.34.32.31:9002/cromaMobileApplWebservices/v2/croma_retail_shop/cms/pages?",
      "offset": 32
    }
  ],
  "location": "HomePage_StepDef.endless_Aisle_End_point_URL_is(String)"
});
formatter.result({
  "duration": 814412600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pageType\u003dContentPage\u0026pageLabelOrId\u003dEndlessAisleHomePage\u0026fields\u003dDEFAULT",
      "offset": 22
    }
  ],
  "location": "HomePage_StepDef.input_parameters_are(String)"
});
formatter.result({
  "duration": 107500,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_StepDef.user_send_request_with_GET_method_and_input_parameters()"
});
formatter.result({
  "duration": 27200,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_StepDef.api_should_send_back_appropriate_response_JSON()"
});
formatter.result({
  "duration": 43400,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_StepDef.json_response_should_contain_Endless_Aisle_LOGO_details()"
});
formatter.result({
  "duration": 38000,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_StepDef.json_response_should_contain_Endless_Aisle_PIN_CODE_Box_details()"
});
formatter.result({
  "duration": 43000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 48
    }
  ],
  "location": "HomePage_StepDef.api_should_return_HTTP_response_code_as_SUCCESS(int)"
});
formatter.result({
  "duration": 138400,
  "status": "passed"
});
