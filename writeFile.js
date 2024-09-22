const fs = require('node:fs');

fs.writeFile(
  'biodata.txt', // nama file yang akan dibuat
  'Halo! Perkenalkan saya Rivaldo Cahya Saputra!\n' + // bagian isi filenya
  'Saya dari kelas XI TJKT 1 dan saya bersekolah di SMKN 15 Kota Bekasi.\n' +
  'Rumah saya ada di Villa Padurenan Indah 3, BLOK D No. 5.\n' +
  'Dan saya berumur 17 tahun sekarang.',

  // logika ketika error
  function(error) {
    if (error) {
      console.error('Terjadi Error ', error);
    }
    else {
      console.log('File bisa dibuat nih! Dan, filenya sudah berhasil dibuat!');
    }
  }
);
