module.exports = {
  "dataElements": {},
  "rules": [{
    "id": "RL1543428672822",
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
    "turbineBuildDate": "2018-11-28T18:11:14.277Z",
    "buildDate": "2018-11-28T18:11:14.277Z",
    "environment": "development"
  }
}