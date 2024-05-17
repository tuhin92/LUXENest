import AllData from "./AllData";

const BudgetManaging = () => {
    return (
        <div className='container mx-auto my-16'>
            <div className="hero">
                <div className="">
                    <div className="card shrink-0 w-[450px]  shadow-2xl ">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Place</span>
                                </label>
                                <input type="text" placeholder="Place" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Amount</span>
                                </label>
                                <input type="text" placeholder="Enter your amount" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-info">Calculate</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <AllData></AllData>
        </div>
    );
};

export default BudgetManaging;