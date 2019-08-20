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
    movie: React.PropTypes.object.isRequired
  },
  render: function() {
    var movie = this.props.movie;
    return React.createElement(
      "li",
      { className: "card" },
      React.createElement(MovieImage, { img: movie.img }),
      React.createElement(MovieTitle, { title: movie.title }),
      React.createElement(MovieDesc, { desc: movie.desc })
    );
  }
});

var MovieImage = React.createClass({
  propTypes: {
    src: React.PropTypes.string
  },
  render: function() {
    return React.createElement("img", {
      src: this.props.img
    });
  }
});

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  render: function() {
    return React.createElement("h2", {}, this.props.title);
  }
});

var MovieDesc = React.createClass({
  propTypes: {
    desc: React.PropTypes.string
  },
  render: function() {
    return React.createElement("p", {}, this.props.desc);
  }
});

var MoviesList = React.createClass({
  render: function() {
    var moviesElements = movies.map(function(movie) {
      return React.createElement(Movie, { key: movie.id, movie: movie });
    });
    return React.createElement(
      "div",
      {},
      React.createElement("h1", {}, "List of films"),
      React.createElement("ul", {}, moviesElements)
    );
  }
});

var element = React.createElement(MoviesList);
ReactDOM.render(element, document.getElementById("app"));
