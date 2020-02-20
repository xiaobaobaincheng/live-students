/*
 * @Descripttion: 
 * @version: 
 * @Author: big bug
 * @Date: 2020-02-20 15:00:14
 * @LastEditTime: 2020-02-20 15:21:50
 */

export default function (Vue) {

    Vue.filter('dateFormat1', function (date, format) {
        if (!date) { return; }
            date = date + '';
        if (date.length === 10) {
            date = parseInt(date) * 1000;
        } else {
            date = parseInt(date);
        }
        date = new Date(date);
        if (!format) {
            format = 'yyyy/MM/dd';
        }
        const map = {
            'M': date.getMonth() + 1, //月份
            'd': date.getDate(), //日
            'h': date.getHours(), //小时
            'm': date.getMinutes(), //分
            's': date.getSeconds(), //秒
            'q': Math.floor((date.getMonth() + 3) / 3), //季度
            'S': date.getMilliseconds() //毫秒
        };
        format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
            let v = map[t];
            if (v !== undefined) {
                if (all.length > 1) {
                v = '0' + v;
                v = v.substr(v.length - 2);
                }
                return v;
            }
            else if (t === 'y') {
                return (date.getFullYear() + '').substr(4 - all.length);
            }
            return all;
        });
        return format;
    });

    Vue.filter('dateFormat2', function (date) {
        if (!date) { return; }
            date = date + '';
        if (date.length === 10) {
            date = parseInt(date) * 1000;
        } else {
            date = parseInt(date);
        }
            date = new Date(date);
        let dateTime = '';
        let minute = 1000 * 60;
        let hour = minute * 60;
        let day = hour * 24;
        let month = day * 30;
        function pad(num, n) {
        let len = num.toString().length;
        while (len < n) {
            num = '0' + num;
            len++;
        }
        return num;
        }
        function getDateDiff(dateTimeStamp) {
        let now = new Date().getTime();
        let diffValue = now - dateTimeStamp;
        let monthC = diffValue / month;
        let weekC = diffValue / (7 * day);
        let dayC = diffValue / day;
        let hourC = diffValue / hour;
        let minC = diffValue / minute;
        let result = '刚刚';
        if (dayC >= 1) {
            result = (dateTimeStamp).getFullYear() + '/' + pad(date.getMonth() + 1, 2) + '/' + pad(date.getDate(), 2);
        }
        else if (hourC >= 1) {
            result = parseInt(hourC) + '小时前';
        }
        else if (minC >= 5) {
            result = parseInt(minC) + '分钟前';
        }
        return result;
        }
        dateTime = getDateDiff(date);
        return dateTime;
    });

}
