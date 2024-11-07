<?php
    // Include database configuration
    include 'Config.php';

    // Define the number of articles per page
    $articlesPerPage = 5;

    // Set the current page
    $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
    $page = max($page, 1); // Ensure the page is at least 1
    $offset = ($page - 1) * $articlesPerPage;

    // Search term check
    $searchTerm = isset($_GET['search']) ? $_GET['search'] : '';

    // Query to fetch articles with pagination and optional search
    $sql = "SELECT * FROM combined_merge_datasets ";
    if (!empty($searchTerm)) {
        $sql .= "WHERE `COL 1` LIKE '%" . $conn->real_escape_string($searchTerm) . "%' ";
    }
    $sql .= "LIMIT $offset, $articlesPerPage";
    $result = $conn->query($sql);

    // Display articles
    if ($result && $result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo '<div class="news-article">';
            echo '<h2 class="article-title">' . htmlspecialchars($row["COL 1"]) . '</h2>'; // Title
            echo '<span class="date">' . htmlspecialchars($row["COL 2"]) . '</span>'; // Date
            echo '<p>' . htmlspecialchars($row["COL 3"]) . '</p>'; // Summary
            echo '</div>';
            echo '<hr>'; // Separator line between articles
        }
    } else {
        echo '<div class="news-article"><p>No Article Found</p></div>';
    }

    // Count total articles for pagination
    $totalArticlesSql = "SELECT COUNT(*) as total FROM combined_merge_datasets";
    if (!empty($searchTerm)) {
        $totalArticlesSql .= " WHERE `COL 1` LIKE '%" . $conn->real_escape_string($searchTerm) . "%'";
    }
    $totalArticlesResult = $conn->query($totalArticlesSql);
    $totalArticlesRow = $totalArticlesResult->fetch_assoc();
    $totalArticles = (int)$totalArticlesRow['total'];
    $totalPages = ceil($totalArticles / $articlesPerPage);
?>