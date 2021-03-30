// index.js
var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      movies: ["Gladiator", "Inception", "Spiderman"],
      newMovie: ""
    };
  },
  methods: {
    movieCreate: function () {
      this.movies.push(this.newMovie);

    }
  }
});