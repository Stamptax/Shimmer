import './Menu.css';
import Item from '../Item/Item'

export default function Menu({ intro }) {
    return (
        <div className='menu' id='menu-for-goods'>
            <p className='menu-title'>MENU</p>
            <p className='intro'>{intro}</p>
            <div className='items'>
                <Item name={'Latte'} description={'Tasty latte'} alt={'Shimmer made latte'} src={'/resources/latte.jpeg'} />
                <Item name={'Cold Brew'} description={'Meticulously made cold brew'} alt={'Shimmer made cold brew'} src={'/resources/cold-brew.jpeg'} />
                <Item name={'Desserts'} description={'Delicious dessert'} alt={"Shimmer made dessert"} src={'/resources/dessert.jpeg'} />
                <Item name={'Cakes'} description={'Delicious cake'} alt={"Shimmer made cake"} src={'/resources/cake.jpeg'} />
                <Item name={'Snacks'} description={'Delicious snack'} alt={"Shimmer made snack"} src={'/resources/snack.jpeg'} />
            </div>
        </div>
    )
}
