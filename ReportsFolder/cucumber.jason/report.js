$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/PatientGrid/SMSFunctionality/SMSFunctionalityCCgrid.feature");
formatter.feature({
  "name": "Verify SMS notification is working fine",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Create appointment from CC grid to PWB",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreatAppointmentfromCCGrid"
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
  "name": "I search \u003cPatient\u003e using global search from CC",
  "keyword": "Given "
});
formatter.step({
  "name": "I click on searched patient from CC",
  "keyword": "And "
});
formatter.step({
  "name": "I click on appointment tab",
  "keyword": "* "
});
formatter.step({
  "name": "I click on Add button to add appointment",
  "keyword": "* "
});
formatter.step({
  "name": "I set visit type as telehealth in PWB",
  "keyword": "* "
});
formatter.step({
  "name": "I verify that copy button and send sms button available and functional",
  "keyword": "* "
});
formatter.step({
  "name": "I set \u003cReason\u003e to schedual the appointment",
  "keyword": "* "
});
formatter.step({
  "name": "I set start date for appointment",
  "keyword": "* "
});
formatter.step({
  "name": "I set end date for appointment",
  "keyword": "* "
});
formatter.step({
  "name": "I set status \u003cStatus\u003e for appointment",
  "keyword": "* "
});
formatter.step({
  "name": "I enter \u003cComment\u003e in text area of appointment",
  "keyword": "* "
});
formatter.step({
  "name": "I click the save button to save Appointments",
  "keyword": "When "
});
formatter.step({
  "name": "I should see success message for \u003cmodule\u003e record",
  "keyword": "Then "
});
formatter.step({
  "name": "I verify that appointment created successfully with \u003cReason\u003e and \u003cStatus\u003e and \u003cComment\u003e and with telehealth type",
  "keyword": "* "
});
formatter.step({
  "name": "I should see Edit appointment, Show log and Delete buttons are available and functional",
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
        "Phone",
        "Message_Text",
        "Status",
        "Comment",
        "module",
        "Reason"
      ]
    },
    {
      "cells": [
        "Contains",
        "Shelly, Shelly",
        "Spanish",
        "+19294154089",
        "Edit message",
        "Scheduled",
        "Appointment created through CC grid",
        "adding",
        "Abnormal menses"
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
  "name": "I navigate to Care Coordination",
  "keyword": "Given "
});
formatter.match({
  "location": "SMSverification.I_navigat_to_patient_grid()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to click on object \u0027Object Repository/OR_PatientGrid/SMSVerification/Obj_Carecoordination modulemosehover\u0027\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.click(ClickKeyword.groovy:75)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.execute(ClickKeyword.groovy:42)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.click(WebUiBuiltInKeywords.groovy:620)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$click$3.call(Unknown Source)\r\n\tat patientGrid.SMSverification.I_navigat_to_patient_grid(SMSverification.groovy:43)\r\n\tat ✽.I navigate to Care Coordination(Include/features/PatientGrid/SMSFunctionality/SMSFunctionalityCCgrid.feature:4)\r\nCaused by: com.kms.katalon.core.webui.exception.WebElementNotFoundException: Web element with id: \u0027Object Repository/OR_PatientGrid/SMSVerification/Obj_Carecoordination modulemosehover\u0027 located by \u0027//span[text()\u003d\u0027Care Coordination\u0027]\u0027 not found\r\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findWebElement(WebUiCommonHelper.java:1368)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword.findWebElement(WebUIAbstractKeyword.groovy:27)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword.findWebElement(WebUIAbstractKeyword.groovy:26)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword$_click_closure1.doCall(ClickKeyword.groovy:66)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword$_click_closure1.call(ClickKeyword.groovy)\r\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.click(ClickKeyword.groovy:75)\r\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.execute(ClickKeyword.groovy:42)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:73)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.click(WebUiBuiltInKeywords.groovy:620)\r\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$click$3.call(Unknown Source)\r\n\tat patientGrid.SMSverification.I_navigat_to_patient_grid(SMSverification.groovy:43)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:55)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:42)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:619)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:616)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:716)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat TC_CreatAppointmentfromCCGrid.run(TC_CreatAppointmentfromCCGrid:23)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:369)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:360)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:339)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:331)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:248)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestCaseMainPhase(TestSuiteExecutor.java:191)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:140)\r\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:89)\r\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:185)\r\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\r\n\tat TempTestSuite1635821644838.run(TempTestSuite1635821644838.groovy:39)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Create appointment from CC grid to PWB",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreatAppointmentfromCCGrid"
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
  "name": "I search Shelly, Shelly using global search from CC",
  "keyword": "Given "
});
formatter.match({
  "location": "SMSverification.search_Patient(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on searched patient from CC",
  "keyword": "And "
});
formatter.match({
  "location": "SMSverification.clickpatietn()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on appointment tab",
  "keyword": "* "
});
formatter.match({
  "location": "SMSverification.appointmenttab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Add button to add appointment",
  "keyword": "* "
});
formatter.match({
  "location": "SMSverification.addappointment()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I set visit type as telehealth in PWB",
  "keyword": "* "
});
formatter.match({
  "location": "SMSverification.visittypecc()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify that copy button and send sms button available and functional",
  "keyword": "* "
});
formatter.match({
  "location": "SMSverification.veryfybuttons()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I set Abnormal menses to schedual the appointment",
  "keyword": "* "
});
formatter.match({
  "location": "SMSverification.reasonseselect(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I set start date for appointment",
  "keyword": "* "
});
formatter.match({
  "location": "SMSverification.adate()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I set end date for appointment",
  "keyword": "* "
});
formatter.match({
  "location": "SMSverification.edate()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I set status Scheduled for appointment",
  "keyword": "* "
});
formatter.match({
  "location": "SMSverification.statuseselect(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter Appointment created through CC grid in text area of appointment",
  "keyword": "* "
});
formatter.match({
  "location": "SMSverification.commentfield(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click the save button to save Appointments",
  "keyword": "When "
});
formatter.match({
  "location": "SMSverification.saveappointmentbutn()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see success message for adding record",
  "keyword": "Then "
});
formatter.match({
  "location": "ProblemListsteps.saved_alerts_shoud_be_popup(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify that appointment created successfully with Abnormal menses and Scheduled and Appointment created through CC grid and with telehealth type",
  "keyword": "* "
});
formatter.match({
  "location": "SMSverification.verifycreatedappointment(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see Edit appointment, Show log and Delete buttons are available and functional",
  "keyword": "* "
});
formatter.match({
  "location": "SMSverification.verifyappointmentbuuton()"
});
formatter.result({
  "status": "skipped"
});
});