import './AppMain.css';
import comics from '../comics.js';
function AppMain() {
    return (
        <main className='bg-main'>

            <div className='bg-comics'>
                <div className='cur-ser'>
                    <h2>CURRENT SERIES</h2>
                </div>
            </div>

            <div className='marginX'>
                <div className='p-comics'>
                    <ul className='flex wrap gap-20'>
                        {comics.map((comic, i) => (
                            <li key={i} className='cards'>
                                <div className='img-box'>
                                    <img src={comic.thumb} alt="" />
                                </div>
                                
                                <span>
                                    {comic.series}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
}

export default AppMain;