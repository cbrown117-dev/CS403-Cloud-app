import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';

const UserLikes = ({ userLikes, profile }) => {
  return (
    <Fragment>
      <h2>Welcome, {profile.name}</h2>
      <h4>Your Likes</h4>
      {userLikes.length > 0 ? (
        <div className='carouselContainer' style={{ width: '450px' }}>
          <Carousel>
            {userLikes.map(like => (
              <Carousel.Item key={like.id}>
                <img
                  className='d-block w-100'
                  style={{ width: '350px', height: '250px' }}
                  src={require('./imgs/' +
                    like.genre +
                    '/' +
                    like.title.replace(':', '') +
                    '.jpg')}
                />
                <Carousel.Caption
                  style={{ color: 'white', backgroundColor: 'black' }}
                >
                  <h3>{like.title}</h3>
                  <h6>{like.genre}</h6>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      ) : (
        <h4>No Likes!</h4>
      )}
    </Fragment>
  );
};

UserLikes.propTypes = {};

const mapStateToProps = state => ({
  profile: state.profile.profile,
  userLikes: state.profile.userLikes
});

export default connect(mapStateToProps)(UserLikes);
