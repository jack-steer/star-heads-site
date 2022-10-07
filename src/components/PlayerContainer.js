import './PlayerContainer.css';
import playerThumbnail from '../player_thumbnail.jpeg'; // with import
import { determineOverallColour } from '../helpers/playerHelper';

function PlayerContainer() {
    return (
        <div className='player-container'>
            <div className='player-row'>
                <img src={playerThumbnail} alt={'Players thumbnail'} className='player-thumbnail' />
                <p className='player-name'>Harry Kane</p>
                <div className='player-overall' style={{backgroundColor: determineOverallColour(69)}}>89</div>
            </div>
            <div className='player-row bottom'>
                <p className='player-age'>29</p>
                <p className='player-club'>Tottenham Hotspur</p>
                <p className='player-league'>Premier League</p>
                <p className='player-nationality'>England</p>
            </div>
        </div>
    );
}

export default PlayerContainer;
