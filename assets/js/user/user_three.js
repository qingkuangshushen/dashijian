$(function () {
    var form = layui.form;
    // 设置名字长度
    form.verify({
        passwordss: [
            /^[\S]{6,12}$/
            ,'密码必须6到12位，且不能出现空格'
          ],newspwd: function (value){
            if(value === $('[name=oldpwd]').val()){
                return '新旧密码不能相同'
            }
        },
        newspwds:  function (value){$(function() {
            var form = layui.form
          
            form.verify({
              pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
              samePwd: function(value) {
                if (value === $('[name=oldPwd]').val()) {
                  return '新旧密码不能相同！'
                }
              },
              rePwd: function(value) {
                if (value !== $('[name=newPwd]').val()) {
                  return '两次密码不一致！'
                }
              }
            })
          
            $('.layui-form').on('submit', function(e) {
              e.preventDefault()
              $.ajax({
                method: 'POST',
                url: '/my/updatepwd',
                data: $(this).serialize(),
                success: function(res) {
                  if (res.status !== 0) {
                    return layui.layer.msg('更新密码失败！')
                  }
                  layui.layer.msg('更新密码成功！')
                  // 重置表单
                  $('.layui-form')[0].reset()
                }
              })
            })
          })
          
            if(value !== $('[name=newpwd]').val()){
                return '确认密码错误'
            }
        }
    });

    //重置密码
    $('.layui-form').on('submit',function(e){
        e.preventDefault();
        $.ajax({
            method: 'POST',
            url: '/my/updatepwd',
            data: $(this).serialize(),
            success: function(res){
                if(res.status !== 0)return layer.msg('重置密码失败！');
                layer.msg(res.message);
               window.parent.location.href = "/login.html";
            }
        })
    })
})
