const axios=require('axios');

const { create } = require('../coinModel/coinModel');
const coinModel=require('../coinModel/coinModel')

let getCoin = async function (req, res) {

    try {
        let options = {
            method: 'get',
            headers: {
                Authorization: "Bearer XXXXXXXXXX",
              },
            url: 'https://api.coincap.io/v2/assets'
           

        }

        let result = await axios(options);
        let  Data = result.data

        let Arr=[]
          
        for (let i=0;i<Data.data.length;i++){

                 const { symbol,name,marketCapUsd,priceUsd,changePercent24Hr }=Data.data[i]
                 const obg={
                             symbol:symbol,
                             name:name,
                             marketCapUsd:marketCapUsd,
                             priceUsd:priceUsd,
                             changePercent24Hr:changePercent24Hr
                         }

                   Arr.push(obg)  
                
    }

    Arr.sort((a, b) => {
        return b.changePercent24Hr - a.changePercent24Hr;
    });

    const deleteAll= await coinModel.deleteMany();

                  for(let i=0;i<Arr.length;i++){

                         const Create= await coinModel.create(Arr[i])
                       }

            
            const get= await coinModel.find().select({__v:0})


        res.status(200).send({ status:true, msg:"Create  successfully....", Data:get })
  
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getCoin=getCoin