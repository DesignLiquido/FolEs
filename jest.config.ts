import type {Config} from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    modulePathIgnorePatterns: ["<rootDir>/dist/"],
    preset: 'ts-jest',
    testEnvironment: 'node',
    coverageReporters: ['json-summary', 'text', 'text-summary', 'lcov']
  };
};
