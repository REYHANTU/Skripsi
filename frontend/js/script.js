let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let smallSlideIndex = 0; // Indeks slide kecil saat ini
const smallSlides = document.querySelectorAll('.small-ad-slider .small-slide'); // Ambil semua slide kecil

function showSmallSlide(n) {
    smallSlideIndex += n; // Tambahkan atau kurangi indeks
    if (smallSlideIndex >= smallSlides.length) {
        smallSlideIndex = 0; // Reset ke slide pertama jika mencapai akhir
    } else if (smallSlideIndex < 0) {
        smallSlideIndex = smallSlides.length - 1; // Reset ke slide terakhir jika mundur di awal
    }

    // Pindahkan slider kecil ke posisi yang sesuai
    const offset = -smallSlideIndex * 100; // Hitung offset
    document.querySelector('.small-slider').style.transform = `translateX(${offset}%)`; // Terapkan transformasi
}

function startSmallSlideShow() {
    showSmallSlide(1); // Tampilkan slide berikutnya
}

// Set interval untuk transisi otomatis setiap 3 detik (3000 ms)
let smallSlideInterval = setInterval(startSmallSlideShow, 3000);

// Tambahkan event listeners untuk tombol
document.querySelector('.small-prev').addEventListener('click', () => {
    clearInterval(smallSlideInterval); // Hentikan interval saat pengguna mengklik tombol
    showSmallSlide(-1); // Tampilkan slide sebelumnya
    smallSlideInterval = setInterval(startSmallSlideShow, 3000); // Restart interval
});

document.querySelector('.small-next').addEventListener('click', () => {
    clearInterval(smallSlideInterval); // Hentikan interval saat pengguna mengklik tombol
    showSmallSlide(1); // Tampilkan slide berikutnya
    smallSlideInterval = setInterval(startSmallSlideShow, 3000); // Restart interval
});

// Jalankan slideshow saat halaman dimuat
startSmallSlideShow();

// Menu Pagination Halaman Artikel dan Search Artikel
const articles = [
    { title: "Mayoritas Bitcoin Ternyata Sudah Tidak Aktif Lebih dari Enam Bulan", date: "Senin, 19 Agustus 2024", link: "../html/artikel1.html", imgSrc: "../Gambar/gambar_artikel_1.jpg", description: "Dataon-chainmengungkapkan bahwa hampir tiga perempat dari total pasokan Bitcoin yang beredar tetap tersimpan dalamwalletpara pemegangnya selama setidaknya enam bulan terakhir.Berdasarkan data dariHODL Waves Glassnodeper 18 Agustus, sekitar 74% dari total pasokan Bitcoin berada dalam kondisi tidak aktif dan tetap tersimpan dalamwalletpara pemegang selama lebih dari enam bulan.Mayoritas holder memilih menyimpan Bitcoin lebih dari enam bulan." },
    { title: "Studi Ungkap 97% Proyek Meme Coin Alami Kegagalan pada 2024", date: "Senin, 19 Agustus 2024", link: "../html/artikel2.html", imgSrc: "../Gambar/gambar_artikel_2.jpg", description: "Sebuah studi terbaru yang dilakukan olehChainPlaymengungkapkan bahwa 97% proyek meme coin mengalami kegagalan sepanjang tahun 2024.Studi ini menggunakan data dari Dexscreener yang mencakup 30.000 aset kripto untuk menilai kelangsungan hidup meme coin, terutama pada tiga blockchain populer termasuk Solana, Ethereum, dan Base.🚨 State of Memecoin 2024: High Risk, High Reward 🚨Memecoins: A rollercoaster of fortunes or a financial minefield?" },
    { title: "Dubai Akui Kripto untuk Bayar Gaji Pegawai", date: "Senin, 19 Agustus 2024", link: "../html/artikel3.html", imgSrc: "../Gambar/gambar_artikel_3.jpg", description: "Pada 15 Agustus 2024, Pengadilan Dubai melalui Putusan Pengadilan Pertama secara resmi mengakui pembayaran gaji dalam bentuk kripto sebagai metode yang sah dalam kontrak kerja." },
    { title: "Justin Sun Luncurkan Launchpad Meme Coin SunPump", date: "Senin, 19 Agustus 2024", link: "../html/artikel4.html", imgSrc: "../Gambar/gambar_artikel_4.jpg", description: "Justin Sun, pendiri blockchain Tron, meluncurkan SunPump, sebuah platformlaunchpadyang dirancang khusus untuk mempermudah pembuatan meme coin di jaringan Tron.SunPump diluncurkan pada 13 Agustus oleh Sun.io, platform DeFi yang memiliki keterkaitan erat dengan Sun." },
    { title: "5 Proyek Ekosistem TON yang Layak Diperhatikan Tahun 2024", date: "Senin, 19 Agustus 2024", link: "../html/artikel5.html", imgSrc: "../Gambar/gambar_artikel_5.jpg", description: "The Open Network (TON)berhasil menarik perhatian para pengembang untuk membangun aplikasi di jaringan tersebut." },
    { title: "Meme Coin DOGS Tentukan Jadwal Airdrop Baru, Catat Tanggalnya!", date: "Senin, 19 Agustus 2024", link: "../html/artikel6.html", imgSrc: "../Gambar/gambar_artikel_6.jpg", description: "DOGS, meme coin bertema anjing yang berbasis pada blockchain TON, telah mengumumkan penetapan tanggal baru untukToken Generation Event(TGE) serta distribusiairdroptoken $DOGS yang akan dimulai pada 23 Agustus pukul 19.00 WIB.Dalampengumumandi kanal komunitas Telegram pada 19 Agustus, tim pengembang DOGS menyatakan bahwa pengguna dapat mulai mengklaim token mereka diexchangeterpusat (CEX) dan Telegram Wallet dari tanggal 16 Agustus hingga 21 Agustus." },
    { title: "Lufina Permudah Akses Investasi Real Estat Melalui NFT", date: "Minggu, 18 Agustus 2024", link: "../html/artikel7.html", imgSrc: "../Gambar/gambar_artikel_7.jpg", description: "Di era di mana teknologi terus mengganggu industri tradisional, Lufina muncul sebagai pengubah permainan dalam investasi real estat." },
    { title: "Exchange Kripto Bybit Berhasil Raih 40 Juta Pengguna!", date: "Sabtu, 17 Agustus 2024", link: "../html/artikel8.html", imgSrc: "../Gambar/gambar_artikel_8.jpg", description: "istimewa.10 juta di antara jumlah tersebut didapatkan Bybit hanya dalam 90 hari." },
    { title: "Floki Jalin Kemitraan dengan Klub Liga Inggris Nottingham Forest", date: "Sabtu, 17 Agustus 2024", link: "../html/artikel9.html", imgSrc: "../Gambar/gambar_artikel_9.jpg", description: "Meme coin Flokiumumkan kemitraan dengan Nottingham Forest Football Club, salah satu tim Liga Primer Inggris (EPL)." },
    { title: "Arbitrum DAO Setujui Proposal Staking Token ARB", date: "Jumat, 16 Agustus 2024", link: "../html/artikel10.html", imgSrc: "../Gambar/gambar_artikel_10.jpg", description: "Arbitrum DAO baru-baru ini meloloskan proposal tahap awal yang bertujuan untuk meningkatkan utilitas token ARB dan memperkuat keamanan tata kelola dalam ekosistemnya.Baca juga:Mengenal Arbitrum Proyek Layer-2 yang Curi PerhatianProposalini pertama kali diajukan oleh delegasi dari ekosistem Arbitrum, Frission, pada 21 Juni 2024, dan telah mendapatkan dukungan dengan 91% suara setuju dari lebih dari 25.000 partisipan.Disetujuinya proposal ini, membuat pemegang token ARB akan dapat melakukanstakingdan mendelegasikan token mereka untuk menerima token baru yaknistaked ARB.Token stARB ini akan mewakili kepemilikanstakingmereka dan memungkinkan penggabungan otomatis hadiah di masa depan, opsirestaking, serta kompatibilitas dengan aplikasi keuangan terdesentralisasi (DeFi).Baca juga:Franklin Templeton Hadirkan Dana Tokenisasi di ArbitrumStaking ARB untuk Memperoleh Keuntungan dan Menjaga Sistem Tata KelolaPelaksanaan proposal ini akan menggunakan sistem tokenliquid stakingdari Tally." },
    { title: "Donald Trump Raup Keuntungan Rp112 Miliar dari Penjualan Koleksi NFT", date: "Jumat, 16 Agustus 2024", link: "../html/artikel11.html", imgSrc: "../Gambar/gambar_artikel_11.jpg", description: "Sebuah laporan keuangan terbaru mengungkapkan bahwa mantan Presiden Amerika Serikat, Donald Trump, telah berhasil meraup lebih dari US$7,15 juta setara lebih dari Rp112 miliar dari penjualannon-fungible token(NFT).Berdasarkan laporan keuangan pribadi yang diperoleh olehCitizens for Ethics, Trump melaporkan bahwa ia saat ini menyimpan aset kripto berbasis Ethereum senilai US$1 juta (setara Rp16 miliar) hingga US$5 miliar (setara Rp78 miliar).Dirinya juga mengungkapkan telah mendapatkan pendapatan lebih dari US$7,15 juta miliar dari tiga koleksi NFT Trump Digital Trading Card, termasuk koleksiMugshotsserta dua seri lainnya.Data dariOpenSeamenunjukkan bahwa Trump Digital Trading Card telah mencatat volume perdagangan lebih dari 15.808 ETH sejak pertama kali diluncurkan.Pada Juli, Trump mengisyaratkan akan merilis seri NFT keempatnya dengan mengklaim bahwa “masyarakat di AS menginginkan koleksi NFT baru.”Baca juga:Donald Trump  Rilis Koleksi NFT Ketiga, Segini Harganya!Bisnis Kripto Donald TrumpSelain menawarkan koleksi NFT, Trump baru-baru ini juga meluncurkan lini produksneakersbertemakan Bitcoin pada awal Agustus.Koleksihi-topsBitcoin berwarna oranye dijual dengan harga US499 atau setara Rp7,8 juta per pasang dan habis terjual hanya dalam beberapa jam meskipun jumlahnya terbatas sekitar 1.000 pasang.Baca juga:Donald Trump Luncurkan Sneakers Bertema BitcoinData dariArkham Intelligencemenunjukkan bahwa aset kripto Trump berbasis Ethereum saat ini telah mencapai US$3,6 juta." },
    { title: "Krisis Suplai Listrik, Iran Tawarkan Bounty Bagi Pelapor Miner Kripto ILEGAL", date: "Jumat, 16 Agustus 2024", link: "../html/artikel12.html", imgSrc: "../Gambar/gambar_artikel_12.jpg", description: "Upaya ini diambil untuk mengatasi krisis listrik yang semakin parah.Menurut laporanIran Internationalpada 13 Agustus, Iran saat ini menghadapi salah satu gelombang panas terburuk dalam lima dekade terakhir, yang menyebabkan pemadaman listrik besar-besaran di seluruh negeri." },
    { title: "Vitalik Buterin Donasikan Koleksi Meme Coin Bernilai Rp8,3 Miliar untuk Badan Amal", date: "Jumat, 16 Agustus 2024", link: "../html/artikel13.html", imgSrc: "../Gambar/gambar_artikel_13.jpg", description: "Vitalik Buterin, Co-Founder Ethereum, telah mendonasikan seluruh koleksi meme coin bertema hewan yang dimilikinya kepada sebuah lembaga amal yang berfokus pada kesejahteraan hewan.Dalam sebuah unggahan di X pada 15 Agustus, Buterin menyatakan bahwa ia telah menyalurkan semua meme coin yang diterimanya selama setahun terakhir yang bernilai sekitar 200 ETH atau setara dengan Rp8,3 miliar kepada Animal Welfare Fund dari Effective Altruism Funds.Charity donation done, covering all animal coins from the past year or so!That said, I appreciate it if coin holdings just get allocated to the charities directly😊It's 2024, we can start doing more sophisticated public goods fun-ding, eg." },
    { title: "Pasar Kripto Lesu, Harga Bitcoin Turun ke US$56.000", date: "Jumat, 16 Agustus 2024", link: "../html/artikel14.html", imgSrc: "../Gambar/gambar_artikel_14.jpg", description: "Setelah melewati pekan yang relatif tenang, harga Bitcoin (BTC) kembali mengalami volatilitas dengan fluktuasi harga yang cukup tajam selama beberapa hari terakhir.Berdasarkan data dariCoinMarketCappada Jumat pagi (16/8/2024), harga Bitcoin mencatat penurunan drastis dari kisaran US$59.400 menjadi US$57.500.Aset kripto terbesar ini bahkan terus terjun hingga menyentuh level US$56.630 sebelum akhirnya pulih dan ke harga US$57.420." },
    { title: "CoinGecko Bersiap Gelar Konferensi Web3 GeckoCon di Thailand", date: "Kamis, 15 Agustus 2024", link: "../html/artikel15.html", imgSrc: "../Gambar/gambar_artikel_15.jpg", description: "CoinGecko, agregator data kripto independen terbesar di dunia, secara resmi mengumumkan pelaksanaan konferensihybridperdananya yang bertajukGeckoCon: Web3 Games Unleashed.Acara ini akan berlangsung pada tanggal 11 November 2024 di ICONSIAM, Bangkok, Thailand.Menurut rilis pers pada 15 Agustus,GeckoCon: Web3 Game Unleashedbertujuan untuk menyoroti perkembangan dan tren terkini dalam industri game Web3." },    
    { title: "Circle Bakal Hadirkan Fitur Pembayaran USDC via NFC di iPhone", date: "Kamis, 15 Agustus 2024", link: "../html/artikel16.html", imgSrc: "../Gambar/gambar_artikel_16.jpg", description: "Jeremy Allaire, CEO dari penerbit stablecoin Circle, mengumumkan rencana perusahaan untuk meluncurkan fitur pembayarantap-to-paymenggunakan USDC pada perangkat iPhone.Langkah ini dilakukan setelah Apple memutuskan untuk mengizinkan pengembang pihak ketiga mengakseschippembayaran yang aman di perangkat mereka.Dalam sebuah postingan di platform X pada 14 Agustus, Allaire mengungkapkan, “tap-to-paydengan USDC di iPhone akan segera hadir." },
    { title: "OJK Targetkan Transaksi Kripto Sentuh Rp1.000 Triliun pada 2028", date: "Kamis, 15 Agustus 2024", link: "../html/artikel17.html", imgSrc: "../Gambar/gambar_artikel_17.jpg", description: "Otoritas Jasa Keuangan (OJK) telah menetapkan target untuk sektor kripto dalamRoadmapPengembangan dan Penguatan Inovasi Teknologi Sektor Keuangan, Aset Keuangan Digital, dan Aset Kripto (IAKD) untuk periode 2024-2028.Langkah ini menyusul persiapan peralihan pengawasan aset kripto dari Badan Pengawas Perdagangan Berjangka Komoditi (Bappebti) pada awal tahun 2025.Baca juga:OJK Rilis Roadmap  Pengembangan  Sektor Keuangan Digital dan KriptoDalamroadmaptersebut, OJK memproyeksikan bahwa nilai transaksi kripto dapat meningkat lebih dari tiga kali lipat, dari Rp301,75 triliun sepanjang Januari hingga Juni 2024 menjadi Rp1.000 triliun pada tahun 2028.Selain peningkatan nilai transaksi kripto, OJK juga menargetkan pertumbuhan signifikan dalam jumlah produk, layanan, aktivitas, dan model bisnis dalam Inovasi Teknologi Sektor Keuangan (ITSK).Jumlah produk dan layanan ITSK diharapkan meningkat dari 5 menjadi 100, sementara total kemitraan ITSK diproyeksikan meningkat dari 953 menjadi 5.000 kemitraan." },
    { title: "Metamask Luncurkan Kartu Debit Kripto Bersama Mastercard", date: "Kamis, 15 Agustus 2024", link: "../html/artikel18.html", imgSrc: "../Gambar/gambar_artikel_18.jpg", description: "MetaMask bekerja sama dengan Mastercard dan Baanx untuk meluncurkan kartu debit kripto bernama MetaMask Card.Dalam sebuahpengumumanpada 14 Agustus, MetaMask mengatakan bahwa integrasi ini memungkinkan pengguna untuk memanfaatkan aset kripto mereka dalam pembayaran sehari-hari." },
    // Add more articles as necessary
];

const itemsPerPage = 5; // Number of articles per page
let currentPage = 1; // Current pagination page

// Elements for filtering
const filterByDateDropdown = document.getElementById('filterByDate');
const filterByDayDropdown = document.getElementById('filterByDay');
const searchInput = document.getElementById('searchInput');

// Event listeners for filters and search
filterByDateDropdown.addEventListener('change', updateDisplay);
filterByDayDropdown.addEventListener('change', updateDisplay);
searchInput.addEventListener('input', updateDisplay);

// Function to update filtered articles and render them
function updateDisplay() {
    // currentPage = 1; // This line should only be uncommented if resetting the page on each filter
    const query = searchInput.value.toLowerCase();
    const selectedDate = filterByDateDropdown.value;
    const selectedDay = filterByDayDropdown.value;
    const selectInput = searchInput.value;

    const filteredArticles = articles.filter(article => {
        const dayOfWeek = article.date.split(', ')[0]; // Get the day
        const articleDateParts = article.date.split(', ')[1].split(' '); // Get date parts
        const month = articleDateParts[1]; // Month name
        const year = articleDateParts[2]; // Year
        
        const articleYearMonth = `${year}-${getMonthNumber(month)}`;

        return (
            (selectedDate === '' || articleYearMonth === selectedDate) &&
            (selectedDay === '' || dayOfWeek === selectedDay) &&
            (query === '' || article.title.toLowerCase().includes(query))
        );
    });

    renderArticles(filteredArticles); // Call to render articles with the filters applied
}

// Function to render articles based on filtered articles
function renderArticles(filteredArticles) {
    const articleList = document.getElementById('articleList');
    articleList.innerHTML = ''; // Bersihkan konten sebelumnya
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const articlesToShow = filteredArticles.slice(startIndex, endIndex);
    
    articlesToShow.forEach(article => {
        const articleDiv = document.createElement('article');
        articleDiv.className = 'news-article';
    
        // Judul artikel
        const title = document.createElement('h3');
        title.innerHTML = `<a href="${article.link}" target="_blank">${article.title}</a>`;  // Menambahkan target="_blank" agar buka di tab baru
        
        // Membuat link untuk gambar
        const imgLink = document.createElement('a'); // Membuat elemen link untuk gambar
        const img = document.createElement('img');
        img.src = article.imgSrc;
        img.alt = article.title; // Menambahkan teks alternatif untuk gambar
        imgLink.href = article.link; // Mengatur link ke artikel
        imgLink.target = "_blank"; // Membuka di tab baru jika diinginkan
        imgLink.appendChild(img); // Menambahkan gambar ke dalam link
        
        // Tanggal artikel
        const dateParagraph = document.createElement('p');
        dateParagraph.innerText = article.date;
        
        // Deskripsi artikel
        const description = document.createElement('p');
        description.innerHTML = `<a href="${article.link}" target="_blank">${article.description}</a>`; // Menambahkan target="_blank" untuk deskripsi
        
        // Menambahkan elemen ke div artikel
        articleDiv.appendChild(title);
        articleDiv.appendChild(imgLink); // Menambahkan link yang membungkus gambar
        articleDiv.appendChild(dateParagraph);
        articleDiv.appendChild(description);
        
        // Menambahkan div artikel ke daftar artikel
        articleList.appendChild(articleDiv);
    });
    
    renderPagination(filteredArticles.length); // Menggambar paginasi
}    

// Function to render pagination buttons
function renderPagination(totalArticles) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = ''; // Clear previous buttons

    const totalPages = Math.ceil(totalArticles / itemsPerPage); // Calculate total pages

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.className = (i === currentPage) ? 'active' : ''; // Set 'active' class for current page

        button.addEventListener('click', () => {
            currentPage = i; // Update currentPage to the clicked button
            updateDisplay(); // Refresh articles when page is changed
        });

        pagination.appendChild(button); // Attach button to pagination
    }
}

// Event listener untuk pencarian
document.getElementById('searchInput').addEventListener('input', function () {
    const query = this.value; // Ambil nilai input pencarian
    currentPage = 1; // Setel ulang ke halaman 1 saat mencari
    searchArticles(query); // Panggil fungsi pencarian
});

// Render artikel awal saat halaman dimuat
renderArticles(articles);

// Utility function to convert month name to number
function getMonthNumber(monthName) {
    const months = {
        'Januari': '01',
        'Februari': '02',
        'Maret': '03',
        'April': '04',
        'Mei': '05',
        'Juni': '06',
        'Juli': '07',
        'Agustus': '08',
        'September': '09',
        'Oktober': '10',
        'November': '11',
        'Desember': '12'
    };
    return months[monthName] || '00'; // Return '00' if month not found
}

// Initial render when the page loads
updateDisplay();
