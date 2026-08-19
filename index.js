var SECRET = 'sanya2026';

var DEF_COMMENTS = [
  {n:'Мария',a:'👵',t:'Ох, бедный Егор. Держись, милый!'},
  {n:'Олег',a:'🧔',t:'Бандит — легенда. Но игрушки верни!'},
  {n:'Голубь',a:'🐦',t:'Видели, как кот тащил гирлянду. 💨'}
];

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
