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

We want to fire a callback whenever a section comes into contact with the bottom of the header as we’re scrolling down the page.
This means we need to set a negative root margin that corresponds to the height of the header.
