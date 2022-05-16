import React from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    title: 'STAMINA BOOSTER',
                    img: '1.png',
                    desc: 'Increases max stamina by 50%',
                    category: 'Booster',
                    price: '450'
                },
                {
                    id: 2,
                    title: 'RAM JOLT',
                    img: '2.png',
                    desc: 'Increases max RAM by 2',
                    category: 'Booster',
                    price: '1125'
                },
                {
                    id: 3,
                    title: 'HEALTH BOOSTER',
                    img: 'health_booster_consumables.png',
                    desc: 'Increases max health by 20%',
                    category: 'Booster',
                    price: '2250'
                }
            ]
        }
    }

    render() {
        return (
            <div className="wrapper">
                <Header/>
                <Items items={this.state.items}/>
                <Footer/>
            </div>
        )
    }
}

export default App;
