
import './App.css';
import { Typography, Button, AppBar, Card, CardAction, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@material-ui/core"
import { PhotoCamera } from "@material-ui/icons"


const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" pharagraph>
              Hello everyone. This is the best site in the whole universe. I really hope you
              enjoy it as much I as do. Hope to see you very soon in one of our shops.
              And I am trying to make this sentence as long as I can. Pleae be patient with me.
            </Typography>
            <div>
              <Grid container spacing={2} justify="center">
                <Grid item >
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>
                <Grid item >
                  <Button variant="outlined" color="primary">
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
