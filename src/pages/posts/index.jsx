import React, { useEffect, useState } from 'react';
import { list } from '../../api/posts';

import Card from '../../layout/Card';

import './index.css';

export default () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

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
            <div style={{ margin: index === 0 && '65px auto 1.5% auto' }}>
              <Card title={post.title}>
                <p key={post.id}>{post.body}</p>
              </Card>
            </div>
          ))

        ) : (
          <Card title="Teste">
            <h1 key={0}>Loading...</h1>
          </Card>
        )
      }

    </div>
  );
};
