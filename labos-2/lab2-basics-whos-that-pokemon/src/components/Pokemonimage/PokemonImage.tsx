interface PokemonImageProps {
  id: number;
  visible: boolean;
  size?: string;
}

const PokemonImage = ({id, visible, size = "16"}: PokemonImageProps) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <>
      <img
        style={{
          ...(visible ? {} : {filter: "brightness(0)"}),
          //   filter: visible ? "none" : "brightness(0)",
          width: `${size}rem`,
        }}
        src={imgUrl}
        alt="pokemon"
      />
    </>
  );
};

export default PokemonImage;
