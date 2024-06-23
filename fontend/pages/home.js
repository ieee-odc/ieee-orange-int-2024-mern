
import {useEffect,useState} from "react"
import Getting from "./geting"


const Home= ()=>{
    const [workout, setWorkout]=useState(null);

    useEffect(()=>{
        const fetching = async ()=>{
            const rep = await fetch("http://localhost:4000/api/workouts")
            const res = await rep.json()
            if (rep.ok){
                setWorkout(res);
            }
        }
        fetching()
    },[])
    return(
        <div className="Home">
            <div className="workouts">
                {workout && workout.map((work)=>{
                    <Getting id={work._id} title={work.title} />

                })}
            </div>
        </div>
    );
}

export default Home;
