var playground = {
	init: function(){
		dialogue = new Div("dialogue1", "dialogue");
		button = new Div("button1", "button");
		dialogue.content = button;
		
		//create dialogue inside div#wrpaper
		dialogue.create("div#wrapper");
		

		
	}
}
