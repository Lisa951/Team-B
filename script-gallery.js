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
