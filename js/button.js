let button = {
	button: function(options){
		/*
		options {
			id			<string>
			divClass	<string>
			content		<string>
			onClick		<function>
		}
		*/
		let button= $("<button>")
			.attr("id", typeof options.id != 'undefined' ? options.id : "button")
			.addClass(typeof options.divClass != 'undefined' ? options.divClass : "button");
		if (typeof options.content === 'string'){
			button.text(options.content);
		}
		if (typeof options.onClick === 'function'){
			button.click(options.onClick);
		}
		
		return button;

	}
}
