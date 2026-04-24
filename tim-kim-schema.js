(function() {
  var schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "mỹ phẩm chính hãng long an",
    "alternateName": "mpchla",
    "url": "https://myphamchinhhanglongan.blogspot.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://myphamchinhhanglongan.blogspot.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  var script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schemaData);
  document.head.appendChild(script);
})();
