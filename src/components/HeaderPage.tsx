import Logo from "./Logo";
import MyMenu from "./MyMenu";

export default function HeaderPage() {
  return (
    <div className="w-full flex items-center justify-center relative">
      <div className="absolute top-2.5 left-2.5">
        <Logo />
      </div>
      <div className="absolute top-5 right-2">
        <MyMenu />
      </div>
      <h1 className="absolute top-2.5 left-60  text-white text-6xl">
        Александрова Дача
      </h1>
    </div>
  );
}
