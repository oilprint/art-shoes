import { Link } from 'react-router-dom';
import { errorPage } from '../assets/images';

const ErrorPage = () => {
  return (
    <section className="container py-10  ">
      <div className="relative">
        <div className=" absolute  top-[50%] inset-0 flex items-center flex-col xs:gap-4  gap-1 pb-10 ">
          <p className=" font-lucky sm:text-7xl xs:text-5xl text-3xl">Page not found</p>
          <Link
            to="/"
            className="inline-block cursor-pointer  px-10 py-2 text-base font-lucky rounded-[40px] border-2 bg-accent text-primary border-primary border-solid hover:bg-light transition ease-in-out duration-300 ">
            Go back
          </Link>
        </div>
        <img
          className=" block object-cover h-auto w-full rounded-[40px] border border-solid border-primary "
          src={errorPage}
          alt="Error Page"
          width={1170}
          height={690}
        />
      </div>
    </section>
  );
};

export default ErrorPage;
