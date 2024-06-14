# ⛺ YelpCamp

## 📷 Screenshots

## 💡 Lessons Learned / Technologies Used

- MVC (Model-View-Controller) architecture to achieve seperation of concerns and maintain independence in relation to backend/frontend services.
- [Express.js](https://github.com/expressjs/express) minimal, unopinionated backend framework to keep serverside boilerplate as low as possible. Especially useful for learning how to piece different technologies together to develop a complete backend.
- [Express-Session](https://github.com/expressjs/session) to learn how cookies work to deliver a rich user experience through client and serverside cookies.
- [Passport.js](https://github.com/jaredhanson/passport) for authentication and authorization.
- [MongoDB](https://github.com/mongodb/mongo) as the primary NoSQL database to store campgrounds, users, reviews and session details.
- [Mongoose](https://github.com/Automattic/mongoose) as an ORM(Object relation mapping) library to interact with MongoDB.
- [Cloudinary](https://github.com/cloudinary/cloudinary_npm) to store images of campgrounds when users create new campgrounds, and to optimize them for when client-side requests them.
- [Mapbox](https://github.com/mapbox/mapbox-gl-js) to deliver an interactive map for users to visually see the location of campgrounds through a cluster map and a zoomed in map for each campground.
- [EJS (Embedded JavaScript Templates)](https://github.com/mde/ejs) as a templating language to create dynamic user experices.
- [Bootstrap](https://github.com/twbs/bootstrap) as the driving CSS framework to create visually appealing user experiences.
- Render to host the complete application

## 🚀 Getting Started

### To run this project on your system:

Create an .env file and add values to the following variables:

```
CLOUDINARY_CLOUD_NAME=<Your Cloudinary cloud name>
CLOUDINARY_KEY=<Your Cloudinary key>
CLOUDINARY_SECRET=<Your Cloudinary secret>
MAPBOX_TOKEN=<Your Mapbox token>
DB_URL=<Your MongoDB atlas URL or local MongoDB URL>
```

Make sure you have [MongoDB](https://docs.mongodb.com/manual/installation/) installed on your system
In a terminal window, initialize a MongoDB Database

```
$ ./mongod
```

In a second terminal window, access the MongoDB Database with Mongoose

```
$ mongoose
```

In a third terminal window, install dependencies using npm:

```
$ npm install
```

And then run the application with

```
$ npm start
```

or for hot reloading (recommended)

```
$ nodemon app.js
```
