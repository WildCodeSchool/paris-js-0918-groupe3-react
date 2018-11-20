# paris-js-0918-groupe3-react


## Branches

Pensez à faire un 
```
git checkout -b dev 
git push origin dev
``` 
pour initialiser votre `dev`.  

## React

La racine de votre repository doit avoir le dossier `public` et `src`, il ne faut pas que vous ayez un dossier avant.  

* Si vous avez _clone_ le projet et que vous avez fait un `create-react-app` à l'intérieur, pensez donc à remonter l'ensemble de vos dossiers dans le dossier parent. 
* Si vous n'avez pas _clone_ le projet, faites votre `create-react-app` et faites un `git remote add origin [url du repo]`. Vous aurez sûrement un `git pull` à faire avant votre premier _push_.

Poussez ce code sur une branche `start` et faites une _pull_ _request_ vers la branche `dev` pour que tout le monde parte de la même base. 




## Eslint 

Depuis la version 2 du `create-react-app`, il n'est désormais plus nécessaire d'installer eslint, tout est déjà disponible. 
Pour l'activer avec les conventions `Airbnb` il faut modifier le fichier `package.json` avec :

```
{
  
  ...

  "eslintConfig": {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
      "react/jsx-filename-extension": [
        "js",
        "jsx"
      ]
    }
  },

  ...

}
```
