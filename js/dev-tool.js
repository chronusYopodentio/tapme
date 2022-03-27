let dev = {
	init: function(){
		let devb = $("button#dev-button");
		devb.click(
			function(){
				let devi = $("input#dev-input").val();
				$("div#content").empty();
				zero[devi]();
			}
		);
	}
}
