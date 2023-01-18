const mongoose = require("mongoose");
const Campground = require("../models/campGround");
const { descriptors, places } = require("./seedHelper");
const cities = require("./cities");
const { create } = require("../models/campGround");
const fetch = require("node-fetch");

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error!"));
db.once("open", () => {
  console.log("Database Connected");
});

const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randPrice = Math.floor(Math.random() * 20) + 10;

const url = fetch(
  "https://api.unsplash.com/photos/random/?client_id=5toU-KdEw7KxDg8HD_Vf3kMC-oBkqtOwiVJGwqMJ0xA&collections=o_hBYaHI2OU"
)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    return data.urls.small;
  });

const createDocument = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 60; i++) {
    const selectedCity = sample(cities);
    const camp = new Campground({
      author: "63c19d760cb8028cd7aa6629",
      title: `${sample(descriptors)} ${sample(places)}`,
      location: `${selectedCity.city}, ${selectedCity.state}`,
      geometry: {
        type: "Point",
        coordinates: [selectedCity.longitude, selectedCity.latitude],
      },
      image: [
        {
          url: "https://images.unsplash.com/photo-1673982136691-aea2191ab896?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
          filename: "YelpCamp/zboqxit4s1dvybvz08xt",
        },
        {
          url: "https://images.unsplash.com/photo-1673851333207-48dc3062d085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
          filename: "YelpCamp/ctx90ieajq6dzy3fj9qr",
        },
        {
          url: "https://images.unsplash.com/photo-1673981171917-5ab6c7438ed7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
          filename: "YelpCamp/s26sdor4yiacep68gqfe",
        },
        {
          url: "https://images.unsplash.com/photo-1673981171900-020cb6983841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1221&q=80",
          filename: "YelpCamp/cvz68bfz54ymcti7bxue",
        },
        {
          url: "https://images.unsplash.com/photo-1674020539271-6f24f97091d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
          filename: "YelpCamp/eoorv0qdqzdychjrapqo",
        },
      ],
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Quasi exercitationem, repellendus soluta ex vero quidem explicabo totam dolorem accusantium corporis architecto vitae perspiciatis iure quod rem, dolor reprehenderit! Culpa, iste! Optio laborum quam velit omnis! Vel officia vitae cupiditate voluptatem quos atque repellendus omnis, voluptates, placeat repudiandae odit dolorum molestias sequi tempore dignissimos consequuntur possimus labore quisquam maxime eveniet deserunt? Debitis officiis eveniet sit? Quaerat soluta accusantium inventore non eaque similique in labore minus beatae corrupti accusamus, tenetur omnis exercitationem, possimus quia.Ad soluta minus consequatur excepturi, quis quod ducimus?",
      price: randPrice,
    });
    await camp.save();
  }
};

createDocument().then(() => {
  mongoose.connection.close();
});
