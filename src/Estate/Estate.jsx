const Estate = ({estate}) => {
    const {category} = estate;
    return (
        <div>
            <h2>Name: {category}</h2>
        </div>
    );
};

export default Estate;