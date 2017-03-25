function shownotification() {
document.getElementById("body").className = "unlocked";
body = document.createElement('audio');
body.innerHTML = '<audio id="sound" src="' + 'Notification.flac'+ '" autoplay></audio>';
var div = document.getElementById('floatnotifs');
div.innerHTML = div.innerHTML + '<div id="notification" notifid="+value+"><img width="114px" src="https://files.blockai.com/v1/files/7n9386j61DQa+avatar.png"/><div class="button close">x</div><div class="body"><h1>Plasmmer</h1><span>Oi</span></div></div>';
var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}