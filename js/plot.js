//plot - the story line in form of json

let plot = {
	block1 : {
		dialg:{
			id: "crime-scene",
			divClass: "crime-scene",
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
			divClass: "crime-scene",
			title: "crime scene",
			content: 
			`
			The police gave you a <b class=red>crimescene report</b>.
			`
			
		},

		button1: {
			content: "add to inventory"
		}
	}
}
