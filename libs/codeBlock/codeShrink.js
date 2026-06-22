// 代码块收缩

$(function () {
    var collapseThreshold = 360;

    $('.code-area').each(function () {
      var $wrap = $(this);
      var pre = $wrap.children('pre')[0];

      if (!pre || pre.scrollHeight <= collapseThreshold) {
        return;
      }

      var $toggle = $('<button type="button" class="code-expand" title="展开代码" aria-label="展开代码" aria-expanded="false"><i class="fas fa-angle-down" aria-hidden="true"></i></button>');
      $wrap.addClass('code-collapsible code-closed').prepend($toggle);

      $toggle.on('click', function () {
        var isClosed = $wrap.toggleClass('code-closed').hasClass('code-closed');
        $(this)
          .attr('aria-expanded', String(!isClosed))
          .attr('aria-label', isClosed ? '展开代码' : '收起代码')
          .attr('title', isClosed ? '展开代码' : '收起代码')
          .find('i')
          .toggleClass('fa-angle-down', isClosed)
          .toggleClass('fa-angle-up', !isClosed);
      });
    });
});

