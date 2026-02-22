 1) What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

 Ans: getElementById: getElementById is used to select one element by it's id. ids are unique so only one element can be selected.

 getElementsByClassName: getElementsByClassName is used to select all elements of a specific class. Looping is required to get through each element of that specific class. It looks like an array in console log but it is not actually an array.

 querySelector: querySelector only selects the first matching element. We must use the ( . ) for classes and (#) for id when selecting these. But we don't need to use this selector symbols when using getElementById and getElementsByClassName.

 queySelectorAll : querySelectorAll is used to select all matching elements. We need to use selector symbols while selecting id and classes just like querySelector.



 2) How do you create and insert a new element into the DOM?

 Ans: We create a new Element using createElement(). For example --- let makeDiv = document.createElement("div"); This is usually not visible until we add some content using innerText or innerHTML.

 In order to insert the new element into the DOM we need to append it. For example --- 
 let box = document.getElementById("box");
 box.append(makeDiv);

 3)  What is Event Bubbling? And how does it work?

 Ans: Event Bubbling: Event Bubbling is the concept where a event is triggered on a child element and it spreads upwards through it's parent element. And it keeps spreading or moving upwards until it reaches the root of the document.

 How event bubbling works: When an event is triggered, at first the element travels from the top of the document to the target element. Then it captures the target element. Then the event moves upwards like a bubble from the target element to it's parent, then grandparent and it continues till it reaches the top of the document.

 4) What is Event Delegation in JavaScript? Why is it useful?

 Ans: Event Delegation: Event Delegation in JavaScript is a technique where instead adding event listeners to many elements, we choose it's parent and add event to the parent. This helps to detect which child was clicked.

 Usefulness of Event Delegation: 

 1. It provides better performance since we use one parent to trigger the event instead of many of it's children.

 2. This fundamental decreases the repetitiveness of the code.

 3. Easier for users to use and understand.

 4. It saves memory.


 5) What is the difference between preventDefault() and stopPropagation() methods?

 Ans: preventDefault(): preventDefault() is used to stop browser's default behavior. But it does not stop bubbling.

 stopPropagation(): stopPropagation() is used to stop bubbling but does not stop the browser's default behavior.


