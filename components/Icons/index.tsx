import Image from "next/image";

type IconsProps = {
  src:
    | "/assets/icons/facebook.svg"
    | "/assets/icons/twitter.svg"
    | "/assets/icons/instagram.svg";
  alt: "facebook" | "twitter" | "instagram";
};

const Icons = ({ src, alt }: IconsProps) => {
  return <Image src={src} alt={alt} width={16} height={16} />;
};

export default Icons;
