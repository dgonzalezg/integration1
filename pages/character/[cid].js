import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const Character = props => (
  <Layout>
    <h1>{props.character.name}</h1>
    {props.character.image ? <img src={props.character.image} /> : null}
<p>Status: {props.character.status}</p>
    <p>Specie: {props.character.species}</p>
<p>{props.character.type ? `Type: ${props.character.type}`: null}</p>
<p>Gender: {props.character.gender}</p>
<p>Origin: {props.character.origin.url ? <Link href="/location/[lid]" as={`/location/${props.origin.id}`}>
            <a>{props.character.origin.name}</a>
          </Link> : 'unkown'}</p>
<p>Location: {props.character.location.url ? <Link href="/location/[lid]" as={`/location/${props.location.id}`}>
            <a>{props.character.location.name}</a>
          </Link> : 'unkown'}</p>
      <h2>Episodes</h2>
      {props.episodes.map(episode => (
        <li key={episode.id}>
          <Link href="/episode/[eid]" as={`/episode/${episode.id}`}>
            <a>{episode.name}</a>
          </Link>
        </li>
      ))}
  </Layout>
);

Character.getInitialProps = async function(context) {
  const { cid } = context.query;

  const res = await fetch(`https://rickandmortyapi.com/api/character/${cid}`).then(
    (response) => {
      return response.json();
    }
  )
  let origin_res = null;
  if (res.origin.url) {
    origin_res = await fetch(res.origin.url).then(
      (response) => {
        return response.json();
      }
    )
  }
  let location_res = null;
  if (res.location.url) {
    location_res = await fetch(res.location.url).then(
      (response) => {
        return response.json();
      }
    )
  }

  const eids = [];

  for (let i = 0; i < res.episode.length; i++) {
    const episode = res.episode[i].split('/');
    eids.push(episode[episode.length-1]);
  };
  
  let episodes_arr = await fetch(`https://rickandmortyapi.com/api/episode/${eids}`).then(
    (response) => {
      return response.json();
    });
    if (eids.length == 1) {
      episodes_arr = [episodes_arr]
    }

  return { character: res, episodes: episodes_arr, origin: origin_res, location: location_res };
};

export default Character;