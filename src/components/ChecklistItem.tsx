// src/components/ChecklistItem.js
import React from 'react';

interface ChecklistItemProps {
  text: string;
  checked: boolean;
  onChange: () => void;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ text, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="mr-2"
        checked={checked}
        onChange={onChange}
      />
      <p className={checked ? 'line-through text-gray-500' : ''}>{text}</p>
    </div>
  );
};

export default ChecklistItem;
