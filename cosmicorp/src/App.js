import React from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items";
import Player from "./Player";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            items: [
                {
                    id: 1,
                    title: 'Libra',
                    img: '1.png',
                    desc: 'Astro Zxdiac',
                    category: 'Booster',
                    price: '450'
                },
                {
                    id: 2,
                    title: 'Virgo',
                    img: '2.png',
                    desc: 'Astro Zxdiac',
                    category: 'Booster',
                    price: '1125'
                },
                {
                    id: 3,
                    title: 'Pisces',
                    img: '3.png',
                    desc: 'Astro Zxdiac',
                    category: 'Booster',
                    price: '2250'
                },
                {
                    id: 4,
                    title: 'Scorpio',
                    img: '4.png',
                    desc: 'Astro Zxdiac',
                    category: 'Booster',
                    price: '450'
                },
                {
                    id: 5,
                    title: 'Leo',
                    img: '5.png',
                    desc: 'Astro Zxdiac',
                    category: 'Booster',
                    price: '450'
                },
                {
                    id: 6,
                    title: 'Aries',
                    img: '6.png',
                    desc: 'Astro Zxdiac',
                    category: 'Booster',
                    price: '450'
                },
                {
                    id: 7,
                    title: 'Aquarius',
                    img: '7.png',
                    desc: 'Astro Zxdiac',
                    category: 'Booster',
                    price: '450'
                },
                {
                    id: 8,
                    title: 'Taurus',
                    img: '8.png',
                    desc: 'Astro Zxdiac',
                    category: 'Booster',
                    price: '450'
                },
                {
                    id: 9,
                    title: 'Capricorn',
                    img: '9.png',
                    desc: 'Astro Zxdiac',
                    category: 'Booster',
                    price: '450'
                },
                {
                    id: 10,
                    title: 'Gemini',
                    img: '10.png',
                    desc: 'Astro Zxdiac',
                    category: 'Booster',
                    price: '450'
                },
                {
                    id: 11,
                    title: 'Sagittarius',
                    img: '11.png',
                    desc: 'Astro Zxdiac',
                    category: 'Booster',
                    price: '450'
                },
                {
                    id: 12,
                    title: 'Cancer',
                    img: '12.png',
                    desc: 'Astro Zxdiac',
                    category: 'Booster',
                    price: '450'
                }
            ]
        }
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
    }

    render() {
        return (
            <div className="wrapper">
                <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
                <Player className='player-container'></Player>
                <Items items={this.state.items} onAdd={this.addToOrder} />
                <Footer/>
            </div>
        )
    }

    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }

    addToOrder(item) {
        let isInArray = false
        this.state.orders.forEach(el => {
            if(el.id === item.id)
                isInArray = true
        })
        if(!isInArray)
            this.setState({orders: [...this.state.orders, item]}, () => {
                console.log(this.state.orders)
        })
    }
}

export default App;
