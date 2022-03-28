const constants = require("./constants.js");
const delay = 5000;
const scenarios = [];

constants.paths.map(paths =>{ 
    scenarios.push ({
        label: paths,
        cookiePath: "backstop_data/engine_scripts/cookies.json",
        url: `${constants.mainURL}${paths}`,
        referenceUrl: "",
        readyEvent: "",
        readySelector: "",
        delay: delay,
        hideSelectors: [],
        removeSelectors: [],
        hoverSelector: "",
        clickSelector: "",
        postInteractionWait: 0,
        selectors: [],
        selectorExpansion: true,
        expect: 0,
        misMatchThreshold: 0.1,
        requireSameDimensions: true,
    });
});

module.exports = {
    id: constants.projectID,
    viewports: [
      {
        label: "phone",
        width: 320,
        height: 480
      },
      {
        label: "tablet",
        width: 1024,
        height: 768
      }
    ],
    onBeforeScript: "puppet/onBefore.js",
    onReadyScript: "puppet/onReady.js",
    scenarios,
    paths: {
      bitmaps_reference: "backstop_data/bitmaps_reference",
      bitmaps_test: "backstop_data/bitmaps_test",
      engine_scripts: "backstop_data/engine_scripts",
      html_report: "backstop_data/html_report",
      ci_report: "backstop_data/ci_report"
    },
    report: ["browser"],
    engine: "puppeteer",
    engineOptions: {
      args: ["--no-sandbox"]
    },
    asyncCaptureLimit: 5,
    asyncCompareLimit: 50,
    debug: false,
    debugWindow: false
  };
  