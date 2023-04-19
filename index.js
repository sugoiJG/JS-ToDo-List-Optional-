// Medium: 

// Overview: In this lab, you will build a TODO list application using JavaScript classes and the DOM. The app will allow users to add and delete items from their TODO list.

// Objectives:

// Create a TODO list with a text input and button to submit new items
// Allow users to add and delete items from the list
// Use JavaScript classes to manage the TODO list items
// Steps:

// Create an HTML file with a text input and button to add new TODO items. Also, add an empty unordered list to the page to hold the TODO items.
// Create a JavaScript file and link it to the HTML file.
// Create a class called "TodoList" with an array property to hold the list items and methods to add and delete items from the list.
// Create a new instance of the TodoList class and store it in a variable.
// Add an event listener to the form submit button that calls the add() method on the TodoList instance with the value of the text input.
// Implement the add() method on the TodoList class to add a new item to the list.
// Implement the delete() method on the TodoList class to remove an item from the list.
// Add an event listener to each item in the list that calls the delete() method on the TodoList instance with the clicked item.
// Test the application by adding and deleting items from the TODO list.

 

// HARD

// Lab: Building a TODO List App with JavaScript Classes and the DOM
// Overview
// In this lab, you will build a TODO list application using JavaScript classes and the DOM. The app will allow users to add and delete items from their TODO list.

// Objectives
// Practice working with the DOM to create and manipulate elements
// Use JavaScript classes to create and manage TODO list items
// Handle user input using event listeners
// Requirements
// A text input for users to add new TODO items
// A button to submit new TODO items
// A list of existing TODO items
// Each TODO item should include a checkbox to mark the item as completed, a label to display the text of the item, and a delete button to remove the item from the list
// When a user adds a new TODO item, it should appear at the bottom of the list
// When a user clicks the delete button on a TODO item, it should be removed from the list
// When a user checks the checkbox on a TODO item, it should be marked as completed
// Steps
// Create an HTML file with a form that includes a text input and a button. Add an empty unordered list to the page to hold the TODO items.

// Create a JavaScript file and link it to the HTML file.

// Create a class called "TodoItem" with the following properties and methods:

// id: a unique identifier for each item
// text: the text content of the item
// isCompleted: a boolean value indicating whether the item has been completed
// element: a reference to the DOM element for the item
// createDOMElement(): a method that creates a new DOM element for the item, including a checkbox, label, and delete button
// updateDOMElement(): a method that updates the DOM element for the item with the latest properties
// Create a class called "TodoList" with the following properties and methods:

// items: an array of TodoItem objects
// element: a reference to the DOM element for the list
// add(text): a method that adds a new TodoItem object to the list with the given text
// remove(id): a method that removes the TodoItem object with the given id from the list
// update(id, updates): a method that updates the TodoItem object with the given id with the given properties
// Initialize a new instance of the TodoList class and store it in a variable.

// Add an event listener to the form submit button that calls the add() method on the TodoList instance with the value of the text input.

// Add an event listener to the delete button on each TodoItem that calls the remove() method on the TodoList instance with the id of the clicked item.

// Add an event listener to the checkbox on each TodoItem that calls the update() method on the TodoList instance with the id of the clicked item and sets the isCompleted property to the opposite of its current value.

// Implement the createDOMElement() and updateDOMElement() methods on the TodoItem class to create and update the DOM element for each item.

// Implement the add(), remove(), and update() methods on the TodoList class to add, remove, and update items in the list.

// Test the application by adding and deleting items from the TODO list.