<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CryptoHorizon</title>
    <link rel="Shortcut Icon" href="../frontend/Gambar/gambar_logo_website.jpg">
    <link rel="stylesheet" href="../frontend/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <style>
        #filterByMonth {
            padding: 3px;
            font-size: 1rem;
            width: auto;
            background-color: yellow;
            color: #e63946;
            font-weight: bold;
        }
        #filterByYear {
            padding: 3px;
            font-size: 1rem;
            width: auto;
            background-color: yellow;
            color: #e63946;
            font-weight: bold;
        }
    </style>
</head>

<body>
    <header>
        <section class="website-profile">
            <img src="../frontend/Gambar/gambar_logo_website.jpg" alt="Website Logo Photo">
        </section>
        <h1>CryptoHorizon</h1>
        <div class="search-container">
            <form action="ppp.php" method="GET" id="searchForm">
                <input type="text" id="searchInput" name="search" placeholder="Search..." value="<?php echo isset($searchTerm) ? htmlspecialchars($searchTerm) : ''; ?>">
                <button type="submit" class="search-icon" id="searchButton" onclick="handleSearch()"><i class="fas fa-search"></i></button>
            </form>
        </div>
        <div class="notification">
            <a href="../frontend/html/notifications.html">🔔</a>
        </div>
    </header>

    <nav>
        <a href="../frontend/html/about.html" style="margin-left: 8px"><strong>About</strong></a>
        <!-- <select id="filterByMonth">
            <option value="">Filter by Month</option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
        </select>
        <select id="filterByYear">
            <option value="">Filter by Year</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
        </select> -->
    </nav>

    <main>
        <div class="slideshow-container"></div>
            <!-- Your existing slideshow images can be included here -->
            <div class="mySlides fade">
                <img src="../frontend/Gambar/ilustrasi_crypto_1.png" style="width:100%">
            </div>
            <div class="mySlides fade">
                <img src="../frontend/Gambar/ilustrasi_crypto_2.jpeg" style="width:100%">
            </div>
            <div class="mySlides fade">
                <img src="../frontend/Gambar/ilustrasi_crypto_3.jpg" style="width:100%">
            </div>
            <div class="mySlides fade">
                <img src="../frontend/Gambar/ilustrasi_crypto_4.png" style="width:100%">
            </div>
            <div class="mySlides fade">
                <img src="../frontend/Gambar/ilustrasi_crypto_5.png" style="width:100%">
            </div>
            <div class="mySlides fade">
                <img src="../frontend/Gambar/ilustrasi_crypto_6.jpg" style="width:100%">
            </div>
            <div class="mySlides fade">
                <img src="../frontend/Gambar/ilustrasi_crypto_7.jfif" style="width:100%">
            </div>
            <div class="mySlides fade">
                <img src="../frontend/Gambar/ilustrasi_crypto_8.jpg" style="width:100%">
            </div>
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
        <div class="content-wrapper">
            <style>
                .news-article h2 {
                    color: blue;
                    margin-bottom: 10px;
                }
                .news-article span {
                    display: block; margin-bottom: 4px;
                }
                .news-article p {
                    margin-bottom: 20px;
                    text-align: justify;
                }
                hr {
                    border: none;
                    border-top: 1px solid #ccc;
                    margin: 20px 0;
                }
                .pagination button {
                    padding: 8px 12px;
                    margin: 2px;
                    cursor: pointer;
                    background-color: #f0f0f0;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                }

                .pagination button.active {
                    background-color: #007bff;
                    color: #fff;
                    font-weight: bold;
                }
                /* Style for the pagination container */
                .pagination {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;
                    margin-top: 20px;
                    font-family: Arial, sans-serif;
                }

                /* Style for the pagination links */
                .pagination a {
                    text-decoration: none;
                    color: #007bff;
                    padding: 8px 12px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    transition: background-color 0.3s, color 0.3s;
                }

                /* Highlight the active page */
                .pagination a.active {
                    background-color: #007bff;
                    color: white;
                    border-color: #007bff;
                }

                /* Hover effect */
                .pagination a:hover {
                    background-color: #ddd;
                }

                /* Style for ellipsis */
                .pagination .dots {
                    padding: 8px 12px;
                    color: #777;
                }

                /* Previous and Next buttons */
                .pagination .prev,
                .pagination .next {
                    font-weight: bold;
                }
            </style>
            <section class="news">
                <h1>Berita Terbaru</h1>
                <div id="articleList">
                    <?php include 'ppp.php'; ?>
                </div>
            </section>
            <aside class="small-ad-slider">
                <div class="small-slider">
                    <div class="small-slide">
                        <a href="https://cryptoharian.com/haruskah-anda-investasikan-us-500-ke-dogecoin-doge-shiba-inu-shib-atau-etfswap-etfs/"><img src="../frontend/Gambar/iklan_kripto_1.jpg" alt="Small Ad 1"></a>
                        <div class="text"><strong>Anda Investasikan US$ 500 ke Dogecoin (DOGE), Shiba Inu (SHIB), atau ETFSwap (ETFS)?</strong></div>
                    </div>
                    <div class="small-slide">
                        <a href="https://cryptoharian.com/grok-ai-elon-musk-perkirakan-kenaikan-shiba-inu-dan-pembunuh-dogecoin-untuk-q1-2025/"><img src="../frontend/Gambar/iklan_kripto_2.jpg" alt="Small Ad 2"></a>
                        <div class="text"><strong>Grok AI Elon Musk Perkirakan Kenaikan Shiba Inu dan 'Pembunuh Dogecoin' untuk Q1 2025</strong></div>
                    </div>
                    <div class="small-slide">
                        <a href="https://cryptoharian.com/analisis-token-eigen-dalam-banyaknya-kontroversi-apakah-layak-hold-atau-jual/"><img src="../frontend/Gambar/iklan_kripto_3.jpg" alt="Small Ad 3"></a>
                        <div class="text"><strong>Analisis Token EIGEN dalam Banyaknya Kontroversi, Apakah Layak Hold atau Jual?</strong></div>
                    </div>
                    <div class="small-slide">
                        <a href="https://cryptoharian.com/rival-solana-bisa-tiru-kenaikan-harga-sol-10-000-persen-dari-2021-hanya-dalam-beberapa-bulan/"><img src="../frontend/Gambar/iklan_kripto_4.jpg" alt="Small Ad 4"></a>
                        <div class="text"><strong>Rival Solana Bisa Tiru Kenaikan Harga SOL 10.000 Persen dari 2021 Hanya dalam Beberapa Bulan</strong></div>
                    </div>
                </div>
                <button class="small-prev" onclick="moveSmallSlide(-1)">&#10094;</button>
                <button class="small-next" onclick="moveSmallSlide(1)">&#10095;</button>
            </aside>
        </div>
        <div class="pagination">
            <?php if ($page > 1): ?>
                <a href="?page=1<?php echo !empty($searchTerm) ? '&search=' . urlencode($searchTerm) : ''; ?>">First</a>
                <a href="?page=<?php echo $page - 1; ?><?php echo !empty($searchTerm) ? '&search=' . urlencode($searchTerm) : ''; ?>">Previous</a>
            <?php endif; ?>

            <?php
                $start = max(1, $page - 2);
                $end = min($totalPages, $page + 2);
                for ($i = $start; $i <= $end; $i++) {
                    echo '<a href="?page=' . $i;
                    echo !empty($searchTerm) ? '&search=' . urlencode($searchTerm) : '';
                    echo '" class="' . ($i === $page ? 'active' : '') . '">' . $i . '</a>';
                }
            ?>

            <?php if ($page < $totalPages): ?>
                <a href="?page=<?php echo $page + 1; ?><?php echo !empty($searchTerm) ? '&search=' . urlencode($searchTerm) : ''; ?>">Next</a>
                <a href="?page=<?php echo $totalPages; ?><?php echo !empty($searchTerm) ? '&search=' . urlencode($searchTerm) : ''; ?>">Last</a>
            <?php endif; ?>
        </div>
    </main>

    <footer>
        <div class="social-media">
            <a href="https://x.com/reyhan_mardjuki">🐦</a>
            <a href="https://www.instagram.com/reyhan_mardjuki/">📸</a>
            <a href="https://www.youtube.com/@reyhanmardjuki2414">▶️</a>
            <a href="https://github.com/REYHANTU">🐙</a>
            <a href="https://www.tiktok.com/@reyhan_mardjuki">🎵</a>
            <a href="https://www.linkedin.com/in/reyhan-reyhan-67709526b/">🔗</a>
            <a href="mailto:reyhan.535210064@stu.untar.ac.id">✉️</a>
        </div>
        <p style="margin-top: 30px;">&copy; 2024 CryptoHorizon. All Rights Reserved.</p>
    </footer>

    <script src="../frontend/js/script.js"></script>

    <script>
        // Small Slider
        let currentIndex = 0; // Index of the current slide
        const slides = document.querySelectorAll('.small-slide'); // Get all slides
        const totalSlides = slides.length; // Total number of slides

        // Function to show the current slide
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = (i === index) ? 'block' : 'none'; // Show current slide, hide others
            });
        }

        // Function to move to the next or previous slide
        function moveSmallSlide(direction) {
            currentIndex += direction; // Update the current index
            if (currentIndex < 0) {
                currentIndex = totalSlides - 1; // Loop back to the last slide
            } else if (currentIndex >= totalSlides) {
                currentIndex = 0; // Loop back to the first slide
            }
            showSlide(currentIndex); // Show the new slide
        }

        // Autoplay function
        function autoplaySlides() {
            moveSmallSlide(1); // Move to the next slide
        }

        // Show the first slide initially
        showSlide(currentIndex);

        // Set interval for autoplay (e.g., every 5 seconds)
        setInterval(autoplaySlides, 3500);

        // Pagination
        document.addEventListener('DOMContentLoaded', () => {
            const articlesPerPage = 5;
            const articles = document.querySelectorAll('.news-article');
            const pagination = document.getElementById('pagination');
            let currentPage = 1;

            function renderPagination() {
                pagination.innerHTML = ''; // Clear existing buttons
                const totalPages = Math.ceil(articles.length / articlesPerPage);

                for (let i = 1; i <= totalPages; i++) {
                    const button = document.createElement('button');
                    button.textContent = i;
                    button.onclick = () => goToPage(i);
                    if (i === currentPage) button.classList.add('active');
                    pagination.appendChild(button);
                }
            }

            function goToPage(pageNumber) {
                currentPage = pageNumber;
                const start = (pageNumber - 1) * articlesPerPage;
                const end = start + articlesPerPage;

                articles.forEach((article, index) => {
                    article.style.display = (index >= start && index < end) ? 'block' : 'none';
                });
                
                renderPagination();
            }

            goToPage(1); // Initialize pagination on the first page
        });

        // Search Title Article
        document.getElementById('searchInput').addEventListener('keyup', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent form submission on Enter
                performSearch();
            }
        });

        function performSearch() {
            const searchTerm = document.getElementById('searchInput').value;
            // Redirect to the main page with the search query parameter
            window.location.href = `index.php?search=${encodeURIComponent(searchTerm)}`;
        }

        document.addEventListener("DOMContentLoaded", () => {
            // Check if the page is being reloaded
            if (sessionStorage.getItem("is_reloaded")) {
                // Redirect to the main page on refresh
                window.location.href = "index.php";
                sessionStorage.removeItem("is_reloaded"); // Clear the flag after redirecting
            } else {
                // Set flag in sessionStorage if not a reload
                sessionStorage.setItem("is_reloaded", true);
            }
        });

        // Clear the flag when navigating away from the page
        window.addEventListener("beforeunload", () => {
            sessionStorage.removeItem("is_reloaded");
        });

        // Mengarahkan ke URL berdasarkan input pencarian saat tombol search diklik
        document.getElementById("searchButton").addEventListener("click", handleSearch);

        // Mengarahkan ke URL berdasarkan input pencarian saat Enter ditekan
        document.getElementById("searchInput").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                handleSearch();
            }
        });

        function handleSearch() {
            const searchInput = document.getElementById("searchInput");
            const searchQuery = searchInput.value.trim();

            // Construct the new URL using the search query
            const newURL = `http://localhost/skripsi/backend/index.php?page=1&search=${encodeURIComponent(searchQuery)}`;

            // Redirect to the new URL
            window.location.href = newURL;
        }

        // Attach the function to the search input (assuming you have a form)
        document.getElementById("searchForm").addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the default form submission
            handleSearch();
        });
    </script>
</body>

</html>
