const movies = [
// filma aksion

  // ACTION
  { title:"John Wick 4", category:"action", image:"images/img4.jpg", trailer:"https://www.youtube.com/embed/qEVUtrk8_B4" },
  { title:"Mad Max Fury Road", category:"action", image:"images/img5.jpg", trailer:"https://www.youtube.com/embed/hEJnMQG9ev8" },
  { title:"Mission Impossible", category:"action", image:"images/img6.jpg", trailer:"https://www.youtube.com/embed/avz06PDqDbM" },
  { title:"The Dark Knight", category:"action", image:"images/action1.jpg", trailer:"https://www.youtube.com/embed/EXeTwQWrcwY" },
  { title:"Gladiator", category:"action", image:"images/action2.jpg", trailer:"https://www.youtube.com/embed/owK1qxDselE" },
  { title:"Extraction", category:"action", image:"images/action3.jpg", trailer:"https://www.youtube.com/embed/L6P3nI6VnlY" },
  { title:"Nobody", category:"action", image:"images/action4.jpg", trailer:"https://www.youtube.com/embed/wZti8QKBWPo" },
  { title:"The Equalizer", category:"action", image:"images/action5.jpg", trailer:"https://www.youtube.com/embed/VjctHUEmutw" },
  { title:"Top Gun Maverick", category:"action", image:"images/action6.jpg", trailer:"https://www.youtube.com/embed/giXco2jaZ_4" },
  { title:"Bullet Train", category:"action", image:"images/action7.jpg", trailer:"https://www.youtube.com/embed/0IOsk2Vlc4o" },
  { title:"The Raid", category:"action", image:"images/action8.jpg", trailer:"https://www.youtube.com/embed/m6Q7KnXpNOg" },
  { title:"Fast X", category:"action", image:"images/action9.jpg", trailer:"https://www.youtube.com/embed/32RAq6JzY-w" },
  { title:"The Gray Man", category:"action", image:"images/action10.jpg", trailer:"https://www.youtube.com/embed/BmllggGO4pM" },
  { title:"Atomic Blonde", category:"action", image:"images/action11.jpg", trailer:"https://www.youtube.com/embed/aieQrj9Yy8s" },
  { title:"Sisu", category:"action", image:"images/action12.jpg", trailer:"https://www.youtube.com/embed/d2k4QAItiSA" },
  { title:"The Accountant", category:"action", image:"images/action13.jpg", trailer:"https://www.youtube.com/embed/DBfsgcswlYQ" },
  { title:"Jack Reacher", category:"action", image:"images/action14.jpg", trailer:"https://www.youtube.com/embed/2QY-4Y_XL5s" },
  { title:"Olympus Has Fallen", category:"action", image:"images/action15.jpg", trailer:"https://www.youtube.com/embed/arQxj-WtApw" },
  { title:"The Transporter", category:"action", image:"images/action16.jpg", trailer:"https://www.youtube.com/embed/0poXFSvX0_4" },
  { title:"Taken", category:"action", image:"images/action17.jpg", trailer:"https://www.youtube.com/embed/uPJVJBm9TPA" },

  // HORROR
  { title:"The Conjuring", category:"horror", image:"images/img1.jpg", trailer:"https://www.youtube.com/embed/k10ETZ41q5o" },
  { title:"IT", category:"horror", image:"images/img2.jpg", trailer:"https://www.youtube.com/embed/xKJmEC5ieOk" },
  { title:"Annabelle", category:"horror", image:"images/horror1.jpg", trailer:"https://www.youtube.com/embed/paFgQNPGlsg" },
  { title:"The Nun", category:"horror", image:"images/horror2.jpg", trailer:"https://www.youtube.com/embed/pzD9zGcUNrw" },
  { title:"Hereditary", category:"horror", image:"images/horror3.jpg", trailer:"https://www.youtube.com/embed/V6wWKNij_1M" },
  { title:"A Quiet Place", category:"horror", image:"images/horror4.jpg", trailer:"https://www.youtube.com/embed/WR7cc5t7tv8" },
  { title:"Halloween", category:"horror", image:"images/horror5.jpg", trailer:"https://www.youtube.com/embed/xLfKzJ4QX8I" },
  { title:"The Exorcist", category:"horror", image:"images/horror6.jpg", trailer:"https://www.youtube.com/embed/YDGw1MTEe9k" },
  { title:"Scream", category:"horror", image:"images/horror7.jpg", trailer:"https://www.youtube.com/embed/23yT0y5mG3s" },
  { title:"Insidious", category:"horror", image:"images/img3.jpg", trailer:"https://www.youtube.com/embed/zuZnRUcoWos" },
  { title:"The Ring", category:"horror", image:"images/horror8.jpg", trailer:"https://www.youtube.com/embed/yzR2GY-ew8I" },
  { title:"Sinister", category:"horror", image:"images/horror9.jpg", trailer:"https://www.youtube.com/embed/_kbQAJR9YWQ" },
  { title:"The Grudge", category:"horror", image:"images/horror10.jpg", trailer:"https://www.youtube.com/embed/O2NKzO-fxwQ" },
  { title:"Paranormal Activity", category:"horror", image:"images/horror11.jpg", trailer:"https://www.youtube.com/embed/F_UxLEqd074" },
  { title:"Midsommar", category:"horror", image:"images/horror12.jpg", trailer:"https://www.youtube.com/embed/1Vnghdsjmd0" },
  { title:"The Babadook", category:"horror", image:"images/horror13.jpg", trailer:"https://www.youtube.com/embed/k5WQZzDRVtw" },
  { title:"Lights Out", category:"horror", image:"images/horror14.jpg", trailer:"https://www.youtube.com/embed/6LiKKFZyhRU" },
  { title:"Evil Dead", category:"horror", image:"images/horror15.jpg", trailer:"https://www.youtube.com/embed/Nr5sJ0bLk0Q" },
  { title:"It Chapter Two", category:"horror", image:"images/horror16.jpg", trailer:"https://www.youtube.com/embed/xhJ5P7Up3jA" },
  { title:"The Texas Chainsaw Massacre", category:"horror", image:"images/horror17.jpg", trailer:"https://www.youtube.com/embed/znmZoVkCjpI" },

  // SCI-FI
  { title:"Dune Part Two", category:"scifi", image:"images/img7.jpg", trailer:"https://www.youtube.com/embed/Way9Dexny3w" },
  { title:"Interstellar", category:"scifi", image:"images/img8.jpg", trailer:"https://www.youtube.com/embed/zSWdZVtXT7E" },
  { title:"Avatar", category:"scifi", image:"images/img9.jpg", trailer:"https://www.youtube.com/embed/d9MyW72ELq0" },
  { title:"Blade Runner 2049", category:"scifi", image:"images/scifi1.jpg", trailer:"https://www.youtube.com/embed/gCcx85zbxz4" },
  { title:"The Matrix", category:"scifi", image:"images/scifi2.jpg", trailer:"https://www.youtube.com/embed/vKQi3bBA1y8" },
  { title:"The Matrix Reloaded", category:"scifi", image:"images/scifi3.jpg", trailer:"https://www.youtube.com/embed/kYzz0FSgpSU" },
  { title:"The Matrix Revolutions", category:"scifi", image:"images/scifi4.jpg", trailer:"https://www.youtube.com/embed/hMbexEPAOQI" },
  { title:"Inception", category:"scifi", image:"images/scifi5.jpg", trailer:"https://www.youtube.com/embed/YoHD9XEInc0" },
  { title:"Tenet", category:"scifi", image:"images/scifi6.jpg", trailer:"https://www.youtube.com/embed/L3pk_TBkihU" },
  { title:"Edge of Tomorrow", category:"scifi", image:"images/scifi7.jpg", trailer:"https://www.youtube.com/embed/yUmSVcttXnI" },
  { title:"Ready Player One", category:"scifi", image:"images/scifi8.jpg", trailer:"https://www.youtube.com/embed/cSp1dM2Vj48" },
  { title:"Elysium", category:"scifi", image:"images/scifi19.jpg", trailer:"https://www.youtube.com/embed/oIBtePb-dGY" },
  { title:"Oblivion", category:"scifi", image:"images/scifi20.jpg", trailer:"https://www.youtube.com/embed/XmIIgE7eSak" },
  { title:"I Am Legend", category:"scifi", image:"images/scifi21.jpg", trailer:"https://www.youtube.com/embed/dtKMEAXyPkg" },
  { title:"Minority Report", category:"scifi", image:"images/scifi22.jpg", trailer:"https://www.youtube.com/embed/aGWJk1P7kHI" },
  { title:"War of the Worlds", category:"scifi", image:"images/scifi23.jpg", trailer:"https://www.youtube.com/embed/SM6aov1m2lQ" },
  { title:"District 9", category:"scifi", image:"images/scifi24.jpg", trailer:"https://www.youtube.com/embed/DyLUwOcR5pk" },
  { title:"The Fifth Element", category:"scifi", image:"images/scifi25.jpg", trailer:"https://www.youtube.com/embed/fQ9RqgcR24g" },

  // THRILLER
  { title:"Shutter Island", category:"thriller", image:"images/img10.jpg", trailer:"https://www.youtube.com/embed/5iaYLCiq5RM" },
  { title:"Inception", category:"thriller", image:"images/img11.jpg", trailer:"https://www.youtube.com/embed/YoHD9XEInc0" },
  { title:"The Prestige", category:"thriller", image:"images/img12.jpg", trailer:"https://www.youtube.com/embed/o4gHCmTQDVI" },
  { title:"Gone Girl", category:"thriller", image:"images/thriller1.jpg", trailer:"https://www.youtube.com/embed/2-_-1nJf8Vg" },
  { title:"Prisoners", category:"thriller", image:"images/thriller2.jpg", trailer:"https://www.youtube.com/embed/bpXfcTF6iVk" },
  { title:"Zodiac", category:"thriller", image:"images/thriller3.jpg", trailer:"https://www.youtube.com/embed/0i8wkmTgQ0U" },
  { title:"Seven", category:"thriller", image:"images/thriller4.jpg", trailer:"https://www.youtube.com/embed/znmZoVkCjpI" },
  { title:"Fight Club", category:"thriller", image:"images/thriller5.jpg", trailer:"https://www.youtube.com/embed/SUXWAEX2jlg" },
  { title:"The Girl with the Dragon Tattoo", category:"thriller", image:"images/thriller6.jpg", trailer:"https://www.youtube.com/embed/DqQe3OrsMKI" },
  { title:"Black Swan", category:"thriller", image:"images/thriller7.jpg", trailer:"https://www.youtube.com/embed/5jaI1XOB-bs" },
  { title:"No Country for Old Men", category:"thriller", image:"images/thriller8.jpg", trailer:"https://www.youtube.com/embed/38A__WT3-o0" },
  { title:"Gone Baby Gone", category:"thriller", image:"images/thriller9.jpg", trailer:"https://www.youtube.com/embed/vjz9c1n0d7k" },
  { title:"The Sixth Sense", category:"thriller", image:"images/thriller10.jpg", trailer:"https://www.youtube.com/embed/3-ZP95NF_Wk" },
  { title:"Oldboy", category:"thriller", image:"images/thriller11.jpg", trailer:"https://www.youtube.com/embed/2HkjrJ6IK5E" },
  { title:"Memento", category:"thriller", image:"images/thriller12.jpg", trailer:"https://www.youtube.com/embed/0vS0E9bBSL0" },
  { title:"Nightcrawler", category:"thriller", image:"images/thriller13.jpg", trailer:"https://www.youtube.com/embed/XU6D2y1a0eQ" },
  { title:"Enemy", category:"thriller", image:"images/thriller14.jpg", trailer:"https://www.youtube.com/embed/FJuaAWrgoUY" },
  { title:"Wind River", category:"thriller", image:"images/thriller15.jpg", trailer:"https://www.youtube.com/embed/Aw7Eln_xu-w" },

  // FANTASY
  { title:"Harry Potter", category:"fantasy", image:"images/img13.jpg", trailer:"https://www.youtube.com/embed/VyHV0BRtdxo" },
  { title:"Lord Of The Rings", category:"fantasy", image:"images/img14.jpg", trailer:"https://www.youtube.com/embed/V75dMMIW2B4" },
  { title:"Pirates Of Caribbean", category:"fantasy", image:"images/img15.jpg", trailer:"https://www.youtube.com/embed/naQr0uTrH_s" },
  { title:"The Chronicles of Narnia", category:"fantasy", image:"images/fantasy1.jpg", trailer:"https://www.youtube.com/embed/3mKPrxjwFQY" },
  { title:"Fantastic Beasts and Where to Find Them", category:"fantasy", image:"images/fantasy2.jpg", trailer:"https://www.youtube.com/embed/ViuDsy7yb8M" },
  { title:"Fantastic Beasts: The Crimes of Grindelwald", category:"fantasy", image:"images/fantasy3.jpg", trailer:"https://www.youtube.com/embed/vvFybpmyB9E" },
  { title:"Fantastic Beasts: The Secrets of Dumbledore", category:"fantasy", image:"images/fantasy4.jpg", trailer:"https://www.youtube.com/embed/Y9dr2zw-TXQ" },
  { title:"Percy Jackson & The Olympians", category:"fantasy", image:"images/fantasy5.jpg", trailer:"https://www.youtube.com/embed/TKDuGJ2r6xk" },
  { title:"Stardust", category:"fantasy", image:"images/fantasy6.jpg", trailer:"https://www.youtube.com/embed/t4DqzYw7R7A" },
  { title:"The Hobbit: An Unexpected Journey", category:"fantasy", image:"images/fantasy7.jpg", trailer:"https://www.youtube.com/embed/JTSoD4BBCJc" },
  { title:"The Hobbit: The Desolation of Smaug", category:"fantasy", image:"images/fantasy8.jpg", trailer:"https://www.youtube.com/embed/OPVWy1tFXuc" },
  { title:"The Hobbit: The Battle of the Five Armies", category:"fantasy", image:"images/fantasy9.jpg", trailer:"https://www.youtube.com/embed/iVAgTiBrrDA" },
  { title:"Alice in Wonderland", category:"fantasy", image:"images/fantasy10.jpg", trailer:"https://www.youtube.com/embed/9POCgSRVvf0" },
  { title:"Maleficent", category:"fantasy", image:"images/fantasy11.jpg", trailer:"https://www.youtube.com/embed/6nzNdp1l8k4" },
  { title:"Maleficent: Mistress of Evil", category:"fantasy", image:"images/fantasy12.jpg", trailer:"https://www.youtube.com/embed/n0OFH4xpPr4" },
  { title:"Doctor Strange", category:"fantasy", image:"images/fantasy13.jpg", trailer:"https://www.youtube.com/embed/HSzx-zryEgM" },
  { title:"Doctor Strange in the Multiverse of Madness", category:"fantasy", image:"images/fantasy14.jpg", trailer:"https://www.youtube.com/embed/aWzlQ2N6qqg" },
  { title:"The Golden Compass", category:"fantasy", image:"images/fantasy15.jpg", trailer:"https://www.youtube.com/embed/EYVJ1z1jz2A" },

  // COMEDY
  { title:"The Hangover", category:"comedy", image:"images/img16.jpg", trailer:"https://www.youtube.com/embed/tcdUhdOlz9M" },
  { title:"Free Guy", category:"comedy", image:"images/img17.jpg", trailer:"https://www.youtube.com/embed/X2m-08cOAbc" },
  { title:"Home Alone", category:"comedy", image:"images/img18.jpg", trailer:"https://www.youtube.com/embed/jEDaVHmw7r4" },
  { title:"Superbad", category:"comedy", image:"images/comedy1.jpg", trailer:"https://www.youtube.com/embed/4eaZ_48ZYog" },
  { title:"Step Brothers", category:"comedy", image:"images/comedy2.jpg", trailer:"https://www.youtube.com/embed/CewglxElBK0" },
  { title:"Dumb and Dumber", category:"comedy", image:"images/comedy3.jpg", trailer:"https://www.youtube.com/embed/l13yPhimE3o" },
  { title:"We’re the Millers", category:"comedy", image:"images/comedy4.jpg", trailer:"https://www.youtube.com/embed/0Vsy5KzsieQ" },
  { title:"Central Intelligence", category:"comedy", image:"images/comedy5.jpg", trailer:"https://www.youtube.com/embed/F7v4N6Zxg9M" },
  { title:"Jumanji: Welcome to the Jungle", category:"comedy", image:"images/comedy6.jpg", trailer:"https://www.youtube.com/embed/2QKg5SZ_35I" },
  { title:"Jumanji: The Next Level", category:"comedy", image:"images/comedy7.jpg", trailer:"https://www.youtube.com/embed/rBxcF-r9Ibs" },
  { title:"Grown Ups", category:"comedy", image:"images/comedy8.jpg", trailer:"https://www.youtube.com/embed/qX5aA8a6r2Q" },
  { title:"Grown Ups 2", category:"comedy", image:"images/comedy9.jpg", trailer:"https://www.youtube.com/embed/1XQq8bXk6pQ" },
  { title:"The Mask", category:"comedy", image:"images/comedy10.jpg", trailer:"https://www.youtube.com/embed/LVqK4Xh9x4g" },
  { title:"Night at the Museum", category:"comedy", image:"images/comedy11.jpg", trailer:"https://www.youtube.com/embed/1Q7p0gX5q2E" },
  { title:"Night at the Museum 2", category:"comedy", image:"images/comedy12.jpg", trailer:"https://www.youtube.com/embed/4YJ8X5r3v0I" },
  { title:"Meet the Parents", category:"comedy", image:"images/comedy13.jpg", trailer:"https://www.youtube.com/embed/2Y9Gq1p5d6U" },
  { title:"Meet the Fockers", category:"comedy", image:"images/comedy14.jpg", trailer:"https://www.youtube.com/embed/6p3oZ7bQx8Y" },
  { title:"Pitch Perfect", category:"comedy", image:"images/comedy15.jpg", trailer:"https://www.youtube.com/embed/8dItOM6eYXY" },

  // ROMANCE
  { title:"Titanic", category:"romance", image:"images/img19.jpg", trailer:"https://www.youtube.com/embed/kVrqfYjkTdQ" },
  { title:"The Notebook", category:"romance", image:"images/img20.jpg", trailer:"https://www.youtube.com/embed/FC6biTjEyZw" },
  { title:"La La Land", category:"romance", image:"images/romance1.jpg", trailer:"https://www.youtube.com/embed/0pdqf4P9MB8" },
  { title:"A Walk to Remember", category:"romance", image:"images/romance2.jpg", trailer:"https://www.youtube.com/embed/Ag6yGJyi1gM" },
  { title:"Me Before You", category:"romance", image:"images/romance3.jpg", trailer:"https://www.youtube.com/embed/Eh993__rOxA" },
  { title:"The Fault in Our Stars", category:"romance", image:"images/romance4.jpg", trailer:"https://www.youtube.com/embed/9ItBvH5J6ss" },
  { title:"P.S. I Love You", category:"romance", image:"images/romance5.jpg", trailer:"https://www.youtube.com/embed/8Y5pQnZ3k3Q" },
  { title:"Dear John", category:"romance", image:"images/romance6.jpg", trailer:"https://www.youtube.com/embed/8Zc8KxF0m3Q" },
  { title:"The Vow", category:"romance", image:"images/romance7.jpg", trailer:"https://www.youtube.com/embed/7vJ7c2vQ9xI" },
  { title:"Twilight", category:"romance", image:"images/romance8.jpg", trailer:"https://www.youtube.com/embed/QDRLSqm_WVg" },
  { title:"New Moon", category:"romance", image:"images/romance9.jpg", trailer:"https://www.youtube.com/embed/ky5l9iQ9cX0" },
  { title:"Eclipse", category:"romance", image:"images/romance10.jpg", trailer:"https://www.youtube.com/embed/4GZ8J7bQ0xQ" },
  { title:"Breaking Dawn Part 1", category:"romance", image:"images/romance11.jpg", trailer:"https://www.youtube.com/embed/0gQ0bY9n4xQ" },
  { title:"Breaking Dawn Part 2", category:"romance", image:"images/romance12.jpg", trailer:"https://www.youtube.com/embed/2I5m7pY0Q2Q" },
  { title:"After", category:"romance", image:"images/romance13.jpg", trailer:"https://www.youtube.com/embed/2S5x7qQ9a0E" },
  { title:"The Best of Me", category:"romance", image:"images/romance14.jpg", trailer:"https://www.youtube.com/embed/5vF4G9j2e8Q" },
  { title:"Safe Haven", category:"romance", image:"images/romance15.jpg", trailer:"https://www.youtube.com/embed/8R7iG9h5p1A" },
  { title:"The Time Traveler’s Wife", category:"romance", image:"images/romance16.jpg", trailer:"https://www.youtube.com/embed/7s0YQm0k8pQ" }
];

let currentMovie = null;

// ----------------------
// FEATURED MOVIE
// ----------------------
function setFeaturedMovie(movie) {

    currentMovie = movie;

    $("#movieTitle").text(movie.title);

    $("#hero").css(
        "background",
        `linear-gradient(to right, rgba(0,0,0,.9), rgba(0,0,0,.3)), url('${movie.image}')`
    );

    $("#hero").css("background-size", "cover");
    $("#hero").css("background-position", "center");
}

// ----------------------
// SHOW MOVIES
// ----------------------
function showMovies(category, searchText = "") {

    let filtered = movies;

    if (category !== "all") {
        filtered = filtered.filter(m => m.category === category);
    }

    if (searchText.trim() !== "") {
        filtered = filtered.filter(m =>
            m.title.toLowerCase().includes(searchText.toLowerCase())
        );
    }

    let output = "";

    filtered.forEach(movie => {

        output += `
        <div class="movie">
            <img src="${movie.image}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>${movie.category}</p>
            </div>
        </div>
        `;
    });

    $("#movieContainer").html(output);

    $(".movie").click(function () {

        let index = $(this).index();
        let movie = filtered[index];

        setFeaturedMovie(movie);
        openMovieModal(movie);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ----------------------
// MODAL OPEN
// ----------------------
function openMovieModal(movie) {

    $("#modalPoster").attr("src", movie.image);
    $("#modalTitle").text(movie.title);
    $("#modalDesc").text("Watch trailer for " + movie.title);

    $("#youtubePlayer").attr("src", "");
    $("#youtubePlayer").hide();
    $(".movie-preview").show();

    $(".modal").css("display", "flex");
}

// ----------------------
// INIT
// ----------------------
showMovies("all");

// ----------------------
// CATEGORY CLICK
// ----------------------
$("#categories li").click(function () {

    $("#categories li").removeClass("active");
    $(this).addClass("active");

    let category = $(this).data("category");
    let searchValue = $("#searchInput").val() || "";

    showMovies(category, searchValue);
});

// ----------------------
// SEARCH BAR
// ----------------------
$(document).on("input", "#searchInput", function () {

    let value = $(this).val();
    let category = $("#categories li.active").data("category");

    showMovies(category, value);
});

// ----------------------
// WATCH TRAILER BUTTON (MAIN HERO)
// ----------------------
$("#watchTrailer").click(function () {

    $("#youtubePlayer").attr(
        "src",
        currentMovie.trailer + "?autoplay=1"
    );

    $(".movie-preview").hide();
    $("#youtubePlayer").show();

    $(".modal").css("display", "flex");
});

// ----------------------
// WATCH BUTTON IN MODAL
// ----------------------
$(document).on("click", "#modalWatchBtn", function () {

    $("#youtubePlayer").attr(
        "src",
        currentMovie.trailer + "?autoplay=1"
    );

    $(".movie-preview").hide();
    $("#youtubePlayer").show();
});

// ----------------------
// CLOSE MODAL
// ----------------------
$("#closeVideo").click(function () {

    $("#youtubePlayer").attr("src", "");
    $(".modal").hide();

    $("#youtubePlayer").hide();
    $(".movie-preview").show();
});