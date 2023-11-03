$(document).ready(function() {
    $('area').on('mouseenter', function(e) {
        let tooltipId = "#" + $(this).data('tooltip-id');
        $(tooltipId).css({
            top: e.pageY,
            left: e.pageX
        }).show();
    });

    $('area').on('mouseleave', function() {
        let tooltipId = "#" + $(this).data('tooltip-id');
        $(tooltipId).hide();
    });
});

function setVideoParameter() {
    const pcVideoIndex = Math.floor(Math.random() * 3);
    window.location.href = "game.html?video=" + pcVideoIndex;
}

function saveScore(score) {
    localStorage.setItem('score', score);
}

function loadScore() {
    return localStorage.getItem('score') || 0;  // スコアがない場合は0を返す
}

function loadAndPlayVideo() {
    const urlParams = new URLSearchParams(window.location.search);
    const videoIndex = urlParams.get('video');

    const videoPaths = ['img/eat.mp4', 'img/salt.mp4', 'img/sleep.mp4'];

    const videoElement = document.getElementById('pcVideo');
    videoElement.src = videoPaths[videoIndex];
    videoElement.muted = true;
    videoElement.play();

    let point;
    let score = parseInt(loadScore());  

    if(videoIndex == 0) {
        point = "5Pt";
        score += 5;
    } else if(videoIndex == 1) {
        point = "3Pt";
        score += 3;
    } else {
        point = "0Pt";
    }

    saveScore(score);
    document.getElementById("score-plus").textContent = score;

    let comment;
    if(videoIndex == 0) {
        comment = "ご飯を食べたよ！";
    } else if(videoIndex == 1) {
        comment = "塩をなめてるよ！";
    } else {
        comment = "寝てるよzzz";
    }

    $('#point').text(point);
    $('#comment').text(comment);
}

$(document).ready(function() {
    const score = loadScore();
    $("#score-plus").text(score);
});

$(document).ready(function() {
    const scoreElement = $("#score-plus");
    let score = parseInt(loadScore());
    scoreElement.text(score);

    // リセットボタンがクリックされた時の処理
    $('.reset').click(function() {
        saveScore(0); // スコアを0にして保存
        scoreElement.text('0'); // 表示も0にする
    });
});

