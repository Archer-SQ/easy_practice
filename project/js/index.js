$(function() {
    // 跳转到分类页面
    function jump() {
        $('#toCategory').on('click', () => {
            location.href = './html/classCategory.html';
        });
    }
    // 调用ajax请求数据
    function getCategory() {
        $.ajax({
            type: "GET",
            url: "http://127.0.0.1:3001/getAllCourse",
            success: function(res) {
                var htmlStr = template('tp-classContent', res.result);
                console.log(res.result);
                $('.classContent').html(htmlStr);
            }
        });
    }
    jump();
    getCategory();
})