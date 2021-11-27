import Sidebar from "../../components/sidebar/Sidebar";
import "./create.scss"
import preview from "../../components/assets/post.jpg"

const Create = () => {
    return ( 
        <div className="create">
            <img src={preview} className="preview" alt="Image Preview"/>
            <form action="#" className="createForm">
                <div className="createFormWrapper">
                    <label htmlFor="imageInput">
                        <i class="addImage far fa-file-image"></i>
                    </label>
                    <input type="file" id="imageInput" className="imageInputButton"/>
                    <input type="text" placeholder="Title..." className="createInput" autoFocus="true"/>
                </div>
                <div className="createFormWrapper">
                    <textarea cols="5" placeholder="Please write something creative!" type="text" className="createInput createInputTextArea"></textarea>
                </div>
                <button className="createSubmit">Publish!</button>
            </form>
        </div>
     );
}
 
export default Create;