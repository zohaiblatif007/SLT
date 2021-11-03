@FunctionalStatus
Feature: Add Edit and Delete in Functional Status

Background: 
  Given I navigate to patient grid
    
    @AddFunctionalStatus
    @Regression
    @Sanity
    Scenario Outline: Add in functional status with all fields
    
  Given I search <Patient> using global search
		And I click on Clinical tab
 		*   I click on Functional Status tab
	 When I click on functional status Add button
		And I enter <Condition> in functional status condition field
		*   I enter <Date> in functional status date field
		*   I click on functional status Update button
	 Then I should see message of success for <module> record
#		And I should see the newly added functional status record <Condition> and <Date> on grid
		
		Examples:
		|    Patient   |                       Condition                       |  Date  |module|
		|Danial722, Hack722|Spirometry reversibility negative (finding):: 314980001|01012021|adding|
		
		  
    @EditFunctionalStatus
    @Regression
    @Sanity
    Scenario Outline: Edit in functional status with all fields
    
  Given I search <Patient> using global search
		And I click on Clinical tab
 		*   I click on Functional Status tab
	 When I click on functional status Edit button
		And I enter <Condition> in functional status condition field
		*   I enter <Date> in functional status date field
		*   I click on functional status Update button
	 Then I should see message of success for <module> record
#		And I should see the newly added functional status record <Condition> and <Date> on grid
		
		Examples:
		|    Patient   |                           Condition                           |  Date  |module|
		|Danial722, Hack722|Negative reversibility test to salbutamol (finding):: 391111000|03132021|editing|
		
		

		@DeleteFunctionalStatus
    @Regression
    @Sanity
    Scenario Outline: Delete the specific record in functional status 
    
  Given I search <Patient> using global search
		And I click on Clinical tab
 		*   I click on Functional Status tab
    *   I enter <Condition> to delete record in functional status 
	 Then I should see message of success for <module> record
#	  And I should see the deleted functional status not present on grid
		
		
		Examples:
		|    Patient   |                           Condition                           |module|
		|Danial722, Hack722|Negative reversibility test to salbutamol (finding):: 391111000|deleting|
		