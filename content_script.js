console.log("hello!");

$(document).ready(() => {

	$('.page_actions_wide').after('<div class=\"page_actions_wide clear_fix\">  <div class=\"page_action_left fl_l\" id=\"friend_status\">    <div class=\"profile_action_btn\"><button class=\"flat_button button_wide\">Добавить в корзину</button></div>  </div></div>');
	// $('.profile_actions_wide').after('<div class=\"page_actions_wide clear_fix\">  <div class=\"page_action_left fl_l\" id=\"friend_status\">    <div class=\"profile_action_btn\"><button class=\"flat_button button_wide\">Добавить в корзину</button></div>  </div></div>');


	chrome.storage.local.get(function(result){console.log(result)});

	$(document).keydown((e) => {
		if (e.ctrlKey && String.fromCharCode(e.which).toLowerCase() === 'e') {
			e.preventDefault();
			console.log("Good");

			let person = {
				link: $("._im_page_peer_name")[0].href,
				name: $("._im_page_peer_name")[0].innerText
			};
			chrome.extension.sendMessage({type: "add_true", person: person}, (response) => {
				console.log(`Response on method add_true : ${response}`);
			});
			console.log(person);
			chrome.storage.local.get(function(result){console.log(result)});
		}
		if (e.ctrlKey && String.fromCharCode(e.which).toLowerCase() === 'q') {
			e.preventDefault();
			console.log("Bad");
			let person = {
				name: $("._im_page_peer_name")[0].href,
				link: $("._im_page_peer_name")[0].innerText
			};
			console.log(person);
			chrome.extension.sendMessage({type: "add_not_true", person: person}, (response) => {
				console.log(response);
			});
			chrome.storage.local.get(function(result){console.log(result)});
		}
		if (e.ctrlKey && String.fromCharCode(e.which).toLowerCase() === 'd') {
			e.preventDefault();
			chrome.extension.sendMessage({type: "clear"}, (response) => {
				console.log(response)
			});

			chrome.storage.local.get(function(result){console.log(result)});
		}
	});
})