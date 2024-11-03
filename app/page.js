import Image from "next/image";
import HeaderTemplateComponent from "./components/HeaderTemplateComponents";
import Hero from "./hero/page";
import Categories from "./categories/page";

export default function Home() {
	return <>
	<Hero />
	<Categories />	
	</>;
}
