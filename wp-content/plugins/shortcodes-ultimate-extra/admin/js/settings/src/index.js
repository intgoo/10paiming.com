(function() {
	var input = document.getElementById('su_option_extra-shortcodes_license');

	if (!input) {
		return;
	}

	var key = input.getAttribute('data-key');
	var masked = input.getAttribute('data-key-masked');

	input.addEventListener('focus', function() {
		if (input.value === masked) {
			input.value = key;
		}
	});

	input.addEventListener('blur', function() {
		if (input.value === key) {
			input.value = masked;
		}
	});
})();
