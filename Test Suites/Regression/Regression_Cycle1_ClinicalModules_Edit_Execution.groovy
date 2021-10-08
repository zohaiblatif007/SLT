import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.SetUp
import com.kms.katalon.core.annotation.SetupTestCase
import com.kms.katalon.core.annotation.TearDown
import com.kms.katalon.core.annotation.TearDownTestCase
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

/**
 * Some methods below are samples for using SetUp/TearDown in a test suite.
 */

/**
 * Setup test suite environment.
 */
@SetUp(skipped = true) // Please change skipped to be false to activate this method.
def setUp() {
	
	WebUI.openBrowser('')
	WebUI.maximizeWindow()



	GlobalVariable.url
	GlobalVariable.username
	GlobalVariable.password

	      WebUI.navigateToUrl(GlobalVariable.url)
	
			WebUI.setText(findTestObject('Object Repository/OR_LoginPage/Obj_Username'), GlobalVariable.username)
	
			WebUI.setText(findTestObject('Object Repository/OR_LoginPage/Obj_Password'), GlobalVariable.password)
	
	
			WebUI.click(findTestObject('Object Repository/OR_LoginPage/Obj_Signin'))
	
	
			WebUI.verifyElementPresent(findTestObject('Object Repository/OR_HomePage/Obj_Logo'), 3)
	
}

/**
 * Clean test suites environment.
 */
@TearDown(skipped = true) // Please change skipped to be false to activate this method.
def tearDown() {
	
	        Thread.sleep(5000)

			WebUI.click(findTestObject('OR_LogoutPage/Obj_Logout'))
	
			WebUI.click(findTestObject('OR_LogoutPage/Obj_Sign Out'))
	
			WebUI.closeBrowser()
}

/**
 * Run before each test case starts.
 */
@SetupTestCase(skipped = true) // Please change skipped to be false to activate this method.
def setupTestCase() {
	// Put your code here.
}

/**
 * Run after each test case ends.
 */
@TearDownTestCase(skipped = true) // Please change skipped to be false to activate this method.
def tearDownTestCase() {
	// Put your code here.
}

/**
 * References:
 * Groovy tutorial page: http://docs.groovy-lang.org/next/html/documentation/
 */