import io from 'socket.io-client';
import { getPostDB } from './post';

export const loadPost =(socket)=> dispatch => {
    console.log(socket);
    dispatch({
        type: "AJAX",
        payload: socket,
    })
}
var socket = io('http://localhost:1234');

				socket.on('connect', () => {
					var username = prompt('what is your name?');

					socket.emit('adduser', username);

				});

				socket.on('online', data => {

					var users = data.user;
					if(data.mess){
						alert(data.mess);
					}else{
						$('.contacts').html('');
						users.forEach(user => $('.contacts').append("<li>"+
							"<div class='d-flex bd-highlight'>" +
								"<div class='img_cont'>"+
									"<img src='https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg' class='rounded-circle user_img'>"+
									"<span class='online_icon'></span>"+ 
								"</div>"+ 
								"<div class='user_info'>"+ 
									"<span class='user_name'>"+ user +"</span>"+
									"<p>Kalid is online</p>"+ 
								"</div>"+
							"</div>"+
						"</li>"))
						;
						
					}
				});
				socket.on('offline', data => {

					var users = data.user;
					var username = $('.user_name').html();
					console.log(username);

					if (username == data.user) {
						var icon = document.getElementById('online_icon');
						
						console.log(icon);
					}
			
					
				});



				socket.on('send_mess', data => {
					if(data.sender == 'you'){
						$('.msg_card_body').append(
							"<li>"+
						"<div class='d-flex justify-content-end mb-4'>"+
								"<div class='msg_cotainer_send'>"+
									data.mess+
									"<span class='msg_time_send'>"+data.time+"</span>"+
								"</div>"+
								"<div class='img_cont_msg'>"+
									"<img class='rounded-circle user_img_msg'>"+
								"</div>"+
							"</div>"+
							"</li>"
						)
					}else{
						$('.msg_card_body').append(
							"<li>"+
						"<div class='d-flex justify-content-start mb-4'>"+
								"<div class='img_cont_msg'>"+
									"<img class='rounded-circle user_img_msg'>"+
								"</div>"+
								"<div class='msg_cotainer'>"+
									data.mess+
									"<span class='msg_time'>"+data.time+"</span>"+
								"</div>"+
							"</div>"+
							"</li>"
						)
					}
					
				});

				socket.on('dang_nt', username => {
					$('.msg_card_body').append(
						
						"<div class='d-flex justify-content-end mb-4' id='bacham'>"+
								"<div class='msg_cotainer_send '>"+
									username +'.........'+
									
								"</div>"+
							"</div>"
						
						)
					
				} )
				socket.on('ngung_nt', username => {
					var item = document.getElementById("bacham");
 					 item.parentNode.removeChild(item);
					
				} )

				// click Enter

				$('.type_msg').keypress(function(event) {
						if (event.which == 13) {
							$('#send').trigger('click');
						}
				});

				$(document).ready(function() {
					$('#send').click(function(event) {
						socket.emit('send_mess', $('.type_msg').val());
						$('.type_msg').val('');
					});

				$('.type_msg').focusin(function(event) {
					socket.emit('dang_nt');
				});
				$('.type_msg').focusout(function(event) {
					socket.emit('ngung_nt');
				});

					
				});