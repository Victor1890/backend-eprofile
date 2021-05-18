
# API for eProfile

## Installations

It is necessary to have software or settings already preset on your PC.

### Technologies

* [Node and NPM](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)
* [ExpressJs](https://expressjs.com/)
* [JWT](https://jwt.io/)
* [VS Code](https://code.visualstudio.com/)

### Clone project

```bash
git clone https://github.com/Victor1890/backend-eprofile.git
```

```bash
cd backend-eprofile
```

if not have [Nodemon](https://www.npmjs.com/package/nodemon) install in your PC.

```bash
npm install -g nodemon
```

```bash
npm install && npm run dev
```

## Routes

Using VSCode, open the files `src/routers/auth.routes.js` to be able to edit or add new functionalities.

```js
router.post(
  "/signup",
  [verifySignUp.checkDuplicateNickName, verifySignUp.checkDuplicateUserEmail],
  userCtrl.signUp,
);

router.post("/signin", userCtrl.signIn);

router.get("/:id", userCtrl.getUserById);
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
