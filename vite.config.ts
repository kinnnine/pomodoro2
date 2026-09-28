import { paraglideVitePlugin } from '@inlang/paraglide-js'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [paraglideVitePlugin({
        project: './project.inlang',
        outdir: './src/paraglide',
        strategy: ["localStorage", "cookie", "baseLocale"],
        emitTsDeclarations: true,
        emitReadme: false
    }),
    tailwindcss()
    ],
});