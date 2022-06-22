import React from 'react'
import { gameColors } from './GameColors'
import { orderState } from '../OrderAtom';
import { useRecoilState } from 'recoil';

function addRandomColor({colors}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [order, setOrder] = useRecoilState(orderState)
    var n = colors.length - 1
    
    var rand = Math.floor(Math.random() * (n + 1));
    while (order.length > 0 && colors[rand] === order[order.length - 1]) {
        rand = Math.floor(Math.random() * (n + 1));
    }
    setOrder(order => [...order, colors[rand]])

    
}

export default addRandomColor