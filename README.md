# MVP-shoping-experience
## Prompt

*For best shopping experience, please view this file in the browser*.

we create a full-stack application that implements several features for a commercial webpage. our app will eventually display five views or more in the future with improving feature :

1. a **Wellcome** view for wellcome page.
2. a **signIn** view for sign in the page.
3. a **productList** view for displaying all products.
4. an **AddProduct** view for adding products chossen by the user 
5. an **Summary** view to summer all information and displaying it in this component.

### our Tech Stack
- Client: our choice [ReactJs]
- Server: [NodeJS](https://nodejs.org), with the [Express](https://express.js.com) framework
- Database: [MongoDB](https://mongodb.com) with the [Mongoose](https://mongoosejs.com) ODM.
- Additional libraries and tools:
  - Client-side AJAX libraries (if and only if you're using React for your client)
    - [jQuery](https://jquery.com/), for *client-side AJAX requests only*.
    - [Axios](https://github.com/axios/axios), as an optional, promise-based alternative to  jQuery's `$.ajax`

 ### setup before you begin
 - [ ] Run `npm install` inside the `shopping-experience` directory to install dependencies.
- [ ] Ensure that the MongoDB process is running on your computer (`mongod`).
- [ ] Create the database by running `npm run db:setup`
- [ ] In `server/index.js`, uncomment the lines of code corresponding to your choice of client-side framework.
- [ ] Serve your application from the provided Node/Express web server.
- For React, start your application with two commands, `npm run dev:react` and `npm start`, in two separate terminal tabs. Our `dev:react` script makes use of Webpack. For more information about Webpack, take a look at [the Webpack Docs].

### Explaination about Project

*** user stories:**
> As user i can acces to the webpage 
>As a user i can click in the social media button and acces to the webpage account 
>As a user i can click on enter button to acces to user information
>As a user i can put all information in defferent input and click on sign in button.
>As a user when i click on signin i can access to page of all product and click on buy product to pass to another page which is add **AddProduct**
>As a user i can put all informations about the product and click to add to my purchase to save the commande and pass to the last page which is the summary page.


