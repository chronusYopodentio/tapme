let zero = {
	init: function(){
		zero.block1();
	},
	PARENT_DIV: "div#content",
	block1 : function(){
		let button1 = new button.button({
			content: "hmm... sure",
			onClick: function(){
				dialogue1.remove();
				zero.block2();
			}
		});
		let dialogue1 = new dialogue.dialogue({
			divClass: "dialogue",
			title: "hi there...",
			content:
				`
				Welcome new player!<br>
				Ready to solve some mysteries?
				`,
			buttons: [button1]
		});
		dialogue1.appendTo(zero.PARENT_DIV);
	},
	block2: function(){
		let button1 = new button.button({
			content: "kay, fair enough"
		});
		let button2 = new button.button({
			content: "fuck you I have homework"
		});
		let dialogue1 = new dialogue.dialogue({
			title: "Objective",
			content:
			`
			Congrats! You're offcially an detective. Now your job is simple: come up with the name of the culprit.<br>
			Once you nail down who is it, type their name in the <b>prosecute</b> box (cap first letter!).<br>
			Typing in "suicide" if it wasn't a homicide.<br>
			<i>You have three attempts.</i>
			`
		});
		dialogue1.appendTo(zero.PARENT_DIV);
	}
}
