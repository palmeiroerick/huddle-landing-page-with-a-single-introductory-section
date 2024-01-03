import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src={"/assets/logo.svg"}
      alt="Huddle"
      width={126}
      height={31.17}
    />
  );
};

export default Logo;
