import React from 'react';

const BudgetManaging = () => {
    return (
        <div className='container mx-auto my-16'>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                                <button className="btn btn-primary">Calculate</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BudgetManaging;