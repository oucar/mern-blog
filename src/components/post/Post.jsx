import "./post.scss"
import postImg from "../assets/post.jpg"

const Post = () => {
    return ( 
        <div className="post">
            <img src={postImg} alt="Post" />
            <div className="postInfo">
                <div className="postCategories">
                    <span className="postCategory">Computer Science</span>
                    <span className="postCategory">Technology</span>
                </div>
                <span className="postTitle">Lorem ipsum!</span>
                <hr />
                <span className="postDate">1 hour ago.</span>
            </div>
            <p className="postDescription">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, vel dolore. Reiciendis maiores voluptatem illum asperiores facilis culpa molestias doloremque ullam. Dolor harum est cumque doloribus dolorum eum maiores excepturi.
                Beatae dolorem commodi doloribus quam reprehenderit incidunt ab vel! Quasi iure delectus optio vel! Voluptatibus reprehenderit soluta a dolor, deleniti nostrum dicta quaerat odio sequi tempora unde quae cum vero!
                Optio id ex doloribus minima fugit nulla quo corrupti! Nesciunt qui est voluptate, perferendis, esse id veniam rem magnam maiores ut ipsa, officiis velit. Libero sint asperiores itaque architecto tempora?
                Recusandae nobis perferendis illum, fuga commodi nemo, voluptas laborum atque facere iure, laudantium et dolores? Rem sapiente vitae iste facere laudantium possimus voluptatibus qui, iusto voluptas! Cumque, tenetur ex! Amet.
            </p>

        </div>
     );
}
 
export default Post;