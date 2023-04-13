# Mighty-Computer-Store
JS aplication simulates the function of earning money, taking a loan, pay the loan back, and buy computers in a store, where you can see picture and information.


# Short Description
	This app simulates two things:
	-	Different computers with different information you can “buy”.
	-	Two accounts that you can store “money” on. You earn money by clicking on the work button. You can move you earned money to you bank and use them to buy computers from the store. You can also take a loan and bay it back either from you bank account or directly from the account that you “salary” account. 


# Long Description
	HTML is used for markup of the app. CSS with Bootstrap are used to style and place the different elements. In the HTML head both the bootstap library and this projecs own CSS style sheet is linked. The “link” (src) to this project’s JavaScript file, as well as the Bootstrap file, are linked at the button of the HMTL document.
	In order for the page to be interactive, vanilla JS is used, but with some ES6 functionality.  
	To get the information and pictures of the computers int the “store”, a REST array is used to get all the data, including the different pictures. It is important to mention that because we call this API, the code that is runned with it, is executed after the rest of the page. This is why you will see some functions being defined in lines below the place they are called. This works because the delayed execution of the code related to the API. For more specific details on the API  part of this project, please look at the comments in the code. 
	This app has multiple buttons and text being altered when they are clicked. This is also known as event-listeners. While there are other event-listeners than on the buttons, the buttons all have one event-listener witch call their function. To control user-input or check if user actions are allowed, either if/else statements or manipulation of button state are used. All the buttons have do calculation and update the elements that display this information in the app. For more information look at the code and comments in the code.
	The text areas that changes are all linked to html elements or for the API a source (REST API) these areas are updated by the use of event-listeners reacts to an event happening, e.g. the click of a mouse button. 

# Security
	There are no specific security in this application. The application do not store any user information, and the elements one can “buy” are not real. Nigther are the money one can “earn”, “spend”, and “lend”.  It is good practice to always use interHTML instead of innerText, and this are done with regards to good security practice. 

# Background
	This is my first JS project that have have done alone. It is created as a result of an assignment given to me as a student. 

# Install
	The onely thing you need to install to look and try this app is a web browser. Here is a link to chrome which is where this app have been tested and is running properly. https://www.google.com/chrome/?brand=YTUH&gclid=CjwKCAiAjs2bBhACEiwALTBWZYvpdI2RlXEfYcK1MNkyIxojQrI44V-0h6N6YACAOXHkydP7hifnXRoCwDMQAvD_BwE&gclsrc=aw.ds

# Usage
	This project have no other usage than to teach me how to work with JS, but it may be an inspiration to others who are just starting to lean JS. You can do some of this or add complexity. 

# API
	Link to the API is here https://noroff-komputer-store-api.herokuapp.com/computers
		There are one mistake in the API. On index nr 4 (ID 5) the “Image”: assets/Images/5.jpg, has a wrong file type. That picture is a png file. I am correction this with an if statement in line 90-93. 

# Maintainers
	There are no planned updates now, but it is possible I will come back and update or add other features to the project when I’m better at JS and got more time.

# Thanks
	First of fall thnks to the creators of Bootstrap for making it easy to get an ok look so I have more time to focus on the JS part of the assignment 
	I would also like to thnk my friends and classmates for helping me get back on track if I loose my way in this massive universe of information.
	Least but not lest thanks to alle the lectures and admin-personnel for helping promote learning so we students can evolve and level up our skills. 

