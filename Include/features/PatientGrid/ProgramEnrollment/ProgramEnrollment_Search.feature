
@ProgramEnrollment
Feature: Program Enrollment of a Patient

  Background: 
    Given I navigate to patient grid


  @ProgramEnrollment @Regression @Sanity @Smoke
   Scenario Outline: Program Enrollment for Opened Patient
   
  Given I click on Name coloumn dropdown
      * I click on filter option for name
      * I click on dropdown to set <Filter>
      * I enter <Patient> in text filed1
      * I click on filter button to filter record
      * I click on <Patient> to open patient
    And I click on Program Enrollment Button after opening the patient
 		 *  I select the Name <Name> from the opened patient
     *  I verify that <status> is already selected or not
     *  I select <status> from the selected program
     *  I verify that the expected Reason pop up appears
     *  I get Date from Date Field
 	   *  I select <Reason> from Reason Dropdown
 	   *  I input <condition> in condition Field
 	  Then I  click on submit button
 	  And  I should see success message: <dynamicid> for following <message>
	  Then I verify that i see the latest added <Name>,<status> in the enrollment history
	  *    I click on expanding button on the enrollment history tab
	  Then I verify that i see the latest added <Name>,<status>,<Reason> after expanding the enrollment history
       * I click cross icon to close opened patient page
 	     * I validate <Name> and <status> in enrollment section

    Examples: 
    |    Patient    |Name |status     |program            |condition            |Reason                 |          dynamicid                                                                   |   message                                                                                       |    Filter    |
    |Powell, Powell |MCARE|Un-Enrolled|Un-Enrolled (MCARE)|Condition1,Condition2|Clinically Not Eligible|Program enrollment status successfully changed to Un-Enrolled for selected patient(s).|successProgram enrollment status successfully changed to Un-Enrolled for selected patient(s).Hide|  Contains    | 
    
    
     @ProgramEnrollment @Regression @Sanity @Smoke
   Scenario Outline: Edit Program Enrollment for Opened Patient
  Given I click on Name coloumn dropdown
      * I click on filter option for name
      * I click on dropdown to set <Filter>
      * I enter <Patient> in text filed1
      * I click on filter button to filter record
      * I click on <Patient> to open patient
	    * I click on expanding button on the enrollment history tab
	  And I click on edit button where status: <status> program:and <Name>
	   *  I select <Reason> from Reason Dropdown
 	   *  I input <condition> in condition Field
 	    Then I  click on submit button
 	    Then I verify that i see the latest added <Name>,<status>,<Reason> after expanding the enrollment history
 	    And  I should see success message: <dynamicid> for following <message>
 	    * I click cross icon to close opened patient page
 	    * I validate <Name> and <status> in enrollment section

    Examples: 
    |    Patient   |Name |status     |program            |condition            |Reason   |dynamicid                             |                 message                         |    Filter    |         
    |Powell, Powell|MCARE|Un-Enrolled|Un-Enrolled (MCARE)|Condition3,Condition4|Goals Met|Enrollment Reason updated successfully|successEnrollment Reason updated successfullyHide|  Contains    |  
    
  
      @ProgramEnrollmentCCGrid @Regression @Sanity @Smoke
   Scenario Outline:  Program Enrollment for Opened Patient from care Coordination
   	Given I click on Care Coordination
  Given I click on MRN coloumn dropdown in care coordination
      * I click on filter option for mrn
      * I click on dropdown to set <Filter>
      * I enter <MRN> in text filed1
      * I click on filter button to filter record
      * I click on <Patient> to open patient
     And I click on Program Enrollment Button after opening the patient
 		 *  I select the Name <Name> from the opened patient
     *  I verify that <status> is already selected or not
     *  I select <status> from the selected program
     *  I verify that the expected Reason pop up appears
     *  I get Date from Date Field
 	   *  I select <Reason> from Reason Dropdown
 	   *  I input <condition> in condition Field
 	  Then I  click on submit button
 	  And  I should see success message: <dynamicid> for following <message>
	  Then I verify that i see the latest added <Name>,<status> in the enrollment history
	  *    I click on expanding button on the enrollment history tab
	  Then I verify that i see the latest added <Name>,<status>,<Reason> after expanding the enrollment history on care coordination flow
       * I click cross icon to close opened patient page
 	     * I validate <Name> and <status> in enrollment section in cc grid

    Examples: 
    |  MRN  |   Patient     |    Filter  | Name   |status  |program            |condition      |Reason          |dynamicid                                                                        |message                                                                                     |
    |Powell |Powell, Powell |  Contains  | MCARE  |Active  |Active (MCARE)|Condition1,Condition2|Patient Request|Program enrollment status successfully changed to Active for selected patient(s).|successProgram enrollment status successfully changed to Active for selected patient(s).Hide|
    
        
        
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
    
  
          
       
    