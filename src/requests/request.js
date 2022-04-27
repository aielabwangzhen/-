import intefUrl from "./interface"
import http from './http'
/* *接口数据的统一调用* */
export default {
    /***    获取通用内容    ***/
    // 获取国家/氏族
    getState() {
    },
    // 获取行政区域
    getRegion(params) {
        return http.post(intefUrl.yearUrl, params);
    },
    // 获取文化分区     
    getCulture(params) {
        return http.get(intefUrl.nameUrl, params);
    },
    getTableList(params){
        return http.get(intefUrl.yearUrl+'/test',params)
    }
    
    
}
