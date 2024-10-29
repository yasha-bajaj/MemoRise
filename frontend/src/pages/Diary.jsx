import React, { useState, useEffect } from 'react';

function Diary() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState(null);
  const [memories, setMemories] = useState([]);
  const [modalImage, setModalImage] = useState(null);

  // Load memories from local storage on component mount
  useEffect(() => {
    const storedMemories = JSON.parse(localStorage.getItem('memories')) || [];
    setMemories(storedMemories);
  }, []);

  // Save memories to local storage
  const saveMemory = (name, date, imageUrl) => {
    const updatedMemories = [...memories, { name, date, imageUrl }];
    setMemories(updatedMemories);
    localStorage.setItem('memories', JSON.stringify(updatedMemories));
  };

  // Add memory
  const addMemory = () => {
    if (!name || !date || !image) {
      alert('Please fill all fields and select an image.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const imageUrl = reader.result;
      saveMemory(name, date, imageUrl);
      setName('');
      setDate('');
      setImage(null);
    };
    reader.readAsDataURL(image);
  };

  // Delete memory
  const deleteMemory = (index) => {
    const updatedMemories = memories.filter((_, i) => i !== index);
    setMemories(updatedMemories);
    localStorage.setItem('memories', JSON.stringify(updatedMemories));
  };

  // Open modal for image zoom
  const openImageModal = (imageUrl) => {
    setModalImage(imageUrl);
  };

  // Close modal
  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div style={{ margin: 0, padding: 0, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: 'hsl(0, 0%, 100%)' }}>
      <div style={{ width: '100%', padding: '10px', backgroundColor: 'hsl(41, 86%, 58%)', color: 'white', fontSize: '2rem', textAlign: 'left', paddingLeft: '20px' }}>
        MemoRise
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', flex: 1 }}>
        {/* Upload Section */}
        <div style={{ width: '25%', padding: '20px', backgroundColor: '#fefefe', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'left' }}>
          <h2>Add Memories</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            required
            style={{ width: '80%', margin: '10px 0', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            style={{ width: '80%', margin: '10px 0', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            accept="image/*"
            style={{ width: '80%', margin: '10px 0', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
          <button onClick={addMemory} style={{ padding: '10px 20px', backgroundColor: 'hsl(200, 88%, 48%)', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '5px', width: '80%', margin: '10px 0' }}>
            Add Memory
          </button>
          
        </div>

        {/* Hero Section */}
        <div style={{ width: '75%', overflowX: 'auto', padding: '20px', backgroundColor: 'rgb(252, 220, 125)', display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'flex-start' }} id="memoryGallery">
          {memories.map((memory, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', width: '300px', position: 'relative' }} className="memory-card">
              <img
                src={memory.imageUrl}
                alt="Memory"
                onClick={() => openImageModal(memory.imageUrl)}
                style={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', cursor: 'pointer', borderRadius: '10px' }}
              />
              <div style={{ backgroundColor: 'white', width: '100%', textAlign: 'center', padding: '10px', borderRadius: '0 0 10px 10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', position: 'relative' }} className="memory-description">
                <span style={{ position: 'absolute', top: '5px', right: '10px', cursor: 'pointer', color: 'red', fontWeight: 'bold' }} className="delete-icon" onClick={() => deleteMemory(index)}>
                  X
                </span>
                <p><strong>{memory.name}</strong></p>
                <p>{memory.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Image Zoom */}
      {modalImage && (
        <div style={{ display: 'block', position: 'fixed', zIndex: 1, left: 0, top: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.8)', overflow: 'auto' }} className="modal" onClick={closeModal}>
          <span style={{ position: 'absolute', top: '20px', right: '45px', fontSize: '40px', fontWeight: 'bold', color: 'white', cursor: 'pointer' }} className="close">&times;</span>
          <img src={modalImage} alt="Zoomed Memory" style={{ margin: '10% auto', display: 'block', width: '80%', maxWidth: '600px' }} className="modal-content" />
        </div>
      )}
    </div>
  );
}

export default Diary;
