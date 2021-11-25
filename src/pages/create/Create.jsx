import Sidebar from "../../components/sidebar/Sidebar";
import "./create.scss"

const Create = () => {
    return ( 
        <div className="create">
            <form action="#" className="createForm">
                <div className="createFormWrapper">
                    <label htmlFor="imageInput">
                        <i class="addImage far fa-file-image"></i>
                    </label>
                    <input type="file" id="imageInput" className="imageInputButton"/>
                    <input type="text" placeholder="Title..." className="createInput" autoFocus="true"/>
                </div>
                <div className="createFormWrapper">
                    <textarea placeholder="Please write something creative!" type="text" className="createInput createInputTextArea"></textarea>
                </div>
                <button className="createSubmit">Publish!</button>
            </form>
            <Sidebar/>
        </div>
     );
}
 
export default Create;