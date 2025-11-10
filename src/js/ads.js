const adLinks = [
  "https://badads.cs.washington.edu/screenshots/1462372.webp",
  "https://badads.cs.washington.edu/screenshots/1462915.webp",
  "https://badads.cs.washington.edu/screenshots/1462852.webp",
  "https://badads.cs.washington.edu/screenshots/1462827.webp",
  "https://badads.cs.washington.edu/screenshots/1462849.webp",
  "https://badads.cs.washington.edu/screenshots/1462772.webp",
  "https://badads.cs.washington.edu/screenshots/1462747.webp",
  "https://badads.cs.washington.edu/screenshots/1462524.webp",
  "https://badads.cs.washington.edu/screenshots/1462549.webp",
  "https://badads.cs.washington.edu/screenshots/1462538.webp",
  "https://badads.cs.washington.edu/screenshots/1462575.webp",
  "https://badads.cs.washington.edu/screenshots/1462385.webp",
  "https://badads.cs.washington.edu/screenshots/1461709.webp",
  "https://badads.cs.washington.edu/screenshots/1462354.webp",
  "https://badads.cs.washington.edu/screenshots/1461654.webp",
  "https://badads.cs.washington.edu/screenshots/1463524.webp",
  "https://badads.cs.washington.edu/screenshots/1463520.webp",
  "https://badads.cs.washington.edu/screenshots/1466200.webp",
  "https://badads.cs.washington.edu/screenshots/1466412.webp",
  "https://badads.cs.washington.edu/screenshots/1466420.webp",
  "https://badads.cs.washington.edu/screenshots/1466870.webp",
  "https://badads.cs.washington.edu/screenshots/1466501.webp",
  "https://badads.cs.washington.edu/screenshots/1466963.webp",
  "https://badads.cs.washington.edu/screenshots/1473914.webp",
  "https://badads.cs.washington.edu/screenshots/1474632.webp",
  "https://badads.cs.washington.edu/screenshots/1473802.webp",
  "https://badads.cs.washington.edu/screenshots/1465717.webp",
  "https://badads.cs.washington.edu/screenshots/1465218.webp",
  "https://badads.cs.washington.edu/screenshots/1478616.webp",
  "https://badads.cs.washington.edu/screenshots/1473380.webp",
  "https://badads.cs.washington.edu/screenshots/1470429.webp",
  "https://badads.cs.washington.edu/screenshots/1470265.webp",
  "https://badads.cs.washington.edu/screenshots/1466501.webp",
  "https://badads.cs.washington.edu/screenshots/1472421.webp",
  "https://badads.cs.washington.edu/screenshots/1480596.webp",
  "https://badads.cs.washington.edu/screenshots/1478691.webp",
  "https://badads.cs.washington.edu/screenshots/1471178.webp",
  "https://badads.cs.washington.edu/screenshots/1462385.webp",
  "https://badads.cs.washington.edu/screenshots/1479017.webp",
  "https://badads.cs.washington.edu/screenshots/1478922.webp",
  "https://badads.cs.washington.edu/screenshots/1478673.webp",
  "https://badads.cs.washington.edu/screenshots/1473738.webp",
  "https://badads.cs.washington.edu/screenshots/1475019.webp",
  "https://badads.cs.washington.edu/screenshots/1474994.webp",
  "https://badads.cs.washington.edu/screenshots/1473773.webp",
  "https://badads.cs.washington.edu/screenshots/1471216.webp",
  "https://badads.cs.washington.edu/screenshots/1468503.webp",
  "https://badads.cs.washington.edu/screenshots/1465363.webp",
  "https://badads.cs.washington.edu/screenshots/1475997.webp",
  "https://badads.cs.washington.edu/screenshots/1468584.webp",
  "https://badads.cs.washington.edu/screenshots/1463581.webp"
];


function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}


function createAdElement(imageUrl, index) {
  return `
    <div class="ad-item" data-ad-id="${index}">
      <img src="${imageUrl}" alt="Advertisement ${index + 1}">
    </div>
  `;
}

function loadAds() {
  const adsPerSide = adLinks.length/2; // Number of ads per sidebar
  
  // Left sidebar ads
  const leftAds = adLinks.slice(0, adsPerSide);
  leftAds.forEach((ad, index) => {
    $('#left-ads').append(createAdElement(ad, index));
  });
  // Right sidebar ads
  const rightAds = adLinks.slice(adsPerSide, adsPerSide * 2);
  rightAds.forEach((ad, index) => {
    $('#right-ads').append(createAdElement(ad, index + adsPerSide));
  });
}

$(() => {
  shuffle(adLinks);
  
  // Initialize ads
  loadAds();
});