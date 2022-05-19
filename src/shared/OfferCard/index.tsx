import React from 'react';

// Styles
import { CardWrapper, CardContent, Img, H1, P, CardDetails } from './style';

// Types
import { Props } from './types';

const OfferCard: React.FC<Props> = (props: Props) => {
    const {data: {
        carGroupInfo,
        prices,
        }
    } = props;
    return (<>  
    <CardWrapper>
        <CardContent>
            <Img src={carGroupInfo?.modelExample?.imageUrl} alt={carGroupInfo?.modelExample?.name}/>
            <CardDetails>
                <H1>{carGroupInfo?.modelExample?.name}</H1>
                <P>{`${prices?.totalPrice?.amount?.value || ''} ${prices?.totalPrice?.amount?.currency || ''}`}</P>
            </CardDetails>
        </CardContent>
    </CardWrapper>
    </>)
}

export default OfferCard;