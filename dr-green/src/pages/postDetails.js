import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Post from '../components/post';
import Comments from '../components/comments';
import TopBar from '../components/topBar';

function PostDetails() {
    const location = useLocation();
    const navigate = useNavigate();

    const { name, avatar, img, content, like, comment, tag } = location.state || {
        name: 'Ada Jones',
        avatar: require('../images/Avatar1.png'),
        img: require('../images/Cactus_post.png'),
        content: "Excited to add a barrel cactus to my collection! Does anyone have suggestions on the best soil mix and pot size for it?",
        like: '12',
        comment: '2',
        tag: "Cactus"
    };

    return (
        <div className="post-details-container">
            <TopBar backRoute="/feed" />
            <div className="content-center">
                <Post name={name}
                    avatar={avatar}
                    content={content}
                    img={img}
                    tag={tag}
                    like={like}
                    comment={comment} />
                <Comments />
            </div>
        </div>
    );
}

export default PostDetails;
