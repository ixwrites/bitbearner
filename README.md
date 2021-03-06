# Bitbearner
 A converter tool for the game, [Bitburner](https://danielyxie.github.io/bitburner/) - converts scripts from `NS1` to `NS2` or vice versa.

No more tiresome manual addition/deletion of `ns.` and `await`!

- [Bitbearner](https://bitbearner.netlify.app/) is intended, mostly, for new players of Bitburner, who used `ns1` when starting out and now wants to switch to `ns2`.
- It can also be used when helping new players who are using `ns1`.

## How to use
First, head over to https://bitbearner.netlify.app/

Then, paste your script in the textarea:
```js
//Your code goes here
```

Note: Avoid using `.ns` extension for your scripts, since it's already deprecated.

If you've manually updated some parts in your script from `ns1` to `ns2`, it would be better to convert it first from `ns2` to `ns1` before proceeding to convert it completely to `ns2`.

Bitbearner works essentially, by simply adding/deleting `ns.` in every Netscript functions. It also adds/deletes `await` if necessary. Lastly, it will automatically wrap the whole script inside the `main(ns) function`.

Feel free to use and reuse anything in this tool.

## Limitations & stuff to improve

- The NS2 => NS1 converter is a basic converter made for simple scripts only.

These will have to be changed manually:
- deletion of `import` and `export` when converting NS2 to NS1
- wrapping of additional `async functions`

Note that only the first and main `export async function main(ns)` will be handled in the conversion.

TODO:
- Add a syntax highlighter

If you have found bugs/ have suggestions or ideas, please feel free to let me know about it or by opening a [Github issue](https://github.com/ixwrites/bitbearner/issues).

## Resources
If you're interested to learn more about Netscript, check out the ff:
- [Ralic's NS1-to-NS2 Guide](https://github.com/xRalic/NS1-to-NS2-Guide)
- [Bitburner's documentation](https://bitburner.readthedocs.io/en/latest/)
- [List of Netscript functions](https://github.com/danielyxie/bitburner/blob/dev/markdown/bitburner.ns.md)

## Special thanks
Huge thanks to @lethern for providing all the RegEx needed to make the tool perform much better!
And special thanks to everyone in the [Discord channel](https://discord.gg/TFc3hKD) for providing advice and support, I keep learning new things from y'all!