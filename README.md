# Marvel character listing app

This app lists many marvel characters with its detail. The app is responsive and expected to have more features in the future.

## Folder structure

- [apis/](.\src\apis) : Contains all api functions
- [components/](.\src\components) : all single components
  - [abstracts/](.\src\components\abstracts) : components oftenly customized
- [hooks/](.\src\hooks) : hooks
- [pages/](.\src\pages) : Components allocated its own route
- [routes/](.\src\routes) : declare routes
- [store/](.\src\store) : redux store
- [styles/](.\src\styles) : styles
- [utils/](.\src\utils) : common util functions

## Stacks

The app is created from scratch, with React mainly.

## Instruction

You can clone the repository and run on the device to try the app.

```
git clone https://github.com/mokuzuu/marvel-app.git
cd marvel-app
yarn
yarn start
```

Once the app starts, you can see the list of marvel characters with their summary.

In order to see their detail, tap one of a list. It will fetch character information and display on the side of screen (if the window is mobile size, it opens new page).
