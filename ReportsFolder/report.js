$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/PatientGrid/LeftFilters.feature");
formatter.feature({
  "name": "Left Filters",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LeftFilters"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Applying Multi Facility Filters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@UMP_MultiFacility"
    }
  ]
});
formatter.step({
  "name": "I am on patient grid left filters",
  "keyword": "Given "
});
formatter.step({
  "name": "I click on reset button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see left filter options are reset to default",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter facility \u003cFacility1\u003e for left filter",
  "keyword": "When "
});
formatter.step({
  "name": "I enter facility \u003cFacility2\u003e for left filter",
  "keyword": "And "
});
formatter.step({
  "name": "I click on apply button",
  "keyword": "* "
});
formatter.step({
  "name": "I should see \u003cFacility1\u003e as Facility1 in left filter",
  "keyword": "Then "
});
formatter.step({
  "name": "I should see \u003cFacility2\u003e as Facility2 in left filter",
  "keyword": "Then "
});
formatter.step({
  "name": "I should see multi facility of filtered patients is \u003cFacility1\u003e and \u003cFacility2\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Facility1",
        "Facility2"
      ]
    },
    {
      "cells": [
        "MHPN",
        "MHPN2"
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
  "name": "Applying Multi Facility Filters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LeftFilters"
    },
    {
      "name": "@UMP_MultiFacility"
    }
  ]
});
formatter.step({
  "name": "I am on patient grid left filters",
  "keyword": "Given "
});
formatter.match({
  "location": "SD_LeftFilters.verifyonleftfilter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on reset button",
  "keyword": "And "
});
formatter.match({
  "location": "SD_LeftFilters.click_On_Reset_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see left filter options are reset to default",
  "keyword": "Then "
});
formatter.match({
  "location": "SD_LeftFilters.verifyonleftfilterreset()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter facility MHPN for left filter",
  "keyword": "When "
});
formatter.match({
  "location": "SD_LeftFilters.user_Enter_Facility(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter facility MHPN2 for left filter",
  "keyword": "And "
});
formatter.match({
  "location": "SD_LeftFilters.user_Enter_Facility(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on apply button",
  "keyword": "* "
});
formatter.match({
  "location": "SD_LeftFilters.click_On_Apply_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see MHPN as Facility1 in left filter",
  "keyword": "Then "
});
formatter.match({
  "location": "SD_LeftFilters.Facility2_and_Program_filters_should_be_updated(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see MHPN2 as Facility2 in left filter",
  "keyword": "Then "
});
formatter.match({
  "location": "SD_LeftFilters.Facility1_and_Program_filters_should_be_updated(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see multi facility of filtered patients is MHPN and MHPN2",
  "keyword": "And "
});
formatter.match({
  "location": "SD_LeftFilters.Facilitymultiple_patientgrid(String,String)"
});
formatter.result({
  "status": "passed"
});
});