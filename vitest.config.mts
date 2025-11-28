import { defineConfig } from 'vitest/config';
import packageJson from './package.json';

export default defineConfig({
  test: {
    name: packageJson.name,
    exclude: ['./benchmarks/**/*', '.yarn/**/*'],
    coverage: {
      provider: 'istanbul',
      include: ['src/**/*'],
      exclude: ['src/compat/_internal/**/*', 'src/**/*.spec.ts'],
    },
    watch: false,
    deps: {
      optimizer: {
        ssr: {
          enabled: true,
          include: ['es-toolkit', 'es-toolkit/compat'],
        },
      },
    },
    alias: {
      'es-toolkit': 'es-toolkit-es5',
      'es-toolkit/compat': 'es-toolkit-es5/compat',
    },
  },
});
