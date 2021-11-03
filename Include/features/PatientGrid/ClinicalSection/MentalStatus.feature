@MentalStatus
Feature: Add Edit and Delete in mental status

Background: 
  Given I navigate to patient grid
    
    @Add
    @AddMentalStatus
    @Regression
    @Sanity
    Scenario Outline: Add in mental status with all fields
    
  Given I search <Patient> using global search
		And I click on Clinical tab
 		*   I click on Mental Status tab
	 When I click on Mental status Add button
		And I enter <Condition> in mental status condition field
		*   I enter <Date> in mental status date field
		*   I click on mental status Update button
	 Then I should see message of success for <module> record
#		And I should see the newly added <Condition> and <Date> of mental status on grid
		
		Examples:
		|    Patient       |                       Condition                       |  Date  |module|
		|Danial722, Hack722|Spirometry reversibility negative (finding):: 314980001|01032021|adding|
		
	  @Edit
		@EditMentalStatus
	  @Regression
    @Sanity
    Scenario Outline: Edit in mental status with all fields
    
  Given I search <Patient> using global search
		And I click on Clinical tab
 		*   I click on Mental Status tab
	 When I click on Mental status Edit button
		And I enter <Condition> in mental status condition field
		*   I enter <Date> in mental status date field
		*   I click on mental status Update button
	 Then I should see message of success for <module> record
#		And I should see the newly added <Condition> and <Date> of mental status on grid
		
		Examples:
		|    Patient   |                            Condition                          |  Date  |module|
		|Danial722, Hack722|Negative reversibility test to salbutamol (finding):: 391111000|03142021|editing|
		
		
	  @Delete
	  @DeleteMentalStatus
	  @Regression
    @Sanity
    Scenario Outline: Delete the specific record in mental status
    
  Given I search <Patient> using global search
		And I click on Clinical tab
 		*   I click on Mental Status tab
		*   I enter <Condition> to delete record in mental status 
	 Then I should see message of success for <module> record
#	  And I should see the deleted mental status not present on grid
		
		Examples:
		|    Patient   |                            Condition                          |module| 
		|Danial722, Hack722|Negative reversibility test to salbutamol (finding):: 391111000|deleting|
#		
#			