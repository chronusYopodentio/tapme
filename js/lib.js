//lib.js
let movement = {
	ANIMATION_TIME: 400,
	exception: {
		not_object: "User exception: argument not object"
	},
	disappear: function(object, time=movement.ANIMATION_TIME){
		//check if object is actually object
		if (typeof object != 'object'){
			throw movement.exception.not_object;
		}
		
		object.animate(
			{
				opacity: 0
			},
			{
				duration: time,
				complete: function(){
					object.remove();
				}
			}
		);
	},

	appear: function(object, time=movement.ANIMATION_TIME){
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
		}, time);

	},
	slideOut: function(object, id, width=500, height=100){
		object.css({
			width: 0,
			height: 50 
		});

		let inside = $("div#" + id + " > p");
		inside.css({
			position: "absolute",
			opacity: 0
		});

		object.show().animate(
		{
			width: String(width)+"px" 
		},
		{
			duration: movement.ANIMATION_TIME,
			complete: function(){
				inside.animate({
					opacity: 1
				},50)
			}
		}
		);

	},
	
	slideIn: function(object,after, time=movement.ANIMATION_TIME){	
		//after is function to execute after animation finished
		if (typeof after != 'function'){
			throw "slideIn's second arg must be func";
		}
		object.empty();
		object.animate({
			width: "0px"
		}, {
			duration: time,
			complete: function(){
				object.remove();
				after()
			}
		});
	}

}

//shortcut for creating dialogue with next button
function createDialogue(_op, divParent, after){
	/*
	_opdlg must the dialogue options object
	_opbtn must the button options object
	divParent is the div where dialogue is appended to
	after is the next function to execute
	*/
	if (typeof _op != "object"){
		throw "arg[0] must be options object this has dlg:{} and btn:{}";
	}
	if (typeof divParent != 'string'){
		throw "arg[1] <divParent> must be string";
	}
	if (typeof after != 'function'){
		throw "arg[2] <after> must be a function";
	}
	let btn = new button.button(_op.btn,
		function(){
			movement.disappear(dlg);
			after()
		});
	let dlg = new dialogue.dialogue(_op.dlg);
	btn.appendTo(dlg);
	dlg.appendTo(divParent);
	dlg.hide();
	movement.appear(dlg);
}











