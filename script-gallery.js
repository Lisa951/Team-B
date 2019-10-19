function galleryGreece() {
    document.getElementById("gal-desc-greece").innerHTML = "Greece, officially the Hellenic Republic (Greek Ελληνική Δημοκρατία), also known as Hellas (Greek Ελλάς), is a country located in Southeast Europe. Its population is approximately 10.7 million as of 2018. Athens is the nation's capital and largest city, followed by Thessaloniki.";
}

function galleryCanada() {
    document.getElementById("gal-desc-canada").innerHTML = "Canada is a country in the northern part of North America. Its ten provinces and three territories extend from the Atlantic to the Pacific and northward into the Arctic Ocean, covering 9.98 million square kilometres (3.85 million square miles), making it the world's second-largest country by total area. Its southern border with the United States, stretching some 8,891 kilometres (5,525 mi), is the world's longest bi-national land border. Canada's capital is Ottawa, and its three largest metropolitan areas are Toronto, Montreal, and Vancouver.";
}

function galleryUSA() {
    document.getElementById("gal-desc-usa").innerHTML = "The United States of America (USA), commonly known as the United States (U.S. or US) or America, is a country comprising 50 states, a federal district, five major self-governing territories, and various possessions. At 3.8 million square miles (9.8 million km squared), the United States is the world's third or fourth largest country by total area and is slightly smaller than the entire continent of Europe. With a population of over 327 million people, the U.S. is the third most populous country. The capital is Washington, D.C., and the most populous city is New York City. Most of the country is located contiguously in North America between Canada and Mexico.";
}

function galleryFrance() {
    document.getElementById("gal-desc-france").innerHTML = "France (French), officially the French Republic (French: République française), is a country whose territory consists of metropolitan France in Western Europe and several overseas regions and territories.[XIII] The metropolitan area of France extends from the Mediterranean Sea to the English Channel and the North Sea, and from the Rhine to the Atlantic Ocean. It is bordered by Belgium, Luxembourg and (Germany) to the northeast, Switzerland and Italy to the east, and Andorra and Spain to the south. The overseas territories include French Guiana in South America and several islands in the Atlantic, Pacific and Indian oceans. The country's 18 integral regions (five of which are situated overseas) span a combined area of 643,801 square kilometres (248,573 sq mi) and a total population of 67.02 million (as of July 2019). France is a unitary semi-presidential republic with its capital in Paris, the country's largest city and main cultural and commercial centre. Other major urban areas include Lyon, Marseille, Toulouse, Bordeaux, Lille and Nice.";
}

function galleryUK() {
    document.getElementById("gal-desc-uk").innerHTML = "England is a country that is part of the United Kingdom. It shares land borders with Wales to the west and Scotland to the north. The Irish Sea lies west of England and the Celtic Sea to the southwest. England is separated from continental Europe by the North Sea to the east and the English Channel to the south. The country covers five-eighths of the island of Great Britain, which lies in the North Atlantic, and includes over 100 smaller islands, such as the Isles of Scilly and the Isle of Wight.";
}

function galleryJapan() {
    document.getElementById("gal-desc-japan").innerHTML = "Japan (Japanese: 日本, Nippon [ɲippoꜜɴ] or Nihon [ɲihoꜜɴ], formally 日本国, Nippon-koku or Nihon-koku, lit. 'State of Japan') is an island country in East Asia. Located in the Pacific Ocean, it lies off the eastern coast of the Asian continent and stretches from the Sea of Okhotsk in the north to the East China Sea and the Philippine Sea in the south.";
}

function galleryItaly() {
    document.getElementById("gal-desc-italy").innerHTML = "Italy (Italian: Italia [iˈtaːlja] (About this soundlisten)), officially the Italian Republic (Italian: Repubblica Italiana [reˈpubblika itaˈljaːna]), is a European country consisting of a peninsula delimited by the Alps and surrounded by several islands. Italy is located in Southern Europe, and it is sometimes considered as part of Western Europe. The country covers a total area of 301,340 km squared (116,350 sq mi) and shares land borders with France, Switzerland, Austria, Slovenia, and the enclaved microstates of Vatican City and San Marino. Italy has a territorial exclave in Switzerland (Campione) and a maritime exclave in the Tunisian Sea (Lampedusa). With around 60 million inhabitants, Italy is the fourth-most populous member state of the European Union.";
}

function gallerySpain() {
    document.getElementById("gal-desc-spain").innerHTML = "Spain (Spanish: España [esˈpaɲa]), officially the Kingdom of Spain (Spanish: Reino de España), is a European country located in Southwestern Europe with some pockets of Spanish territory across the Strait of Gibraltar and the Atlantic Ocean. Its continental European territory is situated on the Iberian Peninsula. Its territory also includes two archipelagoes: the Canary Islands off the coast of Africa, and the Balearic Islands in the Mediterranean Sea. The African enclaves of Ceuta, Melilla, and Peñón de Vélez de la Gomera make Spain the only European country to have a physical border with an African country (Morocco). Several small islands in the Alboran Sea are also part of Spanish territory. The country's mainland is bordered to the south and east by the Mediterranean Sea except for a small land boundary with Gibraltar; to the north and northeast by France, Andorra, and the Bay of Biscay; and to the west and northwest by Portugal and the Atlantic Ocean.";
}

function galleryGermany() {
    document.getElementById("gal-desc-germany").innerHTML = "Germany (German: Deutschland, German pronunciation: [ˈdɔʏtʃlant]), officially the Federal Republic of Germany (German: Bundesrepublik Deutschland is a country in Central and Western Europe, lying between the Baltic and North Seas to the north and the Alps, Lake Constance and the High Rhine to the south. It borders Denmark to the north, Poland and the Czech Republic to the east, Austria and Switzerland to the south, France to the southwest, and Luxembourg, Belgium and the Netherlands to the west.";
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
