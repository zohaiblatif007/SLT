$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/PatientGrid/Assessment/Assessment.feature");
formatter.feature({
  "name": "Add All types of Assessments",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Assessment"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Add Recommended Billable Assessment with all fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddRecommendedAssessment"
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
formatter.step({
  "name": "I click on Assessment tab",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Assessment Add button",
  "keyword": "When "
});
formatter.step({
  "name": "I click on Recommended Assessment tab to add assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I should see Cancel, Save \u0026 Close and Save buttons available and functional",
  "keyword": "* "
});
formatter.step({
  "name": "I should see the Questionaire is loaded against relevant assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I should see question removing cross sign available and functional",
  "keyword": "* "
});
formatter.step({
  "name": "I enter \u003cTitle\u003e in assessment title field",
  "keyword": "* "
});
formatter.step({
  "name": "I enter \u003cCPTCode\u003e in assessment CPTCode field",
  "keyword": "* "
});
formatter.step({
  "name": "I enter \u003cComment\u003e in assessment comment field",
  "keyword": "* "
});
formatter.step({
  "name": "I enter answer \u003cAns1\u003e to question 1 in RecommendedAssessment",
  "keyword": "* "
});
formatter.step({
  "name": "I enter answer \u003cAns2\u003e to question 2 in RecommendedAssessment",
  "keyword": "* "
});
formatter.step({
  "name": "I enter answer \u003cAns3\u003e to question 3 in RecommendedAssessment",
  "keyword": "* "
});
formatter.step({
  "name": "I enter answer \u003cAns4\u003e to question 4 in RecommendedAssessment",
  "keyword": "* "
});
formatter.step({
  "name": "I enter answer \u003cAns5\u003e to question 5 in RecommendedAssessment",
  "keyword": "* "
});
formatter.step({
  "name": "I click on Save button to save assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I should see success message for added assessment",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on Save and Close button to save assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I should see success message for added assessment",
  "keyword": "Then "
});
formatter.step({
  "name": "I should see Edit button available and functional",
  "keyword": "And "
});
formatter.step({
  "name": "I should see the newly added \u003cTitle\u003e and \u003cBillableType\u003e and \u003cCPTCode\u003e for assessment on grid",
  "keyword": "And "
});
formatter.step({
  "name": "I should see \u003cTitle\u003e and current system Date and No of Q Ans and \u003cAns1\u003e and \u003cAns2\u003e and \u003cAns3\u003e and \u003cAns4\u003e and \u003cAns5\u003e and \u003cComment\u003e for assessment in the right pan",
  "keyword": "* "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Patient",
        "Title",
        "BillableType",
        "CPTCode",
        "Comment",
        "Ans1",
        "Ans2",
        "Ans3",
        "Ans4",
        "Ans5"
      ]
    },
    {
      "cells": [
        "Danial722, Hack722",
        "HTN-1",
        "Yes",
        "893",
        "chronic disease",
        "Yes",
        "Most of the time",
        "All of the time",
        "No",
        "Yes"
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
      "name": "@Assessment"
    },
    {
      "name": "@AddRecommendedAssessment"
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
formatter.step({
  "name": "I click on Assessment tab",
  "keyword": "And "
});
formatter.match({
  "location": "Assessment.buttoncaregaptab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Assessment Add button",
  "keyword": "When "
});
formatter.match({
  "location": "Assessment.Assementadd()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Recommended Assessment tab to add assessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.recommendedassessment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Cancel, Save \u0026 Close and Save buttons available and functional",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.buttonsvalidations()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the Questionaire is loaded against relevant assessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.questionaire()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see question removing cross sign available and functional",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Questionremovesign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter HTN-1 in assessment title field",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter 893 in assessment CPTCode field",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.CPTCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter chronic disease in assessment comment field",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.comment(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter answer Yes to question 1 in RecommendedAssessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Ansquestion1rec(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter answer Most of the time to question 2 in RecommendedAssessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Ansquestion2rec(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter answer All of the time to question 3 in RecommendedAssessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Ansquestion3rec(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter answer No to question 4 in RecommendedAssessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Ansquestion4rec(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter answer Yes to question 5 in RecommendedAssessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Ansquestion5rec(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Save button to save assessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Obj_buttonsaveand()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see success message for added assessment",
  "keyword": "Then "
});
formatter.match({
  "location": "Assessment.addadalert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Save and Close button to save assessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Obj_buttonsaveandclose()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see success message for added assessment",
  "keyword": "Then "
});
formatter.match({
  "location": "Assessment.addadalert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Edit button available and functional",
  "keyword": "And "
});
formatter.match({
  "location": "Assessment.editbuttonassessmentverify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the newly added HTN-1 and Yes and 893 for assessment on grid",
  "keyword": "And "
});
formatter.match({
  "location": "Assessment.Addassessmentverify(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see HTN-1 and current system Date and No of Q Ans and Yes and Most of the time and All of the time and No and Yes and chronic disease for assessment in the right pan",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Addassessmentverifyrightpan(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Test Cancel button feature in Recommended Assessment",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CancelbuttonofAssessment"
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
formatter.step({
  "name": "I click on Assessment tab",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Assessment Add button",
  "keyword": "When "
});
formatter.step({
  "name": "I click on Recommended Assessment tab to add assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I should see Cancel, Save \u0026 Close and Save buttons available and functional",
  "keyword": "* "
});
formatter.step({
  "name": "I should see the Questionaire is loaded against relevant assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I should see question removing cross sign available and functional",
  "keyword": "* "
});
formatter.step({
  "name": "I enter \u003cTitle\u003e in assessment title field",
  "keyword": "* "
});
formatter.step({
  "name": "I enter \u003cCPTCode\u003e in assessment CPTCode field",
  "keyword": "* "
});
formatter.step({
  "name": "I enter \u003cComment\u003e in assessment comment field",
  "keyword": "* "
});
formatter.step({
  "name": "I click on Cancel button to cancel the saved assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I should not see the canceled assessment present on the grid",
  "keyword": "* "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Patient",
        "Title",
        "BillableType",
        "CPTCode",
        "Comment"
      ]
    },
    {
      "cells": [
        "Danial722, Hack722",
        "HTN-1",
        "Yes",
        "893",
        "chronic desease"
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
  "name": "Test Cancel button feature in Recommended Assessment",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Assessment"
    },
    {
      "name": "@CancelbuttonofAssessment"
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
formatter.step({
  "name": "I click on Assessment tab",
  "keyword": "And "
});
formatter.match({
  "location": "Assessment.buttoncaregaptab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Assessment Add button",
  "keyword": "When "
});
formatter.match({
  "location": "Assessment.Assementadd()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Recommended Assessment tab to add assessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.recommendedassessment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Cancel, Save \u0026 Close and Save buttons available and functional",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.buttonsvalidations()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the Questionaire is loaded against relevant assessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.questionaire()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see question removing cross sign available and functional",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Questionremovesign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter HTN-1 in assessment title field",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter 893 in assessment CPTCode field",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.CPTCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter chronic desease in assessment comment field",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.comment(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Cancel button to cancel the saved assessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Obj_buttoncancel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should not see the canceled assessment present on the grid",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.cancelassessmentverify()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Add Billable Assessment with Other Assessment Templates",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddOtherAssessmentBillable"
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
formatter.step({
  "name": "I click on Assessment tab",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Assessment Add button",
  "keyword": "When "
});
formatter.step({
  "name": "I click on Other Assessment Templates tab to add Assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I select check box of \u003cB_Assessment\u003e Billable Assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I click on Proceed button to save assessment template",
  "keyword": "* "
});
formatter.step({
  "name": "I should see Cancel, Save \u0026 Close and Save buttons available and functional",
  "keyword": "* "
});
formatter.step({
  "name": "I should see the Questionaire is loaded against relevant assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I should see question removing cross sign available and functional",
  "keyword": "* "
});
formatter.step({
  "name": "I enter \u003cTitle\u003e in assessment title field",
  "keyword": "* "
});
formatter.step({
  "name": "I enter \u003cCPTCode\u003e in assessment CPTCode field",
  "keyword": "* "
});
formatter.step({
  "name": "I enter \u003cComment\u003e in assessment comment field",
  "keyword": "* "
});
formatter.step({
  "name": "I enter answer \u003cAns1\u003e to question 1",
  "keyword": "* "
});
formatter.step({
  "name": "I enter answer \u003cAns2\u003e to question 2",
  "keyword": "* "
});
formatter.step({
  "name": "I enter answer \u003cAns3\u003e to question 3",
  "keyword": "* "
});
formatter.step({
  "name": "I enter answer \u003cAns4\u003e to question 4",
  "keyword": "* "
});
formatter.step({
  "name": "I enter answer \u003cAns5\u003e to question 5",
  "keyword": "* "
});
formatter.step({
  "name": "I click on Save button to save assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I should see success message for added assessment",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on Save and Close button to save assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I should see success message for added assessment",
  "keyword": "Then "
});
formatter.step({
  "name": "I should see Edit button available and functional",
  "keyword": "And "
});
formatter.step({
  "name": "I should see the newly added \u003cTitle\u003e and \u003cBillableType\u003e and \u003cCPTCode\u003e for assessment on grid",
  "keyword": "And "
});
formatter.step({
  "name": "I should see \u003cTitle\u003e and current system Date and No of Q Ans and \u003cAns1\u003e and \u003cAns2\u003e and \u003cAns3\u003e and \u003cAns4\u003e and \u003cAns5\u003e and \u003cComment\u003e for assessment in the right pan",
  "keyword": "* "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Patient",
        "B_Assessment",
        "Title",
        "CPTCode",
        "Comment",
        "Ans1",
        "Ans2",
        "Ans3",
        "Ans4",
        "Ans5",
        "BillableType"
      ]
    },
    {
      "cells": [
        "Blake, Arnold",
        "Asthma",
        "Asthma Assessment-2",
        "689",
        "Asthma assessment",
        "Yes",
        "Yes",
        "Yes",
        "No",
        "Yes",
        "Yes"
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
  "name": "Add Billable Assessment with Other Assessment Templates",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Assessment"
    },
    {
      "name": "@AddOtherAssessmentBillable"
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
  "name": "I search Blake, Arnold using global search",
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
formatter.step({
  "name": "I click on Assessment tab",
  "keyword": "And "
});
formatter.match({
  "location": "Assessment.buttoncaregaptab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Assessment Add button",
  "keyword": "When "
});
formatter.match({
  "location": "Assessment.Assementadd()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Other Assessment Templates tab to add Assessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.otherassementTemplate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select check box of Asthma Billable Assessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.assementcheckbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Proceed button to save assessment template",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.proceedbutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Cancel, Save \u0026 Close and Save buttons available and functional",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.buttonsvalidations()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the Questionaire is loaded against relevant assessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.questionaire()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see question removing cross sign available and functional",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Questionremovesign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Asthma Assessment-2 in assessment title field",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter 689 in assessment CPTCode field",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.CPTCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Asthma assessment in assessment comment field",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.comment(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter answer Yes to question 1",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Ansquestion1(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter answer Yes to question 2",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Ansquestion2(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter answer Yes to question 3",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Ansquestion3(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter answer No to question 4",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Ansquestion4(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter answer Yes to question 5",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Ansquestion5(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Save button to save assessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Obj_buttonsaveand()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see success message for added assessment",
  "keyword": "Then "
});
formatter.match({
  "location": "Assessment.addadalert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Save and Close button to save assessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Obj_buttonsaveandclose()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see success message for added assessment",
  "keyword": "Then "
});
formatter.match({
  "location": "Assessment.addadalert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Edit button available and functional",
  "keyword": "And "
});
formatter.match({
  "location": "Assessment.editbuttonassessmentverify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the newly added Asthma Assessment-2 and Yes and 689 for assessment on grid",
  "keyword": "And "
});
formatter.match({
  "location": "Assessment.Addassessmentverify(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Asthma Assessment-2 and current system Date and No of Q Ans and Yes and Yes and Yes and No and Yes and Asthma assessment for assessment in the right pan",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Addassessmentverifyrightpan(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Add Non Billable Assessment with Other Assessment Templates",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddOtherAssessmentNonBillable"
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
formatter.step({
  "name": "I click on Assessment tab",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Assessment Add button",
  "keyword": "When "
});
formatter.step({
  "name": "I click on Other Assessment Templates tab to add Assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I select check box of \u003cB_Assessment\u003e Billable Assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I click on Proceed button to save assessment template",
  "keyword": "* "
});
formatter.step({
  "name": "I should see Cancel, Save \u0026 Close and Save buttons available and functional",
  "keyword": "* "
});
formatter.step({
  "name": "I should see the Questionaire is loaded against relevant assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I should see question removing cross sign available and functional",
  "keyword": "* "
});
formatter.step({
  "name": "I enter type of assessment as non billable",
  "keyword": "* "
});
formatter.step({
  "name": "I enter \u003cTitle\u003e in assessment title field",
  "keyword": "* "
});
formatter.step({
  "name": "I enter \u003cComment\u003e in assessment comment field",
  "keyword": "* "
});
formatter.step({
  "name": "I enter answer \u003cAns1\u003e to question 1",
  "keyword": "* "
});
formatter.step({
  "name": "I enter answer \u003cAns2\u003e to question 2",
  "keyword": "* "
});
formatter.step({
  "name": "I enter answer \u003cAns3\u003e to question 3",
  "keyword": "* "
});
formatter.step({
  "name": "I enter answer \u003cAns4\u003e to question 4",
  "keyword": "* "
});
formatter.step({
  "name": "I enter answer \u003cAns5\u003e to question 5",
  "keyword": "* "
});
formatter.step({
  "name": "I click on Save button to save assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I should see success message for added assessment",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on Save and Close button to save assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I should see success message for added assessment",
  "keyword": "Then "
});
formatter.step({
  "name": "I should see Edit button available and functional",
  "keyword": "And "
});
formatter.step({
  "name": "I should see the newly added \u003cTitle\u003e and \u003cBillableType\u003e and \u003cCPTCode\u003e for assessment on grid",
  "keyword": "And "
});
formatter.step({
  "name": "I should see \u003cTitle\u003e and current system Date and No of Q Ans and \u003cAns1\u003e and \u003cAns2\u003e and \u003cAns3\u003e and \u003cAns4\u003e and \u003cAns5\u003e and \u003cComment\u003e for assessment in the right pan",
  "keyword": "* "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Patient",
        "B_Assessment",
        "Title",
        "CPTCode",
        "Comment",
        "Ans1",
        "Ans2",
        "Ans3",
        "Ans4",
        "Ans5",
        "BillableType"
      ]
    },
    {
      "cells": [
        "Blake, Arnold",
        "Asthma",
        "Asthma Assessment-nonbillable",
        "",
        "Asthma assessment",
        "Yes",
        "Yes",
        "Yes",
        "No",
        "Yes",
        "No"
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
  "name": "Add Non Billable Assessment with Other Assessment Templates",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Assessment"
    },
    {
      "name": "@AddOtherAssessmentNonBillable"
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
  "name": "I search Blake, Arnold using global search",
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
formatter.step({
  "name": "I click on Assessment tab",
  "keyword": "And "
});
formatter.match({
  "location": "Assessment.buttoncaregaptab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Assessment Add button",
  "keyword": "When "
});
formatter.match({
  "location": "Assessment.Assementadd()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Other Assessment Templates tab to add Assessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.otherassementTemplate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select check box of Asthma Billable Assessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.assementcheckbox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Proceed button to save assessment template",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.proceedbutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Cancel, Save \u0026 Close and Save buttons available and functional",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.buttonsvalidations()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the Questionaire is loaded against relevant assessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.questionaire()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see question removing cross sign available and functional",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Questionremovesign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter type of assessment as non billable",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.BillableTypeno()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Asthma Assessment-nonbillable in assessment title field",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Asthma assessment in assessment comment field",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.comment(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter answer Yes to question 1",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Ansquestion1(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter answer Yes to question 2",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Ansquestion2(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter answer Yes to question 3",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Ansquestion3(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter answer No to question 4",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Ansquestion4(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter answer Yes to question 5",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Ansquestion5(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Save button to save assessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Obj_buttonsaveand()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see success message for added assessment",
  "keyword": "Then "
});
formatter.match({
  "location": "Assessment.addadalert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Save and Close button to save assessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Obj_buttonsaveandclose()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see success message for added assessment",
  "keyword": "Then "
});
formatter.match({
  "location": "Assessment.addadalert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Edit button available and functional",
  "keyword": "And "
});
formatter.match({
  "location": "Assessment.editbuttonassessmentverify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the newly added Asthma Assessment-nonbillable and No and  for assessment on grid",
  "keyword": "And "
});
formatter.match({
  "location": "Assessment.Addassessmentverify(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Asthma Assessment-nonbillable and current system Date and No of Q Ans and Yes and Yes and Yes and No and Yes and Asthma assessment for assessment in the right pan",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Addassessmentverifyrightpan(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Add in Custom Assessment with all fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddCustomAssessment"
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
  "name": "I click on Assessment tab",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Assessment Add button",
  "keyword": "When "
});
formatter.step({
  "name": "I click on Custom Assessment tab to add Assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I should see Cancel, Save \u0026 Close and Save buttons available and functional",
  "keyword": "* "
});
formatter.step({
  "name": "I enter \u003cTitle\u003e in assessment title field",
  "keyword": "* "
});
formatter.step({
  "name": "I enter \u003cBillableType\u003e in assessment billable type field",
  "keyword": "* "
});
formatter.step({
  "name": "I enter \u003cCPTCode\u003e in assessment CPTCode field",
  "keyword": "* "
});
formatter.step({
  "name": "I enter \u003cComment\u003e in assessment comment field",
  "keyword": "* "
});
formatter.step({
  "name": "I click on Save button to save assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I should see success message for added assessment",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on Save and Close button to save assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I should see success message for added assessment",
  "keyword": "Then "
});
formatter.step({
  "name": "I should see Edit button available and functional",
  "keyword": "And "
});
formatter.step({
  "name": "I should see the newly added \u003cTitle\u003e and \u003cBillableType\u003e and \u003cCPTCode\u003e for assessment on grid",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Patient",
        "Title",
        "BillableType",
        "CPTCode",
        "Comment"
      ]
    },
    {
      "cells": [
        "Blake, Arnold",
        "Covid Assessment",
        "Yes",
        "789",
        "DO KIDS NEED A COVID-19 VACCINE? Yes CAN ANTIBODY TESTS SHOW IF A COVID-19 VACCINE IS WORKING? Yes IF I’VE HAD COVID-19, DO I REALLY NEED THE VACCINE? No DO WE NEED BOOSTER DOSES? Yes DO COVID-19 VACCINES AFFECT FERTILITY OR PERIODS? Yes"
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
  "name": "Add in Custom Assessment with all fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Assessment"
    },
    {
      "name": "@AddCustomAssessment"
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
  "name": "I search Blake, Arnold using global search",
  "keyword": "Given "
});
formatter.match({
  "location": "SD_SearchPatient.search_Patient(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Assessment tab",
  "keyword": "And "
});
formatter.match({
  "location": "Assessment.buttoncaregaptab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Assessment Add button",
  "keyword": "When "
});
formatter.match({
  "location": "Assessment.Assementadd()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Custom Assessment tab to add Assessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.customassessment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Cancel, Save \u0026 Close and Save buttons available and functional",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.buttonsvalidations()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Covid Assessment in assessment title field",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Yes in assessment billable type field",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.BillableType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter 789 in assessment CPTCode field",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.CPTCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter DO KIDS NEED A COVID-19 VACCINE? Yes CAN ANTIBODY TESTS SHOW IF A COVID-19 VACCINE IS WORKING? Yes IF I’VE HAD COVID-19, DO I REALLY NEED THE VACCINE? No DO WE NEED BOOSTER DOSES? Yes DO COVID-19 VACCINES AFFECT FERTILITY OR PERIODS? Yes in assessment comment field",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.comment(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Save button to save assessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Obj_buttonsaveand()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see success message for added assessment",
  "keyword": "Then "
});
formatter.match({
  "location": "Assessment.addadalert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Save and Close button to save assessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Obj_buttonsaveandclose()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see success message for added assessment",
  "keyword": "Then "
});
formatter.match({
  "location": "Assessment.addadalert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Edit button available and functional",
  "keyword": "And "
});
formatter.match({
  "location": "Assessment.editbuttonassessmentverify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the newly added Covid Assessment and Yes and 789 for assessment on grid",
  "keyword": "And "
});
formatter.match({
  "location": "Assessment.Addassessmentverify(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Add Custom Assessment with all fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddBasedonPreviousmAssessment"
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
formatter.step({
  "name": "I click on Assessment tab",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Assessment Add button",
  "keyword": "When "
});
formatter.step({
  "name": "I click on Based on Previous Assessment tab to add Assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I should see Cancel, Save \u0026 Close and Save buttons available and functional",
  "keyword": "* "
});
formatter.step({
  "name": "I enter \u003cTitle\u003e in assessment title field",
  "keyword": "* "
});
formatter.step({
  "name": "I enter \u003cCPTCode\u003e in assessment CPTCode field",
  "keyword": "* "
});
formatter.step({
  "name": "I enter \u003cComment\u003e in assessment comment field",
  "keyword": "* "
});
formatter.step({
  "name": "I click on Save button to save assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I should see success message for added assessment",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on Save and Close button to save assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I should see success message for added assessment",
  "keyword": "Then "
});
formatter.step({
  "name": "I should see Edit button available and functional",
  "keyword": "And "
});
formatter.step({
  "name": "I should see the newly added \u003cTitle\u003e and \u003cBillableType\u003e and \u003cCPTCode\u003e for assessment on grid",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Patient",
        "Title",
        "BillableType",
        "CPTCode",
        "Comment"
      ]
    },
    {
      "cells": [
        "Blake, Arnold",
        "Covid Assessment-3",
        "Yes",
        "758",
        "Take Steam dailly"
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
  "name": "Add Custom Assessment with all fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Assessment"
    },
    {
      "name": "@AddBasedonPreviousmAssessment"
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
  "name": "I search Blake, Arnold using global search",
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
formatter.step({
  "name": "I click on Assessment tab",
  "keyword": "And "
});
formatter.match({
  "location": "Assessment.buttoncaregaptab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Assessment Add button",
  "keyword": "When "
});
formatter.match({
  "location": "Assessment.Assementadd()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Based on Previous Assessment tab to add Assessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.basedonpreviousssessment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Cancel, Save \u0026 Close and Save buttons available and functional",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.buttonsvalidations()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Covid Assessment-3 in assessment title field",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter 758 in assessment CPTCode field",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.CPTCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Take Steam dailly in assessment comment field",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.comment(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Save button to save assessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Obj_buttonsaveand()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see success message for added assessment",
  "keyword": "Then "
});
formatter.match({
  "location": "Assessment.addadalert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Save and Close button to save assessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.Obj_buttonsaveandclose()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see success message for added assessment",
  "keyword": "Then "
});
formatter.match({
  "location": "Assessment.addadalert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Edit button available and functional",
  "keyword": "And "
});
formatter.match({
  "location": "Assessment.editbuttonassessmentverify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the newly added Covid Assessment-3 and Yes and 758 for assessment on grid",
  "keyword": "And "
});
formatter.match({
  "location": "Assessment.Addassessmentverify(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Compare two Assessments",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CompareAssessment"
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
formatter.step({
  "name": "I click on Assessment tab",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Assessment Compare button",
  "keyword": "When "
});
formatter.step({
  "name": "I click on assessment to compare with other assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I should see the name of assessment1",
  "keyword": "* "
});
formatter.step({
  "name": "I should see the date at which assessment1 is created",
  "keyword": "* "
});
formatter.step({
  "name": "I should see the name of assessment2",
  "keyword": "* "
});
formatter.step({
  "name": "I should see the date at which assessment2 is created",
  "keyword": "* "
});
formatter.step({
  "name": "I should see stop compare button of assessment",
  "keyword": "* "
});
formatter.step({
  "name": "I click on stop compare button of assessment",
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
        "Blake, Arnold"
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
  "name": "Compare two Assessments",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Assessment"
    },
    {
      "name": "@CompareAssessment"
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
  "name": "I search Blake, Arnold using global search",
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
formatter.step({
  "name": "I click on Assessment tab",
  "keyword": "And "
});
formatter.match({
  "location": "Assessment.buttoncaregaptab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Assessment Compare button",
  "keyword": "When "
});
formatter.match({
  "location": "Assessment.comparesssessment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on assessment to compare with other assessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.comparewithsssessment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the name of assessment1",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.assessment1nameverify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the date at which assessment1 is created",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.assessment1dateverify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the name of assessment2",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.assessment2nameverify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the date at which assessment2 is created",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.assessment2dateverify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see stop compare button of assessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.assessmentstopcomprebtunverify()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on stop compare button of assessment",
  "keyword": "* "
});
formatter.match({
  "location": "Assessment.assessmentcomparecross()"
});
formatter.result({
  "status": "passed"
});
});