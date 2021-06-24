
const db = require("../utils/db");
const dataModel = require("../models/data");
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

exports.getData = async (req, res, next) => {
//   const { serial, firstRange, secondRange } = req.body;
//   const schema = Joi.object().keys({
//     serial: Joi.string().required(),
//     firstRange: Joi.string().required(),
//     secondRange: Joi.string().required(),
//   });

  try {
    // -> Read Excel File to Json Data
    const excelData = excelToJson({
        sourceFile: 'liste des station de vaccination et lieux de stockage provincial pour toutes les régions.xlsx',
        sheets:[{
            name: 'Liste SV et lieux de stockage',
            header:{
                rows: 1
            },
            columnToKey: {
                B: "region",
                C: "province",
                D: "lieu",
                E: "centre",
                F: "emei",
                G: "type",
                H: "map"
            }
        }]
    });
    // console.dir(excelData, {'maxArrayLength': 3})
    // const data = dataModel(excelData);

    // data.save();
    let dataObj = {};
    dataObj.table = [];
    excelData["Liste SV et lieux de stockage"].map(el => {
        if (el.region === "Marrakech-Safi"){
            dataObj.table.push(el);
        }
    })
    // res.json(dataArr);
    fs.writeFile('data.json', JSON.stringify(dataObj, null, 2), (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
    });
  } catch (err) {
    next(err);
  }
};