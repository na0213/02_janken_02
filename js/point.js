// グローバルスコープでjanken関数を定義
function janken(user) {
    var userJankens = ['gu.png', 'choki.png', 'pa.png'];
    var pcJankens = ['janken_gu.png', 'janken_choki.png', 'janken_pa.png'];
    // var presents = ['present1.PNG', 'present2.PNG', 'present3.PNG'];
    // var taikens = ['taiken1.PNG', 'taiken2.PNG', 'taiken3.PNG'];

    var userImg = document.getElementById("userImg");
    userImg.src = "img/" + userJankens[user];

    var pc_janken = Math.floor(Math.random() * 3);
    var pcImg = document.getElementById("pcImg");
    pcImg.src = "img/" + pcJankens[pc_janken];

    var resultImage;
    if (window.selectedPoints === '10ポイント') {
        if (pc_janken === user) {  //あいこの時の条件
            resultImage = 'present1.PNG';
        } else if ((user === 0 && pc_janken === 1) || (user === 1 && pc_janken === 2) || (user === 2 && pc_janken === 0)) {  //userが勝ちの時の条件
            resultImage = 'present2.PNG';
        } else {  //それ以外＝負け
            resultImage = 'present3.PNG';
        }
    } else if (window.selectedPoints === '20ポイント') {
        if (pc_janken === user) {  //あいこの時の条件
            resultImage = 'taiken1.PNG';
        } else if ((user === 0 && pc_janken === 1) || (user === 1 && pc_janken === 2) || (user === 2 && pc_janken === 0)) { //userが勝ちの時の条件
            resultImage = 'taiken2.PNG';
        } else {  //それ以外＝負け
            resultImage = 'taiken3.PNG';
        }
    }

    if(resultImage) {
        var resultImg = document.createElement("img");
        resultImg.src = "img/" + resultImage;
        var resultImageContainer = document.getElementById("resultImageContainer");
        resultImageContainer.innerHTML = ""; // 以前の結果をクリア
        resultImageContainer.appendChild(resultImg); // 新しい結果を追加
    }
}

document.addEventListener('DOMContentLoaded', function () { // ページが完全に読み込まれた後に実行される関数
    var selectElement = document.querySelector('.form-select'); // form-select=選択した内容を取得し、selectElementに代入

    selectElement.addEventListener('change', function() { // 選択内容が変更されたら
        window.selectedPoints = this.value; // 選択するたびに変数に代入
    });

    window.selectedPoints = selectElement.value; // 初期値
});
