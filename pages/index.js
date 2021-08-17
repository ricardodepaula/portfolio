import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';
import Cover from '../src/components/commons/Cover';

export default function Home() {
  return (
    <div style={{
      flex: '1',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <Menu />
      <Cover />
      <Footer />
    </div>
  );
}
