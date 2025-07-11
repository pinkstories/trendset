const kundenData = [
  {
    "name":"1609 Design",
    "ort":"Warwick",
    "land":"[BM] Bermuda",
    "gesperrt":false
  },
  {
    "name":"17 & Orchard Candle Co.",
    "ort":"Warwick",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"1880 Train",
    "ort":"Hill City",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"1966 Couture",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"25Hours Terminus Nord",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"2A RETAIL",
    "ort":"Nantes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"2EXCHANGE",
    "ort":"Amsterdam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"2.Heimat Spiekeroog",
    "ort":"Spiekeroog",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"2SINNE C.Aigner&M.Kerschbaumer GbR",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"2SPAN BAR BISTRO",
    "ort":"BUITENPOST",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"34 Oct",
    "ort":"Montfort l'Amaury",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"3&60",
    "ort":"Den Haag",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"4D Herzog & Vitale OG",
    "ort":"Bregenz",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"4falt",
    "ort":"Rödermark",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"4-Zimmer + Garten",
    "ort":"Offenbach a. M.",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"7 Sachen Hölzkramer",
    "ort":"Freising",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"9 CROW STREET LIMITED",
    "ort":"Dublin",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"A&A Au Cafe Des Delices",
    "ort":"Sarreguemines",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"AAF INTERIEUR- & TUINONTWERP",
    "ort":"'S-HERTOGENBOSCH",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"AA&F x KRFTWRK",
    "ort":"Seattle",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Abbattista spa",
    "ort":"Gazzada di Schianno",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"ABC Holdco, LLC",
    "ort":"New York",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"abovo",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Abovo GmbH",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Beelitz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"ac.concept GmbH & Co.KG",
    "ort":"Burgwedel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"ace + miller",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Achwiegut",
    "ort":"Wiesbaden",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"ACHWIESUESS JEWELRY",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Ackland Museum Store",
    "ort":"Chapel Hill",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"A Cool Breeze",
    "ort":"Scottsdale",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Deisenhofen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Adib, Nora",
    "ort":"Sprimont",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Adolf Würth GmbH & Co KG",
    "ort":null,
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Adolf Würth GmbH & Co. KG - Museum Würth",
    "ort":"Künzelsau",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Adorn Designs LLC",
    "ort":"Tulsa",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"AempfGmbH",
    "ort":"Lüneburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"aest.",
    "ort":"Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"After the Rain",
    "ort":"Milford Charter Township",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"A Future Perfect & Friends",
    "ort":"Athens",
    "land":"[GR] Griechenland",
    "gesperrt":false
  },
  {
    "name":"AGATE",
    "ort":"LE MANS",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"agenten.und.freunde W ",
    "ort":"München  ",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"AGENTUR FÜR WAREN",
    "ort":"Heidelberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"AGUAS FURTADAS DESIGN LDA",
    "ort":"Porto",
    "land":"[PT] Portugal",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Oberhaching",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"ah&oh!",
    "ort":"Potsdam",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"HOTEL PETRUS GMBH !!HOTEL PETRUS",
    "ort":"BRUNICO .BRUNECK. BZ",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"Akzente",
    "ort":"Nieder-Olm",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Alabama Trading Post",
    "ort":"Bienne",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"alaïa café & boutique",
    "ort":"Nantes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Alair",
    "ort":"Seattle",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"A la maison ma biche",
    "ort":"Annemasse",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Albatros",
    "ort":"Mössingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Albertine Press",
    "ort":"Cambridge",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"ALCHEMILLA S.A R.L.-S",
    "ort":"Kayl",
    "land":"[LU] Luxemburg",
    "gesperrt":false
  },
  {
    "name":"Alchemy Plants",
    "ort":"Portland",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"ALEGRE",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Aleni Alimentos SL Funky Bakers DELI",
    "ort":"Barcelona",
    "land":"[ES] Spanien",
    "gesperrt":false
  },
  {
    "name":"alexa & Ikarus",
    "ort":"Landshut",
    "land":"[DE] Deutschland",
    "gesperrt":true
  },
  {
    "name":"ALEXANDRA DE MONTEIRO BERNARDO UNIPESSOAL LDA",
    "ort":"Lisbon",
    "land":"[PT] Portugal",
    "gesperrt":false
  },
  {
    "name":"Alexandra Nurseries Limited",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Alfa Papyrus",
    "ort":"Brugge",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Alfred Shop",
    "ort":"Aix-Les-Bains",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Alida Rose",
    "ort":"Mountshannon, County Clare",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"Alini Fashion & Lifestyle",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"A Little Happy",
    "ort":"Columbia",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"A Little Wyld",
    "ort":"Delray Beach",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Alive! On 66",
    "ort":"Pawnee",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Alkali Rye",
    "ort":"Oakland",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Allerhand \/ clalue",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"alles-fuer-selbermacher Inh. Nadine Masuhr e.K.",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Allikvere",
    "ort":"Tallinn",
    "land":"[EE] Estland",
    "gesperrt":false
  },
  {
    "name":"Allium, Inc.",
    "ort":"HYANNIS",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Alma Fuerte",
    "ort":"Palma De Mallorca",
    "land":"[ES] Spanien",
    "gesperrt":false
  },
  {
    "name":"Al Mahi Fatima",
    "ort":"Chastre",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Aloft co Ltd",
    "ort":"Churchstow",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Aloha Kira",
    "ort":"Kailua",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Alois Burgschwaiger GmbH",
    "ort":"Dienten am Hochkönig",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Alpenraum",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Alpensünde GmbH & Co KG",
    "ort":"Wörthsee",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Al Ponte",
    "ort":"Bad Tölz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"ALSTERLIEBE",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Alter August",
    "ort":"Husum",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Alte Seifensiederei GmbH",
    "ort":"Bad Tölz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Frankfurt am Main",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Amani Market",
    "ort":"Brooklyn",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Amarga Vintage",
    "ort":"Salamanca",
    "land":"[ES] Spanien",
    "gesperrt":false
  },
  {
    "name":"Amazinglooks Beauty Salon",
    "ort":"Uden",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"AMAZON EU S.A.R.L.",
    "ort":"Luksemburg",
    "land":"[LU] Luxemburg",
    "gesperrt":false
  },
  {
    "name":"Amber Lounge",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"AMBIANCE ET STYLES SAR JOUTEAU",
    "ort":"CHOLET",
    "land":"[FR] Frankreich",
    "gesperrt":true
  },
  {
    "name":"ambiance florale",
    "ort":"menneval",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Ambienta",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"AMBW SPRL",
    "ort":"Waterloo",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Amezkua total design",
    "ort":"Madrid",
    "land":"[ES] Spanien",
    "gesperrt":false
  },
  {
    "name":"ANA LUISA GASPAR FONSECA AGOSTINHO",
    "ort":"ALJUBARROTA (PRAZERES)",
    "land":"[PT] Portugal",
    "gesperrt":false
  },
  {
    "name":"ANAMUNDI GmbH",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"An & An Conceptstore",
    "ort":"Fürstenfeldbruck",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Ana Zuazu Interiorismo",
    "ort":"Tudela",
    "land":"[ES] Spanien",
    "gesperrt":false
  },
  {
    "name":"andersch bunt",
    "ort":"Höchst",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Andquirky LLP T\/A &Quirky",
    "ort":"Berkhamsted",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Andrómeda",
    "ort":"Barcelona",
    "land":"[ES] Spanien",
    "gesperrt":false
  },
  {
    "name":"Angela Dreier",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"ANGELE",
    "ort":"LA CHAPELLE DE BRAIN",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Ankorstore",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Anna Broustet AMA",
    "ort":"Bordeaux",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Anna Corts & Felix Corts Lifestyle GbR",
    "ort":"Wuppertal",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Anna Fashion and Lifestyle",
    "ort":"Sligo",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"Anna+Maximilian",
    "ort":"Lauf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"annas spinnerei",
    "ort":"Kallmünz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Annes Lädele",
    "ort":"Laberweinting",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"ANNEXX pour OSSY",
    "ort":"Igny",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Annie’s Blue Ribbon General Store",
    "ort":"Brooklyn",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Anni & Otto",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Ann & Lou",
    "ort":"Eckernförde",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Ann & Lou",
    "ort":"Eckernförde",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Lutry",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Anouk Collection",
    "ort":"Holzkirchen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Anouk Collection",
    "ort":"Holzkirchen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Anselmo",
    "ort":"Thorembais-Les-Béguines",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Ansenne, Stéphanie",
    "ort":"Bruxelles",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Antares Stones GmbH",
    "ort":"Zürich",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Anziehsache",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"A&O Cologne",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"AOF BV",
    "ort":"Waregem",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Å PÄVI Concept Store",
    "ort":"Darmstadt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Apirila14",
    "ort":"Cambo-les-Bains",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Apotheca Concept Store",
    "ort":"PAIMPOL",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Apotheke Dr. Portmann AG",
    "ort":"Interlaken",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Apotheke Natura",
    "ort":"Perg",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Appisberg \/ Logistik We Love You Love GmbH",
    "ort":"Männedorf",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Après la graine, fleuriste",
    "ort":"Saint-Pierre-de-Chandieu",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"APRIL AND THE BEAR LIMITED",
    "ort":"DUBLIN",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"April Cornell",
    "ort":"Asheville",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Ararat Curiosity Shop und Verlagsgesellschaft mBH",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Arcachon O'naturel",
    "ort":"La Rochelle",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"ARDOISE ET FRAISES",
    "ort":"Falaise",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Argyle Floral Home Garden",
    "ort":"Haverford",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"A. Riepenhausen GmbH & Co. KG",
    "ort":"Hall i. T.",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Arive GmbH",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"ARKEN Museum for Moderne Kunst",
    "ort":"Ishøj",
    "land":"[DK] Dänemark",
    "gesperrt":false
  },
  {
    "name":"Armborst Eva Katharina",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"ARS LIBRI, SARL",
    "ort":"Luxembourg",
    "land":"[LU] Luxemburg",
    "gesperrt":false
  },
  {
    "name":"Arslonga AG",
    "ort":"Zürich",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"ars mundi  Edition Max Büchner GmbH",
    "ort":"Hannover",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"ART333",
    "ort":"Wädenswil",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"ART&ART&ARTS",
    "ort":"BROOKLYN",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"ARTBOX",
    "ort":"Freudenstadt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"ART Cloth + Craft",
    "ort":"Jamestown",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"ART Cloth + Craft",
    "ort":"Jamestown",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"ART & DECO",
    "ort":"Baldham",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"art effect",
    "ort":"chicago",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"art + form",
    "ort":"Dresden",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Artful Hand Gallery",
    "ort":"Chatham",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Article 27",
    "ort":"Toronto",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":"Artisans & agency",
    "ort":"Santa Cruz",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Art Ovation Hotel",
    "ort":"Sarasota",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"AR-T?s",
    "ort":"Little Rock",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"AR-T’s",
    "ort":"Little Rock",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Art-Tauk",
    "ort":"Montauk",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Arttepuy llc",
    "ort":"Rockville",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"art unlimited",
    "ort":"Neustadt an der Weinstraße",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"ASBL Les Ephémères asbl",
    "ort":"Bruxelles",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"ASBL ONE DAY ONE ACTION",
    "ort":"Bruxelles",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Ascot and Hart",
    "ort":"Richardson",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"ASDP\/TPLH",
    "ort":"Saint pierre du Perray",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"A Slower Space",
    "ort":"Liverpool",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"AS SANTAS LDA",
    "ort":"Lisboa",
    "land":"[PT] Portugal",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Karben",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"A taaable",
    "ort":"Nancy",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Atajanova Kidsfashion",
    "ort":"Zürich",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"At ease",
    "ort":"NEWQUAY, CORNWALL",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"ATELIER 33",
    "ort":"CRISNEE",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Atelier bluette",
    "ort":"Ajaccio",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Atelier BOUCHENDHOMME Tapisserie d'ameublement Amiens",
    "ort":"Amiens",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Atelier Denis Skrok",
    "ort":"Pau",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"atelierdepoy",
    "ort":"Bois Colombes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Atelier Fleur",
    "ort":"Wil",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Atelier Influences",
    "ort":"Erquy",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Atelier MSV",
    "ort":"Pontru",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Atelier Su",
    "ort":"Eglisau ZH",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Athos Objekt- und Inneneinrichtung Thomas Warnecke GmbH",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Atlantic Attic",
    "ort":"Jamestown",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Atlas",
    "ort":"Brooklyn",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Atmosphères",
    "ort":"Vichy",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Attitüden Düsseldorf",
    "ort":"Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"ATYPIKO",
    "ort":"ST-PEE-SUR-NIVELLE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Aubel",
    "ort":"Zutphen",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"AUDAX PUBLISHING B.V.",
    "ort":"Amsterdam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Auferoth Banniza GmbH",
    "ort":"Lüdinghausen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"aufschnitt",
    "ort":"Lippstadt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Augenweide",
    "ort":"Stuttgart",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"augustaMODE UND HOMETRENDS",
    "ort":"Bückeburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Augusta Twenty",
    "ort":"Greenville",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Aujourd'hui Demain",
    "ort":"PARIS",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Aumayr Nicole Alexandra",
    "ort":"Altenberg",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Aúpa Organics",
    "ort":"Barcelona",
    "land":"[ES] Spanien",
    "gesperrt":false
  },
  {
    "name":"Aurina",
    "ort":"Burnham Market",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Aurina Holt Ltd",
    "ort":"Burnham market",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Auryn Naturfashion GmbH",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"aus dem Hinterland GmbH",
    "ort":"Freising",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"aus dem Hinterland GmbH",
    "ort":"Freising",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Austin Gift Company",
    "ort":"Austin",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Autostadt Wolfsburg",
    "ort":"Wolfburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"au voilier bleu",
    "ort":"wimereux",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Ave Lumi",
    "ort":"Tenafly",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Avenue Art & Company",
    "ort":"Grand Chute",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Avenue Wrapping",
    "ort":"Memphis",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Avinao",
    "ort":"Nantes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"AVOCA HANDWEAVERS SHOPS LIMITED",
    "ort":"wicklow",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"Awesome Brooklyn",
    "ort":"Brooklyn",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Awesome Home",
    "ort":"Brooklyn",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"AYO",
    "ort":"Herzilya",
    "land":"[IL] Israel",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Ayshin ltd t\/as Bunka",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"B2C Onlineshop",
    "ort":null,
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Baatenburg de Jong",
    "ort":"Maassluis",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Babioles etc",
    "ort":"Riom",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Babsis Schmuckstücke",
    "ort":"Laer",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"BABYSTUFF",
    "ort":"Heesch",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"bader&partner.at",
    "ort":"wien",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Bairro 1717",
    "ort":"Erbach",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Bak",
    "ort":"Amsterdam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Balloni GmbH",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Balloon Celebrations",
    "ort":"Santa Monica",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Balloon Celebrations",
    "ort":"Santa Monica",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Balloons Store & Concepts",
    "ort":"Karlsruhe",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"BALMAS BOUTIQUE",
    "ort":"ROMA",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"  Baltic Design e.K.",
    "ort":"Stuttgart",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"BANANA FAMILY SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ",
    "ort":"Błonie",
    "land":"[PL] Polen",
    "gesperrt":false
  },
  {
    "name":"Bananas",
    "ort":"Toronto",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":"ban.do",
    "ort":"Bowling Green",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Bantel GmbH",
    "ort":"Schorndorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Barbara Nepp GmbH",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Barbara Wick AG",
    "ort":"Zürich",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Barbier-Thomas",
    "ort":"La Couarde sur mer",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Barcz",
    "ort":"Kiel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Barge Canal Market",
    "ort":"Burlington",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"BARGINO",
    "ort":"Gent",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Bärwurzerei & Edelbrennerei",
    "ort":"Bad Kötzting",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Basics and Trends",
    "ort":"Heemstede",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Baslerbeauty Gmbh & Co. KG",
    "ort":"Bietigheim-Bissingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Batllo di Decca Francesca ",
    "ort":"Gussago",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"BAT RETAIL INTERNATIONAL",
    "ort":"Soest",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Bauchladen Lesenswert GbR",
    "ort":"Alsfeld",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Bielefeld",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Bavaroi und Muson",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Meerbusch",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Bazandine",
    "ort":"Clermont Ferrand",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"BAZAR",
    "ort":"Venice",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"B&C Museumsshop GmbH",
    "ort":"Graz",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Bea  Factory",
    "ort":"Neuilly-sur-Seine",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"BEAM",
    "ort":"Brooklyn",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Bean + Ro",
    "ort":"Edina",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Bearcub and co",
    "ort":"Huddersfield",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"beaugarage",
    "ort":"Vevey",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Beautiful Things Fort Wayne",
    "ort":"Fort Wayne",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Beautynails",
    "ort":"Athus",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Beavers Pots",
    "ort":"PANGBOURNE",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Becca Brendler",
    "ort":"Swarthmore",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Willich",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"BECKHOFF Technik und Design GmbH",
    "ort":"Verl",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Becky Alexander",
    "ort":"Colchester",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Bedford Cheese Shop",
    "ort":"New York",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"BEEF & more GmbH",
    "ort":"Salzburg",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Beeg",
    "ort":"Freiberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Bee & Pollen",
    "ort":"Denver",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Beerenhof Alps",
    "ort":"Lachendorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"BEES and dogs",
    "ort":"Achern",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"begeistern",
    "ort":"Bornheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Pöcking",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Behr Einrichtungs GmbH",
    "ort":"Wendlingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Blomberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Belle General",
    "ort":"Victoria",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":"Belle idée",
    "ort":"Héric",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"BELLE LINGERIE",
    "ort":"Meppel",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Belle Modelle",
    "ort":"Dorchester",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Belle Modelle Ltd",
    "ort":"Dorchester",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Belleville",
    "ort":"Saint-Brieuc",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Bellucci",
    "ort":"Groningen",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Beltran Milne & Associates Ltd",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Heidelberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"BENSUSSEN DEUTSCH & ASSOCIATES, LLC | ",
    "ort":"Woodinville",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Béodie de Behault Gaëtan",
    "ort":"Bruxelles",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"BE ORGANICED",
    "ort":"Santpoort Noord",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Berentzen",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Berger Feinste Confiserie GmbH ",
    "ort":"Lofer",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Bergo Design ",
    "ort":"Toronto",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":"Berndorf Besteck Handelsgesellschaft m.b.H.",
    "ort":"Berndorf",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"BESONDERS Laden",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Besselink",
    "ort":"Nijmegen",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Bessey&Flammer GmbH",
    "ort":"Bühl",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Best of Flowers ",
    "ort":"Lexington",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"best wishes",
    "ort":"Leigh-on-sea",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Betlem",
    "ort":"Bussum",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"BETTENRID GmbH",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Betty Bramble Ltd",
    "ort":"Leatherhead",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Betty‘s Stöberstübchen",
    "ort":"Samtens",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Betulius & Töchter",
    "ort":"Zürich",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Beudeker",
    "ort":"Zaandam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Ismaning",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Bewegendes leben GmbH KM",
    "ort":"Zingst",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Bianca Quadt- Struck-schreiben.lesen.spielen",
    "ort":"Bonn",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Biasa Rose",
    "ort":"Paia",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Biazza GmbH & Co. KG",
    "ort":"Murnau am Staffelsee",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Bica",
    "ort":"Lisboa",
    "land":"[PT] Portugal",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Bienstore",
    "ort":"Heemstede",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Biermann Averbeck GbR (c\/o Chez Koslowski)",
    "ort":"Münster",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"BIG EN BELG V.O.F.",
    "ort":"Amsterdam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Big Time Boba",
    "ort":"Lake Wylie",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Bild&Form",
    "ort":"Schwerin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"bimi Family ",
    "ort":"Craponne",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Bimi home",
    "ort":"Brindas",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Bindewerk GmbH & Co KG",
    "ort":"Prien am Chiemsee",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Birch Hill Studio",
    "ort":"Vernon",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":"Birdies River Oaks",
    "ort":"Houston",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Aufkirchen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Birken Apotheke Bayreuth",
    "ort":"Bayreuth",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Birkner",
    "ort":"Bochum",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"BisBis",
    "ort":"Le pré saint-gervais",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Penzberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Biss",
    "ort":"Salem",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Bitangel RENOVATE & FURNISH HOMES GMBH",
    "ort":"Karlsruhe",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Black & Gold",
    "ort":"San Francisco",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Black Pineapple Living & Giving",
    "ort":"Ottobrunn",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"BLAKE.BIRD",
    "ort":"Boise",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"B. Lanae Salon & Spa",
    "ort":"Evansville",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Blank Mason",
    "ort":"Skokie",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"blässhuhn",
    "ort":"Konstanz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Blaupause",
    "ort":"Leipzig",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Blaupause Papeterie\/Künstlerbedarf",
    "ort":"Leipzig",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Blaupause Papeterie\/Künstlerbedarf",
    "ort":"Leipzig",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Blendwerk",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Bless the messy",
    "ort":"Rochester",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Blickpunkt Lingen",
    "ort":"Lingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Blomgren Finland Oy Ab",
    "ort":"Mäntsälä",
    "land":"[FI] Finnland",
    "gesperrt":false
  },
  {
    "name":"BLONDI.E",
    "ort":"Brüssel",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Bloom beej Tess",
    "ort":"Venlo",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Bloom & Brew",
    "ort":"Ormskirk",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Bloom Finger",
    "ort":"Rehna",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"BLOOM floral design",
    "ort":"Charlevoix",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Bloom Flower Studio GbR",
    "ort":"Lüneburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Blooming Affairs",
    "ort":"Gschwend",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Blue Jewel Accessories",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Blüh auf! BLUMENHANDWERK",
    "ort":"Recklinghausen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Blumen & Ambiente",
    "ort":"Bremen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Blumen Binner",
    "ort":"Burgdorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Blumen Dahlmann GmbH & Co. KG",
    "ort":"Münster",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Blumen die Leben",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Blumen Ehlerding",
    "ort":"Hameln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Blumen Hagen",
    "ort":"Neuss",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Blumenhof Kehr",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Blumen Lederer GmbH & Co. KG",
    "ort":"Münster",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Blumen Lund e. K.",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Blumen Manufaktur",
    "ort":"Weyhe",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Blumenmeer Juist",
    "ort":"Juist",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Blumen Metzger GmbH",
    "ort":"Schönaich",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Blumen Müller",
    "ort":"Krefeld",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Blumen schmidt",
    "ort":"Sulzbach",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Blumen Schmidt",
    "ort":"Sulzbach",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Blumen Schwake",
    "ort":"33619 Bielefeld",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Blumen Speckmann ",
    "ort":"Oelde",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Blumen Stefan Peeters GmbH",
    "ort":"Krefeld",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Blumenstil München",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Blumentraum",
    "ort":"Salzburg",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Blumenwerkstatt Antoniak",
    "ort":"Hagen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Blumerei Kalkbreite",
    "ort":"Küttigen",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Blütenwerkstatt",
    "ort":"Feldkirchen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"bluums. natürlich blumen GmbH",
    "ort":"Gauting",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"BM Elements",
    "ort":"Porto",
    "land":"[PT] Portugal",
    "gesperrt":false
  },
  {
    "name":"BOA",
    "ort":"RENNES",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Gießen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Warngau",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Boelhouwer",
    "ort":"'s-Gravenhage",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Cuxhaven",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Bogenhausener Schreibwaren",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"BOHEI",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Böing&Frenzel GbR -  Kleines WerseGlück",
    "ort":"Münster",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Bokawa",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"BOLD. concept store",
    "ort":"Bochum",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"BOLD. concept store",
    "ort":"Bochum",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Bolig Nyt - Grenaa Gruppen ApS",
    "ort":"Grenå",
    "land":"[DK] Dänemark",
    "gesperrt":false
  },
  {
    "name":"Bonheur-du-jour",
    "ort":"Ax les themes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Bonjour Bonheur",
    "ort":"Bruxelles",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Boogs Home GmbH",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Book Culture",
    "ort":"Long Island City",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Boom Babies",
    "ort":"Syracuse",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Boot",
    "ort":"Bergeijk",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Borboletta",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Boss Babe Box",
    "ort":"Möhrendorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Le Touquet-Paris-Plage",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"SOORTS HOSSEGOR",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Bout de Fer & Compagnie",
    "ort":"Sucy-en-Brie",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"BOUTIQUE 12",
    "ort":"Toulon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Boutique-Ballooons Hamburg GmbH",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Boutique Bien Fait Pour Vous",
    "ort":"Montpellier - France",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Boutique de Bourlémont",
    "ort":"Bazoilles-sur-Meuse",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Boutique du CAPC",
    "ort":"Bordeaux",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Boutique du Parc Floral de Paris- espace cityzenparis",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"boutique fraukayser",
    "ort":"köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"BOUTIQUE HOTEL TEXEL B.V.",
    "ort":"DE COCKSDORP",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Boutique la Fée Baroque",
    "ort":"Baroque ",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Boutique lassy fair",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Boutique LHOZANE 0787888903",
    "ort":"Fontainebleau",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Boutique LHOZANE 0787888903",
    "ort":"Fontainebleau",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Boutique Salsa",
    "ort":"Herford",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Boutiques Dix sur Dix Sàrl",
    "ort":"Pully",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"BOXES",
    "ort":"Etten-Leur",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Box of Memories",
    "ort":"Eindhoven",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Brachard et cie SA",
    "ort":"Carouge",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Bramble and Blooms",
    "ort":"Chester",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Brandl",
    "ort":"Vienna",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Brandner Franz und Sonja",
    "ort":"Sankt Johann",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Brandstationen",
    "ort":"Stockholm",
    "land":"[SE] Schweden",
    "gesperrt":false
  },
  {
    "name":"Brasse",
    "ort":"Erftstadt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Brauerei Zwönitz",
    "ort":"Zwönitz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Brauner",
    "ort":"St. Gilgen",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"BRAX Store GmbH & Co. KG",
    "ort":"Herford",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Breagha by Nic",
    "ort":"Aberfoyle",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"breathe yoga & juice bar, pittsford",
    "ort":"Pittsford",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Bregjestyling",
    "ort":"Zoetermeer",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Breitengrad",
    "ort":"MÜNCHEN",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Youngstown",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Murnau",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Gensingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"BREWSTERZ",
    "ort":"1012RP Amsterdam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Bridies general store",
    "ort":"Kilkenny",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Eckental",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Bringing the outside in",
    "ort":"Wells-next-the-Sea",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Bringing the outside in",
    "ort":"Wells-next-the-Sea",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"brink",
    "ort":"Erfurt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Brink",
    "ort":"Ens",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Brixental Apotheke",
    "ort":"Hopfgarten-Markt",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Brockmeyer Blumen & Lebensart",
    "ort":"Glandorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Broeders",
    "ort":"Boxtel",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Brokinkel",
    "ort":"Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Brooke Rodd ATX",
    "ort":"Austin",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Brookline Booksmith",
    "ort":"Brookline",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Brown and Ginger",
    "ort":"Shrewsbury",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Brownie & Kleid",
    "ort":"Schäftlarn - Ebenhausen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"BROWN THOMAS ARNOTTS LIMITED",
    "ort":"Dublin",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"Brummbär",
    "ort":"Bochum",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Rösrath",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Brüninghoff",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"BTC-RETAIL B.V.",
    "ort":"Wijchen",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Bubbles&Beer",
    "ort":"Garmisch-Partenkirchen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"BUBBLES THEME STORE",
    "ort":"Goes",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Bube & Dame",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Buchbinderei Ringer",
    "ort":"Nürnberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Buchelt",
    "ort":"Zürich",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Bücher Thurn",
    "ort":"Mindelheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Bücher und mehr",
    "ort":"Schladming",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Bücherwelt",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"buchhandlung biazza OHG",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Buchhandlung Eissing e.K.",
    "ort":"Papenburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Buchhandlungen Mrs. Books",
    "ort":"Meerbusch-Lank",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Buchhandlung Forum GmbH",
    "ort":"Liestal",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Buchhandlung Gollenstede",
    "ort":"Heinsberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Buchhandlung Isartal",
    "ort":"Ebenhausen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Buchhandlung Lehmkuhl oHG",
    "ort":"münchen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Buchhandlung LeseZeichen OHG",
    "ort":"Germering",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Buchhandlung Max und Moritz",
    "ort":"Beuel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Buchhandlung Michaelsbund",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Buchhandlung Mrs. Books - Lieferservice",
    "ort":"Meerbusch",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Buchhandlung Reuffel \/ Zentrale Dienste",
    "ort":"Koblenz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Buchhandlung Reuffel \/ Zentrale Dienste ",
    "ort":"Koblenz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Buchhandlung Schiffer",
    "ort":"Rheinberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Buchhandlung Ute Hentschel e.K.",
    "ort":"Burscheid",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Buchhandlung Vollmer & Lille Lispeltute ",
    "ort":"Steinkirchen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Buchhandlung Walther König",
    "ort":"Nürnberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Buchhandlung  Walther König GmbH & Co. KG",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Buchkantine",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Buchoux, Emilie",
    "ort":"Uccle",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"buch perthel",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Buchwald-Stoll",
    "ort":"Bad Wörishofen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Bucklebury Trading Co Ltd",
    "ort":"Reading",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Buhl 4undzwanzig",
    "ort":"Weinstadt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"BUHL 4UNDZWANZIG",
    "ort":"Weinstadt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Builin Blasta Cafe & Bakery",
    "ort":"Spiddal",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"Buist",
    "ort":"Harkstede",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hannover",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Bunte Stube Ahrenshoop",
    "ort":"Ahrenshoop",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Buntstift Schreibwaren & Geschenkideen",
    "ort":"Würzburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Burani GbR",
    "ort":"Neufahrn",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"bureau fraiture",
    "ort":"herstal",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Burgener Sport AG",
    "ort":"Fiersch",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Burgfräulein Concept Store",
    "ort":"Eschweiler",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"burnt sugar",
    "ort":"SEATTLE",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Buro Fudge",
    "ort":"WOERDEN",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Bury",
    "ort":"Monaco",
    "land":"[MC] Monaco",
    "gesperrt":false
  },
  {
    "name":"buschwerk",
    "ort":"Neustadt an der Weinstraße",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Büttenpapierfabrik Gmund GmbH & Co. KG",
    "ort":"Gmund am Tegernsee",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Butterslip",
    "ort":"Kilkenny",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"Buttjerschmiede",
    "ort":"Minden",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"BV ATELIER BODECO",
    "ort":"Wemmel",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"BVBA AKOTEE",
    "ort":"Antwerpen",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"BVBA BE NICE",
    "ort":"Sint-Pieters-Woluwe",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"BVBA BLOEMEN VLEMINCKX",
    "ort":"puurs-st amands",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":" BVBA DESCAPLANT",
    "ort":"KORTRIJK",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"BVBA Next Friday",
    "ort":"Kalmthout",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"BVBA SCARPO",
    "ort":"BLANKENBERGE",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"BVBA Zuskus",
    "ort":"Deinze",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":" BV DISENSO",
    "ort":"OUD-TURNHOUT",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"BV DONAVI",
    "ort":"Willebroek",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"BV DS FOOD",
    "ort":"Gentbrugge",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"BV GEBOTEC",
    "ort":"Mortsel",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"BV Goodlife Tech",
    "ort":"Mortsel",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"BV LEMONI14",
    "ort":"KONTICH",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"BV LiLoLa",
    "ort":"BRUGGE",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"BV ROOTS 33",
    "ort":"Ledegem",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"BV The ANKR. Company",
    "ort":"Gent",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"BV 't stad leest",
    "ort":"Antwerpen",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"BV VIVALUX",
    "ort":"Deinze",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"b.wundert GmbH",
    "ort":"40597 Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"By Anne P.",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"By Char Coffee & Fashion",
    "ort":"Haarlem",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Bylebyl",
    "ort":"DEN HELDER",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"By L.E.S. B.V.",
    "ort":"Numansdorp",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"BYTHREADS LIMITED",
    "ort":"Galway",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"by-weis.de",
    "ort":"Paderborn",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Cabinet Mode Therapie",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"cad-eau",
    "ort":"BRIGHTON",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"KD&CO maison",
    "ort":null,
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Café Blumenboutique",
    "ort":"Landshut",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Café Edelweiss",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Café Freudenherz",
    "ort":"Bayreuth",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Cafe Groosartig",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Cafè Hommer",
    "ort":"Neuwied",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Café 'Im März'",
    "ort":"Dortmund",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Café Store Eva Rimmermann",
    "ort":null,
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Café Tilda im Liederkranz",
    "ort":"Mölln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"CAFFE' FORELLI S.R.L.S. UNIPERSONALE",
    "ort":"Prato",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"Cahay, Olivier",
    "ort":"Soignies",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Caillou Design Sàrl",
    "ort":"Genève",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"CALICOCOON",
    "ort":"Vienne",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Callens",
    "ort":"Aubange",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Calvert Jones",
    "ort":"Oxfordshire",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"cama24 \/ 2 Balloons",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Cambridge Mercantile",
    "ort":"Cambridge",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Orléans",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Camp",
    "ort":"Edison",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"CAMP",
    "ort":"New York",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Canasta Sets",
    "ort":"Boca Raton",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Candlefish Charleston",
    "ort":"North Charleston",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"canela-canela",
    "ort":"Mequon",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Canon, Delphine",
    "ort":"Mons",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Ça Papote",
    "ort":"Lorient",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Capendo GmbH",
    "ort":"Nürnberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"CAPSULE BY LO",
    "ort":"L'ISLE JOURDAIN",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Caramel Beurre Salé Concept Store",
    "ort":"Lausanne",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Caravana Concept Trading LLC",
    "ort":"Jumeirah 1",
    "land":"[AE] Vereinigte Arabische Emirate",
    "gesperrt":false
  },
  {
    "name":"Carèle B. | Concept Store",
    "ort":"Corminboeuf",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Carl Alois Walde KG",
    "ort":"Innsbruck",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Carl Bernh. Hoffmann GmbH & Co KG",
    "ort":"Kaarst",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Carl Dames OHG",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Carl Schäffer GmbH & Co. KG",
    "ort":"Osnabrück",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Carl Tode",
    "ort":"Göttingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Carnet de Route",
    "ort":"Aurillac",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Caroline Gardner",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Caroline Gardner Publishing",
    "ort":"LONDON",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Rego Park",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Carredesse",
    "ort":"Beaufays",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Carrie Dunham",
    "ort":"Bay Head",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Carsten Lübke GmbH",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Buchhandlung Wagner",
    "ort":null,
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Cartina",
    "ort":"Braunschweig",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"cartoleria valentina snc",
    "ort":"pianoro",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"Casabluma",
    "ort":"AZEITAO",
    "land":"[PT] Portugal",
    "gesperrt":false
  },
  {
    "name":"Casa de Diva",
    "ort":"Santanyi",
    "land":"[ES] Spanien",
    "gesperrt":false
  },
  {
    "name":"Casa Kaars",
    "ort":"Bunnik",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"CASA PASTOR",
    "ort":"GANDIA",
    "land":"[ES] Spanien",
    "gesperrt":false
  },
  {
    "name":"CASA SABA",
    "ort":"ST PIERRE",
    "land":"[RE] Reunion",
    "gesperrt":false
  },
  {
    "name":"Casita verde",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Casou Greenery",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"cassidy rennes sarl",
    "ort":"rennes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Castle déco Home",
    "ort":"Dieppe",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Castros Lifestyle",
    "ort":"Nürnberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Cateye Candles",
    "ort":"Porto",
    "land":"[PT] Portugal",
    "gesperrt":false
  },
  {
    "name":"Catherine Zarrabian",
    "ort":"Bondy",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Cato Haren",
    "ort":"Haren",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"CC Enterprises",
    "ort":"Ingelfingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"C comme CHEZ MOI",
    "ort":"Beynes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"C COMME CHEZ MOI",
    "ort":"Neauphle-le-Château",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Cdj Consult bv (celigne)",
    "ort":"Knokke-Heist",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"C E A VAN LEEUWEN-IMTHORN",
    "ort":"Valkenburg zh",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"CELTIC TREE OILS LTD",
    "ort":"Carlingford",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"CÉNÉLIA",
    "ort":"FORT DE FRANCE",
    "land":"[MQ] Martinique",
    "gesperrt":false
  },
  {
    "name":"Ceremonial (Formerly Juju)",
    "ort":"Pittsburgh",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Ceridwen Lentz",
    "ort":"Bad Herrenalb",
    "land":"[DE] Deutschland",
    "gesperrt":true
  },
  {
    "name":"Cevikol",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Ch. A. Freiberger Sicherheitssysteme",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Chamäleon, Hermann & Kurtz GbR",
    "ort":"Speyer",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"CHANDAL \/ Modern Life Fun SL",
    "ort":"Barcelona",
    "land":"[ES] Spanien",
    "gesperrt":false
  },
  {
    "name":"Chaos to calm",
    "ort":"Langley Moor. Durham",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"chara",
    "ort":"Rochester\/Brighton",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Charleston Flower Market",
    "ort":"Charleston",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Charles Wohnjuwelen",
    "ort":"Göppingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Charlie",
    "ort":"Lille",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Sprimont",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Charlotte Cunningham",
    "ort":"San Francisco",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Charlottes Concept Store GmbH",
    "ort":"Heiden",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Chat Noir AG",
    "ort":"Bern",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Cheekwood Gift Shop",
    "ort":"Nashville",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Chelsea Market Baskets",
    "ort":"New York",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Cherie Cherie",
    "ort":"Liège",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Chesery",
    "ort":"Murten",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Chez Aurelie",
    "ort":"Salzburg",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Chez Gagné",
    "ort":"North Hollywood",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Chez Ginette",
    "ort":"Stuttgart",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"CHEZ IRIS",
    "ort":"Heiloo",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Chez Louise",
    "ort":"Toulouse",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Chez Marie & Léo",
    "ort":"Ayguesvives",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Chez Mauricette",
    "ort":"Beaufort",
    "land":"[FR] Frankreich",
    "gesperrt":true
  },
  {
    "name":"Childrey Stores",
    "ort":"Childrey",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Reutlingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Chloris & prase",
    "ort":"Philadelphia",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Chlorophylle",
    "ort":"vertou",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Chocolaterie - Heike Bicking",
    "ort":"Altenburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Chocolaterie Panel",
    "ort":"Grigny",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"chrisallydeco",
    "ort":"Villefranche- sur- mer",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Chrison & bellina",
    "ort":"Oyster bay",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Christiaens, Christa",
    "ort":"Meerhout",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Christian Armstark e.U.",
    "ort":"Schärding",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Christine Bruhn Papier + Design e.K.",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"christophe versolato La boutique",
    "ort":"Toulouse",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"chwoika",
    "ort":"Hann. Münden",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Cicorella Alimentari",
    "ort":"Ulm",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Cincinnati Art Museum store",
    "ort":"Cincinnati",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"cite candide",
    "ort":"Port-Bail-sur-Mer",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"City Bird",
    "ort":"Detroit",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"CK2V",
    "ort":"MAIDIERES",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Clamart Concept",
    "ort":"Châtillon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Clarebout",
    "ort":"Merelbeke",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Clarebout, Céline",
    "ort":"Merelbeke",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Claris Modevertriebs GmbH",
    "ort":"Ettlingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Oakland",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Classico Fashion GmbH",
    "ort":"HAMBURG",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Mainz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Claudia Wohnen & Mode",
    "ort":"Steinbach-Hallenberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Claus Kröger",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Cleenewerck de Crayencour, Tatiana",
    "ort":"Lasne",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"clemens",
    "ort":"Maisach",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Clesse, Mélany",
    "ort":"Arlon",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Clever i.E.",
    "ort":"Langnau i.E.",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Clic",
    "ort":"New York",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Cloud Cuckoo",
    "ort":"Yarm",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Cloud Cuckoo",
    "ort":"Yarm",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Clover",
    "ort":"Los Angeles",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"COACH & JACKETS B.V.",
    "ort":"Amsterdam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Coastal Remedy",
    "ort":"Southsea",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Coastal Remedy",
    "ort":"Southsea",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Coastal Scandi",
    "ort":"Wadebridge",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Cob Concept Store",
    "ort":"Essen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"COB Concept Store",
    "ort":"Essen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Coccinelle",
    "ort":"Troyes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Cock, Anne-Sophie",
    "ort":"Dikkelvenne",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Coco b.o'aime",
    "ort":"Namur",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"COCO CONCEPT STORE SARL SALAMANDRE",
    "ort":"ajaccio",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"COCOCO Oy",
    "ort":"porvoo",
    "land":"[FI] Finnland",
    "gesperrt":false
  },
  {
    "name":"COCO DIGITAL DEVELOPMENT SANNEKE JANSEN DIGITAL DEVELOPMENT",
    "ort":"Haarlem",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Coco et Olive Fine Foods Inc.",
    "ort":"Vancouver",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":"Coco Laden",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Coco - The Kinderladen",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"codeso living",
    "ort":"Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Coeur d'Arty Show",
    "ort":"CAHORS",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Collet",
    "ort":"Enschede",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"ROISSY EN BRIE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"COLOR CENTER",
    "ort":"Strassen",
    "land":"[LU] Luxemburg",
    "gesperrt":false
  },
  {
    "name":"Colourlove",
    "ort":"Vordingborg",
    "land":"[DK] Dänemark",
    "gesperrt":false
  },
  {
    "name":"COMFORT LIVING ΜΟΝΟΠΡΟΣΩΠΗ ΙΔΙΩΤΙΚΗ ΚΕΦΑΛΑΙΟΥΧΙΚΗ ΕΤΑΙΡΕΙΑ ||COMFORT LIVING",
    "ort":"Ν ΨΥΧΙΚΟ",
    "land":"[GR] Griechenland",
    "gesperrt":false
  },
  {
    "name":"COMME UNE FLEUR Sàrl",
    "ort":"Neuchâtel",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Comm.V ANDRS",
    "ort":"Bredene",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Comm.V IO's Interior,",
    "ort":"Genval",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Como Food and Presents",
    "ort":"Como",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"Compass Rose",
    "ort":"Olympia",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Comptoir des merveilles",
    "ort":"Bergues",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"CONCEPT CROW LIMITED",
    "ort":"Kildare",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"CONCEPTNAILS",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Conceptstore B6",
    "ort":"Herne",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Concept Store - Fashion and Interior",
    "ort":"Murnau am Staffelsee",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Concept Store Langersehnt",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"SARL KMB",
    "ort":null,
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"conceptstore tafelgold",
    "ort":"Offenbach am Main",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Concept Store Wiebe & Domenicale GmbH",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Conny´s Schreibwaren",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"CONSCHES studio",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Conscious Craft",
    "ort":"Forest Row",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Constance L",
    "ort":"Lille",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Constant-Domscheit",
    "ort":"Besigheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Contract Candles & Diffusers Ltd",
    "ort":"Chichester",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Cook & Book",
    "ort":"Bruxelles",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Coole Kidz damme",
    "ort":"Damme",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Coquette Collective",
    "ort":"Miami",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Coral and Mint Ltd",
    "ort":"Kingsbridge",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Coralie Lafaille, Artisane Fleuriste",
    "ort":"Aiseau-Presles",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Münchenbuchsee",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Lübeck",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Corner Table Cafe",
    "ort":"Nantucket",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"CORNE WIELEMAKER B.V.",
    "ort":"Vlissingwn",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":null,
    "land":"[PE] Peru",
    "gesperrt":false
  },
  {
    "name":"COSMABULLE@BBOX.FR",
    "ort":"ORLÉANS",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Cosmetic Gallery GmbH",
    "ort":"Augsburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Cosyville",
    "ort":"Vechta",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Côtes et Merveilles",
    "ort":"Crac'h",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Cotswold Trading",
    "ort":"Broadway",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Couleur Bonheur Decoration SAS",
    "ort":"Marcq-en-Barœul",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Couleur Menthe à L'eau",
    "ort":"Châtel",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Couleurs en Cuisine",
    "ort":"Maisons-Laffitte",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Country Woolens",
    "ort":"Westport",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Covet",
    "ort":"Arlington",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Covet",
    "ort":"Boston",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"COZY BEE ",
    "ort":"Liège",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Craft Alliance",
    "ort":"St. Louis",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Craie craie : Architecture et design global",
    "ort":"Lyon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Crappy Happy Crafts",
    "ort":"Rostock",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Crazy Kids",
    "ort":"Cesson Sévigné",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"CRE1SENS",
    "ort":"VERTOU",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"CREADDICT",
    "ort":"Villefranche-sur-Saône",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"CREATE ART - letteritoutloud",
    "ort":"Feldkirchen-Westerham",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"CREATIVE MINDS REVIVE B.V.",
    "ort":"Delft",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Creativpalette",
    "ort":"Grafing bei München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Cremer - Luthe",
    "ort":"Rinteln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Crestline Pharmacy",
    "ort":"Mountain Brook",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Meilen",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Crowstick Interiors",
    "ort":"Market Rasen",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"CRUSH",
    "ort":"Les Sables-d'Olonne",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"cube",
    "ort":"Le Touquet-Paris-Plage",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Cuckoo",
    "ort":"Horsham",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"CuisinezPro",
    "ort":"Béziers",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Épouville",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Culinary Kitchen",
    "ort":"Oklahoma City",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Culture Flock",
    "ort":"Springfield",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Curated collective",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Curator 13",
    "ort":"Genève",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Curiosités",
    "ort":"ARCACHON",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"CURIOSITE SAS",
    "ort":"Cosne Cours sur Loire",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Curiosity",
    "ort":"Douala",
    "land":"[CM] Kamerun",
    "gesperrt":false
  },
  {
    "name":"curious...",
    "ort":"Hermosa Beach",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Curlicue",
    "ort":"Easton",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"CZERWONA MASZYNA 2.0 EWA GIL NATALIA KASPEROWICZ SPÓŁKA JAWNA",
    "ort":"Kraków",
    "land":"[PL] Polen",
    "gesperrt":false
  },
  {
    "name":"DABNEY LEE",
    "ort":"RYE",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Dalivi GmbH",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Essen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Darling & Gold London",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Darlybird",
    "ort":"Provo",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Das Büro im Laden",
    "ort":"Hall in Tirol",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"daSchriftwerk Bohm & Roth GbR",
    "ort":"Stadtbezirke II",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Das Dorf",
    "ort":"Sternschanze",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Das Dorf",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Das isses!",
    "ort":"Bünde",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Das Leitner",
    "ort":"Graz",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"das ökolädchen",
    "ort":"Osnabrück",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Das Papierhaus",
    "ort":"Frankfurt am Main",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Das Räuchermännlein",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Das Sommerhaus",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"das wohngefühl",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"DAS WOHNHAUS ",
    "ort":"Braunfels",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Ihringen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Dear Jude",
    "ort":"Sheffield",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"De BitterBoel",
    "ort":"Heibloem",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"De Boekhalte",
    "ort":"Maassluis",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"deborah potts",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Decadent Riot",
    "ort":"Glasgow",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"De Caigny Dranken",
    "ort":"Essen",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Dechamps, Cécile",
    "ort":"Ohain",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Deckers",
    "ort":"Hasselt",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"DECO EN VILLE",
    "ort":"COLOMBES",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Decolux Garden",
    "ort":"milly la foret",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"decorare",
    "ort":"Wädenswil",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Decore",
    "ort":"Rodez",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"DECOSY",
    "ort":"Voreppe",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"DE EETBOETIEK V.O.F.",
    "ort":"EA SLUIS",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Degezelle, Gerben",
    "ort":"Ingelmunster",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Deinheim - Wohnen & Wein",
    "ort":"Fürth",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"de inKijk",
    "ort":"Kortrijk",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"DeinLieblingsladen concept GmbH",
    "ort":"Essen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Heilbronn",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Dejavue lebensart",
    "ort":"Jühnde",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"DE JOLIES CHOSES",
    "ort":"Saint-Avé",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"de Jong",
    "ort":"NES",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"de Jonge",
    "ort":"Zwolle",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"DE KLUIS V.O.F.",
    "ort":"Thorn",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"dekomagie",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Dekowerk home",
    "ort":"Laufenburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Delannoy, Sophie",
    "ort":"tournai",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"DeliKate",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Delivery Hero Innovations Hub GmbH",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Namen",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Demain éco-concept",
    "ort":"Rodez",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"De Meyer, Flore",
    "ort":"Oudenaarde",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Den Selvejende Institution Kunstmuseet Trapholt",
    "ort":"Kolding",
    "land":"[DK] Dänemark",
    "gesperrt":false
  },
  {
    "name":"Depairon Distribution",
    "ort":"Verviers",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"der Freitag Mediengesellschaft",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Derijcke",
    "ort":"TIELT",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Der kleine Knurrhahn",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Der Laden Nr. 1",
    "ort":"Erlangen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Der Möbel-Laden GmbH",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Der Salon",
    "ort":"Osnabrück",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"der scheitel",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Der Schreibladen",
    "ort":"Nrnberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"De Ruyter",
    "ort":"Giessenburg",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"DESCOURVIERES",
    "ort":"EL PORT DE LA SELVA",
    "land":"[ES] Spanien",
    "gesperrt":false
  },
  {
    "name":"Design 44",
    "ort":"Birmingham",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Design Archives",
    "ort":"Greensboro",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Designdelikatessen",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"designers collab.",
    "ort":"Brooklyn",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Designers Guild Limited ",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Design + Handwerk Dickerhoff",
    "ort":"Bochum",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Design Hollstein",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"DESIGNHYPE",
    "ort":"Eppingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Design Staging",
    "ort":"FORLIMPOPOLI",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"design-VEST",
    "ort":"Grasten",
    "land":"[DK] Dänemark",
    "gesperrt":false
  },
  {
    "name":"Dessaucy, Estelle",
    "ort":"Tilff",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Detail GmbH",
    "ort":"Ratingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"De Thee Winkel",
    "ort":"veenwoudsterwal",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Dethier, Ludivine",
    "ort":"Andenne",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"DE VERWONDERING",
    "ort":"MAASTRICHT",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"De Vos",
    "ort":"WORKUM",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Dewa Nina Lobsang Bazaar58",
    "ort":"Bern",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"DickieBird Homestore",
    "ort":"Battle",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Die ART des Schenkens ",
    "ort":"Memmingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Die BergBlume",
    "ort":"Tegernsee",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"die blumenbar",
    "ort":"Murnau am Staffelsee",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Die DekoRieger",
    "ort":"Holzwickede",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"dieETAGE",
    "ort":"Neumarkt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"die feinkleins ",
    "ort":"Katzenelnbogen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Die Floristen",
    "ort":"Münster",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"die kleine manufaktur",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Diekmann",
    "ort":"Bielefeld",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"DIEMMEFLOOR - SOCIETA' A RESPONSABILITA' LIMITATA",
    "ort":"Milano",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"die möllering",
    "ort":"Osnabrück",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"DIE WOHNEREI",
    "ort":"Halle (Saale)",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"diewohnplaner GmbH",
    "ort":"Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"DIGMAGO GMBH",
    "ort":"Gengenbach",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"St ouen",
    "land":"[JE] Jersey",
    "gesperrt":false
  },
  {
    "name":"DillyDally GbR",
    "ort":"Sinzing",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"diminuer-tifs",
    "ort":"ussel",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Din A4 e. K.",
    "ort":"Pfaffenhausen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Innsbruck",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"DIRR SRL",
    "ort":"Milano",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"dish",
    "ort":"Oakland",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"DK Stil THE STORE",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"DK Stil THE STORE",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Doe",
    "ort":"NANTES",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Doerrer",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Dôme Project Interiors",
    "ort":"Genève",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Domestico 19",
    "ort":"Santander",
    "land":"[ES] Spanien",
    "gesperrt":false
  },
  {
    "name":"Domizil - Nickel & Nickel OG",
    "ort":"Linz",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Domschatten",
    "ort":"Ankum",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Domvs",
    "ort":null,
    "land":"[SA] Königreich Saudi-Arabien",
    "gesperrt":false
  },
  {
    "name":"Dopamine Concept Store",
    "ort":"Palma",
    "land":"[ES] Spanien",
    "gesperrt":false
  },
  {
    "name":"Doppler",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Dori Bomback",
    "ort":"Westport",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Doris Ackerl Raumkomplett",
    "ort":"Mariahilf",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Dörr",
    "ort":"Stuttgart",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Dos Islas",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Dot Reeder",
    "ort":null,
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Dot's Cafe",
    "ort":"New York",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Doubledutch Boutique",
    "ort":"Baltimore",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Douce Concept Store",
    "ort":"Tarascon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Down In The Valley",
    "ort":"New Hope",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Downtown",
    "ort":"Leichlingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"DPG Media BV",
    "ort":"Amsterdam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Dr.Dhingra GmbH\/kleidsam",
    "ort":"Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Drechsler-Beck",
    "ort":"Dettingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Driggs Mercantile",
    "ort":"Brooklyn",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"DROGISTERIJ SPARKING",
    "ort":"Nistelrode",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"DROOZ and Company",
    "ort":"Skaneateles",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Dr. Strobl",
    "ort":"Sulzbach-Rosenberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Druckwerkstatt Ottensen",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Dubuisson Alexandra",
    "ort":"Ath",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Madison",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Duis",
    "ort":"Bremen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Dumortier Nina",
    "ort":"wervik",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"duo schenken + wohnen GmbH",
    "ort":"Münster",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"DUO SUR CANAPE NANCIE WOHLERS",
    "ort":"Geneve",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"DUPLIKAT",
    "ort":"Zürich",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Duran Central Pharmacy, Inc",
    "ort":"Albuquerque",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Durchstarter Werbetechnik GmbH",
    "ort":"Schwyz",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"dwell New Haven",
    "ort":"New Haven",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Earth & Sky - the green shop GmbH",
    "ort":"Hannover",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Eastside shop",
    "ort":"Carouge",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"East Village Bookshop",
    "ort":"Sacramento",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Eau en Couleurs",
    "ort":"Maisons-Laffitte",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Eberhard Wigner KG",
    "ort":"Zirndorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Nürnberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"E. Breuninger GmbH & Co.",
    "ort":"Feldkirchen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"E-Center Culinara",
    "ort":"Villingen-Schwenningen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"echt & fair",
    "ort":"Waging am See",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"echtraum Concept Store",
    "ort":"Gilching",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Eckhaus",
    "ort":"Stuttgart",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"eckperspektive",
    "ort":"Bottrop",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Eclectic Energy",
    "ort":"South Kingstown",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"EDENliving",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Eder Hotels GmbH",
    "ort":"Maria Alm",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Edge of Urge",
    "ort":"Raleigh",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Edge of Urge",
    "ort":" Raleigh",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Edie + Po",
    "ort":"Thame",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Edit an Olive & Bloom Co.",
    "ort":"Snohomish",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Ed van de Vijver BV",
    "ort":"Knokke-Heist",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"EFIÉ",
    "ort":"Decatur, GA",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Freising",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Eigenwijs",
    "ort":"Heerlen",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Eijerkamp BV",
    "ort":"Zutphen",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Meppen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"EinGenuss GmbH",
    "ort":"Alzenau",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Einrichtungshaus Föger GmbH",
    "ort":"Telfs Pfaffenhofen",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Einrichtungshaus rodemann",
    "ort":"Bochum",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Einzelstück GmbH",
    "ort":"Zürich",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Einzig&Artig",
    "ort":"Langnau",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Eislotte",
    "ort":"Bad segeberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Eke Full",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"EKLIPSSHOP",
    "ort":"Reims",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Elbschön (Inh. Johannes Simmet)",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"*elbsterne*",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"E. Ledergerber & Co AG",
    "ort":"Baden",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"E. LEDERGERBER & CO. AG",
    "ort":"Baden",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Elegant Little Abode",
    "ort":"Twickenham",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Elemento di daniela bonati via a.fantoni, 10",
    "ort":"Gorle",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"Elements of Energy",
    "ort":"Amsterdam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Elf Elf",
    "ort":"Heemstede",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"elisa",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Elisabeth  Faith",
    "ort":"Fresno",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Elisa FRISON",
    "ort":"Pézenas",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Elise Bijoux",
    "ort":"Dolus d'Olron",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Deakin West",
    "land":"[AU] Australien",
    "gesperrt":false
  },
  {
    "name":"Eliza Wray",
    "ort":"Grayshott",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Eliza Wray",
    "ort":"Hindhead",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Ellelicious",
    "ort":"Ieper",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"elles m studio",
    "ort":"Limoges",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"elles m studio",
    "ort":"Limoges",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Elli & Mai",
    "ort":"Lüneburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Elldus Betriebs GmbH",
    "ort":"Kurort Oberwiesenthal",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Ellis",
    "ort":"Schwalmtal",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Elvira",
    "ort":"Veldegem",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"EMH GmbH",
    "ort":"Zürich",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Detroit",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Emilys Bargain Basement",
    "ort":"Horley",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Emma's Boutique GmbH & Co. KG",
    "ort":"65549",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"EMMY MOA , Atelier-Boutique",
    "ort":"arzal",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Empire Exchange",
    "ort":"Montréal",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":"Empreintes du monde",
    "ort":"Vouneuil sous Biard",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EN CREATION",
    "ort":"Bossey",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Murnau am Staffelsee",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Engelwirt GmbH",
    "ort":"Berching",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Enjoy by Nina",
    "ort":"Uetersen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"ENJOY TODAY",
    "ort":"Azzate",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"Erbay Muhammed",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Erhardt Bürowelt",
    "ort":"Karlsruhe",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"ERIN & CO",
    "ort":"Toronto",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":"Erkenbrecher",
    "ort":"Sickte",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Erlesenes  & Büchergilde",
    "ort":"55116 Mainz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Erlewein",
    "ort":"Freiburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"ErnestoShop",
    "ort":"Milano",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Solingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Ernst Glindmeyer KG",
    "ort":"Pinneberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Ernst Stackmann GmbH & Co. KG",
    "ort":"Buxtehude",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"ESFORASTER",
    "ort":"Menorca",
    "land":"[ES] Spanien",
    "gesperrt":false
  },
  {
    "name":"Eskell",
    "ort":"Chicago",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Gescher",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"été 85",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Étienne, Marie-Aude",
    "ort":"BERTRIX",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"ET P EPCC CTRE NAL COSTUME SCENE SCENOGRA",
    "ort":"MOULINS",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Eule und Katze",
    "ort":"Hamburug",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"EURL ACHIL",
    "ort":"MARSEILLE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL AGENCE ARLETTY",
    "ort":"FONTVIEILLE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL AGMAVA",
    "ort":"BOIS COLOMBES",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL ARABESQUE",
    "ort":"SOORTS HOSSEGOR",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL ARTE DIEM",
    "ort":"morlaix",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL AU 237",
    "ort":"Albi",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL BARNABE AIME LE CAFE",
    "ort":"TOULOUSE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL BE HAPPY STORE",
    "ort":"Lyon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL BIG KIDS",
    "ort":"Nice",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL BLVS",
    "ort":"La Roche sur Yon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL BOUTIQUE SINGULIERE",
    "ort":"Strasbourg",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL CA DA JA",
    "ort":"Aime",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL CAROLE ET MAX",
    "ort":"Bar-sur-Seine",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL CL DIFFUSION",
    "ort":"Saint-Alban",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL COLLECTIVE SOUL",
    "ort":"SOORTS HOSSEGOR",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL CRESSALIE",
    "ort":"PONTGIBAUD",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL DECOLIP",
    "ort":"COLOMBES",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL DELARUE ET COMPANY",
    "ort":"Saint-Germain-en-Laye",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL DODE",
    "ort":"NANTES",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL DOUDOU ET MISTINGUETTE",
    "ort":"CHAMBERY",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL E D D ET CULTURE",
    "ort":"Villeurbanne",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL ELEENE",
    "ort":"Caen",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL ELLAS",
    "ort":"GOUVIEUX",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL EURL CALLIOS",
    "ort":"Sautron",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL FAB",
    "ort":"grenoble",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL FLAMINGO",
    "ort":"Nantes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL FLEURENPLUME",
    "ort":"TOURS",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL FLEUX",
    "ort":"paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL HEIMA",
    "ort":"MENDE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL HOME",
    "ort":"Lambersart",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL HUGOLOU",
    "ort":"Le pouliguen",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL INALUK",
    "ort":"Montreuil",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL JC 1993",
    "ort":"Lyon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL JEAN JO",
    "ort":"Calvi",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL JFLS-WORLD",
    "ort":"MULHOUSE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL LA GALERIE DE CECILE",
    "ort":"PARIS",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL L'AMOUR FOU",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL L'ARBRE AUX SOUHAITS BREST",
    "ort":"Brest",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL L' ATELIER DE MARGUERITE",
    "ort":"PONTOISE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL L'ATELIER DE PABLO",
    "ort":"paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL LEA ET MOI",
    "ort":"lyon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL LE COCHON BLEU",
    "ort":"Albi",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL LE HOMARD BLEU,",
    "ort":"Guidel",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL LES COULEURS QUE L'ON DONNE",
    "ort":"Angers",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":" EURL LES DELICES DU TERROIR",
    "ort":"SAINT ETIENNE DE MONLUC",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL LES FLEURS LD",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL LES HEDONISTES",
    "ort":"Thonon-les-Bains",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL LET'S BE",
    "ort":"Brest",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL LIFE IS FUN",
    "ort":"BESANCON",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL LILI-PONT",
    "ort":"DAOULAS",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":" EURL LUCETTE BOUTIQUE",
    "ort":"Le Mans",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL MADEMOISELLE H",
    "ort":"le bouscat",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL MAKE",
    "ort":"Vannes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL MA PARENTHESE DECO",
    "ort":"Saint Omer",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL MBM EURL",
    "ort":"Mazamet",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL MELTING PHONE",
    "ort":"Bordeaux",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL MILLS",
    "ort":"valence",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL MINT",
    "ort":"BORDEAUX",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL MOBILHOME",
    "ort":"PARIS",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL Mouflette",
    "ort":"La Madeleine",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL M TO MEATPACKING",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL NAIL STYL' SYLWIA",
    "ort":"Rognac",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL OMM",
    "ort":"Bordeaux",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL PAILLETTE",
    "ort":"ANGERS",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL PARCELLES",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL PICK A PIXEL",
    "ort":"Quimper",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL PLUMES D ABEILLE",
    "ort":"lyon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL POUMPILATA",
    "ort":"Romainville",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL QUAND TAPIOCA AURA DES ROULETES ON L APPELERA MIRZA",
    "ort":"PERROS-GUIREC",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL R B C",
    "ort":"montpellier",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL RDH",
    "ort":"CHAMONIX MONT BLANC",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL REVES D'INTERIEUR",
    "ort":"MONTLHERY",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Eurl sandrine lobi\/OGGI",
    "ort":"Bergerac",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Eurl sandrine lobi\/OGGI",
    "ort":"Bergerac",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL SARL CAPUCINE",
    "ort":"Lannion",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL SARL LES KDOS DE MAVI",
    "ort":"VILLENEUVE D ASCQ",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL SECRET DES ALPES",
    "ort":"Hauteluce",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL SERENA CONCEPT",
    "ort":"Ajaccio",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL SERENA CONCEPT",
    "ort":"Ajaccio",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL SLOW",
    "ort":"Toulouse",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL SOUVENIRS ET CIE",
    "ort":"PEISEY NANCROIX",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL STEEZSTUDIO",
    "ort":"Marseille",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL TATAYOYO",
    "ort":"annecy",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"EURL TOUT SUR LA TABLE",
    "ort":"Saint Germain en Laye",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Eustace & Arthur Gifts",
    "ort":"Langport",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"EVA PER DONNA",
    "ort":"Zierikzee",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"eventquartier GmbH",
    "ort":"Frankfurt am Main",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Evers",
    "ort":"Huissen",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Evers",
    "ort":"Breda",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Everyday Magic",
    "ort":"Los Angeles",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Evie Lou",
    "ort":"Oberlin",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Evie Loves Toast",
    "ort":"Cobham",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Ex Voto Gift and Party",
    "ort":"El Paso",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Fabfashion",
    "ort":"Middelburg",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Fablab AB",
    "ort":"Stockholm",
    "land":"[SE] Schweden",
    "gesperrt":false
  },
  {
    "name":"Fabulous",
    "ort":"La Teste-de-Buch",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Facefactory by Pia",
    "ort":"Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Faire",
    "ort":null,
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Faire Oosten",
    "ort":"AMSTERDAM",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Fair Play Projects",
    "ort":"Brooklyn",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"fairverpackt",
    "ort":"Potsdam",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Fajaz Construction & Consulting GmbH",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Fa. Joker",
    "ort":"Kiel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"FAM Store",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"FAM Store",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Farben Fangmeyer",
    "ort":"Emsbüren",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Farbenreich",
    "ort":"Heidelberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Färber Jacqueline Monika",
    "ort":"Hof bei Salzburg",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"FARMACIA RUSSO S.A.S. DI ROSSELLA RUSSO",
    "ort":"Francavilla Al Mare",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"Farmhouse",
    "ort":"Canton",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Fashion Circus GmbH",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Faust Concept",
    "ort":"Lausanne",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Favor the Kind",
    "ort":"Dallas",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"F C M KOELEMIJ",
    "ort":"Overveen",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Burghausen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Feine Dinge",
    "ort":"Gütersloh",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Feines Leben",
    "ort":"Pinneberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"feinesweißes ",
    "ort":"Be",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Feine Trisseboda",
    "ort":"Scharbeutz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"fein & fine gmbh",
    "ort":"Zollikon",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Feingemacht e.K",
    "ort":"Cadolzburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Feinkost Käfer GmbH",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Feinkost Vatterodt",
    "ort":"Vechta",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Feinschliff decoration",
    "ort":"Hann. Münden",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"feinstesleben",
    "ort":"Dortmund",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Feldberghaus",
    "ort":"Schmitten",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Felicitas Knapp",
    "ort":"Villingen-Schwenningen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Frankfurt am Main",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"FELLAH",
    "ort":"BAGNEUX",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Feneberg Design GmbH",
    "ort":"Pfaffenhofen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"FeRa flowers and gifts",
    "ort":"ZANDVOORT",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Ferdinand Meislahn GmbH & Co KG",
    "ort":"24103 Kiel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Ferdinand Weiss",
    "ort":"Braunschweig",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Festive",
    "ort":"New York",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"FETE DE LA BOUTIQUE",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Fidea Design GmbH",
    "ort":"Luzern",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"fiffi&muschi",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"fig & bella",
    "ort":"hudson",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Figgins",
    "ort":"Frome",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"fine little things",
    "ort":"Starnberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Fingerle Interior Design",
    "ort":"Stuttgart",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Essen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Fiori",
    "ort":"Mannheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"FISCALE EENHEID KITSCH KITCHEN HOLDING B.V., KITSCH KITCHEN GROOTHANDEL B.V., C.S.",
    "ort":"Amsterdam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Fischer",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"ritterhude",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Five and Dime Ltd",
    "ort":"Herford",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Flair Wohnaccessoire & Fashion ",
    "ort":"Peine",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Gauting",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Fleischer",
    "ort":"Remscheid",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Fleur",
    "ort":"Wuppertal",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Flex All Day",
    "ort":"Bethesda",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Flexi_bazar",
    "ort":"Les vans",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Flick Fashion Group GmbH",
    "ort":"Freudenberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Flipp Salon",
    "ort":"Providence",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Flonra",
    "ort":"winschoten",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Flonra",
    "ort":"winschoten",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Floral Aesthetics",
    "ort":"Augsburg \/ Bayern",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"floraldesign GmbH & Co KG",
    "ort":"Bremen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Florales und Keramik",
    "ort":"Ottobrunn",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"floranum - blühendes Handwerk",
    "ort":"Altstätten SG",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Floreal Blumen",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Florian Isensee GmbH",
    "ort":"Oldenburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Florians Blumenpavillon",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Floristik Lorenz GmbH & Co. KG",
    "ort":"Limburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Floristikwerkstatt",
    "ort":"Luzern",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Floristin Katrin Schrankl",
    "ort":"Gangkofen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Ettlingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Flourish Gift and Home",
    "ort":"Hyde Park",
    "land":"[AU] Australien",
    "gesperrt":false
  },
  {
    "name":"Flourish on Magill",
    "ort":"Stepney",
    "land":"[AU] Australien",
    "gesperrt":false
  },
  {
    "name":"Flower Power Vintage Wares",
    "ort":"Palmer",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"flowery by Josephine GmbH",
    "ort":"Bad Ragaz",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Fluffy White Pink GmbH",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"FLUM Manufaktur - Dominik Gräf",
    "ort":"Haag an der Amper",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"FNAC DINARD",
    "ort":"PLEURTUIT",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Fock",
    "ort":"Greifswald",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"FOCUS LEMMER",
    "ort":"Lemmer",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Folies d'encre",
    "ort":"Aulnay-sous-Bois",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"FONDATION BEYELER MUSEUM AG",
    "ort":"RIEHEN",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"FOOD SENTIMENTALE",
    "ort":"Bayonne",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Forest + Ash, LLC",
    "ort":"Exeter",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"FORMAT",
    "ort":"reckinghausen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Foto Vogt GmbH",
    "ort":"Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Found",
    "ort":"Bath",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Fourman & Co. GmbH",
    "ort":"Hohen Neuendorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Fourth Dimension",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Frachtgold",
    "ort":"Husum",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"F. Radspieler GmbH & Co.KG",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"FRANCA GARDELLA & C. SOCIETA' IN NOME COLLETTIVO DI PERNA CE",
    "ort":"GENOVA ",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"Frangipani",
    "ort":"Miami",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Frank & Charlie",
    "ort":"enschede",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"FRANK & CHARLIE B.V.",
    "ort":"Enschede",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Biebertal",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"FRANKIES SURF CLUB",
    "ort":"TORONTO",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":"Franz-Josef Höppener GmbH & Co.KG",
    "ort":"Baesweiler",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"FRAPPANT HOME FASHION",
    "ort":"Schijndel",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Frau Bauch",
    "ort":"Gaimersheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"frau Büchert",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Frauenzimmer",
    "ort":"Regensburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Fräulein K.",
    "ort":"Göttingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"fräulein paula",
    "ort":"Lüneburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Frau Meise Kaffee und Design Kultur GmbH",
    "ort":"Baden",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"fraumeyer",
    "ort":"Schleswig",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Frau Rabe",
    "ort":"Tübingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"FRAU SCHMITT",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"FRAU SCHMITT",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"frau verse",
    "ort":"Heidelberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Frau Wunder",
    "ort":"Wuppertal",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Freak Butik",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Fred Aldous Ltd",
    "ort":"Manchester",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"FREDERIEK VAN WAES",
    "ort":"Haarlem",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"FREDERIEK VAN WAES",
    "ort":"Haarlem",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Freier Wille",
    "ort":"Flensburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"freistil bochum",
    "ort":"Bochum",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Frerichs",
    "ort":"Bremen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"freude Hamburg GbR",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Freude Pur",
    "ort":"Gütersloh",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Freunde der Kunsthalle e.V.",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Frey, Wrobel Gbr",
    "ort":"Koblenz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Frida?",
    "ort":"Bochum",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"FRIEDE  STERN gifts, goods and more",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"FRIEDE+STERN, gifts, goods and more",
    "ort":"80796 München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Friedrich Lienau",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"FriendsNYC",
    "ort":"Brooklyn",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Herten",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Friseur & Dekoration Frau Schmitt",
    "ort":"Bad K�nig",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Fritzante",
    "ort":"Landsberg am Lech",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Fritz Fischer GmbH & Co. KG",
    "ort":"Karlsruhe",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Frogmary Flowers",
    "ort":"South Petherton",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Frohsinn International AG",
    "ort":"Zürich",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Frollein Clara",
    "ort":"Schöllkrippen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Froschkönig",
    "ort":"Balingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Froschkönig der Blumenladen",
    "ort":"Wesseling",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Fuchs e.Kfr.",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Fuchs Georg Matthias Peter",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Fun by Brooke Rodd",
    "ort":"Santa Monica",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"FUNDGRUBE",
    "ort":"Ottersberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"fünf! Conceptstore",
    "ort":"Baden",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"fünf von Carolsfeld GbR",
    "ort":"Oelde",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Für immer Deins",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Juister Tee Kontor",
    "ort":"Juist",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"(F)UTILE",
    "ort":"BERTRANGE",
    "land":"[LU] Luxemburg",
    "gesperrt":false
  },
  {
    "name":"Futuro srl",
    "ort":"prato",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"Fynns Café und Lottes Laden GmbH",
    "ort":"Stfa",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Galatea",
    "ort":"Hoboken",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Yverdon-les-Bains",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"GALERIA Karstadt Kaufhof GmbH",
    "ort":"Essen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Galerie Ansichtssache",
    "ort":"Lübeck",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Galerie Uli Lang",
    "ort":"Biberach",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Gallery 360",
    "ort":"Minneapolis",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Gans Glückselig",
    "ort":"Bremen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Gans Glückselig",
    "ort":"Bremen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Gartencenter Selbach",
    "ort":"Bergisch Gladbach",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Gartenmöbel und Ambiente",
    "ort":"Lüdinghausen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Garten Prentl",
    "ort":"Rosenheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Gärtnerei Fischer oHG",
    "ort":"Starnberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Gärtnerei Schullian",
    "ort":null,
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Gebr. LOTTER KG",
    "ort":"Ludwigsburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Gegenüber",
    "ort":"Darmstadt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Oberhausen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Geijersgatan Inredning No 53 AB",
    "ort":"malmö",
    "land":"[SE] Schweden",
    "gesperrt":false
  },
  {
    "name":"Geipel & Neuer GbR",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Regensburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Geniesserei Hamburg",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"gently elephant ltd",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Genusskunst AG",
    "ort":"Grächen",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Genussmoment",
    "ort":"Bad Vöslau",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"genusswerk",
    "ort":"Gengenbach",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Georgette Café",
    "ort":"Lège-Cap-Ferret",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Liseleje",
    "ort":"Leipzig",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"GERLACH",
    "ort":"Wetzlar",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Stuttgart",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Gertrudenhof GmbH",
    "ort":"Marxzell",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Geschenk & Wohnen",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Gewandhaus Hugo Gruber KG",
    "ort":"Erding",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Gezeiten 13°11",
    "ort":"Sankt Peter Ording",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Giannopoulos Theodoros",
    "ort":"Athens",
    "land":"[GR] Griechenland",
    "gesperrt":false
  },
  {
    "name":"Giftbar ",
    "ort":"Montclair",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Gift Company",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Gift It 2",
    "ort":"Elton",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Gild and Ash",
    "ort":"Richmond",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Gild and Ash",
    "ort":"Richmond",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Gina Diamond's Flower Co.",
    "ort":"Madison",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Ginger Home & Gifts",
    "ort":"Almondbury",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Gingham",
    "ort":"Yarmouth",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Girl on the Wing",
    "ort":"Hamilton",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":"GIULIA TURRINI",
    "ort":"Verona",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"GIULIA TURRINI",
    "ort":"verona",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"Glam & Glory",
    "ort":"Fürth",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Glashaus",
    "ort":"Münster",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Glass Designs & Gallery",
    "ort":"Bristol",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Glasseye co.UG",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"GLLOQ",
    "ort":"BORDEAUX",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Glorious Staples",
    "ort":"Sherborne",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Gløtt",
    "ort":"Bergen",
    "land":"[NO] Norwegen",
    "gesperrt":false
  },
  {
    "name":"GLOW",
    "ort":"Freiburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"glückwunderlich",
    "ort":"Kumhausen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"gluexgriff, alfred neumayer gmbh",
    "ort":"Radstadt",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Gluexmoment",
    "ort":"Wels",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Chiemgaukorn GmbH Co. KG",
    "ort":"Trostberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Goba AG, Flauderei",
    "ort":"Appenzell",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Mons",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hausen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Goggins and Grub",
    "ort":"St austell",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"golden!",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Goldene Seele",
    "ort":"Pulheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Golden Joya GmbH",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Goldmarie",
    "ort":"Schwabach",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Goldstück",
    "ort":"Crailsheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Goldstücke",
    "ort":"Wedel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Göllner",
    "ort":"Baunatal",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Gone West PDX",
    "ort":"Portland",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Gone West PDX",
    "ort":"Portland",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Good Brands",
    "ort":"dubai",
    "land":"[AE] Vereinigte Arabische Emirate",
    "gesperrt":false
  },
  {
    "name":"Good Crowd",
    "ort":"Orlando",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Good Egg",
    "ort":"Toronto",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":"Good Neighbour",
    "ort":"Toronto",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":"Goods & Heroes",
    "ort":"Three Oaks",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Goodwood Furniture",
    "ort":"Washington",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Gool",
    "ort":"RIEL",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Gooran GmbH",
    "ort":"Mülheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Aachen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Götterspeise",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"GOURMANDISES BY CAROLE",
    "ort":"BAR SUR SEINE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"grams",
    "ort":"Kassel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Gramsch GmbH",
    "ort":"Marktredwitz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Grand Palais Immersif",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Grants of Somerset Ltd",
    "ort":"South Petherton",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Grapes Concept Store",
    "ort":"Mnchen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Grass Roots Juicery",
    "ort":"Brooklyn",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Greenbomb Ethifashion GmbH",
    "ort":"Stadtbezirk Mitte",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Green Flamingo",
    "ort":"Leicester",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Green Lemon Atelier",
    "ort":"Hong Kong",
    "land":"[HK] Hongkong",
    "gesperrt":false
  },
  {
    "name":"Green & Wild",
    "ort":"Reading",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Greenwood",
    "ort":"Studio City",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Greenwood Shop",
    "ort":"Studio City",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Greiner",
    "ort":"Mureck",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Grey Soft Furnishings Ltd",
    "ort":"Essex",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Bratislava",
    "land":"[SK] Slowakei",
    "gesperrt":false
  },
  {
    "name":"Gries Deco Company GmbH",
    "ort":"Niedernberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"GRIJS mode en meer",
    "ort":"Haren",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Groen & Cocoon bv",
    "ort":"Kontich",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Groene Vingers Delft B.V.",
    "ort":"DELFT",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Liesner & Co. GmbH ",
    "ort":"Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"groupdeco",
    "ort":"Dijon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Grundstücksgemeinschaft A. Witzel\/K. Konen-Witzel",
    "ort":"Edewecht",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Grüner Krebs GmbH",
    "ort":"Karlsruhe",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Grüner Salon",
    "ort":"DARMSTADT",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"GRUPPO MD",
    "ort":"Athen",
    "land":"[GR] Griechenland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Herrsching a. Ammersee",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Gualandi, Marie-Laurence",
    "ort":"Villers-Perwin",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Trebbo di Reno BO",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"Guery, Clémentine",
    "ort":"Erquelinnes",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Guevara?s",
    "ort":"Brooklyn",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Gumprecht e.K.",
    "ort":"Regensburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Guns",
    "ort":"Son en Breugel",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Feldkirchen-Westerham",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Gustavsberg Design House",
    "ort":"Värmdö",
    "land":"[SE] Schweden",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Nürnberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"GWG Städtische Wohnungsgesellschaft München mbH",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Haas Bürobedarf & Schreibwaren e.K.",
    "ort":"Erlangen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Haase Schreiben und Schenken Blue Ink GmbH",
    "ort":"Wolfsburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Haas & Haas Gesellschaft m.b.H.",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Frankfurt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"HACH GmbH & Co. KG",
    "ort":"Pfungstadt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Worms",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Haidoun",
    "ort":"Warendorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Freiburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Halblang",
    "ort":"Mils",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Halleiner Kisterl",
    "ort":"Hallein",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Hallesches Haus - General Store, Lunchroom & Event Space",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Halsoverkop",
    "ort":"Uden",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Hals über Kopf UG",
    "ort":"Langenfeld",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Hambledon Gallery Ltd",
    "ort":"Blandford Forum",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Hammermann",
    "ort":"Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"hammerpress",
    "ort":"Kansas City",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Viersen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"handfest",
    "ort":"Reutlingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Hands",
    "ort":"Newtown",
    "land":"[AU] Australien",
    "gesperrt":false
  },
  {
    "name":"Handworks",
    "ort":"Helena",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Hanglage - Das Weinregal",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Hanna Dean Makeup",
    "ort":"Calhoun",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Fort Collins",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Deisenhofen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"HAN PROJECTS - BLOEM & DECO",
    "ort":"Berkel-Enschot",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Hans-H. Hasbargen Gmbh & Co KG",
    "ort":"Bruchsal",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Dr. Happe & Kollegen",
    "ort":"Münster",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"happy box",
    "ort":"Offenburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Happy Home",
    "ort":"Nieuwstadt",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Happy! Kinder & Kram",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Harald Otter Design&Living",
    "ort":"Aachen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Bielefeld",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Harriet & Rose",
    "ort":"Jersey",
    "land":"[JE] Jersey",
    "gesperrt":false
  },
  {
    "name":"Harr & Meusch GbR",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Inning",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"amabile concept store",
    "ort":"Vaterstetten",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Hase Weiss",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Neustift im Stubaital",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Le Chesnay-Rocquencourt",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Hästens Spirit of Excellence GmbH",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"HATTIE & HEID",
    "ort":"South Petherton",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Nürnberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Haus & Garten",
    "ort":"Gstadt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"HausWitch",
    "ort":"Salem",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Haven",
    "ort":"Boulder",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"haven curated home",
    "ort":"Jackson",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Hawarden Estate Farm Shop",
    "ort":"Hawarden",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"hawthorn salon",
    "ort":"Jacksonville",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Haxhiu",
    "ort":"Aachen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Hayer",
    "ort":"Kaufbeuren",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Hayes + Nash Design CO.",
    "ort":"MOUNT PLEASANT",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Hay-Hygge",
    "ort":"Aachen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"hazel + dot",
    "ort":"Tampa",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"HBCD HOME",
    "ort":"BEGLES",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"HEALTHYJELTJE",
    "ort":"Castricum",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Murnau am Staffelsee",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"hedwig",
    "ort":"Freiburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hannover",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Münster",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Laichingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Heimathafen",
    "ort":"Villingen-Schwenningen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Heimatrausch",
    "ort":"Braunschweig",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"HEIMLIFEISS ZÜRICH AG",
    "ort":"Wettswil",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"heimweh dornbirn e.U. ",
    "ort":"Dornbirn",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Heinrich Künnemann Nachf. GmbH",
    "ort":"Berlin-Charlottenburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Heirloom Cafe",
    "ort":"Edlesborough",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"heißeliebe - store",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"hej! - die kleine Wohnboutique",
    "ort":"Straubing",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Hej Flowers",
    "ort":"Engelskirchen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"hej frida",
    "ort":"Trier",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"HEJKOH GmbH",
    "ort":"Basel",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"hejLICH concept store",
    "ort":"Harsewinkel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"IDRON",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Helen Spencer",
    "ort":"Deddington",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"HELLFEUER",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Hell Living GmbH",
    "ort":"Sylt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Stuttgart",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"HELLO MA",
    "ort":"Villeneuve sur lot",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"HELMLE",
    "ort":"Sylt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"HELO boutique (DETROIT TREND Sarl)",
    "ort":"Bulle",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Helsloot",
    "ort":"amsterdam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Hemels",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"henderkes",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Rapperswil-Jona",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Henrie Helen",
    "ort":"Austin",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Herberts corner store",
    "ort":"Frankston",
    "land":"[AU] Australien",
    "gesperrt":false
  },
  {
    "name":"Herby Jacks",
    "ort":"Ambleside",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Hermann Franzen GmbH & Co. KG",
    "ort":"Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Hermann Schönes Leben e.K.",
    "ort":"Buxtehude",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"HERR&FRAUHEMPEL GmbH ",
    "ort":"Detmold ",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Herrlichkeit Lebensstil UG & Co. KG",
    "ort":"Syke",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"herrlichperlich",
    "ort":"Hannover",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Herrmann International Deutschland GmbH & Co KG",
    "ort":"Weilheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"HERVA",
    "ort":"Valenciennes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"herzbegehrt Düsseldorf",
    "ort":"Dsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Herzberg Hamburg",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Herzensglück",
    "ort":"Hofgeismar",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Herz Mensch",
    "ort":"Regensburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"HerzSache GmbH",
    "ort":"Rapperswil",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Herzstichle",
    "ort":"Mittelberg",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Herzstück",
    "ort":"Braunschweig",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Herzstück",
    "ort":"Grünwald",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Hessen Paul",
    "ort":"Hagen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Neckargemünd",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Het Faire Oosten",
    "ort":"Amsterdam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Het Kaarsenhuisje",
    "ort":"Uithoorn",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"HEUREUX HASARD BY LN & JU",
    "ort":"VILLENEUVE D'ASCQ",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"HEYDAY SRL",
    "ort":"Bruxelles",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Hey Good Thing",
    "ort":"Coolum Beach",
    "land":"[AU] Australien",
    "gesperrt":false
  },
  {
    "name":"Hey Marly GmbH",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"hiddenkitchen",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Highly Fresh",
    "ort":"Ottawa",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":"Hilde Brandt",
    "ort":"Leipzig",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Himmelblau",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"HipChik Home",
    "ort":"Armonk",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Historie de Nanes ",
    "ort":"Le Puy en-Velay",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"HmpfnerFlad & Rainer GbR",
    "ort":"Freising",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Hobauer GmbH & Co. KG",
    "ort":"Forchheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Hobby Dittrich",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Hobby + Spiel Müller",
    "ort":"Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":" H\/O BLOEMENPRET",
    "ort":"Peize",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Hochparterre",
    "ort":"Gelnhausen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Hoefnagel",
    "ort":"Nijmegen",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Hofbauer Raumgestaltung",
    "ort":"Rainbach",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Hofecker",
    "ort":"Neumarkt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Höfer GmbH & Co. KG",
    "ort":"Husum",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Marburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Hoffmann-Sommer",
    "ort":"Hochheim am Main",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Hofmann GmbH Tisch- und Wohnaccessoires",
    "ort":"Bonn",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"HOGE RAMEN",
    "ort":"Deventer",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Höhenflug GmbH ",
    "ort":"Kiel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Lübeck",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Hokum",
    "ort":"OTTAWA",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":"Holiday",
    "ort":"Lancaster",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Holland Blumen",
    "ort":"Taunusstein",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"HollisBest",
    "ort":"Halle (Westf)",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"HOLST and LEE",
    "ort":"Charleston",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Holz-Kretz Wohnkultur & Lebensart GmbH",
    "ort":"Herborn",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Holz Leute KG",
    "ort":"Valley",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"homage store UG (haftungsbeschränkt)",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Home and Kids",
    "ort":"Wedel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"HOME CROWN",
    "ort":"Haverford",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"HomeGoods, Inc ",
    "ort":" Framingham",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Home Interior Warehouse",
    "ort":"Walled Lake",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"HOME OF DESIGN",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Home Stylisten",
    "ort":"Sylt\/OT Westerland",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Home Town Mercantile",
    "ort":"Half Moon Bay",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Hominess",
    "ort":"Montpellier",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"HoneyHome",
    "ort":"Zürich",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Honig",
    "ort":"Venlo",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Augsburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Honig Kuchen GmbH",
    "ort":"Zürich",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Honold",
    "ort":"Ebersbach",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Hooray Event GmbH",
    "ort":"Leipzig",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Höppel GmbH",
    "ort":"Göppingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Hornschu GmbH",
    "ort":"Kassel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Jestetten",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Hotel Bareiß GmbH",
    "ort":"Baiersbronn",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Hotel Belle Epoque",
    "ort":"Baden-baden",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Hotel Markushof",
    "ort":"Bad Bellingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"House of Boë Shop",
    "ort":"South Queensferry",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"House of Cardoon",
    "ort":"Carmel",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"house of hümør",
    "ort":"Allinge",
    "land":"[DK] Dänemark",
    "gesperrt":false
  },
  {
    "name":"House of Jola",
    "ort":"Tingewick",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"House of Kellogg",
    "ort":"Brooklyn",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"House of the Faun",
    "ort":"Port Townsend",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Newport Beach",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"H. Quast \/ Modehaus Quast",
    "ort":"Harsefeld",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Hrim Krunk ehf",
    "ort":"Reykjavik",
    "land":"[IS] Island",
    "gesperrt":false
  },
  {
    "name":"Huber Christina MBA",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Huemer Naturkunst",
    "ort":"Eggelsberg",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Hugosbox",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Huijskens",
    "ort":"Thorn",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"MA Favourites",
    "ort":"Ottobeuren",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Humble House",
    "ort":"Brooklyn",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Hümpfner - Bezold und Büttner GbR",
    "ort":"Bad Königshofen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Hundeladen",
    "ort":"Lüneburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"HUPFER interior",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Winterthur",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Huset",
    "ort":"Venice",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Huset Hansen",
    "ort":"Kiel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"hush UK",
    "ort":"London ",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Hutter Büro GmbH & Co. KG",
    "ort":"Günzburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Huttons",
    "ort":"london",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Huygens, Christel",
    "ort":"Herselt",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Hyde and Seek",
    "ort":"EXETER",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Hyppairs SAS",
    "ort":"LYON",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"I AM Lübeck",
    "ort":"Lübeck",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Ici & là- Boutique",
    "ort":"Aydat",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Idea Verde Maschi SRL",
    "ort":"Gadesco Pieve Delmona",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Ideenreich Windges",
    "ort":"Erkrath",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"I Dream Elephants GmbH",
    "ort":"Frankfurt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"ievite",
    "ort":"Riga",
    "land":"[LV] Lettland",
    "gesperrt":false
  },
  {
    "name":"Ignaz Stenger GmbH & Co. KG",
    "ort":"Bad Kreuznach",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"I HOLWERDA-BEDIJS",
    "ort":"Enkhuizen",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Ihr Teppichfreund",
    "ort":"Feldafing",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Ihr Teppichfreund",
    "ort":null,
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Ikarus Design Handel GmbH ",
    "ort":"Gelnhausen ",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Ikarus Design Kaufhaus",
    "ort":"Frankfurt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Ikonic srl",
    "ort":"Jesi",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"ILA MALU' S.A.S. DI TRONCATTI LUCIA & C.",
    "ort":"BRESCIA BS",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"Ile Luminée",
    "ort":"Le Palais",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Image Plus",
    "ort":"Lausanne",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Im Atelier \"Stimmungs-Bilder\"",
    "ort":"Dinkelsbühl",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Imperia GmbH",
    "ort":"Stuttgart",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"IMS Design UG",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Indeglück",
    "ort":"Aachen-Kornelimünster",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Independent Goods",
    "ort":"Ketchum",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Indian Summer",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Indigo",
    "ort":"LITTLE ROCK",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Indy Rose Flowers",
    "ort":"Lockleys",
    "land":"[AU] Australien",
    "gesperrt":false
  },
  {
    "name":"INES AMANN CREATIVE WERBEMITTEL",
    "ort":"IRSLINGEN",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Inès et Antonin",
    "ort":"Nay",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"In Flower",
    "ort":"Sioux Falls",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Inge Dunbar Ltd Trading as Sass & Spirit",
    "ort":"HASLEMERE",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Injeanius",
    "ort":"Boston",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"inka hansen concept store",
    "ort":"Potsdam",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Innenraum Blankenese",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Innocent Bones",
    "ort":"Wallsend",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"In-Residence",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Insane Interiors",
    "ort":"Liverpool",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"inselliebe- Bücher Wohnen Leben",
    "ort":"Güstrow",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Inselmarkt Helgoland e.K",
    "ort":"Helgoland",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"INSIDA V.O.F.",
    "ort":"Boxtel",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Inside Job",
    "ort":"Wynnewood",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Insolente concept store",
    "ort":"Beaune",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"INSOLITE DÉCO HOME",
    "ort":"AVALLON",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"inspirations",
    "ort":"combourg",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Inspitalfields",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Instance",
    "ort":"Porthtowan, Truro",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Interior Butik GmbH ",
    "ort":"Basel",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Interior Cadaqués",
    "ort":"Cadaqués",
    "land":"[ES] Spanien",
    "gesperrt":false
  },
  {
    "name":"Into the Wild GmbH",
    "ort":"Augsburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Invite Me",
    "ort":"Yarraville",
    "land":"[AU] Australien",
    "gesperrt":false
  },
  {
    "name":"Invite Me",
    "ort":"Yarraville",
    "land":"[AU] Australien",
    "gesperrt":false
  },
  {
    "name":"i-punkt Ideenwerkstatt",
    "ort":"Oberursel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"IQARGO B.V",
    "ort":"Hoofddorp",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Frankfurt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Isarbuch",
    "ort":"Ismaning",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"ISAR KOLLEKTIV",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Isenegger Papeterie GmbH",
    "ort":"Möhlin",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"ISFORT BüroTiPP! GmbH & Co. KG",
    "ort":"Münster",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Italia tre sas",
    "ort":"monza",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"Its your box GmbH",
    "ort":"Mnchen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Ivory Lane Studio",
    "ort":"Calala",
    "land":"[AU] Australien",
    "gesperrt":false
  },
  {
    "name":"Naturprodukte Fritz",
    "ort":"Murnau am Staffelsee",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Jade scharly",
    "ort":"Forcalquier",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Jadoul",
    "ort":"Tienen",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Jafajems",
    "ort":"Upper Montclair",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Jago",
    "ort":"Tenby",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"JAGO",
    "ort":"Tenby",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Janardana Yoga",
    "ort":"Saarbrücken",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Janet Bell Gallery & Lifestyle Store",
    "ort":"Beaumaris",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Janiman UG (haftungsbeschränkt)",
    "ort":"Braunschweig",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Janssens, Ilse",
    "ort":"Bierbeek",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Jasper",
    "ort":"Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"JATOBA Décoration",
    "ort":"Fleurieux-sur-l'Arbresle",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"JAX",
    "ort":"Hungerford",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"JAX Limited",
    "ort":"Hungerford",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"JCE Konzept GmbH",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Jebe GmbH",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Jehle & Rubenthaler GbR",
    "ort":"Marburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Jeli boutique",
    "ort":"Hauterive",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Jenny Fuss",
    "ort":"KINGSTON",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"jewels to go",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"JEZZA",
    "ort":"Lemmer",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"J. Horton ",
    "ort":"Madison",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"martinique",
    "land":"[MQ] Martinique",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Karlsruhe",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"JL Esthétique",
    "ort":"Namur",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"JOBAR B.V.",
    "ort":"Breda",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"John Simpson",
    "ort":"Santa Barbara",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Jo & Louise",
    "ort":"Millau",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Jonda FashionConcept",
    "ort":"Hannover",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Jong Schouwenburg",
    "ort":"De Kwakel",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Jonkmanns GmbH",
    "ort":"Dinslaken",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Jooles Fashion Agentur ",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Joosten",
    "ort":"GRAVE",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Josef Frühauf e.U.",
    "ort":"Bregenz",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Josef Frühauf KG",
    "ort":"Bregenz",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Josef Haves OHG",
    "ort":"Emsdetten",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Josiah Amari",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Joy and co",
    "ort":"Dubai",
    "land":"[AE] Vereinigte Arabische Emirate",
    "gesperrt":false
  },
  {
    "name":"JOY HOUSE OF BRANDS",
    "ort":"RODEN",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Jude?s LLC",
    "ort":"Staunton",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Judith McGrann & Friends",
    "ort":"St. Louis Park",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Juffrouw Saartje",
    "ort":"Gouda",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Jugendliebe",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Juister Tee Kontor",
    "ort":"Juist",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Julada GmbH",
    "ort":"Leipzig",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Julia Heuser - Liebe und Zeug",
    "ort":"Hannover",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Julia Hiles",
    "ort":"Kansas City",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"JULIE",
    "ort":"Burgwedel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Julie Fashion | Yummykaffee",
    "ort":"Burgwedel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Julie Gallagher T\/A IGC Gifts",
    "ort":"Hünenberg",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Jumanacha sarl",
    "ort":"Saint malo",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Jumping Bean",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Junes",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Junes Green Concept",
    "ort":"Reinbek",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Junge",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Jupette & Bermuda",
    "ort":"Waterloo",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"jus",
    "ort":"Itzehoe",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"JusComte GmbH",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Just a little thing",
    "ort":"Middelburg",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Justbe",
    "ort":"Icking",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"JustMart",
    "ort":"Westerbork",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Lingen (Ems)",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Juwelenkind",
    "ort":"Wiesbaden",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"J.W.Beeton",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"J&W Sustainable Porducts",
    "ort":"Baarn",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"KADOH",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kaffeehaus Konditorei Krönner",
    "ort":"Garmisch-Partenkirchen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kaffeekontor",
    "ort":"Wangerooge",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"kallela",
    "ort":"Schenefeld",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hüttenberg Rechtenbach",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kameme Concept",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Kanne Lifestyle",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kappius",
    "ort":"Meerbusch",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Karbstein",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Karins Schwester e.K.",
    "ort":"Berchtesgaden",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Karins Schwester e.K.",
    "ort":"Berchtesgaden",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"KAS Homewares Store",
    "ort":"Surry Hills",
    "land":"[AU] Australien",
    "gesperrt":false
  },
  {
    "name":"Kaskade ",
    "ort":"Flensburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kastner",
    "ort":"Graz",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"kata.lin conceptstore & fashion",
    "ort":"Bochum",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kate Miles Interiors",
    "ort":"Mount Pleasant",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Kate Rees Art Studio & Gallery",
    "ort":"Storridge Malvern",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Kate's & Co",
    "ort":"Corinth",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"KATES KITCHEN LIMITED",
    "ort":"Sligo",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"Kate's Room - Raum für schöne Dinge",
    "ort":"Stuttgart",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Katética",
    "ort":"ARLON",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Herford",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Katherine Beck",
    "ort":"Oxford",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"KATH&NIKI",
    "ort":"Doorn",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Katja Heil",
    "ort":"Eggenstein",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Katlenburger Kellerei GmbH & Co  KG",
    "ort":"Katlenburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Edewecht",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Zwingenberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"KAUFHAUS HAMBURG",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kaufhaus im Ort",
    "ort":"Frankfurt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kaufhaus Mitte UG",
    "ort":"Stuttgart",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"kaufhaus-popp.de",
    "ort":"trier",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kaufhaus zum Glück",
    "ort":"Aarau",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Kaufmanns' Genuss & Geschenke KG,",
    "ort":"Klosterneuburg",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Kaufrausch",
    "ort":"Kiel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kaufrausch Haarschmuck ",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kaufrausch Home ",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kazar",
    "ort":"brussels",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Keep and Care",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Keeper Concept GmbH",
    "ort":"Zürich",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Kekke kussens",
    "ort":"Hoorn",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Effretikon",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Gomaringen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Texolution GmbH",
    "ort":"Wettringen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hürth",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"SAINT PETERSBURG",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Kersaudy",
    "ort":"SAINT DENIS D'OLERON",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Silvaplana",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Kerzen am Dom",
    "ort":"Aachen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kerzen Bloemen e.K.",
    "ort":"Bedburg-Hau",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kerzenglück",
    "ort":"Oberding",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"KHÊMIA - Juliette GOSSELIN",
    "ort":"Caen",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Kians Garden",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"KIBE DESIGN",
    "ort":"Leiden",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Basel",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Kikke in huis",
    "ort":"Nijverdal",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Kimpton Everly Hotel",
    "ort":"Los Angeles",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Kinda Home Portugal SA",
    "ort":"Lissabon",
    "land":"[PT] Portugal",
    "gesperrt":false
  },
  {
    "name":"Kinderzimmer",
    "ort":"Herdecke",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kindred Salon and Shoppe",
    "ort":"Jacksonville",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Kinoko Kids",
    "ort":"Minneapolis",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Kiosco18",
    "ort":"Mühlheim am Main",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kira",
    "ort":"San Francisco",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Kira",
    "ort":"San Francisco",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"farbenfreunde GmbH",
    "ort":"Bad Oeynhausen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Wyk auf Föhr",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kirsten",
    "ort":"Ludwigsburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kisani",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kisses Ladies Fashions Inc",
    "ort":"Walkerton",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":"Kitchen Caboodles",
    "ort":"Brooklyn",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Kitchen Stories of Ballydehob",
    "ort":"County Cork",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"Kitchenwitch",
    "ort":"Boston",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Kitsch Bitch",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"KITSCH BITCH",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Kitzmann Home Company GmbH",
    "ort":"Osnabrck",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"KKLUP B.V.",
    "ort":"Winterswijk",
    "land":"[NL] Niederlande",
    "gesperrt":true
  },
  {
    "name":"Klabautermädchen",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Porto-Vecchio",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"KLAMOTTE Lieblingsladen",
    "ort":"Dießen am Ammersee",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"KlausUndSo - Marko Tomasini",
    "ort":"Erfurt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kleiderei",
    "ort":"Wieselburg",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Kleine Glückswerkstatt",
    "ort":"Pforzheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kleines Glück",
    "ort":"Kirchzarten",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kleines Glück - Deters & Hummel GbR",
    "ort":"Kirchzarten",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kleines Stadthaus´ Lieblingsteile",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kleine Sünden Föhr",
    "ort":"Wyk auf Fhr",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"KLEINformART",
    "ort":"Remchingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Klein & Wallace",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Klix - Kleine Sachen",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"knallblau",
    "ort":"Wiesbaden",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Rellingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Rosenheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Mainz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Koa Konzept",
    "ort":"Reutlingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"W.Machwitz GmbH",
    "ort":"Hannover",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Koch Papier GmbH",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Stödtlen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Koehler Florist am Freilichtmusuem",
    "ort":"Molfsee",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kohlmaier-Ecker Marianne",
    "ort":"Innsbruck",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Kohnoa GmbH",
    "ort":"Mainz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Köhrsen",
    "ort":"Borgstedt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"LIKOVRISI\/ATHENS",
    "land":"[GR] Griechenland",
    "gesperrt":false
  },
  {
    "name":"KOKON GmbH",
    "ort":"Seefeld",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kokos Gift Store",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Kolibri",
    "ort":"Rösrath",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kolonial GbR",
    "ort":"Augsburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"König Judith",
    "ort":"Mondsee",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Konsekvent",
    "ort":"Kempen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Konsekvent Kempen",
    "ort":"Kempen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Konturwerk GmbH",
    "ort":"Herrsching",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"KOOKS HENDAYE",
    "ort":"Hendaye",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"KOOPJEGADGET.NL",
    "ort":"Vlaardingen",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"kope + Loko",
    "ort":"Broadstairs",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Köpke GmbH \/ Optiker Köpke",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Korf Bürozentrum GmbH",
    "ort":"Lemgo",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hoisdorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Koslowski \/ Biermann Averbeck GbR",
    "ort":"Münster",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kosmetikstudio&Wellnessoase\/Birgit Geisreiter",
    "ort":"Traunstein",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kösters in Essen GmbH",
    "ort":"Essen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kost Kamm",
    "ort":"Windelsbach",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kotte am Markt GmbH & Co. KG",
    "ort":"Iserlohn",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kraft",
    "ort":"LISIEUX",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Kramer& Kramer",
    "ort":"Zöfing",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Bayreuth",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Krawany GmbH",
    "ort":"Mödling",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Kraxenberger",
    "ort":"Velden",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"kreativpunkt Deusser",
    "ort":"Egelsbach",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Finsing",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kress-Ochmann & Messina GbR",
    "ort":"Frankfurt am Main",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kreuzkamp",
    "ort":"Bersenbrück",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Kirchzarten",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Krijnen wealth of flowers",
    "ort":"Vianen",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Kristallgallerie  Prien",
    "ort":null,
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kristen Coates",
    "ort":"Newport",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Kristina Haevescher",
    "ort":"Biederitz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schonschön",
    "ort":"Weilheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Papenburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"K•ROSE",
    "ort":"Winfield",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Kruel",
    "ort":"Lemgo",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Bad Boll",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kuestensilber Concept Store",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Bremen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"kultpur",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kulturquartier Mecklenburg-Strelitz gGmbH",
    "ort":"Neustrelitz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kunst centrum Haarlem",
    "ort":"HAARLEM",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Kunstgewerbe Friedrich",
    "ort":"Kressbronn",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kunstgewerbehaus",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kunsthaus Schill",
    "ort":"Stuttgart",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kunstmanns",
    "ort":"Gotha",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kunstmuseum Den Haag",
    "ort":"Den Haag",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Kunstpalais & Städtische Sammlung Erlangen",
    "ort":"Erlangen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"kunstRAUM",
    "ort":"Falkenberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kunstreich, Inh. Patrick Knobbe-Berlt",
    "ort":"Magdeburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"kunstschule GbR",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kunst und Spiel",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kunst und Spiel",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kurtz Collection",
    "ort":"Wilmington",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Kurtz Collection",
    "ort":"Wilmington",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Kuschelstars by C. Trotta",
    "ort":"Dietwil",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Rimini",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"Kyle Edward Fine Jewelry",
    "ort":"SALISBURY",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"LA 13",
    "ort":"Diessen a.A.",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Label 38",
    "ort":"Bemmel",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Bayreuth",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"LABO AG",
    "ort":null,
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Labor79",
    "ort":"Wattwil",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Labor 79",
    "ort":"Wattwil",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"La Boutique de Chloé - Concept Store déco cadeaux",
    "ort":"Concarneau",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"La Buse",
    "ort":"Poulsbo",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"La Cachette",
    "ort":"Argentonnay",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"  La Casa",
    "ort":"Ahlen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"la casita decoration e.K.",
    "ort":"Wentorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"la castia decoration e.K.",
    "ort":"Wentorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"La Cendrée",
    "ort":"Toulouse",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Laclara",
    "ort":"Hoyerswerda",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Laden ABGEBRÜHT",
    "ort":"Augsburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"LADEN AN DER LINDE",
    "ort":"Aschau im Chiemgau",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Ladenglück",
    "ort":"Winterthur",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"LadenZWEI",
    "ort":"Karlsruhe",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"LadenZWEI",
    "ort":"Karlsruhe",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Läderlade\/Kitschundko",
    "ort":"Solothurn",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Lady Collective",
    "ort":"Austin",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"LA FERME",
    "ort":"CARCASSONNE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Lagniappe Decor & Gifts",
    "ort":"Paulina",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Laietana de Llibreteria",
    "ort":"Barcelona",
    "land":"[ES] Spanien",
    "gesperrt":false
  },
  {
    "name":"LAIF & NUVER B.V.",
    "ort":"Groningen",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Lake",
    "ort":"Los Angeles",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"lakeview home accessories",
    "ort":"aventura",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"L´alchimie",
    "ort":"Toulon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"La Main dans le sac",
    "ort":"Baue-mahault",
    "land":"[GP] Guadeloupe",
    "gesperrt":false
  },
  {
    "name":"La Maison de Baba",
    "ort":"Craponne",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"La Maison de Tadig",
    "ort":"QUEVEN",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"La Maison Leon",
    "ort":"Perigueux",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"La Maison Simons Inc. ",
    "ort":"Québec",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":"LA MANUFACTURE BOHEME S.A R.L.-S",
    "ort":"Luxembourg",
    "land":"[LU] Luxemburg",
    "gesperrt":false
  },
  {
    "name":"Landed Ceramics",
    "ort":"Saint-Julien-en-Born",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Lange-Buch & Medien",
    "ort":"Thedinghausen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Bremen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Langemeyer",
    "ort":"Münster",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Atzenbrugg",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Lantz Collective",
    "ort":"Naples",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"La Palausa AG",
    "ort":"Lenzerheide",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"La Paloma",
    "ort":"Tacoma",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"LA PAPAYETERIE",
    "ort":"Saint Paul",
    "land":"[RE] Reunion",
    "gesperrt":false
  },
  {
    "name":"La Petite Canaille Vintage",
    "ort":"Bordeaux",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"La petite épicerie",
    "ort":"Rouen",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Lapis Room",
    "ort":"Albuquerque",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"la pura uva s.a.c.",
    "ort":"Lima",
    "land":"[PE] Peru",
    "gesperrt":false
  },
  {
    "name":"La Rebel de Coleccion ",
    "ort":"Santa Catarina Pinula ",
    "land":"[GT] Guatemala",
    "gesperrt":false
  },
  {
    "name":"Lark London",
    "ort":null,
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Lark Press",
    "ort":"Portland",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"L’arrière boutique",
    "ort":"Corte",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"L' Articerie",
    "ort":"MIGNE-AUXANCES",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"L´Artiste",
    "ort":"Osnabrück",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"L artisterie sarl",
    "ort":"Mollkirch",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"L'atelier d'Amandine",
    "ort":"MILLAY",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"L'atelier de Lynie",
    "ort":"Soignies",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"L' Atelier Indus'",
    "ort":"Guérande",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"L‘ Atelier Papier KD GmbH & Co. KG",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"La tienda",
    "ort":"Brive la Gaillarde",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"ST VINCENT DE TYROSSE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"L'attico Shop",
    "ort":"miami",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Lausen",
    "ort":"Sittard",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Lauterbach",
    "ort":"Kreuzau",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"La vida en Tosa",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"LCK",
    "ort":"Cesson-Sévigné",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Lea Toulemonde Collections",
    "ort":"Hem",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Leben lieben - Concept Store",
    "ort":"Seevetal",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"lebens.art",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"lebensart - Metzler & Metzler-Stute GbR",
    "ort":"Celle",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Lebensecht",
    "ort":"Sendenhorst",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Lebenslust",
    "ort":"Coesfeld",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"PALAISEAU",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Le Boudoir Créatif",
    "ort":"Mulhouse",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Le bruit qui court",
    "ort":"Cavalaire-sur-Mer",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Le castor lapon",
    "ort":"Biot",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"LE CHANTIER DE JEANNE",
    "ort":"Paimpom",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"lechner + hayn GmbH & Co. KG",
    "ort":"Krefeld",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"LE COMPTOIR CONCEPT STORE",
    "ort":"Utrecht",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Le Con7ept ",
    "ort":"Beirut",
    "land":"[LB] Libanon",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Domeikava",
    "land":"[LT] Litauen",
    "gesperrt":false
  },
  {
    "name":"Leder Spahn GmbH",
    "ort":"Saarbrücken",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Leffers GmbH & Co. KG",
    "ort":"Oldenburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Leffers GmbH & Co.KG Lohne",
    "ort":"Lohne",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Legit Activewear",
    "ort":"CHESTNUT HILL",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Baierbrunn",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Straubenhardt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Leises Laut",
    "ort":"Gera",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"LE JUJUBIER",
    "ort":"charlieu",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Le kosmonaut",
    "ort":"St.-Lô",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Leli concept store",
    "ort":"Cluses",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Lelli",
    "ort":"Bern",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Lelorrain",
    "ort":"Maiche",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Le Mas blanc deco",
    "ort":"rochefort du gard",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"LE MAZOT DECOSHOP",
    "ort":"Bourg Saint Maurice",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"LE MONDE A L'ANVERS",
    "ort":"PARIS",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Lemoni – Mediterranean Favourites",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Lengermann & Trieschmann GmbH & Co. KG",
    "ort":"Osnabrück",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"LeoH. Schönheit & Stil",
    "ort":"Bracht",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Le Panda Volant",
    "ort":"Nantes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"L'épicerie Silvana Bordas",
    "ort":"Plateau de Diesse",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"L'Epicerie Vagabonde",
    "ort":"Entraigues sur la Sorgue",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"LE PLATEAU CAMPAGNARD",
    "ort":"FERTANS",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Le pop up by emma",
    "ort":"Bois-Colombes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Le Quotidien Store",
    "ort":"Toulouse",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Lesbar Kressbronner Buchhandlung",
    "ort":"Kressbronn am Bodensee",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"LES BISCOTTES",
    "ort":"BONDUES",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Les Couleurs du Bonheur",
    "ort":"Morialmé",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Lesemann",
    "ort":"Potsdam",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Les essentiels de Diana",
    "ort":"Trazegnies",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Les gazelles a vannes",
    "ort":"Vannes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Les gazelles à vannes",
    "ort":"Vannes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Les gens heureux",
    "ort":"Olivet",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"LE SHP",
    "ort":"BIARRITZ",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"les nininets",
    "ort":"Fougères",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"LES PETITS VINTAGE",
    "ort":"ANGRESSE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"LES PETITS VINTAGE",
    "ort":"ANGRESSE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Les Potelés",
    "ort":"Linselles",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Les Voisines",
    "ort":"REIMS",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Les Voisines",
    "ort":"Rosporden",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"let love sparkle GmbH",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"LEUK-ER V.O.F.",
    "ort":"Rijssen",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Le Vestiaire",
    "ort":"Woluwe-Saint-Pierre",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Levia",
    "ort":"Bømlo",
    "land":"[NO] Norwegen",
    "gesperrt":false
  },
  {
    "name":"Domestic",
    "ort":"Stroud",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Lewis & Pine",
    "ort":"Beacon",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Lewis & Pine",
    "ort":"Beacon",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"L'Exotique Montreux",
    "ort":"Montreux",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Rum",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"L?herbe haute",
    "ort":"Luingne",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"LibaMeili",
    "ort":"INZINZAC LOCHRIST",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Libelula",
    "ort":"Devizes",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Seebruck",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Librairie Au Chien Bleu",
    "ort":"Genève",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Librairie gerard",
    "ort":"Saint Denis ile de la reunion",
    "land":"[RE] Reunion",
    "gesperrt":false
  },
  {
    "name":"LIBRAIRIE MAMVP",
    "ort":"PARIS",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Librairie WK-CDA",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Libre Acces",
    "ort":"Ussel",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Licht + Design",
    "ort":"Bamberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"LIDEE FILE",
    "ort":"ARCACHON",
    "land":"[FR] Frankreich",
    "gesperrt":true
  },
  {
    "name":"Liebe",
    "ort":"Pforzheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"liebedeinestadt UG (haftungsbeschränkt)",
    "ort":"Mainz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Lieblings...",
    "ort":"Fulda",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"LieblingsDings Schönes für dich und dein Kind",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Lieblingsfeste",
    "ort":"Butzbach",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Lieblingsladen",
    "ort":"Braunschweig",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Lieblingsstück",
    "ort":"Eningen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"LIEFS UIT VEERE",
    "ort":"Zierikzee",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Liefs van Emma",
    "ort":"Terwispel",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Lietz Ybbsitz GmbH",
    "ort":"Ybbsitz",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"LIEVELINGS V.O.F.",
    "ort":"Middelburg",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Lila",
    "ort":"Wettingen",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"LILA LORENA",
    "ort":"Freiburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Lila, schöne Dinge",
    "ort":"Solothurn",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Lilbelle",
    "ort":"charlotte",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"L'île aux dames",
    "ort":"CARANTEC",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Lilimarie",
    "ort":"Flers",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"LILI SUR LA FALAISE",
    "ort":"LOCQUIREC",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Lilith's Books",
    "ort":"Los Angeles",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Lillefits",
    "ort":"Braunschweig",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Lille Kids",
    "ort":"Schwerin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Lille lispeltute",
    "ort":"Steinkirchen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"LILTIK",
    "ort":"Enghien-les-Bains",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"LiLu Perle",
    "ort":"Heilbronn",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Lily Pad Home Accessories",
    "ort":"Wicklow",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"Limited Abode",
    "ort":"Leicester",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Limonenatelier",
    "ort":"Freiburg im Breisgau",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"LIMONENATELIER",
    "ort":"Freiburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Augsburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"'Linda''s Gift - Village Post Office limited service only'",
    "ort":"Carlsbad",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Frankfurt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Linen & Sand",
    "ort":"Santa Rosa Beach",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Vogelvillaland",
    "ort":"Uffenheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"LIN-O-LUX BOGAARD ",
    "ort":"BREDA",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Lionheart Prints",
    "ort":"new orleans",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Lisa Angel Ltd",
    "ort":"Rackheath",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"LislArt",
    "ort":"Mainaschaff",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Lispiration LLC",
    "ort":"Wayne",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Listmann GmbH & Co. KG",
    "ort":"Mainz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Literatur Moths",
    "ort":"Mnchen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Littke Fish Co",
    "ort":"Footscray",
    "land":"[AU] Australien",
    "gesperrt":false
  },
  {
    "name":"Little Chateau LLC",
    "ort":"Newport",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Little Details Helsinki",
    "ort":"Helsinki",
    "land":"[FI] Finnland",
    "gesperrt":false
  },
  {
    "name":"Little Luxuries",
    "ort":"Madison",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Little Luxuries",
    "ort":"Dubai",
    "land":"[AE] Vereinigte Arabische Emirate",
    "gesperrt":false
  },
  {
    "name":"Little Merveille",
    "ort":"Montgeron",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Little Paris Limited",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Live Like This",
    "ort":"Cowes",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Living and Home Marburg ",
    "ort":"Marburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"LIVING GREEN ΑΝΩΝΥΜΟΣ ΕΚΔΟΤΙΚΗ ΚΑΙ ΕΜΠΟΡΙΚΗ ΕΤΑΙΡΕΙΑ ||LIVING GREEN ΑΕ",
    "ort":"ATHENS",
    "land":"[GR] Griechenland",
    "gesperrt":false
  },
  {
    "name":"Livingroom",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Livios GmbH",
    "ort":"Hainburg",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Liza Tye & Company",
    "ort":"Starkville",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"L. Marie's Floral boutique LLC",
    "ort":"Lincoln",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"lobo",
    "ort":"Los Angeles",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Locema GmbH",
    "ort":"Schwerin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Lockwood Shop",
    "ort":"Astoria",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Loden Frey Verkaufshaus GmbH & Co. KG",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"LOES Papendrecht",
    "ort":"Papendrecht",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Löffelhase GmbH",
    "ort":"Winterthur",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"LOFT",
    "ort":"arnhem",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"L.O.F.T. of Asheville",
    "ort":"Asheville",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Logbuch KG",
    "ort":"Bremen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Logistik Center Rheinland",
    "ort":"MECKENHEIM",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Logos Buchhandlung",
    "ort":"Winterspelt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Heide",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"LOIC Concept Store",
    "ort":"Schoonhoven",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Lois Nolan",
    "ort":"Barry",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Lolas & Nell Pet Boutique",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Londonworks",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Londur Oy",
    "ort":"Helsinki",
    "land":"[FI] Finnland",
    "gesperrt":false
  },
  {
    "name":"lonilead",
    "ort":"Begles",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"LOOK! Conzept Store",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"LOOT found  made",
    "ort":"Turners Falls",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Lorenz HandelsGmbH&CoKG",
    "ort":"Nagold",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"loretta cosima",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"LOREY",
    "ort":"Frankfurt am Main",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"LOTIC Gallery",
    "ort":"Salida",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"lottie mutton",
    "ort":"Saffron Walden",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Lottie Mutton",
    "ort":"SAFFRON WALDEN",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Lotti Klein",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Lotto- und Ticketshop Kefferstein",
    "ort":"Forchheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Lotze",
    "ort":"Silvaplana",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Lou & Company",
    "ort":"Tuscaloosa",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Lou et mad - la suite",
    "ort":"Mayenne",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"LOUii",
    "ort":"Wellington",
    "land":"[AU] Australien",
    "gesperrt":false
  },
  {
    "name":"Louise",
    "ort":"Charlottesville",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Louisiana Museum\/ Louisiana-Fonden",
    "ort":"Humlebæk",
    "land":"[DK] Dänemark",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Love Figis",
    "ort":"Tenterden",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Lovingsoul",
    "ort":"Neustadt in Holstein\/ Pelzerhaken",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Löwenzahn",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Luca und Lia - Café und Feines",
    "ort":"Barsbüttel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Lucette boutique",
    "ort":"Le Mans",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Lucky Saints",
    "ort":"Richmond",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Lucky Selectism",
    "ort":"New York",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"LucyBalu",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Ludwig Beck AG",
    "ort":"Haar",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"luella home",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Roma",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"Luise Bauer",
    "ort":"Traunstein",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schernthaner Lumpi GmbH",
    "ort":null,
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Lumturije Schmidhuber",
    "ort":"Stephanskirchen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"l univers de dothy",
    "ort":"bonnetable",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"LUP Chile",
    "ort":"Quilicura",
    "land":"[CL] Chile",
    "gesperrt":false
  },
  {
    "name":"LUPINOU ",
    "ort":"UCCLE ",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"LU Skincare",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"lusso",
    "ort":"clayton",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Luster, A Gift Boutique",
    "ort":"Shaker Heights",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Bayreuth",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Luxe Associates",
    "ort":"TUNBRIDGE WELLS",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Luxemburger",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"luxima",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Maas",
    "ort":"Veen",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Halstenbek",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"MACAM",
    "ort":"Lisboa",
    "land":"[PT] Portugal",
    "gesperrt":false
  },
  {
    "name":"MacAnge France",
    "ort":"Salon de Provence",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"St Saviour",
    "land":"[JE] Jersey",
    "gesperrt":false
  },
  {
    "name":"Macrame GmbH - Zooloose Stores",
    "ort":"Münchenstein",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"MADAME LA POULE",
    "ort":"Zoetermeer",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Madame Palou",
    "ort":"Quedlinburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Madam hlb",
    "ort":"Downham Market",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"mädchenstolz",
    "ort":"Neuss",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Nuremberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"m.a.d.e.",
    "ort":"Cirencester",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"made by moi",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Mädels(t)raum 2.8",
    "ort":"Eging am See",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Mädels(t)raum 2.8",
    "ort":"Eging am See",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"mademoiselle pampelmousse",
    "ort":"Stuttgart",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Madison",
    "ort":"Dallas",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Maedla e.K.",
    "ort":"Bamberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Mælkevejen Destilleri ApS",
    "ort":"Vordingborg",
    "land":"[DK] Dänemark",
    "gesperrt":false
  },
  {
    "name":"Magasin DHAR",
    "ort":"BLOIS",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Maggie & Stella's Cards & Gifts",
    "ort":"Pittsburgh",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Maggio, Jacqueline",
    "ort":"Mons",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Magi Gifts",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Mag. Kohlmaier-Ecker Marianne",
    "ort":"Innsbruck",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Magnolia",
    "ort":"Rochefort",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"magnolia blumen&boutique",
    "ort":"Berlin - Kreuzberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Mag. Waach-Köllensperger Katrin Theres",
    "ort":"Zell am Moos",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Mag. Widhalm Andrea",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Mag. Wimmer Michaela",
    "ort":"MISTELBACH",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"MAHASIAH",
    "ort":"Dijon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Denkendorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Maisinger",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"maison88",
    "ort":"Montélimar",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Maison Amour",
    "ort":"Bosroumois",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MAISON CELESTE",
    "ort":"MARSEILLE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Maison charlotte",
    "ort":"BRISSAC QUINCÉ",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MAISON CHARLOU",
    "ort":"PORNIC",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"maison de la presse",
    "ort":"la maison dieu",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Maison de la presse",
    "ort":"Villard-de-Lans",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Maison d‘Etre",
    "ort":"Oakland",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Maison EM",
    "ort":"MARSEILLE 06",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"maison Gaston",
    "ort":"Gap",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Maison Lei",
    "ort":"Porto-Vecchio",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Maison Meraki SARL",
    "ort":"Beirut",
    "land":"[LB] Libanon",
    "gesperrt":false
  },
  {
    "name":"Maison mimosa",
    "ort":null,
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Maison Moon",
    "ort":"ASNIERES SUR SEINE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Maison O",
    "ort":"KUWAIT",
    "land":"[KW] Kuwait",
    "gesperrt":false
  },
  {
    "name":"Maison Pivot-Badoux",
    "ort":"Nandrin",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"maison sanat",
    "ort":"la couarde",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Maisons Du Monde",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Maison Swing",
    "ort":"Paimbœuf",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Maison X Albert",
    "ort":"Pau",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Majesty and Friends",
    "ort":"Edmonton",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":"Make A Balloons",
    "ort":"LEGNANO",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"Makers Post",
    "ort":"Sullivan's Island",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"MAK - Österreichisches Museum für angewandte Kunst",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Malamosca",
    "ort":"Marseille",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Malusi",
    "ort":"Bad Aibling",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"MAMABO Shop Villach",
    "ort":"Villach",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Mamsell  strack und henderkes gbr",
    "ort":"berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Mamu",
    "ort":"Bad Wimpfen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"MANAGERIE e.U. – social design, shop, bar, kiosk, coworking and more",
    "ort":"Graz",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Sesto San Giovanni",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"Mantel",
    "ort":"Portland",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Manufactura",
    "ort":"Immenstadt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"mapipo",
    "ort":"Mühlau",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"MARACK’chic",
    "ort":"Villefranche-de-Lauragais",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MaraLou Berlin",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Mara Nolo",
    "ort":"Hannover",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"maranolo skandinavisch Wohnen & Leben",
    "ort":"Hannover",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Marc & Daniel",
    "ort":"Heiligenhafen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Marcelle et Madeleine",
    "ort":"Caux",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Marc und Jens Brune GbR",
    "ort":"Norderney",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Marcus",
    "ort":"Hinsdale",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"MARGAUX",
    "ort":"MARGATE",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":true
  },
  {
    "name":"Margaux et jane",
    "ort":"Wambrechies",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Margoo",
    "ort":"Aachen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"MARGOO STYLE",
    "ort":"Aachen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"MARGOTTE",
    "ort":"Binic-Étables-sur-Mer",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Marguillen",
    "ort":"Cornella de llobregat (Barcelona)",
    "land":"[ES] Spanien",
    "gesperrt":false
  },
  {
    "name":"Marie",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Marie & Anne Rhode GbR",
    "ort":"Neufahrn",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Mariechen",
    "ort":"Wehdel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Lavaur",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Marie Katzer",
    "ort":"Osnabrück",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Marisa Missoni",
    "ort":"Velden",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Maris Dehart",
    "ort":"Charleston",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"MARKETING IMPACT CONSULTANCY",
    "ort":"Amsterdam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Market Lifestore",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Markt Murnau am Staffelsee",
    "ort":"Murnau am Staffelsee",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"MARKTPL8TZ",
    "ort":"Weil der Stadt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Marktviertel Cafe UG",
    "ort":"Bottrop",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Marlie Concept Store",
    "ort":"BRIANCON",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Marmalade Boutique",
    "ort":"Denver",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"marmelo manufaktur brandenburg",
    "ort":"Rheinsberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Martens Agri & Park     Plantboetiek",
    "ort":"maarkedal",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Martin Aupers",
    "ort":"Havixbeck",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Neunkirchen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Mary Carey",
    "ort":"Bardstown",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"MASSAI FABRIZIO",
    "ort":"Marciana Marina",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"Masterson",
    "ort":"East Falmouth",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Mathew Watt Hair",
    "ort":"Edinburgh",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":" Mathieu, Marijke",
    "ort":"Schoten",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Bad Dürkheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Matière Grise Home Selection ",
    "ort":"Toulouse",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Matter Urban Market",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Matthias Fülle und Katja Fülle GbR",
    "ort":"Norderney",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Mattleen Schönleberei ",
    "ort":"Lüdinghausen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Mattokymppi Oy",
    "ort":"Jyväskylä",
    "land":"[FI] Finnland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Gmunden",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Mauricette Cantine",
    "ort":"Le Plan-de-la-Tour",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Mauri Concept SA",
    "ort":"Lugano",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":" Mautner-Markhof Katharina Christine Maria",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Mavie Trends GbR S.Ramsauer & S.Reyer",
    "ort":"Amstetten",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"mawehome GmbH",
    "ort":"Rutesheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"max. Leben",
    "ort":"Wolfratshausen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"May Day Paper & Post",
    "ort":"Kansas City",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Riedering",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"MAZANTI Fashion & Lifestyle",
    "ort":"Buxtehude",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"MAZURKA",
    "ort":"Sakai",
    "land":"[JP] Japan",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Bonn",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"mazzouk",
    "ort":"st peter port",
    "land":"[GG] Guernsey",
    "gesperrt":false
  },
  {
    "name":"MB-Felgen GmbH",
    "ort":"Buchholz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"MB Jaunelis",
    "ort":"Vilnius",
    "land":"[LT] Litauen",
    "gesperrt":false
  },
  {
    "name":"M BOULOUMIE ERIC CHRISTIAN ANDRE",
    "ort":"Bordeaux",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MCAULIFFE'S CRAFT SHOP LTD",
    "ort":"Dunfanaghy, Co Donegal",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"McNally Jackson Books",
    "ort":"New York",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"M & Co.",
    "ort":"Moriarty",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"M DAGNIAUX FLORIAN PIERRE MARIE",
    "ort":"Dax",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Meander Gifts",
    "ort":"Whitley Bay",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Meer-Lebensstil",
    "ort":"Meerbusch",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Meerwärts",
    "ort":"Ovelgönne",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Mein Lieblingsladen",
    "ort":"Bad Laer",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Mein Sahnestck",
    "ort":"Biebern",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Meisenbacher",
    "ort":"Pforzheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Mekelburg's",
    "ort":"Brooklyn",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Mekelburg's Domino",
    "ort":"BROOKLYN",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Ebersberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"meligraphy",
    "ort":"Maintal",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Melissa ellis fine art",
    "ort":"Round top",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Melkior",
    "ort":"Bastia",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Melmuseum Exploitatie bv",
    "ort":"Gorssel",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"mema Keramik & Wohnkultur",
    "ort":"Neuburg an der Donau",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"MeMe Antenna",
    "ort":"Brooklyn",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Memento Floral Design",
    "ort":"Belfast",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Menagerie beauty and goods",
    "ort":"Winnipeg",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":"mercado",
    "ort":"Surrey",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Mercredi",
    "ort":"Megeve ",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Mercy Vintage",
    "ort":"Oakland",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Merle & Wilde",
    "ort":"Faxe",
    "land":"[DK] Dänemark",
    "gesperrt":false
  },
  {
    "name":"Mermin",
    "ort":"Antwerpen",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Mersea",
    "ort":"La Maine",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Meschnigg Doris",
    "ort":"Graz",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Messe Frankfurt Exibition GmbH",
    "ort":"Frankfurt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Metro Cooks",
    "ort":"Auburn",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"lebensart",
    "ort":"Celle",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Mevrouw Janne",
    "ort":"Enschede",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Mevrouwstyling",
    "ort":"drachten",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hannover",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Mezzcla",
    "ort":"caracas",
    "land":"[VE] Venezuela",
    "gesperrt":false
  },
  {
    "name":"m-grafik",
    "ort":"Hannover",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"MH2",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Mia déco",
    "ort":"Allauch",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Midori Inc.",
    "ort":"Los Angeles",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Mila & Malla ",
    "ort":"Pulheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"MILAURA SRL",
    "ort":"Milano",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"MILE END",
    "ort":"Saint-Grégoire",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Essen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Mille Et Une Nuits",
    "ort":"Moissac",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Miller Weinhaus A. & A. Baumgartner GbR",
    "ort":"Eggenfelden",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":" MILLOWS B.V.",
    "ort":"Zwolle",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"MILLY",
    "ort":"HAFNARFJORDUR",
    "land":"[IS] Island",
    "gesperrt":false
  },
  {
    "name":"Milo",
    "ort":"KAMUELA",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"MILU",
    "ort":"Isny im Allgäu",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Mimikado",
    "ort":"Pont l'Abbé",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MINA FLORA",
    "ort":"Montpellier",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Minedine & Co Sàrl",
    "ort":"Lausanne",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Minimaxi",
    "ort":"Altdorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Minipünktchen - Kindermode in Berlin-Zehlendorf\/Wannsee",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"min mom",
    "ort":"Dakar",
    "land":"[SN] Senegal",
    "gesperrt":false
  },
  {
    "name":"Mintyrose GbR",
    "ort":"Leer",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Mirabella - Samira-Sophie & Nicole Ludorff GbR",
    "ort":"Bad Pyrmont",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Mira Mira",
    "ort":"Sandymount",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"Mirella",
    "ort":"Glasthule",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"Miss Daisy",
    "ort":"Las Vegas",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"MISS EIMEAR SHEEHAN",
    "ort":"Waterford",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"Miss Fox",
    "ort":"Mettmann",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Miss Green Bean",
    "ort":"Potsdam",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Miss Peacock",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Miss Souk",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Mixo Concept",
    "ort":"Panama City",
    "land":"[PA] Panama",
    "gesperrt":false
  },
  {
    "name":"Mizzi Bärnklau - Korb- und Spielwaren",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Mjuuk Conceptstore Dresden",
    "ort":"Dresden",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"ML_Design",
    "ort":"Nussloch",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"M LOUSTAUD ALEXANDRE",
    "ort":"Limoges",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME AUFFRET MARIANNE",
    "ort":"Etel",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME BEMBARON CARLA",
    "ort":"Auch",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME BONNEFOND PAULINE",
    "ort":"Lyon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME CASTEX JESSICA",
    "ort":"le Bouscat",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME COQUELIN MARIE PAULE",
    "ort":"Rennes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":" MME COULLOUD SARA",
    "ort":"Le Chateau d'Oleron",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME DAVID ISABELLE ",
    "ort":"pont chateau",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME DAY MARIE",
    "ort":"Cap ferret",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME FRIGOUT CLEMENTINE",
    "ort":"Crécy sur serre",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME HORVATH BEATRICE",
    "ort":"Saint chamond",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME JEANGEORGES SABINE JEANNE MONIQUE",
    "ort":"PEYRIAC-DE-MER",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME LAURENS CAROLINE MARIE",
    "ort":"Toulouse",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME LEFEVRE MARIE",
    "ort":"BRISSAC LOIRE AUBANCE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME LENOIR CHLOE",
    "ort":"Bayeux",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME LOT VIRGINIE",
    "ort":"Saint Pierre d’Oléron",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME LOUSTE ALEXANDRA-MARIE",
    "ort":"Gouvieux",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME MAGNAN CATHERINE",
    "ort":"Nice",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME NAVARRO AUDE",
    "ort":"Cannes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME NERI MARINELLE",
    "ort":"Saint Sulpice",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME NUNEZ FERNANDEZ PAULA",
    "ort":"Valloire",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME PARAN VANESSA MADELEINE",
    "ort":"Entraigues-sur-la-Sorgue",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME PATOUILLARD MARINE PAOLA HENRIETTE",
    "ort":"Langeac",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME PERINEAU CELINE MARIE-LAURE",
    "ort":"Chinon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME PIEN SANDRINE",
    "ort":"Hauteville-sur-Mer",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME PLATZ CAMILLE",
    "ort":"Carnac",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME PUTERSE EMMANUELLE",
    "ort":"Embrun",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"M MERCADAL STEPHANE",
    "ort":"TARNOS",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME RIBEIRO DANIELE",
    "ort":"Vitre",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME VALABREGUE MAGALI ANITA JEANNE",
    "ort":"BELLEME",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME VIGNEAU FABIENNE",
    "ort":"Pau",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME ZAMARON ANNE, MARTINE",
    "ort":"Epinal",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"MME ZITTER ANNE-CECILE",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Möbel Pfister AG",
    "ort":"Suhr",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Mobiliar",
    "ort":"Deggendorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Mockingbirs",
    "ort":"Manchester",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Mode Arlinghaus GmbH",
    "ort":"Damme",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Modeboutique La Laine",
    "ort":"Neustadt Weinstr.",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Mode Funk KG",
    "ort":"Aalen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Modehaus Zinser GmbH & Co KG",
    "ort":"Tübingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Mode Hell KG",
    "ort":"Ampfing",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"modeja",
    "ort":"Füssen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Mode Konzept Foeller",
    "ort":"Baldham",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"modelinchen conceptstore",
    "ort":"Aachen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Modern Nomad",
    "ort":"Denver",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Modewandel",
    "ort":"Flensburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Modewelt",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Modick&Herrlich GbR, Pomeranze Kaffeebar",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Modulor GmbH",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Moeskops",
    "ort":"VELDHOVEN",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Mohren-Haus",
    "ort":"Bamberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"MOJO",
    "ort":"Twickenham",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Molly Roger - Concept Store",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"moloo conceptstore",
    "ort":"Lübeck",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"MoMA Design Store",
    "ort":"New York",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Mond",
    "ort":"Monschau",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Monfetti Ltd",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Mon Joie",
    "ort":"Monschau",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Monkee's of Naples",
    "ort":"Naples",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Monkee's of Naples",
    "ort":"Naples",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"monomint",
    "ort":"Stuttgart",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Monsieur Vintage",
    "ort":"Capbreton",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Montana Coffee Traders Inc",
    "ort":"Whitefish",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Bad Vilbel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Montebelluna Tv",
    "ort":"italia",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"MOOI GmbH",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Moonline.nl",
    "ort":"Hoogeveen",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"MOPERTEI \/\/ Bücher \/\/ Grafik & Illustration",
    "ort":"trin mulin",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Lyon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"moquadrat",
    "ort":"Erfurt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"More than grey",
    "ort":"Mönchengladbach",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Antony",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Morgantini GmbH",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"morgenthau",
    "ort":"St. Peter-Ording",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Morthorst",
    "ort":"münster",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"MOSSAPOUR Interior Designs OHG",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"MotherDock",
    "ort":"Rotterdam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Mouflette Malo",
    "ort":"Dunkerque",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"M. PETRIDI - DAFNI P. PRIVATE COMPANY ",
    "ort":"ATHENS",
    "land":"[GR] Griechenland",
    "gesperrt":false
  },
  {
    "name":"M Raaphorst",
    "ort":"Den Haag",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Mrs Goodwill",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Mrs Zebra ",
    "ort":"Athen",
    "land":"[GR] Griechenland",
    "gesperrt":false
  },
  {
    "name":" MS ASH MAGUIRE",
    "ort":"Tralee",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"MS CAROLINE SWEENEY",
    "ort":"GLASHEEN,CORK,Ireland",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Los Angeles",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"MS EMILY CULLEN",
    "ort":"Ballinspittle",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"M\/S Museet for Søfart",
    "ort":"Helsingør",
    "land":"[DK] Dänemark",
    "gesperrt":false
  },
  {
    "name":"MS NINA EVANS",
    "ort":"bantry",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"Mudam Store",
    "ort":"Luxembourg",
    "land":"[LU] Luxemburg",
    "gesperrt":false
  },
  {
    "name":"Muecke GmbH",
    "ort":"Scheßlitz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Müller Lebensraum Garten GmbH",
    "ort":"Mauer",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Müller & Meirer Store",
    "ort":"Wiesbaden",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Kichechef",
    "ort":"Mamer",
    "land":"[LU] Luxemburg",
    "gesperrt":false
  },
  {
    "name":"Müller´s Hamburg",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Münch",
    "ort":"Bad Berneck",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Münchner Hof Papeterie",
    "ort":"Starnberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Herrsching",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Mur Mur SPRL",
    "ort":"Perwez",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Muse sarl",
    "ort":"Lorient",
    "land":"[BL] St. Barthélemy",
    "gesperrt":false
  },
  {
    "name":"museumgoods",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Museum Of Arts And Design",
    "ort":"NEW YORK",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Museum of Contemporary Art Chicago Store",
    "ort":"Chicago",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Museum of the City of New York",
    "ort":"New York",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Museum Reinhard Ernst gGmbH",
    "ort":"Wiesbaden",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Mechernich",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Muskoka Powersports",
    "ort":"Utterson",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Bremen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"M VINCENT CLAUDIE CLAIRE",
    "ort":"le  cres",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"My Little Bijou",
    "ort":"Aix-en-Provence",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"My Little Present",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Myme",
    "ort":"Saarbrücken",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"MYSTERE ET BOULE DE GOMME",
    "ort":"ST CYR AU MONT D OR",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Myysa UG (haftungsbeschränkt)",
    "ort":"Dresden",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Nadia Sommerfeld\/Bummelboutique",
    "ort":"Erlangen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Sindelfingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Reigoldswil",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Steinenbronn",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Nahcotta",
    "ort":"Portsmouth",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Nahcotta",
    "ort":"Portsmouth",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Nahcotta",
    "ort":"Portsmouth",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Nahcotta",
    "ort":"Portsmouth",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Nähe Main",
    "ort":"Frankfurt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Nahne Tillmann Design & Papeterie",
    "ort":"Dachau",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Narwhal Interiors",
    "ort":"Suffolk",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Narwhal Interiors",
    "ort":"Suffolk",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Naschmarkt am Dom Christiane Kern",
    "ort":"Frankfurt am Main",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Ulm",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Natur und Schönes",
    "ort":"Wandlitz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Natuurhistorisch Museum Rotterdam",
    "ort":"Rotterdam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Necklays",
    "ort":"Münster",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"NELLIE AND DOVE",
    "ort":"Deddington",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Nel & Luna",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Nelly Karlson",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Nengel",
    "ort":"Dahlheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"NeonGrijs",
    "ort":"Utrecht",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Neon Nouveau",
    "ort":"Calgary",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":"NEONTHREAD",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Nephrologische Praxis - Dialysezentrum",
    "ort":"Murnau",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Nest",
    "ort":"San Francisco",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Nestology",
    "ort":"Grand Rapids",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Neuber-Fengler",
    "ort":"Braunschweig",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Neue Zeiten",
    "ort":"Rheda-Wiedenbrück",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Neuland GmbH \/emma 2.0",
    "ort":"Bad Tölz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"neuzeit",
    "ort":"Traunstein",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Nevez",
    "ort":"Auray",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"New York Public Library Gift Shop",
    "ort":"New York",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"NH design studio",
    "ort":"Mount Pleasant",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Nica's Cosmos - favourites for kids & mums",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Niche flowershop",
    "ort":"Rotterdam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Nicolaus",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Nicole Lhotte",
    "ort":"Nancy",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Nicole & Patrick Hallmann GbR",
    "ort":"Brüggen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Niessen",
    "ort":"Meijel",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Nima Lieblingsstücke",
    "ort":"Frankfurt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Nineteen Ten",
    "ort":"Vancouver",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":"Nini Cafe und Konditorei",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Ninkov, Tosca & Letsche, Lukas GbR",
    "ort":"Tübingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"NippS49",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Tatanka",
    "ort":"Füssen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Nitty Gritty",
    "ort":"Riemerling",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"No 1 Kingsway",
    "ort":"Market Rasen,  lincolnshire.",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"noi",
    "ort":"Krefeld",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Nölker & Nölker",
    "ort":"Oldenburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Nom: ΑΝΤΩΝΗΣ ΚΡΑΣΣΑΣ ΚΑΙ ΣΙΑ ΕΕ",
    "ort":"ATHENS",
    "land":"[GR] Griechenland",
    "gesperrt":false
  },
  {
    "name":"NonSoloGiocattoli di Mattei Nicola",
    "ort":"Malcesine",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"Nook GmbH",
    "ort":"Zürich",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Noon Design Shop",
    "ort":"Warwick",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"NO REGRETS",
    "ort":"Würzburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"northern lights",
    "ort":"Wellsville",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Noteworthy Paper & Press",
    "ort":"Missoula",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Notice",
    "ort":"Glenview",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"NOTOS COM HOLDINGS SA",
    "ort":"KIFISIA",
    "land":"[GR] Griechenland",
    "gesperrt":false
  },
  {
    "name":"Nou Lifestyle ",
    "ort":"Bad Nauheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Paderborn",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"NOWVA INTÉRIEUR",
    "ort":"PARMAIN",
    "land":"[FR] Frankreich",
    "gesperrt":true
  },
  {
    "name":"nuBest Salon and Spa",
    "ort":"Manhasset",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Nubia écostore",
    "ort":"Quéven",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Null sechs mini",
    "ort":"Höchberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Nutklaus",
    "ort":"Cangas de Onís",
    "land":"[ES] Spanien",
    "gesperrt":false
  },
  {
    "name":"Nyhuis GmbH",
    "ort":"Damme",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Damme",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Nykvist",
    "ort":"Oslo",
    "land":"[NO] Norwegen",
    "gesperrt":false
  },
  {
    "name":"Oak Lane Home & Garden",
    "ort":"Newbridge",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"Oberauer GmbH",
    "ort":"Günzburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Objet dart",
    "ort":"Cashiers",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Objet Fier",
    "ort":"Basel",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"OCTAEVO DESIGN SL",
    "ort":"Barcelona",
    "land":"[ES] Spanien",
    "gesperrt":false
  },
  {
    "name":"ODA",
    "ort":"Milano",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"O'DE ROSE",
    "ort":"DUBAI",
    "land":"[AE] Vereinigte Arabische Emirate",
    "gesperrt":false
  },
  {
    "name":"Officina del fiore",
    "ort":"Cento",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"OFULL",
    "ort":"SUCCIEU",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"OGAWA MIKA",
    "ort":"Rezzato",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"Ogden Museum of Southern Art",
    "ort":"New Orleans",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"oheim Conceptstore GmbH",
    "ort":"Frankfurt am Main",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Oh Fleurs",
    "ort":"Castelnau-le-Lez",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Oh Happy Day",
    "ort":"Tacoma",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Ohh Deer",
    "ort":"Burton-On-The-Wolds, Loughborough",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Ohlendorf",
    "ort":"Freiburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Ohne Schmarrn",
    "ort":"Markt Indersdorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Ohooo  Daniela Wilke Vintage Interior",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"oh shop",
    "ort":"Torino",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"oh Sveni yeah",
    "ort":"Stolberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"OH SVENI YEAH",
    "ort":"Stolberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"OILILY B.V.",
    "ort":"Bergen",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"oiss&co",
    "ort":"Starnberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"OKIL DENDA STORE",
    "ort":"HONDARRIBIA",
    "land":"[ES] Spanien",
    "gesperrt":false
  },
  {
    "name":"OKOMOI",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Berching",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Olivier's Lounge",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"OLLECH NORA",
    "ort":"Bozen",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"OLLECH NORA",
    "ort":"Bozen",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"ÖLmühle Solling Mühlenladen GmbH",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"OLSONS \/ Sarl les jardins de sana'a",
    "ort":"Carnac",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"olympiccards",
    "ort":"Voorhout",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"OMO Jewels & Gifts",
    "ort":"Westerly",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"On Centre",
    "ort":"Boston",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"One Stitch Beyond",
    "ort":"Erftstadt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Onkel Stereo",
    "ort":"Duisburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Onno GmbH",
    "ort":"Zürich",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"On the other fish - les imprimeuses",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"OOK",
    "ort":"Woerden",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Ooobox",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"ORDERCHAMP B.V.",
    "ort":"Amsterdam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"ORDERCHAMP B.V.",
    "ort":"Nieuwstadt",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"ORDERCHAMP B.V.",
    "ort":"NEDERWEERT",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"ORDERCHAMP B.V.",
    "ort":"Bovenkarspel",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Orell Füssli Thalia AG",
    "ort":"Zürich",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"originelly",
    "ort":"Celle",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Ortloff GmbH",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"OSO vintage and modern",
    "ort":"Ojai",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Österreichische Galerie Belvedere",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"o.t.b.t. off the beaten track",
    "ort":"Frankfurt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Othmar Richterich AG",
    "ort":"Laufen",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Otto F.K. Koch",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Our Favorite Things",
    "ort":"Kansas City",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Outer Spaceways",
    "ort":"Hamtramck",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"outfit",
    "ort":"Frankfurt am Main",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"O vents d’anges",
    "ort":"Wiwersheim",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Overbeck and Friends",
    "ort":"Krailing",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Over the Moon Fine Foods",
    "ort":"Telluride",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"OVS SpA ",
    "ort":"Venezia Mestre",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"oxygen",
    "ort":"montpellier",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Oy Randomex Ab",
    "ort":"Helsinki",
    "land":"[FI] Finnland",
    "gesperrt":false
  },
  {
    "name":"Ozone Beach Club LLC dba The Ozone",
    "ort":"Oceanside",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"PABOOM",
    "ort":"Victoria",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":"Page 111",
    "ort":"Verviers",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Pagenberg Concept Store",
    "ort":"Heepen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Pagliara  Gmbh",
    "ort":"Schwyz",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Pagliara Plus GmbH",
    "ort":"Schwyz",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Paléologos",
    "ort":"VIEUX-BOUCAU-LES-BAINS",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"PALL CENTER EXPLOITATION S.A.",
    "ort":"Oberpallen",
    "land":"[LU] Luxemburg",
    "gesperrt":false
  },
  {
    "name":"PampelSuse",
    "ort":"Ingolstadt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Pamplone",
    "ort":"Epagny Metz-Tessy",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Pandstore",
    "ort":"Meppel",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Panomi",
    "ort":"Olching",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Panqueca",
    "ort":"Casal Do Marco",
    "land":"[PT] Portugal",
    "gesperrt":false
  },
  {
    "name":"Panta Panta",
    "ort":"Leipzig",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Paperbeck",
    "ort":"Wiesbaden",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Paper Epiphanies Shop",
    "ort":"Portland",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Papergrafix ",
    "ort":"Toronto",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":"Paper On the Avenue",
    "ort":"Richmond",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"PAPER TIGER",
    "ort":"EDINBURGH",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Paper Twist",
    "ort":"Charlotte",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Papeterie Petersen OHG",
    "ort":"Essen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Papeterie Zumstein AG",
    "ort":"Zürich",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Papierblume",
    "ort":"Pullach im Isartal",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Papierhaus",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Papier Merveille",
    "ort":"Caluire-et-Cuire",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Papier und buch",
    "ort":"bonn",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Papini",
    "ort":"Frankfurt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Pappnase",
    "ort":"Stuttgart",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Pappsalon",
    "ort":"Itzehoe",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Papu",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Papyrien",
    "ort":"Mannheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Parabello",
    "ort":"Clarks Summit",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Paragraph Amsterdam",
    "ort":"Amsterdam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"PARAGRAPH EVENT-STYLING",
    "ort":"Amsterdam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"PARATIISIPAJA",
    "ort":"KUSTAVI",
    "land":"[FI] Finnland",
    "gesperrt":false
  },
  {
    "name":"Parfümerie Hickmann",
    "ort":"Annaberg-Buchholz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Parker & Otis",
    "ort":"Durham",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"PartyDreams OG",
    "ort":"Weidlingbach",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Pasang Teppich & Design",
    "ort":"Forchheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Pascal Dröge \/ Pannenklöpper Design",
    "ort":"Olpe",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Paseo 79 Concept store",
    "ort":"Almería",
    "land":"[ES] Spanien",
    "gesperrt":false
  },
  {
    "name":"Pastis Olive",
    "ort":"Pennedepie",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"PATA soul",
    "ort":"Leipzig",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Paulette concept store",
    "ort":"Le Touquet-Paris-Plage",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Wels",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Pavenstädt - Westhoff",
    "ort":"Herzebrock-Clarholz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Payreder",
    "ort":"Perg",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"peacehändchen",
    "ort":"Regensburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"peace & RIOT",
    "ort":"Brooklyn",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Pearl Mode",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Peccato",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Pecht GmbH ",
    "ort":"Bad Neustadt an der Saale",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Ratingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Penny Lane Lifestyle Store",
    "ort":"Liverpool",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"PEONIES",
    "ort":"Mulhouse",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"PEONY PAINT & INTERIOR ",
    "ort":"'S-GRAVENHAGE",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Pépite Store",
    "ort":"Vernon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Peppermint Park",
    "ort":"AVENTURA",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"perCasa",
    "ort":"Krefeld",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Perch Plants and Odds and Ends",
    "ort":"Phoenixville",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"perlenfischer e. K.",
    "ort":"Frankfurt am Main",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Persephone's Panopticum",
    "ort":"Emmen",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Ottobrunn ",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"PETER G. oHG",
    "ort":"Pulheim",
    "land":"[DE] Deutschland",
    "gesperrt":true
  },
  {
    "name":"Peters",
    "ort":"Eindhoven",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Peter Schmitt",
    "ort":"Bensheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Petersen",
    "ort":"Halstenbek",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Münster",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Karben",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Austin",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Petit Depot & BougieBougie",
    "ort":"Haarlem",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Petra Esser Buchhandel GmbH & Co. KG",
    "ort":"Kaarst",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Petra Penz Art Direction & Design",
    "ort":"Balingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Petronella",
    "ort":"gießen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Münster",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Starnberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Pfeiffer am Rathaus",
    "ort":"Wasserburg am Inn",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"pfiffikus-spielzeug",
    "ort":"Nürnberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Pflanzenhandel A. Harms GmbH & Co. KG",
    "ort":"Sillerup",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Pflanzenhandel A.Harms GmbH & Co.KG",
    "ort":"Lindewitt OT Sillerup",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Pflanzen-Kölle Gartencenter GmbH & Co. KG",
    "ort":"Heilbronn",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Phantasalto GmbH",
    "ort":"40545",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Phantom Peak London",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"phileli",
    "ort":"Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Phoebe Peacock",
    "ort":"Burbank",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"PickledPomPom",
    "ort":"RATHANGAN",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"PICKLED POM POM PRINT STUDIO",
    "ort":"Rathangan",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"Picnic",
    "ort":"San Francisco",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Picnic",
    "ort":"arcachon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"piha store",
    "ort":"lavandou",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"PIKIKOS, LDA",
    "ort":"Lisboa",
    "land":"[PT] Portugal",
    "gesperrt":false
  },
  {
    "name":"Pimponette",
    "ort":"Châteauneuf du Pape",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Wiesbaden",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Pingi ao Cubo",
    "ort":"Massama",
    "land":"[PT] Portugal",
    "gesperrt":false
  },
  {
    "name":"Pink and Tan",
    "ort":"Evanston",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"PinkGirls.Pink",
    "ort":"West Bloomfield",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Pink, Home and Gifts",
    "ort":"New York",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Pink Mary Ltd.",
    "ort":"TURNBRIDGE WELLS",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"pinkmilk GbR",
    "ort":"Osnabrück",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"pink & spicy GmbH - Violas' RV",
    "ort":"Ravensburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Pinu",
    "ort":"Augsburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Pinu",
    "ort":"Bayern - Augsburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Pippilotta",
    "ort":"hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Pircher Moden KG",
    "ort":"Ellmau",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"PIST STORE",
    "ort":"BERLIN",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Pixie & The Boy",
    "ort":"Chicago",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Plaisir Cosy",
    "ort":"La Redorte",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Plan be GmbH",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Planet-Horse GmbH",
    "ort":"Saerbeck",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Plants",
    "ort":"Rancho Palos Verdes",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Plastic-Haus Gesellschaft m.b.H.",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Platform",
    "ort":"Canterbury",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Plattner & Plattner AG",
    "ort":"Pontresina",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Play Products AS - Things With A Story",
    "ort":"Stavanger",
    "land":"[NO] Norwegen",
    "gesperrt":false
  },
  {
    "name":"Plein Vijf",
    "ort":"Elst",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"PLEK AMELAND",
    "ort":"NES",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Ploum Sàrl",
    "ort":"Carouge",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Plugge",
    "ort":"DIEMEN",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"PLUME CONCEPT",
    "ort":"Mornac-sur-Seudre",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Poetic in Rock",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":true
  },
  {
    "name":"pöhlmann",
    "ort":"Münchberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"point virgule",
    "ort":"CAEN",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Pokey",
    "ort":"Newcastle",
    "land":"[AU] Australien",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Polstermöbel Gebhart GmbH",
    "ort":"Weidenberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Pöltl",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"POM London",
    "ort":"Stow On The Wold",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"PON",
    "ort":"Gloucester",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Pooltechnik Hollmann",
    "ort":"Rietberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Poor George",
    "ort":"Cold Spring",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Popp",
    "ort":"Erkheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Quimper",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Postalworks",
    "ort":"Los Angeles",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Frankfurt Am Main",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Poulpe Fiction",
    "ort":"Marseille",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Poupie",
    "ort":"Le Porge",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Power and Light Press",
    "ort":"Silver City",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"DREIEICH",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Prachtstück",
    "ort":"Mosbach",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Krailling",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Prelude & Dawn",
    "ort":"Los Angeles",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Prelude & Dawn",
    "ort":"Los Angeles",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"PRESENT & PAPER",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Presse& Lotto Annahmestelle im Edeka Zurheide",
    "ort":"Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"previous homewares",
    "ort":"Corsham",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Previous Homewares",
    "ort":"Corsham",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Prezzie",
    "ort":"Rosmalen",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Primera Ameland",
    "ort":"Buren Ameland",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Primera Moordrecht",
    "ort":"Moordrecht",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"PRINK",
    "ort":"Oakham",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Prior GmbH",
    "ort":"Moers",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Privat Corner",
    "ort":"Montcuq",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"BERLIN",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"PROJECT 29 GIFTS LIMITED",
    "ort":"Dublin 7",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"promo international ",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"propella gmbh",
    "ort":"Feldkirch",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Proper Wax",
    "ort":"Atlanta",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Prunelle ",
    "ort":"Montréal",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Bamberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"PTY10007085",
    "ort":"L'Hospitalet de Llobregat",
    "land":"[ES] Spanien",
    "gesperrt":false
  },
  {
    "name":"Puce et plus",
    "ort":"Bern",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Pumpkinseeds",
    "ort":"Lexington",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Punk & Poodle",
    "ort":"Pulborough",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Punk & Poodle",
    "ort":"Pulborough",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Pünktchen",
    "ort":"Grünwald",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"punkt&komma",
    "ort":"Ulm",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Punkt Schmuck und Schönes",
    "ort":"Auerbach",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Punkt und Strich",
    "ort":"Gießen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Puralei Laden & Cafe",
    "ort":"Rottenburg a. d. Laaber",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Pure Living Herborn & Helmer GbR",
    "ort":"Wiesbaden",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Purelivingshop",
    "ort":"Mainz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Pures Glück",
    "ort":"Rastede",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Pur Natur GbR",
    "ort":"Moers",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Purper & Purper",
    "ort":"Kronberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Purpur Apotheke KG",
    "ort":"Graz",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Purzmuzel Spielhaus",
    "ort":"Penzberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Napoli",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"QUAI BOHEME",
    "ort":"Noirmoutier-en-l'Île",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"QueChaLe",
    "ort":"Bochum",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Queen Style",
    "ort":"Eckernförde",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Quince & Cook",
    "ort":"Perth",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"RABAUW",
    "ort":"Bovenkarspel",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"RACHELLE DELCROIX",
    "ort":"Zundert",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"RACHELLE DELCROIX",
    "ort":"Zundert",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Räder&Form GmbH&Co.KG",
    "ort":"Bochum",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Raeymaekers",
    "ort":"Kasterlee",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"RAHMEN ART",
    "ort":"Saarbrücken",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Raible",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Rakib, Sofian",
    "ort":"Quaregnon",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Ralfi's Kostbarkeiten",
    "ort":"Perchtoldsdorf",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"rameckers",
    "ort":"VENLO",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Randy Neal Floral Design, Inc.",
    "ort":"Leawood",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Rappelkiste Schenken",
    "ort":"Trier",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Rare Bird",
    "ort":"Edmonton",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":"Rare Device",
    "ort":"San Francisco",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Rare Form Chicago",
    "ort":"Chicago",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Rares",
    "ort":"Rouen",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Rasselfisch GmbH",
    "ort":"Karlsruhe",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Raty, Aline",
    "ort":"bois de villers",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"raumcult",
    "ort":"Speyer",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Raum & Göbl GmbH",
    "ort":"Wendelstein",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"RAUMTRAUM",
    "ort":"Rellingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Razmataz Salon",
    "ort":"Georgetown",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"RCB GmbH",
    "ort":"Ettlingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"RCB Vertriebs- und Marketinggesellschaft mbH",
    "ort":"Ettlingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Ready boots sk",
    "ort":"La Clusaz",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Rebel",
    "ort":"Grand Rapids",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Red Hen Trading",
    "ort":"Nailsworth, Glos",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Red Hen Trading",
    "ort":"Nailsworth, Glos",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Reed's",
    "ort":"Tupelo",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"regali ",
    "ort":"Friedberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"ReHaus, LLC",
    "ort":"Mustang",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"RE Home Ltd",
    "ort":"Corbridge, Northumberland",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Mellrichstadt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Murnau",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"82418 Murnau",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Reichert1850",
    "ort":"Nagold",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Remember Me",
    "ort":"Aichach",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Reni´s Blickfang",
    "ort":"Baiersdorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Renner GmbH & Co. KG",
    "ort":"Hameln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Renson",
    "ort":"Cerexhe Heuseux",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Repertoire GmbH",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"res anima GbR",
    "ort":"Dießen am Ammersee",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Resort B Handels GmbH ",
    "ort":"Innsbruck",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Restaurant Auszeit",
    "ort":"Murnau",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Restyle2",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Retail Therapy",
    "ort":"Seattle",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Retro Party Co.",
    "ort":"Wadsworth",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"RF Retail GmbH",
    "ort":"Hilter a.TW.",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"RH STUDIO",
    "ort":"KETTON",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Richie´s",
    "ort":"Stuttgart",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"RICHTER",
    "ort":"Weiden",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Fürth",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"RIEDER FLEURS SÀRL",
    "ort":"BLONAY",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"rikiki Grafik & Produkt",
    "ort":"Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Riot Lounge",
    "ort":"Hitchin, Hertfordshire",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Riot Lounge",
    "ort":"Hitchin, Hertfordshire",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Rising Star",
    "ort":"Tenterden",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Riva Maison GmbH",
    "ort":"Hannover",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"RIXABERLIN",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"RMN Musée du Luxembourg",
    "ort":"PARIS",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"ROAM by The Drifting Bear Co",
    "ort":"Teignmouth",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Edel Werk GmbH",
    "ort":"Gescher",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Robert Li",
    "ort":"Hong Kong",
    "land":"[HK] Hongkong",
    "gesperrt":false
  },
  {
    "name":"Rockett St George Limited",
    "ort":"Ditchling Common",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Trebur",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Roest",
    "ort":"WAALWIJK",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Rohrer Biogärtnerei & Blumen",
    "ort":"Buchs",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Rolf Buck style with a smile GmbH",
    "ort":"Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Romano",
    "ort":"Erp",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"ROMC Medical Day Spa and luxury gift shop",
    "ort":"Clermont",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Cherbourg-en-Cotentin",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Rood&Bloem",
    "ort":"Utrecht",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Room Nine Concept Store",
    "ort":"Bonn",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Roorda",
    "ort":"GIETEN",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Rooted",
    "ort":"Rockford",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Rooted",
    "ort":"Rockford",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Roots lounge bude",
    "ort":"Bude",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"rosabraun",
    "ort":"Stuttgart",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Rosabuntes Lädchen ",
    "ort":"Bissendorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Rosanna Spring",
    "ort":"Lyon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"rosa.rot",
    "ort":"Bad Homburg vor der Höhe",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Rosarot",
    "ort":"Schondorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Rosa Rugosa Seaside Market",
    "ort":"Hubbards",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":"Rose bonheur",
    "ort":"St briac sur mer",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Rose Ceremony Shop",
    "ort":"Hamilton",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":"Rose Citron",
    "ort":"Leucate",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Rose lille",
    "ort":"Lille",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Rose & Lyons",
    "ort":"bruton",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Rosenblatt",
    "ort":"Garmisch-Partenkirchen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Rosenkranz",
    "ort":"Habichtswald-Ehlen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Rosen Kult",
    "ort":"Geretsried",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Rosenrot",
    "ort":"Rostock",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"rose & thorn",
    "ort":"london",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Roskam, Isabelle",
    "ort":"Fexhe-Slins",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Ross",
    "ort":"Lancashire,",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Roß",
    "ort":"Glücksburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Rother",
    "ort":"Schwäbisch Hall",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Rottmann",
    "ort":"Braunschweig",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Roumen",
    "ort":"Bunnik",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Row.",
    "ort":"Miami Beach",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Rowbotham",
    "ort":"Herbolzheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Roxtons",
    "ort":"Baydon",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"ROYAL BLOOM",
    "ort":"Lausanne",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Royaume MELAZIC",
    "ort":"Lausanne",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"R+R",
    "ort":"Clearwater Bay",
    "land":"[HK] Hongkong",
    "gesperrt":false
  },
  {
    "name":"RSVP",
    "ort":"Iowa City",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"RUA, arch 1, 303 holloway road",
    "ort":"london",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Rubel-Brüggen",
    "ort":"Erftstadt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"RUE DES BASKETS - SARL LE SHOP",
    "ort":"Saint-Lô",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Rue Juliette",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Rummet i Sundsvall AB",
    "ort":"Sundsvall\/Medelpad",
    "land":"[SE] Schweden",
    "gesperrt":false
  },
  {
    "name":"Rummet i Sundsvall AB",
    "ort":"Malmo",
    "land":"[SE] Schweden",
    "gesperrt":false
  },
  {
    "name":"Runaway Poppy",
    "ort":"New York",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Schweindorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Glattfelden",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Rüster Stacklies e.K.",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Rustika AS ",
    "ort":"Sandnes",
    "land":"[NO] Norwegen",
    "gesperrt":false
  },
  {
    "name":"RUTA TERRA APPARELL HOLDING",
    "ort":"IBIZA",
    "land":"[ES] Spanien",
    "gesperrt":false
  },
  {
    "name":"Rüter Schreibkultur",
    "ort":"Bielefeld",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Ruxton Mercantile",
    "ort":"Charlotte",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Ruxton Mercantile",
    "ort":"Baltimore",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Saak kado&interieur",
    "ort":"Laren",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Villa Sabatino",
    "ort":"Herzogenaurach",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Sabine Hofius Design GmbH",
    "ort":"Dortmund",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Chestnut Hill",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Sacree panthere",
    "ort":"Reims",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"sadlite GbR",
    "ort":"Schwandorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Safi Vintage",
    "ort":"Meux",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Sage Centauress",
    "ort":"Chandler",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Salima Kinderschätze GmbH",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Sallioglu",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Salomon",
    "ort":"Oberursel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Salt & Sundry",
    "ort":"Washington",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Salty Boutique ",
    "ort":"Rochester",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Landshut",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Samascha",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Sam & Lex Studio",
    "ort":"Weston",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Sammelkunde",
    "ort":null,
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"samsara edition",
    "ort":"CAP FERRET",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SANARA",
    "ort":"JACA",
    "land":"[ES] Spanien",
    "gesperrt":false
  },
  {
    "name":"Sanctuary Botanicals",
    "ort":"Lawrenceburg",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Sandersons Department Store",
    "ort":"Sheffield",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Sanni 7",
    "ort":"Herdecke",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"SANSIRA",
    "ort":"STOMPETOREN",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"SA OLBAPA",
    "ort":"Ham-sur- Heure",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Saperlipopette",
    "ort":"Vire-Normandie",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Sapperlott",
    "ort":"Engelberg",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Sarah Styles Florist - Hungerford",
    "ort":"Hungerford",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"SARL ACSJ",
    "ort":"Bracieux",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Sarl Adeline Colcanap\/ L'échelle des saveurs",
    "ort":"Cesson-sévigné",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL ADRESSE LIVING",
    "ort":"Clermont Ferrand",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL AINA",
    "ort":"Levallois Perret",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL A LA VEGETALE",
    "ort":"Nîmes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"sarl allo la lune",
    "ort":"albi",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL A L P",
    "ort":"Annecy",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL ALPHEE",
    "ort":"ste foy les lyon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"sarl alysav",
    "ort":"montauban",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL AME",
    "ort":"Ault, Picardie, France",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL ARCOMEDIA",
    "ort":"Florac-Trois-Rivières",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL ARTS DECO",
    "ort":"San-Nicolao",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL ATELIER ASCH EVENT",
    "ort":"saumur",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL ATELIER FRANCHINI",
    "ort":"Carpentras",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL AT PAMPLEMOUSSE",
    "ort":"Nort-sur-Erdre",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL AUDREY ARCHIMBAUD",
    "ort":"CLERMONT FD",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL AU FIL DU TEMPS",
    "ort":"Levallois",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL A Z CONSTRUCTIONS",
    "ort":"Roscoff",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL BETA SIERRA",
    "ort":"Cugnaux",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL Betty Blue",
    "ort":"La Trinité-sur-Mer",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL BIENVENUE CONCEPT STORE",
    "ort":"Saint-Brieuc",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL BIODELICE",
    "ort":"Porto-Vecchio",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL BOUNE",
    "ort":"Merignies",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL C A L M-DECO",
    "ort":"YQUELON",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL Camille concept'n cie",
    "ort":"BOURG EN BRESSE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL CAMILLE CONCEPT STORE",
    "ort":"Bourg en Bresse",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL CAPRICES ET COMEDIES",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL CARMET",
    "ort":"Cesson-Sévigné",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL C COMME A LA MAISON",
    "ort":"Pontault-Combault",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL CENTRACOME",
    "ort":"LYON",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL CEZAK",
    "ort":"ST DENIS EN VAL",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL CHAUSSURES VINE A ET COMPAGNIE",
    "ort":"Saint-Avold",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL CHEZ CHARLOTTE",
    "ort":"Nantua",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL CHEZ LES VOISINS",
    "ort":"BELLEME",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL CHLO'CONCEPT",
    "ort":"Decize",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL CL2V",
    "ort":"LYON",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL CLEMENTINE",
    "ort":"Marseille",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL CLWG",
    "ort":"Boulogne",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL COCCINELLE",
    "ort":"Chantilly",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL COME ON BABY",
    "ort":"AYTRE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL CONCEPT STORE KELLY ARTY",
    "ort":"Mennecy",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL CRAIE CRAIE",
    "ort":"Lyon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL CREATIONS DU MONDE",
    "ort":"Lyon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL CREATIONS VIP",
    "ort":"aix en provence",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL C VANDEPUTTE",
    "ort":"Marcq-en-Barœul",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL DCA",
    "ort":"Villeurbanne",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Sarl decoux textiles",
    "ort":"Tournon-sur-Rhône",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL DEMAIN STORE",
    "ort":"Rennes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL DES GRAINES DE BONHEUR",
    "ort":"St Gilles",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL DESIGN FROM PARIS",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL DESORDRE CHERI",
    "ort":"LA ROCHELLE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL DESORDRE URBAIN",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL DIAPASON",
    "ort":"Reims",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL DORREA",
    "ort":"Saint Jean de luz",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL E2MA",
    "ort":"LYS-HAUT-LAYON",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL ENDROIT COMME ENVERS",
    "ort":"Annonay",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL ESPRIT EUGENIE",
    "ort":"Ayguesvives",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL EUREKA",
    "ort":"orleans",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL EUREKA",
    "ort":"orleans",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL EURL LE COIN DES PEPITES",
    "ort":"BONNEVAL",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL FANKO",
    "ort":"DIJON",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL FAUVE",
    "ort":"Le Havre",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL FONGAUFFIER",
    "ort":"VEZAC",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL GABLIA",
    "ort":"Clermont-Ferrand",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL GERAL",
    "ort":"Périgueux",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL HEXAGONE DECORATION",
    "ort":"CASTRES",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL HOME FEELING APPARTEMENTS",
    "ort":"Toulouse",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Sarl hybride",
    "ort":"Montpellier",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL IDEES DECO AT HOME",
    "ort":"Verneuil-sur-Seine",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL IDETA",
    "ort":"Nancy",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL IMAGINE HOME",
    "ort":"Châlons-en-Champagne",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL IPPY",
    "ort":"La Rochelle",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL JANAYA",
    "ort":"Pontarlier",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL Jean Jo",
    "ort":"Calvi",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL JEANNINE SHOP",
    "ort":"Dijon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL JEANNOT ET SUZON",
    "ort":"Cazères",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL JOIM",
    "ort":"SARE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":" SARL JULAZIA",
    "ort":"Bordeaux",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL JULIE RIGAL AAC",
    "ort":"BLAYE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL KERIEL S",
    "ort":"Blois",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL KILIBOB",
    "ort":"Venelles",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL KNE",
    "ort":"REIMS",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL LABEL SO",
    "ort":"PARIS",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL LA BOUTIQUE DU MAS",
    "ort":"Carpentras",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL LA BRIQUE ROSE",
    "ort":"Fontenay-sous-Bois",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL LA CABANE A LOU",
    "ort":"Equeurdreville",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL LA CONQUETE DES PAPILLES",
    "ort":"Charbonnières-les-Bains",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL LA DECOUVERTE",
    "ort":"Quiberon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL LALAOME",
    "ort":"Saint-Julien-de-Concelles",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL LA MAISON CAS RARES",
    "ort":"ORLEANS",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL LA MAISON DE LOU",
    "ort":"lagny sur marne",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL LA MAISON DU COIN",
    "ort":"Foix",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":" SARL LA MAISON JAUNE",
    "ort":"Neuville sur Saone",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL LA MALLE A CONFETTI",
    "ort":"Bruz",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL LA PASSERELLE",
    "ort":"CARANTEC",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL LA PICORETTE",
    "ort":"Le Raincy",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL LA PLANQUE",
    "ort":"Mamers",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL LAURETTE",
    "ort":"Boulogne",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL LE CHALET DE SEV",
    "ort":"Charleville Mezieres",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL LE CIEL EST A TOUT LE MONDE",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":" SARL LE COMPTOIR DE CHLOE",
    "ort":"Cosne d’allier",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL LE COMPTOIR DE PERLIMPINPIN",
    "ort":"Mimizan",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL L'ECRIN DE VERDURE",
    "ort":"Ligré",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL LE FABULEUX MONDE DE DJIMINI",
    "ort":"Arras",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL LEMON CONCEPT STORE",
    "ort":"FRONTON",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL l’ épicerie",
    "ort":"Chamonix",
    "land":"[FR] Frankreich",
    "gesperrt":true
  },
  {
    "name":"SARL LES 1000 ET SENS",
    "ort":"Barcelonnette",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL LE SAUT DE PUCES",
    "ort":"Alfortville",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL LES GARAGISTES",
    "ort":"SAINT FLORENTIN",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL LES PETITS BONHEURS DE PAULINE",
    "ort":"NAY",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL LES SELECTIONNEUSES",
    "ort":"Puteaux",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL LES VILAINES FILLES",
    "ort":"Moncheaux",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL L'HYMNE AU PARFUM",
    "ort":"moutiers",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL LIBRES PENSEES",
    "ort":"Marly-le-Roi",
    "land":"[FR] Frankreich",
    "gesperrt":true
  },
  {
    "name":"SARL LILIE",
    "ort":"Vienne",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL Lisaka",
    "ort":"Châteaugiron",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL LM LA MAISON",
    "ort":"Sommieres",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL MA BOITE DECO",
    "ort":"Ville en Vermois",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"sarl madecou",
    "ort":"la roche sur yon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL MAISON AMRO",
    "ort":"LA COTE SAINT ANDRE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL MAISON ISTANA",
    "ort":"Amiens",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL MAISON LEON",
    "ort":"CARNIN",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL MAISON MARCEL",
    "ort":"BLACE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL MAISON POSIE",
    "ort":"Bressuire",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL MAISON SAINT-SA",
    "ort":"Aix-en-Provence",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL MAISON TULIPE,",
    "ort":"Rennes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL MAMAHOM CONCEPT STORE",
    "ort":"La Crau",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL MANVET",
    "ort":"Franqueville-Saint-Pierre",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL MARIE-MOI",
    "ort":"Versailles",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Sarl masai",
    "ort":"Carcassonne",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL MAXELLE",
    "ort":"Le Bouscat",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL MIZA MIZA",
    "ort":"Laval",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL MJB",
    "ort":"Toulouse",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL MODE DE BICHE",
    "ort":"LATRESNE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL MOK LA FLEUR",
    "ort":"Nantes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL NATURE&VRA'C",
    "ort":"HERIC",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL NEST DECORATION",
    "ort":"Maisons-Laffitte",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL NINA",
    "ort":"Cargese",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL O DE MER",
    "ort":"Uzes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL OHMAY",
    "ort":"Antibes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL OOF - ALTERNATIVE",
    "ort":"La Rochelle",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL OR ET LYS",
    "ort":"LEGUEVIN",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL ORIJJINE",
    "ort":"vienne",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL OSEZ SOPHIE",
    "ort":"Saint-Martin-de-Ré",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL PASTEL CONCEPT STORE",
    "ort":"Caen",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL PEPITE S",
    "ort":"Chalonnes-sur-Loire",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL PETIT DREAM",
    "ort":"Caluire-et-Cuire",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL PETIT MODELE AU SINGULIER",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL PIMENT D'AME",
    "ort":"Thônes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL PLANETE PLAGE BISCARROSSE",
    "ort":"BISCARROSSE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL POMPON CARABINE",
    "ort":"Montpellier",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL PONANT SURF AND STUDIO",
    "ort":"Perros-Guirec",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL POP MA CHERIE SARL",
    "ort":"IVRY SUR SEINE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL POUDRE D'ETOILES",
    "ort":"THOIRY",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL QUINZEMAI",
    "ort":"Croix",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL RCAD07",
    "ort":"FLEUREY SUR OUCHE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL RCAD07",
    "ort":"FLEUREY SUR OUCHE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":" SARL REFERENCE DIFFUSION",
    "ort":"SAINT-JORIOZ",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL RETROCOCO",
    "ort":"Parçay-Meslay",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL ROBS",
    "ort":"CAEN",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL ROMI",
    "ort":"Quimper",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL ROSCO",
    "ort":"Rennes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL SAMARI",
    "ort":"Bastia",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL SAM GROUP",
    "ort":"Vincennes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL SARA ET LOUISE",
    "ort":"Cherbourg",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":" SARL S A R L DRESS CODE",
    "ort":"Bordeaux",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL SARL GARANCE AIME LES VACANCES",
    "ort":"Quimper",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL SARL HOPE",
    "ort":"Biarritz",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL SARL MARIE",
    "ort":"Montauban",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL SARL MGV",
    "ort":"Angers",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":" SARL SARL MINLEH",
    "ort":"les sables d'olonne",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL SARL MINLEH",
    "ort":"les sables d'olonne",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL SARL PORTE PLUME",
    "ort":"saint jean de luz",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL SASHEE",
    "ort":"La chtre",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL SAWADEE",
    "ort":"Redon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL SEASONS' SISTERS",
    "ort":"FOUGERES",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL SKYGARDEN",
    "ort":"Megève",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL SMB",
    "ort":"Montpellier",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL STUDIO CHICHICHIC",
    "ort":"Houilles",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL SYSTEME B",
    "ort":"Grenoble",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL TI'DOBY",
    "ort":"Meaux",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL TOMEMY",
    "ort":"La Rochelle",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL TOM'POUSSE",
    "ort":"Limoges",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL TRAIT",
    "ort":"toulouse",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Sarl TTA",
    "ort":"Aix en Provence",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL UN AUTRE MONDE",
    "ort":"MONTREUIL",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL UN ETE A MARSEILLE",
    "ort":"Cassis",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL UTILE ET AGREABLE",
    "ort":"Lyon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL VADES-MORIN",
    "ort":"Mesnil-Roc'h",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL VAUQUIER EVENEMENTS",
    "ort":"Port-Jérôme-sur-Seine",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL VIOLETTE ET CO",
    "ort":"Lille",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL VPN",
    "ort":"Toulouse",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL YELLA BANANA",
    "ort":"Les Herbiers",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SARL YUZU",
    "ort":"CHOLET",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Sarl Zabar ",
    "ort":"Nouméa",
    "land":"[NC] Neukaledonien",
    "gesperrt":false
  },
  {
    "name":"SAS 1 2 3 BIRTHDAY",
    "ort":"RUEIL MALMAISON",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS AGAIN",
    "ort":"Estaimpuis",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SAS ALLG",
    "ort":"Blagnac",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS APOLLO",
    "ort":"ASNIERES SUR SEINE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS ARCHI'DEL STUDIO",
    "ort":"BIARRITZ",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS AT AUM",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS AUDREY ET INES",
    "ort":"Mauguio",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS BATHROOM GRAFFITI",
    "ort":"Puteaux",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS BICHETTE",
    "ort":"Malakoff",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS BIENFAITS",
    "ort":"Yvetot",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS BLUSH STORES",
    "ort":"Lyon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS BMF",
    "ort":"Toulouse",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS BOUIA JORF",
    "ort":"Roques",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS BOUTIQUE CAFE 52",
    "ort":"MONTREUIL",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS BVMP",
    "ort":"Bois-Colombes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS BY DE BO DESIG",
    "ort":"Uzès",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS BY LUNDI 12",
    "ort":"Saint-Nom-la-Bretèche",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS Camille Chouraqui",
    "ort":"Levallois Perret",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS CASAMAYA",
    "ort":"Sainte-Maxime",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS CHEZ ZEL",
    "ort":"toulouse",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS CITE IMMERSIVE VIKING ",
    "ort":"ROUEN",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS CLUB COULEUR",
    "ort":"IVRY SUR SEINE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS COMPTOIR DES DOCKS",
    "ort":"BIARRITZ",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS CONCEPT L",
    "ort":"Chantilly",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS CONFIDENCE",
    "ort":"Annecy",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS COTE PLACE",
    "ort":"Corte",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS CURIEUSES IDEES",
    "ort":"CHAVILLE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS CURIEUX",
    "ort":"STRASBOURG",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS CVVR ",
    "ort":"Biarritz",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS DEPOT LITERIE CONCEPT ER",
    "ort":"SEYNOD",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS DERRIERE L'EGLISE",
    "ort":"Bort-les-orgues",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS Durilou",
    "ort":"Toulouse",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS EEM STORE",
    "ort":"Lyon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS ELEENE ROUEN",
    "ort":"Rouen",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS ELFY",
    "ort":"bourg st maurice",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS EN VOITURE SIMONE",
    "ort":"Tarbes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS ETABLISSEMENTS JEAN CRETIN",
    "ort":"OYONNAX",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS FIKA",
    "ort":"Asnières-sur-Seine",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS FLOUCHE",
    "ort":"Bordeaux",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS GERMAINE M",
    "ort":"Garches",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"S.A.S. Goodies",
    "ort":"Arcachon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS HAPPY MARMOTTE",
    "ort":"VAL D'ISERE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS HELLOFAMILY",
    "ort":"Biarritz",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS IKONIK CONCEPT STORE",
    "ort":"LA FLECHE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS JAM",
    "ort":"La madeleine ",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS JAM  LA PETITE BOITE JAUNE",
    "ort":"LA MADELEINE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Sas Janna",
    "ort":"Cormelles le Royal",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS Janna Pop Korner",
    "ort":"Caen",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS JAVOTTE ET ANASTASIE",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS JJACC",
    "ort":"Sceaux",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS JOLIE QUIBERONNAISE",
    "ort":"Quiberon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS KOCH",
    "ort":"Brest",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS LA BOUTIQUE DU PALAIS",
    "ort":"Montpellier",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS LADOREE",
    "ort":"Saint-Sulpice-la-Pointe",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS LA MAISON D'ANGELE",
    "ort":"Quint Fonsegrives",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS LA MAISON D'OEUVRES",
    "ort":"Chamboeuf",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS LA TIENDA",
    "ort":"Saint Didier Au Mont D'or",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS LA VIE EST UN POEME",
    "ort":"Clamart",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS LE BATELEUR SASU",
    "ort":"Carcassonne",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS LE BAZAR MODERNE",
    "ort":"Villeneuve les Avignon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS LE BEIGE PARIS",
    "ort":"paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS LE BO MAGASIN",
    "ort":"Saint-Arnoult",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS LE BOUDOIR FAMILY STORE",
    "ort":"Saint-Gervais-les-Bains",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS L'ECHAPPEE BELLE",
    "ort":"Vimoutiers",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":" SAS LE DOMAINE DES FLEURS",
    "ort":"Hillion",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS LE FER A CHEVAL",
    "ort":"Megève",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS LEMAMAS",
    "ort":"LYON",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS LEMAMAS",
    "ort":"Lyon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS LES BOUTIQUES DU MOULIN DE LA CHARTR",
    "ort":"sorgues",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS LES DECOS D'AXELLE",
    "ort":"VILLEBON SUR YVETTE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS LESENFANTS",
    "ort":"Brest",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS LES FILLES DANS L'ATELIER",
    "ort":"COGNAC",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS Les frangines",
    "ort":"Pléneuf Val André",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS LES FRERES SISTERS",
    "ort":"Vannes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS LES JOSETTES",
    "ort":"Clamart",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS LES P´TITS PAPIERS",
    "ort":"NANTES",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS LESTROUVAILLESVO",
    "ort":"TOURS",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS LETNIE",
    "ort":"SAINT GERMAIN-EN-LAYE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS L'EXCEPTION",
    "ort":"LONGEAU",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS LIBRAIRIE SAINT PIERRE",
    "ort":"Senlis",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS L'IMPREVU",
    "ort":"Senlis",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS LIT ET MIX",
    "ort":"Lit et mixe",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS LITTLE EXTRA",
    "ort":"Saint-Jacques-de-la-Lande",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS LOULOU",
    "ort":"Créteil",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS MADEMOISELLE CHALOUETTE",
    "ort":"Chalo saint Mars",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS MA INTERIEURS CREATIFS",
    "ort":"Grenoble",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS MAISON DEVALLEZ",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS MAISON DUVIVIER",
    "ort":"Rochefort",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS MAISON LEBEL",
    "ort":"Bordeaux",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS MAISON MARCEL",
    "ort":"LORIENT",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS MARLOE",
    "ort":"Fontainebleau",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS MARZAC",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS MISS",
    "ort":"ANGLET",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS MJML",
    "ort":"CHATTE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS MLS",
    "ort":"Grignan",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS Motivet",
    "ort":"RIOM",
    "land":"[FR] Frankreich",
    "gesperrt":true
  },
  {
    "name":"SAS MUSE",
    "ort":"Clermont Ferrand",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS MY HOME",
    "ort":"Narbonne",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS NEW AGC",
    "ort":"Avelin",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS NIRATI",
    "ort":"Capbreton",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS NIZIA",
    "ort":"Angoulême",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS NOA",
    "ort":"Lyon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS NOMISS 2",
    "ort":"Bagnères-de-Bigorre",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS NSK CONCEPT",
    "ort":"LA VARENNE SAINT HILAIRE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS O BEAUX JOURS",
    "ort":"Montluçon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS OCTOPUS",
    "ort":"Ars en ré",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS O DE LA DUNE",
    "ort":"Pyla-Sur-Mer",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS ONDINE",
    "ort":"Soissons",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS OPEN ME",
    "ort":"Biarritz",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS OVH",
    "ort":"Orleans",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS PAN PARIS",
    "ort":"paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS PGDIS",
    "ort":"ENVAL",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"SAS PHYSALIS",
    "ort":"Vincennes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS Pigment",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS PLEZI",
    "ort":"marseille",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS POINTCARRE",
    "ort":"SAINT DENIS",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS PRINTEMPS",
    "ort":"PARIS",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS QUARTIER LIBRE BOUTIQUE",
    "ort":"Toulouse",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS QUE FAS",
    "ort":"Toulouse",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS QUINZE AOUT",
    "ort":"narbonne",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS REGAL",
    "ort":"MONTPELLIER",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS ROCANAY",
    "ort":"Vannes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS ROSE CACTUS-CONCEPT STORE",
    "ort":"Neuville-sur-Saône",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS SALTY DAYS",
    "ort":"marcq en baroeul",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS SAS DASI FRERES",
    "ort":"Amiens",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS SAS MAISON SINGULIERE",
    "ort":"ST PYTHON",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS SEBA LE MANS",
    "ort":"La Chapelle St Aubin",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS SEBA ST HERBLAIN",
    "ort":"Saint-Herblain",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS SEMATLO",
    "ort":"Crac'h",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS SHEP ET CO",
    "ort":"Lyon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS SHEP ET CO",
    "ort":"LYON",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS SIGNATURE - VICHY",
    "ort":"Vichy",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS SOCIETE A LAMARTINE",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS SOULIERS 18 41",
    "ort":"Saint Laurent du Var",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Sass & Spirit",
    "ort":"Haslemere",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"SAS STATION MEL",
    "ort":"Branne",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS STEPHANIE E",
    "ort":"enghien-les-bains",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS STEPHANIE E",
    "ort":"Enghien les Bains",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS STUDIO LNL",
    "ort":"HONFLEUR",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS SUPER SUPERFLU",
    "ort":"Saint-Étienne",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS The cool Republic",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS THE GROS MARCHE",
    "ort":"MONTREUIL",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS TOO GOOD STUDIO",
    "ort":"Granville",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS TROIS FENETRES",
    "ort":"Marseille",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS TROIS FENETRES",
    "ort":"Marseille",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS TWENTY SIX",
    "ort":"Copponex",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU ARTEUM SERVICES",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU ATELIER MOUTI",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU BEAU M STORE",
    "ort":"Gémenos",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU BOUTIK 102",
    "ort":"saint jean de sixt",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU CHEMIN DE TRAVERSE",
    "ort":"Montbrison",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU COCOTTE MARKET",
    "ort":"ALBERTVILLE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU DIEZ",
    "ort":"MARSEILLE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU DOCK'D CO",
    "ort":"Antony",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU FARDIS",
    "ort":"Fargues Saint Hilaire",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU FLOW",
    "ort":"LYON",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU Gigi",
    "ort":"brosville",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":" SASU IDECO PARIS",
    "ort":"Tours",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU INSPIRATION DESIGN",
    "ort":"Colmar",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU LA CONSERVATOIRE",
    "ort":"Pantin",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU LES ARMOIRES DE PARIS",
    "ort":"Boulogne Billancourt",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU LE SHOP BORDEAUX",
    "ort":"BORDEAUX",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU LGV",
    "ort":"ORCHIES",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU LITTLE PAPOUM",
    "ort":"CARRIERES SUR SEINE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU MAISON ZOLA PARIS S A S U",
    "ort":"Montigny-le-Bretonneux",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU MARGAUX HENIN",
    "ort":"Boulleville",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU MARIARIE",
    "ort":"Avanne-Aveney",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU MATHILDE FORGET",
    "ort":"La Roche sur yon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU MELANIE B",
    "ort":"Blois",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU MELANIE B",
    "ort":"Blois",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU MISSA CONCEPT",
    "ort":"ARLES",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU PLACE DES TENDANCES",
    "ort":"Pantin",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU R A S",
    "ort":"CALUIRE ET CUIRE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU SG SAS",
    "ort":"AMBERIEU EN BUGEY",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU TOURAINE",
    "ort":"Niort",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU TREMAS",
    "ort":"PARIS",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SASU ZL CONCEPT",
    "ort":"Plan-de-Cuques",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS VICTORIA RETAIL",
    "ort":"Marseille",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS WONDER PAULETTE",
    "ort":"Brunoy",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SAS WORK ON STUDIO",
    "ort":"Lyon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SA THE SEVEN",
    "ort":"Bruxelles",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SATURDAY at home",
    "ort":"Montigny le Tilleul",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Saus und Brause",
    "ort":"Gauting",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Schwarmstedt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"S´Blumen- und Seifenlädele",
    "ort":"Leermos",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Jackson",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Scarlet Reagan Art & Home",
    "ort":"Dallas",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"SCARLETT",
    "ort":"Bologna",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"SCEA CHATEAU DE CHAMBOUREAU",
    "ort":"Rochefort sur Loire",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SCEA DOMAINE SAINT JULIEN",
    "ort":"LA CELLE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Schäfer",
    "ort":"Aschaffenburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schafferer & Co. KG",
    "ort":"Freiburg im Breisgau",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Rostock",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Rostock",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schakaleur",
    "ort":"Buxtehude",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schatz im Glück",
    "ort":"Lippstadt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"schauhi...PapierSachen",
    "ort":"Regensburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"SCHEE GmbH",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Lehrte",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wohnhunger",
    "ort":"Mannheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Scherer",
    "ort":"Aschaffenburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schickes und Schönes",
    "ort":"Amöneburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schiepers, Aurore",
    "ort":"Luik",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"schlaraffenland handels gmbh",
    "ort":"Rüderswil",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Stuttgart",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Frankfurt am Main",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schmidt´s Papeterie",
    "ort":"Frankfurt am Main",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Odelzhausen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schminkbar Schweiz AG",
    "ort":"Zürich",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Schmitt GmbH",
    "ort":"Sailauf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schmuckatelier Concept Store",
    "ort":"Oberursel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schmuckhuhn gmbH",
    "ort":"Unterägeri",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Wiesbaden",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Siegburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Stuttgart",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schokoreich",
    "ort":null,
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schöler GmbH",
    "ort":"Immenstadt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schöne Dinge",
    "ort":"Arnsberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schöner als gestern",
    "ort":"Kassel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schöner leben.",
    "ort":"Baunach",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schöne Sörgelei GbR",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schöne Stücke",
    "ort":"Hannover",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schönes-Wohnen-Home",
    "ort":"Menden",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schönes&Wolle",
    "ort":"Landau an der Isar",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schönhauser",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schön & Jut",
    "ort":"Pinneberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"schön & schräg",
    "ort":"Einsiedeln",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"SchrankGold",
    "ort":"Erding",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schreibhelden",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schreibkram",
    "ort":"Osnabrück",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schreib und Spiel",
    "ort":"Hof",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schreiner e.K.",
    "ort":"Schwandorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"schrijnemakers",
    "ort":"ROERMOND",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Schritt für Schritt",
    "ort":"Basel",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Schröder und Schröder Steuerberatungsges. mbH",
    "ort":"Bruckmühl",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schubert Bio&Vollwert GmbH&Co KG",
    "ort":"Augsburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"schubert Licht und Design",
    "ort":"Traunstein",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schuckhardt's",
    "ort":"Friedberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"wundergestalten",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schuh Konzept",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schuhmacher",
    "ort":"Wasserburg am Inn",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schuler Orell Füssli",
    "ort":"Chur",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Emsdetten",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schulze und Marks GmbH",
    "ort":"Halle",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schuster",
    "ort":"Nidda",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Königstein",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Bayreuth",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schwarzkogler Mödling",
    "ort":"Mödling",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Kempten",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schwarzmarkt, Sammet&Lauber Streetwear GmbH",
    "ort":"Backnang",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Schwarz OG",
    "ort":"Lermoos",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Schwesterherz",
    "ort":"Bamberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Reutlingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"ScillyArt",
    "ort":"Kinsale Co Cork",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"SCM Verlagsgruppe GmBH - Büchertische",
    "ort":"Holzgerlingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"SCOOTERISE ΙΔΙΩΤΙΚΗ ΚΕΦΑΛΑΙΟΥΧΙΚΗ ΕΤΑΙΡΙΑ||SCOOTERISE IKE",
    "ort":"Athina",
    "land":"[GR] Griechenland",
    "gesperrt":false
  },
  {
    "name":"Scout Design Studio",
    "ort":"Dallas",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Scout Mix",
    "ort":"Farmington Hills",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Scout Mix",
    "ort":"Farmington Hills",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"SCRL FS Sapristi ! Deco & Sens",
    "ort":"Namur",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SDHub",
    "ort":"Jabbeke",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Seagrape bath  body",
    "ort":"Portland",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Seasonal Treasures",
    "ort":"Neuvecelle",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SEBA ST GREGOIRE EURL",
    "ort":"GREGOIRE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SEED",
    "ort":"Frome",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Seeded Events & Design",
    "ort":"Monroe",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"SEEHOLZ Wohnen",
    "ort":"Frasdorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"SeePerlen",
    "ort":"Freiburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Seezeitlodge Shop",
    "ort":"Nohfelden",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Adel & Heide GmbH",
    "ort":"Basel-Stadt",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Seidel in Solln GbR",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Linden",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Seipp Wohnen",
    "ort":"Waldshut",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Wedel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Selbrund ein Unternehmen der JobTicket GmbH",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"selbstconcept — carefully selected goods",
    "ort":"Großkrotzenburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"selection",
    "ort":"enghien les bains",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SELFOR DECOR",
    "ort":"PARIS",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"September",
    "ort":"Αθήνα",
    "land":"[GR] Griechenland",
    "gesperrt":false
  },
  {
    "name":"Serafina aruba boutique",
    "ort":"Oranjestad",
    "land":"[AW] Aruba",
    "gesperrt":false
  },
  {
    "name":"Serendipity",
    "ort":"Doylestown",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"servus.heimat Laden im Ruffinihaus",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Sesto",
    "ort":null,
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"SET CARGO LE HAVRE",
    "ort":"Oudalle",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Sewsmithltd",
    "ort":"Warwick",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"SFMOMA Museum Store",
    "ort":"San Francisco",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Shake the Tree",
    "ort":"Boston",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Shake the Tree",
    "ort":"Boston",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Shankinlove",
    "ort":"West orange",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"shell's concept store",
    "ort":"Stade",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Shen Beauty LLC",
    "ort":"brooklyn",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Dublin 9",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"SHGDL",
    "ort":"FORT de France",
    "land":"[MQ] Martinique",
    "gesperrt":false
  },
  {
    "name":"Shoebird",
    "ort":"Monheim am Rhein",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"shop by clo",
    "ort":"ST JEAN DE MONTS",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Shutters on the beach",
    "ort":"Santa Monica",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Sibellule",
    "ort":"Fécamp",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Šibilja Mlinarič",
    "ort":"Zabukovje",
    "land":"[SI] Slowenien",
    "gesperrt":false
  },
  {
    "name":"Sideco \/ Avenue 28",
    "ort":"Dury",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SIDONIE",
    "ort":"PARIS",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Siidds",
    "ort":"Naaldwijk",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"silberschön",
    "ort":"Bochum",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Silke Bauroth",
    "ort":"Dorsten",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Silke Steinhaus & Christian Wirt GbR",
    "ort":"Diedorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Silva",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Simonlehner Silvia",
    "ort":"St.Lorenz",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"SIMONNE",
    "ort":"VALLET",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Simon und Renoldi ",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Simply Stated",
    "ort":"Needham",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"SIMSALABIM",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Sinnesfreuden Concept Store",
    "ort":"Bad Tölz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Sinneslust",
    "ort":"Dachau",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Sinopoli Bellezze",
    "ort":"Wöllstein",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Siripiri Concept Store",
    "ort":"Vogtsburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Siro unverpackt & regional",
    "ort":"Herdecke",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"&sisters",
    "ort":"Neu-Isenburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Sjtal 34",
    "ort":"ECHT",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Skandinavia House ",
    "ort":"New York",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Skinthusiast by Stefani Petrillo",
    "ort":"Boynton Beach",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"S-Kultur",
    "ort":"Ansbach",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"SLMS GmbH",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"SLT GmbH Service & Logistik für Textilien",
    "ort":"Rosenheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Smalls",
    "ort":"Portland",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"smil by hyggelei",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"smillas",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Wakefield",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Medford",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Smitten Boutique",
    "ort":"Durham",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"smow S GmbH",
    "ort":"Stuttgart",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"SNAPS.HAMBURG",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"SNC DRUGSTORE CHAMPS ELYSEES",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SNC Maison de la Presse LLADAF",
    "ort":"LE PLESSIS ROBINSON",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SNC SLOW NOW",
    "ort":"Liège",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SNUF EN SHOE B.V.",
    "ort":"Schaijk",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"So Coquette",
    "ort":"LE VIGAN",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Soenens, Kevin",
    "ort":"ARDOOIE",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"so kitch",
    "ort":"montreuil",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SO´LA Concepts",
    "ort":"Ismaning",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"SOLFERINO 66 SRL",
    "ort":"MANTOVA",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Stuttgart",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"SOL Yoga Fort Lauderdale",
    "ort":"miami beach",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Something New store ",
    "ort":"AMSTENRADE",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Sommer GmbH",
    "ort":"Gütersloh",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Sonja Auböck",
    "ort":"Maishofen",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Sonnenblume ",
    "ort":"Hannover",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Soona Otomi",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Sophie Home Ltd",
    "ort":"LONDON",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Sophie & Ju",
    "ort":"Charbenniéres-les-Bains",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Sophisticated Thread",
    "ort":"Metairie",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Soroka",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Soroka",
    "ort":"BAKU",
    "land":"[AZ] Aserbaidschan",
    "gesperrt":false
  },
  {
    "name":"SOUL",
    "ort":"Vannes",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Soulspace - Yoga in Köniz",
    "ort":"Köniz",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Sounds Familiar",
    "ort":"Roma",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"Sounds like yellow",
    "ort":"Vlissingen",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Sounds like Yellow",
    "ort":"Vlissingen",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"souperbe",
    "ort":"Brugg",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Source",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Southern Sass Suds And Soap",
    "ort":"Weatherford",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Southfarm ApS",
    "ort":"Fredensborg",
    "land":"[DK] Dänemark",
    "gesperrt":false
  },
  {
    "name":"Southside Antiques & Decor",
    "ort":"Chattanooga",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Sovee Studio",
    "ort":"Gunzenhausen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"soxs.co",
    "ort":"Amsterdam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Space Cowboy Dallas",
    "ort":"Dallas",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Space EC1",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Spazio",
    "ort":"Alcobaça",
    "land":"[PT] Portugal",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Arnsberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"spielen & wohnen",
    "ort":"Kassel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Spielwerk",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Spirit-Spiral",
    "ort":"Beden",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"SPIRU B.V.",
    "ort":"GRONINGEN",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Spitfire girl",
    "ort":"Austin",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Spooksvilla and Friends",
    "ort":"New York",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Sport Matt Gmbh",
    "ort":"Schoppernau",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Sport Sohn Handel GmbH & Co. KG",
    "ort":"Neu-Ulm",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Sprenghers, Agnes",
    "ort":"Tervuren",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SPRL AFSART",
    "ort":"Woluwe-Saint-Pierre",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SPRL ARCH'M",
    "ort":"Ath",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SPRL ATELIER 27",
    "ort":"Liege",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SPRL BE COLOR",
    "ort":"Bruxelles",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SPRL D.M. FINANCES",
    "ort":"Chaudfontaine",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SPRL eP",
    "ort":"Brüssel",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SPRL FOR ME K",
    "ort":"Bruxelles",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SPRL HD HOME",
    "ort":"Arlon",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SPRL JCL DESIGN",
    "ort":"Brüssel",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SPRL JOFFREY HELSON MENUISERIE",
    "ort":"Haillot",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SPRL LA VIE MODERNE",
    "ort":"Mons",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SPRL LE MONDE DE BALDA",
    "ort":"Beaufays",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SPRL LUCIE IN THE R",
    "ort":"GENVAL",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SPRL LUCIE IN THE R",
    "ort":"Genval",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":" SPRL Mademoiselle GREEN",
    "ort":"Bruxelles",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SPRL Rose Avril",
    "ort":"Louvain-la-Neuve",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SPRL SO CUTE",
    "ort":"Charleroi",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SPRL The Art of Consultancy",
    "ort":"Rhode saint genèse",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SPRL V&P GARAGE",
    "ort":"Esneux",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SPRL ZOULA",
    "ort":"HUY",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SRL ARTIELEC",
    "ort":"Theux",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SRL COUCOU",
    "ort":"Bruxelles",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SRL Décoration Conseil International",
    "ort":"Bruxelles",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SRL FASHION@WORK",
    "ort":"Ixelles",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SRL MDM DECO",
    "ort":"Wavre",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SRL STEENWOOD",
    "ort":"Andenn",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SRL WOUIP",
    "ort":"Liège",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"SRL YELLOW SUBMARINE RETAIL",
    "ort":"Sambreville",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Staatsbad Norderney GmbH",
    "ort":"Norderney",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Stadtkind Conceptstore GmbH",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Stadtkinder Bielefeld",
    "ort":"Bielefeld",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Stadtkind GbR",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Stadtrandstil by vnf handmade",
    "ort":"Braunschweig",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Stadtschlachter Claußen GmbH & Co. KG",
    "ort":"Husum",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Stage by WE",
    "ort":"Stade",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Bristol",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Starke",
    "ort":"Bornhöved",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Stark Studio",
    "ort":"Los Angeles",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Stars & Lights",
    "ort":"Einselthum",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Staudinger + Franke GmbH",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"STAY AGENCY",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Staying In Studio",
    "ort":"NORWICH",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Steengaard Aps",
    "ort":"Beder",
    "land":"[DK] Dänemark",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Sankt Nikolai im Sausal",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Steinecke Interior",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Steiner Lisa Maria",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Steinhauer",
    "ort":"Neuss",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Lübeck",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"STEKLAB (STUDIO BAARSCH)",
    "ort":"Amsterdam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"STEM SWAG",
    "ort":"Phoenix",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Step art",
    "ort":"Dax",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Sternanis - gut kochen und schenken",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Stern Apotheke, Scharitzer KG",
    "ort":"Linz",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Ste?s",
    "ort":"ARLESHEIM",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Stetter",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Stichting Beeldende Kunst - Kunstuitleen Voorburg",
    "ort":"Voorburg",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"STICHTING STEDELIJK MUSEUM SCHIEDAM",
    "ort":"Schiedam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Stielblüten S.Hanke",
    "ort":"Neuenstein",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Markt Rettenbach",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Stiftung Enzian",
    "ort":"Zürich",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Stiftung Museum Kunstpalast",
    "ort":"Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Stiftung Museum Lumen",
    "ort":"Bruneck\/Reischach",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"Stiftung Museum LUMEN",
    "ort":"Bruneck\/Reischach",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"Stiftung Stöckenweid",
    "ort":"Feldmeilen",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Stigorvi",
    "ort":"Barcelona",
    "land":"[ES] Spanien",
    "gesperrt":false
  },
  {
    "name":"Stilarten",
    "ort":"Jestetten",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Stil & Blüte",
    "ort":"Sylt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Stilmanufaktur",
    "ort":"Waldbronn",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"stilvoll",
    "ort":"Raesfeld",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Stitch Amsterdam ijburg",
    "ort":"AMSTERDAM",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Stitch N Soul",
    "ort":"Mission Viejo",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Stöbener ? Schenken, Kochen und mehr",
    "ort":"Essen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Stock & Belle",
    "ort":"Memphis",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"STOCKS",
    "ort":"HENLEY-ON-THAMES",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Stoel",
    "ort":"GORREDIJK",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"STOERwonen",
    "ort":"Aalten",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"STOER WONEN",
    "ort":"Den Haag",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Stolz",
    "ort":"Königsfeld",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"store of luxus",
    "ort":"Stade",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Nürnberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Störtebeker Festspiele GmbH & Co. KG",
    "ort":"Ralswiek",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Strandgatan 50 Bar+Kafe AB",
    "ort":"Limhamn",
    "land":"[SE] Schweden",
    "gesperrt":false
  },
  {
    "name":"String Theory Yarn Co",
    "ort":"Glen Ellyn",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Stückgut ",
    "ort":"Bochum",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Studio 42",
    "ort":"Indianola",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"StudioBELS",
    "ort":"Ouderkerk aan de Amstel",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Studio Blackmore",
    "ort":"Whitstable",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Studio L.I.M",
    "ort":"Zijdewind",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Studio Mango ",
    "ort":"Québec, QC",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":"STUDIO PIETJE PRECIES B.V.",
    "ort":"Hilversum",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Studio Radiance",
    "ort":"Dongen",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Studio Su Casa",
    "ort":"Windsor",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"STUDIO TWENTY ONE LIMITED",
    "ort":"newcastlewest",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"STUDIO ZOMOOI",
    "ort":"AMSTERDAM",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"stueckgut",
    "ort":"Bochum",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Paderborn",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Styl'en Tête",
    "ort":"Lancy",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"STYN Urban Stories",
    "ort":"Eckernförde",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"SUEBIDOU",
    "ort":"Leipzig",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Sugar Mango",
    "ort":"Bournemouth",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Suki's Wardrobe Ltd",
    "ort":"Uppermill",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Sunday Designs",
    "ort":"Ojai",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Sunde White Industries",
    "ort":"Pacifica",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Sunset Outpost",
    "ort":"Margate City",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Superette - Upper Street",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Superjuju",
    "ort":"Stuttgart",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Super Massive",
    "ort":"Coolangatta",
    "land":"[AU] Australien",
    "gesperrt":false
  },
  {
    "name":"SuperMatique",
    "ort":"Rotterdam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Super Nice",
    "ort":"Hannover",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Superpopular Editions",
    "ort":null,
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Super U et Drive",
    "ort":"AIGUILHE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"SUPNIFTY",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Sura die Erlebnisgärtnerei",
    "ort":"Altenstadt an der Waldnaab",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Susannes Laden ",
    "ort":"Fröndenberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Susis Stöberstube",
    "ort":"Neu-Anspach",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Süßkramdealer",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Süßling",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"SU STORE",
    "ort":"HAMBURG",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Halifax",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":"Sutter Büro + Papeterie GmbH",
    "ort":"Freiburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Svea Blöcker",
    "ort":"Harrislee",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Sweet Design by Nala",
    "ort":"Kempen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Sweetish Candy",
    "ort":"Lancaster",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Sweet Maresa",
    "ort":"Kingston",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Swell Devon Ltd",
    "ort":"Dartmouth",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":" SYMEN SPOELSTRA",
    "ort":"Burgum",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"SYNCRA",
    "ort":"Vancouver",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":"Syrene",
    "ort":"Jacksonville",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Taatjem Deel GmbH",
    "ort":"Hoernum auf Sylt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Tactile  atelier-boutique",
    "ort":"Lyon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"TAFELWERK B.V.",
    "ort":"Leiden",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Talmon Gros",
    "ort":"Stuttgart",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Tanaïs",
    "ort":"Verviers",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Tandaradei",
    "ort":"Mainz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Tangerine Dream",
    "ort":"East bergholt",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Tangerine Dream",
    "ort":"Royston, Hertfordshire",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Tangerine Goods",
    "ort":"Ocean View",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Tanja Kobek",
    "ort":"Grünwald",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"TANNENDIELE",
    "ort":"Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Tante Emma",
    "ort":"Marseille",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Tante Emma Schrobenhausen",
    "ort":"Schrobenhausen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Tante Ika",
    "ort":"Radebeul",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Tanto di Kappello di Giorgia Marozzi",
    "ort":"Civitanova Marche",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"Tarzan GmbH",
    "ort":"Basel",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"TASHA Veendam",
    "ort":"Veendam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"TASH LIVING KG",
    "ort":"Graz",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Taton, Mélanie",
    "ort":"Esneux",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Taudtmann Café und Bistro Gmbh",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"tausend & eins",
    "ort":"Staufen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Tausend Gründe, Inh. Sven Seiler",
    "ort":"Dettingen an der Erms",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"tausendschoen",
    "ort":"Lindau",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"TAUSENDSCHOEN DER JUDITH AINHAUSER",
    "ort":"Sarntal",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"Tavernaro Architektur",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Tavola GmbH",
    "ort":"Kolbermoor",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"SAS O DE LA DUNE",
    "ort":"PYLA SUR MER",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"TeeDeUm",
    "ort":"Frankfurt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Teehaus Teuner",
    "ort":"Weimar",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"TEE&KÄNNCHEN",
    "ort":"Bad Salzuflen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Teestübchen Cuxhaven",
    "ort":"Cuxhaven",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Tee & Tasse",
    "ort":"Kirchzarten",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Oberlauterbach",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Tehrani",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Teoden GmbH, neunest",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"TEREBENTHINE",
    "ort":"TROYES",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Terese - Transalpine Feinkost",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Testfirma",
    "ort":"Testhausen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Thabea Seitel Blumen",
    "ort":" Bietigheim-Bissingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"The Arc",
    "ort":"Bedford",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"The Balloonary",
    "ort":"Albany",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"The Book Resort",
    "ort":"WATERFORD",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"The Boundary Store and Cafe",
    "ort":"St Mary Bourne",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"The Brass Owl",
    "ort":"Astoria",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"THE CABINET Retail UG",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"THE CABINET Retail UG",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"The Candlestick",
    "ort":"Sonoma",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"The Carioca Kitchen",
    "ort":"Livermore",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"The Center for Fiction",
    "ort":"Brooklyn",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"The Center for Fiction",
    "ort":"Brooklyn",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"The Collecterie",
    "ort":"Teddington",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"The Collective",
    "ort":"Park City",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"The Completist",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"The Completist",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"The Corner Shop",
    "ort":"Woolhampton",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"THE CROSS TWO LTD",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"The Customs House",
    "ort":"Wellfleet",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"The Edit",
    "ort":"Tonbridge",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"The End of Chases",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"The Every Space",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"The Fig Leaf",
    "ort":"Cincinnati",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"The Finerie",
    "ort":"San Francisco",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"The Florist on The Hill",
    "ort":"Dublin 6",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"The Flossy Peach",
    "ort":"Moultrie",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"The Flower Plant",
    "ort":"Loughborough",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"the fort@3512",
    "ort":"Raleigh",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"The Gifted Few Limited",
    "ort":"Market Harborough",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"The Gift Shoppe",
    "ort":"Murrells Inlet",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"The Gilded Cabinet",
    "ort":"Alton",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"The Goods",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"The hambridge artist",
    "ort":"Ilminster",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"The Hive",
    "ort":"Hoboken",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"The Home Shop",
    "ort":"Aarau",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"The House Cologne,",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"The Institute of Contempory Art\/ Boston",
    "ort":"Boston",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"The Letteroom Ltd",
    "ort":"Andover",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"The Lido Stores",
    "ort":"Margate",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"The Little Shop",
    "ort":"New York",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"The Living Store",
    "ort":"Salzburg",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"The Mamahood",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"The Manor Gift Shop",
    "ort":"Cambridge",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"THE MODU SHOP, S.A R.L.-S",
    "ort":"Luxembourg",
    "land":"[LU] Luxemburg",
    "gesperrt":false
  },
  {
    "name":"THE MODU SHOP, S.A R.L.-S",
    "ort":"LUXEMBOURG",
    "land":"[LU] Luxemburg",
    "gesperrt":false
  },
  {
    "name":"The Nail & Beauty Bar",
    "ort":"Salzburg",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"The Neon House",
    "ort":"Ciutat Vella",
    "land":"[ES] Spanien",
    "gesperrt":false
  },
  {
    "name":"The New Stand",
    "ort":"Brooklyn",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Théodore",
    "ort":"Bastia",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Theodoulides",
    "ort":"LONDON",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"The Owl & the Pussycat",
    "ort":"Andover",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"The Peacock Room",
    "ort":"Detroit",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"The Perfect petal",
    "ort":"Denver",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"The Pet Nest",
    "ort":"bartlesville",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"The Philadelphia Museum of Art",
    "ort":"Philadelphia",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"The Rock & Art Shop",
    "ort":"Bangor",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"The Salty Babe",
    "ort":"Newport",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"The Silver Barn",
    "ort":"Columbus",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"The Snug",
    "ort":"Ashford",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"The Social Type",
    "ort":"Los Angeles",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"THE SPEYS",
    "ort":"Dortmund",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"THE STAGE VENTURES S.L.",
    "ort":null,
    "land":"[ES] Spanien",
    "gesperrt":false
  },
  {
    "name":"The Statement Thing",
    "ort":"Mainz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"The Studio Trangie",
    "ort":"Trangie",
    "land":"[AU] Australien",
    "gesperrt":false
  },
  {
    "name":"The Swan's House",
    "ort":"Tarrytown",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"The Swellife",
    "ort":"Rockaway Beach",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Theurich",
    "ort":"Friedrichshafen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Theurich Einkaufswelt",
    "ort":"Meersburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"The Vaults Collective",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"The Waxwing",
    "ort":"Milwaukee",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"The Wooden Wagon",
    "ort":"New Salem",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"The Wraperie for Stationery and Gifts",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Thingeling by Dolores Basica",
    "ort":"Stuttgart",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Thingsilove203",
    "ort":"Westport",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"THINGS WE LOVE",
    "ort":"Garmisch-Partenkirchen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Thirty-odd",
    "ort":"Burlington",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"This CIty Rocks",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Thomas Buck GmbH",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Thomassen",
    "ort":"Hollum ameland",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Three little piggies bakery",
    "ort":"Poulton le fylde",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Three Monkeys 030",
    "ort":"Frasdorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Tietchen",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Tietchen & Tietchen GbR",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Tiger and Arcadia",
    "ort":"Singapour",
    "land":"[SG] Singapur",
    "gesperrt":false
  },
  {
    "name":"Tiger Lab",
    "ort":"Edinburgh",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"tilla",
    "ort":"Baden",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Tinas-Mode",
    "ort":"Gröbenzell",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Tiny Hazel",
    "ort":"Weißensberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Tiny House Open Water",
    "ort":"Locust Grove",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Tipsy's",
    "ort":"Palm Springs",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Tischkultur",
    "ort":"Münster",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"TISCHLEIN DECK DICH",
    "ort":"Kirchheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"TITANIA CONCEPT STORE",
    "ort":"Vendays-Montalivet",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Togetherness GmbH",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Togethery",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Tol14",
    "ort":"Bodegraven",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Tollkühn GmbH",
    "ort":"Offenburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"toni thiel > besser wohnen",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Topaze Shopping Center",
    "ort":"mersch",
    "land":"[LU] Luxemburg",
    "gesperrt":false
  },
  {
    "name":"tori",
    "ort":"Oelde",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Toria Lee Accessories",
    "ort":"Marlow",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Tôt ou tard",
    "ort":"Brest",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Tots",
    "ort":"Gujan-Mestras",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"ToV Fashion & Lifestyle",
    "ort":"Zürich",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Town House GbR",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Townhouse Weisses Kreuz",
    "ort":"Salzburg",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Traces Conceptstore",
    "ort":"Luzern",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Trackcase GbR",
    "ort":"Kassel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Trade Studio",
    "ort":"Haarlem",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"TragBar",
    "ort":"Kiel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Karben",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"trends",
    "ort":"passau",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Trendshop by Cissy",
    "ort":"Mijdrecht",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Trends of living",
    "ort":"Eindhoven",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"TRÉSORS DE STYLE",
    "ort":"Brive",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Tribeca",
    "ort":"Wiesbaden",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Trident Booksellers and Cafe",
    "ort":"Boston",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Trilby Pheasant",
    "ort":"Hawarden",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Trisha Muldoon",
    "ort":"austin",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Tristan Einrichtungs GmbH",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Tritschler GmbH & Cie. KG",
    "ort":"Stuttgart",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"TRIXI GRONAU - Concept Store",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Trüffelschwein® ",
    "ort":"Erfurt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Tryptik",
    "ort":"Albi",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Thun",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Winkel",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Tsierdaadje",
    "ort":"Egmond aan Zee",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Tstore92 srls",
    "ort":"Roma",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"Tüdelband Winsen",
    "ort":"Winsen (Luhe)",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Tulip and olive",
    "ort":"West Harrison",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"TULLYHAIZE",
    "ort":"Belfast",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Turnover Concept Store",
    "ort":"Nancy",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Tutti Kolori GmbH",
    "ort":"Leipzig",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Twenty Three Living Ltd",
    "ort":"Marlow",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"TWIGGY",
    "ort":"NÎMES",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"twinflair",
    "ort":"Harrislee",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Twirls + Twigs",
    "ort":"Valley Village",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Twisted Goods",
    "ort":"Saskatoon",
    "land":"[CA] Kanada",
    "gesperrt":false
  },
  {
    "name":"TWO IN ONE",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"TX Sports Group",
    "ort":"Kammerstein",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Typo Market",
    "ort":"Stillwater",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Typo Market",
    "ort":"Stillwater",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"TYSA",
    "ort":"Mill Valley",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"TZOVA EUSTATHIA IOANNIS||HAC E TZOVA",
    "ort":"Athens",
    "land":"[GR] Griechenland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Übersee-Museum Bremen",
    "ort":"Bremen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Uebe",
    "ort":"Magdeburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Ullrich & Ullrich",
    "ort":"Landshut",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Ultimo Langen - Angelika Wilke",
    "ort":"Langen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Unbound",
    "ort":"Cork",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"Une journée particulière",
    "ort":"Saint-Cyprien",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Un été voyageur",
    "ort":"Astaffort",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Une touche de sud",
    "ort":"Pézenas",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Unik by Nature",
    "ort":"Seignosse",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Universitätsbuchbinderei Fritz Castagne",
    "ort":"Kiel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Un livre et une tasse de thé",
    "ort":"Paris",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Unnu Kram",
    "ort":"Murten",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Unsereins",
    "ort":"Mainz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Unsere Liebelei Wohlschager OG",
    "ort":"Linz",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Unterhaltung",
    "ort":"Dortmund",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"unverblümt",
    "ort":"Rietberg-Westerwiehe",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"unverblümt LOK",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Unverpackte Insel",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Unwind Massage Lounge",
    "ort":"Dallas",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Unyón",
    "ort":"Chambéry",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Upstairs",
    "ort":"Little Island",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"Upstairs Downstairs Interiors",
    "ort":"Sherborne",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Urban Nest general trading",
    "ort":"Den Haag",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"URBAN OUTFITTERS WHOLESALE INC.",
    "ort":"Philadelphia",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"UTILE & AGREABLE",
    "ort":"LYON",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Uytterhaegen, Sara",
    "ort":"Jodoigne",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"v",
    "ort":"Deventer",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"VACE Clothing",
    "ort":"Starkville",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Valentin",
    "ort":"Rösrath",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Van Assche",
    "ort":"Melle",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"van Bloemendaal",
    "ort":"Èrmelo",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"KNOKKE-HEIST",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"van de Laar",
    "ort":"Oegstgeest",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Vandeley",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Van den hurk",
    "ort":"BERKEL-ENSCHOT",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Van der fluit",
    "ort":"Waarland",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Etterbeek",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"van der Schans",
    "ort":"Zutphen",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Amsterdam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Vandevelde, Annelies",
    "ort":"Nieuwpoort",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"van Eijk",
    "ort":"EINDHOVEN",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Vanemma",
    "ort":"Plan de Cuques",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Vanessa s",
    "ort":"Gross gerau",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"van gemeren",
    "ort":"Rotterdam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"van harte GmbH",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"van Heugten",
    "ort":"Amersfoort",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Van Hoecke, Elise",
    "ort":"Deinze",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"van Hout partout",
    "ort":"Aachen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Van Obbergen, Bo",
    "ort":"Groot-Bijgaarden",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Van Steenselen",
    "ort":"OUD-BEIJERLAND",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"van Trier",
    "ort":"Den Burg",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Vasilija Zdunic",
    "ort":"Singapore",
    "land":"[SG] Singapur",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Landsmeer",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Veldkamp's Flowers & Gifts",
    "ort":"Lakewood",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Velours",
    "ort":"Mont-de-Marsan",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"VELVET REYKJAVIK",
    "ort":"Reykjavik",
    "land":"[IS] Island",
    "gesperrt":false
  },
  {
    "name":"Venus Mode & Schmuck",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Vera Münch Fashion Design GmbH",
    "ort":"Kirchheim\/Teck",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Verandah",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"verdemari",
    "ort":"Milano",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Neu-Ulm",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Verpackt wie nackt",
    "ort":"Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Biganos",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Vetro Vetro srl",
    "ort":"Bruxelles",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Vfmk Verlag für moderne Kunst GmbH",
    "ort":"Vienna, AT",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"VFMK Verlag für moderne Kunst GmbH",
    "ort":"Wien",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Via Sal",
    "ort":"Freiburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Victorias Crystals 789",
    "ort":"Rynge",
    "land":"[SE] Schweden",
    "gesperrt":false
  },
  {
    "name":"Vida Luminosa",
    "ort":"Kreuzviertel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"VIELFACH",
    "ort":"Leipzig",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Viis Purki",
    "ort":"Tallinn",
    "land":"[EE] Estland",
    "gesperrt":false
  },
  {
    "name":"Viktoriya Dimcheva",
    "ort":"Freiburg im Breisgau",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Villa Dèco",
    "ort":"Dreux",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Villa de la cote",
    "ort":"Villers sur mer",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Village Cheer",
    "ort":"Portland",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Village Common Mercantile",
    "ort":"Larchmont",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Saint-Gilles",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Villa Gooz",
    "ort":"BRUGES",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Villa Vanilla UG",
    "ort":"Schwerin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Villehus",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Villi en ve",
    "ort":"Teuge",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Vincenzo Zucchi S.p.A.",
    "ort":"Rescaldina",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"VintageMagic",
    "ort":"Montberon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Vintanthromodern",
    "ort":"North Haven",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"VIOLAS´",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"VIOLAS'",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Violas Gewürze & Delikatessen",
    "ort":"Essen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"VIOLAS' Gewürze und Delikatessen",
    "ort":"Münster",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"VIOLAS´ Lübeck",
    "ort":"Lübeck",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Violas` Rottweil",
    "ort":"Rottweil",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"violetbyhanne",
    "ort":"Lint",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Visser",
    "ort":"PURMEREND",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Vita32 conceptstore & hairsalon",
    "ort":"Eerbeek",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Viva Marketplace",
    "ort":"South Hero",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"vives KG",
    "ort":"Maria Enzersdorf",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Vivienne Electra Interiors",
    "ort":"Old Romney",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"V.O.F. BLOEMSIERKUNST ONINGS",
    "ort":"DEN HAAG",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"V.O.F. FLAMINGO FOREVER",
    "ort":"Veldhoven",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"V.O.F. GAAF VALKENBURG",
    "ort":"Valkenburg",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"V.O.F. GALERIE POP",
    "ort":"DOMBURG",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"V.O.F. G' IN WEST",
    "ort":"MUIDEN",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"V.O.F. HAL ZES10",
    "ort":"DE LIER",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"V.O.F. JIKX & THINGS",
    "ort":"Bussum",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"V.O.F. LABEL6",
    "ort":"Son en Breugel",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"VOF LUDVIN",
    "ort":"Antwerpen",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"V.O.F. MAISON NL CONCEPT STORE",
    "ort":"Amsterdam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"V.O.F. MENEER EN MEVROUW DE BOER",
    "ort":"Utrecht",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"V.O.F. MUNDO CONCEPT",
    "ort":"Middelburg",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"VOF My Ex Boyfriend",
    "ort":"Mechelen",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"V.O.F. MYS CONCEPTSTORE",
    "ort":"Bussum",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"V.O.F. OUDSHOORN BLOEMEN",
    "ort":"LEUSDEN",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"V.O.F. PRIMERA VLISSINGEN",
    "ort":"Vlissingen",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"VOF ROOSELIEN",
    "ort":"Langemark",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"V.O.F. SORELLE - BLOEM & KADO",
    "ort":"STEENWIJK",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":" V.O.F. TER PLEKKE",
    "ort":"BENTVELD",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"V.O.F. 'T HAAGJE",
    "ort":"Huizen",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":" V.O.F. TOTAL ID",
    "ort":"HARDENBERG",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"V.O.F. TUINDERSBEDRIJF KESTELOO",
    "ort":"Koudekerke",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"VOF WAANZINNIG GEDROOMD",
    "ort":"Maldegem",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"V.O.F. ZININ",
    "ort":"Utrecht",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"von Herzen OHG",
    "ort":"Stuttgart",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"vonjula",
    "ort":"Hüttenberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"von Medem",
    "ort":"KÖln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Kreuth",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hof",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"von Stepski",
    "ort":"Hannover",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Bayreuth",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"VOORLOPIG",
    "ort":"Delft",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"VorOrt Interiordesign",
    "ort":"Mainz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Vue sur le port",
    "ort":"Perros guirec",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"VVZRL Eauzee",
    "ort":"KNOKKE-HEIST",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Vygg Kristensen",
    "ort":"KLEINMACHNOW",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Vyrtus Sàrl",
    "ort":"Lutry",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Wagner´sche Univesitätsbuchhandlung",
    "ort":"Innsbruck",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"Waiboer",
    "ort":"Warmenhuizen",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Waldherr",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Walser Karmaoui Design",
    "ort":"Zürich",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Bamberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Seelze",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wamo BV",
    "ort":"Merchtem",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Wandel...bar",
    "ort":"Burghausen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wanderlustre",
    "ort":"Brooklyn",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Wanderlust Shops",
    "ort":"New Albany",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Wanderlust Wares",
    "ort":"Strete",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"wanduhr.de",
    "ort":"Stuttgart",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"warneke",
    "ort":"ROTTERDAM",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Warnken",
    "ort":"Bad Zwischenahn",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wäscheliese",
    "ort":"Neubiberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Was das Herz begehrt",
    "ort":"Preetz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Waso Object ",
    "ort":"Carthage Amilcar",
    "land":"[TN] Tunesien",
    "gesperrt":false
  },
  {
    "name":"Wat Object",
    "ort":"Athens",
    "land":"[GR] Griechenland",
    "gesperrt":false
  },
  {
    "name":"Wave",
    "ort":"New Canaan",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Wax Spiritual",
    "ort":"Colchester",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"W D Coe Ltd",
    "ort":"Ipswich",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Weber",
    "ort":"Freiburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"We Dream in Colour",
    "ort":"Essex",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"WeiBi Concept Store",
    "ort":"Miami",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hattenhofen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Combloux",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Weinhaus Hauck GmbH & Co. KG",
    "ort":"Bermersheim vor der Höhe",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Weinladen Varel",
    "ort":"Varel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hannover",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Fürth",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Fronreute",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Weißglut Design GbR",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"We Love You Love GmbH",
    "ort":"Männedorf",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":".WEN B.V.",
    "ort":"Amsterdam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Bielefeld",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Werners",
    "ort":"heemstede",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Münster",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Werrens Art AG",
    "ort":"Kehrsatz",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Wertz, Mélanie",
    "ort":"Bilstain",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"WE SEE STARS",
    "ort":"BROOKLYN",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"WhatWomanWant",
    "ort":"Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"When in Roam",
    "ort":"New Market",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Whim Wham",
    "ort":"Cardiff",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"White Rabbit",
    "ort":"Iowa City",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Whitney  Winston",
    "ort":"Boston",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Who said Concept Store",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"WIA Brussels",
    "ort":"Ramillies",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Wicked Hippie",
    "ort":"Oklahoma City",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Wiebke Recke Production & Retail GmbH",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wiedemann GmbH",
    "ort":"Schweich",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wiedemann Parfümerie GmbH",
    "ort":"Bad Tölz",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Schiedam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"wie schön ist das denn",
    "ort":"Dortmund",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Aachen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"WILDE PLANNEN B.V.",
    "ort":"Rotterdam",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Wildflowers Floral Design",
    "ort":"Fairhope",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Wild Ivy",
    "ort":"Hitchin",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Wild Lark",
    "ort":"Burlington",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Wild Vanilla Studios",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Wild Vanilla Studios",
    "ort":"London",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Wild Wedding Flowers",
    "ort":"Neuhausen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wild Wood Gallery & Store",
    "ort":"Kassel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wilhelm Link e.K.",
    "ort":"Seligenstadt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Wallasey",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Willow Boutique",
    "ort":"Edinburgh",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Bergheim",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":"WINKELTJEVANLIES",
    "ort":"Den Burg",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wish gifts",
    "ort":"Denver",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Wish gifts",
    "ort":"Denver",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Without Waste",
    "ort":"Holywood",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Witthüs",
    "ort":"Lörrach",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"WNKL DEN HAAG",
    "ort":"Den Haag",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"WOHLSIGN",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wohndiele ",
    "ort":"Ahrenshoop",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wohnen & Leben",
    "ort":"Traunstein",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wohnen&mehr",
    "ort":"Kassel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"wohnfee.ch Bettina Christen",
    "ort":"Lützelflüh-Goldbach",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"WOHNGERADE",
    "ort":"Erlangen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wohngeschwisterchen",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wohnglück im Taunus",
    "ort":"Bad Homburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wohnkonzept Mayer",
    "ort":"Bad Vilbel",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wohnlich",
    "ort":"Sylt \/ OT Keitum",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wohnliebe",
    "ort":"Lübeck",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"wohnraum Berger",
    "ort":"Frankfurt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wohnreich",
    "ort":"Hofheim",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wohn-Sinn",
    "ort":"Westerland",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wohnzimmer",
    "ort":"BERLIN",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wohnzimmer",
    "ort":"BERLIN",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wohnzimmer",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wolff Winterhuder Kindersalon GmbH",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Mühldorf am Inn",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Brunnthal",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wolke 7 Stoffe",
    "ort":"Haßfurt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wolkenlos Homestyle",
    "ort":"Schwerte",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"wolkesieben accessoires",
    "ort":"Dortmund",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Womenart; Schmuck für Frau und Mann",
    "ort":"Basel",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Womenart; Schmuck für Frau und Mann, Gabriela Strasser Tripod",
    "ort":"Basel",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Wood & Rose",
    "ort":"AUSTIN",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Woods Grove",
    "ort":"Brooklyn",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"WOOLLYMOUNTAIN GmbH",
    "ort":"Saas-Fee",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Woonwinkel",
    "ort":"Portland",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"WOO skincare - cosmetics ",
    "ort":"Charlotte",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"WOP WORLD OF POP",
    "ort":"Lyon",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"WORK ON STUDIO",
    "ort":"VILLEURBANNE",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Work the Metal",
    "ort":"Louisville",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Work the Metal",
    "ort":"Louisville",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Wortwahl",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wortwahl",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Stuttgart",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"WP STORE",
    "ort":"Cadriano",
    "land":"[IT] Italien",
    "gesperrt":false
  },
  {
    "name":"Wunderhaus GmbH",
    "ort":"Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wunderprinz",
    "ort":"Friedrichstadt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"WunderSchönes",
    "ort":"Düsseldorf",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wunderwerk",
    "ort":"Esslingen am Neckar",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wünsch Dir Was",
    "ort":"Aschaffenburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"wunschlos glücklich",
    "ort":"Mittenwald",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Wurth Danmark A\/S",
    "ort":"Kolding",
    "land":"[DK] Dänemark",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Saxmundham",
    "land":"[GB] Vereinigtes Königreich",
    "gesperrt":false
  },
  {
    "name":"Wynono & Company",
    "ort":"Cold Spring",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"XS Gifts & Decorations",
    "ort":"Leusden",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Yamatuti GmbH",
    "ort":"Bern",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Yasomi Concept Store",
    "ort":"Biel-Benken",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"YAY!",
    "ort":"Orlando",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Yaya store",
    "ort":"Carcassonne",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"YBJ Fashion & Retail GmbH",
    "ort":"Küsnacht",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Yesterdays",
    "ort":"Kilkenny",
    "land":"[IE] Irland",
    "gesperrt":false
  },
  {
    "name":"Ylang",
    "ort":"CARHAIX-PLOUGUER",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"Yoghappy",
    "ort":"ARBRE",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"Yogimobil",
    "ort":"Riegelsberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"YOH-ART Home&Garden",
    "ort":"Duisburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Yolo Concept Store",
    "ort":"Bruxelles",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":"YOU & ME BY VICKY RODRIGUE TERRAZ",
    "ort":"St-Imier",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"YOUR FASHION FINDS",
    "ort":"Groningen",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Ypnotic",
    "ort":"München",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Zakka Joy",
    "ort":"Beacon",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"Zandbroz Variety",
    "ort":"Sioux Falls",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Weil Am Rhein",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Zapatos ",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Zapp style - Am weissen Turm",
    "ort":"Rothenburg ob der Tauber",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Zauberstübchen",
    "ort":"Wallhausen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Zeitlos Wohnelemente",
    "ort":"Hamburg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"ZeitRaum PopUp Shop",
    "ort":"Aalen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Zentral GAstronomie GmbH schnes & feines",
    "ort":"Amberg",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Zhazen concept store",
    "ort":"Quimper",
    "land":"[FR] Frankreich",
    "gesperrt":false
  },
  {
    "name":"RegalRocker",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"zierpalast",
    "ort":"Wiesbaden",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Oberhausen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"ZIN aan Tafel",
    "ort":"Bergen op Zoom",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Zinsli Eisenwaren + Haushalt AG",
    "ort":"Ilanz",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":"Z’IS",
    "ort":"Mechelen",
    "land":"[BE] Belgien",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Stuttgart",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"ZKM  Center for Art and Media",
    "ort":"Karlsruhe",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"ZKM Museumsshop",
    "ort":"Karlsruhe",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Z La Designs, LLC",
    "ort":"Brandon",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":"ZMC Pharmacy",
    "ort":"Royal Oak",
    "land":"[US] Vereinigte Staaten von Amerika",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Tübingen",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"zum Glück, Kurth & Lieder GbR",
    "ort":"Köln",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Zum Schockelgaul GmbH",
    "ort":"Forst an der Weinstraße",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"zur Auszeit",
    "ort":"Kirchentellinsfurt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Zur Auszeit",
    "ort":"Kirchentellinsfurt",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"Zürcher Kunstgesellschaft Museumsshop Moser",
    "ort":"Zürich",
    "land":"[CH] Schweiz",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Bad Bergzabern",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"(ZUS & ZO)",
    "ort":"Bussum",
    "land":"[NL] Niederlande",
    "gesperrt":false
  },
  {
    "name":"Zweigstelle Atelier",
    "ort":"WIEN",
    "land":"[AT] Österreich",
    "gesperrt":false
  },
  {
    "name":null,
    "ort":"Fuchstal",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"ZwoVier GmbH",
    "ort":"Berlin",
    "land":"[DE] Deutschland",
    "gesperrt":false
  },
  {
    "name":"ΜΗΤΣΕΛΗ ΜΑΡΙΑ ΚΩΝΣΤΑΝΤΙΝΟΣ",
    "ort":"Thessaloniki",
    "land":"[GR] Griechenland",
    "gesperrt":false
  },
  {
    "name":"ΜΙΧΑΛΑΚΟΥΚΟΣ Ι ΣΙΑ Ε Ε||PRAGMATIC",
    "ort":"CHALANDRI",
    "land":"[GR] Griechenland",
    "gesperrt":false
  },
  {
    "name":"ΜΠΑΛΤΟΥΝΑ ΕΛΕΝΗ ΑΘΑΝΑΣΙΟΣ",
    "ort":"Athens",
    "land":"[GR] Griechenland",
    "gesperrt":false
  },
  {
    "name":"ΡΑΜΠΙΑ ΦΩΤΕΙΝΗ ΒΑΣΙΛΕΙΟΣ",
    "ort":"Hydra",
    "land":"[GR] Griechenland",
    "gesperrt":false
  },
  {
    "name":"ΡΙΖΟΥ ΜΟΝΙΚΑ ΠΑΝΑΓΙΩΤΗΣ||BABY MOU",
    "ort":"Thessaloniki",
    "land":"[GR] Griechenland",
    "gesperrt":false
  },
  {
    "name":"ΣΗΦΑΛΑΚΗ ΑΘΗΝΑ ΓΕΩΡΓΙΟΣ",
    "ort":"Athen",
    "land":"[GR] Griechenland",
    "gesperrt":false
  },
  {
    "name":"ΧΑΛΟΥΒΑ ΑΝΝΑ ΣΤΑΥΡΟΣ",
    "ort":"Athina",
    "land":"[GR] Griechenland",
    "gesperrt":false
  }
];