
import './App.css';
import { Typography, Button, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@material-ui/core"
import { PhotoCamera } from "@material-ui/icons"
import useStyles from "./styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]




const App = () => {
  const classes = useStyles()
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm" >
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" pharagraph>
              Hello everyone. This is the best site in the whole universe. I really hope you
              enjoy it as much I as do. Hope to see you very soon in one of our shops.
              And I am trying to make this sentence as long as I can. Pleae be patient with me.
            </Typography>
            <div className={classes.buttons}>
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
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://th.bing.com/th/id/OIP.77Cxz_Ts-SsoqSJ8JN5KQAHaEo?pid=ImgDet&rs=1"
                    title="Image title" />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card, you can use this section to describe the content
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">View</Button>
                    <Button size="small" color="primary">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
            }
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h5" align="center" gutterButton>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondory" >
          This is a very long description now
        </Typography>

      </footer>
    </>
  );
}

export default App;
