import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const Location = props => (
  <Layout>
    <h1>{props.location.name}</h1>
<p>Type: {props.location.type}</p>
    <p>Dimension: {props.location.dimension}</p>
    <h2> Residents</h2>
    {props.residents.map(resident => (
        <li key={resident.id}>
          <Link href="/character/[cid]" as={`/character/${resident.id}`}>
            <a>{resident.name}</a>
          </Link>
        </li>
      ))}
  </Layout>
);

Location.getInitialProps = async function(context) {
  const { lid } = context.query;

  const res = await fetch(`https://rickandmortyapi.com/api/location/${lid}`).then(
    (response) => {
      return response.json();
    }
  )
  const rids = [];
  for (let i = 0; i < res.residents.length; i++) {
    const resident = res.residents[i].split('/');
    rids.push(resident[resident.length-1]);
  };

  const residents_arr = await fetch(`https://rickandmortyapi.com/api/character/${rids}`).then(
    (response) => {
      return response.json();
    })

  return { location: res, residents: residents_arr };
};

export default Location;