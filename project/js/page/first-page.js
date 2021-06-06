$(function() {
    function categoryPro() {
        $.ajax({
            type: "GET",
            url: "http://127.0.0.1:3001/getAllCourse",
            success: function(res) {
                // 遍历对象方法一
                // Object.keys(res.result.data).forEach((index) => {
                //     res.result.data[index].name = res.result.data[index].name.substr(4);
                //     // console.log(res.result.data[index].name);
                // })
                // 方法二
                // for (var i = 0; i < res.result.data.length; i++) {
                //     res.result.data[i].name = res.result.data[i].name.substr(4);
                //     console.log(res.result.data[i].name);
                // }
                // 方法三
                for (var index in res.result.data) {
                    res.result.data[index].name = res.result.data[index].name.replace('【前端】', '');
                    console.log(res.result.data[index].name);
                }
                var htmlStr = template('tp-categoryPro', res.result);
                $('.categoryPro').html(htmlStr);
            }
        });
    }
    categoryPro();
})