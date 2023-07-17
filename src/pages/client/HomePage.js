import Home from "@components/client/home/Home";
import HomeProvider from "@providers/client/HomeProvider";

const HomePage = (props) => {
  return (
    <main>
      <HomeProvider>
        <Home />      
      </HomeProvider>
    </main>
  )
}

export default HomePage;