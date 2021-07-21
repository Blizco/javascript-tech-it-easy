// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

//////////////////////////////////////////////////////////////////////////////////////
// Opdracht 1a
//////////////////////////////////////////////////////////////////////////////////////
let totalInStock = 0;
function tvsToBeSold() {
    for (let i = 0; i < inventory.length; i++) {
        totalInStock = totalInStock + inventory[i].originalStock - inventory[i].sold;
    }
    return totalInStock;
}
tvsToBeSold();

//console.log(`We moeten nog ${totalInStock} TV's verkopen`);

//////////////////////////////////////////////////////////////////////////////////////
// Opdracht 1b
//////////////////////////////////////////////////////////////////////////////////////
// referentie naar het element opslaan
const listTotalInStock = document.getElementById("amount-to-sold");

// nieuw DOM element maken
const totalInStockElement = document.createElement("h2");

// tekst in element plaatsen
totalInStockElement.textContent = `We moeten nog ${totalInStock} TV's verkopen`;

// attribuut (class) plaatsen
totalInStockElement.setAttribute('class', 'colorRed');

// tenslotte element toevoegen aan de DOM
listTotalInStock.append(totalInStockElement);

//////////////////////////////////////////////////////////////////////////////////////
// Opdracht 2a
//////////////////////////////////////////////////////////////////////////////////////
const tvTypes = inventory.map((tv) => {
    return tv.type;
})
console.log(tvTypes);

//////////////////////////////////////////////////////////////////////////////////////
// Opdracht 2b
//////////////////////////////////////////////////////////////////////////////////////
const tvsOutOfStock = inventory.filter((tv) => {
    return tv.originalStock === tv.sold;
})
console.log(tvsOutOfStock);

//////////////////////////////////////////////////////////////////////////////////////
// Opdracht 2c
//////////////////////////////////////////////////////////////////////////////////////
const tvsWithAmbilight = inventory.filter((tv) => {
    return tv.options.ambiLight;
})
console.log(tvsWithAmbilight);

//////////////////////////////////////////////////////////////////////////////////////
// Opdracht 2d
//////////////////////////////////////////////////////////////////////////////////////
function tvscheapest() {
    inventory.sort((a, b) => a.price - b.price);
    console.log(inventory);
}
tvscheapest();

//////////////////////////////////////////////////////////////////////////////////////
// Opdracht 3a
//////////////////////////////////////////////////////////////////////////////////////
let maxRevenue = 0;
function calcMaxRevenue() {
    for (let i = 0; i < inventory.length; i++) {
        maxRevenue = maxRevenue + inventory[i].price * inventory[i].originalStock;
    }
    return maxRevenue;
}
calcMaxRevenue();

//console.log(`Maximaal kunnen we ${maxRevenue} euro aan TV's verkopen`);

// referentie naar het element opslaan
const listMaxRevenue = document.getElementById("max-revenue");

// nieuw DOM element maken
const maxRevenueElement = document.createElement("h2");

// tekst in element plaatsen
maxRevenueElement.textContent = `Maximaal kunnen we ${maxRevenue} euro aan TV's verkopen`;

// attribuut (class) plaatsen
maxRevenueElement.setAttribute('class', 'colorBlue');

// tenslotte element toevoegen aan de DOM
listMaxRevenue.append(maxRevenueElement);

//////////////////////////////////////////////////////////////////////////////////////
// Opdracht 3b
//////////////////////////////////////////////////////////////////////////////////////
let currentRevenue = 0;
function calcCurrentRevenue() {
    for (let i = 0; i < inventory.length; i++) {
        currentRevenue = currentRevenue + inventory[i].price * inventory[i].sold;
    }
    return currentRevenue;
}
calcCurrentRevenue();

//console.log(`We hebben nu ${currentRevenue} euro aan TV's verkocht`);

// referentie naar het element opslaan
const listCurrentRevenue = document.getElementById("current-revenue");

// nieuw DOM element maken
const currentRevenueElement = document.createElement("h2");

// tekst in element plaatsen
currentRevenueElement.textContent = `We hebben nu ${currentRevenue} euro aan TV's verkocht`;

// attribuut (class) plaatsen
currentRevenueElement.setAttribute('class', 'colorGreen');

// tenslotte element toevoegen aan de DOM
listCurrentRevenue.append(currentRevenueElement);

//////////////////////////////////////////////////////////////////////////////////////
// Opdracht 4
//////////////////////////////////////////////////////////////////////////////////////
const typeName1 = inventory[0].type;
//console.log (typeName1);
// referentie naar het element opslaan
const listtypeName1 = document.getElementById("type-name1");

// nieuw DOM element maken
const typeName1Element = document.createElement("p");

// tekst in element plaatsen
typeName1Element.textContent = `De goedkoopste TV is type: ${typeName1}`;

// tenslotte element toevoegen aan de DOM
listtypeName1.append(typeName1Element);

const typeName2 = inventory[inventory.length-1].type;
//console.log (typeName2);
// referentie naar het element opslaan
const listtypeName2 = document.getElementById("type-name2");

// nieuw DOM element maken
const typeName2Element = document.createElement("p");

// tekst in element plaatsen
typeName2Element.textContent = `De duurste TV is type: ${typeName2}`;

// tenslotte element toevoegen aan de DOM
listtypeName2.append(typeName2Element);

//////////////////////////////////////////////////////////////////////////////////////
// Opdracht 5a
//////////////////////////////////////////////////////////////////////////////////////
let tvString ="";
function getTV(typeName) {
    const tvArray = inventory.find((tv) => {
        return tv.type === typeName;
    })
    tvString = `${tvArray.brand} ${tvArray.type} - ${tvArray.name}`
    console.log(tvString);
}
getTV("43PUS6504/12")

//////////////////////////////////////////////////////////////////////////////////////
// Opdracht 5b
//////////////////////////////////////////////////////////////////////////////////////
let formattedPrice = "";
function formatPrice(price) {
    formattedPrice = `€${price},-`;
    console.log(formattedPrice);
}
formatPrice(709);

//////////////////////////////////////////////////////////////////////////////////////
// Opdracht 5c
//////////////////////////////////////////////////////////////////////////////////////
let formattedScreenSizesString = "";
function formatScreenSizes(screensizes) {
    formattedScreenSizes =screensizes.map((screensize) => {
        return `${screensize} inch (${Math.round(2.54*screensize)} cm) `;
    })
    formattedScreenSizesString = formattedScreenSizes.join(" | ");
    console.log(formattedScreenSizesString);
}
formatScreenSizes([32, 43, 50, 55, 58]);

//////////////////////////////////////////////////////////////////////////////////////
// Opdracht 5d
//////////////////////////////////////////////////////////////////////////////////////
getTV("43PUS6504/12"); //geeft <tvString> als output -> in DOM zetten
// referentie naar het element opslaan
const listTVString1 = document.getElementById("tv-string1");

// nieuw DOM element maken
const tvString1Element = document.createElement("p");

// tekst in element plaatsen
tvString1Element.textContent = tvString;

// tenslotte element toevoegen aan de DOM
listTVString1.append(tvString1Element);

formatPrice(379); //geeft <formattedPrice> als outputstring -> in DOM zetten
// referentie naar het element opslaan
const listTVString2 = document.getElementById("tv-string2");

// nieuw DOM element maken
const tvString2Element = document.createElement("p");

// tekst in element plaatsen
tvString2Element.textContent = formattedPrice;

// tenslotte element toevoegen aan de DOM
listTVString2.append(tvString2Element);

formatScreenSizes([43, 50, 58, 65]); // geeft <formattedScreenSizesString> als outputstring -> DOM
// referentie naar het element opslaan
const listTVString3 = document.getElementById("tv-string3");

// nieuw DOM element maken
const tvString3Element = document.createElement("p");

// tekst in element plaatsen
tvString3Element.textContent = formattedScreenSizesString;

// tenslotte element toevoegen aan de DOM
listTVString3.append(tvString3Element);

//////////////////////////////////////////////////////////////////////////////////////
// Opdracht 5e
//////////////////////////////////////////////////////////////////////////////////////
// Helaas niet meer af gekregen om het op tijd te kunnen inleveren.
// Ik zie graag de oplossing tegemoet.
// Geldt ook voor de bonusopdracht.