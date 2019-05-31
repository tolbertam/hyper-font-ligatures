hyper-font-ligatures
====================

Enables [font ligatures][font ligatures] for [hyper 2.1+][hyper]
via the [xterm-addon-ligatures][xterm-addon-ligatures] and
[font-ligatures][font-ligatures] packages.

![](https://raw.githubusercontent.com/tolbertam/hyper-font-ligatures/master/images/preview.png)

Use fonts supporting ligatures such as [Fira Code][Fira Code],
[Hasklig][Hasklig], and [Iosevka][Iosevka] to benefit from this plugin.

## Installation

**Disclaimer**: Please note that this plugin requires hyper version 2.1.0
or later.

**Also note**: For those on hyper 3+, you must
[disable WebGL rendering](#disabling-webgl-rendering) for this
plugin to function.

### Using the built-in hyper plugin manager
```bash
$ hyper i hyper-font-ligatures
```

### Using the .hyper.js file
Open the [.hyper.js] file using your favorite text editor and edit the
plugins array to include `hyper-font-ligatures`:
```js
plugins: ['hyper-font-ligatures'],
```

### Disabling WebGL Rendering

if you are running hyper 3+, this plugin currently does not work with hyper 3
unless you disable WebGL rendering.

Note that WebGL rendering was a major performance improvement introduced
in hyper 3, by disabling it you should expect the same level of performance
seen with hyper 2.

To disable WebGL rendering, set `webGLRenderer` to `false` in the `config`
section of your
[.hyper.js] configuration file, i.e.:

```javascript
module.exports = {
  config: {
    webGLRenderer: false,
  },
  plugins: [
    "hyper-font-ligatures"
  ],
};
```

See [issue #8](https://github.com/tolbertam/hyper-font-ligatures/issues/8) and
[zeit/hyper#3607](https://github.com/zeit/hyper/issues/3607) more details.

In all cases, a 'Full Reload' (`View -> Full Reload`) is required.

[font ligatures]: https://www.hanselman.com/blog/MonospacedProgrammingFontsWithLigatures.aspx
[font-ligatures]: https://github.com/princjef/font-ligatures
[xterm-addon-ligatures]: https://github.com/xtermjs/xterm-addon-ligatures
[xterm.js]: https://github.com/xtermjs/xterm.js
[Fira Code]: https://github.com/tonsky/FiraCode
[Hasklig]: https://github.com/i-tu/Hasklig
[hyper]: https://hyper.is
[.hyper.js]: https://hyper.is/#config-location
[Iosevka]: https://github.com/be5invis/Iosevka
[#3178]: https://github.com/zeit/hyper/pull/3178
