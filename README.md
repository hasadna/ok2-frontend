# ok2-frontend

This is the frontend of Open Knesset v2.0 repository.
Below you will find some information about the project, how to install it locally, and the basics.

## What is it about? 📢

You can read more about the general idea in this document [כנסת פתוחה הדור הבא](https://github.com/hasadna/ok2-frontend/blob/master/about.pdf)

- The UX was made in Axure you can view it [here](https://ube8fw.axshare.com/#id=rvs78r&p=%D7%A9%D7%90%D7%99%D7%9C%D7%AA%D7%94_%D7%93%D7%97%D7%95%D7%A4%D7%94&g=1).

- 🌈 Design made in Figma check it out this [link](https://www.figma.com/file/ViuyaMIcQXaloTFflIFMhw/Current%2FOK2-Website-Initial?node-id=0%3A1) 🌈.

Please, feel free to add an issue if you have anything to suggest or comment on.


## Project Setup

### The Basics
- **JS framework**: This project made with [nuxt](https://nuxtjs.org/) on top of Vue JS as our framework of choice.
For the state management (pattern + library) [Vuex](https://vuex.vuejs.org) was used. Make sure to pay attention to this framework and project naming convention, for example: camelCase for functions and TitleCase for Vue files.  

- **Styling**: A lot of effort was made on the [UX/UI](https://www.figma.com/files/team/821310522712071982/Open-Knesset-2.0) part of the app while trying to keep the general look-and-feel across the site. We used [ Vuetify
](https://vuetifyjs.com/en/getting-started/quick-start/)UI library, so take advantage of their components and style before writing your own. Also, Vuetify and the project itself have many *CSS class utility* options that you can use.
      As a rule of thumb: 👏Write as little CSS as possible👏, none will be perfect.

- **Other technologies**: *TypeScript* and *Scss* was used so that you can go ahead and benefit from their awesome features. 


### 👩‍💻 Local development and how to launch the server 

#### Client-side:
1. clone or fork this repo to your machine and make sure you have [nodeJs](https://nodejs.org/en/) (12^) installed.
1. ````npm install```` 
1. ````npm run dev````

If you are using VS code for writing Javascript it will help you to add these extensions: 
- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- ESLint (it has Beautify inside so don't install that extension or otherwise you will have conflicts) 
- Also you can add [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en) in your browser 

#### Server-side
1. Make sure you installed python and add it to your PATH
1. Clone backend [repository](https://github.com/hasadna/ok2-backend)
1. Run in the ok2-backend folder:
- ````pip install -r requirements.txt```` (only once after pull)
- ````manage.py migrate```` to install database (only once after pull)
- ````manage.py runserver```` (to run localhost 8000 as)

### Contribute:

We would love ❤️️ to hear from you in the issues section or by mail to one of the current contributors.

**Before a pull request**:
1. Make sure the project is lint correctly and passed the type checked: ````npm run quality````
1. The project can be built: ````npm run build```` 
1. Ask for a code review.





![OK2](https://raw.githubusercontent.com/hasadna/ok2-frontend/master/assets/images/ok.png)
