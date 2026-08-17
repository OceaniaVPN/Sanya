export default {
  async fetch(request, env, ctx) {
    const html = `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>ОГОНЬ·24 — Саня раздарил сосиски у Вечного огня</title>
<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700;900&display=swap" rel="stylesheet">
<style>
:root{--red:#d90429;--red2:#ef233c;--dark:#101014;--paper:#f4f1ea;--ink:#181818;--card:#fff;--mut:#6b6b6b}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:'Rubik',system-ui,Arial,sans-serif;background:var(--paper);color:var(--ink)}
img{max-width:100%;display:block}
#pbar{position:fixed;top:0;left:0;height:4px;background:linear-gradient(90deg,var(--red),#ff7b00);width:0;z-index:1001}
.topbar{background:var(--dark);color:#cfcfd6;font-size:12px;display:flex;justify-content:space-between;gap:12px;padding:6px 16px;flex-wrap:wrap}
.site-head{background:#fff;display:flex;align-items:center;gap:24px;padding:14px 24px;box-shadow:0 2px 12px rgba(0,0,0,.08);position:sticky;top:0;z-index:1000}
.logo{font-size:28px;font-weight:900;letter-spacing:1px;white-space:nowrap}
.logo b{color:var(--red)}
.flame{display:inline-block;animation:flick 1s infinite alternate}
@keyframes flick{from{transform:scale(1) rotate(-3deg)}to{transform:scale(1.15) rotate(3deg)}}
nav{display:flex;gap:18px;flex-wrap:wrap;margin-left:auto}
nav a{color:var(--ink);text-decoration:none;font-weight:600;font-size:14px;text-transform:uppercase;letter-spacing:.5px;padding:6px 2px;border-bottom:3px solid transparent}
nav a:hover{border-color:var(--red);color:var(--red)}
.live{background:var(--red);color:#fff;font-weight:700;font-size:12px;padding:6px 12px;border-radius:20px;display:flex;align-items:center;gap:6px}
.live .dot{width:8px;height:8px;border-radius:50%;background:#fff;animation:pulse 1s infinite}
@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(255,255,255,.7)}100%{box-shadow:0 0 0 10px rgba(255,255,255,0)}}
.breaking{display:flex;align-items:center;background:var(--red);color:#fff;overflow:hidden}
.breaking-label{background:var(--dark);padding:10px 18px;font-weight:900;letter-spacing:2px;animation:blink 1.2s steps(2) infinite;white-space:nowrap}
@keyframes blink{50%{opacity:.55}}
.ticker{overflow:hidden;flex:1}
.ticker-track{display:flex;width:max-content;animation:tick 35s linear infinite}
.tgroup{display:flex;gap:40px;padding:10px 20px;white-space:nowrap;font-weight:500}
@keyframes tick{to{transform:translateX(-50%)}}
.layout{max-width:1200px;margin:28px auto;display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:28px;padding:0 16px}
@media(max-width:900px){.layout{grid-template-columns:1fr}}
.tags span{background:var(--red);color:#fff;font-size:11px;font-weight:700;padding:4px 10px;border-radius:3px;letter-spacing:1px;margin-right:6px}
.tags span.alt{background:var(--dark)}
h1{font-size:clamp(26px,4vw,44px);line-height:1.15;margin:14px 0 12px;font-weight:900}
.lead{font-size:18px;color:#333;line-height:1.6;border-left:4px solid var(--red);padding-left:14px;margin-bottom:14px}
.meta{color:var(--mut);font-size:13px;margin-bottom:18px;display:flex;gap:16px;flex-wrap:wrap}
.hero-photo{position:relative;overflow:hidden;border-radius:12px;box-shadow:0 12px 40px rgba(0,0,0,.25);cursor:zoom-in}
.hero-photo img{width:100%;height:480px;object-fit:cover;animation:kb 14s ease-in-out infinite alternate}
@keyframes kb{from{transform:scale(1) translate(0,0)}to{transform:scale(1.12) translate(2%,-2%)}}
.hero-photo figcaption{position:absolute;bottom:0;left:0;right:0;background:linear-gradient(transparent,rgba(0,0,0,.85));color:#eee;font-size:13px;padding:26px 16px 12px}
.age{position:absolute;top:12px;right:12px;background:rgba(0,0,0,.7);color:#fff;border:2px solid #fff;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:13px}
.article p{margin:0 0 14px;line-height:1.7;font-size:16px}
.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:14px;margin:26px 0}
.stat{background:var(--card);border-radius:12px;padding:18px;text-align:center;box-shadow:0 4px 14px rgba(0,0,0,.08);border-top:4px solid var(--red)}
.stat .num{font-size:34px;font-weight:900;color:var(--red)}
.stat .lbl{font-size:12px;color:var(--mut);text-transform:uppercase;letter-spacing:1px;margin-top:4px}
.sechead{font-size:22px;font-weight:900;border-left:6px solid var(--red);padding-left:12px;margin:26px 0 16px}
.timeline{margin:10px 0 26px;padding-left:26px;border-left:3px solid var(--red)}
.tl{position:relative;padding:0 0 18px 14px}
.tl::before{content:'';position:absolute;left:-36px;top:4px;width:14px;height:14px;border-radius:50%;background:var(--red);box-shadow:0 0 0 4px #ffd7dc}
.tl .time{font-weight:900;color:var(--red)}
.gallery{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:14px;margin:14px 0 26px}
.gallery figure{border-radius:10px;overflow:hidden;box-shadow:0 6px 18px rgba(0,0,0,.15);cursor:zoom-in;position:relative;transition:transform .25s;background:#000}
.gallery figure:hover{transform:translateY(-6px) rotate(-1deg)}
.gallery img{height:180px;width:100%;object-fit:cover}
.f-sepia img{filter:sepia(.9)}
.f-bw img{filter:grayscale(1) contrast(1.3)}
.f-hue img{filter:hue-rotate(120deg) saturate(1.6)}
.f-pop img{filter:saturate(3) contrast(1.2)}
.f-zoom img{transform:scale(1.7)}
.f-dark img{filter:brightness(.7) contrast(1.4) saturate(1.4)}
.gallery figcaption{position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,.72);color:#fff;font-size:11px;padding:6px 8px}
blockquote{background:var(--dark);color:#fff;border-radius:12px;padding:22px 26px 22px 44px;font-size:20px;font-style:italic;margin:20px 0;position:relative}
blockquote::before{content:'«';font-size:70px;color:var(--red);position:absolute;top:6px;left:12px;opacity:.6}
.share{display:flex;gap:10px;align-items:center;margin:18px 0}
.share button{width:46px;height:46px;border-radius:50%;border:none;font-size:20px;cursor:pointer;transition:transform .2s;background:#fff;box-shadow:0 3px 10px rgba(0,0,0,.15)}
.share button:hover{transform:scale(1.2) rotate(8deg)}
.widget{background:var(--card);border-radius:12px;padding:18px;box-shadow:0 4px 14px rgba(0,0,0,.08);margin-bottom:18px}
.widget h3{font-size:16px;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px;border-bottom:3px solid var(--red);display:inline-block;padding-bottom:4px}
.poll-opt{display:block;width:100%;text-align:left;background:#f1ede4;border:none;border-radius:8px;padding:10px 12px;margin-bottom:8px;cursor:pointer;font-size:14px;transition:background .2s}
.poll-opt:hover{background:#ffe3e8}
.poll-bar{background:#f1ede4;border-radius:8px;overflow:hidden;margin-bottom:6px}
.poll-bar .fill{height:30px;background:linear-gradient(90deg,var(--red),#ff7b00);color:#fff;font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:flex-end;padding-right:8px;border-radius:8px;transition:width 1s ease}
.readlist a{display:block;padding:9px 0;border-bottom:1px dashed #ccc;color:var(--ink);text-decoration:none;font-size:14px}
.readlist a:hover{color:var(--red)}
.ad{background:linear-gradient(135deg,#ff7b00,var(--red));color:#fff;border-radius:12px;padding:20px;text-align:center;position:relative;overflow:hidden;margin-bottom:18px}
.ad::after{content:'';position:absolute;top:0;left:-60%;width:40%;height:100%;background:rgba(255,255,255,.35);transform:skewX(-20deg);animation:shine 2.6s infinite}
@keyframes shine{to{left:130%}}
.ad .big{font-size:26px;font-weight:900}
.more{max-width:1200px;margin:10px auto 30px;padding:0 16px}
.more-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px}
.mcard{background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 14px rgba(0,0,0,.1);text-decoration:none;color:var(--ink);transition:transform .25s}
.mcard:hover{transform:translateY(-6px)}
.mcard img{height:150px;width:100%;object-fit:cover}
.mcard .mt{padding:12px 14px;font-weight:700;font-size:14px}
.comments{max-width:1200px;margin:0 auto 40px;padding:0 16px}
.comment{display:flex;gap:12px;background:#fff;border-radius:12px;padding:14px;margin-bottom:12px;box-shadow:0 3px 10px rgba(0,0,0,.07)}
.ava{width:44px;height:44px;border-radius:50%;background:var(--red);color:#fff;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0}
.cname{font-weight:700;font-size:14px}
.ctime{color:var(--mut);font-size:12px;font-weight:400}
.ctext{font-size:14px;margin-top:4px}
.cform{display:flex;gap:10px;margin-top:14px}
.cform input{flex:1;border:2px solid #ddd;border-radius:10px;padding:12px;font-size:14px;font-family:inherit}
.cform input:focus{outline:none;border-color:var(--red)}
.cform button{background:var(--red);color:#fff;border:none;border-radius:10px;padding:0 20px;font-weight:700;cursor:pointer}
footer{background:var(--dark);color:#9a9aa3;padding:30px 16px;text-align:center;font-size:13px;margin-top:40px}
footer b{color:#fff}
#lightbox{position:fixed;inset:0;background:rgba(0,0,0,.88);display:none;align-items:center;justify-content:center;z-index:2000;cursor:zoom-out}
#lightbox img{max-width:92vw;max-height:92vh;border:6px solid #fff;border-radius:8px;box-shadow:0 0 60px rgba(255,0,60,.5)}
#rainBtn{position:fixed;right:18px;bottom:18px;z-index:1500;background:var(--red);color:#fff;border:none;border-radius:30px;padding:14px 22px;font-size:15px;font-weight:800;cursor:pointer;box-shadow:0 8px 24px rgba(217,4,41,.5);animation:bob 2s ease-in-out infinite}
@keyframes bob{50%{transform:translateY(-6px)}}
.drop{position:fixed;top:-60px;z-index:1400;pointer-events:none;animation:fall linear forwards}
@keyframes fall{to{transform:translateY(115vh) rotate(720deg)}}
</style>
</head>
<body>
<div id="pbar"></div>

<div class="topbar">
  <span id="dateNow"></span>
  <span>USD 79,5 ▲ · EUR 86,2 ▼ · СОСИСКА 1,00 —</span>
  <span>🕐 <span id="clock"></span> · 🌡 +24°C у Вечного огня</span>
</div>

<header class="site-head">
  <div class="logo"><span class="flame">🔥</span> ОГОНЬ<b>·24</b></div>
  <nav>
    <a href="#">Главное</a><a href="#">Происшествия</a><a href="#">Сосиски</a><a href="#">Общество</a><a href="#">Культура</a>
  </nav>
  <div class="live"><span class="dot"></span>LIVE</div>
</header>

<div class="breaking">
  <span class="breaking-label">СРОЧНО</span>
  <div class="ticker"><div class="ticker-track">
    <span class="tgroup"><span>Саня раздарил 247 сосисок у Вечного огня</span>★<span>Очевидцы: «Это было красиво»</span>★<span>Синоптики: местами сосиски</span>★<span>Курс сосиски стабилен: 1 сосиска = 1 сосиска</span>★<span>Пятницу предложено объявить Днём Сосиски</span>★</span>
    <span class="tgroup"><span>Саня раздарил 247 сосисок у Вечного огня</span>★<span>Очевидцы: «Это было красиво»</span>★<span>Синоптики: местами сосиски</span>★<span>Курс сосиски стабилен: 1 сосиска = 1 сосиска</span>★<span>Пятницу предложено объявить Днём Сосиски</span>★</span>
  </div></div>
</div>

<main class="layout">
  <article>
    <div class="tags"><span>ПРОИСШЕСТВИЯ</span><span class="alt">ЭКСКЛЮЗИВ</span><span class="alt">РЕПОРТАЖ</span></div>
    <h1>«Люди были голодные»: Саня раздарил сосиски у Вечного огня и стал героем города</h1>
    <p class="lead">Корреспонденты ОГОНЬ·24 восстановили картину событий, которые уже называют «самой тёплой историей года». Человек с пакетом сосисок вышел к Вечному огню — и город никогда не будет прежним.</p>
    <div class="meta"><span>✍️ Редакция ОГОНЬ·24</span><span>👁 <span id="views">0</span></span><span>💬 3 комментария</span><span>📍 Вечный огонь</span></div>

    <figure class="hero-photo">
      <img class="zoomable" src="https://raw.githubusercontent.com/OceaniaVPN/Sanya/main/sanya.png" alt="Саня — человек, подаривший сосиски">
      <span class="age">0+</span>
      <figcaption>Эксклюзивное фото: Саня в момент исторической раздачи сосисок. Фото: очевидцы</figcaption>
    </figure>

    <div class="article" style="margin-top:20px">
      <p>История, которую ещё вчера обсуждали только в дворовых чатах, сегодня вышла на федеральный уровень. Всё началось с того, что у Вечного огня появился человек с большим полосатым пакетом. Внутри, как выяснилось, были сосиски. Много сосисок.</p>
      <p>«Я увидел, что люди вокруг какие-то грустные и голодные. Ну и подумал: а почему бы не подарить им сосиски?» — рассказал Саня корреспонденту ОГОНЬ·24, аккуратно поправляя пакет.</p>
      <p>За полчаса раздачи, по подсчётам редакции, было подарено 247 сосисок. Очевидцы аплодировали, голуби кружили в небе, а кто-то даже прослезился. Специалисты отмечают: ещё никто и никогда не дарил сосиски с таким размахом.</p>
    </div>

    <div class="stats">
      <div class="stat"><div class="num" data-target="247"></div><div class="lbl">сосисок роздано</div></div>
      <div class="stat"><div class="num" data-target="38"></div><div class="lbl">минут раздачи</div></div>
      <div class="stat"><div class="num" data-target="1500" data-suffix="+"></div><div class="lbl">свидетелей</div></div>
      <div class="stat"><div class="num" data-target="100" data-suffix="%"></div><div class="lbl">добра</div></div>
    </div>

    <h2 class="sechead">ХРОНИКА СОБЫТИЙ</h2>
    <div class="timeline">
      <div class="tl"><span class="time">14:02</span> — Саня замечен у Вечного огня с большим пакетом.</div>
      <div class="tl"><span class="time">14:07</span> — Первая сосиска торжественно передана прохожему.</div>
      <div class="tl"><span class="time">14:15</span> — Толпа растёт, Саня работает без перерыва.</div>
      <div class="tl"><span class="time">14:31</span> — Сосиски закончились. Саня уходит в закат.</div>
      <div class="tl"><span class="time">14:45</span> — Город обсуждает произошедшее. Мы — тоже.</div>
    </div>

    <h2 class="sechead">ФОТОРЕПОРТАЖ</h2>
    <div class="gallery">
      <figure class="f-sepia"><img class="zoomable" loading="lazy" src="https://raw.githubusercontent.com/OceaniaVPN/Sanya/main/sanya.png" alt=""><figcaption>Саня задумчиво смотрит вдаль</figcaption></figure>
      <figure class="f-zoom"><img class="zoomable" loading="lazy" src="https://raw.githubusercontent.com/OceaniaVPN/Sanya/main/sanya.png" alt=""><figcaption>Момент передачи сосиски</figcaption></figure>
      <figure class="f-bw"><img class="zoomable" loading="lazy" src="https://raw.githubusercontent.com/OceaniaVPN/Sanya/main/sanya.png" alt=""><figcaption>Архивное фото героя</figcaption></figure>
      <figure class="f-hue"><img class="zoomable" loading="lazy" src="https://raw.githubusercontent.com/OceaniaVPN/Sanya/main/sanya.png" alt=""><figcaption>Саня в неоновом свете славы</figcaption></figure>
      <figure class="f-pop"><img class="zoomable" loading="lazy" src="https://raw.githubusercontent.com/OceaniaVPN/Sanya/main/sanya.png" alt=""><figcaption>Цвет настроения — сосисочный</figcaption></figure>
      <figure class="f-dark"><img class="zoomable" loading="lazy" src="https://raw.githubusercontent.com/OceaniaVPN/Sanya/main/sanya.png" alt=""><figcaption>Герой дня крупным планом</figcaption></figure>
    </div>

    <blockquote>Сосиска — это не просто еда. Это жест.»<br><small style="color:#bbb">— Саня, в эксклюзивном интервью ОГОНЬ·24</small></blockquote>

    <div class="share">
      <span style="font-weight:700">Поделиться:</span>
      <button title="Телеграм">📨</button><button title="ВК">💬</button><button title="Сосиской">🌭</button>
    </div>
  </article>

  <aside>
    <div class="widget">
      <h3>Опрос дня</h3>
      <div id="pollBox"></div>
    </div>
    <div class="widget">
      <h3>Сейчас читают</h3>
      <div class="readlist">
        <a href="#">Учёные доказали: сосиски повышают настроение на 87%</a>
        <a href="#">Вечный огонь горит: фоторепортаж без сосисок</a>
        <a href="#">Топ-10 пакетов для сосисок — №4 удивит всех</a>
        <a href="#">Кот съел сосиску Сани и стал знаменитостью</a>
        <a href="#">Голуби прокомментировали раздачу: «Мы рядом»</a>
      </div>
    </div>
    <div class="ad">
      <div class="big">СОСИСКИН™</div>
      <p>Сосиски, которые дарят. Дари как Саня!</p>
      <p style="font-size:24px">🌭🌭🌭</p>
    </div>
    <div class="widget">
      <h3>Погода</h3>
      <div style="font-size:40px">🌤</div>
      <p style="font-weight:700">+24°C</p>
      <p style="font-size:13px;color:var(--mut)">Местами сосиски. Ветер южный, сосисочный.</p>
    </div>
  </aside>
</main>

<section class="more">
  <h2 class="sechead">ДРУГИЕ НОВОСТИ</h2>
  <div class="more-grid">
    <a class="mcard f-sepia" href="#"><img loading="lazy" src="https://raw.githubusercontent.com/OceaniaVPN/Sanya/main/sanya.png" alt=""><div class="mt">Кто такой Саня? Большое расследование ОГОНЬ·24</div></a>
    <a class="mcard f-bw" href="#"><img loading="lazy" src="https://raw.githubusercontent.com/OceaniaVPN/Sanya/main/sanya.png" alt=""><div class="mt">Пакет, который изменил всё: история полосатого героя</div></a>
    <a class="mcard f-hue" href="#"><img loading="lazy" src="https://raw.githubusercontent.com/OceaniaVPN/Sanya/main/sanya.png" alt=""><div class="mt">«Хочу как Саня»: город охватила мода на доброту</div></a>
  </div>
</section>

<section class="comments">
  <h2 class="sechead">КОММЕНТАРИИ (3)</h2>
  <div id="clist">
    <div class="comment"><div class="ava">👵</div><div><div class="cname">Мария <span class="ctime">12 минут назад</span></div><div class="ctext">Плакала. Добрая душа! Дай бог здоровья Сане и его сосискам.</div></div></div>
    <div class="comment"><div class="ava">🧔</div><div><div class="cname">Олег <span class="ctime">8 минут назад</span></div><div class="ctext">Где он берёт сосиски? Вопрос открыт. Но поступок — уважаю.</div></div></div>
    <div class="comment"><div class="ava">🐦</div><div><div class="cname">Голубь <span class="ctime">только что</span></div><div class="ctext">🌭🌭🌭</div></div></div>
  </div>
  <form class="cform" id="cform">
    <input id="cinput" placeholder="Ваш комментарий..." maxlength="300">
    <button type="submit">Отправить</button>
  </form>
</section>

<footer>
  <p><b>🔥 ОГОНЬ·24</b> · Сетевое издание «Сосиски у огня» · 0+</p>
  <p>Это пародийный новостной сайт. Все совпадения случайны, сосиски — нет.</p>
  <p>© 2026 Редакция ОГОНЬ·24. При использовании сосисок ссылка обязательна.</p>
</footer>

<button id="rainBtn">🌭 СОСИСОЧНЫЙ ДОЖДЬ</button>
<div id="lightbox"><img id="lbImg" src="" alt=""></div>

<script>
(function(){
  function pad(n){return n<10?'0'+n:n}
  function fmt(n){return n.toLocaleString('ru-RU')}
  function tickClock(){
    var d=new Date();
    document.getElementById('clock').textContent=pad(d.getHours())+':'+pad(d.getMinutes())+':'+pad(d.getSeconds());
  }
  tickClock();setInterval(tickClock,1000);
  var ds=new Date().toLocaleDateString('ru-RU',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  document.getElementById('dateNow').textContent=ds.charAt(0).toUpperCase()+ds.slice(1);

  window.addEventListener('scroll',function(){
    var h=document.documentElement;
    var p=h.scrollTop/((h.scrollHeight-h.clientHeight)||1)*100;
    document.getElementById('pbar').style.width=p+'%';
  });

  var views=132487,vEl=document.getElementById('views');
  vEl.textContent=fmt(views);
  setInterval(function(){views+=1+Math.floor(Math.random()*9);vEl.textContent=fmt(views);},1200);

  var nums=document.querySelectorAll('.num');
  function anim(el){
    var t=parseInt(el.getAttribute('data-target'),10);
    var suf=el.getAttribute('data-suffix')||'';
    var st=null;
    function step(ts){
      if(!st)st=ts;
      var p=Math.min((ts-st)/1500,1);
      var e=p*(2-p);
      el.textContent=fmt(Math.floor(t*e))+suf;
      if(p<1)requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  for(var i=0;i<nums.length;i++){anim(nums[i]);}

  var poll=[{l:'Герой года! 🏆',v:5421},{l:'Просто поделился 🤝',v:2318},{l:'Хочу сосиску 🌭',v:4107}];
  var voted=false,box=document.getElementById('pollBox');
  function renderPoll(){
    var total=0,i,html='';
    for(i=0;i<poll.length;i++)total+=poll[i].v;
    for(i=0;i<poll.length;i++){
      var pc=Math.round(poll[i].v/total*100);
      html+='<div class="poll-bar"><div class="fill" style="width:'+pc+'%">'+pc+'%</div></div><div style="font-size:12px;margin:-2px 0 8px;color:#6b6b6b">'+poll[i].l+' — '+fmt(poll[i].v)+'</div>';
    }
    html+='<div style="font-size:12px;color:#6b6b6b">Всего голосов: '+fmt(total)+' · Спасибо!</div>';
    box.innerHTML=html;
  }
  function renderButtons(){
    var html='';
    for(var i=0;i<poll.length;i++){html+='<button type="button" class="poll-opt" data-i="'+i+'">'+poll[i].l+'</button>';}
    box.innerHTML=html;
    var btns=box.querySelectorAll('.poll-opt');
    for(var j=0;j<btns.length;j++){
      btns[j].addEventListener('click',function(){
        if(voted)return;voted=true;
        poll[parseInt(this.getAttribute('data-i'),10)].v++;
        renderPoll();
      });
    }
  }
  renderButtons();

  var clist=document.getElementById('clist');
  document.getElementById('cform').addEventListener('submit',function(e){
    e.preventDefault();
    var inp=document.getElementById('cinput');
    var t=inp.value.trim();
    if(!t)return;
    var div=document.createElement('div');
    div.className='comment';
    div.innerHTML='<div class="ava">🌭</div><div><div class="cname">Вы <span class="ctime">только что</span></div><div class="ctext"></div></div>';
    div.querySelector('.ctext').textContent=t;
    clist.insertBefore(div,clist.firstChild);
    inp.value='';
  });

  var lb=document.getElementById('lightbox'),lbImg=document.getElementById('lbImg');
  var zs=document.querySelectorAll('img.zoomable');
  for(var z=0;z<zs.length;z++){
    zs[z].addEventListener('click',function(){lbImg.src=this.src;lb.style.display='flex';});
  }
  lb.addEventListener('click',function(){lb.style.display='none';});

  function drop(){
    var el=document.createElement('span');
    el.className='drop';
    el.textContent=Math.random()<0.85?'🌭':'🔥';
    el.style.left=(Math.random()*100)+'vw';
    el.style.fontSize=(16+Math.random()*30)+'px';
    el.style.animationDuration=(2.2+Math.random()*2.5)+'s';
    document.body.appendChild(el);
    el.addEventListener('animationend',function(){el.remove();});
  }
  document.getElementById('rainBtn').addEventListener('click',function(){
    for(var i=0;i<60;i++){setTimeout(drop,i*40);}
  });
})();
</script>
</body>
</html>`;

    return new Response(html, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
        'cache-control': 'no-cache',
      },
    });
  },
};
