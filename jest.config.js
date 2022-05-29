module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/jest/assetsTransformer.js',
    '\\.(css|less)$': '<rootDir>/jest/assetsTransformer.js',
    '^src(.*)$': '<rootDir>/src$1',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^screens(.*)$': '<rootDir>/src/screens$1',
    '^shared(.*)$': '<rootDir>/src/shared$1',
    '^types(.*)$': '<rootDir>/src/types$1',
    '^assets(.*)$': '<rootDir>/src/assets$1'
  },
  setupFiles: ['<rootDir>/jest/setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)'
  ]
};
