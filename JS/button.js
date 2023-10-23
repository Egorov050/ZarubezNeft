document.getElementById('show_model').addEventListener('click', function () {
  var button = this;
  button.classList.add('green');
  button.disabled = true; // Чтобы предотвратить дальнейшие нажатия
});
