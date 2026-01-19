import CaseStudyDetailsPageCardsRendere from "../resuseable/CaseStudyDetailsPageCardsRendere";

const Outcome = ({ outcome = "[]" }) => {
  return (
    <div className=" md:max-w-[85%] 2xl:max-w-[1400px] mx-auto pb-10">
      <div className=" w-full">
        {/* header  */}
        <div className="flex flex-col justify-center items-center">
          <img
            src="../caseStudiesAssets/detailsImages/Outcomes-2.png"
            className="h-[55px]"
            alt=""
          />
          <h3 className="text-center text-[38px] mt-5 font-light">OUTCOMES</h3>
        </div>
        <div className="grid grid-cols-1 sm:px-0 px-4 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-9 sm:pt-20">
          {outcome?.map((data, index) => (
            <CaseStudyDetailsPageCardsRendere key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Outcome;
