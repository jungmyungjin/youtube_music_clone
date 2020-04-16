const left_btn = document.querySelector(".left-btn");
const right_btn = document.querySelector(".right-btn");
const track_lists = document.querySelector(".track-lists");

let scroll = 0;

function clickedButton(event) {
  const movePoint = 300;

  if (event.target.classList.contains("left-btn")) {
    if (0 < scroll) {
      scroll = scroll - movePoint;
    } else {
      scroll = 0;
    }
  } else if (event.target.classList.contains("right-btn")) {
    if (scroll < track_lists.scrollWidth) {
      scroll = scroll + movePoint;
    } else {
      scroll = track_lists.scrollWidth;
    }
  }

  track_lists.scroll(scroll, 0);
}

left_btn.addEventListener("click", clickedButton);
right_btn.addEventListener("click", clickedButton);
