function clickHandler() {
  chrome.tabs.executeScript(null,
      {code:`(() => {
        if(window.location.href !== "https://tinder.com/app/recs") {
          alert("Go to tinder.com/app/recs first!");
        }
        setInterval(() => {
            let likeButton = document.querySelectorAll('[aria-label="Like"]');
            likeButton[0].click();
            let keepSwiping = document.querySelectorAll('[aria-current="page"]');
            if (keepSwiping[0]) {
              keepSwiping[0].click()
            }
        }, 50);
      })()`});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('a');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', clickHandler);
  }
});