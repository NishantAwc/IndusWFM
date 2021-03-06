$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("StrategicSite.feature");
formatter.feature({
  "line": 1,
  "name": "Login to WFM Application and verify StrategicSite form submitted successfully",
  "description": "",
  "id": "login-to-wfm-application-and-verify-strategicsite-form-submitted-successfully",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Open the browser and signIn",
  "description": "",
  "id": "login-to-wfm-application-and-verify-strategicsite-form-submitted-successfully;open-the-browser-and-signin",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@StrategicSiteFormTest"
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
  "duration": 6580662000,
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
  "duration": 9565694200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination._enter_email_and_password_with_follwing_values(DataTable)"
});
formatter.result({
  "duration": 2088408900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination._click_on_signin_button()"
});
formatter.result({
  "duration": 20904054800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination._verify_home_page_is_open_and_signin_is_successful()"
});
formatter.result({
  "duration": 3517701600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Navigate to StrategicSite Form",
  "description": "",
  "id": "login-to-wfm-application-and-verify-strategicsite-form-submitted-successfully;navigate-to-strategicsite-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@StrategicSiteFormTest"
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
  "name": ": Click on StrategicSite link on the Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": ": Verify StrategicSite form is open",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.signin_is_successful()"
});
formatter.result({
  "duration": 261800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination._click_on_strategicsite_link_on_the_home_page()"
});
formatter.result({
  "duration": 1884488200,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination._verify_strategicsite_form_is_open()"
});
formatter.result({
  "duration": 163200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Select values on the NormalSite Form",
  "description": "",
  "id": "login-to-wfm-application-and-verify-strategicsite-form-submitted-successfully;select-values-on-the-normalsite-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@StrategicSiteFormTest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": ": StrategicSite form is open",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": ": Enter values for StrategicSite form with following details",
  "rows": [
    {
      "cells": [
        "1000",
        "INDUS01",
        "INDUS01",
        "1234",
        "123",
        "987",
        "564",
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
  "name": ": Verify Values enetred successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination._strategicsite_form_is_open()"
});
formatter.result({
  "duration": 157300,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination._enter_values_for_strategicsite_form_with_following_details(DataTable)"
});
formatter.result({
  "duration": 23248927600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination._verify_values_enetred_successfully()"
});
formatter.result({
  "duration": 132500,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Validate StrategicSite form is submitted Successfully",
  "description": "",
  "id": "login-to-wfm-application-and-verify-strategicsite-form-submitted-successfully;validate-strategicsite-form-is-submitted-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@StrategicSiteFormTest"
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
  "duration": 163000,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination._click_on_submit_button()"
});
formatter.result({
  "duration": 1604575600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination._verify_form_is_submitted()"
});
formatter.result({
  "duration": 18394460500,
  "status": "passed"
});
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          formatter.result({
  "duration": 30532486400,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d79.0.3945.117)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-9ECRCSO\u0027, ip: \u0027192.168.1.156\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_45\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.117, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\NISHAN~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:60373}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a46b7945d0317c14aca2e775cdf5c06e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.alert(RemoteWebDriver.java:928)\r\n\tat stepDefinations.stepDefination._verify_form_is_submitted(stepDefination.java:686)\r\n\tat ✽.Then : Verify Form is submitted(StrategicSite.feature:29)\r\n",
  "status": "failed"
});
});