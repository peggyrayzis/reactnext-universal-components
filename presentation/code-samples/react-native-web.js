const accessibility = `
const Button = ({ onPress, style, children }) => (
  <TouchableOpacity
    accessibilityRole="button"
    style={[styles.actionButton, style]}
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);
`;

const renderAgnostic = `
const MovieCard = ({ movie, children }) => {
  return (
    children &&
    React.Children.map(children, child =>
      React.cloneElement(child, {
        movie
      }),
    )
  );
};
`;

const renderAgnostic2 = `
render () {
  const { movie } = this.props;

  return (
    <MovieCard movie={movie}>
      <Poster />
      <Title />
      <Plot />
    </MovieCard>
  );
};
`;

const apollo = `
const MovieQuery = gql\`
  query Movie($id: Int!) {
    movie(id: $id) {
      title
      poster
      plot
    }
  }
\`

export default graphql(MovieQuery, {
  props: ({ data }) => {
    if(!data.movie) {
      return { loading: data.loading };
    }

    return {
      loading: data.loading,
      movie: data.movie
    };
  },
  options: ({ id }) => ({ variables: { id }})
})(MovieCard);
`;

const styling = `
/*
pass in media & orientation via a top level HOC
use react-media on web, Dimensions API & onLayout event for native
*/
const MovieCard = ({ media, orientation, children, movie, style }) => {
  const styles = styleFactory({ media, orientation });

  return (
    <View style={[styles.container, style]}>
      {children &&
        React.Children.map(children, child =>
          React.cloneElement(child, {
            movie,
            orientation,
            media
          })
        )}
    </View>
  );
};
`;

const styling2 = `
const styleFactory = ({ media, orientation }) =>
  StyleSheet.create({
    container:
      media === "desktop" || "tv"
        ? {
            // tip: reuse desktop styling for tv
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }
        : {
            // phone orientation is necessary for mobile
            flexDirection: orientation === "portrait" ? "column" : "row",
            justifyContent: "center"
          }
  });
`;

export default {
  accessibility,
  renderAgnostic,
  renderAgnostic2,
  apollo,
  styling,
  styling2,
};
