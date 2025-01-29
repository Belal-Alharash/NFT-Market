import './TopCreators.css';
import CreatorsCard from '../CreatorsCard/CreatorsCard';
import { dataHomeTopCreators } from "../../data/dataHomeTopCreators";
import { Link } from 'react-router-dom'; // Make sure to import from 'react-router-dom'

export default function TopCreators() {
  return (
    <div className='top-creators'>
      <div className="creators">
        {dataHomeTopCreators.map((creator) => (
          <Link key={creator.id} to={`/artist/${creator.id}`}>
            <CreatorsCard
              id={creator.id}
              img={creator.img}
              title={creator.title}
              sales={creator.sales}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}