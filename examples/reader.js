'use strict';
const parquet = require('..');

async function example() {
  let reader = await parquet.ParquetReader.openFile("/home/frknlke/Desktop/parquet-js/examples/original.parquet");

  let cursor = reader.getCursor();
  let record = null;
  while (record = await cursor.next()) {
    console.log(record);
  }

  reader.close();
}

example();

