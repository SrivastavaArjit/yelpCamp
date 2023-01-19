mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/navigation-day-v1", // style URL
  center: campground.geometry.coordinates, // starting position [lng, lat]
  zoom: 11.9, // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

// create the popup
var popup = new mapboxgl.Popup({
  offset: [0, -10],
  closeButton: false,
  closeOnClick: false,
}).setHTML(
  `<h6><strong>${campground.title}</strong></h6><p>${campground.location}</p>`
);
// create the marker
let marker = new mapboxgl.Marker().setLngLat(campground.geometry.coordinates);

// get the marker element
const element = marker.getElement();
element.id = "marker";
// hover event listener
element.addEventListener("mouseenter", () => popup.addTo(map));
element.addEventListener("mouseleave", () => popup.remove());

// add popup to marker
marker.setPopup(popup);
// add marker to map
marker.addTo(map);
