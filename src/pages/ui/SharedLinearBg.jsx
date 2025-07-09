import linearBg from '../../assets/images/linear-bg2.png';

const SharedLinearBg = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
      <img
        src={linearBg}
        alt="linear background"
        className="w-full h-full  object-cover"
      />
    </div>
  );
};

export default SharedLinearBg;
