function clickHandler() {
  chrome.tabs.executeScript(null,
      {code:`(() => {
        if(window.location.href !== "https://tinder.com/app/recs") {
          alert("Go to tinder.com/app/recs first!");
        }
        setInterval(() => {
            let likeButton = document.querySelectorAll('.Bd > button.button');
            if (likeButton && likeButton.length) {
              likeButton[2].click();
            }
            let keepSwiping = document.querySelectorAll('div.StretchedBox.CenterAlign > div > button.button.Ell');
            if (keepSwiping && keepSwiping.length) {
              keepSwiping[1].click();
            }
        }, 100);
      })()`});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('a');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', clickHandler);
  }
});