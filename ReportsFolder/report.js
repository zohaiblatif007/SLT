$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/PatientGrid/PatientSearch.feature");
formatter.feature({
  "name": "Add All types of Assessments",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@PatientSearch"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Add Recommended Billable Assessment with all fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Patientsearch"
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
  "name": "I search \u003cPatient\u003e using global search",
  "keyword": "Given "
});
formatter.step({
  "name": "I verify patient is selected",
  "keyword": "* "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Patient"
      ]
    },
    {
      "cells": [
        "Danial722, Hack722"
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
  "name": "Add Recommended Billable Assessment with all fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PatientSearch"
    },
    {
      "name": "@Patientsearch"
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
  "name": "I search Danial722, Hack722 using global search",
  "keyword": "Given "
});
formatter.match({
  "location": "SD_SearchPatient.search_Patient(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify patient is selected",
  "keyword": "* "
});
formatter.match({
  "location": "SD_SearchPatient.search_Patientverification()"
});
formatter.result({
  "status": "passed"
});
});