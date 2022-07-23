import { GetServerSideProps } from 'next';
import Image from 'next/image';
import imageLoader from '../../imageLoader';
import { Character, GetCharacterResults } from '../../types';

function CharacterPage({ character }: { character: Character }) {
  return (
    <div>
      <h1>{character.name}</h1>

      <Image
        loader={imageLoader}
        unoptimized
        src={character.image}
        alt={character.name}
        width='200px'
        height='200px'
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${context.query.id}`
  );
  const character = await res.json();
  console.log(
    'Only logged on dev terminal, NOT the browser console:',
    character
  );
  return {
    props: {
      character,
    },
  };
};

export default CharacterPage;
