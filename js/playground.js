var playground = {
	init: function(){
		let testButton = new button.button({
			id: "test-button",
			divClass: "dialogue-button",
			content: "next"

		});
		let testButton2 = new button.button({
			id: 'test-button2',
			divClass: 'dialogue-button',
			content: "alert",
			onClick: function(){
				alert("you clicked me!");
			}
		});
		let testDialogue = new dialogue.dialogue({
			id: "test-dialogue",
			divClass: "dialogue",
			title: "dialogue-title",
			content: "add some text",
			buttons: [testButton, testButton2]
		});
		testDialogue.appendTo("div#content");
		
	}
}
