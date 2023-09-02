const ball = document.querySelector('.ball-range');
const range = document.querySelector('.num-range');
let isDragging = false;
ball.addEventListener('mousedown', (e) => {
	isDragging = true;
	ball.style.transition = 'none'; // Disable transitions during drag
});

document.addEventListener('mousemove', (e) => {
	if (!isDragging) return;

	// Calculate new position
	const container = document.querySelector('.container');
	const containerRect = container.getBoundingClientRect();
	const newX = e.clientX - containerRect.left - ball.clientWidth / 2;
	const maxX = container.clientWidth - ball.clientWidth;
	const clampedX = Math.min(maxX, Math.max(0, newX));

	// Set the new position
	ball.style.left = clampedX + 'px';
	range.innerHTML = Math.round(clampedX / 2.81);
	range.style.left = clampedX + 'px';
});
document.addEventListener('mouseup', () => {
	isDragging = false;
	ball.style.transition = ''; // Re-enable transitions
});
ball.addEventListener('dragstart', (e) => {
	e.preventDefault();
});
