const articles = [
    {
        title: "Tagisan ng obra, kulay, at talento sa LCAF 2025",
        author: "Mae Adelaine Alarcon",
        photoCredit: "Claire Dytioco",
        img: "ART1_Cover.png",
        fullContent: `
            <em><strong>Tagisan ng obra, kulay, at talento sa LCAF 2025</strong></em><br><br>
            <strong>by Mae Adelaine Alarcon</strong><br>
            Photo Courtesy: Claire Dytioco<br><br>
            Tahimik ngunit nababalot ng kulay ang aklatan ng Cavite State University Imus campus para sa pencil drawing, charcoal rendering, poster making, at live painting contest para sa ginanap na Local Culture and Arts Festival 2025.
            <br><br>
            Nagsimula ang paggawa ng obra umaga noong Ika-11 ng Marso, unang araw ng selebrasyon. Sa pamamagitan ng iba’t ibang estilo ng pagguhit, gamit ng mga pencil drawing contestants ang tropeyo at medalya bilang kanilang modelo at reperensiya, habang ang tema naman ng Local Culture and Arts Festival: “Kultura’t Sining, Tanglaw ng Makabagong Panahon” ang naging inspirasyon ng mga poster making contestants.
            <br><br>
            Samantala, imahe naman ng tinaguriang Queen of the Philippine Cinema na si Ginang Gloria Romero ang naging basehan ng mga charcoal rendering contestants. Panghuli ay ang entrada naman ng CvSU-Imus ang ibinida ng mga live painting contestants. Sa kabila ng tumatakbong oras, nasungkit ni Aliana Keith Morales mula sa ALTAS ang ginto sa kategorya ng pencil drawing contest. Mula rin sa ALTAS, idineklara ring kampeon na si John Paul Parale sa poster making contest. Nagwagi rin si Jamaica Honrales sa kategorya ng live painting at nakatanggap ng 91.5% bilang iskor mula sa mga hurado.
            <br><br>
            Panghuli ay natamo rin ni Binibining Micky Ann Prestoza ng Educators’ Guild For Excellence ang panalo sa charcoal rendering.
            Samantala, sina Binibining Krisha Rodis, Ginoong Noah Manalo, at mga naging Presidente ng ALTAS Visual Arts Organization: Binibining Vejee Lavendia, at Binibining Zyrene Valvoncha ang mga nagsilbing hurado sa visual arts category.
            <br><br>
            <img src="ART1.Cover" alt="ali" style="width: 100%; height: auto;" />
        `
    }
];

function displayArticle(index) {
    const selected = articles[index - 1];
    const articleSection = document.getElementById("main-article");
    const title = document.getElementById("article-title");
    const content = document.getElementById("article-content");
    const image = document.getElementById("article-img");

    articleSection.style.transition = "opacity 0.3s ease-in-out";
    articleSection.style.opacity = 0;

    setTimeout(() => {
        title.innerHTML = "";
        content.innerHTML = selected.fullContent;
        image.src = selected.img;
        image.alt = selected.title;
        articleSection.style.opacity = 1;
    }, 300);
}

// time effect
function timeAgo(timestamp) {
    const now = new Date();
    const past = new Date(timestamp);
    const seconds = Math.floor((now - past) / 1000);
    
    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
        return interval + " year" + (interval === 1 ? "" : "s") + " ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
        return interval + " month" + (interval === 1 ? "" : "s") + " ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
        return interval + " day" + (interval === 1 ? "" : "s") + " ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        return interval + " hour" + (interval === 1 ? "" : "s") + " ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return interval + " minute" + (interval === 1 ? "" : "s") + " ago";
    }
    return Math.floor(seconds) + " second" + (seconds === 1 ? "" : "s") + " ago";
}


function updateAllTimestamps() {
    const timestamps = document.querySelectorAll('.timestamp');
    
    timestamps.forEach(span => {
        const timestamp = span.getAttribute('data-timestamp');
        if (timestamp) {
            span.textContent = timeAgo(timestamp);
        }
    });
}


document.addEventListener('DOMContentLoaded', function() {
    updateAllTimestamps();
    
  
    setInterval(updateAllTimestamps, 60000);
});


// Hover effect sa button
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.sidebar button');
  buttons.forEach(button => {
    button.style.backgroundColor = '#f0f0f0';
    button.style.border = 'none';
    button.style.padding = '10px';
    button.style.cursor = 'pointer';
    button.style.width = '100%';
    button.style.marginBottom = '10px';

    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = '#007bff';
      button.style.color = '#fff';
      button.style.transform = 'scale(1.03)';
      button.style.transition = 'all 0.2s ease';
    });

    button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = '#f0f0f0';
      button.style.color = '#000';
      button.style.transform = 'scale(1)';
    });
  });
});
