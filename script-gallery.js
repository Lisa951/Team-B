function galleryGreece() {
    document.getElementById("gal-desc-greece").innerHTML = "Greece, officially the Hellenic Republic (Greek Ελληνική Δημοκρατία), also known as Hellas (Greek Ελλάς), is a country located in Southeast Europe. Its population is approximately 10.7 million as of 2018. Athens is the nation's capital and largest city, followed by Thessaloniki.";
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
