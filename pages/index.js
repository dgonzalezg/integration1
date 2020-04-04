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

  const eresponse = await fetch('https://rickandmortyapi.com/api/episode').then(
    (response) => {
      return response.json();
    }
  );
  

  
 const arr = []
 let url = 'https://rickandmortyapi.com/api/episode/';
  while (true) {
    const eresponse = await fetch(url).then(
    (response) => {
      return response.json();
    }
  );
  eresponse.results.forEach(episode => {
    arr.push(episode)
  });
  if (eresponse.info.next != '') {
    url = eresponse.info.next
  }
  else {
    break
  }
  }
  
  
  return {
    episodes: arr
  };
};

export default Index;