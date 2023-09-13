const Cart = ({ actor, hireHandleClicked }) => {
    const {name, role, image, salary} = actor
    return (
        <>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="rounded-full mt-6" src={image}/></figure>
                <div className="px-8 py-4">
                    <h2 className="card-title">{name}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, a.</p>
                    <div className="flex flex-col my-4 justify-between">
                        <h4 className="text-xl font-semibold">Salary: {salary} $</h4>
                        <h4 className="text-xl font-semibold">Profession: {role}</h4>
                    </div>
                    <div className="card-actions justify-center mt-4">
                        <button onClick={()=>hireHandleClicked(actor)} className="btn px-7 bg-blue-500 text-white hover:text-black">Hire</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;