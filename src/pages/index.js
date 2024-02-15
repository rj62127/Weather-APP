import Link from "next/link";


const Home = () => {
  return (
    <div>
      <h1>Welcome to Weather App</h1>
      <Link href="/search">
        Search Weather
      </Link>
    </div>
  );
};

export default Home;
