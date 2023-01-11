


import "../styling/mainScreen.css"

import { Button } from "reactstrap"








const App = () => {

    return (
        <div className="app_main_screen">


            <div className="main_screen_top_bar">

                <Button className="buttons_top buttons_top_orange" color="light">Buy PASS</Button>
                <Button className="buttons_top" color="light">Connect Wallet</Button>

            </div>



            <div className="main_screen_top_heading">EPOCH STAKING</div>

            <div className="main_screen_grid_div">

                <span className="grid_item">

                    <h5 className="grid_item_label">PASS price</h5>
                    <h2 className="grid_item_price">$1520.33</h2>


                </span>

                <span className="grid_item">

                    <h5 className="grid_item_label">APR / EPR</h5>
                    <h2 className="grid_item_price">$3280% / 3%</h2>


                </span>

                <span className="grid_item">

                    <h5 className="grid_item_label">Market Cap</h5>
                    <h2 className="grid_item_price">$1520.33</h2>


                </span>

                <span className="grid_item">

                    <h5 className="grid_item_label">Total Value Locked</h5>
                    <h2 className="grid_item_price">$1520.33</h2>


                </span>

                <span className="grid_item">

                    <h5 className="grid_item_label">Treasury Balance</h5>
                    <h2 className="grid_item_price">$1520.33</h2>


                </span>

                <span className="grid_item">

                    <h5 className="grid_item_label">PASS supply</h5>
                    <h2 className="grid_item_price">$1520.33</h2>


                </span>

                <span className="grid_item">

                    <h5 className="grid_item_label">Backing per PASS</h5>
                    <h2 className="grid_item_price">$1520.33</h2>


                </span>

                <span className="grid_item">

                    <h5 className="grid_item_label">Current Index</h5>
                    <h2 className="grid_item_price">3.48x</h2>


                </span>





            </div>


        </div>
    )

}









export default App