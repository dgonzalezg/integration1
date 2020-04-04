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
        </li>
      ))}
    </ul>
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