// // Create object of SimpleDateFormat class and decide the format
// DateFormat dateFormat = new SimpleDateFormat("MM/dd/yyyy");
// 
// //get current date time with Date()
// Date date = new Date();
// 
// // Now format the date
// String date1= dateFormat.format(date);
// 
// String datebrackets = '('+date1+')'
// 
// // Print the Date
// System.out.println(datebrackets);
 
String status= 'Active' , Name='MCARE'

String completestring= ''+status +' '+'('+Name+')'+''

System.out.println(completestring)

	String xpaths = '//div[contains(text(),"' +completestring+ '")]'
	
	
	
	System.out.println(xpaths)