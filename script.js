let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


var swiper = new Swiper(".content-slider", {
    spacebetween: 20,
   grabCursor:true,
   loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
  });

  var swiper = new Swiper(".teachers-slider", {
    spacebetween: 20,
   grabCursor:true,
   loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
  });



  const socket = io();

// Join a room
socket.emit('joinRoom', { roomId: 'student-teacher-room-id' });

// Send a message
document.querySelector('.chat-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const message = document.querySelector('#chat-input').value;
    socket.emit('chatMessage', { roomId: 'student-teacher-room-id', message });
    document.querySelector('#chat-input').value = '';
});

// Receive messages
socket.on('message', (message) => {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message.content;
    messageDiv.classList.add(message.sender); // Add class 'student' or 'teacher'
    document.querySelector('.chat-messages').appendChild(messageDiv);
});
