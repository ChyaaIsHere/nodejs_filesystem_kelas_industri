const fs = require('node:fs');

fs.readFile(
  'biodata.txt', // nama file yang akan di baca lewat terminal 
  'utf8', 
  function(error, data) { 
    // logika ketika membaca error
    if (error) {
      console.error('Terjadi error nih saat mencoba membaca filenya...');
      console.error(error);
    }
    else {
      console.log('Isi filenya : ', data); // berhasil membaca datanya.
    }
  }
);
