import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export const someReducer = createSlice({
  name: 'someReducer',
  initialState: {
    kek: '2',
  },
  reducers: {
    someFunc: (state, actions) => {
      state.kek = actions.payload;
    },
    someReturn: {
      reducer(state, action: PayloadAction<{ id: string }>) {
        console.log(action.payload.id);
      },
      prepare(kek: string) {
        return {
          payload: {
            id: kek,
          },
        };
      },
    },
  },
});

export const { someFunc } = someReducer.actions;
export default someReducer.reducer;
