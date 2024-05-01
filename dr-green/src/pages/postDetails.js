import React from 'react';
import { useNavigate } from 'react-router-dom';
import Post from '../components/post';
import Comments from '../components/comments';
import TopBar from '../components/topBar';
import avatar1 from '../images/Avatar1.png';
import cactus_post from '../images/Cactus_post.png';

function PostDetails({ name = 'Ada Jones', avatar = avatar1, image = cactus_post, content = "Excited to add a barrel cactus to my collection! Does anyone have suggestions on the best soil mix and pot size for it?",
    like = '12', comment = '2', tag = "Cactus" }) {

    return (
        <div className="post-details-container">
            <TopBar backRoute="/feed" />
            <div className="content-center">
                <Post name={name}
                    avatar={avatar}
                    content={content}
                    img={image}
                    tag={tag}
                    like={like}
                    comment={comment} />
                <Comments />
            </div>
        </div>
    );
}

export default PostDetails;
