const request = require('./request');
const { formatSinaList } = require('./index')
const { saveFile } = require('./saveFile')

class Sina {
    async getSuper({ containerid, since_id }) {
        let params = {
            containerid, since_id
        }
        try {
            let url = 'https://m.weibo.cn/api/container/getIndex'
            let searchParams = new URLSearchParams(params);
            url += `?${searchParams.toString()}`;

            let res = await request({ url })
            let { ok, data } = res
            if (ok && data) {
                let { cardlistInfo, cards } = data
                let { since_id } = cardlistInfo
                console.log(since_id);
                if (!since_id) return Promise.reject(new Error('since_id'))
                Object.assign(params, { since_id })
                let list = formatSinaList(cards)
                saveFile(`${containerid}.html`, list)
                await this.getSuper(params)
            }
        } catch (error) {
            if (!error) return
            let { message } = error
            console.log(message);
            if (message !== 'since_id') {
                await this.getSuper(params)
            } else {
                console.log('结束');
            }
        }
    }
    async getUser({ })
    getSuperList({ containerid }) {
        this.getSuper({ containerid })
    }
}

module.exports = Sina