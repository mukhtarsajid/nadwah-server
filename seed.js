const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const sampleProducts = [
  {
    "name": "Aroma Luxe Signature Fragrance 1",
    "brand": "Aroma Luxe",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 987,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "30ml",
    "stock": 22,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 2",
    "brand": "Noir Essence",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 1124,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "50ml",
    "stock": 39,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 3",
    "brand": "Velvet Oud",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 1261,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 56,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 4",
    "brand": "Royal Scent",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 1398,
    "category": "Body Mist",
    "gender": "Men",
    "size": "100ml",
    "stock": 73,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 5",
    "brand": "Maison Bloom",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 1535,
    "category": "Attar",
    "gender": "Women",
    "size": "30ml",
    "stock": 90,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 6",
    "brand": "Urban Mist",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 1672,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 11,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 7",
    "brand": "Golden Aroma",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 1809,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "75ml",
    "stock": 28,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 8",
    "brand": "Elite Fragrance",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 1946,
    "category": "Parfum",
    "gender": "Women",
    "size": "100ml",
    "stock": 45,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 9",
    "brand": "Pure Essence",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 2083,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 62,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 10",
    "brand": "Scent House",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 2220,
    "category": "Attar",
    "gender": "Men",
    "size": "50ml",
    "stock": 79,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 11",
    "brand": "Aroma Luxe",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 2357,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "75ml",
    "stock": 96,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 12",
    "brand": "Noir Essence",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 2494,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 17,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 13",
    "brand": "Velvet Oud",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 2631,
    "category": "Parfum",
    "gender": "Men",
    "size": "30ml",
    "stock": 34,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 14",
    "brand": "Royal Scent",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 2768,
    "category": "Body Mist",
    "gender": "Women",
    "size": "50ml",
    "stock": 51,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 15",
    "brand": "Maison Bloom",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 2905,
    "category": "Attar",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 68,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 16",
    "brand": "Urban Mist",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 3042,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "100ml",
    "stock": 85,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 17",
    "brand": "Golden Aroma",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 3179,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "30ml",
    "stock": 6,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 18",
    "brand": "Elite Fragrance",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 3316,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 23,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 19",
    "brand": "Pure Essence",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 3453,
    "category": "Body Mist",
    "gender": "Men",
    "size": "75ml",
    "stock": 40,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 20",
    "brand": "Scent House",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 3590,
    "category": "Attar",
    "gender": "Women",
    "size": "100ml",
    "stock": 57,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 21",
    "brand": "Aroma Luxe",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 3727,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 74,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 22",
    "brand": "Noir Essence",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 3864,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "50ml",
    "stock": 91,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 23",
    "brand": "Velvet Oud",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 4001,
    "category": "Parfum",
    "gender": "Women",
    "size": "75ml",
    "stock": 12,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 24",
    "brand": "Royal Scent",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 4138,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 29,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 25",
    "brand": "Maison Bloom",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 4275,
    "category": "Attar",
    "gender": "Men",
    "size": "30ml",
    "stock": 46,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 26",
    "brand": "Urban Mist",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 4412,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "50ml",
    "stock": 63,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 27",
    "brand": "Golden Aroma",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 4549,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 80,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 28",
    "brand": "Elite Fragrance",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 4686,
    "category": "Parfum",
    "gender": "Men",
    "size": "100ml",
    "stock": 97,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 29",
    "brand": "Pure Essence",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 4823,
    "category": "Body Mist",
    "gender": "Women",
    "size": "30ml",
    "stock": 18,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 30",
    "brand": "Scent House",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 4960,
    "category": "Attar",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 35,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 31",
    "brand": "Aroma Luxe",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 5097,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "75ml",
    "stock": 52,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 32",
    "brand": "Noir Essence",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 5234,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "100ml",
    "stock": 69,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 33",
    "brand": "Velvet Oud",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 5371,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 86,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 34",
    "brand": "Royal Scent",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 5508,
    "category": "Body Mist",
    "gender": "Men",
    "size": "50ml",
    "stock": 7,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 35",
    "brand": "Maison Bloom",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 5645,
    "category": "Attar",
    "gender": "Women",
    "size": "75ml",
    "stock": 24,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 36",
    "brand": "Urban Mist",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 5782,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 41,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 37",
    "brand": "Golden Aroma",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 5919,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "30ml",
    "stock": 58,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 38",
    "brand": "Elite Fragrance",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 6056,
    "category": "Parfum",
    "gender": "Women",
    "size": "50ml",
    "stock": 75,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 39",
    "brand": "Pure Essence",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 6193,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 92,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 40",
    "brand": "Scent House",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 6330,
    "category": "Attar",
    "gender": "Men",
    "size": "100ml",
    "stock": 13,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 41",
    "brand": "Aroma Luxe",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 6467,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "30ml",
    "stock": 30,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 42",
    "brand": "Noir Essence",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 6604,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 47,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 43",
    "brand": "Velvet Oud",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 6741,
    "category": "Parfum",
    "gender": "Men",
    "size": "75ml",
    "stock": 64,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 44",
    "brand": "Royal Scent",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 6878,
    "category": "Body Mist",
    "gender": "Women",
    "size": "100ml",
    "stock": 81,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 45",
    "brand": "Maison Bloom",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 7015,
    "category": "Attar",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 98,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 46",
    "brand": "Urban Mist",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 7152,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "50ml",
    "stock": 19,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 47",
    "brand": "Golden Aroma",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 7289,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "75ml",
    "stock": 36,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 48",
    "brand": "Elite Fragrance",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 7426,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 53,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 49",
    "brand": "Pure Essence",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 7563,
    "category": "Body Mist",
    "gender": "Men",
    "size": "30ml",
    "stock": 70,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 50",
    "brand": "Scent House",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 7700,
    "category": "Attar",
    "gender": "Women",
    "size": "50ml",
    "stock": 87,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 51",
    "brand": "Aroma Luxe",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 7837,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 8,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 52",
    "brand": "Noir Essence",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 7974,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "100ml",
    "stock": 25,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 53",
    "brand": "Velvet Oud",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 960,
    "category": "Parfum",
    "gender": "Women",
    "size": "30ml",
    "stock": 42,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 54",
    "brand": "Royal Scent",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 1097,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 59,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 55",
    "brand": "Maison Bloom",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 1234,
    "category": "Attar",
    "gender": "Men",
    "size": "75ml",
    "stock": 76,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 56",
    "brand": "Urban Mist",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 1371,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "100ml",
    "stock": 93,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 57",
    "brand": "Golden Aroma",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 1508,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 14,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 58",
    "brand": "Elite Fragrance",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 1645,
    "category": "Parfum",
    "gender": "Men",
    "size": "50ml",
    "stock": 31,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 59",
    "brand": "Pure Essence",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 1782,
    "category": "Body Mist",
    "gender": "Women",
    "size": "75ml",
    "stock": 48,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 60",
    "brand": "Scent House",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 1919,
    "category": "Attar",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 65,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 61",
    "brand": "Aroma Luxe",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 2056,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "30ml",
    "stock": 82,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 62",
    "brand": "Noir Essence",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 2193,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "50ml",
    "stock": 99,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 63",
    "brand": "Velvet Oud",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 2330,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 20,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 64",
    "brand": "Royal Scent",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 2467,
    "category": "Body Mist",
    "gender": "Men",
    "size": "100ml",
    "stock": 37,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 65",
    "brand": "Maison Bloom",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 2604,
    "category": "Attar",
    "gender": "Women",
    "size": "30ml",
    "stock": 54,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 66",
    "brand": "Urban Mist",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 2741,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 71,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 67",
    "brand": "Golden Aroma",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 2878,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "75ml",
    "stock": 88,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 68",
    "brand": "Elite Fragrance",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 3015,
    "category": "Parfum",
    "gender": "Women",
    "size": "100ml",
    "stock": 9,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 69",
    "brand": "Pure Essence",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 3152,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 26,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 70",
    "brand": "Scent House",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 3289,
    "category": "Attar",
    "gender": "Men",
    "size": "50ml",
    "stock": 43,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 71",
    "brand": "Aroma Luxe",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 3426,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "75ml",
    "stock": 60,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 72",
    "brand": "Noir Essence",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 3563,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 77,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 73",
    "brand": "Velvet Oud",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 3700,
    "category": "Parfum",
    "gender": "Men",
    "size": "30ml",
    "stock": 94,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 74",
    "brand": "Royal Scent",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 3837,
    "category": "Body Mist",
    "gender": "Women",
    "size": "50ml",
    "stock": 15,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 75",
    "brand": "Maison Bloom",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 3974,
    "category": "Attar",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 32,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 76",
    "brand": "Urban Mist",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 4111,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "100ml",
    "stock": 49,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 77",
    "brand": "Golden Aroma",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 4248,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "30ml",
    "stock": 66,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 78",
    "brand": "Elite Fragrance",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 4385,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 83,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 79",
    "brand": "Pure Essence",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 4522,
    "category": "Body Mist",
    "gender": "Men",
    "size": "75ml",
    "stock": 100,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 80",
    "brand": "Scent House",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 4659,
    "category": "Attar",
    "gender": "Women",
    "size": "100ml",
    "stock": 21,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 81",
    "brand": "Aroma Luxe",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 4796,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 38,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 82",
    "brand": "Noir Essence",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 4933,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "50ml",
    "stock": 55,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 83",
    "brand": "Velvet Oud",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 5070,
    "category": "Parfum",
    "gender": "Women",
    "size": "75ml",
    "stock": 72,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 84",
    "brand": "Royal Scent",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 5207,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 89,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 85",
    "brand": "Maison Bloom",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 5344,
    "category": "Attar",
    "gender": "Men",
    "size": "30ml",
    "stock": 10,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 86",
    "brand": "Urban Mist",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 5481,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "50ml",
    "stock": 27,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 87",
    "brand": "Golden Aroma",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 5618,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 44,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 88",
    "brand": "Elite Fragrance",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 5755,
    "category": "Parfum",
    "gender": "Men",
    "size": "100ml",
    "stock": 61,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 89",
    "brand": "Pure Essence",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 5892,
    "category": "Body Mist",
    "gender": "Women",
    "size": "30ml",
    "stock": 78,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 90",
    "brand": "Scent House",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 6029,
    "category": "Attar",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 95,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 91",
    "brand": "Aroma Luxe",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 6166,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "75ml",
    "stock": 16,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 92",
    "brand": "Noir Essence",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 6303,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "100ml",
    "stock": 33,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 93",
    "brand": "Velvet Oud",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 6440,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 50,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 94",
    "brand": "Royal Scent",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 6577,
    "category": "Body Mist",
    "gender": "Men",
    "size": "50ml",
    "stock": 67,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 95",
    "brand": "Maison Bloom",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 6714,
    "category": "Attar",
    "gender": "Women",
    "size": "75ml",
    "stock": 84,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 96",
    "brand": "Urban Mist",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 6851,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 5,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 97",
    "brand": "Golden Aroma",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 6988,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "30ml",
    "stock": 22,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 98",
    "brand": "Elite Fragrance",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 7125,
    "category": "Parfum",
    "gender": "Women",
    "size": "50ml",
    "stock": 39,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 99",
    "brand": "Pure Essence",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 7262,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 56,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 100",
    "brand": "Scent House",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 7399,
    "category": "Attar",
    "gender": "Men",
    "size": "100ml",
    "stock": 73,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 101",
    "brand": "Aroma Luxe",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 7536,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "30ml",
    "stock": 90,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 102",
    "brand": "Noir Essence",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 7673,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 11,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 103",
    "brand": "Velvet Oud",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 7810,
    "category": "Parfum",
    "gender": "Men",
    "size": "75ml",
    "stock": 28,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 104",
    "brand": "Royal Scent",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 7947,
    "category": "Body Mist",
    "gender": "Women",
    "size": "100ml",
    "stock": 45,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 105",
    "brand": "Maison Bloom",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 933,
    "category": "Attar",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 62,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 106",
    "brand": "Urban Mist",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 1070,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "50ml",
    "stock": 79,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 107",
    "brand": "Golden Aroma",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 1207,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "75ml",
    "stock": 96,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 108",
    "brand": "Elite Fragrance",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 1344,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 17,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 109",
    "brand": "Pure Essence",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 1481,
    "category": "Body Mist",
    "gender": "Men",
    "size": "30ml",
    "stock": 34,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 110",
    "brand": "Scent House",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 1618,
    "category": "Attar",
    "gender": "Women",
    "size": "50ml",
    "stock": 51,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 111",
    "brand": "Aroma Luxe",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 1755,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 68,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 112",
    "brand": "Noir Essence",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 1892,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "100ml",
    "stock": 85,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 113",
    "brand": "Velvet Oud",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 2029,
    "category": "Parfum",
    "gender": "Women",
    "size": "30ml",
    "stock": 6,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 114",
    "brand": "Royal Scent",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 2166,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 23,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 115",
    "brand": "Maison Bloom",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 2303,
    "category": "Attar",
    "gender": "Men",
    "size": "75ml",
    "stock": 40,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 116",
    "brand": "Urban Mist",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 2440,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "100ml",
    "stock": 57,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 117",
    "brand": "Golden Aroma",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 2577,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 74,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 118",
    "brand": "Elite Fragrance",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 2714,
    "category": "Parfum",
    "gender": "Men",
    "size": "50ml",
    "stock": 91,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 119",
    "brand": "Pure Essence",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 2851,
    "category": "Body Mist",
    "gender": "Women",
    "size": "75ml",
    "stock": 12,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 120",
    "brand": "Scent House",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 2988,
    "category": "Attar",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 29,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 121",
    "brand": "Aroma Luxe",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 3125,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "30ml",
    "stock": 46,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 122",
    "brand": "Noir Essence",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 3262,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "50ml",
    "stock": 63,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 123",
    "brand": "Velvet Oud",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 3399,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 80,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 124",
    "brand": "Royal Scent",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 3536,
    "category": "Body Mist",
    "gender": "Men",
    "size": "100ml",
    "stock": 97,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 125",
    "brand": "Maison Bloom",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 3673,
    "category": "Attar",
    "gender": "Women",
    "size": "30ml",
    "stock": 18,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 126",
    "brand": "Urban Mist",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 3810,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 35,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 127",
    "brand": "Golden Aroma",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 3947,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "75ml",
    "stock": 52,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 128",
    "brand": "Elite Fragrance",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 4084,
    "category": "Parfum",
    "gender": "Women",
    "size": "100ml",
    "stock": 69,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 129",
    "brand": "Pure Essence",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 4221,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 86,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 130",
    "brand": "Scent House",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 4358,
    "category": "Attar",
    "gender": "Men",
    "size": "50ml",
    "stock": 7,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 131",
    "brand": "Aroma Luxe",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 4495,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "75ml",
    "stock": 24,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 132",
    "brand": "Noir Essence",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 4632,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 41,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 133",
    "brand": "Velvet Oud",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 4769,
    "category": "Parfum",
    "gender": "Men",
    "size": "30ml",
    "stock": 58,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 134",
    "brand": "Royal Scent",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 4906,
    "category": "Body Mist",
    "gender": "Women",
    "size": "50ml",
    "stock": 75,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 135",
    "brand": "Maison Bloom",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 5043,
    "category": "Attar",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 92,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 136",
    "brand": "Urban Mist",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 5180,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "100ml",
    "stock": 13,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 137",
    "brand": "Golden Aroma",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 5317,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "30ml",
    "stock": 30,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 138",
    "brand": "Elite Fragrance",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 5454,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 47,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 139",
    "brand": "Pure Essence",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 5591,
    "category": "Body Mist",
    "gender": "Men",
    "size": "75ml",
    "stock": 64,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 140",
    "brand": "Scent House",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 5728,
    "category": "Attar",
    "gender": "Women",
    "size": "100ml",
    "stock": 81,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 141",
    "brand": "Aroma Luxe",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 5865,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 98,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 142",
    "brand": "Noir Essence",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 6002,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "50ml",
    "stock": 19,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 143",
    "brand": "Velvet Oud",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 6139,
    "category": "Parfum",
    "gender": "Women",
    "size": "75ml",
    "stock": 36,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 144",
    "brand": "Royal Scent",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 6276,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 53,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 145",
    "brand": "Maison Bloom",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 6413,
    "category": "Attar",
    "gender": "Men",
    "size": "30ml",
    "stock": 70,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 146",
    "brand": "Urban Mist",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 6550,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "50ml",
    "stock": 87,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 147",
    "brand": "Golden Aroma",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 6687,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 8,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 148",
    "brand": "Elite Fragrance",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 6824,
    "category": "Parfum",
    "gender": "Men",
    "size": "100ml",
    "stock": 25,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 149",
    "brand": "Pure Essence",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 6961,
    "category": "Body Mist",
    "gender": "Women",
    "size": "30ml",
    "stock": 42,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 150",
    "brand": "Scent House",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 7098,
    "category": "Attar",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 59,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 151",
    "brand": "Aroma Luxe",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 7235,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "75ml",
    "stock": 76,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 152",
    "brand": "Noir Essence",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 7372,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "100ml",
    "stock": 93,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 153",
    "brand": "Velvet Oud",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 7509,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 14,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 154",
    "brand": "Royal Scent",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 7646,
    "category": "Body Mist",
    "gender": "Men",
    "size": "50ml",
    "stock": 31,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 155",
    "brand": "Maison Bloom",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 7783,
    "category": "Attar",
    "gender": "Women",
    "size": "75ml",
    "stock": 48,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 156",
    "brand": "Urban Mist",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 7920,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 65,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 157",
    "brand": "Golden Aroma",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 906,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "30ml",
    "stock": 82,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 158",
    "brand": "Elite Fragrance",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 1043,
    "category": "Parfum",
    "gender": "Women",
    "size": "50ml",
    "stock": 99,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 159",
    "brand": "Pure Essence",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 1180,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 20,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 160",
    "brand": "Scent House",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 1317,
    "category": "Attar",
    "gender": "Men",
    "size": "100ml",
    "stock": 37,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 161",
    "brand": "Aroma Luxe",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 1454,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "30ml",
    "stock": 54,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 162",
    "brand": "Noir Essence",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 1591,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 71,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 163",
    "brand": "Velvet Oud",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 1728,
    "category": "Parfum",
    "gender": "Men",
    "size": "75ml",
    "stock": 88,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 164",
    "brand": "Royal Scent",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 1865,
    "category": "Body Mist",
    "gender": "Women",
    "size": "100ml",
    "stock": 9,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 165",
    "brand": "Maison Bloom",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 2002,
    "category": "Attar",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 26,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 166",
    "brand": "Urban Mist",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 2139,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "50ml",
    "stock": 43,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 167",
    "brand": "Golden Aroma",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 2276,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "75ml",
    "stock": 60,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 168",
    "brand": "Elite Fragrance",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 2413,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 77,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 169",
    "brand": "Pure Essence",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 2550,
    "category": "Body Mist",
    "gender": "Men",
    "size": "30ml",
    "stock": 94,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 170",
    "brand": "Scent House",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 2687,
    "category": "Attar",
    "gender": "Women",
    "size": "50ml",
    "stock": 15,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 171",
    "brand": "Aroma Luxe",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 2824,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 32,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 172",
    "brand": "Noir Essence",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 2961,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "100ml",
    "stock": 49,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 173",
    "brand": "Velvet Oud",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 3098,
    "category": "Parfum",
    "gender": "Women",
    "size": "30ml",
    "stock": 66,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 174",
    "brand": "Royal Scent",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 3235,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 83,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 175",
    "brand": "Maison Bloom",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 3372,
    "category": "Attar",
    "gender": "Men",
    "size": "75ml",
    "stock": 100,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 176",
    "brand": "Urban Mist",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 3509,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "100ml",
    "stock": 21,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 177",
    "brand": "Golden Aroma",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 3646,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 38,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 178",
    "brand": "Elite Fragrance",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 3783,
    "category": "Parfum",
    "gender": "Men",
    "size": "50ml",
    "stock": 55,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 179",
    "brand": "Pure Essence",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 3920,
    "category": "Body Mist",
    "gender": "Women",
    "size": "75ml",
    "stock": 72,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 180",
    "brand": "Scent House",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 4057,
    "category": "Attar",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 89,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 181",
    "brand": "Aroma Luxe",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 4194,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "30ml",
    "stock": 10,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 182",
    "brand": "Noir Essence",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 4331,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "50ml",
    "stock": 27,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 183",
    "brand": "Velvet Oud",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 4468,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 44,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 184",
    "brand": "Royal Scent",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 4605,
    "category": "Body Mist",
    "gender": "Men",
    "size": "100ml",
    "stock": 61,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 185",
    "brand": "Maison Bloom",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 4742,
    "category": "Attar",
    "gender": "Women",
    "size": "30ml",
    "stock": 78,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 186",
    "brand": "Urban Mist",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 4879,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 95,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 187",
    "brand": "Golden Aroma",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 5016,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "75ml",
    "stock": 16,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 188",
    "brand": "Elite Fragrance",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 5153,
    "category": "Parfum",
    "gender": "Women",
    "size": "100ml",
    "stock": 33,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 189",
    "brand": "Pure Essence",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 5290,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 50,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 190",
    "brand": "Scent House",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 5427,
    "category": "Attar",
    "gender": "Men",
    "size": "50ml",
    "stock": 67,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 191",
    "brand": "Aroma Luxe",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 5564,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "75ml",
    "stock": 84,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 192",
    "brand": "Noir Essence",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 5701,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 5,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 193",
    "brand": "Velvet Oud",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 5838,
    "category": "Parfum",
    "gender": "Men",
    "size": "30ml",
    "stock": 22,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 194",
    "brand": "Royal Scent",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 5975,
    "category": "Body Mist",
    "gender": "Women",
    "size": "50ml",
    "stock": 39,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 195",
    "brand": "Maison Bloom",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 6112,
    "category": "Attar",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 56,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 196",
    "brand": "Urban Mist",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 6249,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "100ml",
    "stock": 73,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 197",
    "brand": "Golden Aroma",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 6386,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "30ml",
    "stock": 90,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 198",
    "brand": "Elite Fragrance",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 6523,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 11,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 199",
    "brand": "Pure Essence",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 6660,
    "category": "Body Mist",
    "gender": "Men",
    "size": "75ml",
    "stock": 28,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 200",
    "brand": "Scent House",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 6797,
    "category": "Attar",
    "gender": "Women",
    "size": "100ml",
    "stock": 45,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 201",
    "brand": "Aroma Luxe",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 6934,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 62,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 202",
    "brand": "Noir Essence",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 7071,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "50ml",
    "stock": 79,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 203",
    "brand": "Velvet Oud",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 7208,
    "category": "Parfum",
    "gender": "Women",
    "size": "75ml",
    "stock": 96,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 204",
    "brand": "Royal Scent",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 7345,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 17,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 205",
    "brand": "Maison Bloom",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 7482,
    "category": "Attar",
    "gender": "Men",
    "size": "30ml",
    "stock": 34,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 206",
    "brand": "Urban Mist",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 7619,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "50ml",
    "stock": 51,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 207",
    "brand": "Golden Aroma",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 7756,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 68,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 208",
    "brand": "Elite Fragrance",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 7893,
    "category": "Parfum",
    "gender": "Men",
    "size": "100ml",
    "stock": 85,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 209",
    "brand": "Pure Essence",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 879,
    "category": "Body Mist",
    "gender": "Women",
    "size": "30ml",
    "stock": 6,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 210",
    "brand": "Scent House",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 1016,
    "category": "Attar",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 23,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 211",
    "brand": "Aroma Luxe",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 1153,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "75ml",
    "stock": 40,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 212",
    "brand": "Noir Essence",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 1290,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "100ml",
    "stock": 57,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 213",
    "brand": "Velvet Oud",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 1427,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 74,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 214",
    "brand": "Royal Scent",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 1564,
    "category": "Body Mist",
    "gender": "Men",
    "size": "50ml",
    "stock": 91,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 215",
    "brand": "Maison Bloom",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 1701,
    "category": "Attar",
    "gender": "Women",
    "size": "75ml",
    "stock": 12,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 216",
    "brand": "Urban Mist",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 1838,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 29,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 217",
    "brand": "Golden Aroma",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 1975,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "30ml",
    "stock": 46,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 218",
    "brand": "Elite Fragrance",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 2112,
    "category": "Parfum",
    "gender": "Women",
    "size": "50ml",
    "stock": 63,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 219",
    "brand": "Pure Essence",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 2249,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 80,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 220",
    "brand": "Scent House",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 2386,
    "category": "Attar",
    "gender": "Men",
    "size": "100ml",
    "stock": 97,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 221",
    "brand": "Aroma Luxe",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 2523,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "30ml",
    "stock": 18,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 222",
    "brand": "Noir Essence",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 2660,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 35,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 223",
    "brand": "Velvet Oud",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 2797,
    "category": "Parfum",
    "gender": "Men",
    "size": "75ml",
    "stock": 52,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 224",
    "brand": "Royal Scent",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 2934,
    "category": "Body Mist",
    "gender": "Women",
    "size": "100ml",
    "stock": 69,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 225",
    "brand": "Maison Bloom",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 3071,
    "category": "Attar",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 86,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 226",
    "brand": "Urban Mist",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 3208,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "50ml",
    "stock": 7,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 227",
    "brand": "Golden Aroma",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 3345,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "75ml",
    "stock": 24,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 228",
    "brand": "Elite Fragrance",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 3482,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 41,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 229",
    "brand": "Pure Essence",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 3619,
    "category": "Body Mist",
    "gender": "Men",
    "size": "30ml",
    "stock": 58,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 230",
    "brand": "Scent House",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 3756,
    "category": "Attar",
    "gender": "Women",
    "size": "50ml",
    "stock": 75,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 231",
    "brand": "Aroma Luxe",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 3893,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 92,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 232",
    "brand": "Noir Essence",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 4030,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "100ml",
    "stock": 13,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 233",
    "brand": "Velvet Oud",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 4167,
    "category": "Parfum",
    "gender": "Women",
    "size": "30ml",
    "stock": 30,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 234",
    "brand": "Royal Scent",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 4304,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 47,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 235",
    "brand": "Maison Bloom",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 4441,
    "category": "Attar",
    "gender": "Men",
    "size": "75ml",
    "stock": 64,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 236",
    "brand": "Urban Mist",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 4578,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "100ml",
    "stock": 81,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 237",
    "brand": "Golden Aroma",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 4715,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 98,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 238",
    "brand": "Elite Fragrance",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 4852,
    "category": "Parfum",
    "gender": "Men",
    "size": "50ml",
    "stock": 19,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 239",
    "brand": "Pure Essence",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 4989,
    "category": "Body Mist",
    "gender": "Women",
    "size": "75ml",
    "stock": 36,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 240",
    "brand": "Scent House",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 5126,
    "category": "Attar",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 53,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 241",
    "brand": "Aroma Luxe",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 5263,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "30ml",
    "stock": 70,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 242",
    "brand": "Noir Essence",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 5400,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "50ml",
    "stock": 87,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 243",
    "brand": "Velvet Oud",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 5537,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 8,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 244",
    "brand": "Royal Scent",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 5674,
    "category": "Body Mist",
    "gender": "Men",
    "size": "100ml",
    "stock": 25,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 245",
    "brand": "Maison Bloom",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 5811,
    "category": "Attar",
    "gender": "Women",
    "size": "30ml",
    "stock": 42,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 246",
    "brand": "Urban Mist",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 5948,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 59,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 247",
    "brand": "Golden Aroma",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 6085,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "75ml",
    "stock": 76,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 248",
    "brand": "Elite Fragrance",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 6222,
    "category": "Parfum",
    "gender": "Women",
    "size": "100ml",
    "stock": 93,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 249",
    "brand": "Pure Essence",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 6359,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 14,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 250",
    "brand": "Scent House",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 6496,
    "category": "Attar",
    "gender": "Men",
    "size": "50ml",
    "stock": 31,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 251",
    "brand": "Aroma Luxe",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 6633,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "75ml",
    "stock": 48,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 252",
    "brand": "Noir Essence",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 6770,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 65,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 253",
    "brand": "Velvet Oud",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 6907,
    "category": "Parfum",
    "gender": "Men",
    "size": "30ml",
    "stock": 82,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 254",
    "brand": "Royal Scent",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 7044,
    "category": "Body Mist",
    "gender": "Women",
    "size": "50ml",
    "stock": 99,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 255",
    "brand": "Maison Bloom",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 7181,
    "category": "Attar",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 20,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 256",
    "brand": "Urban Mist",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 7318,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "100ml",
    "stock": 37,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 257",
    "brand": "Golden Aroma",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 7455,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "30ml",
    "stock": 54,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 258",
    "brand": "Elite Fragrance",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 7592,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 71,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 259",
    "brand": "Pure Essence",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 7729,
    "category": "Body Mist",
    "gender": "Men",
    "size": "75ml",
    "stock": 88,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 260",
    "brand": "Scent House",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 7866,
    "category": "Attar",
    "gender": "Women",
    "size": "100ml",
    "stock": 9,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 261",
    "brand": "Aroma Luxe",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 852,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 26,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 262",
    "brand": "Noir Essence",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 989,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "50ml",
    "stock": 43,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 263",
    "brand": "Velvet Oud",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 1126,
    "category": "Parfum",
    "gender": "Women",
    "size": "75ml",
    "stock": 60,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 264",
    "brand": "Royal Scent",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 1263,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 77,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 265",
    "brand": "Maison Bloom",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 1400,
    "category": "Attar",
    "gender": "Men",
    "size": "30ml",
    "stock": 94,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 266",
    "brand": "Urban Mist",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 1537,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "50ml",
    "stock": 15,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 267",
    "brand": "Golden Aroma",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 1674,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 32,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 268",
    "brand": "Elite Fragrance",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 1811,
    "category": "Parfum",
    "gender": "Men",
    "size": "100ml",
    "stock": 49,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 269",
    "brand": "Pure Essence",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 1948,
    "category": "Body Mist",
    "gender": "Women",
    "size": "30ml",
    "stock": 66,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 270",
    "brand": "Scent House",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 2085,
    "category": "Attar",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 83,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 271",
    "brand": "Aroma Luxe",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 2222,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "75ml",
    "stock": 100,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 272",
    "brand": "Noir Essence",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 2359,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "100ml",
    "stock": 21,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 273",
    "brand": "Velvet Oud",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 2496,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 38,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 274",
    "brand": "Royal Scent",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 2633,
    "category": "Body Mist",
    "gender": "Men",
    "size": "50ml",
    "stock": 55,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 275",
    "brand": "Maison Bloom",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 2770,
    "category": "Attar",
    "gender": "Women",
    "size": "75ml",
    "stock": 72,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 276",
    "brand": "Urban Mist",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 2907,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 89,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 277",
    "brand": "Golden Aroma",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 3044,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "30ml",
    "stock": 10,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 278",
    "brand": "Elite Fragrance",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 3181,
    "category": "Parfum",
    "gender": "Women",
    "size": "50ml",
    "stock": 27,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 279",
    "brand": "Pure Essence",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 3318,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 44,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 280",
    "brand": "Scent House",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 3455,
    "category": "Attar",
    "gender": "Men",
    "size": "100ml",
    "stock": 61,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 281",
    "brand": "Aroma Luxe",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 3592,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "30ml",
    "stock": 78,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 282",
    "brand": "Noir Essence",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 3729,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 95,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 283",
    "brand": "Velvet Oud",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 3866,
    "category": "Parfum",
    "gender": "Men",
    "size": "75ml",
    "stock": 16,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 284",
    "brand": "Royal Scent",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 4003,
    "category": "Body Mist",
    "gender": "Women",
    "size": "100ml",
    "stock": 33,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 285",
    "brand": "Maison Bloom",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 4140,
    "category": "Attar",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 50,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 286",
    "brand": "Urban Mist",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 4277,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "50ml",
    "stock": 67,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 287",
    "brand": "Golden Aroma",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 4414,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "75ml",
    "stock": 84,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 288",
    "brand": "Elite Fragrance",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 4551,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 5,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 289",
    "brand": "Pure Essence",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 4688,
    "category": "Body Mist",
    "gender": "Men",
    "size": "30ml",
    "stock": 22,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 290",
    "brand": "Scent House",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 4825,
    "category": "Attar",
    "gender": "Women",
    "size": "50ml",
    "stock": 39,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 291",
    "brand": "Aroma Luxe",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 4962,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 56,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 292",
    "brand": "Noir Essence",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 5099,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "100ml",
    "stock": 73,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 293",
    "brand": "Velvet Oud",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 5236,
    "category": "Parfum",
    "gender": "Women",
    "size": "30ml",
    "stock": 90,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 294",
    "brand": "Royal Scent",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 5373,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 11,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 295",
    "brand": "Maison Bloom",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 5510,
    "category": "Attar",
    "gender": "Men",
    "size": "75ml",
    "stock": 28,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 296",
    "brand": "Urban Mist",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 5647,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "100ml",
    "stock": 45,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 297",
    "brand": "Golden Aroma",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 5784,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 62,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 298",
    "brand": "Elite Fragrance",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 5921,
    "category": "Parfum",
    "gender": "Men",
    "size": "50ml",
    "stock": 79,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 299",
    "brand": "Pure Essence",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 6058,
    "category": "Body Mist",
    "gender": "Women",
    "size": "75ml",
    "stock": 96,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 300",
    "brand": "Scent House",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 6195,
    "category": "Attar",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 17,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 301",
    "brand": "Aroma Luxe",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 6332,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "30ml",
    "stock": 34,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 302",
    "brand": "Noir Essence",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 6469,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "50ml",
    "stock": 51,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 303",
    "brand": "Velvet Oud",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 6606,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 68,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 304",
    "brand": "Royal Scent",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 6743,
    "category": "Body Mist",
    "gender": "Men",
    "size": "100ml",
    "stock": 85,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 305",
    "brand": "Maison Bloom",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 6880,
    "category": "Attar",
    "gender": "Women",
    "size": "30ml",
    "stock": 6,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 306",
    "brand": "Urban Mist",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 7017,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 23,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 307",
    "brand": "Golden Aroma",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 7154,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "75ml",
    "stock": 40,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 308",
    "brand": "Elite Fragrance",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 7291,
    "category": "Parfum",
    "gender": "Women",
    "size": "100ml",
    "stock": 57,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 309",
    "brand": "Pure Essence",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 7428,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 74,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 310",
    "brand": "Scent House",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 7565,
    "category": "Attar",
    "gender": "Men",
    "size": "50ml",
    "stock": 91,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 311",
    "brand": "Aroma Luxe",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 7702,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "75ml",
    "stock": 12,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 312",
    "brand": "Noir Essence",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 7839,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 29,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 313",
    "brand": "Velvet Oud",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 7976,
    "category": "Parfum",
    "gender": "Men",
    "size": "30ml",
    "stock": 46,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 314",
    "brand": "Royal Scent",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 962,
    "category": "Body Mist",
    "gender": "Women",
    "size": "50ml",
    "stock": 63,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 315",
    "brand": "Maison Bloom",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 1099,
    "category": "Attar",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 80,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 316",
    "brand": "Urban Mist",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 1236,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "100ml",
    "stock": 97,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 317",
    "brand": "Golden Aroma",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 1373,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "30ml",
    "stock": 18,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 318",
    "brand": "Elite Fragrance",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 1510,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 35,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 319",
    "brand": "Pure Essence",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 1647,
    "category": "Body Mist",
    "gender": "Men",
    "size": "75ml",
    "stock": 52,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 320",
    "brand": "Scent House",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 1784,
    "category": "Attar",
    "gender": "Women",
    "size": "100ml",
    "stock": 69,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 321",
    "brand": "Aroma Luxe",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 1921,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 86,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 322",
    "brand": "Noir Essence",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 2058,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "50ml",
    "stock": 7,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 323",
    "brand": "Velvet Oud",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 2195,
    "category": "Parfum",
    "gender": "Women",
    "size": "75ml",
    "stock": 24,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 324",
    "brand": "Royal Scent",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 2332,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 41,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 325",
    "brand": "Maison Bloom",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 2469,
    "category": "Attar",
    "gender": "Men",
    "size": "30ml",
    "stock": 58,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 326",
    "brand": "Urban Mist",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 2606,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "50ml",
    "stock": 75,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 327",
    "brand": "Golden Aroma",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 2743,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 92,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 328",
    "brand": "Elite Fragrance",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 2880,
    "category": "Parfum",
    "gender": "Men",
    "size": "100ml",
    "stock": 13,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 329",
    "brand": "Pure Essence",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 3017,
    "category": "Body Mist",
    "gender": "Women",
    "size": "30ml",
    "stock": 30,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 330",
    "brand": "Scent House",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 3154,
    "category": "Attar",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 47,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 331",
    "brand": "Aroma Luxe",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 3291,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "75ml",
    "stock": 64,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 332",
    "brand": "Noir Essence",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 3428,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "100ml",
    "stock": 81,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 333",
    "brand": "Velvet Oud",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 3565,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 98,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 334",
    "brand": "Royal Scent",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 3702,
    "category": "Body Mist",
    "gender": "Men",
    "size": "50ml",
    "stock": 19,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 335",
    "brand": "Maison Bloom",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 3839,
    "category": "Attar",
    "gender": "Women",
    "size": "75ml",
    "stock": 36,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 336",
    "brand": "Urban Mist",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 3976,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 53,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 337",
    "brand": "Golden Aroma",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 4113,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "30ml",
    "stock": 70,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 338",
    "brand": "Elite Fragrance",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 4250,
    "category": "Parfum",
    "gender": "Women",
    "size": "50ml",
    "stock": 87,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 339",
    "brand": "Pure Essence",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 4387,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 8,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 340",
    "brand": "Scent House",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 4524,
    "category": "Attar",
    "gender": "Men",
    "size": "100ml",
    "stock": 25,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 341",
    "brand": "Aroma Luxe",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 4661,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "30ml",
    "stock": 42,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 342",
    "brand": "Noir Essence",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 4798,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 59,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 343",
    "brand": "Velvet Oud",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 4935,
    "category": "Parfum",
    "gender": "Men",
    "size": "75ml",
    "stock": 76,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 344",
    "brand": "Royal Scent",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 5072,
    "category": "Body Mist",
    "gender": "Women",
    "size": "100ml",
    "stock": 93,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 345",
    "brand": "Maison Bloom",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 5209,
    "category": "Attar",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 14,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 346",
    "brand": "Urban Mist",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 5346,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "50ml",
    "stock": 31,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 347",
    "brand": "Golden Aroma",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 5483,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "75ml",
    "stock": 48,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 348",
    "brand": "Elite Fragrance",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 5620,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 65,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 349",
    "brand": "Pure Essence",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 5757,
    "category": "Body Mist",
    "gender": "Men",
    "size": "30ml",
    "stock": 82,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 350",
    "brand": "Scent House",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 5894,
    "category": "Attar",
    "gender": "Women",
    "size": "50ml",
    "stock": 99,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 351",
    "brand": "Aroma Luxe",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 6031,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 20,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 352",
    "brand": "Noir Essence",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 6168,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "100ml",
    "stock": 37,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 353",
    "brand": "Velvet Oud",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 6305,
    "category": "Parfum",
    "gender": "Women",
    "size": "30ml",
    "stock": 54,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 354",
    "brand": "Royal Scent",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 6442,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 71,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 355",
    "brand": "Maison Bloom",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 6579,
    "category": "Attar",
    "gender": "Men",
    "size": "75ml",
    "stock": 88,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 356",
    "brand": "Urban Mist",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 6716,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "100ml",
    "stock": 9,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 357",
    "brand": "Golden Aroma",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 6853,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 26,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 358",
    "brand": "Elite Fragrance",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 6990,
    "category": "Parfum",
    "gender": "Men",
    "size": "50ml",
    "stock": 43,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 359",
    "brand": "Pure Essence",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 7127,
    "category": "Body Mist",
    "gender": "Women",
    "size": "75ml",
    "stock": 60,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 360",
    "brand": "Scent House",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 7264,
    "category": "Attar",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 77,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 361",
    "brand": "Aroma Luxe",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 7401,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "30ml",
    "stock": 94,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 362",
    "brand": "Noir Essence",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 7538,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "50ml",
    "stock": 15,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 363",
    "brand": "Velvet Oud",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 7675,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 32,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 364",
    "brand": "Royal Scent",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 7812,
    "category": "Body Mist",
    "gender": "Men",
    "size": "100ml",
    "stock": 49,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 365",
    "brand": "Maison Bloom",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 7949,
    "category": "Attar",
    "gender": "Women",
    "size": "30ml",
    "stock": 66,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 366",
    "brand": "Urban Mist",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 935,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 83,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 367",
    "brand": "Golden Aroma",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 1072,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "75ml",
    "stock": 100,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 368",
    "brand": "Elite Fragrance",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 1209,
    "category": "Parfum",
    "gender": "Women",
    "size": "100ml",
    "stock": 21,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 369",
    "brand": "Pure Essence",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 1346,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 38,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 370",
    "brand": "Scent House",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 1483,
    "category": "Attar",
    "gender": "Men",
    "size": "50ml",
    "stock": 55,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 371",
    "brand": "Aroma Luxe",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 1620,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "75ml",
    "stock": 72,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 372",
    "brand": "Noir Essence",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 1757,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 89,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 373",
    "brand": "Velvet Oud",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 1894,
    "category": "Parfum",
    "gender": "Men",
    "size": "30ml",
    "stock": 10,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 374",
    "brand": "Royal Scent",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 2031,
    "category": "Body Mist",
    "gender": "Women",
    "size": "50ml",
    "stock": 27,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 375",
    "brand": "Maison Bloom",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 2168,
    "category": "Attar",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 44,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 376",
    "brand": "Urban Mist",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 2305,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "100ml",
    "stock": 61,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 377",
    "brand": "Golden Aroma",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 2442,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "30ml",
    "stock": 78,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 378",
    "brand": "Elite Fragrance",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 2579,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 95,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 379",
    "brand": "Pure Essence",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 2716,
    "category": "Body Mist",
    "gender": "Men",
    "size": "75ml",
    "stock": 16,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 380",
    "brand": "Scent House",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 2853,
    "category": "Attar",
    "gender": "Women",
    "size": "100ml",
    "stock": 33,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 381",
    "brand": "Aroma Luxe",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 2990,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 50,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 382",
    "brand": "Noir Essence",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 3127,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "50ml",
    "stock": 67,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 383",
    "brand": "Velvet Oud",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 3264,
    "category": "Parfum",
    "gender": "Women",
    "size": "75ml",
    "stock": 84,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 384",
    "brand": "Royal Scent",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 3401,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 5,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 385",
    "brand": "Maison Bloom",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 3538,
    "category": "Attar",
    "gender": "Men",
    "size": "30ml",
    "stock": 22,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 386",
    "brand": "Urban Mist",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 3675,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "50ml",
    "stock": 39,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 387",
    "brand": "Golden Aroma",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 3812,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 56,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 388",
    "brand": "Elite Fragrance",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 3949,
    "category": "Parfum",
    "gender": "Men",
    "size": "100ml",
    "stock": 73,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 389",
    "brand": "Pure Essence",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 4086,
    "category": "Body Mist",
    "gender": "Women",
    "size": "30ml",
    "stock": 90,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 390",
    "brand": "Scent House",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 4223,
    "category": "Attar",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 11,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 391",
    "brand": "Aroma Luxe",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 4360,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "75ml",
    "stock": 28,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 392",
    "brand": "Noir Essence",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 4497,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "100ml",
    "stock": 45,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 393",
    "brand": "Velvet Oud",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 4634,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 62,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 394",
    "brand": "Royal Scent",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 4771,
    "category": "Body Mist",
    "gender": "Men",
    "size": "50ml",
    "stock": 79,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 395",
    "brand": "Maison Bloom",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 4908,
    "category": "Attar",
    "gender": "Women",
    "size": "75ml",
    "stock": 96,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 396",
    "brand": "Urban Mist",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 5045,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 17,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 397",
    "brand": "Golden Aroma",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 5182,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "30ml",
    "stock": 34,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 398",
    "brand": "Elite Fragrance",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 5319,
    "category": "Parfum",
    "gender": "Women",
    "size": "50ml",
    "stock": 51,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 399",
    "brand": "Pure Essence",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 5456,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 68,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 400",
    "brand": "Scent House",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 5593,
    "category": "Attar",
    "gender": "Men",
    "size": "100ml",
    "stock": 85,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 401",
    "brand": "Aroma Luxe",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 5730,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "30ml",
    "stock": 6,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 402",
    "brand": "Noir Essence",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 5867,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 23,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 403",
    "brand": "Velvet Oud",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 6004,
    "category": "Parfum",
    "gender": "Men",
    "size": "75ml",
    "stock": 40,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 404",
    "brand": "Royal Scent",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 6141,
    "category": "Body Mist",
    "gender": "Women",
    "size": "100ml",
    "stock": 57,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 405",
    "brand": "Maison Bloom",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 6278,
    "category": "Attar",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 74,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 406",
    "brand": "Urban Mist",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 6415,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "50ml",
    "stock": 91,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 407",
    "brand": "Golden Aroma",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 6552,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "75ml",
    "stock": 12,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 408",
    "brand": "Elite Fragrance",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 6689,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 29,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 409",
    "brand": "Pure Essence",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 6826,
    "category": "Body Mist",
    "gender": "Men",
    "size": "30ml",
    "stock": 46,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 410",
    "brand": "Scent House",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 6963,
    "category": "Attar",
    "gender": "Women",
    "size": "50ml",
    "stock": 63,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 411",
    "brand": "Aroma Luxe",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 7100,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 80,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 412",
    "brand": "Noir Essence",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 7237,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "100ml",
    "stock": 97,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 413",
    "brand": "Velvet Oud",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 7374,
    "category": "Parfum",
    "gender": "Women",
    "size": "30ml",
    "stock": 18,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 414",
    "brand": "Royal Scent",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 7511,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 35,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 415",
    "brand": "Maison Bloom",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 7648,
    "category": "Attar",
    "gender": "Men",
    "size": "75ml",
    "stock": 52,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 416",
    "brand": "Urban Mist",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 7785,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "100ml",
    "stock": 69,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 417",
    "brand": "Golden Aroma",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 7922,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 86,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 418",
    "brand": "Elite Fragrance",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 908,
    "category": "Parfum",
    "gender": "Men",
    "size": "50ml",
    "stock": 7,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 419",
    "brand": "Pure Essence",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 1045,
    "category": "Body Mist",
    "gender": "Women",
    "size": "75ml",
    "stock": 24,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 420",
    "brand": "Scent House",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 1182,
    "category": "Attar",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 41,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 421",
    "brand": "Aroma Luxe",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 1319,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "30ml",
    "stock": 58,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 422",
    "brand": "Noir Essence",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 1456,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "50ml",
    "stock": 75,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 423",
    "brand": "Velvet Oud",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 1593,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 92,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 424",
    "brand": "Royal Scent",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 1730,
    "category": "Body Mist",
    "gender": "Men",
    "size": "100ml",
    "stock": 13,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 425",
    "brand": "Maison Bloom",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 1867,
    "category": "Attar",
    "gender": "Women",
    "size": "30ml",
    "stock": 30,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 426",
    "brand": "Urban Mist",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 2004,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 47,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 427",
    "brand": "Golden Aroma",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 2141,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "75ml",
    "stock": 64,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 428",
    "brand": "Elite Fragrance",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 2278,
    "category": "Parfum",
    "gender": "Women",
    "size": "100ml",
    "stock": 81,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 429",
    "brand": "Pure Essence",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 2415,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 98,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 430",
    "brand": "Scent House",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 2552,
    "category": "Attar",
    "gender": "Men",
    "size": "50ml",
    "stock": 19,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 431",
    "brand": "Aroma Luxe",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 2689,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "75ml",
    "stock": 36,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 432",
    "brand": "Noir Essence",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 2826,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 53,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 433",
    "brand": "Velvet Oud",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 2963,
    "category": "Parfum",
    "gender": "Men",
    "size": "30ml",
    "stock": 70,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 434",
    "brand": "Royal Scent",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 3100,
    "category": "Body Mist",
    "gender": "Women",
    "size": "50ml",
    "stock": 87,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 435",
    "brand": "Maison Bloom",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 3237,
    "category": "Attar",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 8,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 436",
    "brand": "Urban Mist",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 3374,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "100ml",
    "stock": 25,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 437",
    "brand": "Golden Aroma",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 3511,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "30ml",
    "stock": 42,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 438",
    "brand": "Elite Fragrance",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 3648,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 59,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 439",
    "brand": "Pure Essence",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 3785,
    "category": "Body Mist",
    "gender": "Men",
    "size": "75ml",
    "stock": 76,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 440",
    "brand": "Scent House",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 3922,
    "category": "Attar",
    "gender": "Women",
    "size": "100ml",
    "stock": 93,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 441",
    "brand": "Aroma Luxe",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 4059,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 14,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 442",
    "brand": "Noir Essence",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 4196,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "50ml",
    "stock": 31,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 443",
    "brand": "Velvet Oud",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 4333,
    "category": "Parfum",
    "gender": "Women",
    "size": "75ml",
    "stock": 48,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 444",
    "brand": "Royal Scent",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 4470,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 65,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 445",
    "brand": "Maison Bloom",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 4607,
    "category": "Attar",
    "gender": "Men",
    "size": "30ml",
    "stock": 82,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 446",
    "brand": "Urban Mist",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 4744,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "50ml",
    "stock": 99,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 447",
    "brand": "Golden Aroma",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 4881,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 20,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 448",
    "brand": "Elite Fragrance",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 5018,
    "category": "Parfum",
    "gender": "Men",
    "size": "100ml",
    "stock": 37,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 449",
    "brand": "Pure Essence",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 5155,
    "category": "Body Mist",
    "gender": "Women",
    "size": "30ml",
    "stock": 54,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 450",
    "brand": "Scent House",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 5292,
    "category": "Attar",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 71,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 451",
    "brand": "Aroma Luxe",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 5429,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "75ml",
    "stock": 88,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 452",
    "brand": "Noir Essence",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 5566,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "100ml",
    "stock": 9,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 453",
    "brand": "Velvet Oud",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 5703,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 26,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 454",
    "brand": "Royal Scent",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 5840,
    "category": "Body Mist",
    "gender": "Men",
    "size": "50ml",
    "stock": 43,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 455",
    "brand": "Maison Bloom",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 5977,
    "category": "Attar",
    "gender": "Women",
    "size": "75ml",
    "stock": 60,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 456",
    "brand": "Urban Mist",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 6114,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 77,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 457",
    "brand": "Golden Aroma",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 6251,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "30ml",
    "stock": 94,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 458",
    "brand": "Elite Fragrance",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 6388,
    "category": "Parfum",
    "gender": "Women",
    "size": "50ml",
    "stock": 15,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 459",
    "brand": "Pure Essence",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 6525,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 32,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 460",
    "brand": "Scent House",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 6662,
    "category": "Attar",
    "gender": "Men",
    "size": "100ml",
    "stock": 49,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 461",
    "brand": "Aroma Luxe",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 6799,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "30ml",
    "stock": 66,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 462",
    "brand": "Noir Essence",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 6936,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 83,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 463",
    "brand": "Velvet Oud",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 7073,
    "category": "Parfum",
    "gender": "Men",
    "size": "75ml",
    "stock": 100,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 464",
    "brand": "Royal Scent",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 7210,
    "category": "Body Mist",
    "gender": "Women",
    "size": "100ml",
    "stock": 21,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 465",
    "brand": "Maison Bloom",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 7347,
    "category": "Attar",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 38,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 466",
    "brand": "Urban Mist",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 7484,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "50ml",
    "stock": 55,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 467",
    "brand": "Golden Aroma",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 7621,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "75ml",
    "stock": 72,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 468",
    "brand": "Elite Fragrance",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 7758,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 89,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 469",
    "brand": "Pure Essence",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 7895,
    "category": "Body Mist",
    "gender": "Men",
    "size": "30ml",
    "stock": 10,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 470",
    "brand": "Scent House",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 881,
    "category": "Attar",
    "gender": "Women",
    "size": "50ml",
    "stock": 27,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 471",
    "brand": "Aroma Luxe",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 1018,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 44,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 472",
    "brand": "Noir Essence",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 1155,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "100ml",
    "stock": 61,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 473",
    "brand": "Velvet Oud",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 1292,
    "category": "Parfum",
    "gender": "Women",
    "size": "30ml",
    "stock": 78,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 474",
    "brand": "Royal Scent",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 1429,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 95,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 475",
    "brand": "Maison Bloom",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 1566,
    "category": "Attar",
    "gender": "Men",
    "size": "75ml",
    "stock": 16,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 476",
    "brand": "Urban Mist",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 1703,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "100ml",
    "stock": 33,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 477",
    "brand": "Golden Aroma",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 1840,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 50,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 478",
    "brand": "Elite Fragrance",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 1977,
    "category": "Parfum",
    "gender": "Men",
    "size": "50ml",
    "stock": 67,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 479",
    "brand": "Pure Essence",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 2114,
    "category": "Body Mist",
    "gender": "Women",
    "size": "75ml",
    "stock": 84,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 480",
    "brand": "Scent House",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 2251,
    "category": "Attar",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 5,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 481",
    "brand": "Aroma Luxe",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 2388,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "30ml",
    "stock": 22,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 482",
    "brand": "Noir Essence",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 2525,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "50ml",
    "stock": 39,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 483",
    "brand": "Velvet Oud",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 2662,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 56,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 484",
    "brand": "Royal Scent",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 2799,
    "category": "Body Mist",
    "gender": "Men",
    "size": "100ml",
    "stock": 73,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 485",
    "brand": "Maison Bloom",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 2936,
    "category": "Attar",
    "gender": "Women",
    "size": "30ml",
    "stock": 90,
    "rating": 3.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 486",
    "brand": "Urban Mist",
    "description": "A premium unisex eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 3073,
    "category": "Eau de Parfum",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 11,
    "rating": 4.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 487",
    "brand": "Golden Aroma",
    "description": "A premium men eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 3210,
    "category": "Eau de Toilette",
    "gender": "Men",
    "size": "75ml",
    "stock": 28,
    "rating": 3.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 488",
    "brand": "Elite Fragrance",
    "description": "A premium women parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 3347,
    "category": "Parfum",
    "gender": "Women",
    "size": "100ml",
    "stock": 45,
    "rating": 4.3,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 489",
    "brand": "Pure Essence",
    "description": "A premium unisex body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 3484,
    "category": "Body Mist",
    "gender": "Unisex",
    "size": "30ml",
    "stock": 62,
    "rating": 5.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 490",
    "brand": "Scent House",
    "description": "A premium men attar with a fresh, elegant and long-lasting fragrance.",
    "price": 3621,
    "category": "Attar",
    "gender": "Men",
    "size": "50ml",
    "stock": 79,
    "rating": 4.1,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Aroma Luxe Signature Fragrance 491",
    "brand": "Aroma Luxe",
    "description": "A premium women eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 3758,
    "category": "Eau de Parfum",
    "gender": "Women",
    "size": "75ml",
    "stock": 96,
    "rating": 4.8,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Noir Essence Signature Fragrance 492",
    "brand": "Noir Essence",
    "description": "A premium unisex eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 3895,
    "category": "Eau de Toilette",
    "gender": "Unisex",
    "size": "100ml",
    "stock": 17,
    "rating": 3.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Velvet Oud Signature Fragrance 493",
    "brand": "Velvet Oud",
    "description": "A premium men parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 4032,
    "category": "Parfum",
    "gender": "Men",
    "size": "30ml",
    "stock": 34,
    "rating": 4.6,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Royal Scent Signature Fragrance 494",
    "brand": "Royal Scent",
    "description": "A premium women body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 4169,
    "category": "Body Mist",
    "gender": "Women",
    "size": "50ml",
    "stock": 51,
    "rating": 3.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Maison Bloom Signature Fragrance 495",
    "brand": "Maison Bloom",
    "description": "A premium unisex attar with a fresh, elegant and long-lasting fragrance.",
    "price": 4306,
    "category": "Attar",
    "gender": "Unisex",
    "size": "75ml",
    "stock": 68,
    "rating": 4.4,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Urban Mist Signature Fragrance 496",
    "brand": "Urban Mist",
    "description": "A premium men eau de parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 4443,
    "category": "Eau de Parfum",
    "gender": "Men",
    "size": "100ml",
    "stock": 85,
    "rating": 3.5,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Golden Aroma Signature Fragrance 497",
    "brand": "Golden Aroma",
    "description": "A premium women eau de toilette with a fresh, elegant and long-lasting fragrance.",
    "price": 4580,
    "category": "Eau de Toilette",
    "gender": "Women",
    "size": "30ml",
    "stock": 6,
    "rating": 4.2,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Elite Fragrance Signature Fragrance 498",
    "brand": "Elite Fragrance",
    "description": "A premium unisex parfum with a fresh, elegant and long-lasting fragrance.",
    "price": 4717,
    "category": "Parfum",
    "gender": "Unisex",
    "size": "50ml",
    "stock": 23,
    "rating": 4.9,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Pure Essence Signature Fragrance 499",
    "brand": "Pure Essence",
    "description": "A premium men body mist with a fresh, elegant and long-lasting fragrance.",
    "price": 4854,
    "category": "Body Mist",
    "gender": "Men",
    "size": "75ml",
    "stock": 40,
    "rating": 4.0,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  },
  {
    "name": "Scent House Signature Fragrance 500",
    "brand": "Scent House",
    "description": "A premium women attar with a fresh, elegant and long-lasting fragrance.",
    "price": 4991,
    "category": "Attar",
    "gender": "Women",
    "size": "100ml",
    "stock": 57,
    "rating": 4.7,
    "images": [
      "https://img.drz.lazcdn.com/g/kf/S18aa47daa0464c5680f9a33e5a2e0295v.jpg_720x720q80.jpg"
    ],
    "status": "active"
  }
]

const seedData = async () => {
  try {
    // ১. ডাটাবেসের সাথে কানেক্ট করা
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected for seeding...');

    // ২. পুরানো সব ইনডেক্স সম্পূর্ণরূপে ড্রপ/ক্লিন করা
    try {
      await Product.collection.dropIndexes();
      console.log('Old indexes cleared successfully');
    } catch (err) {
      console.log('No indexes to drop or collection is new');
    }

    // ৩. পুরানো প্রোডাক্ট ডিলিট করা
    await Product.deleteMany();

    // ৪. নতুন প্রোডাক্ট সিড করা
    await Product.insertMany(sampleProducts);

    console.log('Database Seeded Successfully!');
    process.exit();
  } catch (error) {
    console.error('Seeding Error:', error.message);
    process.exit(1);
  }
};

seedData();