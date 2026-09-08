var SECRET = 'sanya2026';

var DEF_COMMENTS = [
  {n:'Мария',a:'👵',t:'Ох, бедный Егор. Держись, милый!'},
  {n:'Олег',a:'🧔',t:'Бандит — легенда. Но игрушки верни!'},
  {n:'Голубь',a:'🐦',t:'Видели, как кот тащил гирлянду. 💨'}
];

var SHITOV_NEWS = {
  id:'fictional-shitov-turkey-20260908',
  sec:'soc',
  tags:['ЭКСКЛЮЗИВ','ТУРЦИЯ'],
  t:'Шитов в Турции: отпуск вышел из-под контроля',
  lead:'Пародийная заметка редакции: обычная поездка за морем и солнцем внезапно превратилась в главный отпускной сериал ОГОНЬ·24.',
  text:'Редакция ОГОНЬ·24 получила свежий кадр из нашей полностью шуточной отпускной вселенной. На снимке главный герой выглядит так, будто ещё пять минут назад собирался спокойно отдыхать, а потом внезапно оказался участником сезона «Турция: режим приключений».\n\nПо легенде редакции, утро начиналось совершенно обычно: солнце светит, море шумит, где-то работает кондиционер, а герой уверенно заявил, что сегодня никаких приключений не планируется. Через несколько минут это заявление было официально отменено обстоятельствами.\n\nДальше события развивались по классическому отпускному сценарию. Сначала понадобилось выяснить, где находится ближайший магазин. Потом — почему карта показывает одно направление, навигатор второе, а местный кот вообще уверенно идёт в третью сторону. После этого было принято стратегическое решение: идти за котом. Редакция подчёркивает, что кот в историю добавлен исключительно ради комедии и никаких комментариев журналистам не дал.\n\nК полудню отпуск уже получил рабочее название «Операция Пляж». Главная задача дня звучала просто: дойти до моря и не превратить обычную прогулку в сюжет для вечернего выпуска. По данным нашей вымышленной редакции, задача была провалена примерно через семь минут.\n\nОсобенно впечатлил эпизод с мороженым. Герой хотел выбрать один вкус, затем второй, затем решил взять самый безопасный вариант. В итоге выбор занял столько времени, что мороженое успело стать самостоятельным участником переговоров. Чем закончилась история — неизвестно, зато редакция уверенно сообщает: настроение осталось отличным.\n\nВечером корреспондент спросил: «Ну что, как проходит отдых?» Ответ был настолько коротким, что мы приводим его полностью: «Нормально». После этого герой посмотрел в сторону моря, и редакция поняла — завтра будет продолжение.\n\nВажно: это художественная пародия ОГОНЬ·24, а описанные события являются вымышленной частью юмористической истории, а не утверждениями о реальном поведении какого-либо человека.',
  photos:['https://raw.githubusercontent.com/OceaniaVPN/Sanya/main/IMG_20260908_094905_735.jpg'],
  time:'8 сентября, сегодня'
};

export default {
  async fetch(request, env, ctx) {
    var url = new URL(request.url);
    if (url.pathname.indexOf('/api/') !== 0) {
      return env.ASSETS.fetch(request);
    }
    try {
      if (request.method === 'GET' && url.pathname === '/api/state') {
        var news = await read(env, 'news', []);
        var over = await read(env, 'over', {});
        var comments = await read(env, 'comments', null);
        var migrated = false;
        var cleaned = [];
        for (var ci = 0; ci < news.length; ci++) {
          var item = news[ci];
          var normalizedId = item && item.id ? String(item.id).replace(/[\u200B-\u200D\uFEFF]/g, '') : '';
          if (normalizedId === 'shitov-turkey-20260908') {
            var legacyId = item.id;
            item = Object.assign({}, SHITOV_NEWS, {id: legacyId});
            migrated = true;
          }
          cleaned.push(item);
        }
        news = cleaned;
        var exists = false;
        for (var ni = 0; ni < news.length; ni++) {
          if (news[ni] && news[ni].id === SHITOV_NEWS.id) { exists = true; break; }
        }
        if (!exists && !migrated) {
          news.unshift(SHITOV_NEWS);
          migrated = true;
        }
        if (migrated) await put(env, 'news', news);
        return json({ok:true, news:news, over:over, comments:comments || DEF_COMMENTS});
      }
      if (request.method === 'POST' && url.pathname === '/api/login') {
        var b1 = await request.json();
        return json({ok: !!(b1 && b1.pass === SECRET)});
      }
      if (request.method === 'POST' && url.pathname === '/api/save') {
        var b = await request.json();
        if (!b || b.pass !== SECRET) return json({ok:false, err:'Неверный пароль'}, 403);
        if (b.action === 'add') {
          var arr = await read(env, 'news', []);
          arr.unshift(b.item);
          await put(env, 'news', arr);
        } else if (b.action === 'edit') {
          if (b.def) {
            var over2 = await read(env, 'over', {});
            over2[b.id] = b.item;
            await put(env, 'over', over2);
          } else {
            var arr2 = await read(env, 'news', []);
            for (var i = 0; i < arr2.length; i++) {
              if (arr2[i].id === b.id) { arr2[i] = b.item; break; }
            }
            await put(env, 'news', arr2);
          }
        } else if (b.action === 'del') {
          var arr3 = await read(env, 'news', []);
          var na = [];
          for (var j = 0; j < arr3.length; j++) if (arr3[j].id !== b.id) na.push(arr3[j]);
          await put(env, 'news', na);
        }
        return json({ok:true, news:await read(env,'news',[]), over:await read(env,'over',{})});
      }
      if (request.method === 'POST' && url.pathname === '/api/comment') {
        var b2 = await request.json();
        var t = ((b2 && b2.text) || '').trim().slice(0, 300);
        if (!t) return json({ok:false});
        var carr = await read(env, 'comments', null) || DEF_COMMENTS.slice();
        carr.unshift({n:'Вы', a:'🎤', t:t, time:'только что'});
        await put(env, 'comments', carr);
        return json({ok:true, comments:carr});
      }
      return json({ok:false}, 404);
    } catch (e) {
      return json({ok:false, err:String(e)}, 500);
    }
  },
};

async function ensure(env) {
  await env.DB.prepare('CREATE TABLE IF NOT EXISTS store (key TEXT PRIMARY KEY, value TEXT)').run();
}
async function read(env, key, def) {
  try {
    await ensure(env);
    var row = await env.DB.prepare('SELECT value FROM store WHERE key = ?1').bind(key).first();
    return row ? JSON.parse(row.value) : def;
  } catch (e) { return def; }
}
async function put(env, key, val) {
  await ensure(env);
  await env.DB.prepare('INSERT INTO store (key, value) VALUES (?1, ?2) ON CONFLICT(key) DO UPDATE SET value = ?2').bind(key, JSON.stringify(val)).run();
}
function json(o, code) {
  return new Response(JSON.stringify(o), {
    status: code || 200,
    headers: {'content-type':'application/json', 'cache-control':'no-store'},
  });
}
