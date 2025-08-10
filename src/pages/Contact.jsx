import Swal from "sweetalert2";
import contactImg from "../assets/contact-us.jpg";
import mentor1 from "../assets/mentor-1.jpg";
import mentor2 from "../assets/mentor-2.jpg";
import mentor3 from "../assets/mentor-3.jpg";
import mentor4 from "../assets/mentor-4.jpg";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const note = form.note.value;
    const userInfo = { name, email, subject, note };
    console.log(userInfo);

    Swal.fire({
      title: "Thank you, we will contact you soon",
      showClass: {
        popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
      },
      hideClass: {
        popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
      },
    });
    form.reset();
  };

  return (
    <>
      <div
        className="hero min-h-[80vh]"
        style={{
          backgroundImage: `url('${contactImg}')`,
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className=" pt-8">
            <h1 className="mb-5 text-3xl lg:text-4xl font-bold">
              Join the Learning Community – Stay Connected!
            </h1>
            <p className="mb-5">
              Reach out to us and let’s make your learning journey smoother and
              more enjoyable.
            </p>
          </div>
        </div>
      </div>

      <div className="hero bg-base-200 min-h-screen my-4 lg:my-10">
        <div className="flex max-w-[80rem] gap-[1rem] p-[1rem] align-top flex-col lg:flex-row-reverse">
          <div className=" lg:text-left lg: pt-10">
            <h1 className=" text-3xl lg:text-4xl font-bold text-gray-700">
              Get in touch with us
            </h1>
            <p className="py-6 text-gray-700">
              We believe in collaborative learning! If you have ideas, need
              assistance, or want to be a part of our growing study community,
              reach out today. Let’s learn, grow, and succeed together!
            </p>
            <h1 className=" text-2xl lg:text-4xl font-bold text-gray-700">
              Our Mentor
            </h1>
            <p className="py-4 text-gray-700">
              Get guidance from experienced mentors who are passionate about
              helping you succeed. Learn from industry experts, receive valuable
              feedback, and enhance your skills through personalized mentorship.
              Our mentors are here to help you every step of the way. Get
              personalized guidance, expert advice, and hands-on learning from
              professionals who care about your success.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 mt-4 gap-4 text-gray-700">
              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-20 h-20 rounded-full"
                  src={mentor1}
                  alt="menotr-1"
                />
                <p>mentor</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-20 h-20 rounded-full"
                  src={mentor2}
                  alt="menotr-1"
                />
                <p>mentor</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-20 h-20 rounded-full border-2"
                  src={mentor3}
                  alt="menotr-1"
                />
                <p>mentor</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-20 h-20 rounded-full"
                  src={mentor4}
                  alt="menotr-1"
                />
                <p>mentor</p>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-lg">
            <form onSubmit={handleSubmit} className="card-body w-full">
              <h1 className="text-xl font-bold text-gray-700">Fill the form</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Write your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="write a subject"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Note</span>
                </label>
                <textarea
                  type="text"
                  name="note"
                  placeholder="write a note"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-[#0AB99D] text-white hover:bg-transparent hover:text-[#0AB99D] hover:border-2 hover:border-[#0AB99D] font-bold">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
