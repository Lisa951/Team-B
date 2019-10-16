function galleryImageOiaTownSantoriniGreece() {
    document.getElementById("oia-town-santorini-greece").innerHTML = "Oia or Ia (Greek: Οία, pronounced [ˈi.a]) is a small village and former community in the South Aegean on the islands of Thira (Santorini) and Therasia, in the Cyclades, Greece. Since the 2011 local government reform it has been part of the municipality of Santorini, of which it is a municipal unit. It covers the whole island of Therasia and the northwesternmost part of Santorini, which it shares with the municipal unit of Santorini. The main street is named Nikolaou Nomikou. The population was 1,545 inhabitants at the 2011 census, and the land area is 19.449 km2. Oia was previously known as Apano Meria (Απάνω Μεριά or Επάνω Μεριά, 'upper side'), a name which still occurs locally as Pano Meria, and the inhabitants are still called Apanomerites (Απανωμερίτες). The Ancient Greek Oia was one of the two harbours of ancient Thera and was located in the southeast of the island, where Kamari is now. Oia reached the peak of prosperity in the late 19th and early 20th centuries. Its economic prosperity was based on its merchant fleet, which plied trade in the Eastern Mediterranean, especially from Alexandria to Russia. The two-story captains' houses built on the highest part of the village are a reminder of the village's former affluence. Part of the town was destroyed by the 1956 earthquake."
}

function galleryImageZakynthosGreece() {
    document.getElementById("zakynthos-greece").innerHTML = "Zakynthos (also spelled Zakinthos; Greek: Ζάκυνθος, romanized: Zákynthos [ˈzacinθos] (About this soundlisten); Italian: Zacinto [dzaˈtʃinto]) or Zante (Greek: Τζάντε, romanized: Tzánte; /ˈzænti/, also US: /ˈzɑːnteɪ/, Italian: [ˈdzante]; [ˈdza(n)de]; from the Venetian form) is a Greek island in the Ionian Sea. It is the third largest of the Ionian Islands. Zakynthos is a separate regional unit of the Ionian Islands region, and its only municipality. It covers an area of 405.55 km2 (156.6 sq mi) and its coastline is roughly 123 km (76 mi) in length. The name, like all similar names ending in -nthos, is pre-Mycenaean or Pelasgian in origin. In Greek mythology the island was said to be named after Zakynthos, the son of the legendary Arcadian chief Dardanus. Zakynthos is a tourist destination, with an international airport served by charter flights from northern Europe. The island's nickname is 'the Flower of the Levant', bestowed upon it by the Venetians who were in possession of Zakynthos from 1484–1797.";
}

function galleryImageCreteGreece() {
    document.getElementById("crete-greece").innerHTML = "Crete (Greek: Κρήτη, Kríti ['kriti]; Ancient Greek: Κρήτη, Krḗtē) is the largest and most populous of the Greek islands, the 88th largest island in the world and the fifth largest island in the Mediterranean Sea, after Sicily, Sardinia, Cyprus, and Corsica. It bounds the southern border of the Aegean sea. Crete lies approximately 160 km (99 mi) south of the Greek mainland. It has an area of 8,336 km2 (3,219 sq mi) and a coastline of 1,046 km (650 mi). Crete and a number of surrounding islands and islets constitute the region of Crete (Greek: Περιφέρεια Κρήτης), the southernmost of the 13 top-level administrative units of Greece; the region is the fifth most populous region of Greece. Its capital and largest city is Heraklion, located on the northern shore of the island. As of 2011, the region had a population of 623,065. The Dodecanese are located to the northeast of Crete, while the Cyclades are situated to the north, separated by the Sea of Crete. The Peloponnese is to the region's northwest.";
}



//Breadcrumbs based on URL location
if ($('#siteBreadcrumb ol.breadcrumb')) {
  var here = location.href.replace(/(\?.*)$/, '').split('/').slice(3);

  var parts = [{
    "text": 'Home',
    "link": '/'
  }];

  for (var j = 0; j < here.length; j++) {
    var part = here[j];
    var pageName = part.toLowerCase();
    pageName = part.charAt(0).toUpperCase() + part.slice(1);
    var link = '/' + here.slice(0, j + 1).join('/');
    $('#siteBreadcrumb ol.breadcrumb').append('<li><a href="' + link + '">' + pageName.replace(/\.(htm[l]?|asp[x]?|php|jsp)$/, '') + '</a></li>');
    parts.push({
      "text": pageName,
      "link": link
    });
  }
}

/* To go in HTML page */
/* <div class="container">
<nav id="siteBreadcrumb">
    <ol class="breadcrumb">
        <li><a href="/">Home</a></li>
        <li><a href="/#">Section</a></li>
        <li><a href="/#">Page</a></li>
    </ol>
</nav>
</div> */