import type Plant from "../types/plant";

export default function DraggableItem({ plant_data }: { plant_data: Plant }) {
    return (
        <div
            draggable
            onDragStart={(e) => {
                e.dataTransfer.setData('application/json', JSON.stringify({ plant: plant_data }));
            }}
            className="w-12 h-12 text-xl text-white flex items-center justify-center rounded-4xl hover:bg-gray-100 transition duration-200 ease-in-out cursor-grab"
            >
            🌱
        </div>
    );
}
