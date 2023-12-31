# Vue To Do

## If you have never used Vue.js, follow these steps for installation

<br>

In this project we will work with vue cli and you can follow this tutorial or check the official [documentation](https://cli.vuejs.org/guide/installation.html).

<br>

Global installation.

```sh
npm install -g @vue/cli
# Or
yarn global add @vue/cli
```

<br>

Check if the installation was successful.

```sh
vue --version
# Output
@vue/cli <*.*.*>
```

<br>

If the **command is not found**, you can fix it by following the steps below or go to this [page](https://stackoverflow.com/questions/51957631/vue-command-not-found) to find the resolution.

<br>

In the terminal paste the command below and run it

```sh
sudo nano ~/.<shell-name>rc
```

<br>

when opening it paste the following command at the end of the file

```sh
export PATH=$PATH:/Users/<user>/.npm-global/bin
# Or
export PATH=$PATH:/home/<user>/.yarn/bin
```

<br>

To save just press **Ctrl+O**, **Enter** and **Ctrl+X**, then close the terminal, open it again and run command ` vue --version`

<br>

## Creating the first project

<br>

To create a project is easy, just run the following command.

```sh
vue create <project-name>
```

<br>

Next, you will be asked a sequence of questions about the project settings, you should choose the ones that make sense for your project.

<br>

After creating the project, you can start the server just run the following command.

```sh
vue server
```

<br>

You are now ready to start developing.

<br>

## References

<br>

### Free course by Tiago Matos

  - Youtube channel : [Tiago Matos](https://www.youtube.com/@tiagomatosweb)

  - Instagram : [@tiagomatosweb](https://www.instagram.com/tiagomatosweb/)

  - Facebook : [TiagoMatos - webdeveloper](https://www.facebook.com/tiagomatosweb)

### Official documentation

  - [Vue.js](https://vuejs.org/)

  - [Vue CLI](https://cli.vuejs.org/)