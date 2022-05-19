import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../../../app/api';
import { OfferApiResponse } from '../types';


const sampleGet = async () => {
    const url = `/offers`;
    return apiClient.get(url);
};

export const fetchOffers = createAsyncThunk<Object | undefined>(
    'device/fetchDeviceDetails',
    async (_, thunkAPI) => {
        try {
            const result = sampleGet()
                .then((response) => {
                    const results = response.data as OfferApiResponse;
                    return results.offers;
                })
            return result;
        } catch {
            return thunkAPI.rejectWithValue(false);
        }
    }
);
