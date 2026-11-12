const isi = document.getElementById('isi');
const isHalamanNegara = Boolean(document.body.dataset.slug);
const slug = document.body.dataset.slug || new URLSearchParams(location.search).get('negara');
const i = NEGARA.findIndex((n) => n.slug === slug);
const akar = isHalamanNegara ? '..' : '../..';
const tautanDaftar = isHalamanNegara ? '../tampilan/html/Daftar_negara.html' : 'Daftar_negara.html';
const tautanNegara = (negara) => isHalamanNegara
    ? negara.slug + '.html'
    : '../../negara/' + negara.slug + '.html';

if (i < 0) {
    isi.innerHTML = '<div class="panel"><h1>Negara tidak ditemukan</h1><p class="sub"><a style="color:#fff" href="' + tautanDaftar + '">Kembali ke peringkat</a></p></div>';
} else {
    const n = NEGARA[i];
    document.title = n.nama + ' | Kekuatan Militer Dunia 2026';
    const fmt = (v) => v.toLocaleString('id-ID');

    let html = '<article class="panel"><div class="atas">' +
        '<div class="bendera"><video loop muted playsinline preload="none" aria-label="Bendera ' + n.nama + '"><source src="' + akar + '/gambar/animasi%20bendera/' + encodeURIComponent(n.video) + '" type="video/mp4"></video></div>' +
        '<div><h1>' + n.nama + '</h1><p class="sub">Peringkat <b>' + n.rank + '</b> dari 145 · PwrIndx <b>' + n.idx + '</b> · Tren ' + n.tren + '</p></div></div>' +
        '<section class="seksi"><h2>Profil negara</h2><p>' + n.profil + '</p></section>';

    const dataNuklir = {
        'amerika-serikat': { stok: 3700, inventaris: 5042, catatan: 'Negara bersenjata nuklir yang diakui NPT.' },
        rusia: { stok: 4400, inventaris: 5420, catatan: 'Negara bersenjata nuklir yang diakui NPT.' },
        china: { stok: 620, inventaris: 620, catatan: 'Negara bersenjata nuklir yang diakui NPT.' },
        india: { stok: 190, inventaris: 190, catatan: 'Negara bersenjata nuklir di luar NPT.' },
        'korea-selatan': { catatan: 'FAS tidak mencantumkan Korea Selatan sebagai negara bersenjata nuklir.' },
        prancis: { stok: 290, inventaris: 370, catatan: 'Negara bersenjata nuklir yang diakui NPT.' },
        jepang: { catatan: 'FAS tidak mencantumkan Jepang sebagai negara bersenjata nuklir.' },
        'britania-raya': { stok: 225, inventaris: 225, catatan: 'Negara bersenjata nuklir yang diakui NPT.' },
        turkiye: { catatan: 'FAS tidak mencantumkan Türkiye sebagai negara bersenjata nuklir. Türkiye termasuk negara NATO yang disebut dalam perkiraan lokasi senjata nuklir AS di Eropa.' },
        italia: { catatan: 'FAS tidak mencantumkan Italia sebagai negara bersenjata nuklir. Italia termasuk negara NATO yang disebut dalam perkiraan lokasi senjata nuklir AS di Eropa.' }
    };
    const nuklir = dataNuklir[n.slug];
    const rincianNuklir = nuklir.stok
        ? '<dl class="stat">' +
            '<div><dt>Stok militer (estimasi)</dt><dd>' + fmt(nuklir.stok) + '</dd></div>' +
            '<div><dt>Total inventaris (estimasi)</dt><dd>' + fmt(nuklir.inventaris) + '</dd></div>' +
          '</dl>'
        : '';
    html += '<section class="seksi"><h2>Kekuatan nuklir</h2>' +
        '<img class="gambar-seksi" src="' + akar + '/gambar/gambar%20tiap%20jenis%20angkatan/nuklir.jpeg" alt="Ilustrasi kekuatan nuklir">' +
        '<p>' + nuklir.catatan + '</p>' + rincianNuklir +
        '<p>FAS membedakan stok militer (hulu ledak dalam penguasaan militer untuk kemungkinan penggunaan) dari total inventaris, yang juga mencakup hulu ledak pensiun yang menunggu pembongkaran. Angka negara yang tidak tercantum bukan berarti inventarisnya dipastikan nol. FAS memperkirakan sekitar 100–120 bom B61 AS ditempatkan di Eropa pada beberapa negara NATO, termasuk Italia dan Türkiye; angka khusus per negara tidak tersedia. Dalam pengaturan NATO, senjata tersebut tetap berada di bawah kendali dan penguasaan AS.</p>' +
        '<p class="sumber">Sumber estimasi 2026: <a href="https://fas.org/initiative/status-world-nuclear-forces/" target="_blank" rel="noopener noreferrer">Federation of American Scientists (FAS), Status of World Nuclear Forces</a>. <a href="https://www.nato.int/en/what-we-do/deterrence-and-defence/natos-nuclear-deterrence-policy-and-forces" target="_blank" rel="noopener noreferrer">Kebijakan nuklir dan nuclear sharing NATO</a>.</p></section>';

    if (n.stat) {
        const gambarBagian = {
            'Personel': 'Personel.jpeg',
            'Kekuatan udara': 'Kekuatan udara.jpeg',
            'Kekuatan darat': 'Kekuatan darat.jpeg',
            'Kekuatan laut': 'Kekuatan laut.jpeg'
        };
        Object.entries(n.stat).forEach(([judul, baris]) => {
            html += '<section class="seksi"><h2>' + judul + '</h2>' +
                '<img class="gambar-seksi" src="' + akar + '/gambar/gambar%20tiap%20jenis%20angkatan/' + encodeURIComponent(gambarBagian[judul]) + '" alt="Ilustrasi ' + judul + '">' +
                '<dl class="stat">' +
                baris.map(([l, v]) => '<div><dt>' + l + '</dt><dd>' + fmt(v) + '</dd></div>').join('') + '</dl></section>';
        });
    } else {
        html += '<p class="kosong">Rincian angka personel dan alutsista untuk negara ini belum tersedia pada halaman ini.</p>';
    }

    html += '<p class="sumber">Data Global Firepower 2026; sebagian angka merupakan estimasi. Sumber: <a href="https://www.globalfirepower.com/country-military-strength-detail.php?country_id=' + n.gfp + '" target="_blank" rel="noopener noreferrer">halaman ' + n.nama + '</a>, daftar <a href="https://www.globalfirepower.com/aircraft-total.php" target="_blank" rel="noopener noreferrer">total pesawat</a>, <a href="https://www.globalfirepower.com/aircraft-total-fighters.php" target="_blank" rel="noopener noreferrer">pesawat tempur</a>, <a href="https://www.globalfirepower.com/aircraft-total-attack-types.php" target="_blank" rel="noopener noreferrer">serang</a>, <a href="https://www.globalfirepower.com/aircraft-total-transports.php" target="_blank" rel="noopener noreferrer">angkut</a>, <a href="https://www.globalfirepower.com/aircraft-total-trainers.php" target="_blank" rel="noopener noreferrer">latih</a>, <a href="https://www.globalfirepower.com/aircraft-total-special-mission.php" target="_blank" rel="noopener noreferrer">misi khusus</a>, <a href="https://www.globalfirepower.com/aircraft-total-tanker-fleet.php" target="_blank" rel="noopener noreferrer">tanker</a>, <a href="https://www.globalfirepower.com/aircraft-helicopters-total.php" target="_blank" rel="noopener noreferrer">helikopter</a>, dan <a href="https://www.globalfirepower.com/aircraft-helicopters-attack.php" target="_blank" rel="noopener noreferrer">helikopter serang</a>.</p></article>';

    const prev = NEGARA[i - 1], next = NEGARA[i + 1];
    html += '<div class="navigasi"><span>' + (prev ? '<a href="' + tautanNegara(prev) + '">← ' + prev.nama + '</a>' : '') + '</span>' +
        '<a href="' + tautanDaftar + '">Semua peringkat</a>' +
        '<span>' + (next ? '<a href="' + tautanNegara(next) + '">' + next.nama + ' →</a>' : '') + '</span></div>';

    isi.innerHTML = html;
    aktifkanVideoBendera();
}
