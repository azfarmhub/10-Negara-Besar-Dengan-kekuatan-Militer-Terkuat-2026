// GFP 2026: ranking dari countries-listing.php, statistik dari halaman negara,
// dan jumlah pesawat dari aircraft-total.php.
const NEGARA = [
    { slug: 'amerika-serikat', nama: 'Amerika Serikat', rank: 1, idx: '0.0741', tren: 'stabil', video: 'Amerika.mp4', gfp: 'united-states-of-america',
      profil: 'Amerika Serikat memiliki Angkatan Darat, Angkatan Laut, Korps Marinir, Angkatan Udara, dan Angkatan Antariksa. Kapabilitasnya mencakup operasi lintas kawasan, armada laut besar, serta kemampuan pertahanan strategis.',
      stat: {
        'Personel': [['Personel aktif', 1333030], ['Cadangan', 799500], ['Paramiliter', 0], ['Total personel militer', 2132530]],
        'Kekuatan udara': [['Total pesawat', 13032], ['Pesawat tempur', 1791], ['Pesawat serang', 926], ['Pesawat angkut', 917], ['Pesawat latih', 2610], ['Misi khusus', 611], ['Pesawat tanker', 610], ['Helikopter', 5913], ['Helikopter serang', 1024]],
        'Kekuatan darat': [['Tank', 4666], ['Kendaraan lapis baja', 409660], ['Artileri swagerak', 1521], ['Artileri tarik', 1878], ['Peluncur roket (MLRS)', 1731]],
        'Kekuatan laut': [['Total aset', 465], ['Kapal induk', 11], ['Kapal induk helikopter', 9], ['Kapal perusak', 83], ['Fregat', 0], ['Korvet', 27], ['Kapal selam', 66], ['Kapal patroli', 0], ['Perang ranjau', 4]]
      } },
    { slug: 'rusia', nama: 'Rusia', rank: 2, idx: '0.0791', tren: 'stabil', video: 'Russia.mp4', gfp: 'russia',
      profil: 'Angkatan bersenjata Rusia terdiri dari unsur darat, laut, dan kedirgantaraan, dengan kekuatan strategis sebagai bagian penting dari postur pertahanannya. Wilayah yang luas membuat pertahanan udara dan logistik menjadi unsur utama.',
      stat: {
        'Personel': [['Personel aktif', 1320000], ['Cadangan', 2000000], ['Paramiliter', 250000], ['Total personel militer', 3570000]],
        'Kekuatan udara': [['Total pesawat', 4237], ['Pesawat tempur', 861], ['Pesawat serang', 698], ['Pesawat angkut', 458], ['Pesawat latih', 530], ['Misi khusus', 137], ['Pesawat tanker', 18], ['Helikopter', 1643], ['Helikopter serang', 556]],
        'Kekuatan darat': [['Tank', 5630], ['Kendaraan lapis baja', 126512], ['Artileri swagerak', 3603], ['Artileri tarik', 5920], ['Peluncur roket (MLRS)', 2486]],
        'Kekuatan laut': [['Total aset', 747], ['Kapal induk', 1], ['Kapal induk helikopter', 0], ['Kapal perusak', 13], ['Fregat', 12], ['Korvet', 79], ['Kapal selam', 66], ['Kapal patroli', 70], ['Perang ranjau', 45]]
      } },
    { slug: 'china', nama: 'China', rank: 3, idx: '0.0919', tren: 'stabil', video: 'China.mp4', gfp: 'china',
      profil: 'Tentara Pembebasan Rakyat China mencakup kekuatan darat, laut, udara, roket, dan dukungan strategis. Modernisasi berfokus pada kemampuan gabungan, pertahanan wilayah, serta operasi maritim.',
      stat: {
        'Personel': [['Personel aktif', 2035000], ['Cadangan', 510000], ['Paramiliter', 625000], ['Total personel militer', 3170000]],
        'Kekuatan udara': [['Total pesawat', 3529], ['Pesawat tempur', 1443], ['Pesawat serang', 371], ['Pesawat angkut', 287], ['Pesawat latih', 401], ['Misi khusus', 105], ['Pesawat tanker', 9], ['Helikopter', 1007], ['Helikopter serang', 281]],
        'Kekuatan darat': [['Tank', 5870], ['Kendaraan lapis baja', 152040], ['Artileri swagerak', 2940], ['Artileri tarik', 1400], ['Peluncur roket (MLRS)', 2770]],
        'Kekuatan laut': [['Total aset', 841], ['Kapal induk', 3], ['Kapal induk helikopter', 4], ['Kapal perusak', 53], ['Fregat', 46], ['Korvet', 50], ['Kapal selam', 61], ['Kapal patroli', 150], ['Perang ranjau', 36]]
      } },
    { slug: 'india', nama: 'India', rank: 4, idx: '0.1346', tren: 'stabil', video: 'India.mp4', gfp: 'india',
      profil: 'Angkatan bersenjata India terdiri dari Angkatan Darat, Angkatan Laut, dan Angkatan Udara. Prioritas pertahanannya mencakup perbatasan darat yang panjang, kawasan Samudra Hindia, dan pengembangan industri pertahanan dalam negeri.',
      stat: {
        'Personel': [['Personel aktif', 1431000], ['Cadangan', 1000000], ['Paramiliter', 2527000], ['Total personel militer', 4958000]],
        'Kekuatan udara': [['Total pesawat', 2183], ['Pesawat tempur', 476], ['Pesawat serang', 124], ['Pesawat angkut', 277], ['Pesawat latih', 334], ['Misi khusus', 72], ['Pesawat tanker', 6], ['Helikopter', 594], ['Helikopter serang', 79]],
        'Kekuatan darat': [['Tank', 3913], ['Kendaraan lapis baja', 163554], ['Artileri swagerak', 100], ['Artileri tarik', 5640], ['Peluncur roket (MLRS)', 300]],
        'Kekuatan laut': [['Total aset', 343], ['Kapal induk', 2], ['Kapal induk helikopter', 0], ['Kapal perusak', 13], ['Fregat', 18], ['Korvet', 21], ['Kapal selam', 18], ['Kapal patroli', 146], ['Perang ranjau', 0]]
      } },
    { slug: 'korea-selatan', nama: 'Korea Selatan', rank: 5, idx: '0.1642', tren: 'stabil', video: 'Korea Selatan.mp4', gfp: 'south-korea',
      profil: 'Angkatan Bersenjata Republik Korea mencakup Angkatan Darat, Angkatan Laut, Korps Marinir, dan Angkatan Udara. Kesiapan menghadapi ancaman di Semenanjung Korea dan kerja sama pertahanan dengan Amerika Serikat menjadi fokus utama.',
      stat: {
        'Personel': [['Personel aktif', 450000], ['Cadangan', 3100000], ['Paramiliter', 120000], ['Total personel militer', 3670000]],
        'Kekuatan udara': [['Total pesawat', 1540], ['Pesawat tempur', 242], ['Pesawat serang', 98], ['Pesawat angkut', 40], ['Pesawat latih', 335], ['Misi khusus', 35], ['Pesawat tanker', 4], ['Helikopter', 827], ['Helikopter serang', 113]],
        'Kekuatan darat': [['Tank', 1831], ['Kendaraan lapis baja', 117460], ['Artileri swagerak', 2780], ['Artileri tarik', 5800], ['Peluncur roket (MLRS)', 525]],
        'Kekuatan laut': [['Total aset', 215], ['Kapal induk', 0], ['Kapal induk helikopter', 2], ['Kapal perusak', 14], ['Fregat', 18], ['Korvet', 3], ['Kapal selam', 22], ['Kapal patroli', 96], ['Perang ranjau', 14]]
      } },
    { slug: 'prancis', nama: 'Prancis', rank: 6, idx: '0.1798', tren: 'naik', video: 'Prancis.mp4', gfp: 'france',
      profil: 'Angkatan bersenjata Prancis terdiri dari Angkatan Darat, Angkatan Laut, dan Angkatan Udara serta Antariksa. Prancis memiliki kemampuan nuklir sendiri dan mempertahankan kapasitas untuk operasi di Eropa maupun wilayah seberang laut.',
      stat: {
        'Personel': [['Personel aktif', 264000], ['Cadangan', 43444], ['Paramiliter', 150000], ['Total personel militer', 457444]],
        'Kekuatan udara': [['Total pesawat', 974], ['Pesawat tempur', 223], ['Pesawat serang', 0], ['Pesawat angkut', 118], ['Pesawat latih', 140], ['Misi khusus', 44], ['Pesawat tanker', 15], ['Helikopter', 452], ['Helikopter serang', 67]],
        'Kekuatan darat': [['Tank', 427], ['Kendaraan lapis baja', 110784], ['Artileri swagerak', 74], ['Artileri tarik', 0], ['Peluncur roket (MLRS)', 9]],
        'Kekuatan laut': [['Total aset', 166], ['Kapal induk', 1], ['Kapal induk helikopter', 3], ['Kapal perusak', 11], ['Fregat', 5], ['Korvet', 0], ['Kapal selam', 9], ['Kapal patroli', 22], ['Perang ranjau', 19]]
      } },
    { slug: 'jepang', nama: 'Jepang', rank: 7, idx: '0.1876', tren: 'naik', video: 'Jepang.mp4', gfp: 'japan',
      profil: 'Pasukan Bela Diri Jepang terdiri dari unsur darat, maritim, dan udara. Pertahanan kepulauan, pengawasan wilayah laut, serta kerja sama keamanan dengan Amerika Serikat menjadi bagian penting dari kebijakannya.',
      stat: {
        'Personel': [['Personel aktif', 251500], ['Cadangan', 56000], ['Paramiliter', 25000], ['Total personel militer', 332500]],
        'Kekuatan udara': [['Total pesawat', 1429], ['Pesawat tempur', 217], ['Pesawat serang', 47], ['Pesawat angkut', 53], ['Pesawat latih', 399], ['Misi khusus', 135], ['Pesawat tanker', 10], ['Helikopter', 583], ['Helikopter serang', 118]],
        'Kekuatan darat': [['Tank', 734], ['Kendaraan lapis baja', 54390], ['Artileri swagerak', 193], ['Artileri tarik', 480], ['Peluncur roket (MLRS)', 99]],
        'Kekuatan laut': [['Total aset', 158], ['Kapal induk', 0], ['Kapal induk helikopter', 4], ['Kapal perusak', 41], ['Fregat', 8], ['Korvet', 0], ['Kapal selam', 23], ['Kapal patroli', 6], ['Perang ranjau', 18]]
      } },
    { slug: 'britania-raya', nama: 'Britania Raya', rank: 8, idx: '0.1881', tren: 'turun', video: 'Britania Raya.mp4', gfp: 'united-kingdom',
      profil: 'Angkatan Bersenjata Britania Raya mencakup Angkatan Darat, Angkatan Laut Kerajaan, dan Angkatan Udara Kerajaan. Negara ini mempertahankan kemampuan nuklir, kekuatan laut, dan peran aktif dalam NATO.',
      stat: {
        'Personel': [['Personel aktif', 141330], ['Cadangan', 31940], ['Paramiliter', 0], ['Total personel militer', 173270]],
        'Kekuatan udara': [['Total pesawat', 625], ['Pesawat tempur', 103], ['Pesawat serang', 38], ['Pesawat angkut', 30], ['Pesawat latih', 201], ['Misi khusus', 29], ['Pesawat tanker', 9], ['Helikopter', 262], ['Helikopter serang', 50]],
        'Kekuatan darat': [['Tank', 288], ['Kendaraan lapis baja', 94064], ['Artileri swagerak', 14], ['Artileri tarik', 126], ['Peluncur roket (MLRS)', 43]],
        'Kekuatan laut': [['Total aset', 116], ['Kapal induk', 2], ['Kapal induk helikopter', 0], ['Kapal perusak', 6], ['Fregat', 7], ['Korvet', 0], ['Kapal selam', 10], ['Kapal patroli', 26], ['Perang ranjau', 8]]
      } },
    { slug: 'turkiye', nama: 'Türkiye', rank: 9, idx: '0.1975', tren: 'stabil', video: 'Turki.mp4', gfp: 'turkey',
      profil: 'Angkatan Bersenjata Türkiye terdiri dari Angkatan Darat, Angkatan Laut, dan Angkatan Udara. Letaknya yang menghubungkan Eropa dan Asia membentuk fokus pada pertahanan regional, Laut Hitam, dan kerja sama NATO.',
      stat: {
        'Personel': [['Personel aktif', 481000], ['Cadangan', 380000], ['Paramiliter', 150000], ['Total personel militer', 1011000]],
        'Kekuatan udara': [['Total pesawat', 1101], ['Pesawat tempur', 201], ['Pesawat serang', 0], ['Pesawat angkut', 84], ['Pesawat latih', 301], ['Misi khusus', 27], ['Pesawat tanker', 7], ['Helikopter', 509], ['Helikopter serang', 111]],
        'Kekuatan darat': [['Tank', 2284], ['Kendaraan lapis baja', 98193], ['Artileri swagerak', 1045], ['Artileri tarik', 635], ['Peluncur roket (MLRS)', 237]],
        'Kekuatan laut': [['Total aset', 192], ['Kapal induk', 0], ['Kapal induk helikopter', 1], ['Kapal perusak', 0], ['Fregat', 17], ['Korvet', 9], ['Kapal selam', 14], ['Kapal patroli', 40], ['Perang ranjau', 11]]
      } },
    { slug: 'italia', nama: 'Italia', rank: 10, idx: '0.2211', tren: 'stabil', video: 'Italia.mp4', gfp: 'italy',
      profil: 'Angkatan bersenjata Italia terdiri dari Angkatan Darat, Angkatan Laut, Angkatan Udara, dan Carabinieri. Posisi di Laut Tengah mendukung fokus pada pertahanan maritim, operasi NATO, dan misi internasional.',
      stat: {
        'Personel': [['Personel aktif', 165500], ['Cadangan', 18300], ['Paramiliter', 105000], ['Total personel militer', 288800]],
        'Kekuatan udara': [['Total pesawat', 714], ['Pesawat tempur', 88], ['Pesawat serang', 65], ['Pesawat angkut', 31], ['Pesawat latih', 152], ['Misi khusus', 22], ['Pesawat tanker', 8], ['Helikopter', 352], ['Helikopter serang', 37]],
        'Kekuatan darat': [['Tank', 203], ['Kendaraan lapis baja', 87364], ['Artileri swagerak', 64], ['Artileri tarik', 108], ['Peluncur roket (MLRS)', 21]],
        'Kekuatan laut': [['Total aset', 285], ['Kapal induk', 2], ['Kapal induk helikopter', 0], ['Kapal perusak', 3], ['Fregat', 14], ['Korvet', 0], ['Kapal selam', 8], ['Kapal patroli', 15], ['Perang ranjau', 10]]
      } }
];
const TREN = { stabil: '↔', naik: '↑', turun: '↓' };
const GFP_URL = 'https://www.globalfirepower.com/countries-listing.php';
