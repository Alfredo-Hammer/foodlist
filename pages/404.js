import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from 'next/image'

const NotFondPage = () => {

    const router = useRouter();

    useEffect(() => {
       setTimeout(() => {
           router.push('/')
       }, 3000); 
    },[])

    return ( 
        <>
        <div className="not-found">
            <h2>Oooooops...</h2>
            <h2>La pagina no responde</h2>
            <p>Volver a inicio <Link href={'/'}><a>Home</a></Link> </p>
            </div>

            <div className="image">
                <Image src={'/notfound.png'} width={300} height={250} />

            </div>
            
        </>
     );
}
 
export default NotFondPage;