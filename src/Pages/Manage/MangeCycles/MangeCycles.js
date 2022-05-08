import React from 'react';
import useBicycle from '../../../hooks/useBicycle';
import Bicycle from '../../Home/Bicycle/Bicycle';

const MangeCycles = () => {
    const [cycles] = useBicycle();
    return (
        <div className='container'>
            <div className="bicycle-header ">
                <div className="hr-roll"></div>
                <h2 className="py-5 text-color">Manage Cycles</h2>
                <div className="hr-roll"></div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 col">
                {
                    cycles.map(cycle => <Bicycle
                        key={cycle._id}
                        cycle={cycle}
                    ></Bicycle>)
                }
            </div>
        </div>
    );
};

export default MangeCycles;