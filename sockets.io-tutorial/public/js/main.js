const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');


const userName = window.location.search.split('&')[0].split('=')[1];
const room = window.location.search.split('&')[1].split('=')[1];

const socket = io();

//Send userName, room ro server
socket.emit('joinRoom', { userName, room });

//Get room users
socket.on('roomUsers', ({ room, users }) => {
  outputRoomName(room);
  outputUsers(users);
});

// Message from server
socket.on('message', message => {
  outputMessage(message);
});

chatForm.addEventListener('submit', e => {
  e.preventDefault();
  const msg = e.target.elements.msg.value;
  socket.emit('chatMessage', msg);

  //Scroll down
  chatMessages.scrollTop = chatMessages.scrollHeight

  //Clear input
  e.target.elements.msg.value = '';
  e.target.elements.msg.focus()
});

//Output message to DOM
function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = `<p class='meta'>${message.userName} <span>${message.date}</span></p>
  <p class='text'>${message.text}</p>`;
  chatMessages.appendChild(div);
}

function outputRoomName(roomName) {
  roomName.innerText = roomName
}

function outputUsers(users) {
  userList.innerHTML = users.map(user => `<li>${user.userName}</li>`).join('');
}

