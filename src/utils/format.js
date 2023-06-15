// 格式化日期
const date = {

    // 获取倒计时的时间差
    getCurrentDown: (val1, val2) => {
        return new Promise((resolve) => {
            val1 = val1 ? date.handleSymbol(val1) : new Date()
            val2 = val2 ? date.handleSymbol(val2) : new Date()

            let stamp1 = new Date(val1).getTime();
            let stamp2 = new Date(val2).getTime();
            let stamp = Math.abs(stamp1 - stamp2);

            if (stamp == 0) resolve(false);
            else resolve({
                stamp, ...date.getCurrentDownTime(stamp)
            })
        })
    },

    // 获取倒计时时间戳对应的天、时、分、秒
    getCurrentDownTime: (val) => {
        val = Math.floor(val / 1000)
        return {
            dates: Math.floor(val / 60 / 60 / 24),
            hours: Math.floor(val / 60 / 60) % 24,
            minutes: Math.floor(val / 60) % 60,
            seconds: val % 60
        }
    },

    // 处理ios日期兼容，修改年月日之间的连接符为/
    handleSymbol: val => val.replace(/[年月日\-\.]/g, '/'),

    // 返回具体的时间
    updateDate: (val) => {
        let _dateInfo = val ? new Date(val) : new Date();
        let year = _dateInfo.getFullYear();
        let month = date.zeroFill(_dateInfo.getMonth() + 1);
        let dates = date.zeroFill(_dateInfo.getDate());
        let hours = date.zeroFill(_dateInfo.getHours());
        let minutes = date.zeroFill(_dateInfo.getMinutes());
        let seconds = date.zeroFill(_dateInfo.getSeconds());

        return {
            year, month, dates, hours, minutes, seconds
        }
    },

    // 补零
    zeroFill: val => val < 10 ? '0' + val : val,
}

export default {
    date
}