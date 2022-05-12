//*-------Forms-----*//

/*---------------Accessing Form Elements--------------*/
//  const form = document.forms[0];
//  const form = document.getElementsByTagname('form')[0];
  const form = document.forms.search;
//  const [input,button] = form.elements;
//  const input = form.searchInput => access with its name
//  const input = form['searchInput']

/*--------------Form Properties and Methods----------*/
/*--------------Form Events--------------------------*/
  const input = form.elements.searchInput;
  /*input.addEventListener('focus', () => alert('focused'), false);
    //input.addEventListener('blur', () => alert('blurred'), false);
    input.addEventListener('change', () => alert('changed'), false);*/

/*----------------------Submitting a Form----------------*/
//const form = document.forms['search'];
form.addEventListener('submit', search, false);
/*function search() {
    alert(' Form Submitted');
}
function search(event) {
    alert('Form Submitted');
    event.preventDefault();
}*/

/*------------------Retrieving and Changing Values From a Form-------------*/
function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}
input.value = 'Search Here';
input.addEventListener('focus', function () {
    if (input.value === 'Search Here') {
        input.value = ''
    }
}, false);

input.addEventListener('blur', function () {
    if (input.value === '') {
        input.value = 'Search Here';
    }
}, false);
// "Search Here"の表示がある場合、ユーザーがクリックしたとき表示の有無

/*---------------------Form Controls-----------------------*/
/*--------------Input Fields----------------------*/
/*1. Text Input Fields
   The default type of input field is text, which is used for entering a short piece of text, such as a username. In our example, we use a text input field to enter the name of the superhero.
  2.Password Input Fields
   input type='password' is used to enter passwords or secret information. 
  3. Checkbox Input Fields
   Check boxes are created using input fields with type='checkbox'. They are used to select different options that can be checked (true) or left unchecked (false). 
  4. Radio Button Input Fields
   Radio buttons are created using input fields with type='radio'. Like checkboxes they allow users to check an option as true, but they provide an exclusive choice of options, so only one option can be selected.
   only one radio button can be checked in a group that has the same name attribute.
  5. Hidden Input Fields
   Hidden fields can be created using input fields with type='hidden'. 
  6. File Input Fields
   A file input field can be created using input fields with type='file'.
   These are used to upload files, and most browsers will provide a browse button or similar that lets users select a file from their file system.
  7. Other Input Types
   There are lots of new input types included in HTML5, such as number, tel and color.
  8. Select Drop-Down List
   Select drop-down lists can be used to select one or more options from a list of values. The 'multiple' attribute is required if more than one option is to be selected. 
  9. Text Areas
   A <textarea> element is used to enter long pieces of text over multiple lines such as a comment or blog post.
 10. Buttons
   We’ve already used a button to submit a form, but there are different types of buttons. The default type is 'submit', which is why we didn’t have to specify the type in the search example at the start of the chapter. 
 */

/*----------------I Need a Hero!-----------------*/
/*----------------Form Validation-----------------*/
/*---------------Disabling the Submit Button--------------*/

//*-------Object-Oriented Programming in JavaScript--------*//
/*----------The Constructor Property----------------------*/
//All objects have a constructor property that returns the constructor function that created it:
/*----------Static Methods-----------------*/
//The static keyword can be used in class declarations to create a static method.
/*------------Prototypal Inheritance------------*/
/*-----------What Should the Prototype Be Used For?-------------*/
//The prototype can be used to add any new properties and methods after the class has been declared. 

