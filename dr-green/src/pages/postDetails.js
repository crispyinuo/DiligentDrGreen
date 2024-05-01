import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Post from '../components/post';
import Comments from '../components/comments';
import TopBar from '../components/topBar';
import Avatar7 from '../images/Avatar7.png';
import Avatar8 from '../images/Avatar8.png';

function PostDetails() {
    const location = useLocation();
    const navigate = useNavigate();

    const commentsData = [
        {
            name: "Emily Moore",
            avatar: Avatar7,
            content: "Congrats on the new addition! For barrel cacti, a mix of 50% potting soil and 50% sand works great. Stick to a pot just bigger than the cactus for best growth.",
            likeCount: '5',
            commentCount: '0',
        },
        {
            name: "Chris Jackson",
            avatar: Avatar8,
            content: "Great choice! I recommend using a terracotta pot.",
            likeCount: '3',
            commentCount: '0',
        },

    ];

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
                {commentsData.map((item, index) => (
                    <Comments
                        key={index}
                        avatar={item.avatar}
                        name={item.name}
                        likeCount={item.likeCount}
                        commentCount={item.commentCount}
                        time={item.time}
                        content={item.content}
                    />
                ))}
            </div>
        </div>
    );
}

export default PostDetails;
