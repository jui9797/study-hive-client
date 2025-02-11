import contactImg from '../assets/contact.jpg'

const Contact = () => {
    return (
        <>
            {/* banner */}
            <div
                className="hero min-h-[80vh]"
                style={{
                    backgroundImage: `url('${contactImg}')`,
                    
                    
                }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className=" pt-8">
                        <h1 className="mb-5 text-3xl lg:text-4xl font-bold">Join the Learning Community – Stay Connected!</h1>
                        <p className="mb-5">
                         Reach out to us and let’s make your learning journey smoother and more enjoyable.
                        </p>
                        
                    </div>
                </div>
            </div>

            {/* contat form */}
            <div className="hero bg-base-200 min-h-screen my-4">
                <div className="flex max-w-[80rem] gap-[1rem] p-[1rem] align-top flex-col lg:flex-row-reverse">
                    <div className=" lg:text-left">
                        <h1 className=" text-3xl lg:text-5xl font-bold text-gray-700">Get in touch with us</h1>
                        <p className="py-6 text-gray-700">
                        We believe in collaborative learning! If you have ideas, need assistance, or want to be a part of our growing study community, reach out today. Let’s learn, grow, and succeed together!
                        </p>
                        <h1 className=" text-2xl lg:text-4xl font-bold text-gray-700">Our Mentor</h1>
                        <div></div>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-lg">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Write your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input type="text" placeholder="write a subject" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Note</span>
                                </label>
                                <textarea type="text" placeholder="write a note" className="input input-bordered" required />
                            </div>
                            
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;