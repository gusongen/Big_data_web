function validate() {
    // alert('hello world2');
    id=$('input[name=id]').val();
    if ( id=== '') {
        alert('请输入工号');
        return false;
    }
    if(id.length<3||id.length>16) {
        alert('工号错误');
        return false;
    }
    if ($('input[name=pwd]').val() === '') {
        alert('请输入密码');
        return false;
    }
    var pwd = $("input[name=pwd]").val();
    if(pwd.length<8||pwd.length>16){
        alert('密码错误');
        return false;
    }
    return true;
}