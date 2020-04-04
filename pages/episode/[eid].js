import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const Episode = props => (
  <Layout>
    <h1>{props.episode.name}</h1>
<p>Release date: {props.episode.air_date}</p>
    <p>Episdode Code: {props.episode.episode}</p>
    <h2> Characters in this episode</h2>
    {props.characters.map(character => (
        <li key={character.id}>
          <Link href="/character/[cid]" as={`/character/${character.id}`}>
            <a>{character.name}</a>
          </Link>
        </li>
      ))}
       <style jsx>{`
  h1,
  a {
    font-family: 'Arial';
  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
    margin: 5px 0;
  }

  a {
    text-decoration: none;
    color: blue;
  }

  a:hover {
    opacity: 0.6;
  }
`}</style>
  </Layout>
);

Episode.getInitialProps = async function(context) {
  const { eid } = context.query;

  const res = await fetch(`https://rickandmortyapi.com/api/episode/${eid}`).then(
    (response) => {
      return response.json();
    }
  )
  const cids = [];
  for (let i = 0; i < res.characters.length; i++) {
    const character = res.characters[i].split('/');
    const id = character[character.length-1]
    cids.push(id);
  };
  const characters_arr = await fetch(`https://rickandmortyapi.com/api/character/${cids}`).then(
    (response) => {
      return response.json();
    })


  return { episode: res, characters: characters_arr };
};

export default Episode;