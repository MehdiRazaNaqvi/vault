import "../styling/app.css"

import Background from "../asset/background.png"
import Sidebar from "../components/Sidebar"
import MainScreen from "../components/mainScreen"







const App = () => {

    return (
        <div className="app_base">
            <img src={Background} className="basic_cover_img" />

            <Sidebar />
            <MainScreen />

        </div>
    )


}




export default App