import Image from "next/image";
import HeaderTemplateComponent from "./components/HeaderTemplateComponents";
import Hero from "./hero/page";
import Categories from "./categories/page";
import RecipesPage from "./recipes/page";
import HomeCTA from "./components/HomeCTA";
import InstagramFeed from "./components/InstagramFeed";

export default function Home() {
	return <>
	<Hero />
	<Categories />
	<RecipesPage />	
	<HomeCTA />
	<InstagramFeed />
	</>;
}
