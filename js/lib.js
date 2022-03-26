function createDiv(id, divClass, parentDiv){
	var el = $("<div>").attr("id", id);
	el.addClass(divClass);
	el.appendTo(parentDiv);
	return el;
}

function createButton(msg){
	var button = $("<button>").addClass("button");
	$("<b>"+msg+"</b>").appendTo(button);
	return button;
}

function Div(id, divClass){

	// id and divClass is mandatory, the other two are optionals
	this.id = id;
	this.divClass = divClass;
	this.content = {
		id: null,
		divClass: null,
		add: function(div){
			this.id = div.id,
			this.divClass = div.divClass
		}
	};
	
	// create function will append this div to a parent DOM object 
	this.create = function(parentDOM){
		var el = $("<div>").attr("id", this.id);
		el.addClass(this.divClass);

		el.appendTo(parentDOM);
	}
}
