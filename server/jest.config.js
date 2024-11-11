module.exports = {
    preset: 'ts-jest',       // Tells Jest to use ts-jest for TypeScript files
    testEnvironment: 'node', // Use Node.js environment for testing
    transform: {
      '^.+\\.tsx?$': 'ts-jest', // Transform TypeScript files with ts-jest
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
    testMatch: ['**/*.test.ts', '**/*.test.tsx'], // Specify which files Jest should look for
  };
  