// 代码块收缩

$(function () {
    var $code_expand = $('<i class="fas fa-angle-up code-expand" aria-hidden="true"></i>');

    $('.code-area').prepend($code_expand);

    $('.code-expand').on('click', function () {
      var $wrap = $(this).closest('.code-area');
      $wrap.toggleClass('code-closed');
      $(this).toggleClass('fa-angle-up fa-angle-down');
    });


});

