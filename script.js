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

var Movie = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired
  },

  render: function() {
    return React.createElement(
      "div",
      {},
      this.props.movies.map(function(movie) {
        return React.createElement(
          "li",
          { key: movie.id, className: "card" },
          React.createElement("h2", {}, movie.title),
          React.createElement("img", {
            src: movie.img
          }),
          React.createElement("p", {}, movie.desc)
        );
      })
    );
  }
});

var element = React.createElement(Movie, { movies: movies });
ReactDOM.render(element, document.getElementById("app"));
