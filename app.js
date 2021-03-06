class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  async willReady() {
    await this.app.model.sync({ force: true });
  }
}

module.exports = AppBootHook;
