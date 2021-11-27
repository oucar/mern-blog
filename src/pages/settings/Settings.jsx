import "./settings.scss"
import Sidebar from "../../components/sidebar/Sidebar"

const Settings = () => {
    return ( 
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsName">
                    <div className="settingsSelections">
                        <div className="settingsUpdateWrapper">
                            <i className="fas fa-user-edit settingIcon"></i>
                            <span className="settingsUpdateTitle">change your profile settings</span>
                        </div>
                        <div className="settingsDeleteWrapper">
                            <i className="fas fa-user-slash settingIcon"></i>
                            <span className="settingsDeleteTitle">delete your profile</span>
                        </div>
                        
                    </div>

                </div>
            </div>
            <Sidebar/>

        </div>
     );
}
 
export default Settings;