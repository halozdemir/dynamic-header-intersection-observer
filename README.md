# HTML

I learned "data-" prexif to give specific information to specific HTML elements.

Used propery naming for HTML element according to the parent element. If a parent element is "section", then for example, its children header will be named "section\_\_header"

For accessibility reasons use descriptive alt tags for images and anchor tags

I used grid system for layout

# CSS

Generally wrap "a" and "img" inside an parent div to position them or to give them some padding or margin
when you're structuring HTML

Use "container grid" two seperate utility classes

Use comment when you're doing CSS
Start with /_ --Reset and boilerplate stuff-- _/
And then /_ --Header-- _/
Then /_ --Layout stuff-- _/

# Intersection Observer

Element.setAttribute() . Usage of Element.setAttribute(name,value)

scrollY/X - (based on window) The read-only scrollY property of the Window interface returns the number of pixels that the document is currently scrolled vertically. You can get the number of pixels the document is scrolled horizontally from the scrollX property.

scrollTop/Left - (based on element) The scrollLeft and scrollTop properties return the number of pixels that the element’s content is scrolled from its left and top edges.

Created the options object (root, rootMargin,threshold)

If no root is specified, then it will be classed as the browser viewport.

I want to fire a callback whenever a section comes into contact with the bottom of the header as I'm scrolling down the page.
This means I need to set a negative root margin that corresponds to the height of the header.

I'm setting a threshold of 0, as I want it to fire if any part of the section is intersecting with the root margin.

Created the observer. Observer takes to arguments. (callbackfn and options object)
Observer started to observe the section (target)
Created the callbackfunction.(named onIntersect)

There’s one more issue, however: the header will update not only when the section hits the header, but when the next element comes into view at the bottom of the viewport. This is because the observer fires the callback twice: once as the element is entering, and again as it’s leaving.

To determine whether the header should update, I can use the isIntersecting key from the entry object. Let’s create another function to return a boolean value for whether the header colors should update.
