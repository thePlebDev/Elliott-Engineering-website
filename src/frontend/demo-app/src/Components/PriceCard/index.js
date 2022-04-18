import React from 'react';
import styled from 'styled-components';
import SupportImage from '../../Resources/supporter.png'

import CardContainer from '../Cards/cardContainer';
import TitleImage from './titleImage';
import Details from './details';
import Subscription from './subscription';


const Money = styled.span`
    font-size:40px;
    color:${({theme})=>theme.mainColor};
    font-weight:700;
`
const MoneyText = styled.span`
    color: #888;
    font-weight:700;

`


const PriceCard = ({children})=>{

    return(
        <CardContainer>
            {children}
        </CardContainer>
    )
}

export default PriceCard