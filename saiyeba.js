const lyrics = [
  "Haal jo mera hai main kisko bataun meri....,",
  "Sahiba dil naa kiraaye ka,",
  "Thoda toh sambhaalo naa,",
  "Naazuk hai yeh toot jaata hai",
  "Sahiba neendein veendein aaye naa",
  "Raatein kaati jaaye naa",
  "Tera hi khayaal din rain aata hai!",
];

function displayLyricsWithDelay(lines, delay) {
  lines.forEach((line, index) => {
    setTimeout(() => {
      console.log(line);
    }, index * delay);
  });
}

// Display each word with a 2-second delay
displayLyricsWithDelay(lyrics, 4000);
