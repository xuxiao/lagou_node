import BaseController from './baseController'

class Comment extends BaseController {
    constructor() {
        super();
        this.list = this.list.bind(this);//绑定this,否则会导致undifined
    }

    async list(req, res) {
        let aid = req.query.aid;
        let result = await this.myFetch('/comment/lists', {aid: aid});
        await res.send(result);
    };

}

export default new Comment();