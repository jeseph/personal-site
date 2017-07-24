module.exports = {
  blogPostDir: 'sample-posts', // The name of directory that contains your posts.
  siteTitle: 'Jeseph - Like Joseph, with an E', // Site title.
  siteTitleAlt: 'Jese.ph', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://www.jese.ph', // Domain of your website without pathPrefix.
  pathPrefix: '', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'A GatsbyJS stater with Advanced design in mind.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: 'SETFORLIVE', // FB Application ID for using app insights
  googleAnalyticsID: 'SETFORLIVE', // GA tracking ID.
  disqusShortname: 'SETFORLIVE', // Disqus shortname.
  postDefaultCategoryID: 'News', // Default category for posts.
  userName: 'Jeseph Meyers', // Username to display in the author segment.
  userTwitter: 'jesephm', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Buffalo, NY', // User location to display in the author segment.
  userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  userDescription: "I'm a designer/developer who loves SEO", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/jeseph',
      iconClassName: 'fa fa-github',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/jesephm',
      iconClassName: 'fa fa-twitter',
    },
    {
      label: 'Email',
      url: 'mailto:jesephm@gmail.com',
      iconClassName: 'fa fa-envelope',
    },
  ],
  copyright: 'Copyright © 2017. Jeseph Meyers', // Copyright string for the footer of the website and RSS feed.

};
