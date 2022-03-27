let dialogue = {
	dialogue: function(options){

		/*
		options: {
			id			<string>
			divClass	<string>
			title		<string>
			content		<string>
			buttons		<array of button objects>
		}
		*/
		let div = $("<div>")
			.attr("id", typeof options.id != "undefined" ? options.id : "default-dialogue")
			.addClass(typeof options.class != "undefined" ? options.class : "dialogue");


		//adding title if there's any
		if (typeof options.title === 'string'){
			$("<div class=dialogue-title>" + options.title + "</div>").appendTo(div);
		}

		//adding text <p> content </p> if there's any
		if (typeof options.content === 'string'){
			$("<p class=dialogue-content>" + options.content + "</p>").appendTo(div);
		}

		// adding button object if there's any
		let button_panel = $("<div class=button_panel>");
		button_panel.appendTo(div);

		if (typeof options.buttons != 'undefined' && options.buttons.length != 0){
			console.log(options.buttons.length);
			for (let i=0; i < options.buttons.length; i++){
				options.buttons[i].appendTo(button_panel);
			};
		}
		return div;
	}
}
