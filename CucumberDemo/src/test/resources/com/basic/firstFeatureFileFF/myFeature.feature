Feature: Facebook login

As a fb user I want to enter user name and password as a parameter

Scenario: Validate the login scenario

Given the user login to the facebook
When he enters "Gaurav" as a Username
Then he enters "Dwivedy" as a password
Then Click on Log In button