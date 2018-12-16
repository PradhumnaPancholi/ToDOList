var toDoItems = document.getElementById('toDoItems');

var itemTemplate = document.getElementById('itemTemplate');

var itemNameInput = document.querySelector('.form-group input');

var dueDateInput = document.querySelector('.form-group:nth-of-type(2) input');

var createButton = document.getElementById('addNewItem'); 

createButton.onclick = function(){
    console.log('you pressed createButton');
    if(itemNameInput.value == ""){
        alert('Item name can not be empty');
        return false;
    }

    //line to store the template content/
    let content = itemTemplate.content;    
    //line to import the template content//
    let newItemRow = document.importNode(content, true);

    // Using DOM walking, access the item entry cell
    // and store the current item name value
    let itemValue = document.getElementsByClassName('item-entry'); 
    itemValue.textContent = itemNameInput.value;
    console.log(itemValue)
    // Using DOM walking, access the item due date cell
    // and store the current due date value
    let dueDateValue = document.getElementsByClassName('item-due-date');

    //  Using DOM walking, access the item delete button
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
    //itemNameInput.textContent = "";

    // Step 4j - Reset the due date field value to nothing
    //dueDateInput.textContent = "";

    // Step 4k - Prepend the new item row to the to do items list
    // INSIGHT: We're prepending as we want new items to go to the
    // top. If you want them to be in reverse, then you will need
    // to append them instead.
    toDoItems.prepend(newItemRow);
}