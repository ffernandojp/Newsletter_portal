import useNoticias from "../hooks/useNoticias";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Pagination } from "@mui/material";

import Noticias from "./Noticia";

const ListadoNoticias = () => {
  const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias();

  const totalPaginas = Math.ceil(totalNoticias / 20);

  return (
    <>
      <Typography textAlign={"center"} margin={5} variant="h3" component={"h2"}>
        Ultimas Noticias
      </Typography>

      <Grid container spacing={2}>
        {noticias.map((noticia) => (
          <Noticias key={noticia.url} noticia={noticia} />
        ))}
      </Grid>

      <Pagination
        count={totalPaginas}
        page={pagina}
        onChange={handleChangePagina}
        color="primary"
        size="large"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      />
    </>
  );
};

export default ListadoNoticias;
