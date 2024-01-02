import {
  Grid,
  CardMedia,
  Card,
  CardActions,
  CardContent,
  Typography,
  Link,
} from "@mui/material";

const Noticias = ({ noticia }) => {
  const { urlToImage, url, title, description, source } = noticia;

  return (
    <Grid item md={6} lg={4}>
      <Card>
        {urlToImage && (
          <CardMedia
            component="img"
            alt={`Imagen de la noticia ${title}`}
            image={urlToImage}
            height={"250"}
          />
        )}

        <CardContent>
          <Typography variant="body1" color="error">
            {source.name}
          </Typography>
          <Typography variant="body1" color="error">
            {title}
          </Typography>
          <Typography variant="body1" color="error">
            {description}
          </Typography>
        </CardContent>

        <CardActions>
          <Link
            href={url}
            target="_blank"
            variant="button"
            width={`100%`}
            textAlign={"center"}
            sx={{
              textDecoration: "none",
            }}
          >
            Leer Noticia Completa
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Noticias;
