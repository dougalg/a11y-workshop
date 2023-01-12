## Goals

1. Intro to basic a11y concepts
1. Create a new Vite React App
1. Set up the basic HTML to support the site layout
1. Minimal styling

## Helpful links

1. [POUR](https://equalizedigital.com/web-accessibility-p-o-u-r-acronym/)
2. [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/)\
3. [WCAG 2.2](https://www.w3.org/TR/WCAG22/#new-features-in-wcag-2-2)
4. [Headings with Context API](https://beta.reactjs.org/learn/passing-data-deeply-with-context)
5. [FF a11y inspector](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/)
6. [Chrome a11y tools](https://developer.chrome.com/docs/devtools/accessibility/reference/)
7. [Landmarks Reference](https://www.d.umn.edu/itss/training/online/structure/landmarks/)
8. [WAI Tutorials](https://www.w3.org/WAI/tutorials/)
9. [Screenreader CSS Help](https://webaim.org/techniques/css/invisiblecontent/)

## Walkthrough

### Review POUR & WCAG

[Intro Slides](https://docs.google.com/presentation/d/1KKHwTzK5BJMxC-48WsFxMEaNF4IR_77GaxriiQAoL6U/edit?usp=sharing)

#### Automated Checking

- [Built-in a11y checker (FF)](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/)
- [Built-in a11y checker (Chrome)](https://developer.chrome.com/docs/devtools/accessibility/reference/)
- [Automated React a11y Checkers](https://web.dev/accessibility-auditing-react/)

Automated checking IS NOT sufficient

Set formatter to ESLint in vscode, and in json settings for vscode enable:

```json
  "eslint.format.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
```

Point out editorconfig with tabs.
Show the "tab size" setting in VS Code to illustrate

### Start Basic Setup

- Lang in index.html
- Title in index.html to "Minerva"
- Add in the [basic landmarks](https://www.d.umn.edu/itss/training/online/structure/landmarks/):
  - Header
  - Main
  - Nav
  - Footer
  - These could be done with aria-role BUT the ideal case for a11y is to always use the correct HTML if possible as it typically has better support

Use VoiceOver to navigate around the landmarks. (cmd + f5) then use rotor (ctrl + opt + u)
[VoiceOver Cheatsheet](https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts)

### Nav styling

Show how to turn on tab into link on mac:

Keyboard Settings -> Keyboard navigation (on)

Note the default focus styles here. Most HTML is accessible BY DEFAULT

### Headings

Add 3 sections and headings

Add heading for nav, aria-labelled by
[screenreader-only class](https://webaim.org/techniques/css/invisiblecontent/)

Review in voiceover

- ctrl+alt + cmd + h to navigate by headings

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
