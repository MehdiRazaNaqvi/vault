import "../styling/app.css"

import Background from "../asset/background.png"
import Sidebar from "../components/Sidebar"







const App = () => {

    return (
        <div className="app_base">
            <img src={Background} className="basic_cover_img" />

            <Sidebar />
            <div className="app_main_screen"></div>

        </div>
    )


}




export default App