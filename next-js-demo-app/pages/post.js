import Axios from "axios";
import withRouter from 'next/router';

const Post = ({ id, comments }) => (
    <h1>
        {id} :
        <ul>
            {
            comments.map(comment =>
                (<li key={comment.id}>
                    {comment.body}
                </li>)
                )
            }
        </ul>
    </h1>
);

Post.getInitialProps = async ({ query }) => {
    console.log(query);
    const response = await Axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${query.id}`);
    const { data } = response;
    console.log(data);
    return { ...query, comments: data };
};

export default Post;
