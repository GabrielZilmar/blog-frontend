import React, { useEffect, useState } from 'react';
import { list } from '../../api/posts';

import Card from '../../layout/Card';
import Modal from '../../layout/Modal';
import Comments from './components/comments';
import Pagination from '../../components/Pagination';

import './index.css';

export default () => {
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState(-1);
  const [page, setPage] = useState(1);
  const [postsPerPage] = useState(5);

  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setPage(pageNumber);
  };

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
          currentPosts.map((post, index) => (
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
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />

    </div>
  );
};
