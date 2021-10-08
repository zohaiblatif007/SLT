Feature: Add Edit and Delete in Allergies

  Background: 
    Given I navigate to patient grid


   @ProgramEnrollment @Regression @Sanity @Smoke
   Scenario Outline: Edit Program Enrollment for Opened Patient from care coordination
  	Given I click on Care Coordination
    Given I click on MRN coloumn dropdown in care coordination
      * I click on filter option for mrn
      * I click on dropdown to set <Filter>
      * I enter <MRN> in text filed1
      * I click on filter button to filter record
      * I click on <Patient> to open patient
	    * I click on expanding button on the enrollment history tab
    And I click on edit button where status: <status> program:and <Name>
	   *  I select <Reason> from Reason Dropdown
 	   *  I input <condition> in condition Field
 	 Then I  click on submit button
 	 And  I should see success message: <dynamicid> for following <message>
 	    * I verify that i see the latest added <Name>,<status>,<Reason> after expanding the enrollment history on care coordination flow
 	    * I click cross icon to close opened patient page
 	    * I validate <Name> and <status> in enrollment section in cc grid

    Examples: 
    |   MRN|   Patient     |    Filter  |Name |status  |program       |    condition        |Reason        |dynamicid                             |               message                           |
    |Powell|Powell, Powell |  Contains  |MCARE|Active  |Active (MCARE)|Condition1,Condition2|Consent Signed|Enrollment Reason updated successfully|successEnrollment Reason updated successfullyHide| 
    
    
