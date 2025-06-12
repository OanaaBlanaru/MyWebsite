<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Google tag (gtag.js) -->
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-ZL7NS49NJ5"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-ZL7NS49NJ5");
    </script>
    <!-- Google Tag Manager -->
    <script>
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "GTM-5QPGFB35");
    </script>
    <!-- End Google Tag Manager -->
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="icon" type="image/png" href="favicon.png" />
    <title>My Visitors</title>
    <style>
         table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
  </head>
  <body>
    <!-- Google Tag Manager (noscript) -->
    <noscript
      ><iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-5QPGFB35"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      ></iframe
    ></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <h1>My visitors</h1>
    <div id="visitor-info"></div>

    <script>
      document.addEventListener("DOMContentLoaded", function () {
        fetch("collect_data.php")
          .then((response) => response.json())
          .then((data) => {
            console.log(data); // Log the data to see what is returned
            if (data.status === "success") {
              document.getElementById(
                "visitor-info"
              ).innerHTML = `IP Address: ${data.ip_address}<br>Location: ${data.location}`;
            } else {
              document.getElementById(
                "visitor-info"
              ).innerHTML = `Error: ${data.message}`;
            }
          })
          .catch((error) => console.error("Error:", error));
      });
    </script>

<div id="visitors-table">
    <?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    include 'display_visitors.php';
    ?>
</div>


    <!-- Master Tag add just before the closing body tag -->
    <script
      src="https://www.dwin1.com/82165.js"
      type="text/javascript"
      defer="defer"
    ></script>
  </body>
</html>
