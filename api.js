const LATEST_API_VERSION = "0.2.0";

var apiVersions = {};

apiVersions["0.2.0"] = {

  VERSION: "0.2.0",

  /* Return a link to view the page */
  getViewLink: function(pageData, papaData = null) {
    var urlData = {
      version: this.VERSION,
      compressed: false,
      body: pageData,
    };

    const hashObject = b64.encode(JSON.stringify(urlData));
    let link = `http://jstrieb.github.io/urlpages/#main=${hashObject}`;

    if (papaData) {
      const papaEncoded = b64.encode(papaData);
      link += `&papa=${papaEncoded}`;
    }

    return link;
  },

  /* Return the page data from the object */
  decode: function(urlData) {
    return urlData.body;
  },

}

apiVersions["0.0.1"] = {

  VERSION: "0.0.1",

  /* Return a link to view the page */
  getViewLink: function(pageData) {
    return `http://jstrieb.github.io/urlpages/#${b64.encode(pageData)}`;
  },

}
