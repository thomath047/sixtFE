// Core
import React from "react";

// Components
import OfferCard from "@/shared/OfferCard";

// Others
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { fetchOffers } from "./slice/api";
import { selectOfferData, selectOfferDataStatus } from "./slice/selectors";

// Styles
import { ListWrapper } from "./style";

const Home = () => {
  const offerData = useAppSelector(selectOfferData);
  const offerDataStatus = useAppSelector(selectOfferDataStatus);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  console.log(offerData)

  return (
    <ListWrapper>
      {offerData?.map((carData: any) => (
        <OfferCard key={carData.id} data={carData}/>
      ))}
    </ListWrapper>
  );
};

export default Home;