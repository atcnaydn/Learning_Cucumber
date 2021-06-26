Feature: validate Techfios login functionality 

Background: 
	Given User is on the "Techfios" login page
	
Scenario: 1 User should be able to login with valid credentials 

	When User enters username as "demo@techfios.com"
	When User enters password as "abc123"
	And User clicks submit
	Then User should be able to login
