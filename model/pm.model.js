const excelToJson = require('convert-excel-to-json');
const fs=require('fs');

//converting my excel file to json using npm package convert-excel-to-json
const result = excelToJson({
    source: fs.readFileSync('primeminister.xlsx'),
    header:{
      
        rows: 1 
    },
    sheets:[{
        name: 'primeministers',
        columnToKey: {
        	A: 'name',
    		B: 'born-dead',
            C:  'term of office',
            D: 'remark',
            E: 'featureimage'
        }
    
    }]
   
});
module.exports=result;