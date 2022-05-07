import { useEffect, useState } from "react";

const useBicycle = () => {
    const [bicycles, setBicycles] = useState([]);
    useEffect(() => {
        fetch('https://frozen-taiga-96489.herokuapp.com/cycles')
            .then(res => res.json())
            .then(data => setBicycles(data))
    }, []);

    return [bicycles, setBicycles];

}

export default useBicycle;