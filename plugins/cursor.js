window.addEventListener('mousemove', move);
document.addEventListener('mouseleave', hide);

const cursor = document.createElement('div');
cursor.classList.add('cursor');

document.body.appendChild(cursor);

function move(ev) {
  setTimeout(() => {
    requestAnimationFrame(() => {
      cursor.style.opacity = 1;
      cursor.style.transform = `translate3d(${ev.clientX - 3}px, ${ev.clientY - 3}px, 0)`;
    })
  }, 100);
}

function hide() {
  //console.log('hide');
  cursor.style.opacity = 0;
}