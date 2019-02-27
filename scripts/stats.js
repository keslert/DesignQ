const csv = require('csvtojson')
const fs = require('fs');
const csvFilePath = './canva-flyers.csv'
const file = 'font-size-relations'

const rows = await csv().fromFile(csvFilePath);



const metrics = ['Size', 'Lines', 'Width', 'Height']
const types = ['d','s', 'b', 'h', 'p']

const header = [
  'id',
  ...types.map(t => t + 'Size'),
  ...types.map(t => t + 'Lines'),
  ...types.map(t => t + 'Width'),
  ...types.map(t => t + 'Height'),
]



const outputRows = rows.map(row => {
  const dSize = row['Dominant Size'],
  const sSize = row['Small Size'],
  const bSize = row['Bridge Size'],
  const hSize = row['Heading Size'],
  const pSize = row['Paragraph Size'],

  return [
    row["id"],
    dSize,
    sSize,
    bSize,
    hSize,
    pSize,
  ].join(',')

})

fs.writeFile(`./output/${file}.csv`, outputRows.join('\n'), 'utf8');
console.log('success');