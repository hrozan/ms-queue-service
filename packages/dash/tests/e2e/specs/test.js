// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  "default e2e tests": browser => {
    browser
      .init()
      .waitForElementVisible("#app")
      .end()
  },

  "example e2e test using a custom command": browser => {
    browser
      .openHomepage()
      .end()
  }
}
