(function() {
	// shift key pressed status
	var shift = false;
	
	$.fn.multicheck = function() {
		var
			// checkboxes
			items = this,
			// position of the last checkbox clicked
			lastp = -1;
		
		// listening click on checkboxes
		return this.on('click', function() {
			var
				// position of this checkbox
				index = items.index(this),
				// checked status of this checkbox
				state = this.checked;
			
			// requires shift pressed and a range to update
			// multiple checkboxes
			if (shift && lastp > -1) {
				for (var i = Math.min(lastp, index), ii = Math.max(lastp, index); i <= ii;
					items.get(i++).checked = state);
			}
			
			// updates the last position
			lastp = index;
		});
	};
	
	// updates shift key status
	$(document).on('keydown keyup', function(event) {
		shift = event.type == 'keydown' && 16 == (event.whitch || event.keyCode);
	});
})();