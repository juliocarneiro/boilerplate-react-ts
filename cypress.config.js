import { defineConfig } from 'cypress'

export default defineConfig({
  video: false,
  e2e: {
    baseUrl: 'http://localhost:5173'
  },
  component: {
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    devServer(cypressConfig, devServerConfig) {
      return {
        port: 1234,
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        close: () => {}
      }
    }
  }
})
