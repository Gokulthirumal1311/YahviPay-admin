import React from 'react'
import  {SoundBoxQuickNav}  from './SoundBoxQuickNav';

export const AdminPage = () => {
    return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Sound Box List</h2>
      <SoundBoxQuickNav soundBoxId="SBX-12345" />
    </div>
  );
}
