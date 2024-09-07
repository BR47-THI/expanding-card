const imgData = [
  {
    name: "nature1",
    src: "../images/pexels-anne-sophie-parent-1111377-2105416.jpg",
    alt: "Image 1",
  },
  {
    name: "nature2",
    src: "../images/pexels-eberhardgross-592284.jpg",
    alt: "Image 2",
  },
  {
    name: "nature3",
    src: "../images/pexels-eberhardgross-629162.jpg",
    alt: "Image 3",
  },
  {
    name: "nature4",
    src: "../images/pexels-emrecan-2189696.jpg",
    alt: "Image 4",
  },
  {
    name: "nature5",
    src: "../images/pexels-lastly-772803.jpg",
    alt: "Image 5",
  },
];

const app = Vue.createApp({
  data() {
    return {
      activeIndex: 0, // Start with the first panel as active
      imgData,
    };
  },
  methods: {
    toggleActive(index) {
      this.activeIndex = index;
      console.log("active"); // Set the clicked div as active
    },
  },
}).mount("#app");
