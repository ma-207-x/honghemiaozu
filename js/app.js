// 首页：渲染五地卡片 + Hero 视频声音控制
(function(){
  'use strict';

  // 全局：Hero 视频静音切换（detail 页也可能用到）
  window.toggleMute = function(){
    var v = document.getElementById('heroVideo');
    if(!v) return;
    v.muted = !v.muted;
    var btn = document.getElementById('muteBtn');
    if(btn) btn.textContent = v.muted ? '🔊 开启声音' : '🔇 关闭声音';
  };

  function initCards(){
    var grid = document.getElementById('cardGrid');
    if(!grid) return;
    var html = REGIONS.map(function(r){
      // motto 例如 "看头饰"，subtitle 如 "屏边 · 尖头青纱与白衣白裙"
      var short = (r.subtitle && r.subtitle.indexOf('·')>=0) ? r.subtitle.split('·')[1].trim() : r.subtitle;
      return '<div class="region-card" data-key="'+r.key+'">'+
        '<img class="thumb" src="'+r.thumb+'" alt="'+r.name+'" onerror="this.src=\'images/over.jpg\'">'+
        '<div class="info">'+
          '<h3>'+r.name+'</h3>'+
          '<div class="sub">'+r.motto+'</div>'+
          '<p>'+short+'</p>'+
        '</div>'+
      '</div>';
    }).join('');
    grid.innerHTML = html;

    // 点击卡片进入详情页
    var cards = grid.getElementsByClassName('region-card');
    for(var i=0;i<cards.length;i++){
      cards[i].addEventListener('click', function(){
        var key = this.getAttribute('data-key');
        // 先暂停 Hero 视频再跳转，避免后台继续播放
        var v = document.getElementById('heroVideo');
        if(v) v.pause();
        location.href = 'detail.html?region='+key;
      });
    }
  }

  document.addEventListener('DOMContentLoaded', initCards);
})();
