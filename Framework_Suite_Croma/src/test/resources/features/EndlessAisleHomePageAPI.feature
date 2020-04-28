Feature: Endless Aisle HomePage API Testing
Description: Users should be able to submit GET requests to  API and should get correct response 

Scenario: TC#001_EndlessAisle_HomePage_CMS_Template
Given Endless Aisle End point URL is "<Endpoint_Url>"
And Input parameters are "<Parameters>"
When User send request with GET method and input parameters
Then API should send back appropriate response JSON
And JSON response should contain Endless Aisle LOGO details
And JSON response should contain Endless Aisle PIN CODE Box details
And API should return HTTP response code as SUCCESS 200

Scenario: TC#002_EndlessAisle_HomePage_Category_Tiles
Given Endless Aisle End point URL is "<Endpoint_Url>"
And Category Code is "<Category_Code>"
And Input parameters are "<Parameters>"
When User send request with GET method and input parameters
Then API should send back appropriate response JSON
And JSON response should contain Product Code
And JSON response should contain Product Name
And API should return HTTP response code as SUCCESS 200
