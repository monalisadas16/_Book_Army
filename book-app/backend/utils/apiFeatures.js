class APIFeatures {
    constructor(query, queryStr) { // query like Product.find()
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: 'i' //case insensitive
            }
        } : {}

        this.query = this.query.find({ ...keyword });
        return this;
    }

    filter() {

        const queryCopy = { ...this.queryStr };

        // Removing fields from the query
        const removeFields = ['keyword', 'limit', 'page']
        removeFields.forEach(el => delete queryCopy[el]);

        // Advance filter for price, ratings etc eg. prices range between two values
        let queryStr = JSON.stringify(queryCopy)
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`) //gte and lte are mongoose operator
                                    // regular expression

        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }

    pagination(resPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resPerPage * (currentPage - 1); // to skip those products in previous pages to go to the nth page

        this.query = this.query.limit(resPerPage).skip(skip);
        return this;
    }
}

module.exports = APIFeatures