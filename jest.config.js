module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/*.spec.tsx',
    '!src/**/*.stories.tsx',
    '!src/**/_app.tsx',
    '!src/pages/**/*',
    '!src/**/_document.tsx',
    '!src/styles/**.ts',
  ],
};
