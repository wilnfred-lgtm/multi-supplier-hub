export function initChat() {
    const chatWidget = document.createElement('div');
    chatWidget.id = 'chat-widget';
    chatWidget.innerHTML = `
        <div id="chat-window">
            <div class="chat-header">
                <span>Support Chat</span>
                <span id="close-chat" style="cursor: pointer;">&times;</span>
            </div>
            <div class="chat-body" id="chat-body">
                <div class="chat-message message-bot">Hello! How can we help you today?</div>
            </div>
            <div class="chat-footer">
                <input type="text" id="chat-input" placeholder="Type a message...">
                <button id="send-chat">Send</button>
            </div>
        </div>
        <div id="chat-bubble">
            <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
        </div>
    `;
    document.body.appendChild(chatWidget);

    const bubble = document.getElementById('chat-bubble');
    const window = document.getElementById('chat-window');
    const closeBtn = document.getElementById('close-chat');
    const sendBtn = document.getElementById('send-chat');
    const input = document.getElementById('chat-input');
    const body = document.getElementById('chat-body');

    bubble.addEventListener('click', () => {
        window.style.display = window.style.display === 'flex' ? 'none' : 'flex';
    });

    closeBtn.addEventListener('click', () => {
        window.style.display = 'none';
    });

    function addMessage(text, isUser = true) {
        const msg = document.createElement('div');
        msg.className = `chat-message ${isUser ? 'message-user' : 'message-bot'}`;
        msg.textContent = text;
        body.appendChild(msg);
        body.scrollTop = body.scrollHeight;
    }

    function handleSend() {
        const text = input.value.trim();
        if (!text) return;

        addMessage(text, true);
        input.value = '';

        // Simulated auto-reply
        setTimeout(() => {
            let reply = "Thanks for your inquiry! An agent will get back to you shortly.";
            if (text.toLowerCase().includes('price') || text.toLowerCase().includes('how much')) {
                reply = "Our prices are listed on each product page. Is there a specific item you're interested in?";
            } else if (text.toLowerCase().includes('shipping')) {
                reply = "We offer free shipping on all orders!";
            }
            addMessage(reply, false);
        }, 1000);
    }

    sendBtn.addEventListener('click', handleSend);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });
}
