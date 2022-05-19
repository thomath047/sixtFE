import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { APIStatus } from '@/app/types';
import { fetchOffers } from './api';

type DeviceState = {
    offers: Object[];
    offerDataStatus: APIStatus;
};

const initialState: DeviceState = {
    offers: [{}],
    offerDataStatus: APIStatus.idle,
};


const rootSlice = createSlice({
    name: 'offer',
    initialState,
    reducers: {
        setTestData: (state, action: PayloadAction<any>) => {
            state.offers = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOffers.fulfilled, (state, action) => {
                if (action.payload) {
                    state.offers = action.payload;
                    state.offerDataStatus = APIStatus.success;
                }
            })
            .addCase(fetchOffers.rejected, (state) => {
                state.offers = [{}];
                state.offerDataStatus = APIStatus.failed;
            })
            .addCase(fetchOffers.pending, (state) => {
                state.offers = [{}];
                state.offerDataStatus = APIStatus.loading;
            })
    },
});

export const { setTestData } = rootSlice.actions;


export default rootSlice.reducer;
