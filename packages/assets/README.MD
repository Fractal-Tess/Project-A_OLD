## **@package/assets**

```
    Host all static assets in this folder and then import them wherever they are needed. 
```

Example:

```
./logo.png
```


And now import it into the desired file like so:

```ts
import logo from '@package/assets/logo.png'

<img src={logo} />
```

When the app is built, the used static files will be copied over (and in the case of vite plugins - they will also be parsed and transformed) into the build/dist directory of the output build command.


