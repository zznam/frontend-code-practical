
const EmployeeGallery = ({fullName, image}) => {
  return (
    <div className="flex flex-col items-center sm:gap-10 mt-12">
      <div className='w-12 h-12'>
        <img
          src={image}
          className="object-scale-down rounded-xl cursor-pointer shadow-lg sm:shadow-none"
          alt={fullName}
          loading="lazy"
        />
      </div>
      <h1 className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2"> {fullName}</h1>
    </div>
  );
};

export default EmployeeGallery;
