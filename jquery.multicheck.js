(function() {
	// shift key pressed status
	var shift = false;
	
	$.fn.multicheck = function() {
		var items = this;
		var lastp = -1;
		
		// listening click on checkboxes
		this.on('click', function() {
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
			
			// stores this position as last clicked checkbox
			lastp = index;
			shift = false;
		});
	};
	
	// updates shift key status
	$(document).on('keydown keyup', function(event) {
		shift = event.type == 'keydown' && 16 == (event.whitch || event.keyCode);
	});
})();