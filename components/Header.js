import Link from 'next/link';
import Search from './Search';
import NameForm from './Search';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <NameForm></NameForm>
  </div>
);

export default Header;