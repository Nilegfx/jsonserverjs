### [Register to heroku](https://signup.heroku.com/)
_don't forget to activate your account by clicking the link they will send to your email_

### Fork this repo
```bash
git clone https://github.com/Nilegfx/jsonserverjs.git && cd jsonserverjs
```

__change the content of `db.json` file__ (Optional)

### Login to heroku
_enter your email and password_
```bash
heroku login
```

### Create a new heroku application
```bash
heroku create <<YOUR_APPLICATION_NAME_HERE>>
```

### Force heroku to install both dev and production dependencies before building [IMPORTANT]
```bash
heroku config:set NPM_CONFIG_PRODUCTION=false
```

### Push your code to heroku servers (the deployment will start automatically)
_don't forget to add and commit your changes (if any)_

```bash
git push heroku master -f
```

### Ensure that at least one process instance is running
```bash
heroku ps:scale web=1
```

### Open your app in the browser and enjoy
```bash
heroku open
```

### Check resources
```bash
curl https://jsonserverjs.herokuapp.com/posts?_embed=comments
```
