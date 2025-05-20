var richTextContent = '❌ No Kustom checkout widget found.';
var iframe = document.querySelector('iframe[src*="kustom.co"]');

//https://app.datadoghq.eu/logs?query=service:(checkout-backend) @meta.order_id:{match[1]}&agg_m=count&agg_m_source=base&agg_t=count&cols=@meta.order_id,@meta.operation

if (iframe) {
    var isPlayground = iframe.src.includes("playground");
    var data = decodeURIComponent(new URL(iframe.src).hash) || decodeURIComponent(iframe.src);
    match = data.match(/"sessionId":"([0-9a-zA-Z\-]+)"/);

    if (match?.length > 0) {
        richTextContent = `
            <h2>🛍️ Order ID</h2>
            <pre style="font-size: 20px; font-family: monospace; background-color: #f5f5f5; padding: 10px; border-radius: 5px; color: black;">${match[1]}</pre>
            <p><strong>Tools</strong><br /><a style="color: black; font-size: 14px;" target="_blank" href="https://app.datadoghq.eu/logs?query=service:(checkout-backend) @meta.order_id:${match[1]}&agg_m=count&agg_m_source=base&agg_t=count&cols=@meta.order_id,@meta.operation">DataDog</a></p>

        `;
    } else {
        richTextContent = '⚠️ Issue: iframe found but could not parse order_id';
    }
}

var dialog = document.createElement('div');
Object.assign(dialog.style, {
    position: 'fixed',
    zIndex: '9999',
    top: '10%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#ffffff',
    padding: '20px',
    border: '1px solid #cccccc',
    borderRadius: '5px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    width: '50%',
    minWidth: '300px',
    maxWidth: '600px',
    overflow: 'auto',
});

dialog.innerHTML = `
    <div style="position:relative;">
        <button class="close-dialog-button" style="position:absolute; right:0; top:0; background:none; border:none; font-size:24px; color:black; cursor:pointer;">&times;</button>
        <div style="white-space:pre-wrap; word-wrap:break-word; font-family: Arial, sans-serif; font-size:16px; padding:10px; color: black;">${richTextContent}<br /><em>Please share any feedback to @svante.hansson on Slack!</em></div>
    </div>
`;
document.body.appendChild(dialog);

var closeButtons = document.querySelectorAll('.close-dialog-button');
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.body.removeChild(button.parentElement.parentElement);
    });
});
