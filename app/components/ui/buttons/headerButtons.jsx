import Link from "next/link";

export default function LoginBtn() {
  return <Link href="/login" className="px-6 py-2 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
    <h1>Login</h1>
  </Link>;
}

export function SignupBtn() {
  return <Link href="/signup" className="bg-black text-white dark:bg-white dark:text-black px-6 py-2 rounded-lg">
    <h1>Signup</h1>
  </Link>;
}

export function LinkBtn({title, url}){
    return(
        <Link href={url} className="text-zinc-600 dark:text-zinc-300" >
            {title}
        </Link>
    )
}
