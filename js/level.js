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
			content: "kay, fair enough",
			onClick: function(){
				movement.disappear(dialogue1);
				zero.block4();
			}
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
			let button1 = new button.button({
				content: "Fine.",
				onClick: function(){
					movement.disappear(dialogue1);
					zero.block4();
				}
			});

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
		},

		//introduction: the case of kurt
		block4: function(){
			let dialogue1 = new dialogue.dialogue({
				id: "intro-dialogue",
				content: "THE CASE OF KURT",
			});

			dialogue1.appendTo(zero.PARENT_DIV);
			movement.slideOut(dialogue1, 'intro-dialogue', 270);
			
			dialogue1.hover(
				//handler in
				function(){
					$(this).css({
						color: "red",
					});
				},
				//handler out
				function(){
					$(this).css({
						color: "black",
					});
				}
			);
			dialogue1.click(
				function(){
					movement.slideIn(dialogue1, zero.block5);
				}
			)
		},

		/*
		1. create button
		2. create onClick, link to next block
		3. create dialogue
		4. append button to dialogue
		5. hide dialogue
		6. appear dialogue so that is has animation
		*/

		block5: function(){
			
			let button1 = new button.button(plot.block1.button1, 
				function(){
					movement.disappear(dialg);
					zero.block6();
				}
			);
			
			//creating dialogue
			let dialg = new dialogue.dialogue(plot.block1.dialg);
			
			button1.appendTo(dialg);
			dialg.appendTo(zero.PARENT_DIV);
			dialg.hide();
			movement.appear(dialg);
		},
		
		//crime report
		block6: function(){
			let button1 = new button.button(plot.block2.button1,
				function(){
					//add evidence
					inventory.add(evidence.crimesceneReport);
					movement.disappear(dialg);
					zero.block7();
				});

			let dialg = new dialogue.dialogue(plot.block2.dialg);
			button1.appendTo(dialg);
			dialg.appendTo(zero.PARENT_DIV);
			dialg.hide();
			movement.appear(dialg);
		},
		
		//autopsy Report
		block7: function(){
			let button1 = new button.button(plot.block3.button1,
				function(){
					inventory.add(evidence.autopsyReport);
					movement.disappear(dialg);
					zero.block8();
				});
			let dialg = new dialogue.dialogue(plot.block3.dialg);
			button1.appendTo(dialg);

			dialg.appendTo(zero.PARENT_DIV);
			dialg.hide();
			movement.appear(dialg);
		},


		//freud
		block8 : function(){
			let btn = new button.button(plot.freud1.button,
				function(){
					movement.disappear(dlg);
					zero.block9();
				});
			let dlg = new dialogue.dialogue(plot.freud1.dia);
			btn.appendTo(dlg);
			dlg.appendTo(zero.PARENT_DIV);
			dlg.hide();
			movement.appear(dlg);
		},

		//freud 2
		block9: function(){
			createDialogue(
				plot.freud2,
				zero.PARENT_DIV,
				zero.block10
				
			);
		},
		//freud 3
		block10: function(){
			createDialogue(
				plot.freud3,
				zero.PARENT_DIV,
				zero.block11
			);
		},

		block11 : function(){
			createDialogue(
				plot.freud4,
				zero.PARENT_DIV,
				zero.block12
			);
		},

		block12 :  function(){
			createDialogue(
				plot.freud5,
				zero.PARENT_DIV,
				function(){
					inventory.add(evidence.diary1);
					zero.block13();
				}
			);
		},
		
		block13: function(){
			createDialogue(
				plot.freud6,
				zero.PARENT_DIV,
				function(){
					
				}
			)
		}

}

















