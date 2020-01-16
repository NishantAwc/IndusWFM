$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("NormalSite.feature");
formatter.feature({
  "line": 1,
  "name": "Login to WFM Application and verify NormalSite form submitted successfully",
  "description": "",
  "id": "login-to-wfm-application-and-verify-normalsite-form-submitted-successfully",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Open the browser and signIn",
  "description": "",
  "id": "login-to-wfm-application-and-verify-normalsite-form-submitted-successfully;open-the-browser-and-signin",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@NormalSiteFormTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": ": Intialize the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": ": Navigate to \"https://industowers.sharepoint.com/sites/idocumentum/wfmdev\" Url",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": ": Enter username and password with follwing details",
  "rows": [
    {
      "cells": [
        "p-akash.verma@industowers.com",
        "user@123"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": ": Click on SignIn Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": ": Verify Home Page is open and SignIn is successful",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination._intialize_the_browser()"
});
formatter.result({
  "duration": 6328181000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://industowers.sharepoint.com/sites/idocumentum/wfmdev",
      "offset": 15
    }
  ],
  "location": "stepDefination._navigate_to_something_url(String)"
});
formatter.result({
  "duration": 8378318400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination._enter_email_and_password_with_follwing_values(DataTable)"
});
formatter.result({
  "duration": 2105682900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination._click_on_signin_button()"
});
formatter.result({
  "duration": 17379791400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination._verify_home_page_is_open_and_signin_is_successful()"
});
formatter.result({
  "duration": 3535324200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Navigate to NormalSite Form",
  "description": "",
  "id": "login-to-wfm-application-and-verify-normalsite-form-submitted-successfully;navigate-to-normalsite-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@NormalSiteFormTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": ": Signin is successful",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": ": Click on NormalSite link on the Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": ": Verify NormalSite form is open",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.signin_is_successful()"
});
formatter.result({
  "duration": 366600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination._click_on_normalsite_link_on_the_home_page()"
});
formatter.result({
  "duration": 2101980900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination._verify_normalsite_form_is_open()"
});
formatter.result({
  "duration": 358300,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Select values on the NormalSite Form",
  "description": "",
  "id": "login-to-wfm-application-and-verify-normalsite-form-submitted-successfully;select-values-on-the-normalsite-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@NormalSiteFormTest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": ": NormalSite form is open",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": ": Enter values for Normal Site with following details",
  "rows": [
    {
      "cells": [
        "1000",
        "INDUS01",
        "INDUS01",
        "1234",
        "123",
        "5678",
        "8976",
        "This form is for test purpose",
        "This form is for test purpose",
        "This form is for test purpose",
        "This form is for test purpose",
        "This form is for test purpose",
        "1000",
        "1200",
        "231",
        "BudgetHead01",
        "PreferredSupplier01",
        "This form is for test purpose",
        "This form is for test purpose",
        "This form is for test purpose",
        "This form is for test purpose"
      ],
      "line": 22
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": ": Verify Values enetred successfully for the NormalSite",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination._normalsite_form_is_open()"
});
formatter.result({
  "duration": 286700,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination._enter_values_for_normal_site_with_following_details(DataTable)"
});
formatter.result({
  "duration": 25289494500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination._verify_values_enetred_successfully_for_the_normalsite()"
});
formatter.result({
  "duration": 208500,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Validate Normal Site form is submitted Successfully",
  "description": "",
  "id": "login-to-wfm-application-and-verify-normalsite-form-submitted-successfully;validate-normal-site-form-is-submitted-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@NormalSiteFormTest"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": ": Values are entered successfully",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": ": Click on Submit Button",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": ": Verify Form is submitted",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination._values_are_entered_successfully()"
});
formatter.result({
  "duration": 295400,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination._click_on_submit_button()"
});
formatter.result({
  "duration": 1643562500,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination._verify_form_is_submitted()"
});
formatter.result({
  "duration": 18069846900,
  "status": "passed"
});
});