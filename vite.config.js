import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import Pages from 'vite-plugin-pages';
import viteImagemin from 'vite-plugin-imagemin';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers';
import compression from 'vite-plugin-compression';
import { createHtmlPlugin } from 'vite-plugin-html';

// 🔹 判斷環境
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    base: '/glassesShopVite/',
    plugins: [
      vue(),
      createHtmlPlugin({
        minify: true // 壓縮 HTML
      }),
      Components({
        resolvers: [PrimeVueResolver({ importStyle: 'css' })] // 只載入 CSS，不要完整樣式
      }),
      compression({ algorithm: 'brotliCompress' }),
      Pages(),
      visualizer({ open: true }),
      // ✅ 圖片壓縮（正式環境）
      isProduction &&
        viteImagemin({
          gifsicle: { optimizationLevel: 7 },
          optipng: { optimizationLevel: 7 },
          mozjpeg: { quality: 80 },
          webp: { quality: 80 },
          svgo: {
            plugins: [{ removeViewBox: false }]
          }
        })
    ].filter(Boolean), // 🔹 避免 `false` 進入 plugins 陣列

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },

    server: {
      port: 3000, // ✅ 設定開發伺服器 Port
      open: true, // ✅ 自動開啟瀏覽器
      host: true
    },

    optimizeDeps: {
      include: [
        'pinia',
        'axios',
        'primevue/config',
        'primevue/button',
        'vee-validate',
        '@vee-validate/rules',
        '@vee-validate/i18n',
        'vue-router',
        'swiper',
        'sweetalert2',
        'aos',
        'bootstrap',
        'fontawesome'
      ],
      exclude: ['vue'] // Vue 本身不需要 optimizeDeps，避免二次載入
    },

    build: {
      minify: 'esbuild', // ✅ 改用 esbuild，比 Terser 快
      terserOptions: {
        compress: {
          drop_console: isProduction, // ✅ 只在正式環境移除 console.log
          drop_debugger: isProduction
        }
      },
      esbuild: {
        treeShaking: true,
        drop: isProduction ? ['console', 'debugger'] : [] // 正式環境移除
      },
      cssCodeSplit: true, // 啟用 CSS 拆分，避免產生過大的單一 CSS 檔案

      assetsInlineLimit: 4096, // 小於 4KB 圖片轉成 Base64，其他外部載入

      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('pinia')) return 'pinia';
              if (id.includes('axios')) return 'axios';
              if (id.includes('primevue')) return 'primevue';
              if (id.includes('vee-validate')) return 'vee-validate';
              if (id.includes('vue-router')) return 'vue-router';
              if (id.includes('swiper')) return 'swiper';
              if (id.includes('sweetalert2')) return 'sweetalert2';
              if (id.includes('aos')) return 'aos';
              if (id.includes('bootstrap')) return 'bootstrap';
              if (id.includes('fontawesome')) return 'fontawesome';
              return 'vendor'; // 其他第三方庫
            }
          }
        }
      }
    },
    test: {
      globals: true, // 允許全域 expect()
      environment: 'jsdom', // 模擬瀏覽器環境
      coverage: {
        reporter: ['text', 'json', 'html'] // 產生測試覆蓋率報告
      }
    }
  };
});
