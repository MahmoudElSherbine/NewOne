## Description:
Responsive Landing page by Udacity.
##Requirements:
1/ Build a Navigation Menu dynamically as an unordered list(with Javascript).
2/ Highlight viewed section and corresponding nav link while scrolling.
3/ When user clicks a nav link, page scroll smoothly to the selected section.
4/ Navigation menu is reponsive(can be used in different screen sizes).
5/ Write ReadMe file.

##APIS, and Methods Used:
1. Element.scrollIntoView().
2. getBoundingClientRect().
3. Toggling CSS calsses via `Element.classList.add('class-name')`, and `Element.classList.remove('class-name')`
4. preventDefault().

## How I did it.
I devided the project into events
(1) Navigation Menu --> DOM ContentLoaded
(2) Highlight viewed section --> scroll event
(3) smoothly behave --> click event

