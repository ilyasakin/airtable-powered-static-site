require('dotenv').config({
  path: `${__dirname}/../../.env.development`,
});

var fs = require('fs');
var Airtable = require('airtable');

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_APIKEY,
});

var base = Airtable.base(process.env.AIRTABLE_BASEID);

var tables = [];

console.log('Getting tables from Airtable');

base('Pages')
  .select({
    view: 'Grid view',
  })
  .eachPage(
    function page(records, fetchNextPage) {
      records.forEach(function (record) {
        console.log('Retrieved', record.get('Name'));
        tables.push({
          baseId: process.env.AIRTABLE_BASEID,
          tableName: record.get('Name'),
          tableView: 'Grid view',
        });
      });
      fetchNextPage();
    },
    function done(err) {
      if (err) {
        console.error(err);
        return;
      }
      try {
        fs.writeFileSync(`${__dirname}/../../tables.json`, JSON.stringify(tables, null, 4));
        console.log('Got tables successfuly.');
      } catch (error) {
        console.error('Error while writing to tables.json:', error);
      }
    },
  );
