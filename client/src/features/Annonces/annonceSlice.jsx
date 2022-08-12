import { createSlice } from '@reduxjs/toolkit'

export const annonceSlice = createSlice({
  name: 'annonce',
  initialState: {value:[ 
    {
      id:"1",
      titre:"Carpenter",
      description:"fabricationet réparation de meubles.",
      imgs:[
          "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
          "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
          "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
      ],
      locations:[{
        ville:"Ariana",
        delegation:[]
      }],
      creationDate: new Date(),
      active:true,
      categorie:"charpentier/charpentière",
      rating:5,
      user:{id:1,name:"carpentio"},
      price:"200 DT"
    } , {
        id:"2",
        titre:"Carpenter",
        description:"fabricationet réparation de meubles.",
        imgs:[
            "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
            "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
            "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
        ],
        locations:[{
          ville:"Ariana",
          delegation:[]
        }],
        creationDate: new Date(),
        active:true,
        categorie:"charpentier/charpentière",
        rating:4
    },{
      id:"3",
      titre:"Carpenter",
      description:"fabricationet réparation de meubles.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      imgs:[
          "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
          "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
          "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
      ],
      locations:[{
        ville:"Ariana",
        delegation:[]
      }],
      creationDate: new Date(),
      active:true,
      categorie:"charpentier/charpentière",
      rating:4.5
    } , {
        id:"4",
        titre:"Carpenter",
        description:"fabricationet réparation de meubles.",
        imgs:[
            "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
            "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
            "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
        ],
        locations:[{
          ville:"Ariana",
          delegation:[]
        }],
        creationDate: new Date(),
        active:true,
        categorie:"charpentier/charpentière",
        rating:3.7555
    },{
      id:"5",
      titre:"Carpenter",
      description:"fabricationet réparation de meubles.",
      imgs:[
          "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
          "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
          "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
      ],
      locations:[{
        ville:"Ariana",
        delegation:[]
      }],
      creationDate: new Date(),
      active:true,
      categorie:"charpentier/charpentière",
      rating:2.69696
    } , {
        id:"6",
        titre:"Carpenter",
        description:"fabricationet réparation de meubles.",
        imgs:[
            "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
            "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
            "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
        ],
        locations:[{
          ville:"Ariana",
          delegation:[]
        }],
        creationDate: new Date(),
        active:true,
        categorie:"charpentier/charpentière",
        rating:69
    },{
      id:"7",
      titre:"Carpenter",
      description:"fabricationet réparation de meubles.",
      imgs:[
          "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
          "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
          "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
      ],
      locations:[{
        ville:"Ariana",
        delegation:[]
      }],
      creationDate: new Date(),
      active:true,
      categorie:"charpentier/charpentière",
      rating:3.2
    } , {
        id:"8",
        titre:"Carpenter",
        description:"fabricationet réparation de meubles.",
        imgs:[
            "https://dictionary.cambridge.org/fr/images/full/carpen_noun_004_0668.jpg?version=5.0.248",
            "https://dictionary.cambridge.org/fr/images/thumb/closet_noun_004_0810.jpg?version=5.0.248",
            "https://dictionary.cambridge.org/fr/images/full/coffee_noun_002_07453.jpg?version=5.0.248"
        ],
        locations:[{
          ville:"Ariana",
          delegation:[]
        }],
        creationDate: new Date(),
        active:true,
        categorie:"charpentier/charpentière",
        rating:5
    },
  ]},
  reducers: {
    retrieve (state, action ) {
        state.value=action.payload;
    },
    ajout: (state, action) => {
      state.value.push(action.payload)
    },
    remove: (state, action) => {
      state.value.filter((e) =>{return e.id==action.payload.id})
    },
  },
})

export const { retrieve ,ajout, remove } = annonceSlice.actions

export const retrieveAsync = data => {
    return async (dispatch) => {
        try{
            setTimeout(() => {
                dispatch(retrieve(data))
            }, 1000);
        } catch(err){
            console.log(err);
        }
  }}
export const selectAnnonce = (state) => state.annonce.value

export default annonceSlice.reducer
