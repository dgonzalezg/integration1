import Layout from '../../components/MyLayout';
import Link from 'next/link';
const Results = props => (
<Layout>
    <h1>Results</h1>
    <ul>
      {props.episodes.map(episode => (
        <li key={episode.id}>
          <Link href="/episode/[eid]" as={`/episode/${episode.id}`}>
            <a>{episode.name}</a>
          </Link>
        </li>
      ))}
      {props.characters.map(character => (
        <li key={character.id}>
          <Link href="/character/[cid]" as={`/character/${character.id}`}>
            <a>{character.name}</a>
          </Link>
        </li>
      ))}
      {props.locations.map(location => (
        <li key={location.id}>
          <Link href="/location/[lid]" as={`/location/${location.id}`}>
            <a>{location.name}</a>
          </Link>
        </li>
      ))}
    </ul>
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

Results.getInitialProps = async function(context) {
  const { query } = context.query;
  const episodes = [];
  const characters = [];
  const locations = [];
  const eids = Array.from(Array(31).keys());
  const neids = eids.map(i => {
     return i+1;
   });
   const eresponse = await fetch(`https://rickandmortyapi.com/api/episode/${neids}`).then(
     (response) => {
       return response.json();
     }
   )
   eresponse.forEach(episode => {
    if (episode.name.toLowerCase().split(' ').includes(query.toLowerCase())) {
      episodes.push(episode);
    }
  });
   const cids = Array.from(Array(493).keys());
   const ncids = cids.map(i => {
     return i+1;
   });
   const cresponse = await fetch(`https://rickandmortyapi.com/api/character/${ncids}`).then(
     (response) => {
       return response.json();
     }
   )
   cresponse.forEach(character => {
    if (character.name.toLowerCase().split(' ').includes(query.toLowerCase())) {
      characters.push(character);
    }});


  const lids = Array.from(Array(76).keys());
   const nlids = cids.map(i => {
     return i+1;
   });
   const lresponse = await fetch(`https://rickandmortyapi.com/api/location/${nlids}`).then(
     (response) => {
       return response.json();
     }
   )
   lresponse.forEach(location => {
    if (location.name.toLowerCase().split(' ').includes(query.toLowerCase())) {
      locations.push(location);
    }});
    
    


  return {episodes, characters, locations};
}

export default Results;