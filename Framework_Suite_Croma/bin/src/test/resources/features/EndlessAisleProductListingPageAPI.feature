Feature: Endless Aisle Product Listing Page API Testing
Description: Users should be able to submit GET requests to Product Listing Page API and should get correct response

Scenario: TC#003_EndlessAisle_HomePage_Search_Box_Hitting_Enter
Given Endless Aisle End point URL is "<Endpoint_Url>"
And Input parameters are "<Parameters>"
And Product Code is "<Product_Code>"
When User send request with GET method and input parameters
Then API should send back appropriate response JSON
And JSON response should contain Product Code
And JSON response should contain Product Name
And API should return HTTP response code as SUCCESS 200