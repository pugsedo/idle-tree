import DraggableItem from './DraggableItem';
import type Plant from '../types/plant';

export default function Inventory({ items }: { items: Plant[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-1 border border-gray-300 rounded-full mb-4 min-w-xs min-h-10">
      {items.map((plant, idx) => (
        <DraggableItem key={idx} plant_data={plant} />
      ))}
    </div>
  );
}
