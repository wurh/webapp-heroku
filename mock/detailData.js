/**
 * 获取详情页mock数据
 */
import listData from "./list"
export default {
    getDetailById(id){
        let items = listData.items;
        let res;
        for(let i = 0; i<items.length; i++){
            if(id === items[i].productId){
                res = items[i];
            }
        }
        return res;
    }
}