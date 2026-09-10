// 详情页：顶部地区视频 + 环绕布局（图片居中 + 文字卡片分布在左右）+ 热点 + 弹窗
(function(){
  'use strict';

  // 部件卡片在左右两列的分布：左侧 2 个，右侧其余（动态适配各地区不同 key）
  var LEFT_KEYS = ['head','top'];

  function getQuery(key){
    var s = location.search.replace(/^\?/,'');
    var parts = s.split('&');
    for(var i=0;i<parts.length;i++){
      var kv = parts[i].split('=');
      if(decodeURIComponent(kv[0])===key) return decodeURIComponent((kv[1]||'').replace(/\+/g,' '));
    }
    return '';
  }

  function navLinks(){
    var box = document.getElementById('navLinks');
    if(!box) return;
    box.innerHTML = REGIONS.map(function(r){
      return '<a href="detail.html?region='+r.key+'">'+r.name+'</a>';
    }).join('');
  }

  function partCard(key, p){
    return '<div class="part-card" data-part="'+key+'">'+
      '<span class="ptag">'+(p.sub||key)+'</span>'+
      '<h4>'+p.name+'</h4>'+
      '<p>'+(p.desc ? stripHtml(p.desc).substring(0,36)+'…' : '')+'</p>'+
    '</div>';
  }

  function stripHtml(html){
    var tmp = document.createElement('div');
    tmp.innerHTML = html || '';
    return (tmp.textContent || tmp.innerText || '').trim();
  }

  // 判断某 key 应放在左列还是右列
  function isLeft(key){ return LEFT_KEYS.indexOf(key) >= 0; }

  function render(region){
    var root = document.getElementById('detailRoot');
    if(!region){
      root.innerHTML = '<div class="detail-loading">未找到该地区数据。<br><a href="index.html">返回首页</a></div>';
      return;
    }
    var ps = region.parts;
    var keys = Object.keys(ps);
    var leftCards = keys.filter(isLeft).map(function(k){return partCard(k,ps[k]);}).join('');
    var rightCards = keys.filter(function(k){return !isLeft(k);}).map(function(k){return partCard(k,ps[k]);}).join('');

    var hotspots = region.hotspots.map(function(h){
      return '<button class="hotspot" style="left:'+h.left+'%;top:'+h.top+'%" data-part="'+h.part+'" title="'+ (ps[h.part]?ps[h.part].name:'')+'">+</button>';
    }).join('');

    var videoHtml = region.video ? (
      '<video controls preload="metadata" poster="images/placeholder.svg">'+
        '<source src="'+region.video+'" type="video/mp4">'+
      '</video>'
    ) : (
      '<div class="noflow">🎬 放入 '+region.video+' 即可展示 '+region.name+' 短视频</div>'
    );

    root.innerHTML =
      // ① 顶部地区切换器（左右箭头 + 下拉，无需回首页即可浏览全部地区）
      '<div class="region-switcher">'+
        '<button class="sw-btn" onclick="navigateRegion(-1)" title="上一个地区">‹</button>'+
        '<div class="sw-center">'+
          '<span class="sw-name">'+region.name+'</span>'+
          '<span class="sw-sub">'+region.motto+'</span>'+
        '</div>'+
        '<button class="sw-btn" onclick="navigateRegion(1)" title="下一个地区">›</button>'+
        '<select id="regionSelect" class="sw-select" onchange="changeRegion(this)">'+
          REGIONS.map(function(r){return '<option value="'+r.key+'">'+r.name+' · '+r.motto+'</option>';}).join('')+
        '</select>'+
      '</div>'+
      // ② 顶部地区短视频
      '<div class="region-video-frame">'+
        '<span class="vlabel">🎬 '+region.name+' · 服饰短片</span>'+
        videoHtml+
      '</div>'+
      // ② 环绕区：左文 / 中图 / 右文
      '<div class="surround">'+
        '<div class="col-left">'+leftCards+'</div>'+
        '<div class="center">'+
          '<img id="avatarImg" src="'+region.avatar+'" alt="'+region.name+' 虚拟形象" onerror="this.src=\'images/placeholder.svg\'">'+
          hotspots+
        '</div>'+
        '<div class="col-right">'+rightCards+'</div>'+
      '</div>'+
      // ③ 地区文字介绍
      '<div class="section-head region-intro" style="margin-top:20px">'+
        '<h2 style="color:var(--brown)">'+region.name+'</h2>'+
        '<p class="subtitle" style="color:var(--gold)">'+region.subtitle+'</p>'+
        '<p class="desc">'+region.desc+'</p>'+
      '</div>';

    bindInteractions(region);
  }

  // 绑定：卡片 + 热点 点击 → 弹窗；卡片 hover → 联动对应热点高亮
  function bindInteractions(region){
    var center = document.querySelector('.surround .center');
    var img = document.getElementById('avatarImg');

    function highlight(key, on){
      // 高亮卡片
      var cards = document.getElementsByClassName('part-card');
      for(var i=0;i<cards.length;i++){ cards[i].classList.remove('active'); }
      var card = document.querySelector('.part-card[data-part="'+key+'"]');
      if(card && on) card.classList.add('active');
      // 联动对应热点放大
      var spot = document.querySelector('.hotspot[data-part="'+key+'"]');
      if(spot){ spot.style.transform = on ? 'translate(-50%,-50%) scale(1.4)' : 'translate(-50%,-50%) scale(1)'; }
    }

    var cards = document.getElementsByClassName('part-card');
    for(var i=0;i<cards.length;i++){
      (function(card){
        card.addEventListener('click', function(){ openPart(region, card.getAttribute('data-part')); });
        card.addEventListener('mouseenter', function(){ highlight(card.getAttribute('data-part'), true); });
        card.addEventListener('mouseleave', function(){ highlight(card.getAttribute('data-part'), false); });
      })(cards[i]);
    }
    var spots = document.getElementsByClassName('hotspot');
    for(var j=0;j<spots.length;j++){
      (function(spot){
        spot.addEventListener('click', function(){ openPart(region, spot.getAttribute('data-part')); });
        spot.addEventListener('mouseenter', function(){ highlight(spot.getAttribute('data-part'), true); });
        spot.addEventListener('mouseleave', function(){ highlight(spot.getAttribute('data-part'), false); });
      })(spots[j]);
    }
  }

  function openPart(region, key){
    var p = region.parts[key];
    if(!p) return;
    document.getElementById('modalTag').textContent = p.sub || key;
    document.getElementById('modalImg').src = p.img;
    document.getElementById('modalImg').onerror = function(){this.src='images/placeholder.svg';};
    document.getElementById('modalTitle').textContent = p.name;
    document.getElementById('modalSub').textContent = p.sub || '';
    document.getElementById('modalDesc').innerHTML = p.desc || '<p>暂无详细介绍。</p>';
    document.getElementById('modal').hidden = false;
    // 高亮对应卡片
    var cards = document.getElementsByClassName('part-card');
    for(var i=0;i<cards.length;i++){ cards[i].classList.remove('active'); }
    var active = document.querySelector('.part-card[data-part="'+key+'"]');
    if(active) active.classList.add('active');
  }

  window.closeModal = function(){
    document.getElementById('modal').hidden = true;
  };
  // 点击弹窗外部遮罩关闭
  document.addEventListener('click', function(e){
    var modal = document.getElementById('modal');
    if(modal && !modal.hidden && e.target === modal){ closeModal(); }
  });
  document.addEventListener('keydown', function(e){
    if(e.key==='Escape') closeModal();
  });

  document.addEventListener('DOMContentLoaded', function(){
    navLinks();
    var key = getQuery('region') || REGIONS[0].key;
    renderByKey(key);
  });

  // 根据 key 渲染，供切换器复用
  function renderByKey(key){
    var region = REGIONS.filter(function(r){return r.key===key;})[0];
    if(region){
      history.replaceState(null,'','detail.html?region='+key);
      document.title = region.name+' · 红河苗族服饰';
    }
    render(region);
    var links = document.getElementById('navLinks').getElementsByTagName('a');
    for(var i=0;i<links.length;i++){
      var href = links[i].getAttribute('href')||'';
      if(href==='detail.html?region='+key){ links[i].classList.add('active'); }
      else { links[i].classList.remove('active'); }
    }
    var sel = document.getElementById('regionSelect');
    if(sel) sel.value = key;
    window.scrollTo({top:0,behavior:'smooth'});
  }

  window.changeRegion = function(select){ renderByKey(select.value); };
  window.navigateRegion = function(dir){
    var key = getQuery('region') || REGIONS[0].key;
    var idx = REGIONS.map(function(r){return r.key;}).indexOf(key);
    var next = (idx + dir + REGIONS.length) % REGIONS.length;
    renderByKey(REGIONS[next].key);
  };
})();
