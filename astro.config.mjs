import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Plac Docs',
			social: {
				github: 'https://github.com/PierrePineau/plac-doc',
			},
			sidebar: [
				{
					label: 'Installation',
					autogenerate: { directory: 'installation' },
					badge: { text: 'DEV', variant: 'note' }
				},
                {
					label: 'Plac API',
                    collapsed: true,
					autogenerate: { directory: 'api' },
					badge: { text: 'DEV', variant: 'note' }
				},
                {
					label: 'Plac App',
                    collapsed: true,
					autogenerate: { directory: 'app' },
					badge: { text: 'DEV', variant: 'note' }
				},
				// {
				// 	label: 'Guides Utilisateurs',
				// 	badge: { text: 'User', variant: 'caution' },
                //     collapsed: true,
                //     items: [
                //         {
                //             label: 'Introduction',
                //             link: '/guides/',
                //         },
                //         {
                //             label: 'Interface Admin',
                //             collapsed: true,
                //             autogenerate: { directory: 'guides/admin' }
                //         },
                //         {
                //             label: 'Interface App',
                //             collapsed: true,
                //             autogenerate: { directory: 'guides/app' },
                //         },
                //     ]
				// },
			],
		}),
	],
});
