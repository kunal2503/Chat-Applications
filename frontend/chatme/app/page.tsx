import { cookies } from "next/headers";
import {redirect} from "next/navigation";

export default async function Home(){
   const cookiesStore = await cookies();
   const token = cookiesStore.get("token");
   // console.log(token)

   if(token){
    redirect("/chat");
   } else{
      redirect("/auth/login");
   }
}