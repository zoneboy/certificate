import React, { useState, useCallback, useMemo } from 'react';
import Certificate from './components/Certificate';
import InputForm from './components/InputForm';
import { CertificateData, INITIAL_DATA } from './types';

function App() {
  const [data, setData] = useState<CertificateData>(INITIAL_DATA);

  const handleInputChange = useCallback((key: keyof CertificateData, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const isFormComplete = useMemo(() => {
    return Object.values(data).every((value) => (value as string).trim() !== '');
  }, [data]);

  const handlePrint = useCallback(() => {
    if (isFormComplete) {
      window.print();
    }
  }, [isFormComplete]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">♻️</span>
            <h1 className="text-xl font-bold text-gray-800">RAN Certificate Generator</h1>
          </div>
          <div className="text-sm text-gray-500 hidden sm:block">
            Recyclers Association of Nigeria
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Column: Form */}
          <div className="w-full lg:w-1/3 flex-shrink-0 lg:sticky lg:top-24">
            <InputForm 
              data={data} 
              onChange={handleInputChange} 
              onGenerate={handlePrint}
              isReady={isFormComplete}
            />
            
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-md p-4 text-sm text-blue-800">
                <p className="font-bold mb-1">💡 Tip:</p>
                <p>Ensure your spelling is correct. The dates will appear exactly as you select them (YYYY-MM-DD).</p>
            </div>
          </div>

          {/* Right Column: Preview */}
          <div className="w-full lg:w-2/3 flex flex-col items-center">
             <div className="w-full flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-700">Live Preview</h2>
                <span className="text-xs font-mono bg-gray-200 px-2 py-1 rounded text-gray-600">A4 Landscape</span>
             </div>
             
             {/* Preview Container - Scaled to fit screen */}
             <div className="relative w-full overflow-hidden bg-gray-300 rounded shadow-inner border border-gray-400 p-4 flex justify-center items-center">
                <div 
                    className="origin-top transform-gpu transition-transform duration-200 ease-out bg-white shadow-2xl"
                    style={{ 
                        transform: 'scale(0.65)', // Scale down for preview on desktop
                        marginBottom: '-25%' // Compensate for scale whitespace
                    }}
                >
                    <Certificate data={data} />
                </div>
             </div>
          </div>

        </div>
      </main>

      {/* Hidden Print Area */}
      <div id="certificate-print-area">
          <div id="certificate-scaler">
            <Certificate data={data} />
          </div>
      </div>

    </div>
  );
}

export default App;