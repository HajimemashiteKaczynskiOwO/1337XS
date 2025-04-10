<head>
	<link href="/fa-v6/css/fontawesome.css" rel="stylesheet" />
	<link href="/fa-v6/css/fontawesome.min.css" rel="stylesheet" />
	<link href="/fa-v6/css/brands.css" rel="stylesheet" />
	<link href="/fa-v6/css/solid.css" rel="stylesheet" />
</head>
<main>
	 <nav class="navbar sticky top-0 z-50 bg-base-300 justify-between transition-all duration-300 shadow-md">
		<!-- Logo -->
		<a class="btn btn-ghost text-lg" href="/#">
			<img alt="Logo" src="/images/crossyour.png" class="w-4" />
			1337XS 
		</a>
	
		<!-- Menu for mobile WORK ON HTIS LATER -->
		<div class="dropdown dropdown-end sm:hidden">
			<button class="btn btn-ghost">
				<i class="fa-solid fa-bars text-lg"></i>
			</button>
	
			<ul tabindex="0" class="dropdown-content menu z-[1] bg-base-200 p-4 rounded-box shadow w-64 gap-2">
				<li><a>About</a></li>
				<li><a>Team</a></li>
				<li>
					<h2 class="menu-title">Features</h2>
					<ul>
						<li><a>Tech tools</a></li>
						<li><a>Podcast</a></li>
						<li><a>Community</a></li>
					</ul>
				</li>
				<a class="btn btn-primary btn-sm">
					<i class="fa-solid fa-rocket"></i>
					Access
				</a>
			</ul>
		</div>
	
		<!-- Menu for desktop -->
		<div class="hidden sm:flex gap-2">
			<a class="btn btn-ghost btn-sm" href="/about">
				<i class="fa-solid fa-circle-info text-secondary"></i>
				About
			</a>
	
			<a class="btn btn-ghost btn-sm" href="/faq">
				<i class="fa-solid fa-users text-secondary"></i>
				FAQ
			</a>
	
			<!-- Dropdown menu -->
			<div class="dropdown dropdown-end">
				<button class="btn btn-ghost btn-sm"> 
					<i class="fa-solid fa-fire text-secondary"></i>
					Resources
					<i class="fa-solid fa-chevron-down"></i>
				</button>
	
				<ul tabindex="0" class="dropdown-content menu z-[1] bg-base-200 p-6 rounded-box shadow w-56 gap-2">
					<li><a href="security">Security</a></li>
					<li><a href="downloads">Downloads</a></li>
					<li><a href="clicker">Click TBA</a></li>
				</ul>
			</div>
			
	
			<a class="btn btn-primary btn-sm" href="/extras">
				<i class="fa-solid fa-rocket"></i>
				Extras
			</a>
		</div>
	</nav>
</main>

<script>
	import '../app.postcss';
	// Highlight JS
	import { defineConfig, searchForWorkspaceRoot } from 'vite'
	import hljs from 'highlight.js/lib/core';
	import "tailwindcss/tailwind.css";
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	
</script>

<slot />
