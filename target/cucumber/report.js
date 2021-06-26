$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TF_Login.feature");
formatter.feature({
  "line": 1,
  "name": "validate Techfios login functionality",
  "description": "",
  "id": "validate-techfios-login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3920003700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Techfios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.user_is_in_the_techfios_login_page()"
});
formatter.result({
  "duration": 192351000,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "validate-techfios-login-functionality;1-user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks submit",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should be able to login",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDef.user_enters_username_as(String)"
});
formatter.result({
  "duration": 196974300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "LoginStepDef.user_enters_password_as(String)"
});
formatter.result({
  "duration": 116316200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_clicks_submit()"
});
formatter.result({
  "duration": 1638349600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.user_should_be_able_to_login()"
});
formatter.result({
  "duration": 82600,
  "status": "passed"
});
formatter.after({
  "duration": 1527570500,
  "status": "passed"
});
});