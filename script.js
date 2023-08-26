function sendMessage(sender) {
    const messageContainer = document.querySelector(`.${sender}-messages`);
    const messageText = sender === 'nate' ? "Hey, how's it going?" : "Hi Nate! I'm doing great, thanks for asking.";

    const messageElement = document.createElement('div');
    messageElement.className = 'message';
    messageElement.classList.add(sender);
    messageElement.innerHTML = `<span>${sender.charAt(0).toUpperCase() + sender.slice(1)}:</span> ${messageText}`;

    messageContainer.appendChild(messageElement);
}

  });
});
