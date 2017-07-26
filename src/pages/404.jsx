import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

class errorPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title='404 - Page not Found - jese.ph'/>
        <p>Oops, it appears that the page you're looking for is missing.</p>
      </div>
    );
  }
}

export default errorPage;
