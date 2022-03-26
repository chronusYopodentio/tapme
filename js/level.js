let zero = {
	init: function(){
		zero.block1();
	},
	PARENT_DIV: "div#content",
	block1 : function(){
		let button1 = new button.button({
			content: "hmm... sure",
			onClick: function(){
				movement.disappear(dialogue1);
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
			content: "fuck you I have homework",
			onClick: function(){
				movement.disappear(dialogue1);
				zero.block3();
			}
		});
		let dialogue1 = new dialogue.dialogue({
			title: "Objective",
			content:
			`
			Congrats! You're offcially an detective.<br>
			Now your job is simple: come up with the name of the culprit.<br>
			Once you nail down who is it, <br>
			type their name in the <b>prosecute</b> box <br>
			(cap first letter!).<br>
			Typing in "suicide" if it wasn't a homicide.<br>
			<i>You have three attempts.</i>
			`,
			buttons: [button1, button2]
		});
		dialogue1.appendTo(zero.PARENT_DIV);

		dialogue1.hide();
		movement.appear(dialogue1);
	},

		block3: function(){
			let dialogue1 = new dialogue.dialogue({
				title: "!?",
				content:
				`
				Well fuck you too, I have homework too but ya don't hear me complainin' 'bout codin' dis shit.
				`,
			});
			dialogue1.appendTo(zero.PARENT_DIV);
			dialogue1.hide();
			movement.appear(dialogue1);
		}
}
