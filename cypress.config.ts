import { defineConfig } from 'cypress'

export default defineConfig({
  video: false,
  e2e: {
    baseUrl: 'http://localhost:5173'
  },
  component: {
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
    devServer(cypressConfig, devServerConfig) {
      return {
        port: 1234,
        close: () => {}
      }
    }
  }
})
