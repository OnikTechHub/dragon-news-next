import { redirect } from "next/navigation"; 

const default_catagory_id = "01";

const Home = async () => {
  
  redirect(`/category/${default_catagory_id}`);

};

export default Home;