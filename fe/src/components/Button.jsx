export function Button({children}){
    return <div className="flex justify-center py-3 text-white rounded-xl">
    <button className="bg-black text-white p-2  rounded-2xl hover:text-black hover:bg-red-400 w-full max-w-[250px]">{children}</button>
</div>
}