//lib.js
let movement = {
	ANIMATION_TIME: 400,
	exception: {
		not_object: "User exception: argument not object"
	},
	disappear: function(object){
		//check if object is actually object
		if (typeof object != 'object'){
			throw movement.exception.not_object;
		}
		
		object.animate(
			{
				opacity: 0
			},
			{
				duration: movement.ANIMATION_TIME,
				complete: function(){
					object.remove();
				}
			}
		);
	},

	appear: function(object){
		//check object argument
		if (typeof object != 'object'){
			throw movement.exception.not_object;
		}

		//pre-animation
		object.css({
			opacity: "0"
		});

		//animation
		object.show().animate({
			opacity: "1"
		}, movement.ANIMATION_TIME);

	}
}
