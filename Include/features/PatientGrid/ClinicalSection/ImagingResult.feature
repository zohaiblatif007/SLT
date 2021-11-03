@ImagingResults
Feature: Add Imaging Result

Background: 
   Given I navigate to patient grid
    
    @AddImagingResults
    @Regression
    @Sanity
    Scenario Outline: Add in imaging result with all fields
    
   Given I search <Patient> using global search
		 And I click on Clinical tab
 		 *   I click on Imaging Results	tab
	  When I click on imaging results Add button
     And I enter <Imaging_Test_Type> in imaging results imaging test type field
     *   I enter <Imagng_Test> in imaging results imaging test field
     *   I enter <Date> in imaging result date field
     *   I enter <Order_Provider> in imaging results order provider field
     #*   I enter <Status> in imaging results status field
     #*******   I enter <File> in imaging results file field
     *   I enter <Results> in imaging results results field
     *   I enter <Interpretation> in imaging results interpretation field
     *   I click on imaging results Save button
	  Then I should see message of success: <dynamicid> for following <message>
#		 And I should see the newly added imaging results record <Imaging_Test_Type> and <Date> and <Order_Provider> and <Status> and <File> present on grid
     
     Examples:
     |    Patient   | Imaging_Test_Type |            Imagng_Test            |     Date     |Order_Provider|Status|                       File                  |Results|Interpretation|dynamicid|message|
     |Danial722, Hack722|      HPC          |Outside state ambulance serv::A0021|02012021 21:38|Latif, Zohaib |Active|C:\Users\muhammad.zohaib\ImageResultfile.docx|passed |    Patient |Imaging result saved.|successImaging result saved.Hide|
        
    @EditImagingResults
    @Regression
    @Sanity
    Scenario Outline: Edit in imaging result with all fields
    
   Given I search <Patient> using global search
		 And I click on Clinical tab
 		 *   I click on Imaging Results	tab
	  When I click on imaging results Edit button
     And I enter <Imaging_Test_Type> in imaging results imaging test type field
     *   I enter <Imaging_Test> in imaging results imaging test field
     *   I enter <Date> in imaging result date field
     *   I enter <Order_Provider> in imaging results order provider field
     #*   I enter <Status> in imaging results status field
     *   I enter <File> in imaging results file field
     *   I enter <Results> in imaging results results field
     *   I enter <Interpretation> in imaging results interpretation field
     *   I click on imaging results Save button
	  Then I should see message of success: <dynamicid> for following <message>
#		 And I should see the newly added imaging results record <Imaging_Test_Type> and <Date> and <Order_Provider> and <Status> and <File> present on grid
     
     Examples:
     |    Patient   |Imaging_Test_Type|       Imaging_Test        |     Date     |Order_Provider| Status  |                       File                  |  Results   | Interpretation |dynamicid|message|
     |Danial722, Hack722|      LOINC      |Amdinocillin Islt KB::1-Sep|02012021 21:38|Latif, Zohaib |Completed|C:\Users\muhammad.zohaib\ImageResultfile.docx|Edit result |better condition|Imaging result saved.|successImaging result saved.Hide|   
     
     
     
    @DeleteImagingResults
    @Regression
    @Sanity
    Scenario Outline: Delete the specific record in imaging result 
    
   Given I search <Patient> using global search
		 And I click on Clinical tab
 		 *   I click on Imaging Results	tab
	   *   I enter <Imaging_Test_Type> to delete record in imaging result 
	 Then I should see message of success: <dynamicid> for following <message>
#	  And I should see the deleted imaging result not present on grid
		
     Examples:
     |  Patient   |Imaging_Test_Type|dynamicid|message|       
     |Danial722, Hack722|      LOINC      |Imaging result deleted successfully.|successImaging result deleted successfully.Hide|
     
     