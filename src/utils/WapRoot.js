(function (doc,win) {
    var docEl=doc.documentElement,
      resizeEvt='orientationchange' in window?'orientationchange':'resize',
      recalc=function () {
        var clientWidth=docEl.clientWidth;
        clientWidth = 375;
        if (!clientWidth)return;
        if (clientWidth > 375) {
          clientWidth = 375
        }
        docEl.style.fontSize=10*(clientWidth/375)+'px';
      };
    if (!doc.addEventListener)return;
    win.addEventListener(resizeEvt,recalc,false);
    doc.addEventListener('DOMContentLoaded',recalc,false);
  })(document,window);
  