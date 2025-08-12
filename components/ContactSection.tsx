"use client";

export default function ContactSection() {
  return (
    <section className="contactus-form-container w-full bg-gray-200 mt-6 flex items-center justify-center">
      <div className="container mx-auto max-w-[1200px] px-4">
        <h2 className="contactus-heading text-[5em] text-[#e84949] pt-8 text-center max-lg:text-[4em] max-md:text-[3em]">
          Contact Us
        </h2>
        <h3 className="contactus-subHeading text-[3rem] text-[#343d68aa] capitalize text-center max-lg:text-[2rem] max-md:text-[1.2rem]">
          Questions, thoughts, or just want to say Hello?
        </h3>

        <div className="contactus-form-container flex justify-center">
          <form className="form flex flex-col gap-8 w-[70%] mx-20 my-8 max-md:mx-12 max-md:my-12">
            <div className="formfield-container w-full">
              <input
                name="name"
                type="text"
                className="formfield w-full h-[42px] px-8 text-lg rounded-md shadow-[2px_2px_10px_#1f1f1f] font-medium border-none mt-7 max-md:w-[90%] max-md:px-5 max-md:text-sm max-md:mt-6"
                placeholder="Enter Your Name"
              />
              <input
                name="email"
                type="email"
                className="formfield w-full h-[42px] px-8 text-lg rounded-md shadow-[2px_2px_10px_#1f1f1f] font-medium border-none mt-7 max-md:w-[90%] max-md:px-5 max-md:text-sm max-md:mt-6"
                placeholder="Enter Your Email Address"
              />
              <input
                name="subject"
                type="text"
                className="formfield w-full h-[42px] px-8 text-lg rounded-md shadow-[2px_2px_10px_#1f1f1f] font-medium border-none mt-7 max-md:w-[90%] max-md:px-5 max-md:text-sm max-md:mt-6"
                placeholder="Enter Your Subject"
              />
              <textarea
                name="message"
                rows={10}
                className="formfield formfield-textarea w-full px-8 pt-4 text-lg rounded-md shadow-[2px_2px_10px_#1f1f1f] font-medium border-none mt-7 resize-none max-md:w-[90%] max-md:px-5 max-md:text-sm max-md:mt-6"
                placeholder="Enter Your Message"
              ></textarea>
            </div>

            <div>
              <button
                className="btn-pink w-[330px] border-none text-[0.8rem] my-4 bg-[#e84949] text-white px-6 py-3 rounded-full font-bold cursor-pointer hover:scale-90 transition-transform flex items-center justify-center gap-4 max-md:w-[100px] max-md:text-[0.4rem]"
                type="submit"
              >
                Send Message
                <i className="submit-icon fa-solid fa-paper-plane text-[1.5rem]"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
