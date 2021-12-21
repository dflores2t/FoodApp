const { Diet } = require('../db');

const axios = require('axios');

const { dietUrl,data } = require('../routes/helpers');

const getDiets = async (req, res, next) => {
    try {
        // let promises = data.map(element => {
        //     return Diet.findOrCreate({
        //         where:{name:element.name}
        //     })
        // })
        // // const result = await Promise.all(promises);
        // // console.log(result);
        // res.json(result);

        let dbDiets = data.map(element => { return { name: element.name } });
        Diet.findOrCreate(dbDiets);
        res.json(dbDiets);
    } catch (error) {
        next(error)
    }
    // try {
    //     const getData = await axios.get(getDiet);

    //     let promises = getData.data.results.map(element => {
    //         return Diet.findOrCreate({
    //             where:{name:element.name}
    //         })
    //     })
    //     const result = await Promise.all(promises);
    //     res.json(result);
    // } catch (error) {
    //     next(error);
    // }
}

module.exports = getDiets;