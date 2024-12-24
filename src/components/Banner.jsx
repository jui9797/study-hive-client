import bannerImg from '../assets/WhatsApp Image 2024-12-24 at 12.41.54_ab8c28da.jpg'

const Banner = () => {
    return (
        <div>
            <div
                className="hero h-[250px] lg:h-[500px]"
                style={{
                    backgroundImage: `url(${bannerImg})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className=" border-2">
                        <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Collaborate, Create, Conquer</h1>
                        <p className="mb-5">
                            Level up your learning experince. Create assignments, collaborate with frinds, and achieve success together.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;