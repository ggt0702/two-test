class addEvent {
    constructor() {
        // 获取箭头图片
        this.$jt = $('.jt');
        // 初始化页面
        this.init();
    }
    init() {
        $(function() {
            var lis = $('.list li');
            for (var i = 0; i < lis.length; i++) {
                lis.eq(i).css('backgroundImage', 'url(img/' + (i + 11) + '.jpg)');
            }
            lis.mouseenter(function() {
                $(this).stop().animate({ width: 700 }).siblings().stop().animate({ width: 0 })
            }).mouseleave(function() {
                lis.stop().animate({ width: 158 })
            })
        })
        this.$jt.hover(function() {
            $(this).animate({ rotate: 0 });
        }, function() {
            $(this).animate({ rotate: 50 });
        })
    }
}
new addEvent();