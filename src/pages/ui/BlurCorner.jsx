const BlurCorner = ({right}) => {
  return (
    <div
      className={`absolute  ${right ? "-right-10 -top-36 w-[150px]" : "-left-10 -top-24 w-[300px]"}   h-[300px] z-0`}
      style={{
        borderRadius: "484px",
        background:
          "linear-gradient(148deg, rgba(150, 108, 158, 0.56) 42.59%, rgba(243, 184, 128, 0.56) 112.99%, rgba(243, 184, 128, 0.56) 190.84%)",
        filter: "blur(72px)",
      }}
    ></div>
  );
};

export default BlurCorner;
