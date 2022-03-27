//plot - the story line in form of json

let plot = {
	block1 : {
		dialg:{
			id: "crime-scene",
			divClass: "dialogue",
			title: "crime scene",
			content: `
				Kurt, a young musician, was found dead on Friday April 8th. <br>
				The crimescene is swamped with the smell of foul liquor and marijuana.<br>
				In the beginning, the police suspected an overdose case.<br>
			` 
		},
		button1: {
			content: "next",
			onClick: null
		}
	},

	block2 : {
		dialg : {
			divClass: "dialogue",
			title: "crime scene",
			content: 
			`
			The police gave you a <b class=red>crimescene report</b>.
			`
			
		},

		button1: {
			content: "add to inventory"
		}
	},

	block3: {
		dialg: {
			divClass: "dialogue",
			title: "lab",
			content: "After 20 hours, they finished with his autopsy."
		},
		button1: {
			content: "Get autopsy report"
		}
	},

	freud1: {
		dia : {
			divClass: "dialogue",
			title: "Dr. Freud",
			content: "Dr. Freud, but call me Sid. From the autopsy team."
		},
		button: {
			content: "next"
		}
	},

	freud2: {
		dlg: {
			divClass: "dialogue",
			title: "Dr. Freud",
			content: "At first I thought it was alcolhol too."
		},
		btn: {
			content: "next"
		}
	},

	freud3: {
		dlg: {
			divClass: "dialogue", 
			title: "Dr. Freud",
			content: "It seems like this would be a case for you."
		},
		btn: {
			content: "next"
		}
	},

	freud4: {
		dlg: {
			divClass: "dialogue",
			title: "Dr. Freud",
			content: "Anyway, it seems like there's a page of his diary in his pocket."
		},
		btn: {
			content: "Can I have it?"
		}
	},

	freud5: {
		dlg: {
			divClass: "dialogue",
			title: "Dr. Freud",
			content: "I guess it wouldn't harm, just don't tell anyone."
		},
		btn: {
			content: "Receive"
		}
	},

	freud6: {
		dlg: {
			divClass: "dialogue",
			title: "thoughts",
			content: "interesting..."
		},
		btn: {
			content: "next"
		}
	}
}



























