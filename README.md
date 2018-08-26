hyper-font-ligatures
====================

**Disclaimer**:  This plugin currently relies on a version of
[Hyper][Hyper] that is currently not released (depends on
[#3178][#3178]).

Enables [font ligatures][font ligatures] for [Hyper][Hyper]
via the [xterm-addon-ligatures][xterm-addon-ligatures] and 
[font-ligatures][font-ligatures] packages.

![](https://raw.githubusercontent.com/tolbertam/hyper-font-ligatures/master/images/preview.png)

Use fonts supporting ligatures such as [Fira Code][Fira Code],
[Hasklig][Hasklig], and [Iosevka][Iosevka] to benefit from this plugin.

## Installation

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

[font ligatures]: https://www.hanselman.com/blog/MonospacedProgrammingFontsWithLigatures.aspx
[font-ligatures]: https://github.com/princjef/font-ligatures
[xterm-addon-ligatures]: https://github.com/xtermjs/xterm-addon-ligatures
[xterm.js]: https://github.com/xtermjs/xterm.js
[Fira Code]: https://github.com/tonsky/FiraCode
[Hasklig]: https://github.com/i-tu/Hasklig
[Hyper]: https://hyper.is
[Iosevka]: https://github.com/be5invis/Iosevka
[#3178]: https://github.com/zeit/hyper/pull/3178
