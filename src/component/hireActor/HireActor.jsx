const HireActor = ({ actor }) => {
    const { name, role, image } = actor
    return (
        <div className="flex rounded-md bg-slate-200 my-3">
            <img className="w-[60px] rounded-l-md" src={image} alt="Shoes" />
            <div className="ml-4 py-2">
                <h2 className="card-title">{name}</h2>
                <p className="text-sm font-semibold">{role}</p>
            </div>
        </div>
    );
};

export default HireActor;