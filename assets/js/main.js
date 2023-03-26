const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//loop through the empties 
for (const empty of empties) {
	empty.addEventListener('dragover', dragOver);
	empty.addEventListener('dragenter', dragEnter);
	empty.addEventListener('dragleave', dragLeave);
	empty.addEventListener('drop', dragDrop);
}

function dragStart() {
	/*console.log('dragstart');*/
	this.classList.add('hold');
	/*this.className = 'invisible';*/
	setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd() {
	/*console.log('dragEnd');*/
	this.className = 'fill';
}

function dragOver(e) {
	e.preventDefault();
	console.log('drag over');
}

function dragEnter(e) {
	e.preventDefault();
	this.classList.add('hovered');
	console.log('drag enter');
}

function dragLeave() {
	console.log('drag leave');
	this.classList.remove('hovered');
}

function dragDrop() {
	console.log('drag drop');
	this.classList.remove('hovered');
	this.append(fill);
}