export default {
  /*设置cookie*/
  setCookie(name, value, iDay) {
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + iDay);
    document.cookie = name + '=' + value + ';expires=' + oDate;
  },
  /*使用方法：setCookie('user', 'simon', 11);*/
  /*获取cookie*/
  getCookie(name) {
    var arr=document.cookie.split('; ');
    for(var i=0;i<arr.length; i++){ 
    var arr2=arr[i].split('=');
    if(arr2[0] == name ){return arr2[1];}
    }
    return '';
  },
  /*使用方法：getCookie('user')*/
  /*删除cookie*/
  removeCookie(name) {
    setCookie(name, 1, -1); //-1就是告诉系统已经过期，系统就会立刻去删除cookie
  }
  /*使用方法：removeCookie('user')*/
}
