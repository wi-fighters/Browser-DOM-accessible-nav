# Accessible nav drawer

## Which ARIA attributes are we using for this example?

### `aria-controls` 
- Give this attribute to the button (the element which emits the event).
- Its value should match the `id` of the element that is changed when the event happens.

### `aria-expanded`
- You can choose where to place this attribute. First, try placing it on the same button as above. If that makes other parts of your code difficult, it's ok to place it on the element being affected instead.

## Why use ARIA attributes?

- We need to explicitly declare the relationship between a button and the element that it controls.

- When we change things on the DOM, we need to notify the screen readers because not everybody is able to see visual changes. We do this by modifying the `aria-expanded` attribute.

## What other benefits do they provide?

Representing the state of the menu in one place only gives many advantages:

- One source of truth: easier maintenance / debugging
- Cleaner code: We can use an attribute selector in CSS, so we don't need to clutter the HTML with classes
