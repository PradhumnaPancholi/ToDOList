/*
  The Goal:
  Build a To Do list application that allows you
  to add a new entry, edit an existing entry, and
  remove an existing entry.
 */

// Step 1 - Select and store the tbody HTML Element.
// INSIGHT: We'll be storing the item entires in the
// tbody. Storing this HTMLElement will give us better
// access to add new items.
var toDoItems = document.getElementById('toDoItems');

// Step 2 - Select and store the item template HTML Element.
// INSIGHT: HTML templates are handy for keeping your
// HTML out of your JavaScript. This makes portability easier.
var itemTemplate = document.getElementById('itemTemplate');

// Step 3 - Select and store the following HTML Elements:
// INSIGHT: This form will give the user the ability to
// provide information about a new to do item.
// Step 3a - The Item Name field
var itemNameInput = document.querySelector('.form-group input');

// Step 3b - The Due Date field
var dueDateInput = document.querySelector('.form-group:nth-of-type(2) input');

// Step 3c - The 'Create New Item' button for adding a new item
// INSIGHT: We'll listen to the click event on this
// button. That should tell us the user is ready to
// add the information to a new item.
var createButton = document.getElementById('addNewItem');  

// Step 4 - Add a click event listener to the HTML Element
// you stored in Step 3c (should've been the 'Create New Item')
// button.
createButton.onclick = function(){
  // Step 4a - Check if item name is blank
  if (itemNameInput.value == ""){
    // Step 4b - Alert the user they need to enter a name
    alert('Item name can not be empty');      
    // Step 4c - Return false to exit the event listener
    return false;
  }
  // Step 4d - Uncomment the next line to store the template content:
  let content = itemTemplate.content;
  // Step 4e - Uncomment the next line to import the template content
  // into a new node:
  let newItemRow = document.importNode(content, true);

  // Step 4f - Using DOM walking, access the item entry cell
  // and store the current item name value
  let itemValue = document.getElementsByClassName('item-entry'); 
  itemValue.innerHTML = itemNameInput.value;
  
  // Step 4f - Using DOM walking, access the item due date cell
  // and store the current due date value
  let dueDateValue = document.getElementsByClassName('item-due-date');
  dueDateValue.innerHTML = dueDateInput.value;
  // Step 4g - Using DOM walking, access the item delete button
  // and make the onclick property equal to a function definition
  // named removeItem
  var deleteButton = document.querySelector('.item-delete');
  //deleteButton.onclick = removeItem;

  // Step 4h- Using DOM walking, access the item edit button
  // and make the onclick property equal to a function definition
  // named editItem
  var editButton = document.getElementsByClassName('item-edit');
  //editButton.onclick = editItem;
  // Step 4i - Reset the item name field value to nothing
  itemNameInput.value = " ";

  // Step 4j - Reset the due date field value to nothing
  dueDateInput.value = " ";

  // Step 4k - Prepend the new item row to the to do items list
  // INSIGHT: We're prepending as we want new items to go to the
  // top. If you want them to be in reverse, then you will need
  // to append them instead.
  toDoItems.prepend(newItemRow);
  
}

// Step 5 - Create a new function called 'removeItem'. You will need
// to capture the event in the parameter.
function removeItem(event){
  // Step 5a - Access the closest parent tr HTML element
  // and remove it
  // INSIGHT: .closest() is a handy method that will move up the DOM
  // tree and attempt to find the closest ancestor that matches the
  // passed selector.
  console.log('this coming from removeItem');
  let selectedItem = toDoItems.closest('tr');
  selectedItem.remove();
}

// Step 6 - Create a new function called 'editItem'. You will need
// to capture the event in the parameter.
function editItem(){
  // Step 6a - Using DOM walking:
  // First find the closest tr tag.
  // Next, find an item entry that is a child of the tr tag.
  // INSIGHT: DOM walking is the act of moving up and down through
  // ancestors and children of the DOM. We can use methods like
  // .closest() and .querySelector() to do this efficiently.
  // Store the result in a variable
  let selectedItem = toDoItems.closest('tr').querySelector('.item-entry');

  // Step 6b - Using the .setAttribute() method, set the attribute
  // 'contenteditable' to true
  // INSIGHT: Content Editable is an attribute introduced in HTML 5
  // that allows regular non-field based HTML elements to have their
  // text edited inline. This is a convenient feature that is utilized
  // by many online WYSIWYG editors like TinyMCE and CKEditor.
  selectedItem.setAttribute();
  selectedItem.setAttribute('contentEditable', 'true');

  // Step 6c - Trigger focus on the element
  selectedItem.focus();

  // Step 6d - Create an eventlistener on the blur event
  selectedItem.addEventListener('blur', function(event){
    selectedItem.removeAttribute('contentEditable', 'true');
  // Step 6e - Remove the attribute 'contenteditable'
  // INSIGHT: .addAttribute() and .removeAttribute() add
  // and remove attributes applied to an HTML Element.
  });

}


/*
  Step 7 - TAKE IT FURTHER
 */
// Step 7a - Using CSS you learned in your first semester
// style the To Do list to make it nicer than the default
// Bootstrap stylings.

// Step 7b- Hide the 'Create New Item' form.

// Step 7c - Add a button that toggle the 'Create New Item's'
// form visibility.

// Step 7d - Validate the date and alert the user if it is empty.

// Step 7e - Create a way for the user to edit the date:
// INSIGHT: This will take some thought but will demonstrate
// your understanding of JavaScript.

// BONUS: Use prototyping, objects, storage solutions, frameworks,
// and/or date plugins to demonstrate your knowledge and outside
// learning.