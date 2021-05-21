import React, { useEffect, useState } from 'react';
import { list } from '../../api/posts';

import Card from '../../layout/Card';
import Modal from '../../layout/Modal';
import Comments from './components/comments';

import './index.css';

export default () => {
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState(-1);

  const handlePosts = async () => {
    setLoading(true);
    const response = await list();
    setPosts(response.length > 0 ? response : []);
    setLoading(false);
  };

  useEffect(() => {
    handlePosts();
  }, [1]);

  return (
    <div className="post">
      {
        !loading ? (
          posts.map((post, index) => (
            <div style={{ margin: index === 0 && '65px auto auto auto' }}>
              <Card title={post.title}>
                <p key={post.id}>{post.body}</p>
              </Card>
              <div className="ReadMore">
                <button
                  id={post.userId}
                  type="button"
                  onClick={(event) => {
                    setModalVisible(true);
                    setUserId(event.target.id);
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          ))
        ) : (
          <Card title="Loading">
            <h1 key={0}>Loading...</h1>
          </Card>
        )
      }
      {isModalVisible
      && (
      <Modal onClose={() => setModalVisible(false)}>
        <Comments id={userId} />
      </Modal>
      )}

    </div>
  );
};
