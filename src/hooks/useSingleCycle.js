import { useEffect, useState } from "react"

const useSingleCycle = cycleId => {
    const [singleCycle, setSingleCycle] = useState({});

    useEffect(() => {
        const url = `https://frozen-taiga-96489.herokuapp.com/cycles/${cycleId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleCycle(data))
    }, [cycleId]);

    return [singleCycle, setSingleCycle];
}

export default useSingleCycle;