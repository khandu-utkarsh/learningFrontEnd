import styles from "./homepage.module.css"
import Featured from "@/components/featured/Featured"
import Categories from "@/components/categories/Categories"
import CardList from "@/components/CardList/CardList"
import Menu from "@/components/menu/Menu"

export default function Home({searchParams}) {

  const page = parseInt(searchParams.page) || 1;

  return <div className="styles.container">
    <Featured />
    <Categories />
    <div className= {styles.content}>
      <CardList page={page}></CardList>
      <Menu />
    </div>


  </div>;
}
