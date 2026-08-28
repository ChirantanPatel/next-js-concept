"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import custom from './custom.module.css'
import other from './other.module.css'
import style from './style.module.css'
import outside from '../style/outside.module.css'
import { useState } from "react";
import Image from "next/image";
import Profile from '../public/next.svg';
import { Roboto } from 'next/font/google';
import { API_BASE_URL } from './config/contant';
import AddUsers  from './components/AddUsers';
import DisplayUsers from './components/DisplayUsers';

const roboto = Roboto({
  weight: '100',
  subsets: ['latin'],
  display: 'swap'
})

export default function Home() {

  const router = useRouter();

  const navigate = (name: string) => {
    router.push(name)
  }

  const [color, setColor] = useState("red");
  const { red } = style;
  console.log("process.env", process.env.SERVER_PASSWORD);
  console.log("process.env", process.env.DB_PASSWORD);
  console.log("process.env", process.env.CUSTOME_MODE);

  return (

    <main>

      <h1>Basic Routing | Make New Page</h1>
      <Link href='/login'>Go To Login Page</Link> <br />
      <Link href='/about'>Go To About Page</Link><br /><br /><br />
      <button onClick={() => navigate('/login')}>Go To Login Page</button><br /><br />
      <button onClick={() => navigate('/about')}>Go To About Page</button>
      <br /><br /><br />
      <h1>Fetch Data with API in Client Component</h1>
      <Link href='/productlist'>Go To Product List</Link> <br />
      <Link href='/users'>Loader Example Go To User List</Link> <br />


      <h1>*********Style CSS in Next JS*********</h1>
      <h1 className={custom.main}>CSS Modules with Next js</h1> <br />
      <h1 className={other.main}>CSS Modules with Next js</h1> <br />
      <h1 className={outside.main}>outside</h1> <br />

      <h1 className={color === "red" ? style.red : style.green}>Condition With Style</h1>
      <h2 style={{ backgroundColor: color === "red" ? 'red' : 'green' }}>Heading 2</h2>
      <button onClick={() => setColor("green")}>Update Color</button>

      <h3 id={style.orange}>Heading 3</h3>


      <h4 className={red}>Dummy Text</h4>
      <h4 className={red}>Dummy Text</h4>
      <h4 className={red}>Dummy Text</h4>
      <h4 className={red}>Dummy Text</h4>

      <h1>*********Image Optimization in Next JS*********</h1>
      <Image alt="profile" src={Profile} style={{ width: 100, height: 100 }} /> <br /><br />
      <Image alt="profile" src="https://static.vecteezy.com/system/resources/thumbnails/052/248/811/small/autumn-leaf-wallpaper-hd-wallpaper-free-photo.jpeg" width={100} height={100} />

      <h1>*********Font Optimization in next*********</h1>
      <h1 style={{ fontFamily: 'Roboto', fontWeight: 100 }}>Font with link tag in next</h1>
      <h1 className={roboto.className}>Font with Next js font feature</h1>

      <h1>*********Generate Meta Data in Next JS*********</h1>
      <Link href='/users'>Go To Meta Data Example </Link> <br />

      <h1>*********Enviroment Variables in Next JS*********</h1>
      {
        process.env.NODE_ENV === "development" ?
          <h3>You are on Development Mode</h3> :
          <h3>You are on Production Mode</h3>
      }
      <h2>API BASE URL : {API_BASE_URL} </h2>

       <h1>*********Redux Example*********</h1>
       <AddUsers />
       <DisplayUsers />
    </main>

  );
}
