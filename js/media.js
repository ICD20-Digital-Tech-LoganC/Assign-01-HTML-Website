function showToast() {
  // Show the toast
  var toast = document.getElementById('toast');
  toast.MaterialSnackbar.showSnackbar({
    message: 'Hibernation is their way of surviving a long winter when there’s little food available.'
  });

  // Set a timer to hide the toast after 3000 milliseconds (3 seconds)
  setTimeout(function() {
    toast.MaterialSnackbar.cleanup_();
  }, 10000);
}