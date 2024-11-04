import Image from "next/image";
import HeaderTemplateComponent from "./components/HeaderTemplateComponents";
import Hero from "./hero/page";
import Categories from "./categories/page";
import RecipesPage from "./recipes/page";
import HomeCTA from "./components/HomeCTA";
import InstagramFeed from "./components/InstagramFeed";
import FoodCard from "./components/RecipesCard";
import FoodItem from "./components/FoodItem";
import NewsletterCTA from "./components/NewsletterSection";

export default function Home() {
	return <>
	<Hero />
	<Categories />
	<RecipesPage />	
	<HomeCTA />
	<InstagramFeed />
	<FoodItem />
	<NewsletterCTA />
	</>;
}
