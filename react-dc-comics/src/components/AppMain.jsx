import './AppMain.css';
import comics from '../comics.js';
function AppMain() {
    return(
        <main >
            <div className='bg-comics'>
                <div className='cur-ser'>
                    <h2>CURRENT SERIES</h2>
                </div>
            </div>
            <div className='bg-main'>
                <ul className='flex wrap'>
                    {comics.map((comic, i) => (
                        <li key={i}>
                            <img src={comic.thumb} alt="" />
                            <span>
                                {comic.series}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

        </main>
    );
}

export default AppMain;