// notifications.js

// Sample notifications array
const notifications = [
    {
        title: "📢 Berita Terbaru: Bitcoin Capai Tertinggi Sepanjang Masa",
        description: "Bitcoin telah melesat ke tertinggi sepanjang masa baru, melewati $70,000 per koin...",
        time: "2024-10-08T10:00:00"
    },
    {
        title: "📈 Perkiraan Bull Market di Q4 2024",
        description: "Para ahli memprediksi pasar bullish yang kuat untuk cryptocurrency menjelang akhir tahun...",
        time: "2024-10-08T12:00:00"
    },
    {
        title: "📢 Tanggal Peluncuran Ethereum 2.0 Diumumkan",
        description: "Pembaruan yang sangat dinantikan, Ethereum 2.0, akan diluncurkan pada...",
        time: "2024-10-07T17:00:00"
    },
    {
        title: "🔍 Pembaruan Regulasi: SEC Tinjau Kebijakan Kripto",
        description: "SEC akan meninjau kebijakannya mengenai regulasi cryptocurrency dalam beberapa minggu mendatang...",
        time: "2024-10-06T04:00:00"
    },
    {
        title: "🚀 Listing Cryptocurrency Baru: CoinX",
        description: "CoinX, cryptocurrency terbaru, kini tersedia untuk diperdagangkan di bursa utama...",
        time: "2024-10-05T13:00:00"
    },
    {
        title: "📉 Koreksi Pasar Diharapkan Setelah Kenaikan Baru-baru Ini",
        description: "Analis memperingatkan tentang potensi koreksi pasar setelah kenaikan signifikan dalam sebulan terakhir...",
        time: "2024-10-04T09:00:00"
    },
    {
        title: "🔔 Analisis Pasar Mingguan: Tren Bullish untuk Token DeFi",
        description: "Token Desentralisasi Finansial (DeFi) menunjukkan tanda-tanda tren bullish yang kuat...",
        time: "2024-10-03T21:00:00"
    },
    {
        title: "📝 Pengingat: Sesi Tinjauan Portofolio Besok",
        description: "Jangan lupa untuk meninjau portofolio kripto Anda dalam sesi terjadwal kami besok...",
        time: "2024-09-30T11:00:00"
    },
    {
        title: "🎉 Konferensi Kripto 2024: Bergabunglah Bersama Kami Bulan Depan!",
        description: "Jangan lewatkan konferensi kripto terbesar tahun ini yang akan diadakan pada bulan November...",
        time: "2024-09-30T17:00:00"
    },
    {
        title: "🌍 Tingkat Adopsi Kripto Global Meningkat",
        description: "Sebuah laporan baru menunjukkan bahwa adopsi cryptocurrency tumbuh secara global, terutama di negara berkembang...",
        time: "2024-09-29T20:00:00"
    },
    {
        title: "📊 ETF Bitcoin Disetujui oleh SEC",
        description: "SEC telah secara resmi menyetujui ETF Bitcoin, menandai tonggak penting bagi pasar cryptocurrency.",
        time: "2024-09-28T15:00:00"
    },
    {
        title: "🛡️ Fitur Keamanan Baru Diperkenalkan untuk Dompet Kripto",
        description: "Penyedia dompet kripto terkemuka memperkenalkan fitur keamanan yang ditingkatkan untuk melindungi dana pengguna.",
        time: "2024-09-27T09:00:00"
    },
    {
        title: "💡 Proyek DeFi Inovatif Mendapat Populer",
        description: "Sebuah proyek DeFi inovatif telah mendapatkan perhatian dari para investor dan menarik perhatian signifikan.",
        time: "2024-09-26T10:30:00"
    },
    {
        title: "🌐 Solusi Cross-Chain Meningkat",
        description: "Solusi cross-chain semakin penting untuk interkonektivitas blockchain.",
        time: "2024-09-25T13:45:00"
    },
    {
        title: "🚀 Altcoin Utama Melonjak 300%",
        description: "Sebuah altcoin utama telah melihat lonjakan harga sebesar 300% dalam waktu seminggu, menarik perhatian pasar.",
        time: "2024-09-24T14:15:00"
    },
    {
        title: "🎨 Aktivitas Pasar NFT Meningkat",
        description: "Pasar NFT melaporkan peningkatan aktivitas pengguna dan volume transaksi yang lebih tinggi.",
        time: "2024-09-23T11:00:00"
    },
    {
        title: "⛓️ Pembaruan Ethereum 2.0 Dijadwalkan",
        description: "Pembaruan penting mengenai Ethereum 2.0 dijadwalkan untuk kuartal berikutnya.",
        time: "2024-09-22T16:00:00"
    },
    {
        title: "⚖️ Regulasi Kripto Diperketat di Asia",
        description: "Beberapa negara Asia memperketat regulasi terhadap platform perdagangan cryptocurrency.",
        time: "2024-09-21T08:00:00"
    },
    {
        title: "🛠️ Alat Baru untuk Pengembang Kripto Diluncurkan",
        description: "Alat pengembang baru telah diluncurkan untuk memfasilitasi proses pengembangan blockchain.",
        time: "2024-09-20T10:00:00"
    },
    {
        title: "⚡ Solusi Skalabilitas Blockchain Diusulkan",
        description: "Solusi inovatif untuk meningkatkan skalabilitas blockchain sedang diusulkan oleh perusahaan-perusahaan teknologi terkemuka.",
        time: "2024-09-19T09:30:00"
    },
    {
        title: "🤝 Kemitraan Terbentuk di Dunia Kripto",
        description: "Beberapa kemitraan telah terbentuk antara perusahaan blockchain besar untuk meningkatkan kolaborasi.",
        time: "2024-09-18T17:00:00"
    },
    {
        title: "📃 Whitepaper untuk Proyek Baru Dirilis",
        description: "Whitepaper untuk beberapa proyek kripto baru telah dirilis minggu ini.",
        time: "2024-09-17T12:00:00"
    },
    {
        title: "🧑‍🤝‍🧑 Keterlibatan Komunitas Meningkat",
        description: "Komunitas kripto melihat peningkatan keterlibatan dan partisipasi dari pengguna di seluruh dunia.",
        time: "2024-09-16T14:45:00"
    },
    {
        title: "🔎 Inisiatif Transparansi Blockchain",
        description: "Inisiatif yang bertujuan untuk meningkatkan transparansi blockchain diluncurkan di berbagai wilayah.",
        time: "2024-09-15T11:30:00"
    },
    {
        title: "🔥 Filantropi Kripto Mendapat Perhatian",
        description: "Filantropi kripto semakin mendapat perhatian saat lebih banyak proyek berfokus pada dampak sosial.",
        time: "2024-09-14T10:00:00"
    },
];

// Sort notifications from newest to oldest
notifications.sort((a, b) => new Date(b.time) - new Date(a.time));

// Variables for pagination
const itemsPerPage = 5; // Number of notifications per page
let currentPage = 1;

// Function to render notifications
function renderNotifications(notifications, page) {
    const notificationList = document.getElementById('notificationList');
    notificationList.innerHTML = '';  // Clear previous content

    // Calculate start and end index for the current page
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const notificationsToShow = notifications.slice(startIndex, endIndex);

    notificationsToShow.forEach(notification => {
        const article = document.createElement('article');
        article.className = 'notification-item';

        const title = document.createElement('h3');
        title.innerHTML = notification.title;

        const description = document.createElement('p');
        description.innerText = notification.description;

        const timestamp = document.createElement('span');
        const date = new Date(notification.time);
        const timeString = date.toLocaleString('id-ID', {
            timeStyle: 'short',
            dateStyle: 'long'
        });
        timestamp.className = 'notification-time';
        timestamp.innerText = timeString;

        article.appendChild(title);
        article.appendChild(description);
        article.appendChild(timestamp);
        notificationList.appendChild(article);
    });

    renderPagination(Math.ceil(notifications.length / itemsPerPage), page);
}

// Function to render pagination
function renderPagination(totalPages, currentPage) {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = ''; // Clear previous pagination buttons

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.className = (i === currentPage) ? 'active' : '';
        button.addEventListener('click', () => {
            currentPage = i; // Update current page and re-render notifications
            renderNotifications(notifications, currentPage);
        });
        pagination.appendChild(button);
    }
}

// Initial render
renderNotifications(notifications, currentPage);
