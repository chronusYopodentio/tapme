//inventory
let inventory = {
	inventory : [],
	add : function(item){
		inventory.inventory.push(item)
	},
	interact: function(item){
		let closeButton = new button.button({
			content: "close",
			onClick: function(){
				movement.disappear(reader);
			}
		});
		let reader = new dialogue.dialogue({
			divClass: "evidence",
			id: item.id,
			title: item.title,
			content: item.content
		});
		
		reader.appendTo(zero.PARENT_DIV);

	}
}
