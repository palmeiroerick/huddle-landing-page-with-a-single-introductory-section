import Button from "@/components/Button";
import Icons from "@/components/Icons";
import IllustrationMockups from "@/components/IllustrationMockups";
import Logo from "@/components/Logo";
import Text from "@/components/Text";
import Title from "@/components/Title";

const Home = () => {
  return (
    <>
      <header>
        <Logo />
      </header>
      <main>
        <IllustrationMockups />
        <Title />
        <Text />
        <Button />
      </main>
      <footer>
        <Icons src="/assets/icons/facebook.svg" alt="facebook" />
        <Icons src="/assets/icons/twitter.svg" alt="twitter" />
        <Icons src="/assets/icons/instagram.svg" alt="instagram" />
      </footer>
    </>
  );
};

export default Home;
