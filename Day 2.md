## Goals



## Helpful links

1. [WAI Tutorials](https://www.w3.org/WAI/tutorials/)

## Walkthrough

### Start Basic Setup

Point out editorconfig with tabs.
Show the "tab size" setting in VS Code to illustrate

### Generalize Headings

Create /components/Heading/\*

### Footer

Install icons

```
yarn add @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons
```

Set up footer subsections

Review with screenreader
Show it with manually removed aria-hidden
Add aria-label, and check again, show it doesn't work
add screenreader-only text

### Skip Links

To help users access the main content faster we'll add a skip link

- add skip link href="#main", "Skip to main content"
- add id to main
- extract id into parent, use props to pass it down. Ensures that there is no breakage if someone changes it. Alternately, could be a const variable import as well.
- css to hide it, except when focused

```css
.skip-link:focus {
	position: static;
	top: 0;
	left: 0;
	/* Undo screenreader-only styles */
	clip: revert;
	clip-path: revert;
	height: revert;
	width: revert;
	margin: revert;
	overflow: revert;
	padding: revert;
}
```

### Base styling

Set to:

```css
:root {
	/** Light Theme (Default) **/
	/** Text **/
	--high-contrast-text: #555;
	--low-contrast-text: #777;
	--surface-default: #eee;
}

/** Dark Theme **/
@media (prefers-color-scheme: dark) {
	:root {
		/** Text **/
		--high-contrast-text: #aaa;
		--low-contrast-text: #888;
		--surface-default: #222;
	}
}

:root {
	color: var(--low-contrast-text);
	background-color: var(--surface-default);
}
```

Examine values in the inspector. Show how small and large text evaluate differently.

Fix the colours and test both light and dark.

```css
:root {
	/** Light Theme (Default) **/
	/** Text **/
	--high-contrast-text: #333;
	--low-contrast-text: #444;
	--surface-default: #eee;
}

/** Dark Theme **/
@media (prefers-color-scheme: dark) {
	:root {
		/** Text **/
		--high-contrast-text: #e8e8e8;
		--low-contrast-text: #ccc;
		--surface-default: #222;
	}
}

:root {
	color: var(--high-contrast-text);
	background-color: var(--surface-default);
}
```
