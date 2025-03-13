// Purpose: Scroll to the bottom of the page when the page is loaded.
window.onload = function () {
    if (window.location.hash === "#scrollBottom") {
      window.scrollTo(0, document.body.scrollHeight);
    }
  };