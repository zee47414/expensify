const Home = () => {
    return (
        <div className='bg-black flex flex-col gap-20 h-full w-full py-[50px] p-4 lg:px-52 ' >
            <div className="flex flex-col items-start">
                <p className="text-white text-xl">Hi, There</p>
                <p className="text-white text-3xl text-blue-200" >Zeeshan Khan</p>
            </div>
            <div className="flex flex-col gap-10 md:flex-row md:space-x-4">
                <div className="flex-1 border-2 border-blue-400 rounded-xl p-3 bg-[rgb(38,41,51)] relative">
                    <p className="text-white font-bold">Total Balance: ₹15,000</p>
                    <span className="bg-blue-500 w-5 h-5 rounded-full block absolute right-[5px] top-[5px]"></span>
                </div>
                <div className="flex-1 border-2 border-blue-400 rounded-xl p-3 bg-[rgb(38,41,51)] relative">
                    <p className="text-white font-bold">Spent: ₹15,000</p>
                    <span className="bg-blue-500 w-5 h-5 rounded-full block absolute right-[5px] top-[5px]"></span>
                </div>
                <div className="flex-1 border-2 border-blue-400 rounded-xl p-3 bg-[rgb(38,41,51)] relative">
                    <p className="text-white font-bold">Total Balance: ₹15,000</p>
                    <span className="bg-blue-500 w-5 h-5 rounded-full block absolute right-[5px] top-[5px]"></span>
                </div>
            </div>
        </div>
    )
}
export default Home;