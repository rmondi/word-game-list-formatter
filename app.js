require('dotenv').config();
const fs = require( 'node:fs' );

try {
  const data = fs.readFileSync( process.env.INPUT_FILE, 'utf8' );
  
  const words = [];

  data.split( /\r?\n/ ).forEach( word => {

    const formatWord = word.normalize( "NFD" ).replace( /[\u0300-\u036f]/g, '' ).toUpperCase();

    words.push( formatWord );
  } );

  json = { words };

  const jsonData = JSON.stringify( json, null, 2 );

  fs.writeFileSync( process.env.OUTPUT_FILE, jsonData, "utf8", ( error, data ) => {
    if ( error ) console.error( error );
    else ( console.log( "Data written to file !" ) )
  } );

} catch ( error ) {
  console.error( error );
}