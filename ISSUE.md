yarn installed through brew fails while npm one works as expected

<!-- *Before creating an issue please make sure you are using the latest version of yarn.* -->

**Do you want to request a *feature* or report a *bug*?**  
**Bug** report
<!-- Is the feature a substantial feature request? Please use https://github.com/yarnpkg/rfcs -->

**What is the current behavior?**  
Running command through `pm2` that uses `yarn` as script (installed or upgraded using brew), I get the following error:

```
> /usr/local/Cellar/yarn/1.2.1/bin/yarn: 2
> PREFIX="/usr/local" exec "/usr/local/Cellar/yarn/1.2.1/libexec/bin/yarn.js" "$@"
>                     ^^^^
> SyntaxError: Unexpected identifier
>     at createScript (vm.js:80:10)
>     at Object.runInThisContext(vm.js:139:10)
>     at Module._compile (module.js:588:28)
>     at Object.Module._extensions..js(module.js:635:10)
>     at Module.load (module.js:545:32)
>     at tryModuleLoad (module.js:508:12)
>     at Function.Module._load(module.js:500:3)
>     at Object.<anonymous> (/usr/local/lib/node_modules/pm2/lib/ProcessContainerFork.js:70:21)
>     at Module._compile (module.js:624:30)
>     at Object.Module._extensions..js(module.js:635:10)
```

If `yarn` is installed globally through `npm`, no error will occur.

**If the current behavior is a bug, please provide the steps to reproduce.**
```sh
npm un -g yarn
brew install yarn
brew upgrade yarn # sometimes is needed
git clone https://github.com/fdionisi/yarn-pm2-failure \
&& cd pm2-yarn-failure \
&& npm run setup:start # yarn setup:start or (globally) pm2 start pm2.json
```

<!-- If you can, provide a link to a public repository which contains the files necessary to reproduce this. -->

**What is the expected behavior?**  
As when yarn is installed through npm, is that no error will occur.

**Please mention your node.js, yarn and operating system version.**  
Node: v8.6.0 and v8.7.0
OS: macOs 10.12.5 and 10.13
