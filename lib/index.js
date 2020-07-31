const formatSinaList = (cards = []) => {
    const list = [];
    cards.forEach(item => {
        const { mblog, card_type } = item;
        if (`${card_type}` === '9') {
            let { pics } = mblog;
            if (pics) {
                pics.forEach(pic => {
                    let { url } = pic;
                    url = url.replace(/orj360/g, 'large')
                    url=`<a target="_blank" href='${url}'>${url}</a>`
                    list.push(url);
                });

            }
        }
    });
    return list;
}

module.exports = {
    formatSinaList
};
