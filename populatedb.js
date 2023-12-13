#! /usr/bin/env node

console.log(
  'This script populates some example shoes to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/inventory_application?retryWrites=true&w=majority"',
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const mongoose = require('mongoose');

const Shirt = require('./models/shirt');
const TShirt = require('./models/tshirt');
const Jean = require('./models/jean');
const Trouser = require('./models/trouser');
const Shoe = require('./models/shoe');
const Sweatshirt = require('./models/sweatshirt');

const shirts = [];
const tshirts = [];
const jeans = [];
const trousers = [];
const shoes = [];
const sweatshirts = [];

mongoose.set('strictQuery', false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log('Debug: About to connect');
  await mongoose.connect(mongoDB);
  console.log('Debug: Should be connected?');
  await createShirts();
  await createShoes();
  await createJeans();
  await createTrousers();
  await createTShirts();
  await createSweatshirts();
  console.log('Debug: Closing mongoose');
  mongoose.connection.close();
}

async function shoeCreate(
  index,
  name,
  description,
  imageURL,
  price,
  sizes,
  category,
  details,
) {
  const shoeDetails = { name, description, imageURL, price, sizes, category };
  if (details !== false) shoeDetails.details = details;

  const shoe = new Shoe(shoeDetails);
  await shoe.save();
  shoes[index] = shoe;
  console.log(`Added shoe: ${name}`);
}

async function shirtCreate(
  index,
  name,
  description,
  imageURL,
  price,
  sizes,
  category,
  details,
) {
  const shirtDetails = { name, description, imageURL, price, sizes, category };
  if (details !== false) shirtDetails.details = details;

  const shirt = new Shirt(shirtDetails);
  await shirt.save();
  shirts[index] = shirt;
  console.log(`Added shirt: ${name}`);
}

async function jeanCreate(
  index,
  name,
  description,
  imageURL,
  price,
  sizes,
  category,
  details,
) {
  const jeanDetails = { name, description, imageURL, price, sizes, category };
  if (details !== false) jeanDetails.details = details;

  const jean = new Jean(jeanDetails);
  await jean.save();
  jeans[index] = jean;
  console.log(`Added jean: ${name}`);
}

async function trouserCreate(
  index,
  name,
  description,
  imageURL,
  price,
  sizes,
  category,
  details,
) {
  const trouserDetails = {
    name,
    description,
    imageURL,
    price,
    sizes,
    category,
  };
  if (details !== false) trouserDetails.details = details;

  const trouser = new Trouser(trouserDetails);
  await trouser.save();
  trousers[index] = trouser;
  console.log(`Added trouser: ${name}`);
}

async function tshirtCreate(
  index,
  name,
  description,
  imageURL,
  price,
  sizes,
  category,
  details,
) {
  const tshirtDetails = { name, description, imageURL, price, sizes, category };
  if (details !== false) tshirtDetails.details = details;

  const tshirt = new TShirt(tshirtDetails);
  await tshirt.save();
  tshirts[index] = tshirt;
  console.log(`Added tshirt: ${name}`);
}

async function sweatshirtCreate(
  index,
  name,
  description,
  imageURL,
  price,
  sizes,
  category,
  details,
) {
  const sweatshirtDetails = {
    name,
    description,
    imageURL,
    price,
    sizes,
    category,
  };
  if (details !== false) sweatshirtDetails.details = details;

  const sweatshirt = new Sweatshirt(sweatshirtDetails);
  await sweatshirt.save();
  sweatshirts[index] = sweatshirt;
  console.log(`Added sweatshirt: ${name}`);
}

async function createShoes() {
  console.log('Adding shoes');
  await Promise.all([
    shoeCreate(
      0,
      'Nike',
      'Men Dunk Low Retro Sneakers',
      'https://i.imgur.com/m5yyFlf.jpg',
      'Rs. 8695',
      ['6', '7', '8', '9', '10', '11'],
      'casual-shoes',
      [
        'A pair of white & blue logo printed round toe casual sneakers with regular styling',
        'has a lace up closure',
        'Synthetic leather upper',
        'Cushioned footbed',
        'Rubber outsole with classic hoops pivot circle adds durable traction and heritage style.',
        'Foam midsole offers lightweight, responsive cushioning',
        'Low-cut, padded collar looks sleek and feels great',
      ],
    ),
    shoeCreate(
      1,
      'Puma',
      'Men Black & White Colourblocked Noah Sneakers',
      'https://i.imgur.com/1OQ5Rtw.jpg',
      'Rs. 2474',
      ['6', '7', '8', '9', '10', '11'],
      ' casual-shoes',
      [
        'A pair of round toe black Noah sneakers ,has regular styling',
        'Lace-ups detail',
        'Textile upper',
        'Cushioned footbed',
        'Textured and patterned outsole',
        'Warranty: 3 months',
      ],
    ),
    shoeCreate(
      2,
      'ADIDAS Originals',
      'Men Striped Retropy F2 Sneakers',
      'https://i.imgur.com/MjyaXTv.jpg',
      'Rs. 5999',
      ['6', '9', '10', '11'],
      'casual-shoes',
      [
        'Main material: Textile upper with synthetic nubuck overlay/ rubber outsole',
        'Brand color: Dark Blue / Cloud White / Bright Blue',
        'Woven upper design',
        'Comfortable fit',
        'Lace-up closure with eyelets ends',
        'Adidas brand logo print on tongue and at back',
        'Classic Adidas 3 stripe detail on the sides',
        'Warranty: 3 months',
        'Warranty provided by brand/manufacturer',
      ],
    ),
    shoeCreate(
      3,
      'ADIDAS Originals',
      'Men Leather Niteball Sneakers',
      'https://i.imgur.com/RR4wRX5.jpg',
      'Rs. 12999',
      ['9', '10', '11'],
      'casual-shoes',
      [
        'Main material: Leather upper/ rubber outsole',
        'Brand color: SaOWHITE/CLOWHI/COUGRN',
        'Lace-up closure with eyelets ends',
        'Adidas brand logo print on tongue and at back',
        'Classic Adidas 3 stripe detail on the sides',
        'Warranty: 3 months',
        'Warranty provided by brand/manufacturer',
      ],
    ),
    shoeCreate(
      4,
      'ADIDAS Originals',
      'Men OZELIA Sneakers',
      'https://i.imgur.com/UBjso3o.jpg',
      'Rs. 10999',
      ['8', '9', '10'],
      'casual-shoes',
      [
        'Material: Synthetic upper and rubber outsole',
        'Lace-up closure',
        'Brand logo detail',
        'Classic 3 stripe detail',
        'Cushioned footbed',
        'Textured and patterned outsole',
        'Warranty: 3 months',
        'Warranty provided by brand/manufacturer',
      ],
    ),
    shoeCreate(
      5,
      'Nike',
      'Men Air Jordan 13 Retro Sneakers',
      'https://i.imgur.com/lRIHLsF.jpg',
      'Rs. 19295',
      ['7', '8', '10', '11', '12'],
      'casual-shoes',
      [
        'A pair of white self design with brand logo printed details round toe casual shoes with regular styling has a lace up closure',
        'Cushioned footbed',
        'Rubber outsole',
        'Holographic "cat eye" logo',
        'Herringbone traction',
        'Foam midsole',
        'Responsive Zoom Air is encapsulated in the forefoot and heel, providing springy,',
        'low-profile cushioning.',
        'Genuine and synthetic leathers and textile materials in the upper provide',
      ],
    ),
    shoeCreate(
      6,
      'Nike',
      'Men Air Jordan 5 Retro Sneakers',
      'https://i.imgur.com/SiDvs1a.jpg',
      'Rs. 19295',
      ['6', '7', '8', '9', '10'],
      'casual-shoes',
      [
        'A pair of round toe navy blue & white sneakers ,has mid-top styling',
        'Lace-ups detail',
        'Synthetic leather upper',
        'Cushioned footbed',
        'Textured and patterned outsole',
      ],
    ),
    shoeCreate(
      7,
      'Louis Philippe',
      'Men Mid-Top Lace-Up Leather Boots',
      'https://i.imgur.com/eZFK303.jpg',
      'Rs. 8969',
      ['7', '8', '9', '10'],
      'boots',
      [
        'A pair of round toe regular boots ,has mid-top styling',
        'Lace-ups detail',
        'Leather upper',
        'Cushioned footbed',
        'Textured and patterned outsole',
      ],
    ),
  ]);
}

async function createShirts() {
  console.log('Adding Shirts');
  await Promise.all([
    shirtCreate(
      0,
      'H&M',
      'Men White Slim Fit Easy-Iron Shirt',
      'https://i.imgur.com/TelmroF.jpg',
      'Rs. 1499',
      ['36', '38', '40', '42', '44', '46'],
      'shirts',
      [
        'Shirt in woven fabric with an easy-iron finish.',
        'Turn-down collar, classic front and darts and darts and a yoke at the back.',
        'Long sleeves with adjustable buttoning at the cuffs and a sleeve placket with a link button.',
        'Gently rounded hem. ',
        'Slim Fit a fit with narrow shoulders and a tapered waist for a fitted silhouette.',
      ],
    ),
    shirtCreate(
      1,
      'ARROW',
      'Men Slim Fit Formal Shirt',
      'https://i.imgur.com/IrGgD8I.jpg',
      'Rs. 1,624',
      ['38', '39', '40', '42', '44'],
      'shirts',
      [
        'Features french button placket',
        'Slim Fit',
        'Package contains: 1 shirt',
        'Machine wash',
        'Cotton',
      ],
    ),
    shirtCreate(
      2,
      'ARROW',
      'Men Manhattan Checked Slim Fit Shirt',
      'https://i.imgur.com/N577LHw.jpg',
      'Rs. 1,264',
      ['38', '39', '40', '42', '44'],
      'shirts',
      [
        'Adjustable angled cuffs',
        'Patch pocket',
        'Slim Fit',
        'Package contains: 1 shirt',
        'Machine wash',
        'Cotton',
      ],
    ),
    shirtCreate(
      3,
      'H&M',
      'Men Black Slim Fit Easy-Iron Shirts',
      'https://i.imgur.com/CHP70W7.png',
      'Rs. 1499',
      ['36', '38', '40', '42', '44', '46'],
      'shirts',
      [
        'Shirt in woven fabric with an easy-iron finish.',
        'Turn-down collar, classic front and darts and darts and a yoke at the back.',
        'Long sleeves with adjustable buttoning at the cuffs and a sleeve placket with a link button.',
        'Gently rounded hem.',
        'Slim Fit a fit with narrow shoulders and a tapered waist for a fitted silhouette.',
      ],
    ),
    shirtCreate(
      4,
      'H&M',
      'Men Relaxed Fit Oxford Shirt',
      'https://i.imgur.com/Fol5YcE.png',
      'Rs. 1999',
      ['36', '38', '44'],
      'shirts',
      [
        'Relaxed-fit shirt in Oxford cotton with a button-down collar',
        'classic front',
        'yoke at the back and an open chest pocket.',
        'Long sleeves with buttoned cuffs and a sleeve placket with a link button',
        'Gently rounded hem.',
      ],
    ),
    shirtCreate(
      5,
      'Blackberrys',
      'Casual Pink Solid Shirt - Pareto',
      'https://i.imgur.com/AKSFeLi.jpg',
      'Rs. 3,295',
      ['36', '38', '40', '42', '44', '46'],
      'shirts',
      [
        'Pink solid opaque Casual shirt',
        'Has a spread collar',
        'button placket',
        'long regular sleeves',
        'curved hem',
      ],
    ),
  ]);
}

async function createJeans() {
  console.log('Adding Jeans');
  await Promise.all([
    jeanCreate(
      0,
      'H&M',
      'Men Black Slim Jeans',
      'https://i.imgur.com/w0omHIg.png',
      'Rs. 1799',
      ['28', '29', '30', '32', '34', '36', '38'],
      'jeans',
      [
        '5-pocket jeans in stretch cotton denim with a regular waist',
        'zip fly and button',
        'slim legs',
      ],
    ),
    jeanCreate(
      1,
      "LEVI'S",
      'Men Slim Mid Rise Blue Jeans',
      'https://i.imgur.com/poFRJ0C.jpg',
      'Rs. 1,439',
      ['28', '30', '32', '34', '36', '38'],
      'jeans',
      ['Cotton Blend', 'Button & Zip', 'Heavy Fade', 'Mid Rise', 'Clean Look'],
    ),
    jeanCreate(
      2,
      'Louis Philippe Jeans',
      'Louis Philippe Jeans Men Power Skinny Fit Mildly Distressed Light Fade Stretchable Jeans',
      'https://i.imgur.com/2Mb48Vp.jpg',
      'Rs. 3,599',
      ['32', '34', '36', '38'],
      'jeans',
      [
        'Medium shade, heavy fade blue jeans',
        'Skinny fit, mid-rise',
        'Brand Fit: power',
        'Distressed',
        'Stretchable',
        '5 pocket',
        'Length: Regular',
      ],
    ),
    jeanCreate(
      3,
      'H&M',
      'Slim Jeans',
      'https://i.imgur.com/NySAlyz.png',
      'Rs. 2299',
      ['28/30', '29/30', '30/30', '31/30', '32/30', '33/30', '34/30'],
      'jeans',
      [
        '5-pocket jeans in cotton denim with a slight stretch for good comfort. Straight leg and a slim fit from the waist through the thigh to the hem. Regular waist and a zip fly. Easily styled for sleek or sporty.',
      ],
    ),
    jeanCreate(
      4,
      'H&M',
      'Slim Jeans',
      'https://i.imgur.com/vLrwHZM.jpg',
      'Rs. 1,529',
      ['28/30', '29/30', '30/30', '31/30', '32/30', '33/30', '34/30'],
      'jeans',
      [
        '5-pocket jeans in cotton denim with a slight stretch for good comfort. Straight leg and a slim fit from the waist through the thigh to the hem. Regular waist and a zip fly. Easily styled for sleek or sporty.',
      ],
    ),
    jeanCreate(
      5,
      'ARMANI EXCHANGE',
      'Washed Straight Fit Jeans',
      'https://i.imgur.com/dxZB7v2.jpg',
      'Rs. 10,399',
      ['30', '32', '34', '36', '38'],
      'jeans',
      ['Machine wash', 'Mid Rise', '99% cotton, 1% elastane'],
    ),
    jeanCreate(
      6,
      'JACK & JONES',
      'Men Slim Fit Jeans with Insert-Pockets',
      'https://i.imgur.com/nZGdXm8.jpg',
      'Rs. 1379',
      ['28', '30', '32', '34', '36'],
      'jeans',
      [
        'Jack & Jones Black Glenn Slim Fit Low Rise Stretch Jeans',
        'Package contains: 1 jeans',
        'Machine wash',
        'cotton 79%, cotton-recycled 20%, elastane 1%',
        'Low Rise',
      ],
    ),
  ]);
}

async function createTrousers() {
  console.log('Adding Trousers');
  await Promise.all([
    trouserCreate(
      0,
      'RAYMOND',
      'Checked Slim Fit Flat-Front Trousers',
      'https://i.imgur.com/UjDsm3R.jpg',
      'Rs. 1,350',
      ['30', '32', '34', '36'],
      'trousers',
      [
        'Slim Fit',
        'Package contains: 1 trousers',
        'Machine wash',
        'Polyester, viscose, Lycra',
        'Mid Rise',
      ],
    ),
    trouserCreate(
      1,
      'LOUIS PHILIPPE ',
      'Men Slim Fit Dark Blue Viscose Rayon Trousers',
      'https://i.imgur.com/MVCzEoc.jpg',
      'Rs. 2,699',
      ['30', '32', '34', '36', '38', '40'],
      'trousers',
      [
        'Dark blue formal',
        'Slim fit',
        'Mid-rise',
        'Length: regular',
        'Pattern: solid',
        'Flat-front, with no pleats design',
        'Feature: plain',
      ],
    ),
    trouserCreate(
      2,
      'LOUIS PHILIPPE',
      'Checked Slim Fit Flat-Front Trousers',
      'https://i.imgur.com/4r9bjdc.jpg',
      'Rs. 1,793',
      ['30', '32', '34', '36'],
      'trousers',
      [
        'Slim Fit',
        'Package contains: 1 trousers',
        'Machine wash',
        'Mid Rise',
        '64% polyester, 34% viscose, 2% spandex',
      ],
    ),
    trouserCreate(
      3,
      'Van Heusen',
      'Van Heusen Black Slim Fit Striped Trousers',
      'https://i.imgur.com/2tfK5wX.jpg',
      'Rs. 2699',
      ['28', '30', '32', '34', '36'],
      'trousers',
      [
        'Fit: Slim fit',
        'Pattern: Stripes',
        'Wash: Machine Wash as per Tag',
        'Color: Black',
        'Fabric: 68% Polyester, 28% Viscose and 4% Spandex',
      ],
    ),
    trouserCreate(
      4,
      'ARROW',
      'Hudson Tailored Fit Checked Formal Trousers',
      'https://i.imgur.com/MLeUOvV.jpg',
      'Rs. 1,264',
      ['30', '32', '34'],
      'trousers',
      [
        'Mid-rise waist',
        'Button, hook and bar with zip fly closure',
        'Four-pocket styling',
        'Flat front',
        'Checked pattern',
        'Regular weave',
        'Brand fit: Hudson tailored fit',
        'Fit Mapping: Regular fit',
      ],
    ),
    trouserCreate(
      5,
      'ARROW',
      'Windowpane Check Hudson Tailored Fit Formal Trousers',
      'https://i.imgur.com/mWSJ4eS.jpg',
      'Rs. 1,374',
      ['30', '32', '34'],
      'trousers',
      [
        'Mid-rise waist',
        'Button waist and zip fly closure',
        'Four pockets',
        'Flat front',
        'Windowpane checked pattern',
        'Twill weave',
        'Brand fit: Hudson tailored fit',
        'Fit Mapping: Regular fit',
      ],
    ),
  ]);
}

async function createTShirts() {
  console.log('Adding TShirts');
  await Promise.all([
    tshirtCreate(
      0,
      'ARMANI EXCHANGE',
      'Contrast Tipping Regular Fit Polo T-shirt',
      'https://i.imgur.com/45h9pgc.jpg',
      'Rs. 6,399',
      ['S', 'M', 'L', 'XL'],
      't-shirts',
      ['Regular Fit', 'Machine wash', '100% Cotton'],
    ),
    tshirtCreate(
      1,
      'JACK & JONES',
      'Men Slim Fit Polo T-Shirt with Brand Print',
      'https://i.imgur.com/A45k0Vy.jpg',
      'Rs. 659',
      ['S', 'M', 'L', 'XL', 'XXL'],
      't-shirts',
      [
        'Slim Fit',
        'Package contains: 1 t-shirt',
        'Machine wash',
        '100% cotton',
      ],
    ),
    tshirtCreate(
      2,
      'MARKS & SPENCER',
      'Regular Fit Full-Sleeves Crew-Neck T-Shirt',
      'https://i.imgur.com/kvGvIhS.jpg',
      'Rs. 884',
      ['S', 'M', 'L', 'XL', 'XXL'],
      't-shirts',
      [
        "his pure cotton t-shirt is an understated wardrobe staple. It's cut to a regular fit and features a neat crew neck. Long sleeves add a cosy feel. The brand only ever use responsibly sourced cotton for their clothes.",
        'Regular Fit',
        'Package contains: 1 t-shirt',
        'Machine wash',
        '100% cotton',
      ],
    ),
    tshirtCreate(
      3,
      'GAP',
      'Logo Print Regular Fit Crew-Neck T-Shirt',
      'https://i.imgur.com/B6oSXx6.jpg',
      'Rs. 1,299',
      ['XS', 'S', 'M', 'L', 'XL'],
      't-shirts',
      [
        'Regular Fit',
        'Package contains: 1 t-shirt',
        'Machine wash cold',
        '100% cotton',
      ],
    ),
    tshirtCreate(
      4,
      'JACK & JONES',
      'Men Slim Fit Polo T-Shirt with Brand Print',
      'https://i.imgur.com/beay9ES.jpg',
      'Rs. 550',
      ['S', 'M', 'L', 'XL', 'XXL'],
      't-shirts',
      [
        'Slim Fit',
        'Package contains: 1 t-shirt',
        'Machine wash',
        '100% cotton',
      ],
    ),
  ]);
}

async function createSweatshirts() {
  console.log('Adding Sweatshirts');
  await Promise.all([
    sweatshirtCreate(
      0,
      'H&M',
      'Relaxed Fit Hoodie',
      'https://i.imgur.com/VPV94Xv.png',
      'Rs. 2,999',
      ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      'sweatshirts',
      [
        'Relaxed-fit hoodie in sweatshirt fabric with a soft brushed inside. Round, rib-trimmed neckline, a double-layered, drawstring hood, dropped shoulders and long sleeves. Kangaroo pocket and ribbing at the cuffs and hem.',
      ],
    ),
    sweatshirtCreate(
      1,
      'H&M',
      'Relaxed Fit Hoodie',
      'https://i.imgur.com/BQjLuqw.png',
      'Rs. 2,999',
      ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      'sweatshirts',
      [
        'Relaxed-fit hoodie in sweatshirt fabric with a soft brushed inside. Round, rib-trimmed neckline, a double-layered, drawstring hood, dropped shoulders and long sleeves. Kangaroo pocket and ribbing at the cuffs and hem.',
      ],
    ),
    sweatshirtCreate(
      2,
      'GAP',
      'Men Logo Embroidered Regular Fit Crew-Neck Sweatshirt',
      'https://i.imgur.com/2LmTrCm.jpg',
      'Rs. 2,799',
      ['XS', 'S', 'M', 'L', 'XL'],
      'sweatshirts',
      [
        'Regular Fit',
        'Package contains: 1 sweatshirt',
        'Machine wash',
        '100% Cotton',
      ],
    ),
    sweatshirtCreate(
      3,
      'H&M',
      'Relaxed Fit Pile hoodie',
      'https://i.imgur.com/2yEwlkq.jpg',
      'Rs. 1,839',
      ['XS', 'S', 'M', 'L', 'XL'],
      'sweatshirts',
      [
        'Hoodie in soft pile with a kangaroo pocket. Hood with an elastic drawstring, long sleeves with concealed elastication at the cuffs, and an elastic drawstring at the hem.',
      ],
    ),
    sweatshirtCreate(
      4,
      'H&M',
      'Relaxed Fit Hoodie',
      'https://i.imgur.com/jJcwFsK.jpg',
      'Rs. 1,199',
      ['XS', 'S', 'M', 'L', 'XL'],
      'sweatshirts',
      [
        'Hoodie in sweatshirt fabric made from a cotton blend. Relaxed fit with a lined, drawstring hood, long sleeves, kangaroo pocket and ribbing at the cuffs and hem. Soft brushed inside.',
      ],
    ),
  ]);
}
