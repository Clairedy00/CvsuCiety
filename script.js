const articles = [
  {
    title: "Tagisan ng obra, kulay, at talento sa LCAF 2025",
    author: "Mae Adelaine Alarcon",
    photoCredit: "Claire Dytioco",
    img: "photo1.jpg",
    fullContent: `
      <em><strong>Tagisan ng obra, kulay, at talento sa LCAF 2025</strong></em><br><br>
      <strong>by Mae Adelaine Alarcon</strong><br>
      Photo Courtesy: Claire Dytioco<br><br>
      Tahimik ngunit nababalot ng kulay ang aklatan ng Cavite State University Imus campus para sa pencil drawing, charcoal rendering, poster making, at live painting contest para sa ginanap na Local Culture and Arts Festival 2025. Nagsimula ang paggawa ng obra umaga noong ika-11 ng Marso, unang araw ng selebrasyon.<br><br>
      Sa pamamagitan ng iba’t ibang estilo ng pagguhit, gamit ng mga pencil drawing contestants ang tropeyo and medalya bilang kanilang modelo at reperensiya, habang ang tema naman ng Local Culture and Arts Festival: “Kultura’t Sining, Tanglaw ng Makabagong Panahon” ang naging inspirasyon ng mga poster making contestants.<br><br>
      Samantala, imahe naman ng tinaguriang Queen of the Philippine Cinema na si Ginang Gloria Romero ang naging basehan ng mga charcoal rendering contestants. Panghuli ay ang entrada naman ng CvSU-Imus ang ibinida ng mga live painting contestants.<br><br>
      Sa kabila ng tumatakbong oras, nasungkit ni Aliana Keith Morales mula sa ALTAS ang ginto sa kategorya ng pencil drawing contest. Mula rin sa ALTAS, idineklara ring kampeon na si John Paul Parale sa poster making contest. Nagwagi rin si Jamaica Honrales sa kategorya ng live painting at nakatanggap ng 91.5% bilang iskor mula sa mga hurado. Panghuli ay natamo rin ni Binibining Micky Ann Prestoza ng Educators’ Guild For Excellence ang panalo sa charcoal rendering.<br><br>
      Samantala, sina Binibining Krisha Rodis, Ginoong Noah Manalo, at mga naging Presidente ng ALTAS Visual Arts Organization: Binibining Vejee Lavendia, at Binibining Zyrene Valvoncha ang mga nagsilbing hurado sa visual arts category.
    `
  },
  {
    title: "Laban ng de Kuwerdas na Instrumento ngayong LCAF 2025",
    author: "Mae Adelaine Alarcon",
    photoCredit: "Claire Dytioco",
    img: "ART2.JPG",
    fullContent: `
      <em><strong>Laban ng de Kuwerdas na Instrumento ngayong LCAF 2025</strong></em><br><br>
      <strong>by Mae Adelaine Alarcon</strong><br>
      Photo Courtesy: Claire Dytioco<br><br>
      Nota mula sa iba’t ibang instrumento ang bumalot sa Cavite State University Imus Gymnasium noong ika-13 ng Marso sa huling araw ng Local Culture and Arts Festival 2025. Nagdaos ng patimpalak sa musical instruments sa larangan ng violin, classic guitar, at banduria.<br><br>
      Bilang mga kampeon, nasungkit nina Christofer Marky C. Gomez at Jeremie A. Canosa ang ginto sa pagtugtog ng banduria at classic guitar sa kantang “Karatong” na may 95.5% na kabuuang iskor.<br><br>
      Idineklara namang wagi si John Josel Parole sa pagtugtog ng kantang “Ride Home” ng Ben&Ben gamit ang violin na nakatanggap ng 94% na iskor.<br><br>
      Sa panghuli, pinarangalan din ng ginto si Adriane Ravil G. Reliosa sa pagtugtog ng classic guitar sa kantang “Kanlungan” ni Noel Cabangon at nakatanggap naman ng 95.5% mula sa mga hurado. Naghatid ng tagos-pusong intermission number ang isa sa mga kalahok: Ginoong John Jose Parole gamit ang naman kaniyang keyboard piano, itinanghal niya ang kantang “Araw Gabi” bago ang pag-kilala sa mga nagwaging kalahok sa iba’t ibang instrumento.<br><br>
      Samantala, nakatanggap naman ng mga sertipiko ng pagkilala ang mga huradong sina: Ginoong Paul John Esternino at Ginoong Jasper T. Legaspi. Malugod ding nagbigay ng mga komento at payo si Ginoong Esternino sa bawat kalahok mula sa pagpili ng kantang itatanghal hanggang sa mga bilis ng ritmo.
    `
  },
  {
    title: "Sa Pag-Iyak at Pag-Tawa, sa Sinag-Tala ang Korona",
    author: "Mae Adelaine Alarcon",
    photoCredit: "The Flare",
    img: "ART3.png",
    fullContent: `
      <em><strong>Sa Pag-Iyak at Pag-Tawa, sa Sinag-Tala ang Korona</strong></em><br><br>
      <strong>by Mae Adelaine Alarcon</strong><br>
      Photo Courtesy: The Flare<br><br>
      Hindi nagpahuli ang Dramatic Arts Contest na ginanap noong ika-11 ng Marso 2025 sa CvSU-Imus Gymnasium. Ipinamalas ng mga aktor mula sa Sinag-Tala Performing Arts Group ang kanilang mga emosyon sa sweet play dialogue na pinamagatang “Oras”. Ibinase ang naging dula sa tema ng Local Culture and Arts Festival: “Kultura’t Sining, Tanglaw ng Makabagong Panahon”.<br><br>
      Matapos naman ang sweet play dialogue ay ipinaabot din ng Sinag-Tala sa puso ng mga manonood ang isang musical na pinamagatang “Kumot”. Sa huli ay idineklarang kampyon ang tanging kalahok na Sinag-Tala Performing Arts Group sa kategorya ng sweet play dialogue at sweet play musical. Inaasahan na ang grupo ay ilalaban sa CvSU Main Campus sa Indang.<br><br>
      Gumanap na mga hurado sina Binibining Joanna Mae Anglit at Ginoong Kenneth Tolosa. Nagkaisa naman ang mga Kabsuhenyo sa pag-tawa at pag-suporta sa mga naging aktor ng dula.
    `
  }
];

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
