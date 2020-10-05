/* window.addEventListener('mousemove', move);
document.addEventListener('mouseleave', hide); */

const cursor = document.createElement('div');
cursor.classList.add('cursor');

document.body.appendChild(cursor);

function move(ev) {
  requestAnimationFrame(() => {
    cursor.style.opacity = 1;
    cursor.style.transform = `translate3d(${ev.clientX - 2}px, ${ev.clientY - 2}px, 0)`;
  });
}

function hide() {
  //console.log('hide');
  cursor.style.opacity = 0;
}