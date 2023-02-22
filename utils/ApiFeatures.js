function apiFeatures(queryClone, query) {


    // returned queries filter some words 
    //  limit & page
    // delete from req.query selected queries
    const fileds = ['page', 'limit', 'sort', 'fileds']
    fileds.forEach(ele => delete queryClone[ele])

    // /DeepCopy --> To change in the reference not in the origin


    // page contans 3 users 
    // page 1 -- 3users 
    // page 2 -- 3 ==> user no 6
    const limit = query.limit * 1 || 3
        , page = limit * query.page || 0
        , sFileds = query.fileds




    //Fileds
    const selectedFiled = sFileds.split(',')




    // Find By query ...
    const queryStr = JSON.stringify(queryClone)

    const reqQuery = queryStr.replace(/\b(gt|lt|gte|lte)\b/g, match => `$${match}`)
    const parsedQuery = JSON.parse(reqQuery)


    const filters = { where: parsedQuery, limit, offset: page, attributes: selectedFiled }


    if (query.sort) Object.assign(filters, { order: [query.sort] })
    console.log(filters);
    return filters


}



class JsonData {
    constructor(res, data, reqQuery, reqQueryClone) {
        this.res = res
        this.data = data
        this.reqQuery = reqQuery
        this.reqQueryClone = reqQueryClone
    }



    showData() {
        console.log(filters);
        console.log("Showing data");
        this.res.json({
            data: this.data
        })
    }

    filter() {
        const fileds = ['page', 'limit', 'sort', 'fileds']
        fileds.forEach(el => delete this.reqQuery[el])
        console.log(fileds);
        return fileds

    }



}

module.exports = { apiFeatures, JsonData }
