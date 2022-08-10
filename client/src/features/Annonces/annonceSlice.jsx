import { createSlice } from '@reduxjs/toolkit'

export const annonceSlice = createSlice({
  name: 'annonce',
  initialState: [ 
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
      rating:5
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
        rating:5
    },
  ],
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
