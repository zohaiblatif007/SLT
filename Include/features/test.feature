@Discharge
Feature: Add Edit and Delete in Allergies

  Background: 
    Given I navigate to patient grid
      
    @UMP_Facility
  Scenario Outline: Applying Facility Filters
  
  Given I am on patient grid left filters
    And I click on reset button
   Then I should see left filter options are reset to default
   When I enter facility <Facility> for left filter
    And I click on apply button
   Then I should see <Facility> as Facility1 in left filter
   And I should see facility of filtered patients is <Facility>

    Examples: 
      | Facility   |
      |     MHPN   |