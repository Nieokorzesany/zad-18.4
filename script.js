var movies = [
  {
    id: 1,
    title: "Harry Potter",
    desc: "film o czarodzieju",
    img: "https://ssl-gfx.filmweb.pl/po/05/71/30571/7529392.6.jpg"
  },
  {
    id: 2,
    title: "Król Lew",
    desc: "Film o królu sawanny",
    img:
      "https://www.glamour.pl/media/cache/default_view/uploads/media/default/0004/15/krol-lew-sprawdzcie-czyim-glosem-beda-mowic-postacie-w-polskiej-wersji-filmu.jpeg"
  }
];

//var element = React.createElement(
// "div",
// {},
// React.createElement("h1", {}, "Lista filmów"),
//React.createElement("ul", {}, moviesElements)
//);

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },

  render: function() {
    movies.map(function(movie) {
      return React.createElement(
        "li",
        { key: movie.id, className: "card" },
        React.createElement("h2", {}, this.props.movie.title),
        React.createElement("img", {
          src: this.props.movie.img
        }),
        React.createElement("p", {}, this.props.movie.desc)
      );
    });
  }
});

var element = React.createElement(Movie, { movies: movies });

ReactDOM.render(element, document.getElementById("app"));
