import React from 'react';
import PropTypes from 'prop-types';

import { getComments } from '../../../../api/posts';

import './index.css';

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      comments: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.handleComments();
  }

  async handleComments() {
    const { id } = this.state;
    this.setState({ loading: true });
    const response = await getComments(id);

    this.setState({ comments: response, loading: false });
  }

  render() {
    const { comments, loading } = this.state;

    return (
      <div className="Comments">
        {!loading ? comments.map((comment) => (
          <div>
            <p>{`User: ${comment.name}`}</p>
            <p>{`Email: ${comment.email}`}</p>
            <p>{comment.body}</p>
            <hr />
          </div>
        )) : (
          <div>
            <p>Loading...</p>
          </div>
        )}
      </div>
    );
  }
}

Comments.propTypes = {
  id: PropTypes.number.isRequired,
};
