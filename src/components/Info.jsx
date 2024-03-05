import { Link } from 'react-router-dom';
import { ButtonPrimary } from './index';

const Info = ({ title, description, imageUrl, onClick, href = false, label }) => {
  return (
    <div className="grow flex flex-col justify-center items-center ">
      <img src={imageUrl} alt={description} width={120} height={120} className="mb-5" />

      <h2 className="font-lucky mb-2 mt-1 text-2xl">{title}</h2>
      <p className="font-inter text-center font-medium text-xl max-w-[200px] w-full mb-8">
        {description}
      </p>
      <ButtonPrimary label={label} onClick={onClick} href={href} />
    </div>
  );
};

export default Info;
