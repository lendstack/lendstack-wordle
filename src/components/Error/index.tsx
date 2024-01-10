type error = {
    children: string;
}

export default function Error(props: error) {
    return (
        <div className="absolute top-20 w-full grid place-items-center dark:bg-slate-800">
            <div className="w-fit px-8 py-2 bg-gray-800 dark:bg-slate-200 dark:text-black text-white text-center">
                {props.children}
            </div>
        </div>
    );
}