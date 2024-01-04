import Button from "@/components/Button";
import Icons from "@/components/Icons";
import IllustrationMockups from "@/components/IllustrationMockups";
import Logo from "@/components/Logo";
import Text from "@/components/Text";
import Title from "@/components/Title";

const Home = () => {
  return (
    <>
      <header className="w-[303px]">
        <Logo />
      </header>
      <main className="flex w-[303px] flex-col gap-20">
        <IllustrationMockups />
        <div className="flex flex-col gap-6 text-center">
          <Title />
          <Text />
          <Button />
        </div>
      </main>
      <footer className="flex flex-row gap-6">
        <Icons />
      </footer>
    </>
  );
};

export default Home;
