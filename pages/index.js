import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <Layout>
    <h1>Rick and Morty Episodes</h1>
    <ul>
      {props.episodes.map(episode => (
        <li key={episode.id}>
          <Link href="/episode/[eid]" as={`/episode/${episode.id}`}>
            <a>{episode.name}</a>
          </Link>
      <p>Release Date: {episode.air_date}</p>
      <p>Episdode Code: {episode.episode}</p>
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

Index.getInitialProps = async function() {
 
 const eids = Array.from(Array(31).keys());
  const neids = eids.map(i => {
     return i+1;
   });
   const eresponse = await fetch(`https://rickandmortyapi.com/api/episode/${neids}`).then(
     (response) => {
       return response.json();
     }
   )
  
  
  return {
    episodes: eresponse
  };
};

export default Index;