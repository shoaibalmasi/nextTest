import Layout from "@/components/Layout"


function LoginPage(){

    return(
    <Layout title="Login">
        <div className="flex justify-center items-center pt-72">

            <div className="bg-indigo-300 px-10 py-20 flex justify-cnter items-center rounded-xl">
                <form className="flex flex-col justify-between space-y-3">
                    <input className="rounded-xl  px-4 py-2" type="text" placeholder=" username"/>
                    <input className="rounded-xl  px-4 py-2" type="password" placeholder=" password"/>
                    <button className="rounded-xl bg-gray-700 text-white px-4 py-2" >login</button>
                </form>

            </div>

        </div>

    </Layout>

    )
}

export default LoginPage