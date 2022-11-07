import img1 from 'assets/images/sale1.png';
import img2 from 'assets/images/sale2.png';
import img3 from 'assets/images/sale3.png';
import img4 from 'assets/images/sale4.png';
import {ISellsItems} from "../types/types";

export const sellsItems: ISellsItems[] = [
    {
        id: 1,
        imgUrl: img1,
        title: 'MacBook Pro 13',
        description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
        price: '$ 1,200.00 USD'
    },
    {
        id: 2,
        imgUrl: img2,
        title: 'Smart Galaxy Watch 3',
        description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        price: '$ 199.00 USD'
    },
    {
        id: 3,
        imgUrl: img3,
        title: 'MacBook Air M1',
        description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        price: '$ 1,009.00 USD'
    },
    {
        id: 4,
        imgUrl: img4,
        title: 'iPad',
        description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        price: '$ 610.00 USD'
    },
]