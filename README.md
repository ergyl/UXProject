# About
This project is a SPA application deployed via Netlify.

It has been developed using:
- Vue 3 (UI framework)
- Node.js (package manager)
- Vite (building tool)
- TailwindCSS (CSS styling)
- Pinia (state management)
- Vitest (unit testing)

### Data from API
This application retrieves data from the API [K-samsök](https://www.raa.se/hitta-information/k-samsok/) from Swedish National Heritage Board via a service class *Ksamsok.js*.
The data from K-samsök is used to fetch items with images, description etc for the items in the memory game.

### Stores
- backpackStore.js <-- used to store items in the backpack and keep track of the state of the backpack (if backpack is full etc.)
- gameStore.js <-- used to manage the state of the memory game, set timers and handle game logic.
- StoryStore.js <-- used to keep track of the current index of story via ArrowButton in MainLayout and feeds that state to StoryPage

## Live demo
See how it looks: [Mullward Räddar Museet](https://mullward-raddar-museet.netlify.app/).

## Screenshots
<img src="https://github.com/user-attachments/assets/4366cc94-97e0-4327-a6c0-266382d283e5" style="height: 20%; width:20%">
<img src="https://github.com/user-attachments/assets/59811d11-fcff-4afd-b81e-2667a4907f17" style="height: 20%; width:20%">
<img src="https://github.com/user-attachments/assets/7b085f90-b62a-4b4d-b004-7f9d0b6feb87" style="height: 20%; width:20%">
<img src="https://github.com/user-attachments/assets/abefb8c0-e1da-4d91-9ead-57f112f2feb7" style="height: 20%; width:20%">

## Dev enviroment 
#### Recommended IDE Setup
[VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

### Customize Vite configuration
See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project setup
Clone the git repository 
```sh
git clone https://github.com/ergyl/UXProject.git
```
Install all the necessary dependencies for the project:
```sh
npm install
```

## Developing
While developing the project use this command to compile and hot re-load for development:
```sh
npm run dev
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Compile and deploy
Run this command to compile and Minify for Production:
```sh
npm run build
```
To deploy for production we used Netlify.
You can do this in several different ways, we used dashboard on [Netlify.com](https://www.netlify.com/) and deployed the project directly via Github. 

*Optional*
<br>
You may also deploy this project from the command line with Netlify CLI.
To ensure you have the latest version of Netlify CLI installed, run this command from any directory in your terminal:
```sh
npm install netlify-cli -g
```
In the directory for your project, run the following command to create a new Netlify site:
```sh
netlify init
```

## Credits
Developed by [ergyl](https://github.com/ergyl), [ciphercraftsman](https://github.com/ciphercraftsman), [Ounch1](https://github.com/Ounch1) and with the help of UX-designer students from Yrgo, Gothenburg.
