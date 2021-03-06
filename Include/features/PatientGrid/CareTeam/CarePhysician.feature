#Author: Zohaib
@CareTeam
Feature: Assign and unassign Care Team

  Background: 
    Given I navigate to patient grid



   @AddCarePhysicianSDatelesstoCDateEDateGreaterToCDate @Regression @Sanity @Smoke
  Scenario Outline: Assign Care Physician to a patient while Start Date is less then current Date and end Date is greater then current Date
    Given I search <Patient> using global search
    And I click on Care Team	tab
 		When I click on Care Team Add button
		And I enter <Name> in Care Team name field
		*   I enter in  start date field while Start Date is less then current Date
	  *   I enter in  end date field while end Date is greater then current Date
	  *   I click on tick button to save record
	 Then I should see message of success: <dynamicid> for following <message>
	  And I should see the newly added <Name> and <Role> and Start Date and End Date as a Care Team record on grid
	     Then I click on Name coloumn dropdown
      * I click on filter option for name
      * I click on dropdown to set <Filter>
      * I enter <Patient> in text filed1
      * I click on filter button to filter record
	  *   I should see  <member> under <Role> column on patient grid
	   Then I scroll to name filter
      * I click on Name coloumn dropdown
      * I click on filter option for name
      * I click on filter clear button

    Examples: 
    |    Patient       | Name         |Role          |dynamicid                          |message                                       |         member|    Filter    |
    |Danial722, Hack722|Doctor, Mohsin|Care Physician|Sucessfully added care team member.|successSucessfully added care team member.Hide| Doctor, Mohsin|  Contains    |
    


    
   @EditCarePhysicianSDateGreatertoCDateEDateGreaterToCDate  @Regression @Sanity
  Scenario Outline: Update Care Physician while Start Date is greater then current Date and end Date is greater then current Date
    Given I search <Patient> using global search
    And I click on Care Team	tab
 		When I click on Care Edit button of <Name>
		And  I enter in  end date field while start Date is greater then current Date
	  *   I enter in  end date field while end Date is greater then current Date
	  *   I click on tick button to save record
	 Then I should see message of success: <dynamicid> for following <message>
	  And I should see the newly added <Name> and <Role> and Start Date and End Date as a Care Team record on grid
	   Then I click on Name coloumn dropdown
      * I click on filter option for name
      * I click on dropdown to set <Filter>
      * I enter <Patient> in text filed1
      * I click on filter button to filter record
	  *   I should not see <member> under <Role> column on patient grid
	   Then I scroll to name filter
      * I click on Name coloumn dropdown
      * I click on filter option for name
      * I click on filter clear button

     Examples: 
    |    Patient       | Name         |Role          |dynamicid                            |message                                         |      member   |    Filter    |
    |Danial722, Hack722|Doctor, Mohsin|Care Physician|Sucessfully updated care team member.|successSucessfully updated care team member.Hide| Doctor, Mohsin|  Contains    |
    



    @EditCarePhysicianSDateLesstoCDateEDateLessToCDate @Regression @Sanity
  Scenario Outline: Update Care Physician while Start Date is less then current Date and end Date is less then current Date
    Given I search <Patient> using global search
    And I click on Care Team	tab
 		When I click on Care Edit button of <Name>
		And I enter in  start date field while Start Date is less then current Date
	  *   I enter in  end date field while end Date is less then current Date
	  *   I click on tick button to save record
	 Then I should see message of success: <dynamicid> for following <message>
	  And I should see the newly added <Name> and <Role> and Start Date and End Date as a Care Team record on grid
	 	   Then I click on Name coloumn dropdown
      * I click on filter option for name
      * I click on dropdown to set <Filter>
      * I enter <Patient> in text filed1
      * I click on filter button to filter record
	  *   I should not see <member> under <Role> column on patient grid
	   Then I scroll to name filter
      * I click on Name coloumn dropdown
      * I click on filter option for name
      * I click on filter clear button
     Examples: 
    |    Patient       | Name         |Role          |dynamicid                            |message                                         |    member     |    Filter    |
    |Danial722, Hack722|Doctor, Mohsin|Care Physician|Sucessfully updated care team member.|successSucessfully updated care team member.Hide| Doctor, Mohsin|  Contains    |
    



    @EditCarePhysicianSDateLesstoCDateEDateEqualToCDate  @Regression @Sanity
  Scenario Outline: Update Care Physician while Start Date is less then current Date and end Date is equal to  current Date
    Given I search <Patient> using global search
    And I click on Care Team	tab
 		When I click on Care Edit button of <Name>
		And I enter in  start date field while Start Date is less then current Date
	  *   I enter in  end date field while end Date is equal to current Date
	  *   I click on tick button to save record
	 Then I should see message of success: <dynamicid> for following <message>
	  And I should see the newly added <Name> and <Role> and Start Date and End Date as a Care Team record on grid
	 Then I click on Name coloumn dropdown
      * I click on filter option for name
      * I click on dropdown to set <Filter>
      * I enter <Patient> in text filed1
      * I click on filter button to filter record
	    * I should see  <member> under <Role> column on patient grid
   Then I scroll to name filter
      * I click on Name coloumn dropdown
      * I click on filter option for name
      * I click on filter clear button
     Examples: 
    |    Patient       | Name         |Role          |dynamicid                            |  message                                       |     member    |    Filter    |
    |Danial722, Hack722|Doctor, Mohsin|Care Physician|Sucessfully updated care team member.|successSucessfully updated care team member.Hide| Doctor, Mohsin|  Contains    |
    



      @DeleteCarePhysician @Regression @Sanity
  Scenario Outline: Delete data of CarePhysician role of care team 
    Given I search <Patient> using global search
    And I click on Care Team	tab
    When I click on Care Delete button of <Name>
    Then I should message of success for <module> record
    Then I click on Name coloumn dropdown
      * I click on filter option for name
      * I click on dropdown to set <Filter>
      * I enter <Patient> in text filed1
      * I click on filter button to filter record
	  *   I should not see <member> under <Role> column on patient grid
   Then I scroll to name filter
      * I click on Name coloumn dropdown
      * I click on filter option for name
      * I click on filter clear button
    
    Examples: 
    |    Patient       |   Name       |  Role        |member         |  module|    Filter    |
    |Danial722, Hack722|Doctor, Mohsin|Care Physician| Doctor, Mohsin|deleting|  Contains    |
    #
#
   