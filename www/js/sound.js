
console.log("LLV sound loaded.");

//変数に音源となるファイルの名前を指定します。この変数はMediaオブジェクトを生成する際に使用します。
var sound = "sound/atari.mp3";

//Mediaオブジェクトを利用するためにここで変数宣言しておきます。この段階では「null」、すなわち中に何もない空の状態で宣言しておきます。
var media = null;

//Androidでは絶対パスを指定する必要があるため、そのパスを取得するための関数です。
function getPath(){
    var str = location.pathname;
    var i = str.lastIndexOf('/');
    return str.substring(0,i+1);
}

//PhoneGapの読み込みが完了した際の「deviceready」イベント発生時にonDeviceReady()関数を呼び出すイベントを設定します。
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
    //PhoneGapの読み込みが完了した際に「PhoneGapの読み込みが完了しました」と通知を出しています
    //alert("PhoneGapの読み込みが完了しました");
    /*効果音を再生するための「オブジェクト」を生成してそれぞれ変数から利用できるようにします。
      第１引数のurl指定を「getPath() + src」とすることで音源となるファイルへのパスを示すとともに
      第2、第３引数で再生成功•再生失敗時のコールバック関数を定義しています。*/
    media = new Media(getPath() + sound, onSuccess, onError);
}

function soundReload(resound){
    media = null;
    media = new Media(getPath() + resound, onSuccess, onError);
}

if (typeof Windows != "undefined") {
    // Windowsストアアプリでalert関数を使用するための記述
    window.alert = function(s) {
        new Windows.UI.Popups.MessageDialog(s).showAsync();
    }
}

//Mediaオブジェクトを生成する際の第２引数に設定した音声再生成功時のコールバック関数です
function onSuccess() {
    console.log("playAudio():Audio Success");
}

//Mediaオブジェクトを生成する際の第３引数に設定した音声再生失敗時のコールバック関数です
function onError(error) {
    alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}        

function playSound() {
    if (sound != 'OFF'){
        media.play();
        console.log("LLV> Play Media");
    } else {
        console.log("LLV> Play Media silent");
    }
};



