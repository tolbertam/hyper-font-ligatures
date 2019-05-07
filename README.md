hyper-font-ligatures
====================

Enables [font ligatures][font ligatures] for [Hyper 2.1+][Hyper]
via the [xterm-addon-ligatures][xterm-addon-ligatures] and 
[font-ligatures][font-ligatures] packages.

![](https://raw.githubusercontent.com/tolbertam/hyper-font-ligatures/master/images/preview.png)

Use fonts supporting ligatures such as [Fira Code][Fira Code],
[Hasklig][Hasklig], and [Iosevka][Iosevka] to benefit from this plugin.

## Installation

**Disclaimer**: Please note that this plugin requires Hyper version 2.1.0
or later.

**Also note** that this plugin currently does not work with Hyper 3.  See
[issue #8](https://github.com/tolbertam/hyper-font-ligatures/issues/8) for
more details.


### Using the built-in Hyper plugin manager
```bash
$ hyper i hyper-font-ligatures
```

### Using the .hyper.js file
Open the `~/.hyper.js` file using your favorite text editor and edit the
plugins array to include `hyper-font-ligatures`:
```js
plugins: ['hyper-font-ligatures'],
```

In both cases, a 'Full Reload' (`View -> Full Reload`) is required.

[font ligatures]: https://www.hanselman.com/blog/MonospacedProgrammingFontsWithLigatures.aspx
[font-ligatures]: https://github.com/princjef/font-ligatures
[xterm-addon-ligatures]: https://github.com/xtermjs/xterm-addon-ligatures
[xterm.js]: https://github.com/xtermjs/xterm.js
[Fira Code]: https://github.com/tonsky/FiraCode
[Hasklig]: https://github.com/i-tu/Hasklig
[Hyper]: https://hyper.is
[Iosevka]: https://github.com/be5invis/Iosevka
[#3178]: https://github.com/zeit/hyper/pull/3178
