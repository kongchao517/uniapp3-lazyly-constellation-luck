/*
 * @ description:
 * @ author: kongchao
 * @ created_at: 2023-05-25 16:30:49
 * @ modified_record:
 * @ modified_by: kongchao
 * @ modified_time: 2023-05-29 14:08:57
 */
import { defineConfig } from 'vite';
import { resolve } from 'path';
import uni from '@dcloudio/vite-plugin-uni';
import AutoImport from 'unplugin-auto-import/vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    AutoImport({
      dts: 'auto-imports.d.ts',
    }),
  ],
  resolve: {
    extensions: ['.js', '.vue', '.mjs'],
    alias: {
      '@': resolve(__dirname, './src'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@plugins': resolve(__dirname, 'src/plugins'),
      '@components': resolve(__dirname, 'src/components'),
      '@router': resolve(__dirname, 'src/router'),
      '@views': resolve(__dirname, 'src/views'),
      '@store': resolve(__dirname, 'src/store'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@config': resolve(__dirname, 'src/config'),
      '@api': resolve(__dirname, 'src/api'),
      '@g': resolve(__dirname, 'src/global'),
      '@page': resolve(__dirname, 'src/views/page'),
      '@static': resolve(__dirname, 'src/static'),
      '@pages': resolve(__dirname, 'src/pages'),
    },
  },
});
