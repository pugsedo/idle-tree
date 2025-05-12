import GridCell from './GridCell.tsx';
import type Plant from '../types/plant';

export default function Grid({
  cells,
  onPlantPlaced,
}: {
  cells: (Plant | null)[];
  onPlantPlaced: (plant: Plant, index: number) => void;
}) {
  return (
    <div className="grid grid-cols-5 gap-3 aspect-square min-w-80 w-full @sm:max-w-[100%] @md:max-w-100 @lg:max-w-120 p-5">
      {cells.map((cell, idx) => (
        <GridCell
          key={idx}
          cell_data={cell}
          index={idx}
          onPlantPlaced={onPlantPlaced}
        />
      ))}
    </div>
  );
}
