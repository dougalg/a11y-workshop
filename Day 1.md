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

### Intro - POUR & WCAG, Setup

[Intro Slides](https://docs.google.com/presentation/d/1_JD5F-Q4AjDQKshefTboP3xaEVWwghcvhgroIgVwY0M/edit?usp=sharing)
[Minerva Blog Design on Dribbble](https://dribbble.com/shots/20214727-Minerva-Blog)
[Repo](https://github.com/dougalg/a11y-workshop/)
- Open the `a11y-day1` folder in vs-code


### Start Basic Setup

Point out editorconfig with tabs.
Show the "tab size" setting in VS Code to illustrate

- Lang in index.html (Doesn't affect Voiceover much, but affects other things like many screenreaders, and some HTML elements)
- Viewport meta tag - make sure to allow resizing. Important esp. for visually impaired users
	- Change to `width=device-width,user-scalable=no` and switch to mobile view, scaling no longer works
	- Switch back to `width=device-width, initial-scale=1.0` and now it works
- Title in index.html
- Add in the [basic landmarks](https://www.d.umn.edu/itss/training/online/structure/landmarks/):
  - Header
  - Main
  - Nav
  - Footer
  - These could be done with aria-role BUT the ideal case for a11y is to always use the correct HTML if possible as it typically has better support

#### Browser Tools

Review the a11y tree so far, with accessible names

- [Built-in a11y inspector (FF)](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/)
- [Built-in a11y inspector (Chrome)](https://developer.chrome.com/docs/devtools/accessibility/reference/)
- [Automated React a11y Checkers](https://web.dev/accessibility-auditing-react/)

### VoiceOver/Narrator/JAWS

[Windows Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1)
[MacOS VoiceOver](https://support.apple.com/en-sg/guide/mac-help/mh40578/mac)
[VoiceOver Keys](https://www.apple.com/voiceover/info/guide/_1131.html)

Use a screenreader to navigate around the landmarks. (cmd + f5) then use rotor (ctrl + opt + u)
[VoiceOver Cheatsheet](https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts)

Have others do it themselves if interested

### Flesh out Nav/Header

Get everyone to try making the header area (without the social links) in *plain HTML*.

Add H1 "Minerva"
Add nav with links within header

Review in screenreader

Show the rotor with cmd-u
- headings
- landmarks

### Aside on link styling

Show how to turn on tab into link on mac:

Keyboard Settings -> Keyboard navigation (on)

Note the default focus styles here. Most HTML is accessible BY DEFAULT

Many designers want to remove the focus styles because they show up on click. Show an example of this and how it is frustrating for KB users:

```css
*:focus {
	outline: none;
}
```

Note how this breaks the "perceivable" rule for keyboard users. They cannot know where focus is.
Some keyboard user have NO visual impairments, but have motor impairments that make using a mouse
or other pointer impossible.

### Headings

Add 3 sections and headings
- Popular Articles
- Editor&lsquo;s Choice
- Latest Posts

Add heading for nav, aria-labelled by
[screenreader-only class](https://webaim.org/techniques/css/invisiblecontent/)

In `index.css` for now

```css
.screenreader-only {
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
}
```

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
