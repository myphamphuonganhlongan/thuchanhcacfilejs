(function() {
  var schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Tên Blog Của Bạn",
    "alternateName": "Tên Viết Tắt Của Blog",
    "url": "https://blogspot.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://blogspot.comsearch?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  var script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schemaData);
  document.head.appendChild(script);
})();
