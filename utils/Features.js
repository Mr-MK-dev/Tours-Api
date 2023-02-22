
class Features {
    constructor(reqQuery) {
        this.reqQuery = reqQuery
    }
    // Deep copy
    cloningQuery(reqQuery) {
        const reqClone = { ...reqQuery }
        const filters = ['sort', 'fileds', 'limit', 'page', 'filters', 'attributes']
        filters.forEach(x => { delete reqClone[x] })
        console.log(`*****************`);
        console.log('DUdd', reqClone);
        return reqClone
    }

    // pagination(vlimit, voffset) {
    //     const this.reqQuery.limit = this.reqQuery.limit || 3
    //     const offset = limit * this.reqQuery.offset || 0

    // }

    attributes() {

    }
    print(res) {

    }


}
module.exports = {
    Features
}