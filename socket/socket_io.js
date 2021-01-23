module.exports = function(io){
    io.on('connection',(socket)=>{
        console.log(socket.id);
        socket.on('changeData',(mess)=>{
            io.emit('loadData',{data: 'gui tu server'})
            console.log(mess.data)
        })
        socket.on('updateLike',()=>{
            io.sockets.emit('loadData',{data: 'gui tu server'})
            // console.log(mess.data)
        })
        socket.on('updateComment',()=>{
            io.sockets.emit('loadData',{data: 'gui tu server'})
            // console.log(mess.data)
        })
        socket.on('deletePost',()=>{
            io.sockets.emit('loadData',{data: 'gui tu server'})
            // console.log(mess.data)
        })
        socket.on('addFriend',()=>{
            io.sockets.emit('loadData',{data: 'gui tu server'})
            // console.log(mess.data)
        })
        socket.on('disconnect',()=>{
            
            io.sockets.emit('loadData',{data: 'gui tu server'})
            // console.log(mess.data)
        })
    })
    
}
module.exports = function(io){
	var usernames = [];

	io.sockets.on('connection',(socket) => {
		
		console.log(socket.id);
		socket.on('disconnect', () => {
			for (var i = 0; i < usernames.length; i++) {
				if (usernames[i] == socket.username) {
					usernames.splice(i,1);
				}
			}
			let data = {
				user: socket.username
			}

			io.sockets.emit('offline',data);
		});
		// listen 
		socket.on('adduser',username => {

			socket.username = username;
			usernames.push(username);

			// Notifi to myself
			let data = {
				sender: "Server",
				mess: 'you have join chat'
			}

			socket.emit('online',data);

			// notify to other 
			let data2 = {
				sender : 'server',
				user: usernames
			}

			io.sockets.emit('online', data2);
		});

		socket.on('send_mess', (mess) => {

			let data = {
				sender: "you",
				mess: mess,
				time: new Date()
			};

			socket.emit('send_mess', data);

			let data2 = {
				sender : socket.username,
				mess: mess,
				time: new Date()
			}

			socket.broadcast.emit('send_mess', data2);

		});

		socket.on('dang_nt',() => {
			socket.broadcast.emit('dang_nt' , socket.username);
		});
		socket.on('ngung_nt',() => {
			socket.broadcast.emit('ngung_nt' , socket.username);
		})
	})
}