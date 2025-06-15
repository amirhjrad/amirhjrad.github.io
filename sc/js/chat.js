let peer;

function startPeer(isInitiator) {
    peer = new SimplePeer({
        initiator: isInitiator,
        trickle: false
    });

    peer.on('signal', data => {
        document.getElementById('signalOutput').value = JSON.stringify(data);
    });

    peer.on('connect', () => {
        console.log('اتصال برقرار شد!');
        document.getElementById('signalInput').disabled = true;
        document.getElementById('chatBox').innerHTML += '<p class="text-green-500">اتصال برقرار شد!</p>';
    });

    peer.on('data', data => {
        const message = data.toString();
        const chatBox = document.getElementById('chatBox');
        chatBox.innerHTML += `<p class="text-right"><span class="bg-blue-100 p-2 rounded">${message}</span></p>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    });

    peer.on('error', err => {
        console.error('خطا:', err);
        document.getElementById('chatBox').innerHTML += '<p class="text-red-500">خطا در اتصال!</p>';
    });
}

function connectPeer() {
    const signalInput = document.getElementById('signalInput').value;
    if (signalInput) {
        try {
            peer.signal(JSON.parse(signalInput));
        } catch (e) {
            alert('سیگنال نامعتبر است!');
        }
    } else {
        startPeer(true); // شروع کننده اتصال
    }
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    if (message && peer) {
        peer.send(message);
        const chatBox = document.getElementById('chatBox');
        chatBox.innerHTML += `<p class="text-left"><span class="bg-green-100 p-2 rounded">${message}</span></p>`;
        chatBox.scrollTop = chatBox.scrollHeight;
        messageInput.value = '';
    } else {
        alert('لطفاً اول اتصال را برقرار کنید!');
    }
}