import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Welcome to Jese.ph - Like Joseph with an "E"</title>
          <meta name="description" content="Testing a meta description for jese.ph using React Helmet plugin" />
        </Helmet>
        <p>Give me a minute, I just bought the domain yesterday...</p>
      </div>
    );
  }
}

export default Home;
