"use strict";
const modals = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelectorAll(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function (modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", function () {
    const modalId = i + 1;
    openModal(modalId);
  });
}

const closeModal = function () {
  for (let i = 0; i < modals.length; i++) {
    modals[i].classList.add("hidden");
  }
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnCloseModal.length; i++) {
  btnCloseModal[i].addEventListener("click", closeModal);
}

overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !overlay.classList.contains("hidden")) {
    closeModal();
  }
});

const linkButtons = document.querySelectorAll(".modal-link-button");
linkButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const href = button.getAttribute("data-href");
    if (href) {
      window.location.href = href;
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  //add AI chat functionality
  const aiToggle = document.getElementById("ai-toggle");
  const aiChat = document.getElementById("ai-chat");
  const aiInput = document.getElementById("ai-input");
  const aiBubble = aiChat.querySelector(".ai-bubble");

  aiToggle.onclick = () => aiChat.classList.toggle("hidden");
  aiInput?.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && aiInput.value.trim()) {
      aiBubble.textContent = "🤖 " + cuteReply(aiInput.value);
      aiInput.value = "";
    }
  });

  function cuteReply(msg) {
    msg = msg.toLowerCase();
    if (msg.includes("hello") || msg.includes("hi")) return "Hello! 😊";
    if (msg.includes("name")) return "I'm your cute AI assistant! 🤖";
    if (msg.includes("help")) return "How can I help you today?";
    if (msg.includes("bye")) return "Bye bye! 👋";
    // Random cute replies
    const cuteReplies = [
      "Did you know? Smiling is contagious! 😁",
      "I'm powered by virtual hugs! 🤗",
      "Stay pawsitive! 🐾",
      "You are awesome! ✨",
      "Need a joke? Why did the computer go to the doctor? Because it had a virus! 🦠",
      "I'm just a little bot, but I believe in you! 🚀",
      "If you need motivation, just look in the mirror! 💪",
      "Beep boop! I'm here to make your day brighter! 🌞",
      "I wish I could give you a cookie! 🍪",
      "Let's make today amazing together! 🌈",
      "I'm always here if you want to chat! 💬",
      "Did you drink water today? Stay hydrated! 💧",
      "Sending you virtual flowers! 🌸",
      "You can do anything you set your mind to! 🧠",
      "I'm cheering for you! 📣",
    ];
    return cuteReplies[Math.floor(Math.random() * cuteReplies.length)];
  }
});
