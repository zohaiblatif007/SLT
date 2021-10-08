$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/PatientGrid/SMSFunctionality/SMSFunctionality.feature");
formatter.feature({
  "name": "Verify SMS notification is working fine",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Edit entry and Send SMS from communication center and resend message verify",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VrifysendandResendafterEditMessage"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I select SMS log from communication center dropdwon",
  "keyword": "When "
});
formatter.step({
  "name": "I click on edit button to send meassage",
  "keyword": "And "
});
formatter.step({
  "name": "I Update message \u003cMessage_Text\u003e in meassage box",
  "keyword": "* "
});
formatter.step({
  "name": "I click the Send SMS button after edit",
  "keyword": "* "
});
formatter.step({
  "name": "I should see the Message sent successfully notification after edit",
  "keyword": "* "
});
formatter.step({
  "name": "I apply left filter to refresh the sms sent record",
  "keyword": "* "
});
formatter.step({
  "name": "I click on resend button to send message again",
  "keyword": "* "
});
formatter.step({
  "name": "I should see the Message sent successfully notification after edit",
  "keyword": "* "
});
formatter.step({
  "name": "I should see attempts count increases",
  "keyword": "* "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Filter",
        "Patient",
        "Language",
        "Message_Text"
      ]
    },
    {
      "cells": [
        "Contains",
        "AmericanExpress, AmericanExpress",
        "Spanish",
        "Edit message"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to patient grid",
  "keyword": "Given "
});
formatter.match({
  "location": "SD_PatientGrid.I_navigate_to_patient_grid()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Edit entry and Send SMS from communication center and resend message verify",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@VrifysendandResendafterEditMessage"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I select SMS log from communication center dropdwon",
  "keyword": "When "
});
formatter.match({
  "location": "SMSverification.smslog()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on edit button to send meassage",
  "keyword": "And "
});
formatter.match({
  "location": "SMSverification.editmessagebutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Update message Edit message in meassage box",
  "keyword": "* "
});
formatter.match({
  "location": "SMSverification.updatetextmessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the Send SMS button after edit",
  "keyword": "* "
});
formatter.match({
  "location": "SMSverification.lsendsmsbuttonne()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the Message sent successfully notification after edit",
  "keyword": "* "
});
formatter.match({
  "location": "SMSverification.sendnotificationmessageedit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I apply left filter to refresh the sms sent record",
  "keyword": "* "
});
formatter.match({
  "location": "SMSverification.filterapply()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on resend button to send message again",
  "keyword": "* "
});
formatter.match({
  "location": "SMSverification.resendsmsbutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the Message sent successfully notification after edit",
  "keyword": "* "
});
formatter.match({
  "location": "SMSverification.sendnotificationmessageedit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see attempts count increases",
  "keyword": "* "
});
formatter.match({
  "location": "SMSverification.countverifytmessage()"
});
formatter.result({
  "status": "passed"
});
});