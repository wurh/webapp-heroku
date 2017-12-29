/**
 * 本地存储封装
 */
const ms = 'mystore';
export default {
  set: function (storage,key, value) {
    //存储
    let mydata = storage.getItem(ms);
    if (!mydata) {
      this.init(storage);
      mydata = storage.getItem(ms);
    }
    mydata = JSON.parse(mydata);
    mydata.data[key] = value;
    storage.setItem(ms, JSON.stringify(mydata));
    return mydata.data;

  },
  get: function (storage,key) {
    //读取
    let mydata = storage.getItem(ms);
    if (!mydata) {
      return false;
    }
    mydata = JSON.parse(mydata);
    return mydata.data[key];
  },
  remove: function (storage,key) {
    //读取
    let mydata = storage.getItem(ms);
    if (!mydata) {
      return false;
    }
    mydata = JSON.parse(mydata);
    delete mydata.data[key];
    storage.setItem(ms, JSON.stringify(mydata));
    return mydata.data;
  },
  clear: function (storage,) {
    //清除对象
    storage.removeItem(ms);
  },
  init: function (storage,) {
    storage.setItem(ms, '{"data":{}}');
  },
}
