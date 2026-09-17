<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  exclude-result-prefixes="sm">

  <xsl:output method="html" encoding="UTF-8" indent="yes" doctype-system="about:legacy-compat"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Sitemap — Ajaypal Singh</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,500;12..96,600&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap" rel="stylesheet"/>
        <style>
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

          :root {
            --navy:   #0F1330;
            --blue:   #1F2AD6;
            --blue2:  #5560F0;
            --light:  #F7F7F5;
            --muted:  #5A5F7A;
            --pale:   #8A8FB0;
            --border: #DADCE8;
            --card:   #FFFFFF;
          }

          body {
            font-family: 'Bricolage Grotesque', sans-serif;
            background: var(--light);
            color: var(--navy);
            min-height: 100vh;
            -webkit-font-smoothing: antialiased;
          }

          /* ── Header ── */
          .site-header {
            background: var(--navy);
            color: var(--light);
            padding: 0 clamp(24px, 5vw, 80px);
          }
          .site-header__inner {
            max-width: 1200px;
            margin: 0 auto;
            padding: 48px 0 40px;
          }
          .site-header__kicker {
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--blue2);
            margin-bottom: 12px;
          }
          .site-header__title {
            font-size: clamp(48px, 9vw, 112px);
            font-weight: 500;
            line-height: 0.9;
            letter-spacing: -0.065em;
            color: var(--light);
          }
          .site-header__desc {
            margin-top: 20px;
            font-size: clamp(14px, 1.6vw, 18px);
            color: var(--pale);
            max-width: 52ch;
            line-height: 1.5;
          }
          .site-header__meta {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-top: 28px;
            flex-wrap: wrap;
          }
          .meta-pill {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            height: 32px;
            padding: 0 14px;
            border-radius: 999px;
            border: 1px solid #2A3060;
            font-size: 12px;
            color: var(--pale);
            font-family: 'JetBrains Mono', monospace;
          }
          .meta-dot {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: var(--blue2);
            flex-shrink: 0;
          }

          /* ── Main ── */
          main {
            max-width: 1200px;
            margin: 0 auto;
            padding: clamp(48px, 6vw, 80px) clamp(24px, 5vw, 80px);
          }

          /* ── Table ── */
          .sm-table {
            width: 100%;
            border-collapse: collapse;
            border-spacing: 0;
          }

          .sm-table thead tr {
            border-bottom: 2px solid var(--blue);
          }
          .sm-table thead th {
            padding: 0 16px 14px;
            text-align: left;
            font-size: 11px;
            font-family: 'JetBrains Mono', monospace;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: var(--blue2);
            font-weight: 500;
          }
          .sm-table thead th:first-child { padding-left: 0; }

          .sm-table tbody tr {
            border-bottom: 1px solid var(--border);
            transition: background 0.18s;
          }
          .sm-table tbody tr:last-child { border-bottom: none; }
          .sm-table tbody tr:hover { background: rgba(31,42,214,.04); }

          .sm-table td {
            padding: 18px 16px;
            font-size: 15px;
            vertical-align: middle;
          }
          .sm-table td:first-child { padding-left: 0; }

          .sm-table .td-index {
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            color: var(--pale);
            width: 48px;
            white-space: nowrap;
          }
          .sm-table .td-url a {
            color: var(--navy);
            text-decoration: none;
            font-weight: 500;
            word-break: break-all;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            transition: color 0.2s;
          }
          .sm-table .td-url a:hover { color: var(--blue); }
          .sm-table .td-url a::after {
            content: '↗';
            font-size: 12px;
            opacity: 0;
            transition: opacity 0.2s, transform 0.2s;
            transform: translate(-2px, 2px);
          }
          .sm-table .td-url a:hover::after {
            opacity: 1;
            transform: translate(0, 0);
          }

          .sm-table .td-freq {
            font-family: 'JetBrains Mono', monospace;
            font-size: 12px;
            color: var(--muted);
            white-space: nowrap;
          }
          .sm-table .td-priority { white-space: nowrap; }

          .priority-bar {
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .priority-bar__track {
            width: 64px;
            height: 4px;
            background: var(--border);
            border-radius: 2px;
            overflow: hidden;
          }
          .priority-bar__fill {
            height: 100%;
            background: var(--blue);
            border-radius: 2px;
          }
          .priority-bar__label {
            font-family: 'JetBrains Mono', monospace;
            font-size: 12px;
            color: var(--muted);
          }

          .sm-table .td-date {
            font-family: 'JetBrains Mono', monospace;
            font-size: 12px;
            color: var(--muted);
            white-space: nowrap;
          }

          /* ── Footer ── */
          .site-footer {
            border-top: 1px solid var(--border);
            margin: 0 clamp(24px, 5vw, 80px);
            padding: 28px 0 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 12px;
          }
          .site-footer p {
            font-size: 13px;
            color: var(--pale);
          }
          .site-footer a {
            color: var(--blue2);
            text-decoration: none;
            transition: color 0.2s;
          }
          .site-footer a:hover { color: var(--blue); }

          @media (max-width: 640px) {
            .sm-table .td-freq,
            .sm-table .td-date,
            .sm-table .td-priority,
            .sm-table thead th.col-freq,
            .sm-table thead th.col-date,
            .sm-table thead th.col-priority { display: none; }
          }
        </style>
      </head>
      <body>

        <header class="site-header">
          <div class="site-header__inner">
            <p class="site-header__kicker">ajaypalsingh.in · XML Sitemap</p>
            <h1 class="site-header__title">Sitemap</h1>
            <p class="site-header__desc">
              All public URLs indexed on this site, ordered by priority. Used by search engines and AI crawlers.
            </p>
            <div class="site-header__meta">
              <span class="meta-pill">
                <span class="meta-dot"/>
                <xsl:value-of select="count(sm:urlset/sm:url)"/> URLs
              </span>
              <span class="meta-pill">XML · Sitemap 0.9</span>
            </div>
          </div>
        </header>

        <main>
          <table class="sm-table">
            <thead>
              <tr>
                <th class="col-index">#</th>
                <th class="col-url">URL</th>
                <th class="col-priority">Priority</th>
                <th class="col-freq">Frequency</th>
                <th class="col-date">Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sm:urlset/sm:url">
                <xsl:variable name="priority" select="sm:priority"/>
                <xsl:variable name="pct" select="$priority * 100"/>
                <tr>
                  <td class="td-index">
                    <xsl:value-of select="position()"/>
                  </td>
                  <td class="td-url">
                    <a href="{sm:loc}">
                      <xsl:value-of select="sm:loc"/>
                    </a>
                  </td>
                  <td class="td-priority">
                    <div class="priority-bar">
                      <div class="priority-bar__track">
                        <div class="priority-bar__fill" style="width:{$pct}%"/>
                      </div>
                      <span class="priority-bar__label"><xsl:value-of select="$priority"/></span>
                    </div>
                  </td>
                  <td class="td-freq">
                    <xsl:value-of select="sm:changefreq"/>
                  </td>
                  <td class="td-date">
                    <xsl:value-of select="substring(sm:lastmod, 1, 10)"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </main>

        <footer class="site-footer">
          <p>Generated for <a href="https://ajaypalsingh.in">ajaypalsingh.in</a></p>
          <p>XML Sitemap · Sitemaps.org Protocol 0.9</p>
        </footer>

      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
