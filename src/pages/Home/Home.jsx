import './Home.css';
import Hero from '../../components/Hero/Hero';
import MagicMashroom from '../../components/MagicMashroom/MagicMashroom';
import EmailSection from '../../components/EmailSection/EmailSection';
import NftMainCard from '../../components/NftMainCard/NftMainCard';
import TopCreators from '../../components/TopCreators/TopCreators';
import RankingCard from '../../components/RankingCard/RankingCard';

export default function Home() {
  return(
    <>
      {/* <Hero />
      <MagicMashroom />
      <TopCreators/>
      <EmailSection />
      <NftMainCard /> */}
      <RankingCard
        id="1"
        img="./public/Images/ArtistAvatar/Keepitreal.png"
        title="Jaydon Ekstrom Bothman"
        percent="+1.41%"
        description="602"
        sales="12.4 ETH"
      />
    </>
  );
}


