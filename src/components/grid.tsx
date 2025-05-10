export default function Grid() {
    return (
        <div className="grid grid-cols-5 gap-3 aspect-square min-w-80 w-full @sm:max-w-[100%] @md:max-w-100 @lg:max-w-120 p-5">
            {Array.from({ length: 25 }, (_, index) => (
                <div
                    key={index}
                    className="border border-gray-300 bg-gray-100 flex items-center justify-center rounded-md"
                >
                    {index + 1}
                </div>
            ))}
        </div>
    )
}