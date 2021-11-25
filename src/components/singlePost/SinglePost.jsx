import "./singlePost.scss";
import postImage from "../assets/post.jpg"

const SinglePost = () => {
    return ( 
        <div className="singlePost">
            <div className="singlePostWrapper">
            <img src={postImage} alt="Post image" />
            <h1 className="postTitle">Lorem Ipsum!</h1>
            <div className="postActions">
                <i className="far fa-trash-alt"></i>
                <i className="far fa-edit"></i>
            </div>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <strong>@onurucar</strong></span>
                    <span className="singlePostDate">2 hours ago</span>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, optio laudantium mollitia suscipit eligendi amet praesentium, nihil ex sapiente impedit necessitatibus molestias ullam, officiis obcaecati accusantium eveniet minima autem quam!
                Voluptatum quibusdam dolore nisi, architecto esse quod itaque alias! Libero dolorum perspiciatis quisquam mollitia, illum nihil asperiores, facilis sequi adipisci, sed numquam aliquid distinctio tempora eius ipsum pariatur vero sit.
                Id sed distinctio excepturi quidem ipsa in optio ab quo cumque consequuntur eius vitae molestiae veritatis vero nam voluptatibus rerum ipsam, qui magnam recusandae. Corporis totam omnis aspernatur? Dicta, perspiciatis?
                Iusto, tempora vero magni ullam labore perferendis quod libero illum eaque molestias autem earum assumenda voluptatum quaerat magnam velit sint suscipit? Iure quas laudantium dignissimos aliquid ducimus delectus, accusantium et!
                Aliquam aperiam veritatis vel dolore pariatur nihil voluptatem ullam ad asperiores temporibus? Natus libero quaerat odit rerum assumenda quia, sequi corporis mollitia unde cum quos quidem, totam ex explicabo atque?
                Sit optio eos vero suscipit odio facilis atque quis officia earum quod saepe, tempore iste cumque eius nostrum corporis deleniti voluptas, corrupti reprehenderit. Blanditiis, deserunt nihil ipsa non eaque voluptatem.
                Sint et ratione eaque neque asperiores aspernatur accusamus, maxime sed, repellat rerum voluptatum omnis vel officiis non doloremque repudiandae architecto veniam, nisi impedit animi dignissimos quisquam ad vitae at! Voluptate!
                Sunt nemo commodi accusamus. Dicta veniam exercitationem dolorum. Et amet non laborum modi repellendus placeat reiciendis laudantium dolores possimus, deleniti nobis dolore distinctio eaque commodi enim at a, laboriosam quos.
                Architecto odio optio eos illo porro iure quae modi, omnis ducimus maxime sed et consequuntur sequi atque aut, eaque ullam soluta. Cum dolores possimus quidem voluptatibus repellendus. Accusamus, dolorum tempora.
                Itaque vel earum porro perspiciatis dolorum consequatur hic voluptate, officia dolorem iste saepe et quo nostrum nulla, dignissimos velit eaque, placeat atque? Qui, nulla consequatur! Quidem perspiciatis sint exercitationem necessitatibus!
                Odio fugit consequuntur a autem perferendis vitae molestias maxime odit ducimus ea mollitia dolorum pariatur placeat non modi numquam officia, praesentium, reprehenderit qui sunt quam labore? Eum molestiae debitis dignissimos.
                Mollitia non aspernatur ut quae, tempore eligendi repellendus repudiandae libero, aliquam, quasi voluptate dicta nam? Perferendis sint blanditiis consectetur accusamus numquam modi, expedita, nobis quam magnam natus, harum iusto excepturi?</p>

            </div>
        </div> 
    );
}
 
export default SinglePost;