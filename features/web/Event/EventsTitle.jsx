const EventsTitle = ({ title }) => {
  return (
    <div>
      <div className="md:px-5 ">
        <hr className="border border-black text-center" />
      </div>
      <h2 className="text-center text-green-600 text-xl font-bold md:mb-14 mb-10 mt-6 capitalize">
        {title}
      </h2>
    </div>
  );
};

export default EventsTitle;
