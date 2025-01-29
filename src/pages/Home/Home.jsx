import './Home.css';
import Hero from '../../components/Hero/Hero';
import MagicMashroom from '../../components/MagicMashroom/MagicMashroom';
import EmailSection from '../../components/EmailSection/EmailSection';
import NftMainCard from '../../components/NftMainCard/NftMainCard';
import TopCreators from '../../components/TopCreators/TopCreators';

export default function Home() {
  return(
    <>
       <Hero />
      <MagicMashroom />
      <TopCreators/>
      <EmailSection />
      <NftMainCard /> 
      
    </>
  );
}


