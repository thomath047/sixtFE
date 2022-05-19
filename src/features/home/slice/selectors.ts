// Others
import { RootState } from "@/app/store";

export const selectOfferData = (state: RootState) => state.root.offers;
export const selectOfferDataStatus = (state: RootState) => state.root.offerDataStatus;