import { useState, useEffect } from 'react';

import type Plant from '../types/plant';
import type DragData from '../types/drag_data';

export default function GridCell({
  cell_data,
  index,
  onPlantPlaced,
}: {
  cell_data: Plant | null;
  index: number;
  onPlantPlaced: (plant: Plant, index: number) => void;
}) {
  const [item, setItem] = useState<Plant | null>(cell_data);

  useEffect(() => {
    setItem(cell_data);
  }, [cell_data]);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const data: DragData = JSON.parse(e.dataTransfer.getData('application/json'));
    if (!item) {
      setItem(data.plant);
      onPlantPlaced(data.plant, index);
    }
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="border border-gray-300 bg-gray-100 flex aspect-square items-center justify-center rounded-md cursor-pointer hover:bg-gray-200 transition"
    >
      {item?.icon}
    </div>
  );
}
