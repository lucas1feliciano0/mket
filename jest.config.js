const esModules = [
  '@react-native',
  '@expo',
  'react-native-reanimated',
  '@unimodules',
  'expo-font',
  'expo-asset',
  'expo(nent)?',
  '@expo(nent)?/.*',
  '@react-navigation/.*',
  '@unimodules/.*',
  'unimodules',
  'sentry-expo',
  'native-base',
  '@sentry/.*',
  'react-native-vector-icons',
  'react-native',
  'antd',
  '@ant-design',
  'rc-.+?',
  '@babel/runtime',
].join('|');

module.exports = {
  preset: 'react-native',
  collectCoverage: false,
  moduleDirectories: ['node_modules'],
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  setupFiles: ['<rootDir>jest.setup.js'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svg.js',
  },
};
