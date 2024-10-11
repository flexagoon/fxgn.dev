<!-- Stylesheet that makes the RSS feed pretty in the browser -->

<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" encoding="UTF-8" indent="yes" />

<xsl:template match="/">
  <html>
    <head>
      <title>rss • fxgn</title>
      <style>
        body {
          font-family: 'Inter Variable', 'Roboto', 'Helvetica Neue', 'Arial Nova', 'Nimbus Sans', 'Arial', 'sans-serif';
          display: flex;
          min-height: 100dvh;
          align-items: center;
          justify-content: center;
          margin: 0;
        }
        .container {
          max-width: 640px;
        }
        h1 {
          font-size: 3rem;
          font-weight: 800;
          font-style: italic;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }
        p {
          font-style: italic;
          color: #666;
        }
        ol {
          list-style-type: decimal;
          padding-left: 0;
        }
        li {
          margin-bottom: 0.5rem;
        }
        a {
          font-size: 1.5rem;
          font-style: italic;
          text-decoration: underline;
          color: #000;
        }
        a:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
      </style>
    </head>
    <body>
      <div class="container">
        <hgroup>
          <h1>rss feed</h1>
          <p>(paste this url in your feed reader to subscribe)</p>
        </hgroup>
        <ol reversed="true">
          <xsl:apply-templates select="/rss/channel/item"/>
        </ol>
      </div>
    </body>
  </html>
</xsl:template>

<xsl:template match="item">
  <li>
    <a href="{link}">
      <xsl:value-of select="title"/>
    </a>
  </li>
</xsl:template>

</xsl:stylesheet>
