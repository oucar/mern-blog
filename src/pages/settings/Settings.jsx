import "./settings.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import placeholderImg from "../../components/assets/me.JPG"

const Settings = () => {
    return ( 
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
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
                
                {/* FORM */}
                <form action="#" className="settingsForm">
                    <label>profile picture</label>
                    <div className="settingsProfilePicture">
                        <img src={placeholderImg} alt="Profile Picture" />

                        <label htmlFor="fileInput">
                            <i className="far fa-user-circle settingProfilePicture"></i>
                        </label>
                        <input type="file" class="imageInput" id="fileInput" />
                    </div>

                    {/* Username */}
                    <label>Username</label>


                    {/* Email */}


                </form>

            </div>
            <Sidebar/>

        </div>
     );
}
 
export default Settings;