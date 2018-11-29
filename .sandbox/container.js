module.exports = {
  "dataElements": {},
  "rules": [{
    "id": "RL1543519816924",
    "actions": [{
      "modulePath": "qualtrics-site-intercept/src/lib/actions/loadZoneCode.js",
      "settings": {
        "zoneCode": "",
        "organizationId": ""
      }
    }],
    "events": [{
      "modulePath": "sandbox/pageTop.js",
      "settings": {}
    }],
    "name": "load zone"
  }],
  "extensions": {},
  "property": {
    "settings": {}
  },
  "buildInfo": {
    "turbineVersion": "25.1.3",
    "turbineBuildDate": "2018-11-29T19:57:44.083Z",
    "buildDate": "2018-11-29T19:57:44.083Z",
    "environment": "development"
  }
}