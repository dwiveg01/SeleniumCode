$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Dev Environment/intellij-workspace/MPOS_Suite/./src/test/resources/finalFeatures/EndlessAisleProductListingPageAPI.feature");
formatter.feature({
  "line": 1,
  "name": "Endless Aisle Product Listing Page API Testing",
  "description": "Description: Users should be able to submit GET requests to Product Listing Page API and should get correct response",
  "id": "endless-aisle-product-listing-page-api-testing",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "TC#003_EndlessAisle_HomePage_Search_Box_Hitting_Enter",
  "description": "",
  "id": "endless-aisle-product-listing-page-api-testing;tc#003-endlessaisle-homepage-search-box-hitting-enter",
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
  "name": "Product Code is \"\u003cProduct_Code\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User send request with GET method and input parameters",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "API should send back appropriate response JSON",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "JSON response should contain Product Code",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "JSON response should contain Product Name",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "API should return HTTP response code as SUCCESS 200",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "endless-aisle-product-listing-page-api-testing;tc#003-endlessaisle-homepage-search-box-hitting-enter;",
  "rows": [
    {
      "cells": [
        "Product_Code",
        "Endpoint_Url",
        "Parameters"
      ],
      "line": 16,
      "id": "endless-aisle-product-listing-page-api-testing;tc#003-endlessaisle-homepage-search-box-hitting-enter;;1"
    },
    {
      "cells": [
        "100234",
        "https://10.34.32.31:9002/cromaMobileApplWebservices/v2/croma_retail_shop/search?",
        "query\u003dmobile"
      ],
      "line": 17,
      "id": "endless-aisle-product-listing-page-api-testing;tc#003-endlessaisle-homepage-search-box-hitting-enter;;2"
    },
    {
      "cells": [
        "145278",
        "https://10.34.32.31:9002/cromaMobileApplWebservices/v2/croma_retail_shop/search?",
        "query\u003dTV"
      ],
      "line": 18,
      "id": "endless-aisle-product-listing-page-api-testing;tc#003-endlessaisle-homepage-search-box-hitting-enter;;3"
    },
    {
      "cells": [
        "146434",
        "https://10.34.32.31:9002/cromaMobileApplWebservices/v2/croma_retail_shop/search?",
        "query\u003dAC"
      ],
      "line": 19,
      "id": "endless-aisle-product-listing-page-api-testing;tc#003-endlessaisle-homepage-search-box-hitting-enter;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "TC#003_EndlessAisle_HomePage_Search_Box_Hitting_Enter",
  "description": "",
  "id": "endless-aisle-product-listing-page-api-testing;tc#003-endlessaisle-homepage-search-box-hitting-enter;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "Endless Aisle End point URL is \"https://10.34.32.31:9002/cromaMobileApplWebservices/v2/croma_retail_shop/search?\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Input parameters are \"query\u003dmobile\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Product Code is \"100234\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User send request with GET method and input parameters",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "API should send back appropriate response JSON",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "JSON response should contain Product Code",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "JSON response should contain Product Name",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "API should return HTTP response code as SUCCESS 200",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://10.34.32.31:9002/cromaMobileApplWebservices/v2/croma_retail_shop/search?",
      "offset": 32
    }
  ],
  "location": "HomePage_StepDef.endless_Aisle_End_point_URL_is(String)"
});
formatter.result({
  "duration": 820472700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "query\u003dmobile",
      "offset": 22
    }
  ],
  "location": "HomePage_StepDef.input_parameters_are(String)"
});
formatter.result({
  "duration": 125000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100234",
      "offset": 17
    }
  ],
  "location": "PLP_StepDef.product_Code_is(String)"
});
formatter.result({
  "duration": 251300,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_StepDef.user_send_request_with_GET_method_and_input_parameters()"
});
formatter.result({
  "duration": 38200,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_StepDef.api_should_send_back_appropriate_response_JSON()"
});
formatter.result({
  "duration": 37600,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_StepDef.json_response_should_contain_Product_Code()"
});
formatter.result({
  "duration": 46300,
  "status": "passed"
});
formatter.match({
  "location": "HomePage_StepDef.json_response_should_contain_Product_Name()"
});
formatter.result({
  "duration": 36700,
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
  "duration": 6707500,
  "status": "passed"
});
