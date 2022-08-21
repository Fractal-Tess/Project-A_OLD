## **@package/dependencies**`

---

```
    A package for centralizing and versioning external dependencies
```
---
<br>
To use, create a *.json file and define some dependencies. For example:

`kit.json`
```json
{
  "devDependencies": {
    "@sveltejs/kit": "1.0.0-next.428"
  }
}
```

Now, import this dependencies into another `package.json` under the inherits property. Example:


```json
{
  "name": "any",
  "version": "0.0.1",
  "inherits": [
    "@package/dependencies/kit.json",
  ],
  "devDependencies": {
    "@sveltejs/kit": "1.0.0-next.428",
  }
}
```

Now, anytime the install command from your package manager is ran, the preinstall script will be ran and the package-inherit cli will parse this package.json file and replace & update any packages that inherit from the defined config.