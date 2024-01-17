// src/components/Checklist.js
import React, { useState } from 'react';
import ChecklistItem from './ChecklistItem';

interface ChecklistItem {
  id: number;
  text: string;
  checked: boolean;
}

const Checklist: React.FC = () => {
  const [items, setItems] = useState<ChecklistItem[]>([
    { id: 1, text: 'Era uma vez um coração partido', checked: false },
    { id: 2, text: 'Amor por engano', checked: false },
    { id: 3, text: 'Procurando Jane', checked: false },
  ]);

  const handleItemChange = (itemId: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">TBR</h1>
      {items.map((item) => (
        <ChecklistItem
          key={item.id}
          text={item.text}
          checked={item.checked}
          onChange={() => handleItemChange(item.id)}
        />
      ))}
    </div>
  );
};

export default Checklist;
