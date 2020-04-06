import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import { api_url } from '../../pages/index'

const Location = props => (
  <Layout>
    <h1>{props.location.name}</h1>
<p>Type: {props.location.type}</p>
    <p>Dimension: {props.location.dimension}</p>
    <h2> Residents</h2>
    { props.residents[0] ? props.residents.map(resident => (
        <li key={resident.id}>
          <Link href="/character/[cid]" as={`/character/${resident.id}`}>
            <a>{resident.name}</a>
          </Link>
        </li>
      )): 'No residents in this planet'}
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

Location.getInitialProps = async function(context) {
  const { lid } = context.query;

  const res = await fetch(`${api_url}location/${lid}`).then(
    (response) => {
      return response.json();
    }
  )
  const rids = [];
  for (let i = 0; i < res.residents.length; i++) {
    const resident = res.residents[i].split('/');
    rids.push(resident[resident.length-1]);
  };
  
  let residents_arr = await fetch(`${api_url}character/${rids}`).then(
    (response) => {
      return response.json();
    })
    if (rids.length == 0) {
      residents_arr = [];
    }

  return { location: res, residents: residents_arr };
};

export default Location;