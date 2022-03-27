//inventory
let inventory = {
	inventory : [],
	
	update : function(){
		let inv = $("div#inventory");
		inv.empty();
		for (let i=0; i < inventory.inventory.length; i++){
			$("<div>")
			.attr("id", inventory.inventory[i].id)
			.addClass("item")
			.text(inventory.inventory[i].title)
			.appendTo(inv)
			.click(
				function(){
					inventory.interact(inventory.inventory[i]);
				}
			)
		}
	},
	add : function(item){
		//check if already added
		for (let i=0; i < inventory.inventory.length; i++){
			if (inventory.inventory[i].id === item.id){
				return
			}
		}
		inventory.inventory.push(item);
		inventory.update();
	},
	interact: function(item){
		let closeButton = new button.button({
			content: "close",
			onClick: function(){
				//reset css 
				movement.disappear(readerPanel);
			}
		});
		let readerPanel = $("<div>");
		readerPanel.addClass("panel");
		let reader = new dialogue.dialogue({
			divClass: "evidence",
			id: item.id,
			title: item.title,
			content: item.content
		});
		closeButton.appendTo(reader);	
		reader.appendTo(readerPanel);
		readerPanel.appendTo("div#content");
	}
}
