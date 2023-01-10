import "../styling/sidebar.css"
import "../styling/app.css"

import Dashboard from "../asset/icons/dashboard.png"
import Logo from "../asset/logo.png"
import Logo1 from "../asset/logo1.png"
import Logo2 from "../asset/logo2.png"

import Skype from "../asset/icons/skype.png"
import Send from "../asset/icons/send.png"
import Game from "../asset/icons/game.png"
import Bond from "../asset/icons/bond.png"
import Buy from "../asset/icons/buy.png"
import Doc from "../asset/icons/doc.png"
import Price from "../asset/icons/price.png"
import Strake from "../asset/icons/strake.png"
import Analytics from "../asset/icons/analytics.png"


import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react"






const App = () => {


    const [sidebar, setSidebar] = useState(true)


    return (




        <div className= {sidebar? "app_left_sidebar app_left_sidebar_mobile" : "app_left_sidebar" }>


            <GiHamburgerMenu onClick={() => setSidebar(!sidebar)} className="hamburger_icon" size={25} color="lightgray" />

            <span className={sidebar? "logo_div logo_div_mobile" : "logo_div"}>

                {/* <img src={Logo} className="logo_img" /> */}
                <img src={Logo1} className={sidebar? "logo1 logo1_mobile" : "logo1"} />
                <img src={Logo2} className={sidebar? "logo2 logo2_mobile" : "logo2"} />

            </span>


            <span className={sidebar? "sidebar_menu_item sidebar_menu_item_mobile" : "sidebar_menu_item" }> <img src={Dashboard} className={sidebar? "icons_img icons_img_mobile" : "icons_img"} /> Dashboard</span>
            <span className={sidebar? "sidebar_menu_item sidebar_menu_item_mobile" : "sidebar_menu_item" }> <img src={Analytics} className={sidebar? "icons_img icons_img_mobile" : "icons_img"} /> Analytics</span>
            <span className={sidebar? "sidebar_menu_item sidebar_menu_item_mobile" : "sidebar_menu_item" }> <img src={Strake} className={sidebar? "icons_img icons_img_mobile" : "icons_img"} /> Stake</span>
            <span className={sidebar? "sidebar_menu_item sidebar_menu_item_mobile" : "sidebar_menu_item" }> <img src={Bond} className={sidebar? "icons_img icons_img_mobile" : "icons_img"} /> Bond</span>



            <span className={sidebar? "sidebar_menu_middle sidebar_menu_middle_mobile" : "sidebar_menu_middle"}>
                <span className="sidebar_middle_item gray" style={{ marginBottom: "0.5rem" }}>Bond discounts</span>

                <span className="sidebar_middle_item"> <span>XIV-BNB LP</span> -16.28%</span>
                <span className="sidebar_middle_item"> <span>PASS-BNB LP</span> -16.28%</span>
                <span className="sidebar_middle_item"> <span>XIV</span> -16.28%</span>
                <span className="sidebar_middle_item"> <span>BNB</span> -16.28%</span>
                <span className="sidebar_middle_item"> <span>BUSD</span> -16.28%</span>




            </span>


            <span className={sidebar? "sidebar_menu_item sidebar_menu_item_mobile" : "sidebar_menu_item" }> <img src={Buy} className={sidebar? "icons_img icons_img_mobile" : "icons_img"} /> Buy PASS</span>
            <span className={sidebar? "sidebar_menu_item sidebar_menu_item_mobile" : "sidebar_menu_item" }> <img src={Price} className={sidebar? "icons_img icons_img_mobile" : "icons_img"} /> Price Chart</span>
            <span className={sidebar? "sidebar_menu_item sidebar_menu_item_mobile" : "sidebar_menu_item" }> <img src={Doc} className={sidebar? "icons_img icons_img_mobile" : "icons_img"} /> Documentation</span>



            <span className={sidebar? "sidebar_menu_last sidebar_menu_last_mobile" : "sidebar_menu_last"}>

                <img src={Skype} className="social_img" />
                <img src={Game} className="social_img" />
                <img src={Send} className="social_img" />

            </span>



        </div>






    )
}




export default App

