@PatientSearch
Feature: Add All types of Assessments

  Background: 
    Given I navigate to patient grid

  @Patientsearch 
  @Regression 
  @Sanity
  Scenario Outline: Add Recommended Billable Assessment with all fields
  Given I search <Patient> using global search
      * I verify patient is selected
      
       Examples: 
      |      Patient      | 
      | Danial722, Hack722|
      