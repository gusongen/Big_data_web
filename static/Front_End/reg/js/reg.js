function validate() {
    // alert('hello world2');
    id=$('input[name=id]').val();
    if ( id=== '') {
        alert('工号不能为空');
        return false;
    }
    if(id.length<3){
        alert('工号太短,至少为3位');
        return false;
    }
    else if (id.length>16) {
        alert('工号太长,至多为16位');
        return false;
    }
    if ($('input[name=pwd]').val() === '') {
        alert('密码不能为空');
        return false;
    }
    if ($('input[name=re_pwd]').val() === '') {
        alert('请再次输入密码');
        return false;
    }
    var pwd = $("input[name=pwd]").val();
    var pwd1 = $("input[name=re_pwd]").val();
    if (pwd != pwd1) {
        $("#tishi").html("两次密码不相同");
        $("#tishi").css("color", "red").css('margin-left', '10px');
        sleep(2000);
        return false;
    }
    else if(pwd.length<8){
        alert('密码太短,至少为8位');
        return false;
    }
    else if(pwd.length>16){
        alert('密码太长,至多为16位');
        return false;
    }
    else{
        $("#tishi").html("两次密码相同");
        $("#tishi").css("color", "green").css('margin-left', '10px');
        sleep(2000);
    }
    if ($('select').val() === '') {
        alert('请选择角色');
        return false;
    }
    return true;
}

function sleep(delay) {
    var start = (new Date()).getTime();
    while ((new Date()).getTime() - start < delay) {
        continue;
    }
}