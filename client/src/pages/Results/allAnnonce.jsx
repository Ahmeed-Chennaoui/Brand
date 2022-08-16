import React from "react";

let idNumber = 1;
const idGen = () => {idNumber++;return idNumber}

export const villes = [
    "Ariana","Ben Arous","Bizerte","Béja","Gabès","Gafsa","Jendouba","Kairouan","Kasserine","Kébili","La Manouba","Le Kef","Mahdia","Monastir","Médenine","Nabeul","Sfax","Sidi Bouzid","Siliana","Sousse","Tataouine","Tozeur","Tunis","Zaghouan"
];
export const categories =[
      "charpentier/charpentière",
]
  
export const allAnnonce = [ 
    {
      id:"1",
      titre:"Carpenter",
      description:"fabricationet réparation de meubles.",
      imgs:[
          "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
          "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
          "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
      ],
      locations:{
        ville:"Ariana",
        delegation:[]
      },
      creationDate: new Date(),
      active:true,
      price: (Math.floor(Math.random()*1000)).toString()+ " TND",
      categorie:"charpentier/charpentière",
      rating:5
    } , {
        id:idGen(),
        titre:"Carpenter",
        description:"fabricationet réparation de meubles.",
        imgs:[
            "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
            "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
            "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
        ],
        locations:{
          ville: villes[Math.floor(Math.random()*villes.length)],
          delegation:[]
        },
        creationDate: new Date(),
        active:true,
        price: (Math.floor(Math.random()*1000)).toString()+ " TND",
        categorie:"charpentier/charpentière",
        rating:(Math.random()*5)
    }, {
      id:idGen(),
      titre:"Carpenter",
      description:"fabricationet réparation de meubles.",
      imgs:[
          "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
          "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
          "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
      ],
      locations:{
          ville: villes[Math.floor(Math.random()*villes.length)],
          delegation:[]
        },
      creationDate: new Date(),
      active:true,
      price: (Math.floor(Math.random()*1000)).toString()+ " TND",
      categorie:"charpentier/charpentière",
      rating:(Math.random()*5)
  }, {
    id:idGen(),
    titre:"Carpenter",
    description:"fabricationet réparation de meubles.",
    imgs:[
        "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
        "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
        "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
    ],
    locations:{
          ville: villes[Math.floor(Math.random()*villes.length)],
          delegation:[]
        },
    creationDate: new Date(),
    active:true,
    price: (Math.floor(Math.random()*1000)).toString()+ " TND",
    categorie:"charpentier/charpentière",
    rating:(Math.random()*5)
}, {
  id:idGen(),
  titre:"Carpenter",
  description:"fabricationet réparation de meubles.",
  imgs:[
      "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
  ],
  locations:{
          ville: villes[Math.floor(Math.random()*villes.length)],
          delegation:[]
        },
  creationDate: new Date(),
  active:true,
  price: (Math.floor(Math.random()*1000)).toString()+ " TND",
  categorie:"charpentier/charpentière",
  rating:(Math.random()*5)
}, {
  id:idGen(),
  titre:"Carpenter",
  description:"fabricationet réparation de meubles.",
  imgs:[
      "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
  ],
  locations:{
          ville: villes[Math.floor(Math.random()*villes.length)],
          delegation:[]
        },
  creationDate: new Date(),
  active:true,
  price: (Math.floor(Math.random()*1000)).toString()+ " TND",
  categorie:"charpentier/charpentière",
  rating:(Math.random()*5)
}, {
  id:idGen(),
  titre:"Carpenter",
  description:"fabricationet réparation de meubles.",
  imgs:[
      "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
  ],
  locations:{
          ville: villes[Math.floor(Math.random()*villes.length)],
          delegation:[]
        },
  creationDate: new Date(),
  active:true,
  price: (Math.floor(Math.random()*1000)).toString()+ " TND",
  categorie:"charpentier/charpentière",
  rating:(Math.random()*5)
}, {
  id:idGen(),
  titre:"Carpenter",
  description:"fabricationet réparation de meubles.",
  imgs:[
      "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
  ],
  locations:{
          ville: villes[Math.floor(Math.random()*villes.length)],
          delegation:[]
        },
  creationDate: new Date(),
  active:true,
  price: (Math.floor(Math.random()*1000)).toString()+ " TND",
  categorie:"charpentier/charpentière",
  rating:(Math.random()*5)
}, {
  id:idGen(),
  titre:"Carpenter",
  description:"fabricationet réparation de meubles.",
  imgs:[
      "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
  ],
  locations:{
          ville: villes[Math.floor(Math.random()*villes.length)],
          delegation:[]
        },
  creationDate: new Date(),
  active:true,
  price: (Math.floor(Math.random()*1000)).toString()+ " TND",
  categorie:"charpentier/charpentière",
  rating:(Math.random()*5)
}, {
  id:idGen(),
  titre:"Carpenter",
  description:"fabricationet réparation de meubles.",
  imgs:[
      "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
  ],
  locations:{
          ville: villes[Math.floor(Math.random()*villes.length)],
          delegation:[]
        },
  creationDate: new Date(),
  active:true,
  price: (Math.floor(Math.random()*1000)).toString()+ " TND",
  categorie:"charpentier/charpentière",
  rating:(Math.random()*5)
}, {
  id:idGen(),
  titre:"Carpenter",
  description:"fabricationet réparation de meubles.",
  imgs:[
      "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
  ],
  locations:{
          ville: villes[Math.floor(Math.random()*villes.length)],
          delegation:[]
        },
  creationDate: new Date(),
  active:true,
  price: (Math.floor(Math.random()*1000)).toString()+ " TND",
  categorie:"charpentier/charpentière",
  rating:(Math.random()*5)
}, {
  id:idGen(),
  titre:"Carpenter",
  description:"fabricationet réparation de meubles.",
  imgs:[
      "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
  ],
  locations:{
          ville: villes[Math.floor(Math.random()*villes.length)],
          delegation:[]
        },
  creationDate: new Date(),
  active:true,
  price: (Math.floor(Math.random()*1000)).toString()+ " TND",
  categorie:"charpentier/charpentière",
  rating:(Math.random()*5)
}, {
  id:idGen(),
  titre:"Carpenter",
  description:"fabricationet réparation de meubles.",
  imgs:[
      "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
  ],
  locations:{
          ville: villes[Math.floor(Math.random()*villes.length)],
          delegation:[]
        },
  creationDate: new Date(),
  active:true,
  price: (Math.floor(Math.random()*1000)).toString()+ " TND",
  categorie:"charpentier/charpentière",
  rating:(Math.random()*5)
}, {
  id:idGen(),
  titre:"Carpenter",
  description:"fabricationet réparation de meubles.",
  imgs:[
      "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
  ],
  locations:{
          ville: villes[Math.floor(Math.random()*villes.length)],
          delegation:[]
        },
  creationDate: new Date(),
  active:true,
  price: (Math.floor(Math.random()*1000)).toString()+ " TND",
  categorie:"charpentier/charpentière",
  rating:(Math.random()*5)
}, {
  id:idGen(),
  titre:"Carpenter",
  description:"fabricationet réparation de meubles.",
  imgs:[
      "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
  ],
  locations:{
          ville: villes[Math.floor(Math.random()*villes.length)],
          delegation:[]
        },
  creationDate: new Date(),
  active:true,
  price: (Math.floor(Math.random()*1000)).toString()+ " TND",
  categorie:"charpentier/charpentière",
  rating:(Math.random()*5)
}, {
  id:idGen(),
  titre:"Carpenter",
  description:"fabricationet réparation de meubles.",
  imgs:[
      "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
  ],
  locations:{
          ville: villes[Math.floor(Math.random()*villes.length)],
          delegation:[]
        },
  creationDate: new Date(),
  active:true,
  price: (Math.floor(Math.random()*1000)).toString()+ " TND",
  categorie:"charpentier/charpentière",
  rating:(Math.random()*5)
}, {
  id:idGen(),
  titre:"Carpenter",
  description:"fabricationet réparation de meubles.",
  imgs:[
      "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
  ],
  locations:{
          ville: villes[Math.floor(Math.random()*villes.length)],
          delegation:[]
        },
  creationDate: new Date(),
  active:true,
  price: (Math.floor(Math.random()*1000)).toString()+ " TND",
  categorie:"charpentier/charpentière",
  rating:(Math.random()*5)
}, {
  id:idGen(),
  titre:"Carpenter",
  description:"fabricationet réparation de meubles.",
  imgs:[
      "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
  ],
  locations:{
          ville: villes[Math.floor(Math.random()*villes.length)],
          delegation:[]
        },
  creationDate: new Date(),
  active:true,
  price: (Math.floor(Math.random()*1000)).toString()+ " TND",
  categorie:"charpentier/charpentière",
  rating:(Math.random()*5)
}, {
  id:idGen(),
  titre:"Carpenter",
  description:"fabricationet réparation de meubles.",
  imgs:[
      "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
  ],
  locations:{
          ville: villes[Math.floor(Math.random()*villes.length)],
          delegation:[]
        },
  creationDate: new Date(),
  active:true,
  price: (Math.floor(Math.random()*1000)).toString()+ " TND",
  categorie:"charpentier/charpentière",
  rating:(Math.random()*5)
}, {
  id:idGen(),
  titre:"Carpenter",
  description:"fabricationet réparation de meubles.",
  imgs:[
      "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
      "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
  ],
  locations:{
          ville: villes[Math.floor(Math.random()*villes.length)],
          delegation:[]
        },
  creationDate: new Date(),
  active:true,
  price: (Math.floor(Math.random()*1000)).toString()+ " TND",
  categorie:"charpentier/charpentière",
  rating:(Math.random()*5)
}, 
];