import { APIStatus } from "../../app/types";

export type DeviceState = {
    testData: string;
    offerDataStatus: APIStatus;
};

export type OfferApiResponse = {
    offers: Object[];
};

export type SampleResponse = {
    offers: Object[];
}