import { redirect } from "next/navigation";


export default function Home() {
  //no parenthesis around folder name
  //redirect('./pages/WelcomePage')
  //with parenthesis around folder name
  redirect('./WelcomePage');
}
