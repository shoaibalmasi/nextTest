import Layout from "@/components/Layout"
import Link from "next/link"
import { useForm } from "react-hook-form";


function LoginPage(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data,errors);

    return(
    <Layout title="Login">
        <div className="flex justify-center items-center pt-72">

            <div className="bg-indigo-300 px-10 py-20 flex justify-cnter items-center rounded-xl">
                <form className="flex flex-col justify-between space-y-3" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="mb-4 text-xl">Login</h2>
                    <div>
                    <input 
                    className="rounded-xl  px-4 py-2 outline-0" 
                    type="text" 
                    placeholder="username" 
                    id="username" 
                    autoFocus
                    {...register("username",{required:true})}
                    />
                    {errors.username && <div className="text-red-500">username is required</div>}

                    </div>
                    <div>
                    <input 
                    className="rounded-xl  px-4 py-2" 
                    type="password" 
                    placeholder="password" 
                    id="password"
                    {...register("password",
                    {
                        required:true,
                        minLength:{
                            value:5,
                            message: 'at least 5 char'
                        }
                    })}
                    />
                    {errors.password && <div className="text-red-500">{errors.password.message || 'password is required'}</div>}
                    </div>
                    <button className="rounded-xl bg-gray-700 text-white px-4 py-2" >login</button>
                    <div>
                        <Link href='register'>Register</Link>
                    </div>
                </form>

            </div>

        </div>

    </Layout>

    )
}

export default LoginPage