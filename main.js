var container = document.querySelector('.container');
var contents = [
    { heading: '矩形', desc: '.fillRect()' },
    { heading: '矩形(輪郭)', desc: '.strokeRect()' },
    { heading: '直線', desc: '.lintTo()' },
    { heading: '円弧', desc: '.arc()' },
    { heading: '点線', desc: '.setLineDash()' },
    { heading: 'テキスト', desc: ['.fillText', '.strokeText'] },
    { heading: '画像配置', desc: ['.drawImage', '.createPattern'] },
    { heading: '画像切出し', desc: '.drawImage()' },
    { heading: '描画領域の拡大縮小', desc: '.scale()' },
    { heading: '描画領域の移動・回転', desc: ['.translate()', '.rotate()'] },
    { heading: '描画設定の保存・復元', desc: ['.save()', '.restore()'] },
    { heading: "アニメーション", desc: ["x + Math.sin()", ".setTimeout()"] }
];
contents.forEach(function (contents) {
    //section要素を生成
    var section = document.createElement('section');
    section.classList.add('shape_section');
    //h2要素を生成
    var heading = document.createElement('h2');
    heading.classList.add('section__heading');
    heading.textContent = contents.heading;
    //p要素を生成
    var desc = document.createElement('p');
    if (typeof contents.desc === 'object') {
        desc.innerHTML = contents.desc[0] + "<br>" + contents.desc[1];
    }
    else {
        desc.textContent = contents.desc;
    }
    //canvas要素を生成
    var canvas = document.createElement('canvas');
    canvas.setAttribute('width', '200');
    canvas.setAttribute('height', '200');
    canvas.textContent = 'Canvas not supported.';
    //bodyにsection要素を追加
    container.appendChild(section);
    //sectionにh2を追加
    section.appendChild(heading);
    //pとcanvasを追加
    heading.after(desc);
    desc.after(canvas);
});
function draw() {
    //描画領域を定数に取得
    var canvas = document.querySelectorAll('canvas');
    //使用環境がCanvasをサポートしているかチェック
    if (typeof canvas[0].getContext === 'undefined') {
        return;
    }
    //矩形(fillRect)
    var ctx = canvas[0].getContext('2d');
    ctx.fillStyle = "rgba(0,128,128,0.5)";
    ctx.fillRect(40, 40, 75, 75);
    ctx.fillStyle = "rgba(128,0,128,0.5)";
    ctx.fillRect(80, 80, 75, 75);
    //矩形（strokeRect）
    ctx = canvas[1].getContext('2d');
    ctx.lineWidth = 8;
    ctx.strokeStyle = "rgba(0,128,128,0.5)";
    ctx.strokeRect(40, 40, 75, 75);
    ctx.strokeStyle = "rgba(128,0,128,0.5)";
    ctx.strokeRect(80, 80, 75, 75);
    //矩形（strokeRect）
    ctx = canvas[2].getContext('2d');
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(0,128,128,0.5)";
    ctx.beginPath();
    ctx.moveTo(40, 40);
    ctx.lineTo(115, 40);
    ctx.lineTo(40, 115);
    ctx.lineTo(115, 115);
    ctx.stroke();
    ctx.strokeStyle = "rgba(128,0,128,0.5)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(80, 80);
    ctx.lineTo(155, 80);
    ctx.lineTo(80, 155);
    ctx.lineTo(155, 155);
    ctx.closePath();
    ctx.stroke();
    //パス（円弧）
    ctx = canvas[3].getContext('2d');
    ctx.strokeStyle = "rgba(0,128,128,0.5)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(75, 75, 50, Math.PI * -0.5, Math.PI * 1);
    ctx.stroke();
    ctx.strokeStyle = "rgba(128,0,128,0.5)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(125, 125, 50, Math.PI * 0, Math.PI * 0.5, true);
    ctx.closePath();
    ctx.stroke();
    //点線
    ctx = canvas[4].getContext('2d');
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.moveTo(25, 25);
    ctx.lineTo(175, 25);
    ctx.stroke();
    ctx.beginPath();
    ctx.setLineDash([2]);
    ctx.moveTo(25, 75);
    ctx.lineTo(175, 75);
    ctx.stroke();
    ctx.beginPath();
    ctx.setLineDash([10, 5]);
    ctx.moveTo(25, 125);
    ctx.lineTo(175, 125);
    ctx.stroke();
    ctx.beginPath();
    ctx.setLineDash([15, 5, 2, 5, 2, 5]);
    ctx.moveTo(25, 175);
    ctx.lineTo(175, 175);
    ctx.stroke();
    //テキスト
    ctx = canvas[5].getContext('2d');
    ctx.font = 'normal 1.5em serif';
    ctx.textAlign = 'left'; //指定座標との位置関係 left,center,right
    ctx.textBaseline = 'alphabetic'; //指定座標との位置関係 top,middle,base,bottom
    ctx.fillText('CSS', 100, canvas[5].height * 0.25);
    ctx.font = 'bold 1.5em sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.strokeStyle = "rgba(0,128,128,0.5)";
    ctx.lineWidth = 2;
    ctx.strokeText('HTML', 100, canvas[5].height * 0.5);
    ctx.font = 'bold 1.5em cursive';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'top';
    ctx.fillStyle = "rgba(128,0,128,0.5)";
    ctx.fillText('JavaScript', 100, canvas[5].height * 0.75, 100);
    ctx.strokeStyle = "#ccc";
    ctx.beginPath();
    ctx.setLineDash([2]);
    ctx.moveTo(0, 50);
    ctx.lineTo(200, 50);
    ctx.stroke();
    ctx.beginPath();
    ctx.setLineDash([2]);
    ctx.moveTo(0, 100);
    ctx.lineTo(200, 100);
    ctx.stroke();
    ctx.beginPath();
    ctx.setLineDash([2]);
    ctx.moveTo(0, 150);
    ctx.lineTo(200, 150);
    ctx.stroke();
    ctx.beginPath();
    ctx.setLineDash([2]);
    ctx.moveTo(100, 0);
    ctx.lineTo(100, 200);
    ctx.stroke();
    /* --- ↑テキスト --- */
    //画像(パターン)
    ctx = canvas[6].getContext('2d');
    var img1 = document.createElement('img');
    img1.src = 'https://source.unsplash.com/50x50/?cat';
    img1.addEventListener('load', function () {
        //位置指定
        ctx.drawImage(img1, 0, 0);
        //塗りのパターンとして指定
        var pattern = ctx.createPattern(img1, 'repeat');
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 100, 200, 100);
    });
    /* --- ↑画像（パターン） --- */
    //画像(切出し)
    var ctx2 = canvas[7].getContext('2d');
    var img2 = document.createElement('img');
    img2.src = 'https://source.unsplash.com/200x100/?kitten';
    img2.addEventListener('load', function () {
        //位置とサイズを指定
        ctx2.drawImage(img2, 0, 0, 200, 100);
        ctx2.createPattern(img2, 'repeat'); //repeat-x/repeat-y
        //切り出し
        ctx2.drawImage(img2, 50, 25, 100, 50, 50, 125, 100, 50);
        //補助線
        ctx2.strokeStyle = '#f00';
        ctx2.lineWidth = 2;
        ctx2.setLineDash([3, 1]);
        ctx2.strokeRect(50, 25, 100, 50);
        ctx2.stroke();
    });
    /* --- ↑画像切出し --- */
    //描画サイズ変更
    var ctx3 = canvas[8].getContext('2d');
    ctx3.fillStyle = "rgba(0,128,128,0.5)";
    ctx3.fillRect(0, 0, canvas[8].width, canvas[8].height);
    ctx3.beginPath();
    ctx3.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI);
    ctx3.fillStyle = 'rgba(255,255,255,0.5)';
    ctx3.fill();
    //コンテクストサイズ変更
    ctx3.scale(0.5, 0.5);
    ctx3.fillStyle = "rgba(128,0,128,0.5)";
    ctx3.fillRect(0, 0, canvas[8].width, canvas[8].height);
    //上と同じ座標と同じサイズでコードを記述
    ctx3.beginPath();
    ctx3.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI);
    ctx3.fillStyle = 'rgba(255,255,255,0.5)';
    ctx3.fill();
    /* --- ↑描画サイズ変更 --- */
    //描画領域の移動回転
    var ctx4 = canvas[9].getContext('2d');
    ctx4.fillStyle = "rgba(0,128,128,0.5)";
    ctx4.fillRect(0, 0, canvas[8].width, canvas[8].height);
    ctx4.beginPath();
    ctx4.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI);
    ctx4.fillStyle = 'rgba(255,255,255,0.5)';
    ctx4.fill();
    //コンテクストサイズ変更
    ctx4.scale(0.5, 0.5);
    ctx4.translate(300, 150);
    ctx4.rotate(45 / 180 * Math.PI);
    ctx4.fillStyle = "rgba(128,0,128,0.5)";
    ctx4.fillRect(0, 0, canvas[8].width, canvas[8].height);
    //上と同じ座標と同じサイズでコードを記述
    ctx4.beginPath();
    ctx4.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI);
    ctx4.fillStyle = 'rgba(255,255,255,0.5)';
    ctx4.fill();
    /* --- ↑描画領域の移動回転 --- */
    //描画設定の保存・復元
    var ctx5 = canvas[10].getContext('2d');
    //設定保存
    ctx5.save();
    ctx5.font = 'bold 1.5em sans-serif';
    ctx5.strokeStyle = "rgba(0,128,128,0.5)";
    ctx5.lineWidth = 2;
    ctx5.strokeText('default', 25, canvas[10].height * 0.25);
    //設定変更
    ctx5.scale(0.75, 0.75);
    ctx5.rotate(15 / 180 * Math.PI);
    ctx5.translate(150, -60);
    ctx5.fillStyle = "rgba(128,0,128,0.5)";
    ctx5.fillRect(0, 0, canvas[10].width, canvas[10].height);
    ctx5.font = 'bold 1.5em sans-serif';
    ctx5.fillStyle = "rgba(255,255,255,1)";
    ctx5.lineWidth = 2;
    ctx5.fillText('changed', 25, canvas[10].height * 0.5);
    //設定復元
    ctx5.restore();
    ctx5.font = 'bold 1.5em sans-serif';
    ctx5.strokeStyle = "rgba(0,128,128,0.5)";
    ctx5.lineWidth = 2;
    ctx5.strokeText('restored', 25, canvas[10].height * 0.75);
    /* ---------- ↑描画設定の保存・復元 ---------- */
}
draw();
//アニメーション
var t = 0;
function draw11() {
    //描画領域を定数に取得
    var canvas = document.querySelectorAll('canvas');
    //使用環境がCanvasをサポートしているかチェック
    if (typeof canvas[0].getContext === 'undefined') {
        return;
    }
    var ctx11 = canvas[11].getContext('2d');
    ctx11.clearRect(0, 0, canvas[11].width, canvas[11].height);
    ctx11.lineWidth = 8;
    ctx11.strokeStyle = "rgba(0,128,128,0.5)";
    ctx11.strokeRect(40 + Math.sin(t / 30), 40 + Math.sin(t / 30), 75, 75);
    ctx11.strokeStyle = "rgba(128,0,128,0.5)";
    ctx11.strokeRect(80 + Math.sin(-t / 30), 80 + Math.sin(-t / 30), 75, 75);
    t++;
    setTimeout(draw11, 10);
    /* --- ↑アニメーション --- */
}
/* --- draw11 --- */
draw11();
