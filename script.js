//your JS code here. If required.
const element = document.getElementByID('level')

const level = 0;

while (element.parentNode) {
	level++;
	element = element.parentNode;
}

alert (`The level of the element is: ${n}`);