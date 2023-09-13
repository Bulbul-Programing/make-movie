import { useEffect, useState } from 'react'
import Cart from "../cart/Cart";
import HireActor from '../hireActor/HireActor';

const Carts = () => {
    const [actors, setActors] = useState([])
    const [hireActor, setHireActor] = useState([])
    const [balance, setBalance] = useState(0)
    const [remainingBalance, setRemainingBalance] = useState(0)

    useEffect(() => {
      fetch('data.json')
      .then(res => res.json())
      .then(data => setActors(data))
    }, [])

    const hireHandleClicked = (actor) => {
        console.log(actor);

       const handleDuplicate = hireActor.find(singleActor => singleActor.id === actor.id)
       
        if(handleDuplicate){
            return alert('Already Hire this parson')
        }
        else{
            if(balance + actor.salary > 20000){
                return alert('Insufficient Budget')
            }
            else{
                const clickActor = [...hireActor, actor]
                setBalance(balance + actor.salary)
                setRemainingBalance(20000 - balance - actor.salary)
                setHireActor(clickActor)
            }
        }
    }
  
    return (
        <div className='flex m-20 '>
            <div className='grid grid-cols-2 gap-5 w-2/3'>
                {
                    actors.map(actor => <Cart key={actor.id} actor={actor} hireHandleClicked={hireHandleClicked}></Cart>)
                }
            </div>
            <div className='w-1/3 pl-8'>
                <div className='bg-blue-200 p-4 rounded-lg'>
                    <h1 className='text-3xl font-semibold mb-2'>Total Hire: {hireActor.length}</h1>
                    <h1 className='text-xl font-semibold mb-2'>Remaining Balance:{remainingBalance}</h1>
                    <h1 className='text-xl font-semibold'>Total Cost:{balance}</h1>
                </div>
                {
                    hireActor.map(actor => <HireActor key={actor.id} actor={actor}></HireActor>)
                }
            </div>
        </div>
    );
};

export default Carts;