import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080'
  },
  component: {
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
    devServer(cypressConfig, devServerConfig) {
      // return devServer instance or a promise that resolves to
      // a dev server here
      return {
        port: 1234,
        close: () => {}
      }
    }
  }
})
