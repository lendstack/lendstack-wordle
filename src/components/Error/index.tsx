export default function Error(props: any) {
    return (
        <div className="absolute top-20 w-full grid place-items-center dark:bg-slate-800">
            <div className="w-fit px-8 py-2 bg-gray-800 text-white text-center">
                {props.children}
            </div>
        </div>
    );
}