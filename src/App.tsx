import { useState } from 'react';
import Inventory from './components/Inventory.tsx';
import Grid from './components/grid.tsx';
import type Plant from './types/plant.tsx';

export default function App() {
  const [inventory, setInventory] = useState<Plant[]>([
    { name: 'Sapling', icon: '🌱' }
  ]);

  const [cells, setCells] = useState<(Plant | null)[]>(Array(25).fill(null));

  const handlePlantPlaced = (plant: Plant, index: number) => {
    if (cells[index]) return;
    const newCells = [...cells];
    newCells[index] = plant;
    setCells(newCells);

    setInventory((prev) => {
      const idx = prev.findIndex((p) => p.name === plant.name);
      if (idx === -1) return prev;
      const copy = [...prev];
      copy.splice(idx, 1);
      return copy;
    });
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="@container flex flex-col h-screen w-full max-w-2xl md:w-1/2 items-center justify-start pt-[10vh]">
        <h1 className="text-3xl font-bold mb-4">Idle Tree</h1>
        <p className="text-wrap p-5">Welcome to IdleTree! Drag your first plant into any of the cells below!</p>
        <Inventory items={inventory} />
        <Grid cells={cells} onPlantPlaced={handlePlantPlaced} />
      </div>
    </div>
  );
}
