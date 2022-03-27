module.exports = {
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
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
