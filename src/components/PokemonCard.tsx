import PokemonSearch from "./PokemonSearch";
import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";

const PokemonCard = (pokemon: any) => {

    let Pokemon = pokemon.pokemon
    let pokemonName = Pokemon.name.charAt(0).toUpperCase() + Pokemon.name.slice(1)

    return (
        <>
            <div id={"pokemonContainer"}>
                <Card className={Pokemon.name}>
                    <CardMedia
                        image="./images/pokemon-banner.jpg"
                        title="Pokemon.name"
                        style={{height: 0, paddingTop: '16.25%'}}
                    />
                    <CardContent
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h2">
                            {pokemonName}
                        </Typography>
                        <Box
                            component="img"
                            sx={{
                                height: 128,
                                width: 128,
                                maxHeight: { xs: 256, md: 256 },
                                maxWidth: { xs: 256, md: 256 },
                            }}
                            alt={pokemonName}
                            src={Pokemon.sprites.front_default}
                        />
                        <Typography
                            component="p">
                            TODO
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default PokemonCard
