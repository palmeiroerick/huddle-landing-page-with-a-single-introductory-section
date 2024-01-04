import Image from "next/image";

const IllustrationMockups = () => {
  return (
    <div className="relative h-52 w-[19rem] lg:w-[120rem] lg:h-[32rem]">
      <Image
        src={"/assets/illustration-mockups.svg"}
        alt=""
        objectFit="cover"
        fill
      />
    </div>
  );
};

export default IllustrationMockups;
