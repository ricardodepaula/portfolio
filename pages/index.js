import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';
import Cover from '../src/components/commons/Cover';
import WrapperProjetos from '../src/components/commons/WrapperProjetos';

export default function Home() {
  return (
    <div style={{
      flex: '1',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <Cover />
      <Menu />
      <WrapperProjetos />
      <Footer />
    </div>
  );
}
